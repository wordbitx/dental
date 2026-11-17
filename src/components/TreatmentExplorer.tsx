"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import TreatmentIcon from "@/components/TreatmentIcon";
import { TREATMENTS } from "@/lib/data";

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
                ? "border-teal bg-teal text-white shadow-card"
                : "border-teal/15 bg-white text-teal hover:border-lav/60"
            }`}
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                activeId === t.id ? "bg-white/15 text-white" : "bg-teal-soft text-teal"
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
          className="rounded-2xl border border-teal/10 bg-white p-6 shadow-card sm:p-9"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
            <TreatmentIcon id={active.id} className="h-4 w-4" />
            Treatment
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-teal sm:text-4xl">{active.name}</h2>
          <p className="mt-2 font-display text-lg italic text-teal">{active.short}</p>
          <p className="mt-4 leading-relaxed text-muted">{active.description}</p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-lav-soft px-4 py-3">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted">Typical visit</dt>
              <dd className="mt-1 font-semibold text-teal">{active.duration}</dd>
            </div>
            <div className="rounded-2xl bg-lav-soft px-4 py-3">
              <dt className="text-xs font-bold uppercase tracking-wider text-muted">Best for</dt>
              <dd className="mt-1 font-semibold text-teal">{active.forWhom}</dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2.5">
            {active.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[11px] text-white">✓</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/booking?service=${active.id}`}
              className="rounded-xl bg-lav px-6 py-3 text-center text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-lav-deep"
            >
              Book {active.name} →
            </Link>
            <a
              href={`https://wa.me/92304272777?text=${encodeURIComponent(`Hello ${"THE DENTAL HOME"}, I have a question about ${active.name}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-teal/25 px-6 py-3 text-center text-sm font-semibold text-teal hover:border-teal"
            >
              Ask on WhatsApp
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
