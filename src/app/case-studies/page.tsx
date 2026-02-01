import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Operational Recovery Analysis | Psychiatric Practice Rescue Stories",
  description: "Real-world operational recovery and practice management stabilization for California mental health practices. From administrative collapse to high-yield clinical autonomy.",
  keywords: ["psychiatric case studies", "practice rescue", "emergency VA coverage", "mental health operations success", "california psychiatry ROI"],
};

const caseStudies = [
  {
    title: "San Francisco Practice - VA Shutdown Rescue",
    category: "Crisis Recovery",
    location: "San Francisco, CA",
    image: "/images/case-crisis-recovery.png",
    stat: "$85,000 / Annual ROI",
    challenge: "A sudden agency closure left this high-volume practice without administrative coverage overnight. Medication refill requests were pending, and the pharmacy coordination pipeline was completely severed.",
    solution: "Virtual Minds deployed an emergency stabilization team within 24 hours, hardened the EHR infrastructure, and restored pharmacy liaison workflows with zero clinical downtime.",
    metric: { label: "Stabilization Time", value: "24 Hours" }
  },
  {
    title: "Downtown LA - Operational Recovery",
    category: "Administrative Crisis",
    location: "Los Angeles, CA",
    image: "/images/case-administrative-crisis.png",
    stat: "$144,000 / Annual Yield",
    challenge: "Chronic documentation lag and a 12% claim rejection rate were threatening the practice's solvency. The lead provider was spending 15+ hours/week on backend audit fixes.",
    solution: "Implemented the 'Executive Intelligence' revenue model, transitioning med-management coding to a 90833-optimized mix and automating PA tracking.",
    metric: { label: "Rejection Rate Reduction", value: "-82%" }
  },
  {
    title: "Beverly Hills Group - Compliance Shield",
    category: "Compliance Emergency",
    location: "Beverly Hills, CA",
    image: "/images/case-compliance-emergency.png",
    stat: "100% Audit Readiness",
    challenge: "A multi-provider group discovered critical privacy and medication management documentation gaps that exposed the practice to severe regulatory liability during a peer review.",
    solution: "Full operational scrub and deployment of a clinical coordinator to manage mandatory in-person evaluation logs and secure portal triaging.",
    metric: { label: "Compliance Score", value: "100%" }
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3] text-trust-navy font-display">
      <Navbar />

      <main className="flex-grow">
        {/* EXECUTIVE STRATEGIC HERO */}
        <section className="relative pt-12 md:pt-24 pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Left Column (60%) */}
              <div className="lg:w-[60%]">
                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10">
                  <Link href="/" className="hover:text-[#D2691E] transition-colors">Home</Link>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-trust-navy">Practice Rescue Stories</span>
                </nav>

                <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-full px-4 py-1.5 text-[#D2691E] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                  <span className="material-symbols-outlined text-[#D2691E] text-[16px]">emergency_home</span>
                  Stablization & Yield Reports
                </div>

                <h1 className="font-display text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                  Operational <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                    Recovery Analysis.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl">
                  Real-world operational analysis of California psychiatric practices transitioning from administrative crisis to high-yield clinical autonomy.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
                    <span className="material-symbols-outlined text-green-500 font-bold">verified</span>
                    <span className="text-sm font-bold text-trust-navy whitespace-nowrap">Verified ROI Metrics</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
                    <span className="material-symbols-outlined text-[#D2691E] font-bold">clinical_notes</span>
                    <span className="text-sm font-bold text-trust-navy whitespace-nowrap">Emergency Stabilizations</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Intel (40%) */}
              <div className="lg:w-[40%] group w-full">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-2xl aspect-[4/5] bg-white group-hover:border-[#D2691E]/30 transition-colors">
                  <Image
                    src="/images/visual-intel-efficiency.png"
                    alt="Psychiatry Practice Recovery & Efficiency Metrics"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Metric Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-xl">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Avg Recovery Time</p>
                        <p className="text-3xl font-bold text-trust-navy">48<span className="text-[#D2691E]">hrs</span></p>
                      </div>
                      <div className="size-10 bg-[#D2691E] rounded-full flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">timer_off</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CASE STUDY GRID */}
        <section className="py-32 bg-white border-t border-slate-100">
          <div className="max-w-[1300px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {caseStudies.map((study, idx) => (
                <div key={idx} className="group flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-slate-100 group-hover:border-[#D2691E]/30 group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-trust-navy shadow-lg border border-slate-100">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col px-2">
                    <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
                      <span className="material-symbols-outlined text-sm text-[#D2691E]">location_on</span>
                      {study.location}
                    </div>

                    <h3 className="text-2xl font-bold text-trust-navy group-hover:text-[#D2691E] transition-colors leading-tight mb-6">
                      {study.title}
                    </h3>

                    <div className="p-8 bg-[#FAF8F3] rounded-[2.5rem] border border-slate-100 mb-6 flex-grow group-hover:shadow-md transition-shadow">
                      <p className="text-sm font-bold text-[#D2691E] mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">trending_up</span>
                        {study.stat}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed font-medium">
                        {study.challenge}
                      </p>
                    </div>

                    <Link
                      href="/book-consultation"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-trust-navy hover:text-[#D2691E] transition-colors pl-2"
                    >
                      Analyze Full Rescue <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FIRM-WIDE YIELD MATRIX "BAND" */}
        <section className="py-32 bg-[#1A2332] relative overflow-visible">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-20">
              <span className="text-[#D2691E] font-black uppercase tracking-[0.4em] text-xs mb-6 block">Firm-Wide Performance Aggregates</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6" style={{ color: '#FFFFFF' }}>
                The Yield <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Matrix.</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                Average operational improvements across the Virtual Minds specialized psychiatric network.
              </p>
            </div>
          </div>

          {/* FLOATING PERFORMANCE BAND */}
          <div className="relative w-full bg-white border-y border-white/10 shadow-2xl shadow-black/20">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {[
                  { label: "Admin Recovery", value: "23.5 hrs", desc: "Weekly hours reclaimed" },
                  { label: "Patient Capacity", value: "+7.5 / wk", desc: "New intakes facilitated" },
                  { label: "Billing Accuracy", value: "95.5%", desc: "Claim acceptance rate" },
                  { label: "Network ROI", value: "$98k / yr", desc: "Avg operational yield" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 md:p-12 flex flex-col justify-center items-center text-center group hover:bg-slate-50 transition-colors">
                    <div className="text-4xl md:text-5xl font-black text-trust-navy mb-3 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D2691E] mb-2">{stat.label}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FINAL STRATEGIC CTA */}
        <section className="bg-[#FAF8F3] py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2691E]/10 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-trust-navy">
              Write Your <br /> Success Story.
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              From administrative crisis to operational excellence. Join the California psychiatrists scaling with Virtual Minds intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-consultation"
                className="group relative overflow-hidden px-12 py-6 bg-[#D2691E] text-white font-bold text-xl rounded-2xl shadow-xl shadow-[#D2691E]/20 hover:scale-[1.02] transition-all hover:bg-[#B8860B]"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span className="material-symbols-outlined">calendar_today</span>
                  Review Your Infrastructure
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
