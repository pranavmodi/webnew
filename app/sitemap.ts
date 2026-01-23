import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

const routes = [
  "/",
  "/about",
  "/solutions/email-automation",
  "/solutions/support-agent",
  "/healthcare-case-study",
  "/law-case-study",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
