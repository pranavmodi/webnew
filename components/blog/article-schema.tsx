import { JsonLd } from "@/components/seo/json-ld";
import { createBlogStructuredData } from "@/lib/blog-seo";

export function BlogArticleSchema({ slug }: { slug: string }) {
  return <JsonLd data={createBlogStructuredData(slug)} />;
}
