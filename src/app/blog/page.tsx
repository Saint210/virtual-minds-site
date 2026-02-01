import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BlogFeed from "@/components/blog/BlogFeed";

import { blogPosts, categories } from "@/lib/blog-data";

export const metadata = {
  title: "California Psychiatric Virtual Assistant Blog | Virtual Minds",
  description: "Expert insights on California psychiatric virtual assistants, HIPAA compliance, EMR integration, and practice management. Latest trends and best practices.",
  openGraph: {
    title: "California Psychiatric VA Blog - Virtual Minds",
    description: "Expert insights on virtual assistants for California psychiatric practices. HIPAA compliance, EMR integration, and practice optimization tips.",
    url: "https://thevirtualminds.com/blog",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.png",
        width: 1200,
        height: 900,
        alt: "California Psychiatric VA Blog",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};


const upgradedSlugs = [
  "how-to-choose-california-psychiatric-virtual-assistant",
  "revenue-cycle-management-vs-billing",
  "psychiatrist-salary-california-private-practice",
  "how-to-scale-private-psychiatry-practice",
  "implementing-efficiency-models-mental-health",
  "operational-process-review-mental-health-practices",
  "optimizing-patient-workflow-psychiatry"
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Executive Intelligence" }
        ]}
      />

      <main className="flex-grow">
        {/* EXECUTIVE INTELLIGENCE HERO */}
        <section className="relative pt-4 md:pt-6 pb-16 overflow-hidden">
          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="max-w-4xl">

              {/* Strategic Briefing Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                Practice Growth insights
              </div>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                Executive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent animate-gradient-x">
                  Intelligence.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-6 max-w-2xl">
                A repository of clinical frameworks and operational logic for board-certified specialists scaling in California.
              </p>
            </div>
          </div>
        </section>

        <BlogFeed
          posts={blogPosts}
          categories={categories}
          upgradedSlugs={upgradedSlugs}
        />
      </main>
      <Footer />
    </div>
  );
}
