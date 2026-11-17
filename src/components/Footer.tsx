import Link from "next/link";
import { CLINIC } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-teal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold tracking-wide">THE DENTAL HOME</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
            {CLINIC.tagline} A calm, careful practice in Cantt, Lahore — where
            every visit starts with listening.
          </p>
          <p className="mt-4 text-sm text-ivory/70">
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-copper-soft underline decoration-copper/60 underline-offset-4 hover:text-white"
            >
              ★ {CLINIC.rating} from {CLINIC.reviews} Google reviews
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/50">Visit</p>
          <p className="mt-3 text-sm leading-relaxed text-ivory/80">{CLINIC.address}</p>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-copper-soft underline decoration-copper/60 underline-offset-4 hover:text-white"
          >
            Get directions →
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/50">Contact</p>
          <a href={CLINIC.phoneHref} className="mt-3 block text-sm font-semibold text-ivory hover:text-copper-soft">
            {CLINIC.phoneDisplay}
          </a>
          <a
            href={`${"https://wa.me/" + CLINIC.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm text-ivory/80 hover:text-copper-soft"
          >
            WhatsApp us →
          </a>
          <p className="mt-3 text-sm text-ivory/60">
            Timings are confirmed on WhatsApp — message us to confirm.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/50">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="text-ivory/80 hover:text-copper-soft">Home</Link></li>
            <li><Link href="/treatments" className="text-ivory/80 hover:text-copper-soft">Treatments</Link></li>
            <li><Link href="/about" className="text-ivory/80 hover:text-copper-soft">About</Link></li>
            <li><Link href="/booking" className="text-ivory/80 hover:text-copper-soft">Book a visit</Link></li>
            <li><Link href="/contact" className="text-ivory/80 hover:text-copper-soft">Contact</Link></li>
            <li><Link href="/admin" className="text-ivory/60 hover:text-copper-soft">Admin dashboard</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-ivory/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} THE DENTAL HOME, Lahore. All rights reserved.</p>
          <p>Website crafted by WordbitX</p>
        </div>
      </div>
    </footer>
  );
}
