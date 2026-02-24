import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServingCaliforniaSection from "@/components/home/ServingCaliforniaSection";
import HeroSection from "@/components/home/HeroSection";
import FoundingStorySection from "@/components/home/FoundingStorySection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";
import WhyVirtualMindsSection from "@/components/home/WhyVirtualMindsSection";
import OperatingSystemSection from "@/components/home/OperatingSystemSection";
import ServicePillarsSection from "@/components/home/ServicePillarsSection";
import LatestInsightsSection from "@/components/home/LatestInsightsSection";
import AboutContactSection from "@/components/home/AboutContactSection";

import ComparisonTable from "@/components/home/ComparisonTable";
import AuditLeadMagnet from "@/components/home/AuditLeadMagnet";

// Lazy load calculator to improve initial page load
const PracticeLeaksCalculator = dynamic(() => import("@/components/tools/PracticeLeaksCalculator"), {
  loading: () => (
    <div className="w-full max-w-5xl mx-auto h-96 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200 animate-pulse">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-1/2 p-12 bg-slate-50"></div>
        <div className="lg:w-1/2 p-12 bg-slate-200"></div>
      </div>
    </div>
  )
});

export const metadata = {
  title: "California Psychiatric Virtual Assistant | Virtual Minds",
  description: "California Psychiatric Virtual Assistant services for high-acuity practices. HIPAA-compliant support for intake, billing, and practice management. Recover 15+ hours weekly.",
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Minds",
    "url": "https://virtualminds.com",
    "logo": "https://virtualminds.com/images/logo.png",
    "description": "Specialized practice management for mental health professionals in California.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-310-400-6266",
      "contactType": "customer service"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <FoundingStorySection />
        <WhoWeServeSection />
        <WhyVirtualMindsSection />

        {/* PRACTICE OVERHEAD CALCULATOR */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Calculate Your Savings</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8 leading-tight">
                How Much Are You <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Losing to Overhead?</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                See exactly how much administrative inefficiency is costing your practice every year
              </p>
            </div>

            <PracticeLeaksCalculator />

            <div className="text-center mt-12">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                Get Your Free Practice Audit <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        <OperatingSystemSection />
        <ServingCaliforniaSection />
        <ComparisonTable />
        <AuditLeadMagnet />
        <ServicePillarsSection />
        <LatestInsightsSection />
        <AboutContactSection />
      </main>

      <Footer />
    </div>
  );
}
