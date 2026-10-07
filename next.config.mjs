/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/consult",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/admin/engagement",
        permanent: true,
      },
      {
        source: "/admin/advisor",
        destination: "https://advisor.getpossibleminds.com/admin",
        permanent: false,
      },
      {
        source: "/workshops/ai-for-smartadvocate-litigation-paralegals",
        destination: "/workshops/ai-for-casepeer-litigation-paralegals",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/tools/linkedin-outreach",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async rewrites() {
    const resolverBase =
      process.env.POSSIBLEOS_TRACKING_RESOLVER_BASE_URL ||
      "https://aiaudit.getpossibleminds.com";

    return [
      {
        source: "/c/:code*",
        destination: `${resolverBase}/c/:code*`,
      },
      {
        source: "/s/:code*",
        destination: `${resolverBase}/s/:code*`,
      },
      {
        source: "/w/:code*",
        destination: `${resolverBase}/w/:code*`,
      },
      {
        source: "/t/:code*",
        destination: `${resolverBase}/t/:code*`,
      },
    ];
  },
};

export default nextConfig;
