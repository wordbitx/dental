export const CLINIC = {
  name: "THE DENTAL HOME",
  tagline: "Strong, honest dental care in Saddar Bazar, Cantt.",
  phoneDisplay: "+92 304 2727277",
  phoneHref: "tel:+92304272777",
  whatsappNumber: "92304272777",
  address:
    "Ground Floor, Al Rehman Shopping Plaza, Opposite HBL Cantt Branch, Saddar Bazar, Dhaka Road, Cantt, Lahore, Pakistan",
  addressShort: "Saddar Bazar, Dhaka Road, Cantt, Lahore",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Dental+Home+Saddar+Bazar+Dhaka+Road+Cantt+Lahore",
  rating: "5.0",
  reviews: "504",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=The+Dental+Home+Saddar+Bazar+Dhaka+Road+Cantt+Lahore",
};

export const WHATSAPP_BASE = `https://wa.me/${CLINIC.whatsappNumber}`;

export type Treatment = {
  id: string;
  name: string;
  short: string;
  description: string;
  duration: string;
  forWhom: string;
  image: string;
  points: string[];
};

export const TREATMENTS: Treatment[] = [
  {
    id: "scaling",
    image: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Teeth Scaling & Polishing",
    short: "A cleaner, brighter smile in one visit.",
    description:
      "Gentle ultrasonic scaling removes tartar and plaque above and below the gum line, followed by a polish that leaves teeth smooth and bright. A routine visit that keeps gums healthy and breath fresh.",
    duration: "About 30–45 minutes",
    forWhom: "Everyone — recommended every 6 months",
    points: [
      "Ultrasonic tartar removal",
      "Plaque cleaning and stain polishing",
      "Gum health check at every visit",
    ],
  },
  {
    id: "root-canal",
    image: "https://images.pexels.com/photos/6812547/pexels-photo-6812547.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Root Canal Treatment",
    short: "Save the tooth, end the pain.",
    description:
      "When infection reaches the inside of a tooth, root canal treatment removes it, seals the tooth and relieves the pain — so you keep your natural tooth instead of losing it.",
    duration: "Usually 1–2 visits",
    forWhom: "Persistent toothache or deep decay",
    points: [
      "Pain relief, not pain — modern anaesthesia",
      "Your natural tooth is preserved",
      "Finished with a crown where needed",
    ],
  },
  {
    id: "implants",
    image: "https://images.pexels.com/photos/4687346/pexels-photo-4687346.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Dental Implants",
    short: "A permanent answer to a missing tooth.",
    description:
      "A titanium implant replaces the root of a missing tooth and holds a natural-looking crown. It looks, feels and chews like your own tooth — and protects the teeth around it.",
    duration: "Planned over a few visits",
    forWhom: "One or more missing teeth",
    points: [
      "Looks and feels like a natural tooth",
      "No grinding down neighbouring teeth",
      "A long-term, fixed solution",
    ],
  },
  {
    id: "braces",
    image: "https://images.pexels.com/photos/28407748/pexels-photo-28407748.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Braces & Orthodontics",
    short: "Straight teeth, at any age.",
    description:
      "Fixed braces and clear aligner options gently move teeth into place — improving your bite, your smile and how easy your teeth are to keep clean.",
    duration: "A personalised plan, reviewed monthly",
    forWhom: "Teenagers and adults",
    points: [
      "Fixed braces and clear aligners",
      "A plan made for your bite, not a template",
      "Regular reviews until the result is right",
    ],
  },
  {
    id: "whitening",
    image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Teeth Whitening",
    short: "A noticeably brighter smile.",
    description:
      "Professional whitening lifts stains from tea, coffee and time — safely, under supervision, with a result that looks natural rather than artificial.",
    duration: "About 45–60 minutes",
    forWhom: "Stained or dull-looking teeth",
    points: [
      "In-clinic, supervised whitening",
      "Even, natural-looking brightness",
      "Aftercare advice to keep the result",
    ],
  },
  {
    id: "crowns",
    image: "https://images.pexels.com/photos/6812480/pexels-photo-6812480.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Crowns & Bridges",
    short: "Restore strength and shape.",
    description:
      "A crown rebuilds a damaged tooth to full strength; a bridge replaces a missing tooth by anchoring to the teeth beside it. Both are shaped and shaded to match your smile.",
    duration: "Usually 2 visits",
    forWhom: "Cracked, worn or missing teeth",
    points: [
      "Matched to your natural tooth shade",
      "Restores chewing strength",
      "Protects the tooth underneath",
    ],
  },
  {
    id: "pediatric",
    image: "https://images.pexels.com/photos/6502546/pexels-photo-6502546.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Pediatric Dentistry",
    short: "Gentle first visits for little smiles.",
    description:
      "Children's dentistry is unhurried and kind. First visits are about trust — a look around, a ride in the chair, a check-up with no pressure — so children grow up unafraid of the dentist.",
    duration: "Short, relaxed visits",
    forWhom: "Children of all ages",
    points: [
      "First visits built around trust",
      "Check-ups, fluoride and fissure sealants",
      "Advice for parents, in plain words",
    ],
  },
  {
    id: "emergency",
    image: "https://images.pexels.com/photos/305564/pexels-photo-305564.jpeg?auto=compress&cs=tinysrgb&w=1200",
    name: "Emergency Dental Care",
    short: "When it hurts, come straight in.",
    description:
      "A broken tooth, a lost filling, swelling or sudden pain — message us on WhatsApp and we will fit you in as soon as we can. Tell us what happened and we will guide you until you arrive.",
    duration: "Same-day where possible",
    forWhom: "Pain, swelling or a broken tooth",
    points: [
      "Message us on WhatsApp first",
      "Pain relief and a clear plan",
      "We will tell you honestly what is needed",
    ],
  },
];

