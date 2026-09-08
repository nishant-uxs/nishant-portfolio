import { EMAIL, GITHUB_PROFILE, INSTAGRAM_URL, LINKEDIN_URL } from "./env";

export const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#111111",
    link: GITHUB_PROFILE,
    img: "/images/dock-github.webp",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0a66c2",
    link: LINKEDIN_URL,
    img: "/images/dock-linkedin.webp",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    link: INSTAGRAM_URL,
    img: "/images/dock-instagram.webp",
  },
  {
    id: 4,
    text: "Email",
    icon: "/icons/mail.svg",
    bg: "#ffffff",
    link: `mailto:${EMAIL}`,
    img: "/images/portfolio.webp",
  },
];
