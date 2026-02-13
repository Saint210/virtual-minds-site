import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import LocationTagline from "@/components/marketing/LocationTagline";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import TrackedLink from "@/components/ui/TrackedLink";

export const metadata = {
  title: "Psychiatric EHR Optimization & Management | California Specialists",
  description: "Beyond simple support—we optimize psychiatric EHR workflows for California MDs. Integration experts for DrChrono, SimplePractice, and CharmHealth with privacy-audited protocols.",
  keywords: ["psychiatric EHR optimization", "DrChrono virtual assistant", "SimplePractice psychiatric workflow", "CharmHealth management", "medical record automation psychiatry", "HIPAA compliant EMR support"],
  openGraph: {
    title: "EHR Optimization for California Psychiatrists | Virtual Minds",
    description: "Data-driven EHR management that optimizes practice performance. Specialized integration for DrChrono, CharmHealth, and SimplePractice.",
    url: "https://thevirtualminds.com/services/ehr-emr-management",
    siteName: "Virtual Minds",
    images: [
      {
        url: "https://thevirtualminds.com/images/hero-new.webp",
        width: 1200,
        height: 900,
        alt: "Psychiatric EHR Optimization Visualization",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const roiData = [
  {
    platform: "SimplePractice",
    struggle: "Manual superbill reconciliation & intake chaos.",
    solution: "Automated billing bridges & dedicated intake desk.",
    impact: "Revenue Optimization"
  },
  {
    platform: "DrChrono",
    struggle: "Template fatigue & iPad latency issues.",
    solution: "Custom psychiatric assessment macros & background sync.",
    impact: "Administrative Relief"
  },
  {
    platform: "CharmHealth",
    struggle: "Complex portal onboarding for patients.",
    solution: "Managed Patient Concierge & helpdesk support.",
    impact: "Seamless Experience"
  }
];

const emrSystems = [
  {
    name: "DrChrono",
    category: "iPad-Based / High Tech",
    specialty: "Concierge & Cash-Pay",
    integrationLevel: "Full Ecosystem",
    features: ["iPad Check-ins", "Custom Assessment Templates", "OnPatient Portal", "Direct Billing Bridges"],
    californiaSupport: true,
    recommended: true
  },
  {
    name: "CharmHealth",
    category: "Cloud-Based / Comprehensive",
    specialty: "Group Practice Focus",
    integrationLevel: "Full Ecosystem",
    features: ["Telehealth Integration", "E-Prescribing Mastery", "Patient Portal Mgmt", "Advanced Analytics"],
    californiaSupport: true,
    recommended: true
  },
  {
    name: "Luminello",
    category: "Psychiatry-Specific",
    specialty: "Solo Practitioners",
    integrationLevel: "Full Ecosystem",
    features: ["Outcome Tracking", "Rating Scales", "Integrated Treatment Plans", "Peer Collaboration"],
    californiaSupport: true,
    recommended: true
  },
  {
    name: "SimplePractice",
    category: "User-Friendly",
    specialty: "Hybrid Therapy/Psych",
    integrationLevel: "Optimized Workflow",
    features: ["Telehealth", "Client Portal", "Autobilling Support", "Intake Automation"],
    californiaSupport: true,
    recommended: false
  },
  {
    name: "Epic / Cerner",
    category: "Enterprise",
    specialty: "Hospital & Large Groups",
    integrationLevel: "Remote Access Mgmt",
    features: ["Comprehensive Research Support", "Interoperability", "Complex Reporting"],
    californiaSupport: true,
    recommended: false
  }
];

const integrationCapabilities = [
  {
    icon: "integration_instructions",
    title: "Workflow Integration",
    description: "We bridge the gap between your EHR and your billing/admin workflows."
  },
  {
    icon: "description",
    title: "Clinical Macro Coding",
    description: "Custom psychiatric assessment templates that reduce administrative friction."
  },
  {
    icon: "calendar_today",
    title: "Load-Balanced Scheduling",
    description: "Smart calendar management that prevents provider burnout and reduces no-shows."
  },
  {
    icon: "payments",
    title: "Revenue Capture",
    description: "Daily auditing of clinical notes against superbills to ensure zero leakage."
  },
  {
    icon: "chat",
    title: "Patient Concierge",
    description: "Proactive portal management that keeps patients engaged and informed."
  },
  {
    icon: "analytics",
    title: "Predictive Analytics",
    description: "Practice health reporting that identifies growth opportunities before they're visible."
  }
];

export default function EHRManagementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "EHR/EMR Management" }
        ]}
      />
      <main className="flex-grow">
        {/* EXECUTIVE EHR OPTIMIZATION HERO */}
        <section className="relative pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden bg-[#FAF8F3]">
          {/* Immersive Background Tokens */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

              {/* LEFT: Copy & Authority (60%) */}
              <div className="lg:w-[60%]">
                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black mb-4 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                  <span className="tracking-[0.2em] uppercase">Workflow Optimization</span>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-4 leading-[1.1] tracking-tight">
                  Psychiatric <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                    Workflow Architecture.
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-4 max-w-2xl">
                  We don&apos;t just &quot;type notes&quot;—we engineer
                  <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-2">DrChrono, Charm, and SimplePractice</span>
                  macros that cut your documentation time in half.
                </p>
                <LocationTagline variant="service" serviceName="EHR/EMR Management" />

                {/* Institutional Social Proof */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                        <Image
                          src={`https://i.pravatar.cc/150?u=${i + 75}`}
                          alt="Board-Certified Specialist"
                          width={48}
                          height={48}
                          className="grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-slate-500 font-medium leading-tight text-center sm:text-left">
                    <p><strong className="text-trust-navy">Reclaiming Hours for Specialized Practices Across California</strong></p>
                    <p>Standardized system management for board-certified clinics.</p>
                  </div>
                </div>

                {/* PRACTICE ECONOMICS BAR - EHR SPECIFIC */}
                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-6 border-y border-slate-200/60 mb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Workflow Redundancy</p>
                    <p className="text-lg font-bold text-trust-navy italic">Minimized</p>
                  </div>
                  <div className="hidden md:block h-10 w-px bg-slate-200" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Note Integrity</p>
                    <p className="text-lg font-bold text-trust-navy italic">Consistency Verified</p>
                  </div>
                  <div className="hidden md:block h-10 w-px bg-slate-200" />
                  <div className="space-y-1">
                    <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Average Recovery</p>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-lg font-bold text-trust-navy italic">Premium Performance</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <Link
                    href="/book-consultation"
                    className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                  >
                    <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">analytics</span>
                    Analyze My Workflow ROI
                  </Link>
                  <Link
                    href="/services/virtual-assistant"
                    className="bg-white border border-slate-200 text-trust-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                  >
                    Staffing Components
                    <span className="material-symbols-outlined text-primary">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT: Visual System Card (40%) */}
              <div className="lg:w-[40%] relative w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                  <div className="relative aspect-[4/5] w-full rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                    <Image
                      src="/images/ehr-optimization-mockup-v2.png"
                      alt="Psychiatric EHR Optimization Dashboard"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-trust-navy/80 to-transparent h-1/3 flex items-end p-12">
                      <div className="mb-4">
                        <h3 className="text-3xl font-serif font-bold !text-white leading-tight">Clinical <br />EHR <br />Setup</h3>
                        <p className="!text-slate-100 text-sm leading-relaxed mt-4">
                          Proprietary assessment macros and custom clinical workflows built for California psychiatric nuances.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                    <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined font-bold">verified</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Legacy Status</p>
                      <p className="text-base font-bold text-trust-navy">Privacy Audited</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI / PROBLEM-SOLUTION MATRIX - NEW 2026 FEATURE */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-trust-navy mb-4">
                The <span className="text-primary italic">Practice Efficiency</span> Matrix
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Specific setups for the psychiatric systems you use every day.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {roiData.map((item, idx) => (
                <div key={idx} className="bg-[#FAF8F3] rounded-[2.5rem] overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500">
                  <div className="bg-trust-navy p-6 text-white">
                    <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">EHR Platform</p>
                    <h3 className="text-2xl font-bold !text-white" style={{ color: 'white' }}>{item.platform}</h3>
                  </div>
                  <div className="p-8 flex-grow space-y-8">
                    <div>
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2">The Struggle</p>
                      <p className="text-slate-600 font-medium">{item.struggle}</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0.5 h-12 bg-primary/20"></div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">The Optimization</p>
                      <p className="text-trust-navy font-bold">{item.solution}</p>
                    </div>
                  </div>
                  <div className="p-8 bg-primary/5 border-t border-primary/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Projected Return</span>
                      <span className="text-xl font-black text-primary">{item.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Capabilities */}
        <div className="bg-white border-y border-slate-100 py-24 md:py-32">
          <section className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-trust-navy mb-6">
                  California psychiatric virtual assistant services with EMR Integration
                </h2>
                <div className="h-1.5 w-24 bg-primary rounded-full mb-6"></div>
              </div>
              <p className="text-slate-500 max-w-sm mb-2 font-medium">
                Seamless management of assessments, templates, and reporting within your clinical environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationCapabilities.map((capability, index) => (
                <div key={index} className="bg-[#FAF8F3] rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group">
                  <div className="size-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-3xl">
                      {capability.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-trust-navy text-2xl mb-4 leading-tight">
                    {capability.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* EMR Systems Comparison */}
        <section className="py-24 md:py-32 bg-[#FAF8F3]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Selection Support</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-trust-navy mb-6">
                Psychiatric EMR <span className="text-primary italic">Compatibility Matrix</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Choosing the right platform is critical. We support and recommend systems that align with California psychiatric clinical standards.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {emrSystems.map((emr, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-[2.5rem] p-10 border-2 transition-all duration-300 hover:shadow-2xl ${emr.recommended
                    ? 'border-primary/40 shadow-xl relative'
                    : 'border-slate-100'
                    }`}
                >
                  {emr.recommended && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                      PLATINUM PARTNER
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="size-16 bg-[#FAF8F3] rounded-2xl flex items-center justify-center text-primary shadow-inner">
                          <span className="material-symbols-outlined text-3xl">computer</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-trust-navy text-2xl tracking-tight">{emr.name}</h3>
                          <p className="text-xs font-black uppercase tracking-widest text-[#D2691E] mt-1">{emr.category}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1 hidden lg:block border-l border-slate-100 h-16"></div>

                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Target Specialty</p>
                        <p className="text-trust-navy font-bold leading-tight">{emr.specialty}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">CA Compliance</p>
                        <div className="flex items-center gap-2">
                          <span className={`size-2 rounded-full ${emr.californiaSupport ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                          <span className="text-trust-navy font-bold">{emr.californiaSupport ? 'Verified' : 'Reviewing'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Native VA Support</p>
                      <div className="flex flex-wrap gap-2">
                        {emr.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold text-slate-500 flex items-center gap-2">
                            <span className="material-symbols-outlined text-xs text-primary">check</span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALCULATOR SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">Calculate Your EHR Efficiency Gains</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                See how much time and revenue you can recover with optimized EHR workflows.
              </p>
            </div>
            <PracticeLeaksCalculator />
          </div>
        </section>

        <ServiceNavigationTray />
      </main>
      <Footer />
    </div>
  );
}
