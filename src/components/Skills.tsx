"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t hairline py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-sm text-text-dim">Skills & tools</div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <h3 className="font-display text-lg text-text">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border hairline px-3 py-1 text-sm text-text-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
