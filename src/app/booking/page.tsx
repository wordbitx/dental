import { Suspense } from "react";
import BookingFlow from "@/components/BookingFlow";
import Reveal from "@/components/Reveal";
import { CLINIC } from "@/lib/data";

export const metadata = {
  title: "Book a visit — THE DENTAL HOME, Lahore",
  description:
    "Book an appointment at THE DENTAL HOME, Cantt, Lahore. Choose your treatment, pick a day and time, and confirm on WhatsApp.",
};

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">Booking</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-teal sm:text-5xl">
          Book your visit.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Four quick steps. Your request is saved, then sent to us on WhatsApp so we can confirm
          your slot. Timings are confirmed by the clinic — message us to confirm.
        </p>
        <p className="mt-3 text-sm text-muted">
          Prefer to talk first? Call{" "}
          <a href={CLINIC.phoneHref} className="font-semibold text-teal underline underline-offset-4">
            {CLINIC.phoneDisplay}
          </a>
          .
        </p>
      </Reveal>

      <Reveal className="mt-10" delay={0.1}>
        <div className="rounded-3xl border border-teal/10 bg-ivory-card p-6 shadow-card sm:p-9">
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
  );
}
