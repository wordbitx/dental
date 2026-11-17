import Link from "next/link";
import { CLINIC, TREATMENTS, WHATSAPP_BASE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-teal-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-10 w-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.5c-2.6 0-5.5 1.4-5.5 4.2 0 3.6 1.2 5.4 1.9 8.2.3 1.3.6 3.6 1.6 3.6 1.5 0 .8-3.4 2-3.4s.5 3.4 2 3.4c1 0 1.3-2.3 1.6-3.6.7-2.8 1.9-4.6 1.9-8.2 0-2.8-2.9-4.2-5.5-4.2Z"
                />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-extrabold tracking-wide">THE DENTAL HOME</span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                Dental Clinic · Cantt, Lahore
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Healthy smile, happier you. Strong, honest dentistry in Saddar Bazar, Cantt — where
            every visit starts with listening.
          </p>
          <p className="mt-4 text-sm text-white/70">
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-lav-on-dark underline decoration-lav/60 underline-offset-4 hover:text-white"
            >
              ★ {CLINIC.rating} from {CLINIC.reviews} Google reviews
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lav-on-dark">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold">
            <li><Link href="/" className="text-white/80 hover:text-lav-on-dark">Home</Link></li>
            <li><Link href="/treatments" className="text-white/80 hover:text-lav-on-dark">Treatments</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-lav-on-dark">About Us</Link></li>
            <li><Link href="/booking" className="text-white/80 hover:text-lav-on-dark">Book Appointment</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-lav-on-dark">Contact</Link></li>
            <li><Link href="/admin" className="text-white/60 hover:text-lav-on-dark">Admin dashboard</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lav-on-dark">Our Services</p>
          <ul className="mt-4 space-y-2.5 text-sm font-semibold">
            {TREATMENTS.slice(0, 6).map((t) => (
              <li key={t.id}>
                <Link href={`/treatments?id=${t.id}`} className="text-white/80 hover:text-lav-on-dark">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lav-on-dark">Contact Us</p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{CLINIC.address}</p>
          <a href={CLINIC.phoneHref} className="mt-3 block text-sm font-bold text-white hover:text-lav-on-dark">
            {CLINIC.phoneDisplay}
          </a>
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I have a question.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm font-bold text-lav-on-dark hover:text-white"
          >
            WhatsApp us →
          </a>
          <p className="mt-3 text-sm text-white/60">
            Timings are confirmed on WhatsApp — message us to confirm.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} THE DENTAL HOME, Lahore. All rights reserved.</p>
          <p>Website crafted by WordbitX</p>
          <p>Your Smile, Our Priority.</p>
        </div>
      </div>
    </footer>
  );
}
