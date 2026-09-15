"use client";

import { useState } from "react";

type ImageInfo = { src: string; alt: string };

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: ImageInfo;
  after: ImageInfo;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border hairline bg-surface-2 sm:aspect-[16/9]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after.src}
        alt={after.alt}
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading="lazy"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before.src}
          alt={before.alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-medium text-[#14110a]">
          ↔
        </div>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-bg/85 px-3 py-1 text-xs text-text backdrop-blur">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-bg/85 px-3 py-1 text-xs text-text backdrop-blur">
        {afterLabel}
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Drag to compare the ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()} design`}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
