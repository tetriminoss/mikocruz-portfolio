"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (progressRef.current && containerRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "bottom 70%",
              scrub: 0.6,
            },
          }
        );
      }

      itemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0.25, x: -12 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="border-t hairline py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-16 text-sm text-text-dim">Experience</div>

        <div ref={containerRef} className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-0 h-full w-px bg-line" />
          <div
            ref={progressRef}
            className="absolute left-0 top-0 h-full w-px bg-accent"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="flex flex-col gap-16">
            {experience.map((role, i) => (
              <div
                key={role.role + role.company}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="relative"
              >
                <div className="absolute -left-[34px] top-1.5 h-2 w-2 rounded-full bg-accent md:-left-[42px]" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl text-text md:text-2xl">
                    {role.role}
                  </h3>
                  <span className="text-sm text-text-dim">{role.period}</span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-accent-2">{role.company}</span>
                  <span className="text-text-dim">{role.tag}</span>
                </div>

                <ul className="mt-4 flex max-w-2xl flex-col gap-2">
                  {role.points.map((p) => (
                    <li key={p} className="text-text-dim">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
