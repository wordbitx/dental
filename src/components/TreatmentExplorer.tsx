"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { TREATMENTS } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  scaling: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
  ),
  "root-canal": (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 0c-3 0-5 2-5 5 0 2 1 3.5 2 5 .8 1.2 1 2.5 1 4m2-13c3 0 5 2 5 5 0 2-1 3.5-2 5-.8 1.2-1 2.5-1 4M9 21h6" />
  ),
  implants: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0c-2 0-3.5 1.5-3.5 3.5M12 6c2 0 3.5 1.5 3.5 3.5M8.5 12.5h7M9 16h6M10 19.5h4M12 19.5V21" />
  ),
  braces: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16M8 4v4M16 4v4M8 16v4M16 16v4M12 8v8" />
  ),
  whitening: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  ),
  crowns: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M5 18l-1-9 4 3.5L12 6l4 6.5L20 9l-1 9M9 21h6" />
  ),
  pediatric: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M8.5 10.5h.01M15.5 10.5h.01M8.5 15c.8 1 2 1.5 3.5 1.5s2.7-.5 3.5-1.5" />
    </>
  ),
  emergency: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M12 8v8M8 12h8" />
    </>
  ),
};

function TreatmentIcon({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      {ICONS[id] ?? ICONS.scaling}
    </svg>
  );
}

export default function TreatmentExplorer({ initialId }: { initialId?: string }) {
  const [activeId, setActiveId] = useState(
    initialId && TREATMENTS.some((t) => t.id === initialId) ? initialId : TREATMENTS[0].id
  );
  const active = TREATMENTS.find((t) => t.id === activeId) ?? TREATMENTS[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {TREATMENTS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveId(t.id)}
            className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all lg:w-full ${
              activeId === t.id
                ? "border-navy bg-navy text-white shadow-card"
                : "border-navy/15 bg-white text-navy hover:border-accent/60"
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                activeId === t.id ? "bg-white/15 text-white" : "bg-navy-soft text-navy"
              }`}
            >
              <TreatmentIcon id={t.id} className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-display text-base font-bold leading-snug">{t.name}</span>
              <span className={`block text-xs ${activeId === t.id ? "text-white/70" : "text-muted"}`}>
                {t.duration}
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-9"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
            <TreatmentIcon id={active.id} className="h-4 w-4" />
            Treatment
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">{active.name}</h2>
          <p className="mt-2 font-display text-lg italic text-accent-deep">{active.short}</p>
          <p className="mt-4 leading-relaxed text-muted">{active.description}</p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-accent-soft px-4 py-3">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted">Typical visit</dt>
              <dd className="mt-1 font-semibold text-navy">{active.duration}</dd>
            </div>
            <div className="rounded-2xl bg-accent-soft px-4 py-3">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted">Best for</dt>
              <dd className="mt-1 font-semibold text-navy">{active.forWhom}</dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2.5">
            {active.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] text-white">✓</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/booking?service=${active.id}`}
              className="rounded-xl bg-accent px-6 py-3 text-center text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              Book {active.name} →
            </Link>
            <a
              href={`https://wa.me/92304272777?text=${encodeURIComponent(`Hello ${"THE DENTAL HOME"}, I have a question about ${active.name}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-navy/25 px-6 py-3 text-center text-sm font-semibold text-navy hover:border-navy"
            >
              Ask on WhatsApp
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
