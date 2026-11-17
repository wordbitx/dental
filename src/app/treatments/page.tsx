import Reveal from "@/components/Reveal";
import TreatmentExplorer from "@/components/TreatmentExplorer";

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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">Treatments</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-teal sm:text-5xl">
          Care, treatment by treatment.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Choose a treatment to see what it involves, who it is for, and how long it usually
          takes. Anything unclear — ask us on WhatsApp before you book.
        </p>
      </Reveal>

      <Reveal className="mt-10" delay={0.1}>
        <TreatmentExplorer initialId={params?.id} />
      </Reveal>

      <Reveal className="mt-12">
        <div className="rounded-3xl border border-teal/10 bg-ivory-card p-7 text-center shadow-card sm:p-9">
          <h2 className="font-display text-2xl font-semibold text-teal">Not sure what you need?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted">
            Book a check-up first. We examine, explain what we find in plain words, and agree a
            plan with you — before any treatment starts.
          </p>
          <a
            href="/booking"
            className="mt-5 inline-block rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-copper-deep"
          >
            Book a check-up →
          </a>
        </div>
      </Reveal>
    </div>
  );
}
