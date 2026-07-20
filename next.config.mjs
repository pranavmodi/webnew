/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/workshops/ai-for-smartadvocate-litigation-paralegals",
        destination: "/workshops/ai-for-casepeer-litigation-paralegals",
        permanent: true,
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
    ];
  },
};

export default nextConfig;
