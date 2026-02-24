import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PricingHero from "@/components/pricing/PricingHero";
import PricingPlans from "@/components/pricing/PricingPlans";
import PerformanceLedger from "@/components/pricing/PerformanceLedger";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import BottomCTA from "@/components/marketing/BottomCTA";
import Link from "next/link";

export const metadata = {
  title: "California Psychiatric Virtual Assistant Pricing | Virtual Minds",
  description: "Transparent pricing for California psychiatric virtual assistant services. From $5,000/month for solo practices. HIPAA-compliant support with no setup fees or contracts.",
};

const pricingPlans = [
  {
    name: "Solo Practice Support",
    description: "The complete administrative foundation for solo psychiatrists wanting to focus exclusively on patient care.",
    price: "$5,000",
    period: "month",
    features: [
      "Dedicated Psychiatric Assistant",
      "Full-Time Specialized Support",
      "EHR Setup & Optimization",
      "Integrated Pharmacy & Lab Liaison",
      "Insurance Eligibility & Benefits",
      "Daily Billing & Revenue Monitoring"
    ],
    highlight: false,
    cta: "Start Solo Support"
  },
  {
    name: "Group Practice Support",
    description: "Designed for high-volume group practices and multi-provider psychiatric centers requiring scaled support.",
    price: "$8,500",
    period: "month",
    features: [
      "Multi-Provider Dedicated Team",
      "Full Administrative Management",
      "Prior Authorization Workflow",
      "In-Depth Billing & RCM Support",
      "Practice Policy Development",
      "Quarterly Performance Reviews"
    ],
    highlight: true,
    cta: "Start Group Support"
  },
  {
    name: "Custom Enterprise",
    description: "Custom operational design for large health systems and specialized psychiatric networks.",
    price: "Custom",
    period: "quote",
    features: [
      "Tailored Staffing Solutions",
      "Direct System Integrations",
      "Advanced Compliance Support",
      "Full Brand Representation",
      "Institutional Performance SLAs",
      "Direct Strategy Access"
    ],
    highlight: false,
    cta: "Request Custom Audit"
  }
];

const performanceAnalysis = [
  {
    metric: "Recover Clinical Time",
    value: "15+ Hrs",
    label: "Reclaimed weekly for patient care or leadership."
  },
  {
    metric: "Revenue Protection",
    value: "$25k+",
    label: "Annual recovered revenue via denial prevention."
  },
  {
    metric: "Audit Risk Reduction",
    value: "High",
    label: "Eliminating $50k+ in potential compliance exposure."
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Investment Strategy" }
        ]}
      />

      <main className="flex-grow">
        <PricingHero />
        <PricingPlans plans={pricingPlans} />
        <PerformanceLedger items={performanceAnalysis} />

        {/* INVESTMENT ROI CALCULATOR */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Your Savings</span>
                <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 italic">ROI</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                See exactly how the <strong className="text-trust-navy">Solo Practice Support</strong> plan pays for itself by reclaiming your clinical time and reducing overhead.
              </p>
            </div>

            <PracticeLeaksCalculator />
          </div>
        </section>

        {/* FAQ - REFINED */}
        <section className="py-32 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Common Questions</span>
                <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-trust-navy tracking-tight">
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Q&A</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: "Are there setup or training fees?", a: "No. Our professional fees include onboarding, EHR integration, and initial compliance audits." },
                { q: "Is the VA specialized in Psychiatry?", a: "Exclusively. All assistants are trained in psychiatric pharmacology and California-specific compliance." },
                { q: "What is the commitment period?", a: "We operate on flexible monthly scales. We earn our place in your clinical workflow every 30 days." },
                { q: "Can we scale to a group practice?", a: "Our platform supports 1 to 50 providers. Multi-clinician group discounts are available." }
              ].map((faq, i) => (
                <div key={i} className="bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all group">
                  <h4 className="text-lg font-bold text-trust-navy mb-4 flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">help</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 text-base leading-relaxed pl-9 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BottomCTA />
      </main>

      <Footer />
    </div>
  );
}
