import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { CLINIC, PHOTOS, TREATMENTS, WHATSAPP_BASE } from "@/lib/data";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.1 14.9l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 0 1 12 4Zm-3.2 5.2c-.2 0-.4.1-.5.3-.3.4-.5 1-.5 1.6 0 1.6 1.2 3.2 2.7 3.9 1.4.7 2.9.7 4 .2.5-.2.9-.6 1-1.1.1-.4 0-.7-.2-.9l-1.2-1.4c-.2-.2-.5-.2-.7 0l-.5.5c-.2.2-.4.2-.6.1-.4-.2-.9-.7-1.1-1.1-.1-.2-.1-.4.1-.6l.5-.5c.2-.2.2-.5 0-.7L10.9 9c-.2-.2-.5-.3-.8-.3-.3-.1-.7-.3-1.3-.5Z" />
    </svg>
  );
}

const WA_BOOK = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to book an appointment.")}`;

export default function HomePage() {
  return (
    <div>
      {/* ============ HERO — full-bleed clinic photo, content overlaid ============ */}
      <section className="relative flex min-h-[640px] items-end overflow-hidden bg-navy-deep lg:h-[88vh]">
        <Image
          src={PHOTOS.hero}
          alt="Inside a modern dental clinic — treatment chair and equipment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* readability overlays */}
        <div className="absolute inset-0 bg-navy-deep/45" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-24 sm:px-6 lg:px-8">
          <Reveal>
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-navy shadow-lift transition hover:bg-amber-soft"
            >
              <span className="text-amber-deep">★★★★★</span> {CLINIC.rating} · {CLINIC.reviews} Google reviews
            </a>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Strong, <span className="text-amber-bright">honest</span> dental care in Cantt, Lahore.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              Scaling, root canal, implants, braces and whitening — explained in plain words,
              booked in one WhatsApp message. No jargon, no pressure, no surprises.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WA_BOOK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-amber px-8 py-4 text-center text-lg font-extrabold text-navy-deep shadow-amber transition hover:bg-amber-bright"
              >
                <ChatIcon className="h-6 w-6" />
                Book on WhatsApp
              </a>
              <a
                href={CLINIC.phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/70 px-8 py-4 text-center text-lg font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {CLINIC.phoneDisplay}
              </a>
            </div>

            <p className="mt-6 text-sm font-semibold text-white/85">
              📍 {CLINIC.addressShort} — Ground Floor, Al Rehman Shopping Plaza, Opposite HBL
              Cantt Branch, Saddar Bazar, Dhaka Road, Cantt, Lahore
            </p>
            <p className="mt-1 text-sm font-medium text-white/70">
              Timings are confirmed on WhatsApp — message us to confirm.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FACT CARDS — overlapping the hero ============ */}
      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { big: `★ ${CLINIC.rating}`, small: "Google rating" },
            { big: CLINIC.reviews, small: "Patient reviews on Google" },
            { big: "8", small: "Core treatments" },
            { big: "WhatsApp", small: "Fastest way to book" },
          ].map((s, i) => (
            <Reveal key={s.small} delay={i * 0.06}>
              <div className="h-full rounded-2xl border-t-4 border-amber bg-white p-5 shadow-lift">
                <p className="font-display text-3xl font-extrabold tracking-[-0.02em] text-navy sm:text-4xl">{s.big}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted">{s.small}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TREATMENTS — large image cards ============ */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-deep">Treatments</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-navy sm:text-4xl lg:text-[2.6rem]">
                What we treat — pick a treatment to see the details.
              </h2>
            </div>
            <Link
              href="/treatments"
              className="rounded-xl bg-navy px-6 py-3 text-sm font-extrabold text-white shadow-card transition hover:bg-navy-deep"
            >
              View all treatments →
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 0.06}>
              <Link
                href={`/treatments?id=${t.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                    {t.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-extrabold leading-snug tracking-[-0.02em] text-navy">{t.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.short}</p>
                  <span className="mt-4 text-sm font-extrabold text-amber-deep">
                    Learn more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ BEFORE / AFTER — dark navy band, slider left ============ */}
      <section className="bg-navy-deep py-14 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal>
            <BeforeAfterSlider />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-bright">The difference</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">
              Small changes, <span className="text-amber-bright">visible</span> results.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/80">
              Whitening, alignment and restorative work add up quietly — a cleaner smile, an
              easier bite, more confidence in photos. Drag the slider to see what careful
              dentistry can do.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "No rushed appointments — every visit is unhurried",
                "Every step explained before it happens",
                "Aftercare advice so the result lasts",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5 font-medium text-white/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber text-[11px] font-bold text-navy-deep">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to ask about whitening / smile improvement.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-amber px-6 py-3.5 text-sm font-extrabold text-navy-deep shadow-amber transition hover:bg-amber-bright"
            >
              <ChatIcon className="h-5 w-5" />
              Ask on WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ HOW BOOKING WORKS — 3 steps ============ */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-deep">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-navy sm:text-4xl">
              Booked in three steps.
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Message us on WhatsApp",
                body: "Tell us what hurts or what you want — scaling, a check-up, whitening. We reply with a time.",
              },
              {
                n: "2",
                title: "Visit the clinic",
                body: "Come to Saddar Bazar, Cantt. We examine, explain in plain words, and agree a plan before anything starts.",
              },
              {
                n: "3",
                title: "Leave smiling",
                body: "Treatment done carefully, aftercare explained, and a clear answer on what comes next.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-card">
                  <span className="absolute -right-2 -top-5 font-display text-[6rem] font-extrabold leading-none text-navy-soft">
                    {s.n}
                  </span>
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-amber font-display text-lg font-extrabold text-navy-deep">
                    {s.n}
                  </span>
                  <h3 className="relative mt-4 font-display text-xl font-extrabold tracking-[-0.02em] text-navy">{s.title}</h3>
                  <p className="relative mt-2 leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Reveal>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-deep">Why patients choose us</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-navy sm:text-4xl">
            Dentistry that treats you like a person, not a number.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Unhurried appointments",
              body: "We book fewer patients per day on purpose, so nobody is rushed through the chair and every question gets an answer.",
            },
            {
              title: "Plain words, honest advice",
              body: "We explain what we find, what it costs in time and care, and what can wait — before any treatment begins.",
            },
            {
              title: "Gentle, modern care",
              body: "Modern anaesthesia, careful technique and a calm room. Most patients tell us it was easier than they feared.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border-t-4 border-amber bg-white p-6 shadow-card">
                <span className="font-display text-4xl font-extrabold text-amber">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold tracking-[-0.02em] text-navy">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ REVIEWS BAND ============ */}
      <section className="bg-amber py-12 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <Reveal>
            <p className="font-display text-5xl font-extrabold tracking-[-0.02em] text-navy-deep sm:text-6xl">
              ★ {CLINIC.rating} <span className="text-2xl font-bold text-navy-deep/70">/ 5.0</span>
            </p>
            <p className="mt-2 text-lg font-bold text-navy-deep">
              from {CLINIC.reviews} Google reviews — the rating our patients gave us, one visit at a time.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-xl bg-navy px-7 py-4 text-base font-extrabold text-white shadow-lift transition hover:bg-navy-deep"
            >
              Read them on Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ VISIT US — photo strip + overlapping card ============ */}
      <section className="relative">
        <div className="relative h-[380px] w-full overflow-hidden sm:h-[440px]">
          <Image
            src={PHOTOS.clinic1}
            alt="Inside THE DENTAL HOME clinic"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-deep/25" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="relative z-10 -mt-24 max-w-xl rounded-2xl bg-white p-7 shadow-lift sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-deep">Visit us</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-navy">
              Come and see the clinic.
            </h2>
            <p className="mt-3 leading-relaxed text-muted">{CLINIC.address}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Ground floor of Al Rehman Shopping Plaza, opposite the HBL Cantt branch in Saddar
              Bazar — easy to find from Dhaka Road. Timings are confirmed on WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="rounded-xl bg-amber px-6 py-3 text-center text-sm font-extrabold text-navy-deep shadow-amber transition hover:bg-amber-bright"
              >
                Book a visit →
              </Link>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border-2 border-navy/25 px-6 py-3 text-center text-sm font-bold text-navy transition hover:border-navy"
              >
                Get directions
              </a>
            </div>
          </Reveal>
        </div>
        <div className="h-12 sm:h-16" />
      </section>

      {/* ============ FAQ ============ */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-deep">Questions</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-navy sm:text-4xl">
            Before you visit
          </h2>
          <p className="mt-3 leading-relaxed text-muted">The things patients usually ask us first.</p>
        </Reveal>
        <Reveal className="mt-8">
          <Faq />
        </Reveal>
      </section>
    </div>
  );
}
