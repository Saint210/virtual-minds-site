

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServingCaliforniaSection from "@/components/home/ServingCaliforniaSection";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";


export const metadata = {
  title: "California Psychiatric Virtual Assistant | Virtual Minds",
  description: "California's premier psychiatric virtual assistant for high-acuity practices. HIPAA-compliant support for intake, billing, and practice management. Recover 15+ hours weekly.",
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Minds",
    "url": "https://virtualminds.com",
    "logo": "https://virtualminds.com/images/logo.png",
    "description": "Executive operational management for mental health professionals in California.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-310-400-6266",
      "contactType": "customer service"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-4 pb-8 md:pt-8 md:pb-16 overflow-hidden">
          {/* Ambient Background */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-healthcare-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Copy (Left) */}
              <div className="lg:w-[55%] space-y-6">

                <h1 className="font-serif text-4xl md:text-6xl font-medium text-trust-navy leading-[1.2] tracking-tight mb-6">
                  Operate at the Top of Your License with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 font-bold">California's Premier Psychiatric Virtual Assistant</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-primary pl-4 md:pl-6 mb-6">
                  Recover 15+ hours weekly with specialized psychiatric support. HIPAA-compliant practice management for California psychiatrists.
                </p>

                <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-8">
                  Generic VAs fail in complex care settings. We engineer <strong>airtight compliance</strong>, <strong>precision intake workflows</strong>, and <strong>seamless patient coordination</strong>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="grid grid-cols-2 gap-3 sm:flex w-full sm:w-auto">
                    <Link href="/book-consultation" className="col-span-2 sm:col-span-1 bg-primary hover:bg-primary-hover text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] text-center flex items-center justify-center">
                      Request Audit
                    </Link>
                    <div className="sm:hidden flex flex-col items-center gap-1">
                      <a
                        href="tel:+13104006266"
                        className="w-full bg-gradient-to-br from-white to-slate-50 text-trust-navy border-2 border-primary/20 px-6 py-3 rounded-xl font-bold text-base shadow-lg shadow-primary/10 hover:shadow-xl hover:border-primary/40 transition-all text-center flex items-center justify-center gap-2 group"
                      >
                        <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Call Now</span>
                      </a>
                      <p className="text-xs text-slate-500 text-center">(310) 400-6266</p>
                    </div>
                  </div>
                  <Link href="/services" className="hidden sm:inline-flex bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-trust-navy/30 items-center justify-center">
                    View Verified Services
                  </Link>
                  <Link href="/services" className="sm:hidden text-trust-navy font-bold text-sm underline decoration-primary/30 underline-offset-4 text-center mt-2">
                    Or View Verified Services
                  </Link>
                </div>

                {/* Authority Signal */}
                <div className="pt-4 border-t border-slate-200/60 mt-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Supporting Clinicians Trained At</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-60">
                    {["UCSF", "Stanford", "UCLA", "USC", "Harvard"].map(school => (
                      <span key={school} className="font-serif text-xl text-trust-navy">{school}</span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Hero Image (Right) - OPTIMIZED FOR MOBILE PERFORMANCE */}
              <div className="lg:w-[45%] relative">
                <div
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-slate-100"
                  style={{ aspectRatio: '4/5' }}
                >
                  {/* Organic Tech Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-trust-navy/40 via-transparent to-accent/20 z-10 pointer-events-none mix-blend-multiply" />

                  <Image
                    src="/images/virtual-assistant-hero.png"
                    alt="Executive Psychiatric Virtual Consultation - Professional virtual assistant managing practice workflows"
                    width={800}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    priority
                    quality={85}
                    className="object-cover w-full h-full"
                  />

                  {/* Glass Card Overlay */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl z-20">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <span className="material-symbols-outlined text-primary" aria-hidden="true">verified_user</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Compliance Status</p>
                        <p className="text-trust-navy font-serif text-lg font-bold">Audit-Ready: Verified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Executive Specialization</span>
              <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Complex Care</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Refined operational protocols for <strong className="font-medium text-trust-navy">academically trained</strong>, subspecialty-focused psychiatrists.
              </p>
            </div>

            {/* Specialties Grid - Premium Glass Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Neuropsychiatry", slug: "neuropsychiatry", preview: "Neurological testing & specialized assessments" },
                { name: "Child & Adolescent", slug: "child-adolescent-psychiatry", preview: "School coordination & family communication" },
                { name: "Women's Mental Health", slug: "womens-mental-health", preview: "Reproductive psychiatry & perinatal care" },
                { name: "Integrative Psychiatry", slug: "integrative-psychiatry", preview: "Functional labs & holistic coordination" },
                { name: "Sleep Medicine", slug: "sleep-medicine", preview: "Sleep study coordination & scheduling" },
                { name: "ADHD & Executive Function", slug: "adhd-neuropsychiatry", preview: "Prior authorizations & testing coordination" },
                { name: "OCD & Anxiety Disorders", slug: "ocd-anxiety-disorders", preview: "ERP protocols & intensive treatment support" },
                { name: "Eating Disorders", slug: "eating-disorders", preview: "Multidisciplinary team coordination" },
                { name: "Consult-Liaison", slug: "consult-liaison", preview: "Hospital consultation & medical team liaison" }
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/specialties/${spec.slug}`}
                  className="group relative bg-gradient-to-br from-white via-primary/5 to-primary/10 rounded-2xl p-6 border-2 border-primary/20 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col gap-3 overflow-hidden cursor-pointer"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Icon badge */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/30 group-hover:from-primary group-hover:to-primary-hover flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:from-white group-hover:to-white group-hover:shadow-lg group-hover:shadow-white/50 transition-all" />
                      </div>
                      <span className="font-serif text-xl font-semibold text-trust-navy group-hover:text-primary transition-colors">{spec.name}</span>
                    </div>

                    {/* Arrow indicator */}
                    <div className="relative z-10 w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300 opacity-60 group-hover:opacity-100">
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-all group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Preview text */}
                  <p className="text-sm text-primary/70 group-hover:text-primary transition-colors relative z-10 leading-relaxed font-medium">
                    {spec.preview}
                  </p>

                  {/* "Learn more" hint */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                    <span>View specialty details</span>
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY VIRTUAL MINDS */}
        {/* WHY VIRTUAL MINDS */}
        <section className="py-24 bg-[#FAF8F3] relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Operational Backbone</span>
                <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-8 leading-tight">
                  Complex Care Requires <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Absolute Precision</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Generic virtual assistants cannot support high-acuity psychiatry. They miss critical intake details, fumble prior authorizations, and create revenue leakage.
                </p>
                <div className="pl-6 border-l-4 border-primary">
                  <p className="text-xl font-serif text-trust-navy mb-2 italic">
                    "We protect your license, your time, and your patient relationships."
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/services" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-6 py-3 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                    See Our Protocols <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Light Theme Card */}
              {/* Premium Glass Card */}
              <div className="relative group rounded-[2.5rem] p-1 scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-trust-navy/5 to-accent/10 rounded-[2.5rem] blur-xl" />
                <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/50 shadow-2xl relative z-10 overflow-hidden">
                  {/* Decorative Abstract Shapes */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-sm font-bold text-trust-navy/60 uppercase tracking-widest mb-8 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-trust-navy/30"></span>
                      The Virtual Minds Standard
                    </h3>
                    <ul className="space-y-5">
                      {[
                        "Flawless Patient Communication",
                        "Detailed Document Management",
                        "Reliable Refill & PA Workflows",
                        "HIPAA-Hardened Systems",
                        "Zero Administrative Drift"
                      ].map((req, i) => (
                        <li key={i} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                          <div className="bg-gradient-to-br from-[#059669] to-[#047857] text-white p-2 rounded-full shadow-lg shadow-emerald-300/50 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-lg font-bold text-trust-navy bg-gradient-to-r from-trust-navy to-trust-navy/80 bg-clip-text">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICE OVERHEAD CALCULATOR */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Calculate Your Savings</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8 leading-tight">
                How Much Are You <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Losing to Overhead?</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                See exactly how much administrative inefficiency is costing your practice every year
              </p>
            </div>

            <PracticeLeaksCalculator />

            <div className="text-center mt-12">
              <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                Get Your Free Practice Audit <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* THE VIRTUAL MINDS OPERATING SYSTEM (Formerly Aurum) */}
        {/* THE VIRTUAL MINDS OPERATING SYSTEM (Formerly Aurum) */}
        <section className="py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-12 lg:p-20 shadow-2xl border-2 border-slate-200 text-center relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

              <h2 className="font-serif text-5xl text-trust-navy mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Virtual Minds OS</span></h2>
              <p className="text-slate-600 font-bold uppercase tracking-widest text-sm mb-16">Our Proven Process for Operational Excellence</p>

              <div className="grid md:grid-cols-3 gap-8 mb-16 text-left max-w-6xl mx-auto">
                {/* Phase 1 */}
                <div className="bg-[#FAF8F3] p-8 rounded-2xl border-2 border-white/30 relative group hover:bg-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-primary/80 text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-lg uppercase tracking-wider">Phase 1</div>
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 mt-4 font-bold">Diagnostic Review</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">We audit your current processes, identify bottlenecks, and review your practice goals to build a custom roadmap.</p>
                </div>

                {/* Phase 2 */}
                <div className="bg-[#FAF8F3] p-8 rounded-2xl border-2 border-white/30 relative group hover:bg-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-primary/80 text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-lg uppercase tracking-wider">Phase 2</div>
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 mt-4 font-bold">Implementation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">We deploy EHR optimization, set up HIPAA-compliant workflows, and establish clear client management policies.</p>
                </div>

                {/* Phase 3 */}
                <div className="bg-[#FAF8F3] p-8 rounded-2xl border-2 border-white/30 relative group hover:bg-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-primary to-primary/80 text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-lg uppercase tracking-wider">Phase 3</div>
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 mt-4 font-bold">Executive Maintenance</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">Daily administrative management, billing liaison support, and ongoing operational refinement to prevent drift.</p>
                </div>
              </div>

              <Link href="/book-consultation" className="inline-block bg-trust-navy hover:bg-slate-800 text-white px-6 py-4 md:px-10 md:py-5 rounded-xl font-bold text-lg shadow-xl shadow-trust-navy/20 transition-all max-w-full">
                Start Diagnostic Review
              </Link>
            </div>
          </div>
        </section>

        {/* SERVING CALIFORNIA SECTION */}
        <ServingCaliforniaSection />

        {/* VERIFIED SERVICE PILLARS */}
        <section className="py-24 bg-[#FAF8F3]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-trust-navy mb-4">Verified Service Capabilities</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Three pillars of support designed to scale your practice while minimizing liability.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card 1: Consulting */}
              <div className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-accent/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-accent">rocket_launch</span>
                </div>
                <h3 className="font-serif text-2xl text-trust-navy mb-3">Practice Consulting</h3>
                <p className="text-slate-600 mb-8 h-[3rem] text-sm leading-relaxed">Strategic architecture for psychiatrists requiring a stable, compliant, and scalable foundation.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Start-up Launch", "EHR Setup", "HIPAA Policy", "Contract Analysis"].map((item) => (
                    <span key={item} className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/services/practice-consulting" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-accent border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all hover:border-accent/30 hover:scale-[1.02]">
                  View Consulting Scopes <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>

              {/* Card 2: Virtual Assistant (Primary) */}
              <div className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ring-1 ring-trust-navy/5">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-trust-navy opacity-100" />
                <div className="bg-trust-navy/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-trust-navy">support_agent</span>
                </div>
                <h3 className="font-serif text-2xl text-trust-navy mb-3">Virtual Assistant</h3>
                <p className="text-slate-600 mb-8 h-[3rem] text-sm leading-relaxed">Administrative execution delivered with clinical nuance and absolute reliability.</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Intake Selection", "Patient Comms", "Doc Management", "Prior Auths"].map((item) => (
                    <span key={item} className="bg-trust-navy/5 text-trust-navy px-3 py-1.5 rounded-lg text-xs font-bold border border-trust-navy/5">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/services/virtual-assistant" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                  View Clinical Support <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>

              {/* Card 3: Billing Liaison */}
              <div className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary">payments</span>
                </div>
                <h3 className="font-serif text-2xl text-trust-navy mb-3">Revenue Cycle Liaison</h3>
                <p className="text-slate-600 mb-8 h-[3rem] text-sm leading-relaxed">We coordinate with your biller to resolve issues. <span className="text-primary font-bold">We do NOT submit claims.</span></p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Superbills", "Eligibility", "Biller Comms", "Cards & Payments"].map((item) => (
                    <span key={item} className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/services/billing-and-rcm" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-primary border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all hover:border-primary/30 hover:scale-[1.02]">
                  View Liaison Scope <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST INSIGHTS - Blog Posts */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Industry Insights</span>
              <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Expert Guidance</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                Strategic insights for California psychiatric practices
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Blog Post 1 */}
              <Link href="/blog/how-to-choose-california-psychiatric-virtual-assistant" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                <div className="p-8">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl text-primary">psychology</span>
                  </div>
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                    How to Choose a California Psychiatric Virtual Assistant
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    A comprehensive guide to selecting the right psychiatric virtual assistant for your California practice.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Read Article <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Blog Post 2 */}
              <Link href="/blog/how-to-scale-private-psychiatry-practice" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                <div className="p-8">
                  <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl text-accent">trending_up</span>
                  </div>
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                    How to Scale Your Private Psychiatry Practice
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Strategic frameworks for sustainable growth without compromising clinical quality.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Read Article <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Blog Post 3 */}
              <Link href="/blog/psychiatrist-salary-california-private-practice" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                <div className="p-8">
                  <div className="bg-trust-navy/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl text-trust-navy">account_balance</span>
                  </div>
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                    Psychiatrist Salary in California Private Practice
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Comprehensive analysis of earning potential and financial optimization strategies.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    Read Article <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                View All Articles <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT & CONTACT */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* About */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Our Commitment</span>
                  <h2 className="font-serif text-4xl md:text-5xl text-trust-navy leading-tight">
                    Dedicated to the Psychiatrists Who Shape <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">California’s Future</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                    We support clinicians whose work demands the <strong className="font-medium text-trust-navy">highest level of precision</strong>. Our team brings years of specialized experience in psychiatric practice management.
                  </p>

                  <div className="relative pl-6 md:pl-8 py-2">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full" />
                    <p className="text-xl md:text-2xl font-serif text-trust-navy italic leading-relaxed">
                      "We understand the unique challenges of complex care. We build systems that match them."
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/about" className="group inline-flex items-center gap-3 text-trust-navy font-bold text-lg hover:text-primary transition-colors">
                    <span className="border-b-2 border-primary/20 pb-1 group-hover:border-primary transition-all">Meet the Team</span>
                    <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="relative group rounded-[2.5rem] p-12 md:p-14 overflow-hidden border border-white/10 shadow-2xl bg-[#032640]">
                {/* Premium Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-trust-navy via-[#0B1C2E] to-black z-0" />

                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                  <div>
                    <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                      <span className="text-accent font-bold uppercase tracking-widest text-xs">Limited Availability</span>
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">Request Strategy Audit</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-primary/30 pl-6">
                      We partner with a limited number of psychiatrists to ensure the highest level of service.
                    </p>

                    <div className="space-y-1 text-sm text-slate-400 font-medium">
                      <p className="uppercase tracking-widest text-xs opacity-50 mb-2">Private Practice Operations</p>
                      <p className="text-white text-base">Virtual Minds, LLC</p>
                      <p className="text-white/80 font-mono">(310) 400-6266</p>
                    </div>
                  </div>

                  <Link href="/book-consultation" className="w-full bg-[#C05621] hover:bg-[#A0451A] text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-[0_10px_40px_-10px_rgba(192,86,33,0.5)] text-center transition-all hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(192,86,33,0.6)] border-t border-white/20">
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section >

      </main >

      <Footer />
    </div >
  );
}
