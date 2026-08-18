import { EMAIL, GITHUB_PROFILE, LINKEDIN_URL, PORTFOLIO_URL } from "./env";

export const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#111111",
    link: GITHUB_PROFILE,
    img: "/images/github.webp",
  },
  {
    id: 2,
    text: "Website",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: PORTFOLIO_URL,
    img: "/images/portfolio.webp",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#ffffff",
    link: `mailto:${EMAIL}`,
    img: "/images/portfolio.webp",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0a66c2",
    link: LINKEDIN_URL,
    img: "/images/linkedin.webp",
  },
];
