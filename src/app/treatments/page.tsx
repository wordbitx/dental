import Reveal from "@/components/Reveal";
import TreatmentExplorer from "@/components/TreatmentExplorer";
import { WHATSAPP_BASE } from "@/lib/data";

export const metadata = {
  title: "Treatments — THE DENTAL HOME, Lahore",
  description:
    "Scaling, root canal, implants, braces, whitening, crowns, children's dentistry and emergency care at THE DENTAL HOME, Cantt, Lahore.",
};

export default async function TreatmentsPage({
  searchParams,
}: {
  searchParams?: Promise<{ id?: string }>;
}) {
  const params = await searchParams;
  return (
    <div>
      {/* Page banner — full-width navy band */}
      <section className="bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-on-dark">Treatments</p>
              <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Care, treatment by treatment.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Choose a treatment to see what it involves, who it is for, and how long it usually
                takes. Anything unclear — ask us on WhatsApp before you book.
              </p>
            </div>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello THE DENTAL HOME, I have a question about a treatment.")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-wa px-6 py-3.5 text-sm font-bold text-white shadow-lift transition hover:bg-wa-dark"
            >
              Ask on WhatsApp →
            </a>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Reveal delay={0.1}>
          <TreatmentExplorer initialId={params?.id} />
        </Reveal>

        <Reveal className="mt-12">
          <div className="rounded-2xl bg-navy-deep p-7 text-center text-white shadow-lift sm:p-9">
            <h2 className="font-display text-2xl font-bold">Not sure what you need?</h2>
            <p className="mx-auto mt-2 max-w-xl text-white/75">
              Book a check-up first. We examine, explain what we find in plain words, and agree a
              plan with you — before any treatment starts.
            </p>
            <a
              href="/booking"
              className="mt-5 inline-block rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              Book a check-up →
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
