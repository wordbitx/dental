"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CLINIC, WHATSAPP_BASE } from "@/lib/data";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/treatments", label: "Treatments" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3.5c-2.6 0-5.5 1.4-5.5 4.2 0 3.6 1.2 5.4 1.9 8.2.3 1.3.6 3.6 1.6 3.6 1.5 0 .8-3.4 2-3.4s.5 3.4 2 3.4c1 0 1.3-2.3 1.6-3.6.7-2.8 1.9-4.6 1.9-8.2 0-2.8-2.9-4.2-5.5-4.2Z"
              />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold tracking-wide text-teal">
              THE DENTAL HOME
            </span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
              Dental Clinic · Cantt, Lahore
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active ? "bg-teal text-white shadow-card" : "text-ink hover:bg-teal-soft hover:text-teal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-lav px-6 py-2.5 text-sm font-bold text-white shadow-lav transition hover:bg-lav-deep"
          >
            Book Appointment →
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-teal/20 text-teal lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-teal/10 bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2.5 text-base font-bold ${
                    active ? "bg-teal text-white" : "text-ink hover:bg-teal-soft"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2.5 text-base font-bold text-muted"
            >
              Admin dashboard
            </Link>
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-lav px-5 py-3 text-center text-sm font-bold text-white shadow-lav"
            >
              Book Appointment →
            </Link>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I want to book an appointment.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-teal px-5 py-3 text-center text-sm font-bold text-white"
            >
              Book on WhatsApp
            </a>
            <a
              href={CLINIC.phoneHref}
              className="mt-2 text-center text-sm font-semibold text-teal"
            >
              Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
