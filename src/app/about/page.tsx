import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CLINIC, PHOTOS, WHATSAPP_BASE } from "@/lib/data";

export const metadata = {
  title: "About — THE DENTAL HOME, Lahore",
  description:
    "About THE DENTAL HOME — strong, honest dental care in Saddar Bazar, Cantt, Lahore. Rated 5.0 stars from 504 Google reviews.",
};

const GALLERY = [
  { src: PHOTOS.clinic2, alt: "Dental treatment room" },
  { src: PHOTOS.clinic3, alt: "Modern dental equipment" },
  { src: PHOTOS.clinic4, alt: "A bright, calm treatment room" },
  { src: PHOTOS.clinic5, alt: "Treatment chair" },
  { src: PHOTOS.clinic6, alt: "Dental chair and X-ray monitor" },
  { src: PHOTOS.heroAlt, alt: "The clinic" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page banner — full-width teal band */}
      <section className="bg-teal-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-peach-on-dark">About the clinic</p>
              <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                A neighbourhood clinic with a <span className="text-peach-on-dark">high standard.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                THE DENTAL HOME sits in Saddar Bazar, Cantt — a practice built around one idea: that
                dental care should be honest, careful and done right. No rushed chairs, no jargon, no
                pressure. Just good dentistry, explained plainly.
              </p>
            </div>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to visit the clinic.")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-wa px-6 py-3.5 text-sm font-bold text-white shadow-lift transition hover:bg-wa-dark"
            >
              Message us on WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <p className="leading-relaxed text-muted">
              Patients come to us from across Cantt and Lahore, and many stay with us for years.
              Our Google rating — <strong className="text-teal">5.0 stars from {CLINIC.reviews} reviews</strong> —
              is the part we are proudest of, because it was earned one visit at a time.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-teal/10 pt-6">
              <div>
                <p className="font-display text-3xl font-bold text-teal">{CLINIC.rating}★</p>
                <p className="mt-1 text-xs text-muted">Google rating</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-teal">{CLINIC.reviews}</p>
                <p className="mt-1 text-xs text-muted">Patient reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-teal">8</p>
                <p className="mt-1 text-xs text-muted">Core treatments</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="rounded-xl bg-peach px-6 py-3 text-center text-sm font-bold text-white shadow-peach transition hover:bg-peach-deep"
              >
                Book a visit →
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-teal/25 px-6 py-3 text-center text-sm font-bold text-teal transition hover:border-teal"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <Image
                src={PHOTOS.clinic2}
                alt="Care at THE DENTAL HOME"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <section className="mt-16 lg:mt-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal">Inside the clinic</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-teal sm:text-4xl">
              Clean, bright, unhurried.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.08}>
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mt-16">
          <div className="rounded-2xl bg-teal-deep p-8 text-center text-white shadow-lift sm:p-12">
            <h2 className="font-display text-3xl font-bold">Come and meet us.</h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/75">
              The easiest way to judge a clinic is to visit it. Book a check-up, or just message
              us on WhatsApp with a question.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="rounded-xl bg-peach px-7 py-3.5 text-sm font-bold text-white transition hover:bg-peach-deep"
              >
                Book a visit →
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:border-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
