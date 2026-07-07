import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/seo/json-ld";
import "@/styles/globals.css";
import { LINKEDIN_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/react";
import Tracker from "@/components/analytics/tracker";
import ClickBeacon from "@/components/analytics/click-beacon";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | AI systems for personal injury firms`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      email: "hello@possibleminds.ai",
      description: SITE_DESCRIPTION,
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} min-h-full`}
    >
      <body className="bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <JsonLd data={siteStructuredData} />
          <ClickBeacon />
          <Tracker />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
