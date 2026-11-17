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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-9.5 2.5 2.5L16 10.5" />
    </svg>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 11V6.5a1.5 1.5 0 0 0-3 0V11m0-5.5v-2a1.5 1.5 0 0 0-3 0V11m0-6.5a1.5 1.5 0 0 0-3 0V12m6-7.5a1.5 1.5 0 0 1 3 0V12a7 7 0 0 1-7 7h-1a7 7 0 0 1-6.3-4L4 12.5c-.6-1.2.5-2.5 1.8-2.1.8.2 1.2 1 1.2 1.8V12" />
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

// The sample's team row — same 4-circles structure, honest clinic strengths
// (no invented doctors). Icons only, no invented people.
const CARE_CIRCLES = [
  { icon: MonitorIcon, label: "Modern Equipment", sub: "Latest tools" },
  { icon: ShieldIcon, label: "Sterile Environment", sub: "Clean & safe" },
  { icon: HeartIcon, label: "Personalized Care", sub: "Plans made for you" },
  { icon: HandIcon, label: "Gentle Treatment", sub: "Comfort first" },
];

export default function HomePage() {
  return (
    <div>
      {/* ============ HERO — Sample 01: text left, photo right (bleeds to the edge) ============ */}
      <section className="overflow-hidden bg-ice">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-16 lg:pt-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal shadow-card">
              <ToothIcon className="h-4 w-4 text-teal" />
              Healthy Smile, Happier You.
            </span>
            <h1 className="mt-6 max-w-xl font-display text-[2.6rem] font-bold leading-[1.06] tracking-[-0.01em] text-teal sm:text-6xl lg:text-[3.6rem]">
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

            {/* Trust strip — Sample 01 structure, real data only */}
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-teal/10 pt-6">
              <span className="flex items-center gap-3">
                <StarIcon className="h-6 w-6 text-teal" />
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-teal">{CLINIC.rating} Average</span>
                  <span className="block text-xs font-medium text-muted">Rating</span>
                </span>
              </span>
              <span className="hidden h-10 w-px bg-teal/15 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-3">
                <UsersIcon className="h-6 w-6 text-teal" />
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-teal">{CLINIC.reviews} Google</span>
                  <span className="block text-xs font-medium text-muted">Reviews</span>
                </span>
              </span>
              <span className="hidden h-10 w-px bg-teal/15 sm:block" aria-hidden="true" />
              <span className="flex items-center gap-3">
                <PinIcon className="h-6 w-6 text-teal" />
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-teal">Saddar Bazar</span>
                  <span className="block text-xs font-medium text-muted">Cantt, Lahore</span>
                </span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative lg:-mr-[max(0px,calc((100vw-80rem)/2))]">
            <div className="relative">
              {/* Soft light-purple arc behind the photo (Sample 01 motif) */}
              <div className="absolute -left-6 -top-8 h-48 w-48 rounded-full bg-lav-pale sm:h-60 sm:w-60" aria-hidden="true" />
              <div className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-lav-soft" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-lift lg:rounded-l-[2rem] lg:rounded-r-none">
                <Image
                  src={PHOTOS.hero}
                  alt="A smiling patient in the dental chair, with the dentist beside her"
                  width={1400}
                  height={1050}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating badge — Sample 01 motif, bottom-right of the photo */}
              <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:right-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lav-pale text-teal">
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
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl lg:text-[2.6rem]">
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
                        ? "bg-lav-pale shadow-lav"
                        : "border border-teal/10 bg-white shadow-card hover:shadow-lift"
                    }`}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${
                        highlighted ? "bg-white/80 text-teal" : "bg-teal text-white"
                      }`}
                    >
                      <TreatmentIcon id={s.id} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug text-teal">
                      {s.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-teal/70">
                      {s.desc}
                    </p>
                    <span
                      className={`mt-4 flex h-8 w-8 items-center justify-center rounded-full text-base transition-transform group-hover:translate-x-0.5 ${
                        highlighted ? "bg-white/70 text-teal" : "bg-teal-soft text-teal"
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

      {/* ============ ABOUT — photo | text | light-purple card (Sample 01) ============ */}
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
                <ShieldIcon className="h-5 w-5 text-teal" />
                <span className="text-sm font-bold leading-tight text-teal">
                  Modern Equipment
                  <br />
                  <span className="font-medium text-muted">&amp; Sterile Environment</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-lav">—</span> About THE DENTAL HOME
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
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
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-col items-center rounded-[2rem] bg-lav-pale p-8 text-center shadow-card sm:p-10">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-teal shadow-card">
                <ToothIcon className="h-10 w-10" />
              </span>
              <p className="mt-5 font-display text-2xl font-bold leading-tight text-teal">
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

      {/* ============ CARE CIRCLES — the sample's 4-circles team row, honest strengths ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
                <span className="text-lav">—</span> Why Choose Us
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
                Care That Puts{" "}
                <span className="text-lav">You First</span>
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                The things that make a visit here different — the same care, every time.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {CARE_CIRCLES.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.label} delay={i * 0.06}>
                    <div className="flex flex-col items-center text-center">
                      <span
                        className={`flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28 ${
                          i % 2 === 0 ? "bg-lav-pale text-teal" : "bg-teal-soft text-teal"
                        }`}
                      >
                        <Icon className="h-11 w-11 sm:h-12 sm:w-12" />
                      </span>
                      <p className="mt-4 font-display text-base font-bold leading-snug text-teal sm:text-lg">
                        {c.label}
                      </p>
                      <p className="mt-1 text-sm text-muted">{c.sub}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS BAND — the sample's testimonial band, real Google aggregate ============ */}
      <section className="bg-ice">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-teal px-7 py-10 text-white shadow-lift sm:px-10 md:flex-row lg:px-12">
              <span className="pointer-events-none absolute -left-2 top-2 font-display text-[10rem] font-bold leading-none text-white/10" aria-hidden="true">
                &ldquo;
              </span>
              <div className="relative flex items-start gap-5">
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:flex">
                  <ToothIcon className="h-8 w-8" />
                </span>
                <div>
                  <p className="font-display text-3xl font-bold leading-snug tracking-[-0.01em] sm:text-4xl">
                    &ldquo;{CLINIC.rating} stars from {CLINIC.reviews} Google reviews&rdquo;
                  </p>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/80">
                    The rating our patients gave us, one visit at a time.
                  </p>
                </div>
              </div>
              <div className="relative flex shrink-0 flex-col items-center gap-3">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white font-display text-4xl font-bold text-[#4285F4] shadow-lift">
                  G
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                  Google Reviews
                </span>
                <a
                  href={CLINIC.googleReviewsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-teal shadow-lift transition hover:bg-white/90"
                >
                  Read them on Google →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SMILE GALLERY — before/after slider ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-lav">—</span> Our Smile Gallery <span className="text-lav">—</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
              Real Results, <span className="text-lav">Beautiful Smiles</span>
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Drag the slider to see what careful dentistry can do.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <BeforeAfterSlider />
          </Reveal>
        </div>
      </section>

      {/* ============ CTA BAND — dark teal + light-purple button (dark text) ============ */}
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
                  <h2 className="font-display text-3xl font-bold tracking-[-0.01em] sm:text-4xl">
                    Ready to Get Your Perfect Smile?
                  </h2>
                  <p className="mt-2 max-w-xl leading-relaxed text-white/75">
                    Book your appointment today and take the first step towards better oral health.
                  </p>
                </div>
              </div>
              <Link
                href="/booking"
                className="shrink-0 rounded-full bg-lav-pale px-7 py-4 text-base font-bold text-teal shadow-lav transition hover:bg-lav-bright"
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
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.01em] text-teal sm:text-4xl">
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
