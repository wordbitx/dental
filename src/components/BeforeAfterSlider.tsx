"use client";

import Image from "next/image";
import { useState } from "react";
import { PHOTOS } from "@/lib/data";

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);

  return (
    <div>
      <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-lift sm:aspect-[16/10]">
        <Image
          src={PHOTOS.after}
          alt="After — brighter smile"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <Image
            src={PHOTOS.before}
            alt="Before — smile before treatment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: "100vw", maxWidth: "none" }}
          />
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-amber px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-navy-deep">
          After
        </span>

        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-amber bg-white text-amber-deep shadow-lift">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="ba-range absolute inset-0 h-full w-full opacity-0"
        />
      </div>
      <p className="mt-3 text-center text-xs text-muted">
        Drag the slider to compare. Sample transformation — illustrative images; results vary for every patient.
      </p>
    </div>
  );
}
