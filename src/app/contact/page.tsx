import Reveal from "@/components/Reveal";
import { CLINIC } from "@/lib/data";

export const metadata = {
  title: "Contact — THE DENTAL HOME, Lahore",
  description:
    "Contact THE DENTAL HOME in Saddar Bazar, Cantt, Lahore. Call or WhatsApp +92 304 2727277, or visit the clinic.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">Contact</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-teal sm:text-5xl">
          Talk to us.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Questions, pain, or a booking — message us on WhatsApp and we will reply. If it is
          urgent, call us directly.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col gap-4">
            <a
              href={`https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
                `Hello ${CLINIC.name}, I have a question.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-teal/10 bg-ivory-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">WhatsApp</p>
              <p className="mt-2 font-display text-2xl font-semibold text-teal">{CLINIC.phoneDisplay}</p>
              <p className="mt-1 text-muted">Fastest way to reach us — bookings, questions, pain.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-copper">Message on WhatsApp →</span>
            </a>

            <a
              href={CLINIC.phoneHref}
              className="rounded-3xl border border-teal/10 bg-ivory-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Call</p>
              <p className="mt-2 font-display text-2xl font-semibold text-teal">{CLINIC.phoneDisplay}</p>
              <p className="mt-1 text-muted">For urgent pain or same-day help, call us directly.</p>
              <span className="mt-3 inline-block text-sm font-semibold text-copper">Call now →</span>
            </a>

            <div className="rounded-3xl border border-teal/10 bg-ivory-card p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Timings</p>
              <p className="mt-2 leading-relaxed text-muted">
                Timings are confirmed on WhatsApp — message us to confirm before you visit.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-3xl bg-teal p-7 text-ivory shadow-lift sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-soft">Visit the clinic</p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug">{CLINIC.address}</p>
            <p className="mt-4 leading-relaxed text-ivory/75">
              We are on the ground floor of Al Rehman Shopping Plaza, opposite the HBL Cantt
              branch in Saddar Bazar — easy to find from Dhaka Road.
            </p>
            <a
              href={CLINIC.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-copper px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-copper-deep"
            >
              Open in Google Maps →
            </a>
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white"
            >
              Read our {CLINIC.reviews} Google reviews ★ {CLINIC.rating}
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
