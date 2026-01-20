import { CALENDLY_URL } from "./constants";

export const navLinks: { href: string; label: string }[] = [];

export const footerLinks = [
  {
    title: "Connect",
    links: [
      { label: "Book a demo", href: CALENDLY_URL },
      { label: "Support", href: "mailto:hello@possibleminds.ai" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];
