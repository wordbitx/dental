"use client";

import Link from "next/link";
import { useState } from "react";
import TreatmentIcon from "@/components/TreatmentIcon";

// Odonto-inspired problem → solution selector. Generic dental knowledge
// only — every answer points to one of THE DENTAL HOME's real treatments.
const CONCERNS = [
  {
    id: "pain",
    label: "Tooth pain",
    cause:
      "Pain usually means decay has reached the nerve, or a filling has cracked and exposed the inside of the tooth. Pain that wakes you at night or lingers after hot and cold needs a check-up, not a wait-and-see.",
    treatmentId: "root-canal",
    treatmentName: "Root Canal Treatment",
    note: "Removes the infection, relieves the pain — and saves the tooth.",
  },
  {
    id: "crooked",
    label: "Crooked teeth",
    cause:
      "Teeth drift when the jaw is crowded, a baby tooth is lost early, or habits like thumb-sucking push them out of line. Crooked teeth are harder to clean, so they collect more plaque and decay faster.",
    treatmentId: "braces",
    treatmentName: "Braces & Orthodontics",
    note: "Fixed braces or clear aligners, with a plan made for your bite.",
  },
  {
    id: "stained",
    label: "Stained teeth",
    cause:
      "Tea, coffee, smoking and time stain the outer layer of the tooth. Surface stains polish off; deeper stains need professional whitening under supervision.",
    treatmentId: "whitening",
    treatmentName: "Teeth Whitening",
    note: "Supervised, in-clinic whitening for an even, natural result.",
  },
  {
    id: "missing",
    label: "Missing tooth",
    cause:
      "A gap does more than show — the teeth beside it tilt in, the opposite tooth overgrows, and chewing shifts to one side. The sooner a missing tooth is replaced, the less the rest of the mouth has to adapt.",
    treatmentId: "implants",
    treatmentName: "Dental Implants",
    note: "A fixed, long-term replacement that looks and feels natural.",
  },
  {
    id: "gums",
    label: "Bleeding gums",
    cause:
      "Bleeding when you brush is usually gum inflammation from plaque and tartar sitting along the gum line. It is an early warning — left alone, it becomes gum disease and loose teeth.",
    treatmentId: "scaling",
    treatmentName: "Scaling & Polishing",
    note: "Removes tartar, calms the gums, and keeps them healthy.",
  },
  {
    id: "kids",
    label: "Kids' dental care",
    cause:
      "Children's teeth need the same care as adults', with a gentler pace. First visits are about trust — a look around, a ride in the chair, a check-up with no pressure — so they grow up unafraid of the dentist.",
    treatmentId: "pediatric",
    treatmentName: "Pediatric Dentistry",
    note: "Short, relaxed visits — parents welcome in the room throughout.",
  },
];

export default function FindSolution() {
  const [active, setActive] = useState(CONCERNS[0]);

  return (
    <div>
      {/* Tidy 2-column grid on mobile (equal widths), Dentora-style row on desktop */}
      <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:justify-center" role="tablist" aria-label="Common dental concerns">
        {CONCERNS.map((c) => {
          const isActive = c.id === active.id;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(c)}
              className={`w-full rounded-full px-4 py-2.5 text-[13px] font-bold transition-all sm:w-auto sm:px-5 sm:text-sm ${
                isActive
                  ? "bg-teal text-white shadow-card"
                  : "border border-teal/20 bg-white text-teal hover:border-teal hover:bg-teal-soft"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-teal/10 bg-white p-7 shadow-card sm:p-9">
        <div className="flex items-start gap-5">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal text-white sm:flex">
            <TreatmentIcon id={active.treatmentId} className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              What usually causes it
            </p>
            <p className="mt-2 leading-relaxed text-muted">{active.cause}</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-teal">
              The usual answer
            </p>
            <p className="mt-2 font-display text-xl font-bold text-teal">{active.treatmentName}</p>
            <p className="mt-1.5 leading-relaxed text-muted">{active.note}</p>
            <Link
              href={`/treatments?id=${active.treatmentId}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white shadow-card transition hover:bg-teal-deep"
            >
              See {active.treatmentName} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
