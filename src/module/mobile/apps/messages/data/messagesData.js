import { GITHUB_PROFILE, LINKEDIN_URL, EMAIL } from "@constants";

export const INITIAL_CONVERSATIONS = [
  {
    id: "nishant",
    name: "Nishant Agarwal",
    avatar: "/images/profile.webp",
    avatarColor: "bg-gradient-to-tr from-blue-500 to-indigo-500",
    initials: "N",
    unread: true,
    email: EMAIL || "agarwalnishant812@gmail.com",
    github: GITHUB_PROFILE,
    messages: [
      {
        id: 1,
        text: "Hey there! Welcome to my macOS portfolio.",
        sender: "them",
        time: "10:00 AM",
      },
      {
        id: 2,
        text: "Feel free to ask me anything here. I have automated some quick replies!",
        sender: "them",
        time: "10:01 AM",
      },
      {
        id: 3,
        text: "Try asking about: 'projects', 'skills', or 'contact'.",
        sender: "them",
        time: "10:01 AM",
      },
    ],
  },
  {
    id: "github",
    name: "GitHub",
    avatar: "/images/github.webp",
    avatarColor: "bg-gradient-to-tr from-zinc-700 to-zinc-900",
    initials: "GH",
    unread: false,
    email: EMAIL || "agarwalnishant812@gmail.com",
    github: GITHUB_PROFILE,
    messages: [
      {
        id: 1,
        text: "Check out my merged OSS work — Hardhat, Hyperlane, FilOzone, Mastra, WalletConnect, viem.",
        sender: "them",
        time: "Yesterday",
      },
      {
        id: 2,
        text: "Profile: github.com/nishant-uxs",
        sender: "them",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    avatar: "/images/linkedin.webp",
    avatarColor: "bg-gradient-to-tr from-sky-500 to-blue-700",
    initials: "in",
    unread: false,
    email: EMAIL || "agarwalnishant812@gmail.com",
    github: LINKEDIN_URL,
    messages: [
      {
        id: 1,
        text: "Connect with me on LinkedIn for roles, collabs, and updates.",
        sender: "them",
        time: "Yesterday",
      },
    ],
  },
];