export const PHOTOS = {
  // Hero: woman smiling in a dental chair, dentist in a teal gown beside her
  // (Pexels 6627476, Kaboompics). Searched Pexels thoroughly (3 queries, 8
  // candidates viewed: 3881145, 3845549, 19879741, 3845744, 3845727, 5355705,
  // 4269368, 3884111) — no better match exists: the sitting/smiling-at-camera
  // results are Black women (rejected per user) or white/blonde women not
  // smiling. 6627476 stays: bright, warm, teal, plausibly South Asian.
  hero: "https://images.pexels.com/photos/6627476/pexels-photo-6627476.jpeg?auto=compress&cs=tinysrgb&w=1800",
  // Full clinic room, no people.
  heroAlt: "https://images.pexels.com/photos/6812453/pexels-photo-6812453.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // About: bright modern operatory, BLUE chair (from behind), white cabinets,
  // monitor + big window — closest to the Sample 01 About photo (teal chair,
  // white cabinets, X-ray screen). Replaces 6812453 (black chair, darker).
  clinic1: "https://images.pexels.com/photos/6809642/pexels-photo-6809642.jpeg?auto=compress&cs=tinysrgb&w=1200",
  clinic2: "https://images.pexels.com/photos/6809634/pexels-photo-6809634.jpeg?auto=compress&cs=tinysrgb&w=1200",
  clinic3: "https://images.pexels.com/photos/6812480/pexels-photo-6812480.jpeg?auto=compress&cs=tinysrgb&w=1200",
  clinic4: "https://images.pexels.com/photos/9062525/pexels-photo-9062525.jpeg?auto=compress&cs=tinysrgb&w=1200",
  clinic5: "https://images.pexels.com/photos/69686/pexels-photo-69686.jpeg?auto=compress&cs=tinysrgb&w=1200",
  clinic6: "https://images.pexels.com/photos/4687346/pexels-photo-4687346.jpeg?auto=compress&cs=tinysrgb&w=1200",
  // Before/after: mouth-focused close-ups only, no faces.
  before: "https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=1200",
  after: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const FAQS = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Appointments keep your wait short, so booking ahead is best. If you are in pain, message us on WhatsApp and we will fit you in as soon as we can.",
  },
  {
    q: "Does scaling hurt?",
    a: "Most patients feel only mild vibration and cool water. If your gums are sensitive, tell us — we work gently and take breaks whenever you need one.",
  },
  {
    q: "How do I know which treatment I need?",
    a: "Book a check-up first. We examine, explain what we find in plain words, and agree a plan with you before any treatment starts. No surprises.",
  },
  {
    q: "Can children be seen here?",
    a: "Yes — children's first visits are kept short and relaxed, so they leave happy rather than afraid. Parents are welcome in the room throughout.",
  },
  {
    q: "How do I pay?",
    a: "Payment is taken at the clinic after your visit. Message us on WhatsApp if you would like to know the fee for a specific treatment before you come.",
  },
];

export type AppointmentStatus = "Pending" | "Confirmed" | "Cancelled";

export type Appointment = {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string; // ISO yyyy-mm-dd
  time: string;
  status: AppointmentStatus;
  createdAt: string; // ISO timestamp
};

export const APPOINTMENTS_KEY = "tdh-appointments";

export function loadAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(APPOINTMENTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Appointment[]) : [];
  } catch {
    return [];
  }
}

export function saveAppointments(list: Appointment[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(list));
}
