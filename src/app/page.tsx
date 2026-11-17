import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { CLINIC, PHOTOS, TREATMENTS } from "@/lib/data";

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
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-teal sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {sub && <p className="mt-3 leading-relaxed text-muted">{sub}</p>}
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* HERO — split: copy left, photo right */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-teal/15 bg-ivory-card px-4 py-2 text-sm font-semibold text-teal shadow-card transition hover:border-copper"
            >
              <span className="text-copper">★★★★★</span> {CLINIC.rating} · {CLINIC.reviews} Google reviews
            </a>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-teal sm:text-5xl lg:text-[3.6rem]">
              A calmer kind of
              <em className="text-copper"> dentistry.</em>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              THE DENTAL HOME is a quiet, careful practice in Saddar Bazar, Cantt — where
              appointments are unhurried, everything is explained in plain words, and your
              comfort comes first.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="rounded-full bg-copper px-7 py-3.5 text-center text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-copper-deep"
              >
                Book an appointment →
              </Link>
              <Link
                href="/treatments"
                className="rounded-full border border-teal/25 px-7 py-3.5 text-center text-sm font-semibold text-teal transition hover:border-teal"
              >
                Explore treatments
              </Link>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-teal/10 pt-6">
              <div>
                <dt className="sr-only">Rating</dt>
                <dd className="font-display text-2xl font-semibold text-teal sm:text-3xl">{CLINIC.rating}★</dd>
                <dd className="mt-1 text-xs text-muted">Google rating</dd>
              </div>
              <div>
                <dt className="sr-only">Reviews</dt>
                <dd className="font-display text-2xl font-semibold text-teal sm:text-3xl">{CLINIC.reviews}</dd>
                <dd className="mt-1 text-xs text-muted">Patient reviews</dd>
              </div>
              <div>
                <dt className="sr-only">Treatments</dt>
                <dd className="font-display text-2xl font-semibold text-teal sm:text-3xl">8</dd>
                <dd className="mt-1 text-xs text-muted">Core treatments</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src={PHOTOS.hero}
                alt="Dental care at THE DENTAL HOME, Lahore"
                width={1400}
                height={1050}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-4 shadow-lift sm:left-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Rated by patients</p>
              <p className="mt-1 font-display text-2xl font-semibold text-teal">
                ★ {CLINIC.rating} <span className="text-base font-normal text-muted">/ 5.0</span>
              </p>
              <p className="text-xs text-muted">{CLINIC.reviews} Google reviews</p>
            </div>
            <div className="absolute -top-4 right-4 hidden rounded-full bg-teal px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ivory shadow-card sm:block">
              Cantt · Lahore
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="border-y border-teal/10 bg-teal-deep py-4">
        <p className="overflow-hidden whitespace-nowrap text-center font-display text-lg italic text-ivory/85">
          Scaling &amp; Polishing&nbsp;&nbsp;·&nbsp;&nbsp;Root Canal&nbsp;&nbsp;·&nbsp;&nbsp;Implants&nbsp;&nbsp;·&nbsp;&nbsp;Braces&nbsp;&nbsp;·&nbsp;&nbsp;Whitening&nbsp;&nbsp;·&nbsp;&nbsp;Crowns &amp; Bridges&nbsp;&nbsp;·&nbsp;&nbsp;Children&rsquo;s Dentistry&nbsp;&nbsp;·&nbsp;&nbsp;Emergency Care
        </p>
      </section>

      {/* TREATMENTS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Treatments"
          title="Everything your smile needs, under one roof."
          sub="Eight core treatments, done carefully and explained plainly. Tap any treatment to see what it involves."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 4) * 0.08}>
              <Link
                href={`/treatments`}
                className="group flex h-full flex-col rounded-3xl border border-teal/10 bg-ivory-card p-6 shadow-card transition-all hover:-translate-y-1.5 hover:border-copper/50 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-soft font-display text-lg font-semibold text-teal transition-colors group-hover:bg-copper group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-teal">{t.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.short}</p>
                <span className="mt-4 text-sm font-semibold text-copper">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            href="/treatments"
            className="inline-block rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-teal-deep"
          >
            View all treatments →
          </Link>
        </Reveal>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-ivory-deep/60 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">The difference</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-teal sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Small changes, <em className="text-copper">visible</em> results.
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
                <li key={line} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[11px] text-white">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <BeforeAfterSlider />
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Why patients choose us"
          title="Dentistry that treats you like a person, not a number."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-teal/10 bg-ivory-card p-7 shadow-card">
                <span className="font-display text-4xl font-semibold text-copper/70">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-teal">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="grid gap-6 overflow-hidden rounded-[2rem] bg-teal p-8 text-ivory shadow-lift sm:p-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-soft">Visit us</p>
              <h3 className="mt-3 font-display text-3xl font-semibold">Come and see the clinic.</h3>
              <p className="mt-3 leading-relaxed text-ivory/75">
                We are in Saddar Bazar, Cantt — opposite the HBL branch, easy to find and easy to
                reach. Message us on WhatsApp and we will confirm a time that suits you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/booking"
                  className="rounded-full bg-copper px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-copper-deep"
                >
                  Book a visit →
                </Link>
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
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
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <SectionHeading
          eyebrow="Questions"
          title="Before you visit"
          sub="The things patients usually ask us first."
        />
        <Reveal className="mt-10">
          <Faq />
        </Reveal>
      </section>
    </div>
  );
}
