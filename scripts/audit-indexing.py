"""Audit sitemap targets, canonical signals, exclusions, and internal links.

Run against production or a local production build with --base. Uses only the
Python standard library and does not submit URLs or request indexing.
"""

import argparse
import json
import sys
from html.parser import HTMLParser
from urllib.error import HTTPError
from urllib.parse import urljoin, urlsplit, urlunsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
from xml.etree import ElementTree

PRODUCTION = "https://getpossibleminds.com"


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


class PageSignals(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.in_head = False
        self.canonicals = []
        self.robots = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "head":
            self.in_head = True
        if tag == "link" and "canonical" in attrs.get("rel", "").split():
            self.canonicals.append((attrs.get("href", ""), self.in_head))
        if tag == "meta" and attrs.get("name", "").lower() in ("robots", "googlebot"):
            self.robots.append(attrs.get("content", "").lower())
        if tag == "a" and attrs.get("href"):
            self.links.append(attrs["href"])

    def handle_endtag(self, tag):
        if tag == "head":
            self.in_head = False


def canonical_key(url):
    parts = urlsplit(url)
    return urlunsplit((parts.scheme, parts.netloc, parts.path or "/", parts.query, parts.fragment))


def fetch(url):
    request = Request(url, headers={"User-Agent": "PossibleMinds-IndexingAudit/1.0"})
    try:
        response = build_opener(NoRedirect()).open(request, timeout=30)
    except HTTPError as error:
        response = error
    with response:
        return response.code, response.read().decode("utf-8", errors="replace"), response.headers


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", default=PRODUCTION)
    parser.add_argument("--output")
    parser.add_argument("--check-www", action="store_true", help="Also check www TLS and host redirect")
    args = parser.parse_args()
    base = args.base.rstrip("/")
    errors, rows, internal_paths = [], [], set()

    def check(condition, message):
        if not condition:
            errors.append(message)

    def page(path):
        status, body, headers = fetch(base + path)
        signals = PageSignals()
        signals.feed(body)
        return status, signals, headers

    status, xml, _ = fetch(base + "/sitemap.xml")
    check(status == 200, "Sitemap must return 200")
    root = ElementTree.fromstring(xml)
    urls = [node.text for node in root.findall("{*}url/{*}loc")]
    check(bool(urls), "Sitemap must contain URLs")
    check(len(urls) == len(set(urls)), "Sitemap contains duplicate URLs")

    for url in urls:
        parsed = urlsplit(url)
        check(parsed.scheme == "https" and parsed.netloc == "getpossibleminds.com", f"Wrong sitemap origin: {url}")
        check(not parsed.query and not parsed.fragment, f"Noncanonical sitemap URL: {url}")
        path = parsed.path or "/"
        try:
            status, signals, headers = page(path)
            check(status == 200, f"Sitemap URL returns {status}: {url}")
            expected = [(canonical_key(url), True)]
            actual = [(canonical_key(value), in_head) for value, in_head in signals.canonicals]
            check(actual == expected, f"Wrong or missing head canonical: {url}: {actual}")
            directives = signals.robots + [headers.get("X-Robots-Tag", "").lower()]
            check(not any("noindex" in value for value in directives), f"Noindex page in sitemap: {url}")
            for href in signals.links:
                link = urlsplit(urljoin(url, href))
                if link.netloc == "getpossibleminds.com":
                    internal_paths.add(link.path or "/")
            rows.append({"url": url, "status": status, "canonical": signals.canonicals})
        except Exception as error:
            errors.append(f"Fetch failed: {url}: {error}")

    known_paths = {urlsplit(url).path or "/" for url in urls}
    for path in sorted(internal_paths - known_paths):
        # Do not trigger personalized short links or stateful API requests.
        if path.startswith(("/api/", "/t/", "/c/", "/s/", "/w/")):
            continue
        status, _, _ = fetch(base + path)
        check(status == 200, f"Internal link is not a direct 200: {path} ({status})")

    for path in ("/thesis", "/services/trialworks-migration", "/blog/the-real-reason-ai-evals-matter"):
        status, signals, _ = page(path + "?utm_source=indexing-audit")
        check(status == 200 and signals.canonicals == [(PRODUCTION + path, True)], f"Tracking variant canonical failed: {path}")

    for path in ("/admin/engagement", "/tools/linkedin-outreach"):
        status, signals, headers = page(path)
        check(status == 200, f"Internal tool unavailable: {path} ({status})")
        check(any("noindex" in value for value in signals.robots), f"Missing noindex metadata: {path}")
        check("noindex" in headers.get("X-Robots-Tag", "").lower(), f"Missing noindex header: {path}")
        check(path not in known_paths, f"Internal tool still in sitemap: {path}")

    for path, destination in {"/contact": "/consult", "/admin": "/admin/engagement"}.items():
        status, _, headers = fetch(base + path)
        target = urlsplit(urljoin(base, headers.get("Location", ""))).path
        check(status in (301, 308) and target == destination, f"Legacy redirect failed: {path}")

    status, _, _ = fetch(base + "/__indexing-audit-missing-page__")
    check(status == 404, "Unknown URLs must remain 404, not redirect to the homepage")

    if args.check_www:
        try:
            status, _, headers = fetch("https://www.getpossibleminds.com/thesis")
            check(status in (301, 308), f"www should use a permanent redirect, got {status}")
            check(headers.get("Location") == PRODUCTION + "/thesis", "www redirect must preserve path")
        except Exception as error:
            errors.append(f"www TLS/redirect failed: {error}")

    result = {"base": base, "pages_checked": len(rows), "internal_paths": len(internal_paths), "errors": errors, "pages": rows}
    if args.output:
        with open(args.output, "w") as output:
            json.dump(result, output, indent=2)
    print(json.dumps({key: value for key, value in result.items() if key != "pages"}, indent=2))
    return bool(errors)


if __name__ == "__main__":
    sys.exit(main())
