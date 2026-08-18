import { PROJECT_1_URL, PROJECT_2_URL, PROJECT_3_URL, PROJECT_4_URL } from "@constants";

export const DEFAULT_BOOKMARKS = [
  {
    id: 1,
    title: "Portfolio",
    url: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
    img: "/images/portfolio.webp",
  },
  {
    id: 2,
    title: "Krydo",
    url: PROJECT_1_URL,
    img: "/images/youtube.webp",
  },
  {
    id: 3,
    title: "CivicSense",
    url: PROJECT_3_URL,
    img: "/images/resume-ats.webp",
  },
  {
    id: 4,
    title: "BlockForge",
    url: PROJECT_2_URL,
    img: "/images/insta-downloader.webp",
  },
  {
    id: 7,
    title: "TrustMesh",
    url: PROJECT_4_URL,
    img: "/images/github.webp",
  },
  {
    id: 5,
    title: "Wikipedia",
    url: "https://en.wikipedia.org",
    img: "https://en.wikipedia.org/favicon.ico",
  },
  {
    id: 6,
    title: "OpenStreetMap",
    url: "https://openstreetmap.org",
    img: "/images/openstreetmap.webp",
  },
];
