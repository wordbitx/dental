// Shared treatment icons — used by the home services cards and the
// treatment explorer. One source of truth, so the two stay in sync.

const ICONS: Record<string, React.ReactNode> = {
  scaling: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
  ),
  "root-canal": (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 0c-3 0-5 2-5 5 0 2 1 3.5 2 5 .8 1.2 1 2.5 1 4m2-13c3 0 5 2 5 5 0 2-1 3.5-2 5-.8 1.2-1 2.5-1 4M9 21h6" />
  ),
  implants: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 0c-2 0-3.5 1.5-3.5 3.5M12 6c2 0 3.5 1.5 3.5 3.5M8.5 12.5h7M9 16h6M10 19.5h4M12 19.5V21" />
  ),
  braces: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16M8 4v4M16 4v4M8 16v4M16 16v4M12 8v8" />
  ),
  whitening: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  ),
  crowns: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16M5 18l-1-9 4 3.5L12 6l4 6.5L20 9l-1 9M9 21h6" />
  ),
  pediatric: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M8.5 10.5h.01M15.5 10.5h.01M8.5 15c.8 1 2 1.5 3.5 1.5s2.7-.5 3.5-1.5" />
    </>
  ),
  emergency: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" d="M12 8v8M8 12h8" />
    </>
  ),
};

export default function TreatmentIcon({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      {ICONS[id] ?? ICONS.scaling}
    </svg>
  );
}
