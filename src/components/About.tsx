"use client";

import { motion } from "framer-motion";
import { profile, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t hairline py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[200px_1fr] md:px-10 md:gap-16">
        <div className="text-sm text-text-dim">About</div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl font-display text-2xl leading-snug text-text md:text-3xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-12 flex flex-col gap-2 border-l hairline pl-4 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="text-sm text-accent-2">Education</span>
            <span className="text-text">
              {education.program}, {education.school}
            </span>
            <span className="text-sm text-text-dim">{education.period}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
