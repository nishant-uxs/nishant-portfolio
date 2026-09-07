"use client";

import { contactData, person } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import { useCursor } from "@/providers/CursorProvider";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "err";

export function Contact() {
  const { setMode } = useCursor();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    setStatus("sending");
    try {
      const res = await fetch(contactData.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("ok");
      form.reset();
    } catch {
      // Fallback: open mail client
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      );
      window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
      setStatus("err");
    }
  };

  const buttonLabel =
    status === "sending"
      ? "Sending..."
      : status === "ok"
        ? "Sent — thanks!"
        : status === "err"
          ? "Opening mail…"
          : "Send Message";

  return (
    <section
      id="contact"
      data-cursor="arrow"
      className="relative z-10 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-8 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <h2 className="font-heading text-5xl tracking-tight md:text-7xl">
            {contactData.title}
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/50">{contactData.body}</p>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="font-mono text-xs tracking-[0.22em] text-white/40 uppercase">
                Email
              </h3>
              <a
                href={`mailto:${contactData.email}`}
                onMouseEnter={() => setMode("text")}
                onMouseLeave={() => setMode("default")}
                className="mt-3 inline-block text-xl text-white transition hover:text-violet-300"
              >
                {contactData.email}
              </a>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-[0.22em] text-white/40 uppercase">
                Socials
              </h3>
              <div className="mt-3 flex flex-wrap gap-5 text-white/70">
                <a
                  href={person.links.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setMode("hover")}
                  onMouseLeave={() => setMode("default")}
                  className="hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={person.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setMode("hover")}
                  onMouseLeave={() => setMode("default")}
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href={person.links.phone}
                  onMouseEnter={() => setMode("hover")}
                  onMouseLeave={() => setMode("default")}
                  className="hover:text-white"
                >
                  {person.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-9"
          >
            <label className="block space-y-2">
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                Name
              </span>
              <input
                required
                name="name"
                placeholder="Your name"
                className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-violet-400/50"
              />
            </label>
            <label className="block space-y-2">
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                placeholder="your@email.com"
                className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none transition focus:border-violet-400/50"
              />
            </label>
            <label className="block space-y-2">
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-violet-400/50"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              onMouseEnter={() => setMode("hover")}
              onMouseLeave={() => setMode("default")}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#60a5fa] text-sm font-medium text-white shadow-[0_0_35px_rgba(124,58,237,0.35)] transition hover:scale-[1.01] disabled:opacity-70"
            >
              {buttonLabel}
            </button>
            {status === "ok" ? (
              <p className="text-center text-sm text-emerald-400/90">
                Message delivered. I&apos;ll get back to you soon.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
