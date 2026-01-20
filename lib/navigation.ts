import { CALENDLY_URL } from "./constants";

export const navLinks = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#how", label: "How It Works" },
  { href: "/#industries", label: "Industries" },
  { href: "/#security", label: "Security" },
  { href: "/#cases", label: "Case Studies" },
];

export const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Solutions", href: "/#solutions" },
      { label: "How It Works", href: "/#how" },
      { label: "Industries", href: "/#industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Security", href: "/#security" },
      { label: "Case Studies", href: "/#cases" },
      { label: "Contact", href: "mailto:hello@possibleminds.ai" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book a demo", href: CALENDLY_URL },
      { label: "Support", href: "mailto:hello@possibleminds.ai" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];
