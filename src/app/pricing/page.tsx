import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TrackedLink from "@/components/ui/TrackedLink";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import BottomCTA from "@/components/marketing/BottomCTA";

export const metadata = {
  title: "California Psychiatric Virtual Assistant Pricing | Virtual Minds",
  description: "Transparent pricing for California psychiatric virtual assistant services. From $5,000/month for solo practices. HIPAA-compliant support with no setup fees or contracts.",
  keywords: ["psychiatric va pricing", "mental health virtual assistant cost", "psychiatric practice management pricing", "California psychiatric assistant cost", "healthcare VA investment"],
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
                  California Psychiatric Virtual Assistant <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                    Pricing & Investment
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10 max-w-2xl">
                  Strategic pricing for California&apos;s elite psychiatric practices. High-fidelity infrastructure designed to return clinical time and revenue.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-sm">
                    <span className="material-symbols-outlined text-primary font-bold">verified</span>
                    <span className="text-sm font-bold text-slate-600 whitespace-nowrap">HIPAA Compliant Ops</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-sm">
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
                <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Investment Tiers</span>
                <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                <span className="relative inline-block">
                  Strategic
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary/20"></span>
                </span>
                {' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Pricing</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                <strong className="text-trust-navy">Quality-focused investment</strong> designed to{' '}
                <span className="relative inline-block text-primary font-bold">
                  return clinical focus and autonomy
                  <span className="absolute bottom-0 left-0 w-full h-2px bg-primary/30"></span>
                </span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                plan.highlight ? (
                  // FEATURED NAVY CARD (Group Practice Support)
                  <div key={idx} className="relative group">
                    <div className="absolute -inset-2 bg-primary/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative p-12 rounded-[3rem] bg-trust-navy text-white shadow-2xl overflow-hidden border-2 border-primary/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
                      {/* Background Glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:bg-primary/30 transition-colors"></div>

                      {/* Strategic Choice Badge */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full blur-md opacity-60"></div>
                          <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white text-[9px] font-bold uppercase tracking-[0.25em] px-6 py-2.5 rounded-full shadow-xl border border-white/20 flex items-center gap-2">
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
                          <span className="material-symbols-outlined text-5xl text-primary/30">
                            hub
                          </span>
                        </div>

                        <div className="mb-8">
                          <p className="text-base leading-relaxed mb-6 font-medium text-slate-300">
                            <strong className="text-white">Scaled support for high-volume practices</strong>—
                            <span className="text-primary"> multi-provider teams</span> requiring{' '}
                            <strong className="text-white">full administrative management</strong>.
                          </p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-6xl font-serif font-bold text-white">{plan.price}</span>
                            <span className="text-sm font-black uppercase tracking-widest text-slate-400">/{plan.period}</span>
                          </div>
                        </div>

                        <ul className="space-y-4 mb-12">
                          <li className="flex gap-3 text-slate-300">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-base font-bold text-white">Comprehensive administrative coverage</span>
                          </li>
                          <li className="flex gap-3 text-slate-300">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-base font-bold text-white">Precise billing support coordination</span>
                          </li>
                          {plan.features.slice(2).map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                              <span className="text-base font-bold text-white">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <TrackedLink
                        href="/book-consultation"
                        ctaName="Pricing Page - Start Group Support"
                        source="pricing_group_plan"
                        className="relative z-10 w-full py-4 bg-primary hover:bg-[#B8860B] text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                      >
                        {plan.cta}
                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                      </TrackedLink>
                    </div>
                  </div>
                ) : (
                  // STANDARD GLASS CARDS
                  <div
                    key={idx}
                    className="group p-12 bg-white/50 backdrop-blur-md rounded-[3rem] border border-slate-200 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between hover:-translate-y-2 h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full blur-[60px] -mr-10 -mt-10 pointer-events-none group-hover:bg-primary/5 transition-colors"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-serif font-bold text-trust-navy">
                          {plan.name}
                        </h3>
                        <span className="material-symbols-outlined text-5xl text-slate-300 group-hover:text-primary/40 transition-colors">
                          {idx === 0 ? 'foundation' : 'business_center'}
                        </span>
                      </div>

                      <div className="mb-8">
                        <p className="text-base leading-relaxed mb-6 font-medium text-slate-600">
                          {idx === 0 ? (
                            <>
                              <strong className="text-trust-navy">Complete administrative foundation</strong> for solo psychiatrists wanting to{' '}
                              <span className="text-primary font-bold">focus exclusively on patient care</span>.
                            </>
                          ) : (
                            <>
                              <strong className="text-trust-navy">Bespoke operational design</strong> for large health systems and{' '}
                              <span className="text-primary font-bold">specialized psychiatric networks</span>.
                            </>
                          )}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-serif font-bold text-trust-navy">{plan.price}</span>
                          <span className="text-sm font-black uppercase tracking-widest text-slate-400">/{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-12">
                        <li className="flex gap-3 text-slate-600">
                          <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                          <span className="text-base font-bold">Significant reduction in administrative time</span>
                        </li>
                        <li className="flex gap-3 text-slate-600">
                          <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                          <span className="text-base font-bold">Precise billing support coordination</span>
                        </li>
                        {plan.features.slice(2).map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-base font-bold text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <TrackedLink
                      href="/book-consultation"
                      ctaName={idx === 0 ? "Pricing Page - Start Solo Support" : "Pricing Page - Request Custom Audit"}
                      source={idx === 0 ? "pricing_solo_plan" : "pricing_custom_plan"}
                      className="relative z-10 w-full py-4 bg-white border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm flex items-center justify-center gap-2 group/btn"
                    >
                      {plan.cta}
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </TrackedLink>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* PERFORMANCE LEDGER - BENTO GRID REFINEMENT */}
        <section className="py-32 bg-[#FAF8F3] relative overflow-hidden border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

              <div className="lg:col-span-12 text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="text-primary font-bold uppercase tracking-widest text-[11px]">ROI Analysis</span>
                  <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                  Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Performance</span> Ledger
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                  <strong className="text-trust-navy">Infrastructure investment</strong> is the catalyst for{' '}
                  <span className="text-primary font-bold">operational excellence</span>.
                </p>
              </div>

              {/* Performance Figures */}
              <div className="lg:col-span-7 space-y-6">
                {performanceAnalysis.map((item, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-200 hover:border-primary/30 shadow-sm flex flex-col md:flex-row justify-between items-center group hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-2xl">
                          {idx === 0 ? 'schedule' : idx === 1 ? 'payments' : 'shield'}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-trust-navy mb-1">{item.metric}</h4>
                        <p className="text-sm md:text-base text-slate-600 font-medium">{item.label}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-3xl md:text-4xl font-serif font-bold text-primary group-hover:scale-110 transition-transform">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="bg-trust-navy text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-2 border-primary/30">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-all" />
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <h4 className="text-2xl font-bold !text-primary mb-2">Monthly Efficiency Gain</h4>
                      <p className="text-base text-slate-300 font-medium max-w-xs">Projected value created per psychiatrist through administrative offloading.</p>
                    </div>
                    <div className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">Maximized</div>
                  </div>
                </div>
              </div>

              {/* Comparison Matrix */}
              <div className="lg:col-span-5 bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] border border-slate-200 self-stretch shadow-2xl shadow-primary/5">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-symbols-outlined text-primary text-2xl">compare_arrows</span>
                  <h3 className="text-2xl font-serif font-bold text-trust-navy">Competitive Reality</h3>
                </div>
                <div className="space-y-10">
                  {[
                    { title: "Standard In-House Team", cost: "$12k-$18k / mo", note: "Salary, benefits, office rent, and direct management overhead.", icon: "person_off", color: "text-slate-400" },
                    { title: "Virtual Minds Support", cost: "$5k / mo", note: "Specialized, HIPAA-compliant, and fully managed clinical ops.", icon: "verified", color: "text-primary" }
                  ].map((comp, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`size-10 rounded-xl ${comp.title.includes("Minds") ? 'bg-primary/10' : 'bg-slate-100'} flex items-center justify-center`}>
                            <span className={`material-symbols-outlined ${comp.color}`}>{comp.icon}</span>
                          </div>
                          <span className="font-bold text-trust-navy">{comp.title}</span>
                        </div>
                        <span className={`text-sm font-bold uppercase tracking-widest ${comp.title.includes("Minds") ? 'text-primary' : 'text-slate-400'}`}>{comp.cost}</span>
                      </div>
                      <p className="text-base text-slate-600 pl-[52px] font-medium leading-relaxed">{comp.note}</p>
                      {comp.title.includes("Minds") && (
                        <div className="pl-[52px] space-y-2 mt-4">
                          {["Turnkey RevOps", "Instant Scalability", "Psychiatric Specific"].map(t => (
                            <div key={t} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
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
        </section >

        {/* FAQ - REFINED */}
        < section className="py-32 bg-white border-y border-slate-100" >
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
                { q: "Are there setup or training fees?", a: "No. Our professional fees include onboarding, EHR integration, and initial policy hardening audits." },
                { q: "Is the VA specialized in Psychiatry?", a: "Exclusively. All assistants are trained in psychiatric pharmacology and California-specific compliance." },
                { q: "What is the commitment period?", a: "We operate on flexible monthly scales. We earn our place in your clinical workflow every 30 days." },
                { q: "Can we scale to a group practice?", a: "Our infrastructure supports 1 to 50 providers. Multi-clinician group discounts are available." }
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
        </section >

        {/* WHAT'S INCLUDED - SYSTEM MODULES */}
        <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">System Capabilities</span>
                <h2 className="font-serif text-4xl text-trust-navy leading-tight">Included <span className="italic text-slate-400">Modules</span></h2>
              </div>
              <p className="text-slate-500 max-w-sm text-sm font-medium leading-relaxed">
                Comprehensive psychiatric virtual assistant services tailored to your practice infrastructure.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {[
                {
                  id: "SYS_CLINICAL_01",
                  title: "Virtual Assistant Services",
                  subtitle: "Clinical Operations",
                  desc: "Dedicated psychiatric assistants for intake, patient communication, and administrative support.",
                  impact: "Recover 25k/yr overhead.",
                  icon: "support_agent",
                  link: "/services/virtual-assistant"
                },
                {
                  id: "SYS_AUDIT_02",
                  title: "Practice Consulting",
                  subtitle: "Operational Diagnostics",
                  desc: "Strategic operational review and practice optimization for established psychiatrists.",
                  impact: "Achieve firm-wide clarity.",
                  icon: "analytics",
                  link: "/services/practice-consulting",
                  highlight: true
                },
                {
                  id: "SYS_RCM_03",
                  title: "Billing & Revenue Cycle",
                  subtitle: "Revenue Stabilization",
                  desc: "Revenue stabilization through verification, prior auths, and billing coordination.",
                  impact: "Recover 4-7% lost revenue.",
                  icon: "payments",
                  link: "/services/billing-and-rcm"
                }
              ].map((service, idx) => (
                <Link
                  key={idx}
                  href={service.link}
                  className={`group relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden
                        ${service.highlight
                      ? "border-2 border-primary/20 shadow-xl shadow-primary/5 ring-1 ring-primary/10"
                      : "border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5"
                    }`}
                >
                  {/* Technical Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* ID Tag */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className={`size-12 rounded-xl flex items-center justify-center transition-colors duration-300 
                            ${service.highlight ? "bg-primary text-white" : "bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white"}`}>
                      <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                      {service.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-6 relative z-10">
                    <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary text-sm">verified</span>
                      <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">
                        Impact
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {service.impact}
                    </p>
                  </div>

                  {/* Active State Indicator */}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                View All Services <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING FAQS */}
        < section className="py-24 bg-[#FAF8F3]" >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Common Questions</span>
              <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">FAQs</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg">
                <h3 className="font-serif text-xl text-trust-navy mb-3 font-bold">
                  How much does a psychiatric virtual assistant cost in California?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Pricing starts at $5,000/month for solo practices with dedicated full-time support. Group practices typically invest $8,500/month for multi-provider teams. Custom enterprise solutions are available for large health systems. All plans include no setup fees, no contracts, and comprehensive HIPAA-compliant workflows.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg">
                <h3 className="font-serif text-xl text-trust-navy mb-3 font-bold">
                  Are there setup fees or contracts?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  No. We believe in earning your business every month. There are no setup fees, no long-term contracts, and no hidden costs. You can cancel anytime with 30 days notice. Our pricing is transparent and all-inclusive.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg">
                <h3 className="font-serif text-xl text-trust-navy mb-3 font-bold">
                  What's included in the monthly price?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Everything. Your monthly investment includes a dedicated psychiatric virtual assistant, comprehensive HIPAA training, EHR setup and optimization, ongoing support, practice management consulting, and all administrative workflows. No additional fees for software, training, or support.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg">
                <h3 className="font-serif text-xl text-trust-navy mb-3 font-bold">
                  How does pricing compare to hiring in-house?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Hiring an in-house psychiatric assistant in California typically costs $60,000-$80,000/year plus benefits (20-30%), payroll taxes, training, and management overhead—totaling $75,000-$105,000 annually. Our solo practice plan at $5,000/month ($60,000/year) provides specialized psychiatric expertise with no benefits, taxes, or HR overhead. <Link href="/blog/psychiatrist-salary-california-private-practice" className="text-primary font-bold hover:underline">See detailed cost analysis</Link>.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg">
                <h3 className="font-serif text-xl text-trust-navy mb-3 font-bold">
                  What's the ROI on a virtual assistant?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Most psychiatrists recover 15+ billable hours per week, worth $25,000-$50,000+ annually at California reimbursement rates. Additionally, practices typically recover 4-7% in lost revenue through better billing coordination and denial prevention. The average practice sees positive ROI within 60-90 days. <Link href="/book-consultation" className="text-primary font-bold hover:underline">Request your custom ROI analysis</Link>.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/faq" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                View All FAQs <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section >

        {/* CALIFORNIA COVERAGE - SYSTEM LOCATIONS */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Available Locations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 italic">California Practices</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                Specialized psychiatric virtual assistant services across California's major metropolitan areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { name: "Los Angeles", slug: "los-angeles", savings: "$65,000/yr", id: "01" },
                { name: "San Francisco", slug: "san-francisco", savings: "$82,000/yr", id: "02" },
                { name: "San Diego", slug: "san-diego", savings: "$58,000/yr", id: "03" },
                { name: "Sacramento", slug: "sacramento", savings: "$45,000/yr", id: "04" }
              ].map((loc, idx) => (
                <Link
                  key={idx}
                  href={`/locations/${loc.slug}`}
                  className="group relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5 text-left"
                >
                  {/* Technical Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* ID Tag */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="size-10 rounded-xl flex items-center justify-center transition-colors duration-300 bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white">
                      <span className="material-symbols-outlined text-xl">location_city</span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                      SYS_LOC_{loc.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mb-6 relative z-10">
                    <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                      {loc.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"> Avg Savings:</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        {loc.savings}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-slate-100 relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">
                      Active Node
                    </span>
                    <span className="material-symbols-outlined text-slate-300 text-sm group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>

                  {/* Active State Indicator */}
                  <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/locations" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                View All Locations <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section >

        <BottomCTA />
      </main >

      <Footer />
    </div >
  );
}

