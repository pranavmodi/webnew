import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/constants";

const routes = [
  "/",
  "/solutions",
  "/industries",
  "/case-studies",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
