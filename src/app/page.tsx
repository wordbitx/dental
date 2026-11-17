import Image from "next/image";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Faq from "@/components/Faq";
import FindSolution from "@/components/FindSolution";
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.2-.8l.4-.5c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.5 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
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

// Dentora hero chips — the 6 services shown as pills under the headline.
// Six, so the mobile 2-column grid has no lone chip on its own row.
const HERO_CHIPS = [
  { id: "scaling", label: "Dental Checkup" },
  { id: "scaling", label: "Teeth Cleaning" },
  { id: "crowns", label: "Tooth Filling" },
  { id: "scaling", label: "Gum Treatment" },
  { id: "braces", label: "Retainers" },
  { id: "emergency", label: "Emergency Care" },
];

// Dentora process strip — the 4 steps every visit follows.
const PROCESS_STEPS = [
  { n: "01", title: "Smile Assessment", desc: "A careful check-up and X-rays, explained in plain words." },
  { n: "02", title: "Care Planning", desc: "A plan made for your mouth — and agreed with you first." },
  { n: "03", title: "Treatment Process", desc: "Unhurried, gentle treatment with modern equipment." },
  { n: "04", title: "Dental Maintenance", desc: "Regular check-ups that keep small problems small." },
];

// Honest clinic strengths (no invented people) — the sample's 4-circles row.
const CARE_CIRCLES = [
  { icon: MonitorIcon, label: "Modern Equipment", sub: "Latest tools" },
  { icon: ShieldIcon, label: "Sterile Environment", sub: "Clean & safe" },
  { icon: HeartIcon, label: "Personalized Care", sub: "Plans made for you" },
  { icon: HandIcon, label: "Gentle Treatment", sub: "Comfort first" },
];

// Odonto-inspired WhatsApp flow — TDH number only.
const WA_STEPS = [
  { n: "1", title: "Message us", desc: "Tap the button and tell us what you need." },
  { n: "2", title: "Pick date & time", desc: "Choose the slot that suits you." },
  { n: "3", title: "Instant confirmation", desc: "Your appointment is confirmed on WhatsApp." },
];

