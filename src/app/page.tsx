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

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-teal sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {sub && <p className="mt-3 leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* HERO — bold dark teal block, photo right, huge WhatsApp + Call CTAs */}
      <section className="bg-teal-deep text-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            <Reveal>
              <a
                href={CLINIC.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-extrabold text-teal-deep shadow-gold transition hover:bg-gold-bright"
              >
                <span>★★★★★</span> {CLINIC.rating} · {CLINIC.reviews} Google reviews
              </a>
              <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Dental care you can <span className="text-gold-bright">trust.</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
                Strong, honest dentistry in Saddar Bazar, Cantt — scaling, root canal, implants,
                braces and whitening, explained in plain words. Book in one message.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to book an appointment.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-gold px-7 py-4 text-center text-base font-extrabold text-teal-deep shadow-gold transition hover:bg-gold-bright"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Book on WhatsApp
                </a>
                <a
                  href={CLINIC.phoneHref}
                  className="flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/60 px-7 py-4 text-center text-base font-bold text-white transition hover:border-white hover:bg-white/10"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call {CLINIC.phoneDisplay}
                </a>
              </div>

              <p className="mt-6 text-sm font-medium leading-relaxed text-white/75">
                📍 {CLINIC.addressShort} — Ground Floor, Al Rehman Shopping Plaza, Opposite HBL
                Cantt Branch, Saddar Bazar, Dhaka Road, Cantt, Lahore
              </p>
              <p className="mt-1 text-sm font-medium text-white/75">
                Timings are confirmed on WhatsApp — message us to confirm.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="relative">
              <div className="overflow-hidden rounded-2xl border-4 border-gold shadow-lift">
                <Image
                  src={PHOTOS.hero}
                  alt="Dental care at THE DENTAL HOME, Lahore"
                  width={1400}
                  height={1050}
                  className="aspect-[4/3] w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-xl border-2 border-gold bg-white px-5 py-4 shadow-lift sm:left-8">
                <p className="text-xs font-extrabold uppercase tracking-wider text-muted">Rated by patients</p>
                <p className="mt-1 font-display text-2xl font-black text-teal">
                  ★ {CLINIC.rating} <span className="text-base font-bold text-muted">/ 5.0</span>
                </p>
                <p className="text-xs font-semibold text-muted">{CLINIC.reviews} Google reviews</p>
              </div>
              <div className="absolute -top-4 right-4 hidden rounded-full bg-gold px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-teal-deep shadow-gold sm:block">
                Cantt · Lahore
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — gold band, dense facts */}
      <section className="bg-gold">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { big: `★ ${CLINIC.rating}`, small: "Google rating" },
            { big: CLINIC.reviews, small: "Patient reviews" },
            { big: "8", small: "Core treatments" },
            { big: "WhatsApp", small: "Fastest way to book" },
          ].map((s) => (
            <div key={s.small} className="text-center md:text-left">
              <p className="font-display text-2xl font-black tracking-tight text-teal-deep sm:text-3xl">{s.big}</p>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-teal-deep/70">{s.small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TREATMENTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Treatments"
          title="Everything your smile needs, under one roof."
          sub="Eight core treatments, done carefully and explained plainly. Tap any treatment to see what it involves."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 0.06}>
              <Link
                href={`/treatments`}
                className="group flex h-full flex-col rounded-2xl border-2 border-teal/10 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold font-display text-lg font-black text-teal-deep transition-colors group-hover:bg-teal group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-teal">{t.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.short}</p>
                <span className="mt-4 text-sm font-extrabold text-gold-deep">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link
            href="/treatments"
            className="inline-block rounded-xl bg-teal px-7 py-3.5 text-sm font-extrabold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-teal-deep"
          >
            View all treatments →
          </Link>
        </Reveal>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-gold-soft py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold-deep">The difference</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-teal sm:text-4xl">
              Small changes, <span className="text-gold-deep">visible</span> results.
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
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
                <li key={line} className="flex items-start gap-2.5 font-medium">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[11px] font-bold text-white">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to ask about whitening / smile improvement.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-extrabold text-teal-deep shadow-gold transition hover:bg-gold-bright"
            >
              <PhoneIcon className="h-4 w-4" />
              Ask on WhatsApp
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <BeforeAfterSlider />
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Why patients choose us"
          title="Dentistry that treats you like a person, not a number."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
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
              <div className="h-full rounded-2xl border-2 border-teal/10 border-t-4 border-t-gold bg-white p-6 shadow-card">
                <span className="font-display text-4xl font-black text-gold/60">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-teal">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="grid gap-6 overflow-hidden rounded-2xl border-2 border-gold bg-teal-deep p-7 text-white shadow-lift sm:p-9 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold-bright">Visit us</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight">Come and see the clinic.</h3>
              <p className="mt-3 leading-relaxed text-white/80">
                We are in Saddar Bazar, Cantt — opposite the HBL branch, easy to find and easy to
                reach. Message us on WhatsApp and we will confirm a time that suits you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/booking"
                  className="rounded-xl bg-gold px-6 py-3 text-center text-sm font-extrabold text-teal-deep shadow-gold transition hover:bg-gold-bright"
                >
                  Book a visit →
                </Link>
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border-2 border-white/40 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-white"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border-2 border-gold/60">
              <Image
                src={PHOTOS.clinic1}
                alt="Inside the clinic"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <SectionHeading
          eyebrow="Questions"
          title="Before you visit"
          sub="The things patients usually ask us first."
        />
        <Reveal className="mt-8">
          <Faq />
        </Reveal>
      </section>
    </div>
  );
}
