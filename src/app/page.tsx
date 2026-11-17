import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import TreatmentIcon from "@/components/TreatmentIcon";
import { CLINIC, PHOTOS, TREATMENTS, WHATSAPP_BASE } from "@/lib/data";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5c-2.6 0-5.5 1.4-5.5 4.2 0 3.6 1.2 5.4 1.9 8.2.3 1.3.6 3.6 1.6 3.6 1.5 0 .8-3.4 2-3.4s.5 3.4 2 3.4c1 0 1.3-2.3 1.6-3.6.7-2.8 1.9-4.6 1.9-8.2 0-2.8-2.9-4.2-5.5-4.2Z"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3 1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const WA_BOOK = `${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to book an appointment.")}`;

// Six services for the home cards — real treatments from the app.
// (Crowns & Bridges and Emergency Care live on the Treatments page.)
const HOME_SERVICES = [
  { id: "scaling", name: "Scaling & Polishing", desc: "A cleaner, brighter smile in one visit." },
  { id: "braces", name: "Braces & Orthodontics", desc: "Straight teeth, at any age." },
  { id: "root-canal", name: "Root Canal Treatment", desc: "Save the tooth, end the pain." },
  { id: "implants", name: "Dental Implants", desc: "A permanent answer to a missing tooth." },
  { id: "whitening", name: "Teeth Whitening", desc: "A noticeably brighter smile." },
  { id: "pediatric", name: "Pediatric Dentistry", desc: "Gentle first visits for little smiles." },
];

export default function HomePage() {
  return (
    <div>
      {/* ============ HERO — Sample 01: text left, photo right ============ */}
      <section className="bg-ice">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal shadow-card">
              <ToothIcon className="h-4 w-4 text-lav-deep" />
              Healthy Smile, Happier You.
            </span>
            <h1 className="mt-6 max-w-xl font-display text-[2.6rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-teal sm:text-6xl lg:text-[3.6rem]">
              Advanced Dental Care for a{" "}
              <span className="text-lav">Healthier Smile</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Modern dental care with gentle treatment and honest, personalized plans — right here
              in Saddar Bazar, Cantt, Lahore.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-base font-bold text-white shadow-card transition hover:bg-teal-deep"
              >
                Book Appointment →
              </Link>
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border-2 border-teal/25 bg-white px-6 py-3 text-base font-bold text-teal transition hover:border-teal"
              >
                <PhoneIcon className="h-5 w-5" />
                {CLINIC.phoneDisplay}
              </a>
            </div>

            {/* Trust strip — real data only */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-teal/10 pt-6">
              <span className="flex items-center gap-2.5 text-sm font-bold text-teal">
                <StarIcon className="h-5 w-5 text-lav-deep" />
                {CLINIC.rating} Average Rating
              </span>
              <span className="hidden h-8 w-px bg-teal/15 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2.5 text-sm font-bold text-teal">
                <UsersIcon className="h-5 w-5 text-lav-deep" />
                {CLINIC.reviews} Google Reviews
              </span>
              <span className="hidden h-8 w-px bg-teal/15 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-2.5 text-sm font-bold text-teal">
                <PinIcon className="h-5 w-5 text-lav-deep" />
                Saddar Bazar, Cantt
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              {/* Soft lavender arc behind the photo (Sample 01 motif) */}
              <div className="absolute -left-4 -top-6 h-44 w-44 rounded-full bg-lav-bright/25 sm:h-56 sm:w-56" aria-hidden="true" />
              <div className="absolute -bottom-5 -right-3 h-24 w-24 rounded-full bg-lav-soft" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src={PHOTOS.hero}
                  alt="Inside a bright modern dental clinic — teal dental chair and white cabinets"
                  width={1400}
                  height={1050}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge — Sample 01 motif */}
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:left-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lav-soft text-lav-deep">
                  <ToothIcon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-tight text-teal">
                  Your Smile,
                  <br />
                  Our Priority
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES — 6 icon cards (Sample 01) ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-lav">—</span> Our Services <span className="text-lav">—</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-teal sm:text-4xl lg:text-[2.6rem]">
              Comprehensive Dental <span className="text-lav">Solutions</span>
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              From routine checkups to advanced treatments, we&apos;ve got you covered.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {HOME_SERVICES.map((s, i) => {
              const highlighted = i === 1; // Orthodontics — the Sample 01 highlight card
              return (
                <Reveal key={s.id} delay={i * 0.05}>
                  <Link
                    href={`/treatments?id=${s.id}`}
                    className={`group flex h-full flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 ${
                      highlighted
                        ? "bg-lav text-white shadow-lav"
                        : "border border-teal/10 bg-white shadow-card hover:shadow-lift"
                    }`}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${
                        highlighted ? "bg-white/20 text-white" : "bg-lav-soft text-lav-deep"
                      }`}
                    >
                      <TreatmentIcon id={s.id} className="h-7 w-7" />
                    </span>
                    <h3
                      className={`mt-4 font-display text-lg font-bold leading-snug ${
                        highlighted ? "text-white" : "text-teal"
                      }`}
                    >
                      {s.name}
                    </h3>
                    <p className={`mt-1.5 flex-1 text-sm leading-relaxed ${highlighted ? "text-white/85" : "text-muted"}`}>
                      {s.desc}
                    </p>
                    <span
                      className={`mt-4 flex h-8 w-8 items-center justify-center rounded-full text-base transition-transform group-hover:translate-x-0.5 ${
                        highlighted ? "bg-white/20 text-white" : "bg-teal-soft text-teal"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8 text-center">
            <Link href="/treatments" className="text-sm font-bold text-teal underline decoration-lav decoration-2 underline-offset-4 hover:text-lav-deep">
              View all {TREATMENTS.length} treatments →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ ABOUT — photo | text | lavender card (Sample 01) ============ */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr_0.62fr] lg:gap-10">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src={PHOTOS.clinic1}
                  alt="Inside THE DENTAL HOME — a bright, modern treatment room"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-lift">
                <StarIcon className="h-5 w-5 text-lav-deep" />
                <span className="text-sm font-bold text-teal">
                  ★ {CLINIC.rating} Google rating · {CLINIC.reviews} reviews
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-lav">—</span> About THE DENTAL HOME
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-teal sm:text-4xl">
              Your Trusted Dental Clinic for a{" "}
              <span className="text-lav">Perfect Smile</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              We combine modern technology with careful, compassionate care — so you leave with a
              healthy, confident smile, and a clear answer on what comes next.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Unhurried, careful appointments",
                "Modern dental technology",
                "Personalized treatment plans",
                "Honest advice in plain words",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5 font-semibold text-teal">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-[11px] font-bold text-white">✓</span>
                  {line}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-lav px-6 py-3 text-sm font-bold text-white shadow-lav transition hover:bg-lav-deep"
            >
              Learn More →
            </Link>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-col items-center rounded-[2rem] bg-lav-soft p-8 text-center shadow-card sm:p-10">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-lav-deep shadow-card">
                <ToothIcon className="h-10 w-10" />
              </span>
              <p className="mt-5 font-display text-2xl font-extrabold leading-tight text-teal">
                Healthy Smile,
                <br />
                Happier Life
              </p>
              <Link
                href="/booking"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white shadow-card transition hover:bg-teal-deep"
              >
                Book Appointment →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CHOOSE US — honest section (replaces the sample's invented team) ============ */}
      <section className="bg-ice">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-lav">—</span> Why Choose Us <span className="text-lav">—</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-teal sm:text-4xl">
              Dentistry that treats you like a person,{" "}
              <span className="text-lav">not a number.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Unhurried appointments",
                body: "We book fewer patients per day on purpose, so nobody is rushed through the chair and every question gets an answer.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
                ),
              },
              {
                title: "Plain words, honest advice",
                body: "We explain what we find, what it costs in time and care, and what can wait — before any treatment begins.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                ),
              },
              {
                title: "Gentle, modern care",
                body: "Modern anaesthesia, careful technique and a calm room. Most patients tell us it was easier than they feared.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-9.5 2.5 2.5L16 10.5" />
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-teal/10 bg-white p-7 shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lav-soft text-lav-deep">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
                      {c.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.02em] text-teal">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS BAND — real Google aggregate (replaces the sample's invented quote) ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-teal px-7 py-10 text-white shadow-lift sm:px-10 md:flex-row lg:px-12">
              <div className="flex items-start gap-5">
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:flex">
                  <ToothIcon className="h-8 w-8" />
                </span>
                <div>
                  <p className="font-display text-5xl font-extrabold tracking-[-0.02em] sm:text-6xl">
                    ★ {CLINIC.rating}
                  </p>
                  <p className="mt-2 max-w-xl text-lg font-semibold leading-relaxed text-white/85">
                    from {CLINIC.reviews} Google reviews — the rating our patients gave us, one
                    visit at a time.
                  </p>
                </div>
              </div>
              <a
                href={CLINIC.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-full bg-white px-7 py-4 text-base font-bold text-teal shadow-lift transition hover:bg-white/90"
              >
                Read them on Google →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SMILE GALLERY — before/after slider ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
            <span className="text-lav">—</span> Our Smile Gallery <span className="text-lav">—</span>
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-teal sm:text-4xl">
            Real Results, <span className="text-lav">Beautiful Smiles</span>
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Drag the slider to see what careful dentistry can do.
          </p>
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <BeforeAfterSlider />
        </Reveal>
      </section>

      {/* ============ CTA BAND — dark teal + lavender button ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-teal-deep px-7 py-10 text-white shadow-lift sm:px-10 lg:px-12">
            <ToothIcon className="pointer-events-none absolute -right-6 -top-8 h-48 w-48 text-white/[0.06]" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-start gap-5">
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:flex">
                  <ToothIcon className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
                    Ready to Get Your Perfect Smile?
                  </h2>
                  <p className="mt-2 max-w-xl leading-relaxed text-white/75">
                    Book your appointment today and take the first step towards better oral health.
                  </p>
                </div>
              </div>
              <Link
                href="/booking"
                className="shrink-0 rounded-full bg-lav px-7 py-4 text-base font-bold text-white shadow-lav transition hover:bg-lav-deep"
              >
                Book Appointment →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-ice">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-lav">—</span> Questions <span className="text-lav">—</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.02em] text-teal sm:text-4xl">
              Before You Visit
            </h2>
            <p className="mt-3 leading-relaxed text-muted">The things patients usually ask us first.</p>
          </Reveal>
          <Reveal className="mt-8">
            <Faq />
          </Reveal>
          <Reveal className="mt-10 text-center">
            <p className="text-sm leading-relaxed text-muted">
              📍 {CLINIC.addressShort} · Timings are confirmed on WhatsApp —{" "}
              <a
                href={WA_BOOK}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-teal underline decoration-lav decoration-2 underline-offset-4 hover:text-lav-deep"
              >
                message us to confirm
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
