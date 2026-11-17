"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CLINIC } from "@/lib/data";

export default function StickyBookingBar() {
  const pathname = usePathname();
  if (pathname === "/booking" || pathname === "/admin") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-teal/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-teal">
            ★ {CLINIC.rating} · {CLINIC.reviews} Google reviews
          </p>
          <p className="hidden truncate text-xs text-muted sm:block">
            {CLINIC.addressShort} — message us to confirm timings
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`${"https://wa.me/" + CLINIC.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-teal/25 px-4 py-2.5 text-sm font-semibold text-teal transition-colors hover:border-teal sm:block"
          >
            WhatsApp
          </a>
          <Link
            href="/booking"
            className="rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-copper-deep"
          >
            Book a visit →
          </Link>
        </div>
      </div>
    </div>
  );
}
