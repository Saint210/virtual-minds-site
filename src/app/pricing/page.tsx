import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
  title: "Investment Strategy | Psychiatric Practice Management Pricing | Virtual Minds",
  description: "Transparent professional investment for California psychiatric practices. ROI-focused practice management and operational support for psychiatrists.",
  keywords: ["psychiatric va pricing", "mental health virtual assistant cost", "psychiatric practice management pricing", "medical billing pricing", "healthcare VA investment"],
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
    description: "Bespoke operational design for large health systems and specialized psychiatric networks.",
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

const yieldAnalysis = [
  {
    metric: "Recovered Clinical Time",
    value: "$24,000 / mo",
    label: "30 hours/week returned for patient sessions"
  },
  {
    metric: "Billing Loss Prevention",
    value: "$8,500 / mo",
    label: "Preventing denials and insurance payment loss"
  },
  {
    metric: "Coding Optimization",
    value: "$4,200 / mo",
    label: "Optimizing 90833/90832 add-on utilization"
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
        {/* CLINICAL STRATEGIC HERO */}
        <section className="relative pt-4 md:pt-6 pb-24 overflow-hidden bg-[#FAF8F3]">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Left Column (60%) */}
              <div className="lg:w-[60%]">

                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                  <span className="material-symbols-outlined text-primary text-[16px]">payments</span>
                  Operational ROI Framework
                </div>

                <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                  Invest in <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                    Clinical Autonomy.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10 max-w-2xl">
                  Strategic pricing for California&apos;s elite psychiatric practices. High-fidelity infrastructure designed to return clinical time and revenue.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="material-symbols-outlined text-primary font-bold">verified</span>
                    <span className="text-sm font-bold text-slate-600 whitespace-nowrap">HIPAA Compliant Ops</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                    <span className="material-symbols-outlined text-accent font-bold">medical_services</span>
                    <span className="text-sm font-bold text-slate-600 whitespace-nowrap">Specialized Psychiatric Support</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Intel (40%) */}
              <div className="lg:w-[40%] group w-full">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/20 transition-colors">
                  <Image
                    src="/images/pricing-hero-premium.png"
                    alt="California Psychiatrist Reviewing Practice ROI and Investment Strategy"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICING PLANS */}
        <section className="py-32 bg-white border-t border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Investment Tiers</span>
                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                <span className="relative inline-block">
                  Strategic
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D2691E]/20"></span>
                </span>
                {' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Pricing</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                <strong className="text-trust-navy">ROI-focused investment</strong> designed to{' '}
                <span className="relative inline-block text-[#D2691E] font-bold">
                  return clinical time and revenue
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D2691E]/30"></span>
                </span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                plan.highlight ? (
                  // FEATURED NAVY CARD (Group Practice Support)
                  <div key={idx} className="relative group">
                    <div className="absolute -inset-2 bg-[#D2691E]/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-12 rounded-[3rem] bg-trust-navy text-white shadow-2xl overflow-hidden border-2 border-[#D2691E]/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
                      {/* Background Glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:bg-[#D2691E]/30 transition-colors"></div>

                      {/* Strategic Choice Badge - Premium Redesign */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#D2691E] to-[#B8860B] rounded-full blur-md opacity-60"></div>
                          {/* Badge */}
                          <div className="relative bg-gradient-to-r from-[#D2691E] to-[#B8860B] text-white text-[9px] font-bold uppercase tracking-[0.25em] px-6 py-2.5 rounded-full shadow-xl border border-white/20 flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm font-bold">star</span>
                            <span>Strategic Choice</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-3xl font-serif font-bold !text-white">
                            {plan.name}
                          </h3>
                          <span className="material-symbols-outlined text-5xl text-[#D2691E]/30">
                            hub
                          </span>
                        </div>

                        <div className="mb-8">
                          <p className="text-base leading-relaxed mb-6 font-medium text-slate-300">
                            <strong className="text-white">Scaled support for high-volume practices</strong>—
                            <span className="text-[#D2691E]"> multi-provider teams</span> requiring{' '}
                            <strong className="text-white">full administrative management</strong>.
                          </p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-6xl font-serif font-bold text-white">{plan.price}</span>
                            <span className="text-sm font-black uppercase tracking-widest text-slate-400">/{plan.period}</span>
                          </div>
                        </div>

                        <div className="space-y-4 mb-12">
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#D2691E]">Infrastructure Includes:</p>
                          {plan.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="size-6 rounded-lg bg-[#D2691E]/20 flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-[#D2691E] text-sm">check_circle</span>
                              </div>
                              <span className="text-base font-bold text-white">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/book-consultation"
                        className="relative z-10 w-full py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                      >
                        {plan.cta}
                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ) : (
                  // STANDARD CREAM CARDS
                  <div
                    key={idx}
                    className="group p-12 bg-[#FAF8F3] rounded-[3rem] border-2 border-slate-200 hover:border-[#D2691E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between hover:-translate-y-2"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-serif font-bold text-trust-navy">
                          {plan.name}
                        </h3>
                        <span className="material-symbols-outlined text-5xl text-[#D2691E]/20 group-hover:text-[#D2691E]/40 transition-colors">
                          {idx === 0 ? 'foundation' : 'business_center'}
                        </span>
                      </div>

                      <div className="mb-8">
                        <p className="text-base leading-relaxed mb-6 font-medium text-slate-600">
                          {idx === 0 ? (
                            <>
                              <strong className="text-trust-navy">Complete administrative foundation</strong> for solo psychiatrists wanting to{' '}
                              <span className="text-[#D2691E] font-bold">focus exclusively on patient care</span>.
                            </>
                          ) : (
                            <>
                              <strong className="text-trust-navy">Bespoke operational design</strong> for large health systems and{' '}
                              <span className="text-[#D2691E] font-bold">specialized psychiatric networks</span>.
                            </>
                          )}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-serif font-bold text-trust-navy">{plan.price}</span>
                          <span className="text-sm font-black uppercase tracking-widest text-slate-400">/{plan.period}</span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-12">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-slate-400">Infrastructure Includes:</p>
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[18px] text-[#D2691E]">check_circle</span>
                            <span className="text-base font-bold text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/book-consultation"
                      className="w-full py-4 bg-white border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-[#D2691E] hover:text-[#D2691E] transition-all shadow-sm flex items-center justify-center gap-2 group/btn"
                    >
                      {plan.cta}
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ROI YIELD LEDGER */}
        <section className="py-32 bg-[#FAF8F3] relative overflow-hidden border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

              <div className="lg:col-span-12 text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">ROI Analysis</span>
                  <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                  Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Yield</span> Ledger
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                  <strong className="text-trust-navy">Infrastructure investment</strong> is the catalyst for{' '}
                  <span className="text-[#D2691E] font-bold">practice growth</span>.
                </p>
              </div>

              {/* Yield Figures */}
              <div className="lg:col-span-7 space-y-6">
                {yieldAnalysis.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[2.5rem] p-10 border-2 border-slate-200 hover:border-[#D2691E]/30 shadow-sm flex flex-col md:flex-row justify-between items-center group hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl bg-[#D2691E]/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[#D2691E] text-2xl">
                          {idx === 0 ? 'schedule' : idx === 1 ? 'shield' : 'trending_up'}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-trust-navy mb-1">{item.metric}</h4>
                        <p className="text-base text-slate-600 font-medium">{item.label}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-4xl font-serif font-bold text-[#D2691E] group-hover:scale-110 transition-transform">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="bg-trust-navy text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-2 border-[#D2691E]/30">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#D2691E]/30 transition-all" />
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <h4 className="text-2xl font-bold !text-[#D2691E] mb-2">Total Monthly Yield</h4>
                      <p className="text-base text-slate-300 font-medium">Projected value created per psychiatrist</p>
                    </div>
                    <div className="text-6xl font-serif font-bold text-white tracking-tight">$36,700</div>
                  </div>
                </div>
              </div>

              {/* Comparison Matrix */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF8F3] to-white p-12 rounded-[3.5rem] border-2 border-slate-200 self-stretch shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-[#D2691E] text-2xl">compare_arrows</span>
                  <h3 className="text-2xl font-serif font-bold text-trust-navy">Competitive Reality</h3>
                </div>
                <div className="space-y-10">
                  {[
                    { title: "Standard In-House Team", cost: "$12k-$18k / mo", note: "Salary, benefits, office rent, and direct management overhead.", icon: "person_off", color: "text-slate-400" },
                    { title: "Virtual Minds Support", cost: "$5k / mo", note: "Specialized, HIPAA-compliant, and fully managed clinical ops.", icon: "verified", color: "text-[#D2691E]" }
                  ].map((comp, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`size-10 rounded-xl ${comp.title.includes("Minds") ? 'bg-[#D2691E]/10' : 'bg-slate-100'} flex items-center justify-center`}>
                            <span className={`material-symbols-outlined ${comp.color}`}>{comp.icon}</span>
                          </div>
                          <span className="font-bold text-trust-navy">{comp.title}</span>
                        </div>
                        <span className={`text-sm font-bold uppercase tracking-widest ${comp.title.includes("Minds") ? 'text-[#D2691E]' : 'text-slate-400'}`}>{comp.cost}</span>
                      </div>
                      <p className="text-base text-slate-600 pl-[52px] font-medium">{comp.note}</p>
                      {comp.title.includes("Minds") && (
                        <div className="pl-[52px] space-y-2 mt-4">
                          {["Turnkey RevOps", "Instant Scalability", "Psychiatric Specific"].map(t => (
                            <div key={t} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#D2691E] rounded-full" />
                              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">{t}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ - REFINED */}
        <section className="py-32 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Common Questions</span>
                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-trust-navy tracking-tight">
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Q&A</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: "Are there setup or training fees?", a: "No. Our professional fees include onboarding, EHR integration, and initial policy hardening audits." },
                { q: "Is the VA specialized in Psychiatry?", a: "Exclusively. All assistants are trained in psychiatric pharmacology and California-specific compliance." },
                { q: "What is the commitment period?", a: "We operate on flexible monthly scales. We earn our place in your clinical workflow every 30 days." },
                { q: "Can we scale to a group practice?", a: "Our infrastructure supports 1 to 50 providers. Multi-clinician group discounts are available." }
              ].map((faq, i) => (
                <div key={i} className="bg-[#FAF8F3] p-8 rounded-[2rem] border-2 border-slate-200 hover:border-[#D2691E]/30 hover:shadow-lg transition-all group">
                  <h4 className="text-lg font-bold text-trust-navy mb-4 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#D2691E] text-xl flex-shrink-0">help</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 text-base leading-relaxed pl-9 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL STRATEGIC CTA */}
        <section className="bg-trust-navy py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2691E]/30 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight !text-white">
              Claim Your <span className="text-[#D2691E]">Focus</span>.
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Identify exactly <strong className="text-white">how much time and revenue</strong> your practice is losing to administrative friction with a{' '}
              <span className="text-[#D2691E] font-bold">15-minute Recovery Plan</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-consultation"
                className="px-12 py-5 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-xl rounded-2xl shadow-2xl shadow-[#D2691E]/20 hover:shadow-[#D2691E]/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                See My Recovery Plan
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

