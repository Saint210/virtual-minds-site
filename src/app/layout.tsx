import type { Metadata } from "next";
import { Manrope, Outfit, Lora } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import PlausibleProvider from "@/components/analytics/PlausibleProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import PostHogAnalytics from "@/components/analytics/PostHogAnalytics";

// Add Material Symbols font
import Link from "next/link";
import MedicalSchema from "@/components/seo/MedicalSchema";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
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
        url: "https://thevirtualminds.com/images/hero-new.webp",
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
    images: ["https://thevirtualminds.com/images/hero-new.webp"],
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
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://www.transparenttextures.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* Material Icons - Critical for UI */}
        {/* Material Icons - Optimized for Non-Blocking Loading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';
                document.head.appendChild(link);
              })();
            `
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${outfit.variable} ${lora.variable} antialiased`}
        style={{ backgroundColor: '#FAF8F3' }}
      >
        <PlausibleProvider>
          <GoogleAnalytics />
          <MedicalSchema />
          <SpeedInsights />
          {/* <PostHogAnalytics /> */}
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}

