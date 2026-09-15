"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      company: data.get("company"), // honeypot — should stay empty
    };

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const result = await res.json().catch(() => ({}));
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="border-t hairline py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7 }}
              className="max-w-md font-display text-3xl leading-snug text-text md:text-4xl"
            >
              Have a growth problem worth solving? Let&rsquo;s talk.
            </motion.h2>

            <div className="mt-8 flex flex-col gap-2 text-text-dim">
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="hover:text-accent">
                {profile.phone}
              </a>
              <span>{profile.location}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Honeypot field — hidden from real visitors, catches basic bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-text-dim">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="border-b hairline bg-transparent py-2 text-text outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-text-dim">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="border-b hairline bg-transparent py-2 text-text outline-none transition-colors focus:border-accent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-text-dim">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="resize-none border-b hairline bg-transparent py-2 text-text outline-none transition-colors focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-4 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-[#14110a] transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                ? "Message sent"
                : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-accent-2">
                Thanks — I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
