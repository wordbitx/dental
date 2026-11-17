"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  APPOINTMENTS_KEY,
  CLINIC,
  TREATMENTS,
  loadAppointments,
  saveAppointments,
  type Appointment,
} from "@/lib/data";

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const STEPS = ["Treatment", "Date", "Time", "Your details", "Done"];

function nextDays(n: number) {
  const days: { iso: string; label: string; weekday: string }[] = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const iso = d.toISOString().slice(0, 10);
    days.push({
      iso,
      label: d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      weekday: i === 0 ? "Today" : d.toLocaleDateString("en-GB", { weekday: "short" }),
    });
  }
  return days;
}

export default function BookingFlow() {
  const searchParams = useSearchParams();
  const days = useMemo(() => nextDays(14), []);

  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<string>(() => {
    const s = searchParams.get("service");
    return s && TREATMENTS.some((t) => t.id === s) ? s : "";
  });
  const [date, setDate] = useState<string>(() => {
    const d = searchParams.get("date");
    return d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : "";
  });
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Appointment | null>(null);

  const service = TREATMENTS.find((t) => t.id === serviceId);
  const dateLabel = days.find((d) => d.iso === date);

  const canNext = () => {
    if (step === 0) return !!serviceId;
    if (step === 1) return !!date;
    if (step === 2) return !!time;
    if (step === 3) return name.trim().length >= 2 && phone.trim().length >= 10;
    return true;
  };

  const next = () => {
    if (!canNext()) {
      setError(
        step === 3
          ? "Please add your name and a valid phone number so we can reach you."
          : "Please choose an option to continue."
      );
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, 4));
  };

  const confirmBooking = () => {
    if (!service || !date || !time) return;
    const appt: Appointment = {
      id: `tdh-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`,
      name: name.trim(),
      phone: phone.trim(),
      service: service.name,
      date,
      time,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };
    const list = loadAppointments();
    list.unshift(appt);
    saveAppointments(list);
    try {
      window.localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(list));
    } catch {
      /* storage unavailable — booking still shown below */
    }
    setSaved(appt);
    setStep(4);
  };

  const whatsappHref = saved
    ? `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
        `Hello ${CLINIC.name}, I would like to book an appointment.\n\nName: ${saved.name}\nPhone: ${saved.phone}\nTreatment: ${saved.service}\nDate: ${saved.date}\nPreferred time: ${saved.time}\n\nPlease confirm my slot. Thank you.`
      )}`
    : "#";

  return (
    <div>
      {/* Progress */}
      <ol className="mb-8 flex flex-wrap items-center gap-2">
        {STEPS.map((label, i) => (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                i < step || (i === 4 && saved)
                  ? "bg-teal text-white"
                  : i === step
                    ? "bg-gold text-teal-deep"
                    : "bg-teal-soft text-teal"
              }`}
            >
              {i < step || (i === 4 && saved) ? "✓" : i + 1}
            </span>
            <span className={`text-sm font-medium ${i === step ? "text-teal" : "text-muted"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && <span className="mx-1 h-px w-4 bg-teal/20 sm:w-8" />}
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step + (saved ? "-done" : "")}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === 0 && (
            <div>
              <h2 className="font-display text-2xl font-extrabold text-teal">What do you need?</h2>
              <p className="mt-1 text-muted">Choose a treatment — you can change it later on WhatsApp.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {TREATMENTS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setServiceId(t.id)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      serviceId === t.id
                        ? "border-gold bg-gold-soft shadow-card"
                        : "border-teal/15 bg-white hover:border-gold/60"
                    }`}
                  >
                    <span className="block font-display text-lg font-extrabold text-teal">{t.name}</span>
                    <span className="mt-1 block text-sm text-muted">{t.short}</span>
                    <span className="mt-2 block text-xs font-medium uppercase tracking-wider text-gold-deep">
                      {t.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl font-extrabold text-teal">Pick a day</h2>
              <p className="mt-1 text-muted">Choose any day in the next two weeks.</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {days.map((d) => (
                  <button
                    key={d.iso}
                    type="button"
                    onClick={() => setDate(d.iso)}
                    className={`rounded-2xl border p-3 text-center transition-all ${
                      date === d.iso
                        ? "border-gold bg-gold text-teal-deep shadow-card"
                        : "border-teal/15 bg-white hover:border-gold/60"
                    }`}
                  >
                    <span className={`block text-xs uppercase tracking-wider ${date === d.iso ? "text-teal-deep/70" : "text-muted"}`}>
                      {d.weekday}
                    </span>
                    <span className="block font-display text-lg font-extrabold">{d.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-display text-2xl font-extrabold text-teal">Preferred time</h2>
              <p className="mt-1 text-muted">
                Pick the time that suits you best. The clinic confirms your exact slot on WhatsApp.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`rounded-2xl border px-4 py-4 text-center font-display text-lg font-extrabold transition-all ${
                      time === slot
                        ? "border-gold bg-gold text-teal-deep shadow-card"
                        : "border-teal/15 bg-white text-teal hover:border-gold/60"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <p className="mt-4 rounded-xl bg-teal-soft px-4 py-3 text-sm text-teal">
                Timings are confirmed by the clinic on WhatsApp — message us to confirm.
              </p>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl font-extrabold text-teal">Your details</h2>
              <p className="mt-1 text-muted">So we know who is coming, and where to confirm.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-teal">Full name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed Raza"
                    className="w-full rounded-xl border border-teal/20 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm font-semibold text-teal">Phone / WhatsApp</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0300 1234567"
                    className="w-full rounded-xl border border-teal/20 bg-white px-4 py-3 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  />
                </label>
              </div>
              <div className="mt-6 rounded-2xl border border-teal/15 bg-white p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Your visit</p>
                <p className="mt-2 font-display text-xl font-extrabold text-teal">{service?.name}</p>
                <p className="mt-1 text-muted">
                  {dateLabel ? `${dateLabel.weekday}, ${dateLabel.label}` : date} · {time}
                </p>
              </div>
            </div>
          )}

          {step === 4 && saved && (
            <div className="text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold text-teal">Request received</h2>
              <p className="mx-auto mt-2 max-w-md text-muted">
                Thank you, {saved.name}. Your request is saved as <strong>Pending</strong>. Send it on
                WhatsApp so the clinic can confirm your slot.
              </p>
              <div className="mx-auto mt-6 max-w-md rounded-2xl border border-teal/15 bg-white p-5 text-left">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Booking summary</p>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-4"><dt className="text-muted">Treatment</dt><dd className="font-semibold text-teal">{saved.service}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-muted">Date</dt><dd className="font-semibold text-teal">{saved.date}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-muted">Preferred time</dt><dd className="font-semibold text-teal">{saved.time}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-muted">Name</dt><dd className="font-semibold text-teal">{saved.name}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-muted">Phone</dt><dd className="font-semibold text-teal">{saved.phone}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-muted">Status</dt><dd className="font-semibold text-gold-deep">Pending confirmation</dd></div>
                </dl>
              </div>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-gold px-7 py-3.5 text-sm font-extrabold text-teal-deep shadow-card transition-all hover:-translate-y-0.5 hover:bg-gold-bright"
                >
                  Send booking on WhatsApp →
                </a>
                <Link href="/admin" className="rounded-xl border-2 border-teal/25 px-7 py-3.5 text-sm font-semibold text-teal hover:border-teal">
                  View in Admin →
                </Link>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSaved(null);
                  setStep(0);
                  setServiceId("");
                  setDate("");
                  setTime("");
                  setName("");
                  setPhone("");
                }}
                className="mt-4 text-sm font-medium text-muted underline underline-offset-4 hover:text-teal"
              >
                Book another visit
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {error && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>
      )}

      {step < 4 && (
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              setError("");
              setStep((s) => Math.max(s - 1, 0));
            }}
            disabled={step === 0}
            className="rounded-xl border-2 border-teal/25 px-5 py-2.5 text-sm font-semibold text-teal disabled:opacity-40"
          >
            ← Back
          </button>
          {step < 3 ? (
            <button
              type="button"
              onClick={next}
              className="rounded-xl bg-teal px-7 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-teal-deep"
            >
              Continue →
            </button>
          ) : (
            <button
              type="button"
              onClick={confirmBooking}
              className="rounded-xl bg-gold px-7 py-3 text-sm font-extrabold text-teal-deep shadow-card transition-all hover:-translate-y-0.5 hover:bg-gold-bright"
            >
              Confirm booking
            </button>
          )}
        </div>
      )}
    </div>
  );
}
