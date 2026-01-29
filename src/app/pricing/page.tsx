import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "California's Gold Standard Psychiatric VA Pricing | Virtual Minds",
  description: "Transparent professional investment for California psychiatric practices. No hidden fees. ROI-focused operational support for psychiatrists.",
  openGraph: {
    title: "Psychiatric VA Pricing - Virtual Minds California",
    description: "California-based virtual assistants for California psychiatric practices. Transparent pricing with clear ROI analysis.",
    url: "https://thevirtualminds.com/pricing",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.png",
        width: 1200,
        height: 900,
        alt: "Psychiatric VA Pricing",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for solo psychiatric practices getting started with virtual assistance",
    price: "$2,500",
    period: "month",
    features: [
      "1 Dedicated Psychiatric VA",
      "20 Hours/Week Support",
      "HIPAA Certified Staff",
      "Basic EMR Integration",
      "Email & Phone Support",
      "Monthly Reporting"
    ],
    notIncluded: [
      "Prior Authorizations",
      "Complex Billing Support"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    description: "Ideal for growing psychiatric practices needing comprehensive support",
    price: "$3,500",
    period: "month",
    features: [
      "2 Dedicated Psychiatric VAs",
      "40 Hours/Week Support",
      "Full HIPAA Compliance",
      "Advanced EMR Integration",
      "Prior Authorizations",
      "Superbill Generation",
      "Insurance Contact Support",
      "Priority Support",
      "Custom Reporting"
    ],
    notIncluded: [],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    description: "Complete solution for established psychiatric practices and groups",
    price: "Custom",
    period: "quote",
    features: [
      "3+ Dedicated Psychiatric VAs",
      "Unlimited Support Hours",
      "Full HIPAA Compliance Management",
      "Custom EMR Workflows",
      "Complete Billing Support",
      "Practice Consulting",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA Guarantee"
    ],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales"
  }
];

const roiData = [
  {
    metric: "Time Savings",
    calculation: "20 hours × $150/hour × 50 weeks",
    monthlyValue: "$15,000",
    description: "Clinical hours reclaimed for patient care"
  },
  {
    metric: "Increased Revenue",
    calculation: "3 patients × $200/visit × 50 weeks",
    monthlyValue: "$6,000",
    description: "Revenue from additional patient capacity"
  },
  {
    metric: "Billing Accuracy",
    calculation: "10% improvement × $50,000/month",
    monthlyValue: "$5,000",
    description: "Reduced claim denials and rework"
  }
];

