"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievements } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!sectionRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const distance = () => track.scrollWidth - window.innerWidth + 80;

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden border-t hairline py-24 md:py-0 md:min-h-screen md:flex md:items-center"
    >
      <div className="w-full">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-10 text-sm text-text-dim">Selected achievements</div>
        </div>

        <div
          ref={trackRef}
          className="flex flex-col gap-6 px-6 md:flex-row md:gap-6 md:px-10 md:pr-[40vw] overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none [scrollbar-width:none]"
        >
          {achievements.map((a) => (
            <article
              key={a.title}
              className="flex min-w-[85vw] shrink-0 flex-col justify-between rounded-2xl border hairline bg-surface p-8 snap-start md:min-w-[420px] md:p-10"
            >
              <h3 className="font-display text-2xl leading-snug text-text">
                {a.title}
              </h3>
              <p className="mt-6 text-text-dim">{a.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
