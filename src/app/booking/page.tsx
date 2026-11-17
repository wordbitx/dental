import { Suspense } from "react";
import BookingFlow from "@/components/BookingFlow";
import Reveal from "@/components/Reveal";
import { CLINIC, WHATSAPP_BASE } from "@/lib/data";

export const metadata = {
  title: "Book a visit — THE DENTAL HOME, Lahore",
  description:
    "Book an appointment at THE DENTAL HOME, Cantt, Lahore. Choose your treatment, pick a day and time, and confirm on WhatsApp.",
};

export default function BookingPage() {
  return (
    <div>
      {/* Page banner — full-width navy band */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-on-dark">Booking</p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Book your visit.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Four quick steps. Your request is saved, then sent to us on WhatsApp so we can confirm
              your slot. Timings are confirmed by the clinic — message us to confirm.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Prefer to talk first? Call{" "}
              <a href={CLINIC.phoneHref} className="font-semibold text-accent-on-dark underline underline-offset-4">
                {CLINIC.phoneDisplay}
              </a>
              {" "}or{" "}
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to book an appointment.")}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accent-on-dark underline underline-offset-4"
              >
                message us on WhatsApp
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Reveal delay={0.1}>
          <div className="rounded-2xl border-2 border-navy/10 border-t-4 border-t-accent bg-white p-6 shadow-card sm:p-9">
            <Suspense
              fallback={
                <p className="py-10 text-center text-muted">Loading the booking form…</p>
              }
            >
              <BookingFlow />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
