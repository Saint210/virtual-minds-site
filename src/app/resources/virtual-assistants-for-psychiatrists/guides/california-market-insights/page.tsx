import MarketInsights from "@/components/marketing/MarketInsights";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "California Psychiatric Market Insights | Virtual Minds",
  description: "Comprehensive analysis of California's psychiatric virtual assistant market. Discover trends, opportunities, and growth statistics for mental health practices.",
  openGraph: {
    title: "California Psychiatric Market Insights - Virtual Minds",
    description: "Data-driven insights into California's psychiatric virtual assistant market with 7,797 psychiatrists and 28.1% annual growth.",
    url: "https://thevirtualminds.com/california-market-insights",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.webp",
        width: 1200,
        height: 900,
        alt: "California Psychiatric Market Analysis",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function CaliforniaMarketInsights() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "California Market Insights" }
        ]}
      />

      <main className="flex-grow">
        <MarketInsights />

        {/* Additional Content Sections */}
        <section className="relative py-20 overflow-hidden bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Common questions about California psychiatric virtual assistants and market trends
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-trust-navy mb-3">
                  How quickly is the California psychiatric VA market growing?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The medical virtual assistant market is growing at 28.1% CAGR, with California representing a significant portion due to its 7,797 active psychiatrists and expanding telehealth adoption.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-trust-navy mb-3">
                  What makes California psychiatric practices unique?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  California has the highest number of psychiatrists in the US, with behavioral health spending accounting for 8.2% of total commercial health spending, up from 6.6% in 2018.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-trust-navy mb-3">
                  How does telehealth impact psychiatric practices?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The global telehealth market is growing at 24.68% CAGR through 2030, with psychiatry leading adoption. This creates increased demand for virtual assistants who can manage remote workflows.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-trust-navy mb-3">
                  What ROI can California psychiatrists expect?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  California psychiatric practices typically see significant reduction in admin time, precise billing support accuracy, and sustainable increase in patient capacity, resulting in maximum operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
              Ready to Optimize Your Practice?
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              Join California psychiatrists who are leveraging market growth to improve patient care and practice efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Book Strategy Call
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
              </Link>

              <Link
                href="/roi-calculator"
                className="group border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors inline-flex items-center"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined">calculate</span>
                  Calculate ROI
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
