import { LINKEDIN_URL } from "./constants";
import { piProblemPages } from "./pi-pages";

export const navLinks = [
  { href: "/ai-consultant", label: "Ask Mira" },
  { href: "/engagement-process", label: "Process" },
  { href: "/build-partnership", label: "Build" },
  { href: "/thesis", label: "Thesis" },
  { href: "/blog", label: "Blog" },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About" },
];

export const piSystemsLinks = piProblemPages.map((page) => ({
  href: `/personal-injury/${page.slug}`,
  label: page.navLabel,
}));

export const solutionsLinks = [
  { href: "/solutions/intake-agent", label: "Intake Agent" },
  {
    href: "/services/case-management-migration",
    label: "Case Management Migration",
  },
  { href: "/solutions/email-automation", label: "Email Automation" },
  { href: "/solutions/support-agent", label: "Support Agent" },
  { href: "/solutions/outbound-voice-ai", label: "Outbound Voice AI" },
  { href: "/solutions/lien-reduction", label: "Lien Reduction" },
];

export const caseStudiesLinks = [
  { href: "/healthcare-case-study", label: "Healthcare" },
  { href: "/law-case-study", label: "Personal Injury Law" },
];

export const blogLinks = [
  {
    href: "/blog/claude-ai-watermarks-law-firm-review",
    label: "Claude Draft Preflight",
  },
  {
    href: "/blog/why-pi-firms-need-bespoke-ai-agents",
    label: "Why PI Firms Need Bespoke AI",
  },
  {
    href: "/blog/first-mover-ai-personal-injury-firms",
    label: "The AI First-Mover Advantage",
  },
  {
    href: "/blog/ai-pi-firm-judgment-workflows",
    label: "Your Firm's Judgment Is the Moat",
  },
  {
    href: "/blog/personal-injury-marketing-attribution",
    label: "PI Marketing Attribution",
  },
  {
    href: "/blog/personal-injury-intake-marketing-system",
    label: "PI Intake Guide",
  },
  {
    href: "/blog/ai-change-management-personal-injury-firms",
    label: "AI Change Management",
  },
  {
    href: "/blog/headless-legal-software-pi-vendor-rankings",
    label: "Headless PI Software",
  },
  { href: "/blog/insurance-ai-claims-pi-firms", label: "Insurance AI Claims" },
  { href: "/blog/from-prompts-to-systems-law-firms-ai", label: "Prompts to Systems" },
  { href: "/blog/sb-623-rideshare-injury-pi-firms", label: "SB 623 & Rideshare Cases" },
  { href: "/blog/why-ai-readiness-matters-pi-firms", label: "AI Readiness for PI Firms" },
  { href: "/blog/speed-is-easy-to-graph-intake", label: "Speed Is Easy to Graph" },
  { href: "/blog/cybernetic-organization-ai", label: "The Cybernetic Organization" },
  { href: "/blog/musk-algorithm-ai-pi-firm", label: "Musk's Algorithm for PI" },
  { href: "/blog/tools-vs-systems-pi-firms-ai", label: "Tools vs. Systems" },
  { href: "/blog/derisk-ai-adoption-legal-practice", label: "Derisking AI Adoption" },
  { href: "/blog/build-vs-consume-ai-law-firms", label: "Build vs. Consume with AI" },
  { href: "/blog/hidden-math-lien-negotiations", label: "Hidden Math of Lien Negotiations" },
  { href: "/blog/nobody-owns-ai-at-your-firm", label: "Nobody Owns AI" },
  { href: "/blog/gemini-maps-pi-firms", label: "Gemini Maps & PI Firms" },
  { href: "/blog/the-200000-satisfying-answer", label: "The $200K Answer" },
  { href: "/blog/ai-search-law-firm-marketing", label: "Your Rankings Held" },
  { href: "/blog/the-science-of-client-intake-conversion", label: "The Science of Client Intake" },
  { href: "/blog/when-ai-is-the-user", label: "When AI Is the User" },
  { href: "/blog/the-real-reason-ai-evals-matter", label: "Why AI Evals Matter" },
];

export const footerLinks = [
  {
    title: "Connect",
    links: [
      { label: "AI Reputation Tool", href: "https://reputable.getpossibleminds.com" },
      { label: "AI Readiness Audit", href: "https://aiaudit.getpossibleminds.com" },
      { label: "Ask Mira", href: "/ai-consultant" },
      { label: "Intake Agent", href: "/solutions/intake-agent" },
      {
        label: "Case Management Migration",
        href: "/services/case-management-migration",
      },
      { label: "PI Owner AI Builder Program", href: "/build-partnership" },
      { label: "Our Thesis", href: "/thesis" },
      { label: "Security", href: "/security" },
      { label: "Email", href: "mailto:hello@possibleminds.ai" },
      { label: "Pranav on LinkedIn", href: LINKEDIN_URL },
    ],
  },
];
