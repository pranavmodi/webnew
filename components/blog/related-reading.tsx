import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BLOG_POSTS_BY_SLUG } from "@/lib/blog";

export function RelatedReading({ slugs }: { slugs: string[] }) {
  return (
    <aside aria-label="Related reading" className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
      <h2 className="border-t border-white/20 pt-8 text-2xl font-semibold text-foreground">Related reading</h2>
      <ul className="mt-4 divide-y divide-white/15">
        {slugs.map((slug) => {
          const post = BLOG_POSTS_BY_SLUG[slug];
          if (!post) throw new Error(`Unknown related blog post: ${slug}`);
          return (
            <li key={slug}>
              <Link href={post.href} className="group flex items-start justify-between gap-4 py-4 text-base font-medium leading-7 text-primary hover:underline">
                <span>{post.title}</span>
                <ArrowRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
