import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import AdminLeakageCalculator from "@/components/conversion/AdminLeakageCalculator";
import RevenueDashboardGraphic from "@/components/home/RevenueDashboardGraphic";
import Hero from "@/components/marketing/Hero";

export const metadata: Metadata = {
  title: "Virtual Minds | Psychiatric Practice Management & Operational Intelligence",
  description: "Specialized practice management and virtual assistants for California psychiatrists. HIPAA-compliant operational support that saves 20+ hours/week and recovers $300K+ annually.",
  keywords: ["virtual assistants for psychiatrists", "psychiatric virtual assistant California", "mental health practice management", "California psychiatric billing", "HIPAA compliant VA", "EHR implementation for psychiatrists", "psychiatric practice operations"],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">

        {/* HERO SECTION */}
        <Hero />

        {/* PLATFORM CLOUD */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted Integration with Leading Platforms</p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {[
                  { name: 'SimplePractice', icon: 'clinical_notes' },
                  { name: 'Kareo', icon: 'medical_information' },
                  { name: 'Jane App', icon: 'health_and_safety' },
                  { name: 'AdvancedMD', icon: 'medication' },
                  { name: 'TheraNest', icon: 'psychology' }
                ].map((platform) => (
                  <div key={platform.name} className="group bg-[#FAF8F3] px-6 py-3 rounded-xl border-2 border-slate-200 hover:border-[#D2691E]/30 font-bold text-slate-600 text-sm shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#D2691E] text-lg group-hover:scale-110 transition-transform">{platform.icon}</span>
                    {platform.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* METRICS GRID - HIGH CONTRAST */}
        <section className="py-32 bg-trust-navy relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B8860B]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {[
                { label: 'Compliance', val: 'HIPAA', sub: 'Secure Data Protocols' },
                { label: 'Time Saved', val: '20+ Hrs', sub: 'Weekly Admin Savings' },
                { label: 'Market Focus', val: '100%', sub: 'California Psychiatrists' },
                { label: 'Avg Recovery', val: '$300k', sub: 'Annual Revenue' }
              ].map((metric) => (
                <div key={metric.label} className="group p-4">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-[#D2691E] transition-colors">{metric.val}</div>
                  <div className="text-[11px] font-bold text-[#D2691E] uppercase tracking-widest mb-2">{metric.label}</div>
                  <div className="text-sm text-slate-400 font-medium">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM/SOLUTION SECTION - MATTE CREAM */}
        <section className="py-32 bg-[#EDE8E0] relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px] mb-4 block">Operational Clarity</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-trust-navy mb-8 leading-[1.1]">
                  Focus on <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Clinical Care</span>
                </h2>
                <p className="text-xl text-slate-700 leading-relaxed mb-10 font-medium">
                  Administrative challenges shouldn&apos;t keep you from your patients. We specialize in the complex California workflows that take you away from what matters most.
                </p>
                <Link href="/book-consultation" className="inline-flex items-center gap-3 px-8 py-5 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#D2691E]/20 transition-all hover:-translate-y-1">
                  Schedule Strategy Audit
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>

              {/* Glass Checklist Card */}
              <div className="bg-white/60 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/40 shadow-2xl relative overflow-hidden group hover:bg-white/80 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2691E]/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

                <h3 className="text-2xl font-serif font-bold mb-10 text-trust-navy border-b border-[#D2691E]/20 pb-6">
                  Specialized Support:
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-6 group/item">
                    <div className="w-14 h-14 rounded-2xl bg-[#D2691E]/10 text-[#D2691E] flex items-center justify-center font-black shrink-0 text-xl border border-[#D2691E]/20 group-hover/item:bg-[#D2691E] group-hover/item:text-white transition-all">1</div>
                    <div>
                      <p className="font-bold text-trust-navy mb-2 text-lg">Medication Management</p>
                      <p className="text-slate-600 leading-relaxed font-medium">Streamlined coordination of refills and pharmacy communications.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group/item">
                    <div className="w-14 h-14 rounded-2xl bg-[#D2691E]/10 text-[#D2691E] flex items-center justify-center font-black shrink-0 text-xl border border-[#D2691E]/20 group-hover/item:bg-[#D2691E] group-hover/item:text-white transition-all">2</div>
                    <div>
                      <p className="font-bold text-trust-navy mb-2 text-lg">Prior Authorizations</p>
                      <p className="text-slate-600 leading-relaxed font-medium">Handling the complex insurance requirements that delay patient treatment.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group/item">
                    <div className="w-14 h-14 rounded-2xl bg-[#D2691E]/10 text-[#D2691E] flex items-center justify-center font-black shrink-0 text-xl border border-[#D2691E]/20 group-hover/item:bg-[#D2691E] group-hover/item:text-white transition-all">3</div>
                    <div>
                      <p className="font-bold text-trust-navy mb-2 text-lg">Practice Management</p>
                      <p className="text-slate-600 leading-relaxed font-medium">Handling intake, scheduling, and patient communication with professional expertise.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATOR SECTION */}
        <AdminLeakageCalculator />

        {/* CORE SERVICES */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Service Solutions</span>
                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mt-4 mb-6 tracking-tight leading-tight">
                <span className="relative inline-block">
                  Psychiatric Workflow
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D2691E]/20"></span>
                </span>
                {' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Support</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                <strong className="text-trust-navy">Comprehensive administrative support</strong> designed specifically for the unique needs of{' '}
                <span className="relative inline-block text-[#D2691E] font-bold">
                  California psychiatric practices
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D2691E]/30"></span>
                </span>.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">

              {/* Card 1: Virtual Assistants (CORE) */}
              <div className="group relative p-10 bg-trust-navy rounded-[3rem] text-white shadow-2xl shadow-trust-navy/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-white/10">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:bg-[#D2691E]/30 transition-colors"></div>

                <div className="relative z-10 mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D2691E] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                    <span className="material-symbols-outlined text-sm">star</span>
                    Most Popular
                  </div>
                  <span className="material-symbols-outlined text-5xl text-[#D2691E] block mb-4">person_search</span>
                  <h3 className="text-3xl font-serif font-bold !text-white mb-4">Virtual Assistants</h3>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    <strong className="text-white">Psychiatric-trained assistants</strong> who handle intake, refills, and patient communication—
                    <span className="text-[#D2691E]"> so you can focus on clinical care</span>. Recover <strong className="text-white">20+ hours weekly</strong>.
                  </p>
                </div>

                <div className="mt-auto relative z-10">
                  <ul className="space-y-4 mb-10">
                    {["Intake & Onboarding", "Medication Refills", "Telehealth & Patient Comms"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-100/90">
                        <span className="material-symbols-outlined text-[#D2691E] text-[20px]">verified</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/virtual-assistant" className="w-full py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#D2691E]/20 flex items-center justify-center gap-2 group/btn">
                    View Service Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Practice Start-Up */}
              <div className="group p-10 bg-[#FAF8F3] rounded-[3rem] border border-slate-100 hover:border-[#D2691E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col hover:-translate-y-2">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-5xl text-[#D2691E] block mb-6 group-hover:scale-110 transition-transform origin-left">rocket_launch</span>
                  <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">Practice Start-Up</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    <strong className="text-trust-navy">Turnkey practice launch</strong> for new California psychiatrists. From <span className="text-[#D2691E] font-bold">EHR configuration to HIPAA compliance</span>—
                    operational in <strong className="text-trust-navy">30 days</strong>.
                  </p>
                </div>

                <div className="mt-auto">
                  <ul className="space-y-4 mb-10">
                    {["EHR Implementation", "Policies & Procedures", "Compliance Setup", "Telepsychiatry Setup"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <span className="material-symbols-outlined text-[#D2691E] text-[20px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/practice-start-up" className="w-full py-4 bg-white border border-slate-200 text-trust-navy font-bold rounded-xl hover:border-[#D2691E] hover:text-[#D2691E] transition-all shadow-sm flex items-center justify-center gap-2 group/btn">
                    Learn More <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Billing & RCM */}
              <div className="group p-10 bg-[#FAF8F3] rounded-[3rem] border border-slate-100 hover:border-[#D2691E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col hover:-translate-y-2">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-5xl text-[#D2691E] block mb-6 group-hover:scale-110 transition-transform origin-left">monitoring</span>
                  <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">Billing & RCM</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    <strong className="text-trust-navy">Maximize revenue</strong> with dedicated insurance verification, prior auths, and claims management.
                    <span className="text-[#D2691E] font-bold">95%+ clean claim rate</span>.
                  </p>
                </div>

                <div className="mt-auto">
                  <ul className="space-y-4 mb-10">
                    {["Insurance Verification", "Prior Authorizations", "Denial Management", "Patient Billing"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <span className="material-symbols-outlined text-[#D2691E] text-[20px]">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/billing-and-rcm" className="w-full py-4 bg-white border border-slate-200 text-trust-navy font-bold rounded-xl hover:border-[#D2691E] hover:text-[#D2691E] transition-all shadow-sm flex items-center justify-center gap-2 group/btn">
                    View Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TESTIMONIALS - MATTE CREAM */}
        <section className="py-32 bg-[#EDE8E0] border-t border-[#D2691E]/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px] mb-4 block">Client Feedback</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mt-4 mb-6 tracking-tight">Psychiatric Practice Success</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  quote: "Virtual Minds transformed my practice workflow. I reclaimed 10+ hours weekly and can now focus entirely on my patients.",
                  name: "Dr. Sarah Chen, MD",
                  role: "Psychiatrist, San Francisco",
                  img: "/images/avatar-sarah-chen.png"
                },
                {
                  quote: "Their team understands the unique administrative demands of psychiatry. I finally have the support my practice needs.",
                  name: "Dr. Michael Patel, MD",
                  role: "Psychiatrist, Los Angeles",
                  img: "/images/avatar-michael-patel.png"
                }
              ].map((t, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-md p-12 rounded-[3rem] border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group">
                  <div className="mb-8">
                    <span className="text-6xl text-[#D2691E]/20 font-serif leading-none">“</span>
                    <p className="text-xl md:text-2xl text-trust-navy italic leading-relaxed font-serif -mt-6 relative z-10">
                      {t.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 border-t border-slate-100 pt-8">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 ring-4 ring-slate-50 group-hover:ring-[#D2691E]/20 transition-all">
                      <Image src={t.img} alt={t.name} width={56} height={56} className="grayscale group-hover:grayscale-0 transition-all duration-500 object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-trust-navy text-lg">{t.name}</p>
                      <p className="text-xs text-[#D2691E] font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REFINED CTA - CONVERSION COMMAND CENTER */}
        <section className="bg-trust-navy py-24 relative overflow-hidden">
          {/* Ambient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#D2691E20,transparent_60%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group">

              {/* Decorative Glows */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D2691E]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#D2691E]/20 transition-all duration-700" />

              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 !text-white leading-tight drop-shadow-md">
                Ready to reclaim your <br className="hidden md:block" />
                <span className="text-[#D2691E]">Clinical Focus?</span>
              </h2>

              <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Join the leading California psychiatrists recovering <span className="text-white font-bold">$300k+ annually</span> by entrusting operations to Virtual Minds.
              </p>

              <div className="flex flex-col items-center gap-8">
                <Link
                  href="/book-consultation"
                  className="relative group/btn inline-flex items-center gap-4 px-10 py-5 bg-[#D2691E] text-white font-black text-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(210,105,30,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(210,105,30,0.6)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10">Schedule Strategy Audit</span>
                  <span className="relative z-10 material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity blur-md" />
                </Link>

                {/* Conversion Micro-Copy */}
                <div className="flex flex-wrap justify-center gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#D2691E] text-sm">verified_user</span>
                    HIPAA Compliant
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#D2691E] text-sm">location_on</span>
                    California Exclusive
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#D2691E] text-sm">lock</span>
                    No Commitment
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
