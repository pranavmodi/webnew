export type BlogPost = {
  href: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    href: "/blog/ai-change-management-personal-injury-firms",
    slug: "ai-change-management-personal-injury-firms",
    title: "The Fastest AI Still Moves at the Speed of the Firm",
    description:
      "AI transformation fails when firms install tools without changing behavior. A practical change-management framework for personal injury firms.",
    author: "Pranav Modi",
    date: "July 30, 2026",
    readTime: "11 min read",
    category: "AI Strategy",
    tags: ["Legal AI", "AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/headless-legal-software-pi-vendor-rankings",
    slug: "headless-legal-software-pi-vendor-rankings",
    title: "Headless Legal Software: Which PI Vendors Are Ready for AI Agents?",
    description:
      "We rank 12 PI legal-tech vendors on APIs, webhooks, CLI/MCP access, and whether external AI agents can safely operate their software.",
    author: "Pranav Modi",
    date: "July 16, 2026",
    readTime: "20 min read",
    category: "Industry Analysis",
    tags: ["Legal AI", "AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/insurance-ai-claims-pi-firms",
    slug: "insurance-ai-claims-pi-firms",
    title: "Insurance AI Is Scoring PI Claims. Firms Need a Counter-System.",
    description:
      "Insurers use AI to triage, score, and negotiate injury claims. PI firms need cleaner case data, review rules, and counter-workflows.",
    author: "Pranav Modi",
    date: "July 12, 2026",
    readTime: "12 min read",
    category: "Industry Analysis",
    tags: ["Legal AI", "AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/from-prompts-to-systems-law-firms-ai",
    slug: "from-prompts-to-systems-law-firms-ai",
    title: "From Prompts to Systems: How Law Firms Should Absorb AI",
    description:
      "Good AI prompting is good legal delegation. Learn the six-part instruction anatomy lawyers need and why firms must move from prompts to AI systems.",
    author: "Pranav Modi",
    date: "July 9, 2026",
    readTime: "11 min read",
    category: "AI Strategy",
    tags: ["Legal AI", "AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/sb-623-rideshare-injury-pi-firms",
    slug: "sb-623-rideshare-injury-pi-firms",
    title: "SB 623 and Rideshare Injury Cases: What California PI Firms Should Do Now",
    description:
      "California SB 623 is a major but targeted change for PI firms handling Uber and Lyft injury cases with lien-based treatment. Here are the operating, valuation, discovery, and vendor-risk implications.",
    author: "Pranav Modi",
    date: "July 8, 2026",
    readTime: "13 min read",
    category: "Industry Analysis",
    tags: ["Legal AI", "For PI Firms", "Lien Workflows"],
  },
  {
    href: "/blog/why-ai-readiness-matters-pi-firms",
    slug: "why-ai-readiness-matters-pi-firms",
    title: "Why AI Readiness Starts Before AI: The Operating Questions Every PI Firm Should Answer",
    description:
      "AI does not fail inside PI firms because the model is weak. It fails because case data, workflows, metrics, security, and ownership are not ready for automation.",
    author: "Pranav Modi",
    date: "June 24, 2026",
    readTime: "12 min read",
    category: "AI Strategy",
    tags: ["AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/speed-is-easy-to-graph-intake",
    slug: "speed-is-easy-to-graph-intake",
    title: "Speed Is Easy to Graph: The Intake Metric PI Firms Keep Optimizing Wrong",
    description:
      "Industry-wide, only 7% of personal injury leads set a consultation. Most firms respond by making intake faster. The best intake thinkers are converging on a different answer: stability, not speed, is what converts.",
    author: "Pranav Modi",
    date: "June 12, 2026",
    readTime: "8 min read",
    category: "Intake Operations",
    tags: ["Intake"],
  },
  {
    href: "/blog/cybernetic-organization-ai",
    slug: "cybernetic-organization-ai",
    title: "The Cybernetic Organization: What Norbert Wiener Saw Before the AI Era",
    description:
      "Most companies still operate like Roman legions: information climbs a hierarchy, decisions travel back down, and humans serve as the routing layer. AI changes that. Norbert Wiener&apos;s cybernetics offers a better model for how modern firms will sense, decide, act, and learn.",
    author: "Pranav Modi",
    date: "May 25, 2026",
    readTime: "11 min read",
    category: "AI Strategy",
    tags: ["AI Strategy"],
  },
  {
    href: "/blog/musk-algorithm-ai-pi-firm",
    slug: "musk-algorithm-ai-pi-firm",
    title: "Elon Musk’s Algorithm Applied to AI Transformation for a PI Law Firm",
    description:
      "Most AI projects inside personal injury firms fail because they automate the wrong workflow. Musk’s 5-step algorithm forces the redesign first — and produces a 10-agent operating model built on case movement, not case management.",
    author: "Pranav Modi",
    date: "May 20, 2026",
    readTime: "16 min read",
    category: "AI Strategy",
    tags: ["AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/tools-vs-systems-pi-firms-ai",
    slug: "tools-vs-systems-pi-firms-ai",
    title: "Tools vs. Systems: Why Most PI Firms Will Get the AI Era Wrong",
    description:
      "Most PI firms think they are adopting AI because staff use ChatGPT or Claude. The real divide is between firms using AI tools and firms building AI systems that run core workflows.",
    author: "Pranav Modi",
    date: "May 5, 2026",
    readTime: "10 min read",
    category: "Industry Analysis",
    tags: ["Legal AI", "For PI Firms"],
  },
  {
    href: "/blog/derisk-ai-adoption-legal-practice",
    slug: "derisk-ai-adoption-legal-practice",
    title: "How to Derisk AI Adoption in Your Legal Practice",
    description:
      "A practical framework for law firms adopting agentic AI safely: define handoffs, map pause conditions, tighten review gates, and align legal judgment with technical workflow design.",
    author: "Pranav Modi",
    date: "April 23, 2026",
    readTime: "8 min read",
    category: "AI Strategy",
    tags: ["AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/build-vs-consume-ai-law-firms",
    slug: "build-vs-consume-ai-law-firms",
    title: "Build vs. Consume: The AI Choice That Will Define Your Firm",
    description:
      "The legal industry is splitting into firms that use AI and firms that build with it. Here is what builders actually do, why the economics favor them, and how to start in the next 30 days.",
    author: "Pranav Modi",
    date: "April 22, 2026",
    readTime: "7 min read",
    category: "AI Strategy",
    tags: ["AI Strategy", "For PI Firms"],
  },
  {
    href: "/blog/hidden-math-lien-negotiations",
    slug: "hidden-math-lien-negotiations",
    title: "The Hidden Math of Lien Negotiations: What 563 Cases Reveal",
    description:
      "We analyzed 563 real medical lien negotiations between a diagnostic imaging provider and PI law firms. The data reveals striking patterns in reduction demands, settlement timing, and firm behavior that neither side is tracking.",
    author: "Pranav Modi",
    date: "April 2, 2026",
    readTime: "9 min read",
    category: "Industry Analysis",
    tags: ["Legal AI", "For PI Firms"],
  },
  {
    href: "/blog/nobody-owns-ai-at-your-firm",
    slug: "nobody-owns-ai-at-your-firm",
    title: "Nobody Owns AI at Your Firm (And That\u2019s Why It\u2019s Failing)",
    description:
      "80% of law firms can\u2019t show ROI from AI investments. The problem isn\u2019t the tools \u2014 it\u2019s that nobody owns the strategy. Here\u2019s what the most successful PI firms are doing differently.",
    author: "Pranav Modi",
    date: "March 24, 2026",
    readTime: "8 min read",
    category: "AI Strategy",
    tags: ["AI Strategy"],
  },
  {
    href: "/blog/gemini-maps-pi-firms",
    slug: "gemini-maps-pi-firms",
    title: "Google Just Put Gemini in Maps. Here\u2019s What PI Firms Need to Do Now.",
    description:
      "Google\u2019s biggest Maps update in 10 years puts Gemini AI between your firm and your next client. Here\u2019s what personal injury firms need to optimize \u2014 before they become invisible.",
    author: "Pranav Modi",
    date: "March 17, 2026",
    readTime: "11 min read",
    category: "Industry Analysis",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/the-200000-satisfying-answer",
    slug: "the-200000-satisfying-answer",
    title: "The $200,000 Answer Your Clients Never Called About",
    description:
      "A PI managing partner discovers why his calls dropped 30% while his rankings held \u2014 and what he found when he Googled himself from his phone.",
    author: "Pranav Modi",
    date: "March 13, 2026",
    readTime: "7 min read",
    category: "Field Notes",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/ai-search-law-firm-marketing",
    slug: "ai-search-law-firm-marketing",
    title: "Your Rankings Held. Your Calls Didn\u2019t.",
    description:
      "Google\u2019s AI Overviews have quietly rewired how clients find personal injury attorneys. Most firms have no idea it\u2019s happening \u2014 and no tool to measure it.",
    author: "Pranav Modi",
    date: "March 12, 2026",
    readTime: "8 min read",
    category: "Industry Analysis",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/the-science-of-client-intake-conversion",
    slug: "the-science-of-client-intake-conversion",
    title: "The Science of Client Intake and Lead Conversion",
    description:
      "Personal injury firms spend thousands per lead\u2014then lose half of them to slow response times and broken follow-up. Here\u2019s how conversion science, proactive intake, and AI are closing the gap.",
    author: "Pranav Modi",
    date: "February 26, 2026",
    readTime: "10 min read",
    category: "Legal AI",
    tags: ["Legal AI"],
  },
  {
    href: "/blog/sample-agent-ops",
    slug: "sample-agent-ops",
    title: "How Agentic Ops Actually Launch Inside Regulated Teams",
    description:
      "Three quick lessons from launching AI pilots for PI, health, and pharma teams without breaking compliance or losing stakeholder trust.",
    author: "Pranav Modi",
    date: "February 25, 2026",
    readTime: "5 min read",
    category: "Field Notes",
    tags: ["AI Strategy"],
  },
  {
    href: "/blog/when-ai-is-the-user",
    slug: "when-ai-is-the-user",
    title: "When AI Is the User: The New Economics of Software",
    description:
      "Software has always been built for people. That era is ending. When AI agents become the primary users of software products, everything changes\u2014pricing, interfaces, distribution, and the very definition of value.",
    author: "Pranav Modi",
    date: "February 6, 2026",
    readTime: "12 min read",
    category: "AI Strategy",
    tags: ["AI Strategy"],
  },
  {
    href: "/blog/the-real-reason-ai-evals-matter",
    slug: "the-real-reason-ai-evals-matter",
    title: "The Real Reason AI Evals Matter for Your Business",
    description:
      "Why AI evaluations are the foundation of learning loops that create unbreachable competitive moats\u2014and how the smartest companies are using them to win in the age of AI.",
    author: "Pranav Modi",
    date: "August 17, 2024",
    readTime: "8 min read",
    category: "AI Strategy",
    tags: ["AI Strategy"],
  },
];

export const BLOG_POSTS_BY_SLUG = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost>;
