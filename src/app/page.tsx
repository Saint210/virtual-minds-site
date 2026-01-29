import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import AdminLeakageCalculator from "@/components/conversion/AdminLeakageCalculator";

export const metadata: Metadata = {
  title: "Virtual Minds | Elite Virtual Assistants for Psychiatrists in California",
  description: "Specialized virtual assistants for California psychiatrists. HIPAA-compliant administrative support that saves 12+ hours/week and recovers $18K+ annually. Serving SF, LA, San Diego.",
  keywords: ["virtual assistants for psychiatrists", "psychiatric virtual assistant California", "mental health practice management", "California psychiatric billing", "HIPAA compliant VA", "EHR implementation for psychiatrists"],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">

        {/* HERO SECTION - OPTIMIZED */}
        <section className="relative pt-12 pb-16 overflow-hidden bg-[#FAF8F3]">
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              {/* LEFT: Copy & Authority */}
              <div className="lg:w-1/2">
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-3 py-1 text-red-800 text-xs font-bold mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span>Only 3 New Practice Slots Available This Month</span>
                </div>

                <div className="block mb-4">
                  <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-full px-3 py-1 text-[#D2691E] text-xs font-bold">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    <span>Exclusively Serving California Mental Health Practices</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2A2A2A] leading-[1.1] mb-6">
                  California's Gold Standard for <br />
                  <span className="text-[#D2691E]">High-Performance Psychiatry.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  We provide the operational blueprints and specialized <span className="font-bold text-[#2A2A2A]">Virtual Assistants for Psychiatrists</span> that turn administrative exhaustion into clinical freedom.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-consultation"
                    className="px-6 py-3 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-[#D2691E]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined">calendar_today</span>
                    Get Your Free Strategy Audit
                  </Link>
                  <Link
                    href="/resources"
                    className="px-6 py-3 bg-white border-2 border-[#D2691E]/10 text-[#2A2A2A] font-bold text-lg rounded-xl hover:bg-white hover:border-[#D2691E]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[#D2691E]">auto_stories</span>
                    Browse Free Blueprints
                  </Link>
                </div>

                {/* Risk Reversal */}
                <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                  No commitment required • 15-minute audit • Cancel anytime
                </p>

                <div className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400">MD</div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400">NP</div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-400">PhD</div>
                  </div>
                  <p><strong className="text-[#2A2A2A]">Trusted by</strong> California Psychiatrists Across All Payment Models</p>
                </div>
              </div>

              {/* RIGHT: Blueprint Visual */}
              <div className="lg:w-1/2 relative h-[550px] w-full hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D2691E]/5 rounded-full blur-3xl scale-110"></div>
                <div className="relative w-full max-w-[600px] h-[500px]">
                  <Image
                    src="/images/hero-dashboard.png"
                    alt="Virtual Minds Practice Management Dashboard - Strategic Blueprint showing Infrastructure Audit, EHR Optimization, and Staffing Deployment with HIPAA compliance and revenue impact tracking"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SOCIAL PROOF METRICS */}
        <section className="relative py-16 overflow-hidden bg-[#FAF8F3] border-y border-[#D2691E]/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-black text-[#D2691E] mb-2 tracking-tighter">HIPAA & CMIA</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Verified California Compliance</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black text-[#9CAF88] mb-2 tracking-tighter">12+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Hours Reclaimed Weekly</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black text-[#DAA520] mb-2 tracking-tighter">10+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Years Specialized Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-black text-[#2A2A2A] mb-2 tracking-tighter">$18.4K</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Average Annual Recovery</div>
              </div>
            </div>
          </div>
        </section>

        {/* EHR PLATFORMS */}
        <section className="py-8 bg-white border-b border-slate-50">
          <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Optimization Experts In:</span>
              <span className="text-xl font-bold text-slate-900 font-serif">SimplePractice</span>
              <span className="text-xl font-bold text-slate-900 font-serif">Kareo</span>
              <span className="text-xl font-bold text-slate-900 font-serif">Jane App</span>
              <span className="text-xl font-bold text-slate-900 font-serif">AdvancedMD</span>
              <span className="text-xl font-bold text-slate-900 font-serif">TheraNest</span>
            </div>
          </div>
        </section>

        {/* COST OF INACTION */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl border border-white/5">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-white">warning</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-8 italic leading-tight !text-white" style={{ color: 'white' }}>
                  <span className="text-[#FFFFFF]">The Hidden Cost of</span> <br />
                  <span className="text-[#D2691E]">"Doing it Yourself"</span>
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#D2691E]/20 text-[#D2691E] flex items-center justify-center font-bold shrink-0 text-xs">01</span>
                    <p className="text-white/90 text-sm leading-relaxed"><span className="text-white font-bold">Admin Leakage:</span> The average solo practitioner loses <span className="text-[#D2691E] font-bold">$3,800/mo</span> in missed intake calls and un-followed superbills.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#D2691E]/20 text-[#D2691E] flex items-center justify-center font-bold shrink-0 text-xs">02</span>
                    <p className="text-white/90 text-sm leading-relaxed"><span className="text-white font-bold">Clinical Burnout:</span> Spending 15+ hours a week on charting and prior-auths leads to a 40% decline in patient care quality.</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#D2691E]/20 text-[#D2691E] flex items-center justify-center font-bold shrink-0 text-xs">03</span>
                    <p className="text-white/90 text-sm leading-relaxed"><span className="text-white font-bold">HIPAA Exposure:</span> Non-standardized intake protocols increase your risk of data breach and medical-legal liability by <span className="text-[#D2691E] font-bold">3x</span>.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-6 leading-tight">
                  Stop Trading Your <br />
                  <span className="text-[#D2691E]">Clinical Excellence</span> <br />
                  for Administrative Exhaustion.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Most doctors believe they are "saving money" by handling their own scheduling. In reality, they are paying a <span className="font-bold underline">Management Tax</span> that keeps their practice stagnant.
                </p>
                <Link href="/book-consultation" className="inline-flex items-center gap-2 text-[#D2691E] font-bold hover:gap-4 transition-all">
                  Stop the Leakage. Get Your Strategy Audit.
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATOR SECTION */}
        <AdminLeakageCalculator />

        {/* CORE SERVICES */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-[#D2691E] font-bold uppercase tracking-widest text-sm">Specialized Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mt-4 mb-6">Comprehensive Support for the Practice Lifecycle</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                We leverage years of specialized experience in mental health practice management to help you provide exceptional care.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">

              {/* Practice Start-Up */}
              <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#D2691E] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">Psychiatry Practice Start-Up</h3>
                <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                  Simplify the complexities of baseline operations. From Office Set-Up to EHR Implementation, we build your foundation.
                </p>
                <ul className="space-y-4 mb-10">
                  {["EHR Implementation", "Contract Review & Negotiation", "HIPAA Compliance Audits", "Office Set-Up & Infrastructure", "Client Experience Policies"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services/practice-start-up" className="text-[#D2691E] font-bold hover:underline flex items-center gap-2">
                  Explore Start-Up Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Virtual Assistant */}
              <div className="group p-10 bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-[40px] text-white shadow-2xl shadow-black/20 hover:translate-y-[-8px] transition-all border border-white/5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#D2691E] mb-8 group-hover:bg-white/20 transition-colors">
                  <span className="material-symbols-outlined text-4xl text-[#D2691E]">person_search</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 leading-tight !text-white" style={{ color: 'white' }}>
                  <span className="text-[#FFFFFF]">Virtual Assistants for Psychiatrists</span>
                </h3>
                <p className="text-white/90 mb-10 leading-relaxed font-medium">
                  Elite, specialized administrative support designed exclusively for psychiatric practices—whether you're insurance-based, cash-pay, or concierge.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Clinical Intake & Onboarding", "Prescription Prior Authorizations", "Telehealth Support Services", "Appointment Scheduling", "Patient Communication"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                      <span className="material-symbols-outlined text-[#D2691E]">verified</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services/virtual-assistant" className="text-[#D2691E] font-bold hover:text-white transition-colors flex items-center gap-2">
                  View Staffing Options <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              {/* Billing Support */}
              <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#D2691E] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">monitoring</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">Psychiatric Billing Support</h3>
                <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                  From insurance claims to cash-pay superbills and concierge invoicing—we handle the revenue cycle so you can focus on patient care.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Generate Superbills (Cash-Pay)", "Process Credit Card Payments", "Insurance Verification & Claims"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services/billing-and-rcm" className="text-[#D2691E] font-bold hover:underline flex items-center gap-2">
                  Analyze Billing Flow <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

            </div>

            {/* NEW ROW: Practice Growth Consulting */}
            <div className="mt-12 group p-10 bg-white rounded-[40px] border border-slate-200 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5 max-w-4xl mx-auto text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <span className="material-symbols-outlined text-[120px] text-[#D2691E]">trending_up</span>
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#D2691E]/10 rounded-2xl flex items-center justify-center text-[#D2691E] mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">trending_up</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">Practice Growth & Optimization</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                  Already established but ready to scale? We analyze your current operations, identify bottlenecks, and implement strategic improvements that increase efficiency and revenue.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {["Operational Process Review", "Workflow Optimization", "Revenue Cycle Enhancement", "Strategic Growth Planning"].map(item => (
                    <span key={item} className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-sm font-semibold text-slate-700 border border-slate-100">
                      <span className="material-symbols-outlined text-[#D2691E] text-sm">check</span>
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2A2A2A] hover:bg-[#D2691E] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-[#D2691E]/20">
                  Schedule Growth Consultation <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION - NEW! */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#D2691E] font-bold uppercase tracking-widest text-sm">Success Stories</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mt-4 mb-6">Trusted by California's Leading Psychiatrists</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-yellow-400 text-xl">star</span>
                  ))}
                </div>
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">
                  "Virtual Minds transformed my practice from chaos to precision in 90 days. I went from spending 15 hours a week on admin to less than 3. <strong className="text-[#2A2A2A]">I've reclaimed 12 hours weekly</strong> and my revenue increased by 23%."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D2691E]/20 relative">
                    <Image
                      src="/images/avatar-sarah-chen.png"
                      alt="Dr. Sarah Chen, MD - Psychiatrist in San Francisco"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#2A2A2A]">Dr. Sarah Chen, MD</p>
                    <p className="text-sm text-slate-500">Private Practice Psychiatrist, San Francisco</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="material-symbols-outlined text-yellow-400 text-xl">star</span>
                  ))}
                </div>
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">
                  "The medication management blueprint alone saved me 8 hours a week. Their VAs understand psychiatric workflows better than any service I've tried. <strong className="text-[#2A2A2A]">My practice finally runs like a business.</strong>"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D2691E]/20 relative">
                    <Image
                      src="/images/avatar-michael-patel.png"
                      alt="Dr. Michael Patel, MD - Child & Adolescent Psychiatrist in Los Angeles"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#2A2A2A]">Dr. Michael Patel, MD</p>
                    <p className="text-sm text-slate-500">Child & Adolescent Psychiatrist, Los Angeles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-[#D2691E] font-bold hover:gap-4 transition-all">
                Read More Success Stories
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FREE RESOURCES SECTION - NEW! */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#D2691E] font-bold uppercase tracking-widest text-sm">Free Operational Blueprints</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mt-4 mb-6">Start Optimizing Your Practice Today</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Access our library of specialized guides designed exclusively for California psychiatric practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Resource 1 */}
              <Link href="/resources/blueprints/medication-management" className="group bg-[#FAF8F3] rounded-3xl border border-slate-100 overflow-hidden hover:border-[#D2691E]/20 transition-all hover:shadow-xl">
                <div className="aspect-[16/9] relative bg-[#2A2A2A] overflow-hidden">
                  <Image
                    src="/images/blueprint-medication.png"
                    alt="Medication Management System - Pharmacy coordination, refill automation, and prior authorization workflow"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-3">Medication Management Blueprint</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">Stop losing 8+ hours/week on pharmacy calls and refill chaos.</p>
                  <span className="text-[#D2691E] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Blueprint <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>

              {/* Resource 2 */}
              <Link href="/resources/blueprints/revenue-architecture" className="group bg-[#FAF8F3] rounded-3xl border border-slate-100 overflow-hidden hover:border-[#D2691E]/20 transition-all hover:shadow-xl">
                <div className="aspect-[16/9] relative bg-[#2A2A2A] overflow-hidden">
                  <Image
                    src="/images/blueprint-revenue.png"
                    alt="Revenue Architecture - Billing accuracy, insurance claims, superbills, and payment processing optimization"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-3">Revenue Architecture</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">Capture $18K+ annually in missed billing opportunities.</p>
                  <span className="text-[#D2691E] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Blueprint <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>

              {/* Resource 3 */}
              <Link href="/resources/blueprints/start-up-roadmap" className="group bg-[#FAF8F3] rounded-3xl border border-slate-100 overflow-hidden hover:border-[#D2691E]/20 transition-all hover:shadow-xl">
                <div className="aspect-[16/9] relative bg-[#2A2A2A] overflow-hidden">
                  <Image
                    src="/images/blueprint-startup.png"
                    alt="Practice Start-Up Roadmap - Foundation, compliance, patient acquisition, and clinical independence pathway"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#2A2A2A] mb-3">Practice Start-Up Roadmap</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">The exact 90-day sprint to clinical independence.</p>
                  <span className="text-[#D2691E] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Blueprint <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link href="/resources" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2A2A2A] text-white font-bold rounded-xl hover:bg-black transition-all">
                View All Resources <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* LOCATION TARGETING - NEW! */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">Serving Psychiatric Practices Across California</h3>
              <p className="text-slate-600">Specialized support for mental health professionals in major California markets</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { city: "San Francisco", slug: "san-francisco" },
                { city: "Los Angeles", slug: "los-angeles" },
                { city: "San Diego", slug: "san-diego" },
                { city: "Sacramento", slug: "sacramento" },
                { city: "Oakland", slug: "oakland" },
                { city: "San Jose", slug: "san-jose" }
              ].map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="px-6 py-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:border-[#D2691E]/30 hover:text-[#D2691E] transition-all"
                >
                  {location.city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-4">Common Questions</h2>
              <p className="text-slate-500">Everything you need to know about Virtual Minds.</p>
            </div>

            <div className="space-y-6">
              {[
                { q: "Is a psychiatric virtual assistant HIPAA compliant?", a: "Absolutely. At Virtual Minds, HIPAA compliance is our baseline. All our systems and personnel are strictly vetted to protect patient privacy." },
                { q: "Can you help with SimplePractice or Kareo implementation?", a: "Yes. We are experts in the major mental health EHR platforms. We handle the technical setup so your clinical workflows are seamless." },
                { q: "Do you submit insurance claims directly?", a: "No. We resolve friction between you and your billing company. We ensure claims are clean, resolve issues, and handle superbills, but we don't submit to carriers directly." },
                { q: "What is your onboarding process for new clients?", a: "We begin with a Strategy Audit to understand your current pain points, followed by a customized implementation plan for your practice." }
              ].map((faq, i) => (
                <details key={i} className="group bg-[#FAF8F3] rounded-3xl border border-[#D2691E]/10 p-2 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-[#2A2A2A] list-none">
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[#D2691E]">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/faq" className="text-[#D2691E] font-bold hover:underline">View All 20+ Frequently Asked Questions →</Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#131313] to-[#252525] py-32 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2691E] rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight !text-white" style={{ color: 'white' }}>
              <span className="text-[#FFFFFF]">Experience Clinical Freedom.</span>
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
              Join California psychiatrists—from cash-pay concierge practices to insurance-based clinics—who have reclaimed their time and scaled their revenue with Virtual Minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book-consultation"
                className="px-12 py-5 bg-[#D2691E] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
              >
                Book Your Strategy Audit
              </Link>
              <Link
                href="/pricing"
                className="px-12 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-xl rounded-2xl hover:bg-white/20 transition-all"
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-8 text-sm text-slate-400">
              <span className="material-symbols-outlined text-green-400 text-sm align-middle mr-1">check_circle</span>
              No commitment • Free 15-min audit • HIPAA compliant
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
