"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { loadAppointments, saveAppointments, type Appointment } from "@/lib/data";

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function fmtDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

const STATUS_STYLE: Record<Appointment["status"], string> = {
  Pending: "bg-amber-100 text-amber-800",
  Confirmed: "bg-teal-soft text-teal",
  Cancelled: "bg-red-50 text-red-700",
};

export default function AdminPage() {
  const [loaded, setLoaded] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    setAppointments(loadAppointments());
    setLoaded(true);
  }, []);

  const stats = useMemo(() => {
    const today = todayIso();
    return {
      total: appointments.length,
      today: appointments.filter((a) => a.date === today && a.status !== "Cancelled").length,
      upcoming: appointments.filter((a) => a.date >= today && a.status !== "Cancelled").length,
      pending: appointments.filter((a) => a.status === "Pending").length,
    };
  }, [appointments]);

  const updateStatus = (id: string, status: Appointment["status"]) => {
    const next = appointments.map((a) => (a.id === id ? { ...a, status } : a));
    setAppointments(next);
    saveAppointments(next);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">Admin dashboard</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-teal sm:text-5xl">Appointments</h1>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            Bookings made through the website appear here. They are stored in this browser only
            (demo — no backend). Confirm or cancel each request, then confirm the slot with the
            patient on WhatsApp.
          </p>
        </div>
        <Link
          href="/booking"
          className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-copper-deep"
        >
          Go to Booking →
        </Link>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total bookings", value: stats.total },
          { label: "Today", value: stats.today },
          { label: "Upcoming", value: stats.upcoming },
          { label: "Awaiting confirmation", value: stats.pending },
        ].map((s) => (
          <div key={s.label} className="rounded-3xl border border-teal/10 bg-ivory-card p-6 shadow-card">
            <p className="font-display text-4xl font-semibold text-teal">{loaded ? s.value : "—"}</p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="mt-8 overflow-hidden rounded-3xl border border-teal/10 bg-ivory-card shadow-card">
        {!loaded ? (
          <p className="p-10 text-center text-muted">Loading appointments…</p>
        ) : appointments.length === 0 ? (
          <div className="p-10 text-center sm:p-14">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-soft text-teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v4m8-4v4M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
              </svg>
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-teal">No appointments yet</h2>
            <p className="mx-auto mt-2 max-w-md text-muted">
              Bookings made here will appear. Nothing is seeded — only real bookings from the
              booking flow show up.
            </p>
            <Link
              href="/booking"
              className="mt-6 inline-block rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-copper-deep"
            >
              Make a test booking →
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-teal/10 bg-ivory text-xs uppercase tracking-wider text-muted">
                  <th className="px-5 py-4 font-semibold">Patient</th>
                  <th className="px-5 py-4 font-semibold">Phone</th>
                  <th className="px-5 py-4 font-semibold">Treatment</th>
                  <th className="px-5 py-4 font-semibold">Date</th>
                  <th className="px-5 py-4 font-semibold">Time</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal/10">
                {appointments.map((a) => (
                  <tr key={a.id} className="align-top">
                    <td className="px-5 py-4 font-semibold text-teal">{a.name}</td>
                    <td className="px-5 py-4">
                      <a href={`tel:${a.phone.replace(/[^0-9+]/g, "")}`} className="text-teal underline underline-offset-2">
                        {a.phone}
                      </a>
                    </td>
                    <td className="px-5 py-4">{a.service}</td>
                    <td className="px-5 py-4 whitespace-nowrap">{fmtDate(a.date)}</td>
                    <td className="px-5 py-4 whitespace-nowrap">{a.time}</td>
                    <td className="px-5 py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLE[a.status]}`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        {a.status !== "Confirmed" && (
                          <button
                            type="button"
                            onClick={() => updateStatus(a.id, "Confirmed")}
                            className="rounded-full bg-teal px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-deep"
                          >
                            Confirm
                          </button>
                        )}
                        {a.status !== "Cancelled" && (
                          <button
                            type="button"
                            onClick={() => updateStatus(a.id, "Cancelled")}
                            className="rounded-full border border-red-200 px-3.5 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-50"
                          >
                            Cancel
                          </button>
                        )}
                        {a.status === "Cancelled" && (
                          <button
                            type="button"
                            onClick={() => updateStatus(a.id, "Pending")}
                            className="rounded-full border border-teal/25 px-3.5 py-1.5 text-xs font-semibold text-teal transition hover:border-teal"
                          >
                            Reopen
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-muted">
        Demo only — appointments live in this browser&apos;s localStorage (key{" "}
        <code className="rounded bg-teal-soft px-1.5 py-0.5 text-teal">tdh-appointments</code>) and are not
        sent anywhere.
      </p>
    </div>
  );
}
