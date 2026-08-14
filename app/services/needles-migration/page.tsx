import type { Metadata } from "next";

import { MigrationSourcePage } from "@/components/services/migration-source-page";
import { SITE_URL } from "@/lib/constants";
import { migrationSourcePages } from "@/lib/migration-services";

const data = migrationSourcePages.needles;
const pageUrl = `${SITE_URL}/services/${data.slug}`;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.description,
  keywords: [
    "Needles migration support",
    "Needles data migration",
    "personal injury case management migration",
    "legal software data conversion",
    "Needles document migration",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: data.pageTitle,
    description: data.description,
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: data.pageTitle,
    description: data.description,
  },
};

export default function NeedlesMigrationPage() {
  return <MigrationSourcePage data={data} />;
}
