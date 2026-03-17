import { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description:
    "Insights on AI strategy, learning loops, and building competitive moats with intelligent automation.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