export default function HomePage() {
  return (
    <div>
      {/* ============ HERO — Dentora photo-led card.
          Mobile/tablet: split card — a short, bright, face-focused photo strip
          on top (nothing over it, so the smile is fully visible) and the text
          on a solid deep-teal panel below, so the headline is always crisp.
          Desktop (lg+): the Dentora overlay — headline over the full-bleed
          photo with a lighter scrim, so the photo stays bright. ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-lift sm:rounded-[2rem]">
              {/* Photo block — flow block on mobile/tablet, full-bleed on desktop */}
              <div className="relative h-[220px] sm:h-[260px] lg:absolute lg:inset-0 lg:h-auto">
                <Image
                  src={PHOTOS.hero}
                  alt="A smiling patient in the dental chair, with the dentist beside her"
                  width={1800}
                  height={1200}
                  priority
                  className="absolute inset-0 h-full w-full object-cover object-[62%_42%] lg:object-[72%_60%]"
                  sizes="100vw"
                />
                {/* Rich teal scrim — desktop only, lighter so the photo stays bright */}
                <div className="absolute inset-0 hidden bg-gradient-to-r from-teal-deep/80 via-teal-deep/45 to-transparent lg:block" aria-hidden="true" />
              </div>

              {/* Floating badge — Sample 01 motif. On mobile it straddles the seam
                  between photo and teal panel; on desktop it sits top-right. */}
              <div className="absolute right-4 top-[180px] z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:right-6 sm:top-[220px] lg:top-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-soft text-teal">
                  <ToothIcon className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold leading-tight text-teal">
                  Your Smile,
                  <br />
                  Our Priority
                </span>
              </div>

              <div className="relative bg-teal-deep px-5 pb-6 pt-6 sm:px-8 sm:py-8 lg:flex lg:min-h-[540px] lg:flex-col lg:justify-end lg:bg-transparent lg:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
                  <ToothIcon className="h-4 w-4 text-white" />
                  Healthy Smile, Happier You.
                </span>
                {/* Headline: the Dentora line as the big line — short, warm, made for a
                    photo overlay. The Sample 01 line is kept verbatim as the support
                    paragraph below, so nothing real is lost. */}
                <h1 className="mt-4 max-w-xl font-display text-[1.9rem] font-bold leading-[1.06] tracking-[-0.01em] text-white sm:text-5xl lg:text-[3.4rem]">
                  Family-Friendly
                  <br />
                  <span className="text-white">Dental Care</span>
                </h1>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/85 sm:text-base">
                  Advanced dental care for a healthier smile — modern treatment, gentle hands and
                  honest plans, in Saddar Bazar, Cantt, Lahore.
                </p>

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                  <Link
                    href="/booking"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal shadow-card transition hover:bg-white/90 sm:w-auto"
                  >
                    Book an Appointment →
                  </Link>
                  <a
                    href={CLINIC.phoneHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    {CLINIC.phoneDisplay}
                  </a>
                </div>

                {/* Service chips — tidy 2-column grid on mobile, Dentora row on desktop */}
                <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-7 sm:flex sm:flex-wrap">
                  {HERO_CHIPS.map((chip) => (
                    <Link
                      key={chip.label}
                      href={`/treatments?id=${chip.id}`}
                      className="rounded-full bg-white/90 px-3 py-2 text-center text-[12px] font-semibold text-teal shadow-card transition hover:bg-white sm:px-4 sm:text-[13px]"
                    >
                      {chip.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Trust strip below the hero — real data only.
              Mobile: one compact 3-column row instead of three tall stacked rows. */}
          <Reveal>
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-teal/10 bg-white px-3 py-3 shadow-card sm:mt-5 sm:flex sm:items-center sm:justify-between sm:gap-x-8 sm:gap-y-3 sm:px-8 sm:py-4">
              <span className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
                <StarIcon className="h-4 w-4 text-teal sm:h-5 sm:w-5" />
                <span className="leading-tight">
                  <span className="block text-[12px] font-bold text-teal sm:text-sm">{CLINIC.rating} Average Rating</span>
                  <span className="block text-[10px] font-medium text-muted sm:text-xs">on Google</span>
                </span>
              </span>
              <span className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
                <UsersIcon className="h-4 w-4 text-teal sm:h-5 sm:w-5" />
                <span className="leading-tight">
                  <span className="block text-[12px] font-bold text-teal sm:text-sm">{CLINIC.reviews} Google Reviews</span>
                  <span className="block text-[10px] font-medium text-muted sm:text-xs">from our patients</span>
                </span>
              </span>
              <span className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left">
                <PinIcon className="h-4 w-4 text-teal sm:h-5 sm:w-5" />
                <span className="leading-tight">
                  <span className="block text-[12px] font-bold text-teal sm:text-sm">Saddar Bazar, Cantt</span>
                  <span className="block text-[10px] font-medium text-muted sm:text-xs">Lahore</span>
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS STRIP — Dentora: Smile Assessment → Dental Maintenance ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <Reveal>
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <span className="absolute left-0 right-0 top-5 hidden border-t border-dashed border-teal/25 lg:block" aria-hidden="true" />
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.n} className="relative">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-teal font-display text-sm font-bold text-white shadow-card">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-teal">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FIND YOUR SOLUTION — Odonto-inspired, interactive ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-teal">—</span> Find Your Solution <span className="text-teal">—</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
              What&apos;s Bothering <span className="text-teal-deep">Your Smile?</span>
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Tap what sounds familiar — we&apos;ll show you what usually causes it and the
              treatment that answers it.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <FindSolution />
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES — 6 icon cards, editorial header row ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
                  <span className="text-teal">—</span> Our Services
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
                  Comprehensive Dental <span className="text-teal-deep">Solutions</span>
                </h2>
              </div>
              <Link href="/treatments" className="text-sm font-bold text-teal underline decoration-teal decoration-2 underline-offset-4 hover:text-teal-deep">
                View all {TREATMENTS.length} treatments →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s, i) => {
              const highlighted = i === 1; // Orthodontics — the Sample 01 highlight card
              return (
                <Reveal key={s.id} delay={i * 0.05}>
                  <Link
                    href={`/treatments?id=${s.id}`}
                    className={`group relative flex h-full flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 ${
                      highlighted
                        ? "bg-teal-soft shadow-card"
                        : "border border-teal/10 bg-white shadow-card hover:shadow-lift"
                    }`}
                  >
                    <span className="absolute right-5 top-5 font-display text-sm font-bold text-teal/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
        </div>
      </section>

      {/* ============ ABOUT — photo | text | teal-soft card ============ */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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
              <span className="text-teal">—</span> About THE DENTAL HOME
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
              Your Trusted Dental Clinic for a{" "}
              <span className="text-teal-deep">Perfect Smile</span>
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
            <div className="flex flex-col items-center rounded-[2rem] bg-teal-soft p-8 text-center shadow-card sm:p-10">
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

      {/* ============ WHY CHOOSE US — deep-teal rich band, 4 honest strengths ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-teal-deep px-7 py-10 text-white shadow-lift sm:px-10 lg:px-12">
              <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">
                    — Why Choose Us
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] sm:text-4xl">
                    Care That Puts <span className="text-white">You First</span>
                  </h2>
                  <p className="mt-3 leading-relaxed text-white/75">
                    The things that make a visit here different — the same care, every time.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {CARE_CIRCLES.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="flex flex-col items-center text-center">
                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white sm:h-24 sm:w-24">
                          <Icon className="h-9 w-9 sm:h-10 sm:w-10" />
                        </span>
                        <p className="mt-4 font-display text-sm font-bold leading-snug sm:text-base">
                          {c.label}
                        </p>
                        <p className="mt-1 text-xs text-white/65 sm:text-sm">{c.sub}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ REVIEWS BAND — real Google aggregate only ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
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

      {/* ============ BOOK IN 60 SECONDS — Odonto-inspired WhatsApp flow ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-teal">—</span> Easy Booking <span className="text-teal">—</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
              Book in <span className="text-teal-deep">60 Seconds</span> via WhatsApp
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              No calls, no waiting on hold — three quick steps and your visit is booked.
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {WA_STEPS.map((step) => (
              <Reveal key={step.n}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-teal/10 bg-white p-6 text-center shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal font-display text-lg font-bold text-white">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-teal">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-wa px-7 py-3.5 text-sm font-bold text-white shadow-card transition hover:bg-wa-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Message us on WhatsApp
            </a>
            <p className="mt-3 text-sm text-muted">
              Prefer the form?{" "}
              <Link href="/booking" className="font-bold text-teal underline decoration-teal decoration-2 underline-offset-4 hover:text-teal-deep">
                Book online instead →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SMILE GALLERY — before/after slider ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-teal">—</span> Our Smile Gallery <span className="text-teal">—</span>
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.01em] text-teal sm:text-4xl">
              Real Results, <span className="text-teal-deep">Beautiful Smiles</span>
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

      {/* ============ CTA BAND — dark teal + white button ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
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
                className="shrink-0 rounded-full bg-white px-7 py-4 text-base font-bold text-teal shadow-card transition hover:bg-white/90"
              >
                Book Appointment →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ FAQ — extended with generic Q&As (no prices, no other clinic's claims) ============ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
              <span className="text-teal">—</span> Questions <span className="text-teal">—</span>
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
                className="font-bold text-teal underline decoration-teal decoration-2 underline-offset-4 hover:text-teal-deep"
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
