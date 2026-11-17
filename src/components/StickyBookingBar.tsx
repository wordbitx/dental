"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CLINIC, WHATSAPP_BASE } from "@/lib/data";

export default function StickyBookingBar() {
  const pathname = usePathname();
  if (pathname === "/booking" || pathname === "/admin") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-lav bg-teal-deep">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-lav-on-dark">
            ★ {CLINIC.rating} · {CLINIC.reviews}
            <span className="hidden sm:inline"> Google reviews</span>
          </p>
          <p className="hidden truncate text-xs font-medium text-white/70 sm:block">
            {CLINIC.addressShort} — message us to confirm timings
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to book an appointment.")}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-wa px-4 py-2.5 text-sm font-bold text-white shadow-lift transition hover:bg-wa-dark sm:px-5"
          >
            WhatsApp
          </a>
          <Link
            href="/booking"
            className="rounded-xl bg-lav-pale px-4 py-2.5 text-sm font-bold text-teal shadow-lav transition hover:bg-lav-bright sm:px-5"
          >
            Book a visit →
          </Link>
        </div>
      </div>
    </div>
  );
}
