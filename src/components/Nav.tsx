"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b hairline bg-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-lg text-text">
          Michael Cruz
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-dim transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border hairline px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent md:inline-block"
        >
          Let&rsquo;s talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-sm text-text md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t hairline px-6 pb-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-text-dim"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
