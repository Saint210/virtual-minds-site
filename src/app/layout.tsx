import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import PostHogAnalytics from "@/components/analytics/PostHogAnalytics";

// Add Material Symbols font
import Link from "next/link";
import MedicalSchema from "@/components/seo/MedicalSchema";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Los Angeles Psychiatric Virtual Assistants | Virtual Minds",
  description: "Los Angeles-based virtual assistants for California psychiatrists. Experts in Telehealth workflows, HIPAA compliance, and remote practice management.",
  openGraph: {
    title: "Virtual Minds - Los Angeles Virtual Assistants for California Psychiatrists",
    description: "Los Angeles-based virtual assistants specializing in psychiatric workflow, HIPAA compliance, and California mental health regulations.",
    url: "https://thevirtualminds.com",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.png",
        width: 1200,
        height: 900,
        alt: "Virtual Minds Assistant Working with Psychiatrist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Minds - Los Angeles Virtual Assistants for California Psychiatrists",
    description: "Los Angeles-based virtual assistants for California psychiatrists. Local experts trained in psychiatric workflows, HIPAA compliance, and California mental health regulations.",
    images: ["https://thevirtualminds.com/images/hero-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${manrope.variable} ${outfit.variable} antialiased`}
        style={{ backgroundColor: '#FAF8F3' }}
      >
        <GoogleAnalytics />
        <MedicalSchema />
        <SpeedInsights />
        {/* <PostHogAnalytics /> */}
        {children}
      </body>
    </html>
  );
}

