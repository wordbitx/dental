import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyBookingBar from "@/components/StickyBookingBar";
import { CLINIC } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${CLINIC.name} — Dental Clinic in Cantt, Lahore`,
  description:
    "THE DENTAL HOME — strong, honest dental care in Saddar Bazar, Cantt, Lahore. Rated 5.0 stars from 504 Google reviews. Book scaling, root canal, implants, braces and whitening on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="pb-24">{children}</main>
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
