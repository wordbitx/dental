import Link from "next/link";
import { CLINIC, WHATSAPP_BASE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl font-bold tracking-wide">THE DENTAL HOME</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            {CLINIC.tagline} Strong, honest dentistry in Cantt, Lahore — where
            every visit starts with listening.
          </p>
          <p className="mt-4 text-sm text-white/70">
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-accent-on-dark underline decoration-accent/60 underline-offset-4 hover:text-white"
            >
              ★ {CLINIC.rating} from {CLINIC.reviews} Google reviews
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-on-dark">Visit</p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{CLINIC.address}</p>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-bold text-accent-on-dark underline decoration-accent/60 underline-offset-4 hover:text-white"
          >
            Get directions →
          </a>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-on-dark">Contact</p>
          <a href={CLINIC.phoneHref} className="mt-3 block text-sm font-bold text-white hover:text-accent-on-dark">
            {CLINIC.phoneDisplay}
          </a>
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I have a question.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm font-bold text-accent-on-dark hover:text-white"
          >
            WhatsApp us →
          </a>
          <p className="mt-3 text-sm text-white/60">
            Timings are confirmed on WhatsApp — message us to confirm.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-on-dark">Explore</p>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            <li><Link href="/" className="text-white/80 hover:text-accent-on-dark">Home</Link></li>
            <li><Link href="/treatments" className="text-white/80 hover:text-accent-on-dark">Treatments</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-accent-on-dark">About</Link></li>
            <li><Link href="/booking" className="text-white/80 hover:text-accent-on-dark">Book a visit</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-accent-on-dark">Contact</Link></li>
            <li><Link href="/admin" className="text-white/60 hover:text-accent-on-dark">Admin dashboard</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} THE DENTAL HOME, Lahore. All rights reserved.</p>
          <p>Website crafted by WordbitX</p>
        </div>
      </div>
    </footer>
  );
}
