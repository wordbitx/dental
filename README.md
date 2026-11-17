# THE DENTAL HOME — Premium Dental Clinic Website

A senior-level Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion website for **THE DENTAL HOME**, a real dental clinic in Cantt, Lahore.

- **Clinic:** THE DENTAL HOME — Ground Floor, Al Rehman Shopping Plaza, Opposite HBL Cantt Branch, Saddar Bazar, Dhaka Road, Cantt, Lahore
- **Phone / WhatsApp:** +92 304 2727277
- **Google rating:** 5.0 stars from 504 reviews (no website — this demo is the pitch)

## What it includes

- Multi-page app: Home, Treatments, About, Booking, Contact + Admin dashboard
- Multi-step booking flow (service → date → preferred time → details → confirmation) that saves bookings to localStorage and hands the summary to WhatsApp
- Before/after smile slider, treatment explorer (8 treatments), FAQ accordion, sticky booking bar
- Framer Motion page transitions + scroll reveals, mobile-first, premium "boutique hotel, not a clinic" design (warm ivory, deep teal, brass; Fraunces + Inter)

## Admin dashboard

Visit **/admin** to see bookings made through the booking flow (stored in the browser only, localStorage key `tdh-appointments`). Confirm or Cancel each appointment. No backend, no auth — demo only. No appointments are seeded; only bookings a visitor actually makes appear here.

## Run

```bash
npm install
npm run dev
```

Deploys on Vercel straight from this repo.

> WordbitX demo — built for THE DENTAL HOME, Lahore.
