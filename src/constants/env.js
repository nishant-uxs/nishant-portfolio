import { person, featuredProjects } from "./person";

export const PROJECT_1_URL = process.env.NEXT_PUBLIC_PROJECT_1_URL || featuredProjects[0]?.url;
export const PROJECT_1_GITHUB =
  process.env.NEXT_PUBLIC_PROJECT_1_GITHUB || featuredProjects[0]?.github;
export const PROJECT_2_URL = process.env.NEXT_PUBLIC_PROJECT_2_URL || featuredProjects[1]?.url;
export const PROJECT_2_GITHUB =
  process.env.NEXT_PUBLIC_PROJECT_2_GITHUB || featuredProjects[1]?.github;
export const PROJECT_3_URL = process.env.NEXT_PUBLIC_PROJECT_3_URL || featuredProjects[2]?.url;
export const PROJECT_3_GITHUB =
  process.env.NEXT_PUBLIC_PROJECT_3_GITHUB || featuredProjects[2]?.github;
export const PROJECT_4_URL = process.env.NEXT_PUBLIC_PROJECT_4_URL || featuredProjects[3]?.url;
export const PROJECT_4_GITHUB =
  process.env.NEXT_PUBLIC_PROJECT_4_GITHUB || featuredProjects[3]?.github;

export const GITHUB_PROFILE =
  process.env.NEXT_PUBLIC_GITHUB_PROFILE || person.github || "https://github.com/nishant-uxs";
export const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || "";
export const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  person.linkedin ||
  "https://www.linkedin.com/in/nishant-agarwal-62a956322/";
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  person.instagram ||
  "https://www.instagram.com/nishant.agarwal__/";
export const GITHUB_USERNAME = GITHUB_PROFILE
  ? GITHUB_PROFILE.replace(/\/+$/, "").split("/").pop()
  : "nishant-uxs";

export const PORTFOLIO_URL =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL || person.url || "https://www.nishantx.in";
export const PORTFOLIO_ALT_URL = process.env.NEXT_PUBLIC_PORTFOLIO_ALT_URL || PORTFOLIO_URL;
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || person.email || "agarwalnishant812@gmail.com";
export const PHONE = process.env.NEXT_PUBLIC_PHONE || person.phone || "+91 7900654124";
