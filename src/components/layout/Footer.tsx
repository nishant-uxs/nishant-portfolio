import { siteConfig } from "@/config/site";
import { person } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-white/40 md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {person.name} — {siteConfig.domain}
        </p>
        <div className="flex flex-wrap gap-5 font-mono text-xs tracking-[0.14em] uppercase">
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a href={person.resumePath} className="transition hover:text-white">
            Resume
          </a>
          <a href="#oss" className="transition hover:text-white">
            Open Source
          </a>
        </div>
      </div>
    </footer>
  );
}
