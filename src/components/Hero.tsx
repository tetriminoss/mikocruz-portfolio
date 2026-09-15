"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { profile } from "@/lib/data";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(v) {
        node.textContent = Math.round(v).toString();
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div className="flex flex-col gap-1 border-l hairline pl-4">
      <div className="font-display text-3xl text-text md:text-4xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="text-sm text-text-dim">{label}</div>
    </div>
  );
}

const tickerWords = [
  "Conversion Rate Optimization",
  "Digital Analytics",
  "Web Strategy",
  "Marketing Automation",
  "SEO",
  "Front-End Development",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-accent-2"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] text-text sm:text-5xl md:text-6xl"
        >
          Building the systems between a first click and a closed deal.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-xl text-lg text-text-dim"
        >
          {profile.name} — {profile.role}. I lead web strategy, front-end builds,
          and growth analytics that turn traffic into pipeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:max-w-xl"
        >
          {profile.stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-20 border-y hairline py-4"
      >
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm text-text-dim">
          {[...tickerWords, ...tickerWords].map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              {word}
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
