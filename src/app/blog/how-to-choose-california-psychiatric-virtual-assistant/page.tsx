import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";
import NewsletterBreakout from "@/components/blog/NewsletterBreakout";

export const metadata = {
  title: "California Psychiatric Virtual Assistant: 2026 Selection Guide",
  description: "Ultimate guide to selecting a California psychiatric virtual assistant. Expert framework for HIPAA and state privacy compliance, EMR-native workflows, and clinical ROI for psychiatrists.",
  keywords: ["California psychiatric virtual assistant", "psychiatric VA service", "mental health virtual assistant California", "HIPAA compliant psychiatric VA", "California privacy compliance for psychiatrists"],
  openGraph: {
    title: "How to Choose a California Psychiatric Virtual Assistant",
    description: "The 2026 framework for selecting a specialized psychiatric operations partner in California.",
    url: "https://thevirtualminds.com/blog/how-to-choose-california-psychiatric-virtual-assistant",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.webp",
        width: 1200,
        height: 900,
        alt: "California Psychiatric Virtual Assistant Selection Guide",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const selectionTakeaways = [
  {
    point: "California Psychiatric Virtual Assistant Logic",
    detail: "Stop thinking in terms of general staffing. A California psychiatric virtual assistant requires specialized training in psychiatric crisis protocols and medication management workflows."
  },
  {
    point: "State Privacy & HIPAA Regulatory Shield",
    detail: "Compliance in California is a structural requirement. Beyond HIPAA, mastery of California-specific privacy standards is essential for psychiatric data integrity."
  },
  {
    point: "EMR-Native Architecture",
    detail: "Your EMR—whether DrChrono, CharmHealth, or Kareo—should be your engine. Select partners who can engineer workflows directly within these platforms."
  },
  {
    point: "Clinical Performance",
    detail: "Every minute of a psychiatric VA's time should be measured by its return on clinical throughput. Focus on models that increase psychiatrist salary and practice value."
  }
];

const selectionCriteria = [
  {
    title: "Clinical Logic Mastery",
    description: "Deep understanding of psychiatric assessment protocols and risk-mitigated medication workflows.",
    icon: "psychology",
    critical: true,
    details: [
      "Crisis intervention protocols",
      "Medication refill logic",
      "Psychiatric note architecture",
      "Patient assessment triaging",
      "Insurance pharmacy navigation"
    ]
  },
  {
    title: "California Regulatory Core",
    description: "Native expertise in state privacy, Medi-Cal, and California-specific telehealth regulations.",
    icon: "gavel",
    critical: true,
    details: [
      "State privacy data handling standards",
      "Medi-Cal reimbursement logic",
      "CA telehealth scope laws",
      "State-specific consent forms",
      "CA employment compliance"
    ]
  },
  {
    title: "Security Infrastructure",
    description: "Verified HIPAA/SOC2 compliance with multi-layer data encryption and signed BAAs.",
    icon: "shield_lock",
    critical: true,
    details: [
      "Execution of enterprise BAAs",
      "Encrypted data silos",
      "Audit-ready trail logs",
      "Phishing defense protocols",
      "Strict access control logic"
    ]
  },
  {
    title: "EMR Optimization",
    description: "Masters-level proficiency in psychiatric-native EMR platforms and template engineering.",
    icon: "database_settings",
    critical: true,
    details: [
      "DrChrono template design",
      "CharmHealth workflow logic",
      "Luminello custom fields",
      "Direct EMR integration engineering",
      "Automated charting protocols"
    ]
  },
  {
    title: "Operational Redundancy",
    description: "High-uptime infrastructure with built-in backup systems for no-fail practice operations.",
    icon: "settings_backup_restore",
    critical: false,
    details: [
      "Seamless coverage rotations",
      "Crisis triage backups",
      "Data redundancy systems",
      "Rapid ticket response logic",
      "Scalability on-demand"
    ]
  },
  {
    title: "The ROI Engine",
    description: "Measurable metrics focusing on increasing collections and reducing admin friction.",
    icon: "trending_up",
    critical: false,
    details: [
      "Performance-per-provider analysis",
      "Collection rate optimization",
      "Admin-to-clinical hour ratio",
      "Patient retention metrics",
      "Overhead reduction tracking"
    ]
  }
];

const comparisonTable = [
  {
    factor: "Philosophical Approach",
    virtualMinds: "Infrastructure Engineering",
    generalVA: "Basic Administrative Tasks",
    freelancer: "Ad-hoc task management"
  },
  {
    factor: "Clinical Proficiency",
    virtualMinds: "Psychiatric-Native Workflows",
    generalVA: "Generic admin only",
    freelancer: "Variable, often unverified"
  },
  {
    factor: "Regulatory Shield",
    virtualMinds: "California Privacy Core",
    generalVA: "Generic global compliance",
    freelancer: "None / High-risk liability"
  },
  {
    factor: "Technical Depth",
    virtualMinds: "EMR Template Engineering",
    generalVA: "Basic software entry",
    freelancer: "Manual, slow execution"
  },
  {
    factor: "Performance Focus",
    virtualMinds: "Investment ROI Optimization",
    generalVA: "Hour-for-hour labor",
    freelancer: "Pay-by-task (low value)"
  }
];

const tableOfContents = [
  { id: "executive-briefing", title: "Executive Briefing" },
  { id: "infrastructure-vs-staffing", title: "Infrastructure vs. Staffing" },
  { id: "vetting-criteria", title: "Vetting Standards" },
  { id: "comparison-matrix", title: "The Operational Matrix" },
  { id: "risk-assessment", title: "Risk Mitigation" }
];

const relatedArticles = [
  {
    title: "The Revenue Optimization Model for CA Psychiatrists",
    slug: "psychiatrist-salary-california-private-practice",
    category: "Performance Strategy"
  },
  {
    title: "Scaling Your Infrastructure Without Burnout",
    slug: "how-to-scale-private-psychiatry-practice",
    category: "Operations"
  },
  {
    title: "Case Study: Reducing Admin Overhead by 70%",
    slug: "operational-process-review-mental-health-practices",
    category: "Case Study"
  }
];

export default function HowToChoosePsychiatricVABlog() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <main className="flex-grow">
        {/* EXECUTIVE STRATEGY HERO */}
        <section className="relative pt-12 md:pt-20 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6">
            <div className="max-w-4xl">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-10">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link href="/blog" className="hover:text-primary transition-colors">Intelligence</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-trust-navy">Strategic Vetting</span>
              </nav>

              <div className="inline-flex items-center gap-3 bg-trust-navy/[0.03] border border-trust-navy/10 rounded-lg px-4 py-2 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                2026 Operational Framework
              </div>

              <h1 className="font-serif text-5xl md:text-8xl font-bold text-trust-navy mb-8 leading-[0.9] tracking-tight text-balance">
                California <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#B8860B] to-primary animate-gradient-x">
                  Psychiatric VA.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-12 max-w-2xl">
                The 2026 vetting framework for selecting a California psychiatric virtual assistant service that operates as an infrastructure asset.
              </p>

              {/* STATS BAR */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-200/60">
                <div className="space-y-1">
                  <p className="text-[10px] font-black !text-primary uppercase tracking-widest">Focus</p>
                  <p className="text-xl font-bold text-trust-navy">Infrastructure</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black !text-primary uppercase tracking-widest">Compliance</p>
                  <p className="text-xl font-bold text-trust-navy">CA Native</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black !text-primary uppercase tracking-widest">Performance Target</p>
                  <p className="text-xl font-bold text-trust-navy">80%+ ROI</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black !text-primary uppercase tracking-widest">Authority</p>
                  <p className="text-xl font-bold text-trust-navy">Verified BAA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16">

              {/* CONTENT AREA */}
              <div className="flex-1 min-w-0">

                {/* EXECUTIVE BRIEFING BOX */}
                <div id="executive-briefing" className="bg-trust-navy rounded-[2.5rem] p-10 lg:p-16 text-white mb-20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="w-12 h-px bg-primary" />
                      <h2 className="font-serif text-2xl lg:text-3xl font-bold italic !text-white text-white">Executive Briefing</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {selectionTakeaways.map((t, i) => (
                        <div key={i} className="group">
                          <h3 className="font-bold text-lg mb-3 flex items-center gap-3">
                            <span className="text-[10px] font-black text-white/60">0{i + 1}</span>
                            <span className="text-white group-hover:text-primary transition-colors">{t.point}</span>
                          </h3>
                          <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                            {t.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* THE SHIFT: INFRASTRUCTURE VS STAFFING */}
                <div id="infrastructure-vs-staffing" className="mb-24">
                  <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/2">
                      <h2 className="font-serif text-4xl lg:text-5xl font-bold text-trust-navy mb-8 leading-tight">
                        Why Specialized <br />
                        <span className="text-primary italic">Psychiatric VAs are Essential in California.</span>
                      </h2>
                      <p className="text-xl text-slate-600 font-display leading-relaxed mb-8">
                        Elite psychiatric practices do not "hire general VAs." They engineer operational layers with a specialized California psychiatric virtual assistant who understands HIPAA, state privacy laws, and the legal nuances of Medi-Cal billing.
                      </p>
                      <p className="text-slate-500 leading-relaxed mb-6">
                        When you hire a virtual assistant for your psychiatric clinic, you are adding more than just labor—you are adding a specialized system. This infrastructure handles psychiatric terminology, medication management, and complex EMR workflows (like DrChrono or CharmHealth) that general virtual assistants simply cannot navigate.
                      </p>
                    </div>
                    <div className="lg:w-1/2 w-full">
                      <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
                        <Image
                          src="/images/visual-intel-audit.png"
                          alt="California Psychiatric Virtual Assistant Selection Matrix"
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/80 to-transparent p-10 flex flex-col justify-end">
                          <h3 className="text-white font-serif text-2xl font-bold">The Vetting Matrix</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <NewsletterBreakout />

                {/* VETTING STANDARDS GRID */}
                <div id="vetting-criteria" className="mb-24 pt-24 border-t border-slate-200">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-4xl lg:text-6xl font-bold text-trust-navy mb-6 italic">The Operational Standards</h2>
                    <p className="text-slate-500 text-lg">Six structural pillars required for high-performance California psychiatric operations.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectionCriteria.map((c, i) => (
                      <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                        <div className="flex items-start justify-between mb-8">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${c.critical ? 'bg-red-50 text-red-500' : 'bg-primary/10 text-primary'} group-hover:scale-110 transition-transform`}>
                            <span className="material-symbols-outlined text-3xl font-light">{c.icon}</span>
                          </div>
                          {c.critical && (
                            <span className="bg-red-50 text-red-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-red-100">Critical Requirement</span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">{c.title}</h3>
                        <p className="text-slate-500 mb-8 font-light text-lg leading-relaxed">{c.description}</p>

                        <div className="space-y-3">
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Vetting Checklist:</p>
                          {c.details.map((d, di) => (
                            <div key={di} className="flex items-center gap-3 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {d}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* THE OPERATIONAL MATRIX (RE-DESIGNED TABLE) */}
                <div id="comparison-matrix" className="mb-24 py-24 px-10 bg-trust-navy rounded-[3rem] text-white overflow-hidden relative shadow-[0_40px_80px_-20px_rgba(11,28,62,0.5)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="text-center mb-16 relative z-10">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 !text-white text-white">Psychiatric VA <span className="!text-primary">Comparison Matrix.</span></h2>
                    <p className="!text-slate-300 font-light">Comparing infrastructure models for board-certified specialists.</p>
                  </div>

                  <div className="relative z-10 overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-y-4">
                      <thead>
                        <tr className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                          <th className="px-8 pb-4">Structural Factor</th>
                          <th className="px-8 pb-4 text-primary">Virtual Minds Model</th>
                          <th className="px-8 pb-4">Standard Agency</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.map((row, i) => (
                          <tr key={i} className="group">
                            <td className="bg-white/5 backdrop-blur-sm px-8 py-6 rounded-l-2xl border-l border-y border-white/10 font-bold text-white group-hover:bg-white/10 transition-colors">
                              {row.factor}
                            </td>
                            <td className="bg-primary/10 px-8 py-6 border-y border-primary/20 text-primary font-black">
                              {row.virtualMinds}
                            </td>
                            <td className="bg-white/5 backdrop-blur-sm px-8 py-6 rounded-r-2xl border-r border-y border-white/10 text-slate-400 font-light">
                              {row.generalVA}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* RISK MITIGATION */}
                <div id="risk-assessment" className="mb-24">
                  <div className="flex items-center gap-6 mb-12">
                    <h2 className="font-serif text-3xl lg:text-5xl font-bold text-trust-navy italic">Risk Mitigation</h2>
                    <div className="h-px bg-slate-200 flex-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { title: "Privacy Liability", risk: "Financial/Legal", detail: "California-specific privacy fines can be significant without proper state-compliant infrastructure." },
                      { title: "Clinical Errors", risk: "Patient Safety", detail: "Non-specialized staff misinterpreting psychiatric urgent requests or medication refills." },
                      { title: "No BAA Shield", risk: "Compliance", detail: "Operating without a signed BAA for mental health data is a critical HIPAA 'Willful Neglect' violation." }
                    ].map((r, i) => (
                      <div key={i} className="p-8 bg-red-50/50 border border-red-100 rounded-3xl">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="material-symbols-outlined text-red-500">warning</span>
                          <h3 className="font-bold text-trust-navy">{r.title}</h3>
                        </div>
                        <p className="text-xs font-black text-red-600 uppercase tracking-widest mb-3">Risk: {r.risk}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{r.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* SIDEBAR AREA */}
              <div className="lg:w-80 shrink-0">
                <div className="sticky top-32">
                  <BlogSidebar
                    tableOfContents={tableOfContents}
                    relatedArticles={relatedArticles}
                    currentUrl="https://thevirtualminds.com/blog/how-to-choose-california-psychiatric-virtual-assistant"
                    articleTitle="Engineering Vetting Standards"
                  />

                  {/* SIDEBAR CTA CARD */}
                  <div className="mt-12 p-8 bg-gradient-to-br from-primary to-primary-hover rounded-[2rem] text-white shadow-xl shadow-primary/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <h3 className="font-serif text-2xl font-bold mb-4 relative z-10 transition-transform group-hover:-translate-y-1 !text-white text-white">Unlock Practice Intelligence.</h3>
                    <p className="!text-white/90 text-white/90 text-sm mb-8 relative z-10 font-medium leading-relaxed">
                      Transform your clinical operations with a strategic intelligence assessment for private psychiatry.
                    </p>
                    <Link href="/book-consultation" className="block text-center py-4 bg-trust-navy text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-secondary transition-all hover:scale-[1.02] relative z-10 shadow-lg shadow-black/20">
                      Schedule Assessment
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PREMIUM FOOTER CTA */}
        <section className="py-24 bg-trust-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-trust-navy via-trust-navy to-primary/20 pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-7xl font-bold !text-white mb-10 leading-[0.9] tracking-tight">
                Design Your <br />
                <span className="!text-primary">High-Performance </span> Practice.
              </h2>
              <p className="text-xl md:text-2xl !text-slate-400 font-display leading-relaxed mb-12">
                Stop hiring virtual assistants. Start engineering an infrastructure that works for the board-certified specialist.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/book-consultation"
                  className="bg-primary hover:bg-primary-hover !text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-[0_20px_40px_-5px_rgba(210,105,30,0.3)] flex items-center justify-center gap-4 group"
                >
                  Request Infrastructure Audit
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
              <p className="mt-8 text-slate-500 text-xs font-black uppercase tracking-[0.3em]">Built specifically for elite California Psychiatrists</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
