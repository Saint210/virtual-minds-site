import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import { getPage } from "@/lib/pages-service";
import { getServices } from "@/lib/services-service";
import SanityPageBuilder from "@/components/home/SanityPageBuilder";

export const metadata: Metadata = {
  title: "Virtual Minds | Psychiatric Practice Management & Operational Intelligence",
  description: "California psychiatric virtual assistants: Reclaim 20+ hours weekly, recover $300K+ annually. HIPAA-compliant practice management. SimplePractice experts. Book free audit.",
  alternates: {
    canonical: 'https://thevirtualminds.com'
  },
};

export default async function Home() {
  const pageData = await getPage("home");
  const services = await getServices();

  // If no Sanity data exists yet, we could show a fallback or just empty sections
  // But since we just ran the migration, pageData should exist.

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Navbar />
      </div>
      <main className="flex-grow">

        {pageData ? (
          <SanityPageBuilder sections={pageData.sections} services={services} />
        ) : (
          <>
            <Hero />
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-slate-400 font-bold">Please publish the 'Home' page in Sanity Studio to see dynamic content.</p>
              </div>
            </section>
          </>
        )}

      </main>
      <Footer />
    </div>
  );
}