const comparisonData = [
  {
    item: "In-House Administrative Staff",
    cost: "$6,000-8,000/month",
    issues: ["Training costs", "Benefits overhead", "Limited psychiatric knowledge", "Vacation coverage needed"]
  },
  {
    item: "General Virtual Assistant",
    cost: "$1,500-3,000/month",
    issues: ["No HIPAA training", "No psychiatric expertise", "High turnover", "Management overhead"]
  },
  {
    item: "Virtual Minds",
    cost: "$2,500-4,000/month",
    benefits: ["California-based team", "Psychiatric specialized", "HIPAA certified", "California expertise", "No management needed"]
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Pricing" }
        ]}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FAF8F3] py-24 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <span className="text-[#D2691E] font-bold uppercase tracking-widest text-sm mb-6 block italic">Strategic Investment</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#2A2A2A] leading-[1.1] mb-8">
                Investing in <br />
                <span className="text-[#D2691E]">Practice Freedom.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl italic">
                Simple, transparent pricing for California psychiatric practices. No hidden fees. Just elite administrative infrastructure designed to scale with your clinical vision.
              </p>

              <div className="inline-flex items-center gap-3 bg-[#9CAF88]/10 border border-[#9CAF88]/20 text-[#9CAF88] px-6 py-3 rounded-full text-sm font-bold shadow-sm">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span>100% HIPAA Compliant Operations</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-[40px] p-10 flex flex-col justify-between transition-all duration-300 ${plan.popular
                      ? 'bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] text-white shadow-2xl scale-105'
                      : 'bg-[#FAF8F3] border border-[#D2691E]/5 text-[#2A2A2A]'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#D2691E] text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-xl">
                      Elite Recommended
                    </div>
                  )}

                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className={`text-2xl font-serif font-bold ${plan.popular ? 'text-white' : 'text-[#2A2A2A]'}`}>
                        {plan.name}
                      </h3>
                      <div className={`p-2 rounded-xl ${plan.popular ? 'bg-white/10' : 'bg-[#D2691E]/10'}`}>
                        <span className="material-symbols-outlined text-[#D2691E]">
                          {index === 0 ? 'chair' : index === 1 ? 'architecture' : 'business_center'}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="text-5xl font-serif font-black text-[#D2691E]">
                        {plan.price}
                      </span>
                      <span className={`text-sm font-bold uppercase tracking-widest ml-2 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                        /{plan.period}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-12">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className={`material-symbols-outlined text-[18px] ${plan.popular ? 'text-green-400' : 'text-green-600'}`}>check_circle</span>
                        <span className={`text-sm font-medium ${plan.popular ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/book-consultation"
                    className={`w-full block text-center font-black uppercase tracking-widest text-xs py-5 rounded-2xl transition-all ${plan.popular
                        ? "bg-[#D2691E] hover:bg-[#B8860B] text-white shadow-xl shadow-[#D2691E]/20"
                        : "border-2 border-[#D2691E] text-[#D2691E] hover:bg-[#D2691E]/5 shadow-sm"
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mb-6">
                Your <span className="text-[#D2691E]">ROI Blueprint</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
                See exactly how much value Virtual Minds creates for your clinical operations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-[40px] p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-8">Monthly Value Creation</h3>
                <div className="space-y-8">
                  {roiData.map((item, index) => (
                    <div key={index} className="border-b border-slate-50 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-[#2A2A2A]">{item.metric}</h4>
                        <span className="font-black text-2xl text-green-600">{item.monthlyValue}</span>
                      </div>
                      <p className="text-slate-500 text-sm mb-2">{item.description}</p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.calculation}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-[#9CAF88]/10 rounded-[30px] border border-[#9CAF88]/20">
                  <div className="flex justify-between items-center text-[#2A2A2A]">
                    <span className="font-bold text-lg">Total Scaled Value:</span>
                    <span className="font-black text-3xl text-[#9CAF88]">$26,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[40px] p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-8">Competitive Context</h3>
                <div className="space-y-8">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="border-b border-slate-50 pb-6 last:border-0">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-[#2A2A2A]">{item.item}</h4>
                        <span className="text-sm font-black text-slate-500">{item.cost}</span>
                      </div>
                      <ul className="space-y-2">
                        {(item.issues || item.benefits || []).map((point, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs">
                            <span className={`material-symbols-outlined text-[16px] ${item.issues ? "text-red-400" : "text-green-500"}`}>
                              {item.issues ? "close" : "check"}
                            </span>
                            <span className="text-slate-600 font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mb-6">
                Operational <span className="text-[#D2691E]">FAQs</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { q: "What's included in the monthly fee?", a: "Everything you need: dedicated VA, HIPAA compliance, EMR integration, training, and ongoing support. No hidden fees." },
                { q: "Can I customize my plan?", a: "Yes! Enterprise plans are fully customizable. Contact us for a tailored solution for your practice." },
                { q: "How does the guarantee work?", a: "30-day risk-free guarantee. If you're not completely satisfied, we'll refund your first month." },
                { q: "Are there setup fees?", a: "No setup fees for Professional and Enterprise plans. Starter plan includes free onboarding." }
              ].map((faq, i) => (
                <div key={i} className="p-8 bg-[#FAF8F3] rounded-[30px] border border-slate-50 shadow-sm">
                  <h3 className="font-bold text-[#2A2A2A] mb-4 text-lg">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* High-Contrast Final CTA */}
        <section className="bg-[#FAF8F3] py-32 relative overflow-hidden border-t border-slate-100">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2691E]/10 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center text-[#2A2A2A] relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight">
              Architect Your Future Practice.
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Stop managing the chaos. Start leading your practice. Book your 15-minute Strategy Audit to define your infrastructure roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-consultation"
                className="px-12 py-5 bg-[#D2691E] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
              >
                Book Your Strategy Audit
              </Link>
              <Link
                href="/case-studies"
                className="px-12 py-5 bg-white text-[#2A2A2A] border border-slate-200 font-bold text-xl rounded-2xl hover:bg-slate-50 transition-all font-serif shadow-sm"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
