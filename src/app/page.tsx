

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServingCaliforniaSection from "@/components/home/ServingCaliforniaSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

// Lazy load calculator to improve initial page load
const PracticeLeaksCalculator = dynamic(() => import("@/components/tools/PracticeLeaksCalculator"), {
  loading: () => (
    <div className="w-full max-w-5xl mx-auto h-96 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200 animate-pulse">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-1/2 p-12 bg-slate-50"></div>
        <div className="lg:w-1/2 p-12 bg-slate-200"></div>
      </div>
    </div>
  )
});


export const metadata = {
  title: "California Psychiatric Virtual Assistant | Virtual Minds",
  description: "California Psychiatric Virtual Assistant services for high-acuity practices. HIPAA-compliant support for intake, billing, and practice management. Recover 15+ hours weekly.",
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virtual Minds",
    "url": "https://virtualminds.com",
    "logo": "https://virtualminds.com/images/logo.png",
    "description": "Specialized practice management for mental health professionals in California.",
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
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-healthcare-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse-slow" />

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Copy (Left) */}
              <div className="lg:w-[55%] space-y-6">

                <h1 className="font-serif text-4xl md:text-6xl font-medium text-trust-navy leading-[1.1] tracking-tight mb-4 animate-fade-in-up">
                  <span className="block text-lg md:text-xl text-primary font-bold mb-2 uppercase tracking-wide">California Psychiatric Virtual Assistant</span>
                  You Didn't Go to Medical School<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 font-bold">to Chase Prior Authorizations.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-primary pl-4 md:pl-6 mb-4 animate-fade-in-up [animation-delay:200ms]">
                  20+ hours a week on calls, forms, and follow-ups — that's time you should be spending with patients. We handle the admin with a dedicated <strong>Psychiatric Virtual Assistant</strong> so you don't have to.
                </p>

                <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-4 animate-fade-in-up [animation-delay:400ms]">
                  Generic VAs don't understand <strong>psychiatric billing</strong>, <strong>HIPAA</strong>, or how your <strong>EHR actually works</strong>. We do.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up [animation-delay:600ms]">
                  <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] text-center flex items-center justify-center gap-2 group">
                    <span>Request Audit</span>
                    <span className="material-symbols-outlined text-white/80 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link href="/services" className="bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-trust-navy/30 hover:shadow-lg text-center flex items-center justify-center">
                    View Verified Services
                  </Link>
                </div>

                {/* Micro-Stats Bar */}
                <div className="grid grid-cols-3 gap-4 py-3 mt-4 animate-fade-in-up [animation-delay:800ms]">
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-serif font-bold text-primary flex justify-center">
                      <AnimatedCounter end={15} suffix="+" duration={2000} />
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Hours Saved Weekly</p>
                  </div>
                  <div className="text-center border-x border-slate-200">
                    <p className="text-3xl md:text-4xl font-serif font-bold text-primary flex justify-center">
                      <AnimatedCounter end={98} suffix="%" duration={2000} />
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Billing Accuracy</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl md:text-4xl font-serif font-bold text-primary flex justify-center">
                      <AnimatedCounter end={25} prefix="$" suffix="k+" duration={2000} />
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Revenue Protected</p>
                  </div>
                </div>

                {/* Authority Signal */}
                <div className="pt-3 border-t border-slate-200/60 mt-2">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Supporting Clinicians Trained At</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 opacity-60">
                    {["UCSF", "Stanford", "Harvard", "UCLA", "Princeton", "Duke", "Baylor"].map(school => (
                      <span key={school} className="font-serif text-xl text-trust-navy">{school}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 bg-trust-navy/5 w-fit px-4 py-2 rounded-lg border border-trust-navy/10">
                    <span className="material-symbols-outlined text-trust-navy text-lg">school</span>
                    <span className="text-xs font-bold text-trust-navy">Trusted by Psychiatrists from Top Residency Programs</span>
                  </div>
                </div>

              </div>

              {/* Hero Image (Right) - OPTIMIZED FOR MOBILE PERFORMANCE */}
              <div className="lg:w-[45%] relative">
                <div
                  className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-slate-100 animate-fade-in-up [animation-delay:800ms] hover:scale-[1.02] transition-transform duration-700 ease-out"
                  style={{ aspectRatio: '1/1' }}
                >
                  {/* Organic Tech Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-trust-navy/40 via-transparent to-accent/20 z-10 pointer-events-none mix-blend-multiply" />

                  <Image
                    src="/images/homepage-hero.webp"
                    alt="Professional Psychiatric Virtual Consultation - Virtual assistant managing practice workflows"
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
                        <span className="material-symbols-outlined text-primary text-[24px] w-6 h-6 inline-block overflow-hidden" aria-hidden="true">verified_user</span>
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

        {/* FOUNDING STORY - DEDICATED SECTION */}
        {/* FOUNDING STORY - DARK MODE EXECUTIVE RESKIN */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Texture/Blob */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-10 animate-fade-in-up [animation-delay:200ms]">
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">The Origin Story</span>
              <h2 className="font-serif text-3xl md:text-5xl text-trust-navy leading-tight">
                "I followed her to Virtual Minds <br className="hidden md:block" />
                <span className="text-primary italic">without hesitation.</span>"
              </h2>
            </div>

            <div className="bg-trust-navy p-8 md:p-12 rounded-3xl shadow-2xl shadow-trust-navy/20 border border-white/10 relative animate-fade-in-up [animation-delay:400ms] overflow-hidden group">
              {/* Background Decoration - Subtle Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
                {/* Subtle Watermark Quote */}
                <span className="text-8xl text-white/5 font-serif absolute -top-10 -left-6 md:-left-12 select-none pointer-events-none">"</span>

                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-serif italic relative">
                  I was spending half my day on admin &mdash; prior auths, phone calls, insurance headaches. Cheryl&apos;s team took over and stabilized everything overnight. With that off my plate, I finally have time to scale &mdash; and I&apos;ve already commissioned Virtual Minds to build our new <strong className="text-white font-bold not-italic decoration-primary/50 underline underline-offset-4">high-conversion website</strong>.
                </p>

                <div className="mt-10 flex flex-col md:flex-row items-center gap-6 pt-8 md:justify-between border-t border-white/10">
                  {/* Signature Block */}
                  <div className="flex items-center gap-5">
                    <div className="size-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-serif font-bold text-3xl shrink-0 backdrop-blur-sm">
                      C
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-bold text-white text-lg">Founding Client</p>
                      <p className="text-sm text-slate-400 font-medium">Board-Certified Reproductive Psychiatrist</p>
                    </div>
                  </div>

                  {/* Verified Badge - Glassmorphic Dark Mode */}
                  <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors">
                    <div className="bg-primary/20 p-1.5 rounded-full">
                      <span className="material-symbols-outlined text-primary text-[18px] block">verified_user</span>
                    </div>
                    <div className="flex flex-col items-start leading-none gap-0.5">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Verified</span>
                      <span className="text-xs font-bold text-white">100% Client Retention</span>
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
              <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">We Know Your Specialty</span>
              <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Complex Care</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Every subspecialty has different scheduling, billing, and compliance demands. We've seen them all.
              </p>
            </div>

            {/* Specialties Grid - Clinical Precision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { name: "Neuropsychiatry", slug: "neuropsychiatry", preview: "Neurological testing & specialized assessments", icon: "neurology" },
                { name: "Child & Adolescent", slug: "child-adolescent-psychiatry", preview: "School coordination & family communication", icon: "child_care" },
                { name: "Women's Mental Health", slug: "womens-mental-health", preview: "Reproductive psychiatry & perinatal care", icon: "female" },
                { name: "Integrative Psychiatry", slug: "integrative-psychiatry", preview: "Functional labs & holistic coordination", icon: "science" },
                { name: "Sleep Medicine", slug: "sleep-medicine", preview: "Sleep study coordination & scheduling", icon: "bedtime" },
                { name: "ADHD & Executive Function", slug: "adhd-neuropsychiatry", preview: "Prior authorizations & testing coordination", icon: "psychology" },
                { name: "OCD & Anxiety Disorders", slug: "ocd-anxiety-disorders", preview: "ERP protocols & intensive treatment support", icon: "waves" },
                { name: "Eating Disorders", slug: "eating-disorders", preview: "Multidisciplinary team coordination", icon: "restaurant_menu" },
                { name: "Consult-Liaison", slug: "consult-liaison", preview: "Hospital consultation & medical team liaison", icon: "medical_services" }
              ].map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/specialties/${spec.slug}`}
                  className="group relative bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-trust-navy transition-all duration-300 flex flex-col gap-4 overflow-hidden cursor-pointer hover:-translate-y-1"
                >
                  {/* Hover Beam Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/0 via-trust-navy/0 to-trust-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start justify-between relative z-10 w-full">
                    {/* Icon badge */}
                    <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-trust-navy group-hover:border-trust-navy flex items-center justify-center transition-all duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-trust-navy group-hover:text-white text-3xl transition-colors duration-300">{spec.icon}</span>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      <span className="text-xs font-bold text-trust-navy uppercase tracking-wider">Explore</span>
                      <span className="material-symbols-outlined text-trust-navy text-sm">arrow_forward</span>
                    </div>
                  </div>

                  <div className="relative z-10 mt-2">
                    <h3 className="font-serif text-xl font-bold text-trust-navy group-hover:text-primary transition-colors mb-2">{spec.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                      {spec.preview}
                    </p>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Why Psychiatrists Switch to Us</span>
                <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-8 leading-tight">
                  Generic VAs <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Can't Handle This</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Most VAs look good on paper but don't understand psychiatric billing, prior auth logic, or HIPAA. They miss intake details, fumble authorizations, and cost you revenue you'll never recover.
                </p>
                <div className="pl-6 border-l-4 border-primary relative">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm" />
                  <div className="flex items-center gap-2 mb-4 opacity-80">
                    <span className="material-symbols-outlined text-primary text-lg">security</span>
                    <span className="text-xs font-bold text-trust-navy uppercase tracking-widest">From a Real Client</span>
                  </div>
                  <p className="text-xl font-serif text-trust-navy mb-2 italic">
                    "I just want to see my patients. Virtual Minds handles everything else."
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
              {/* Dark Mode Feature Card - High Contrast */}
              <div className="relative group rounded-[2.5rem] p-1 scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-trust-navy via-trust-navy/90 to-primary/20 rounded-[2.5rem] blur-xl opacity-50" />
                <div className="bg-trust-navy rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative z-10 overflow-hidden">
                  {/* Decorative Abstract Shapes */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-8 flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-primary/50"></span>
                      The Virtual Minds Standard
                    </h3>
                    <ul className="space-y-5">
                      {[
                        "Flawless Patient Communication",
                        "Detailed Document Management",
                        "Reliable Refill & PA Workflows",
                        "HIPAA-Verified Systems",
                        "Zero Administrative Drift"
                      ].map((req, i) => (
                        <li key={i} className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform">
                          <div className="bg-white/10 text-primary p-2 rounded-full shadow-inner flex items-center justify-center border border-white/5">
                            <span className="material-symbols-outlined text-sm">check</span>
                          </div>
                          <span className="text-lg font-bold text-white">{req}</span>
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
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative group hover:border-trust-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  {/* Technical Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                  <div className="relative z-10">
                    <div className="absolute -top-5 -left-5 bg-trust-navy text-white p-4 rounded-br-2xl shadow-lg group-hover:bg-primary transition-colors border-r border-b border-white/20">
                      <span className="material-symbols-outlined text-2xl relative top-1 left-1">inventory</span>
                    </div>
                    <div className="flex justify-end mb-10">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded bg-white/80 backdrop-blur-sm">STEP 01</span>
                    </div>
                    <h3 className="font-serif text-2xl text-trust-navy mb-4 mt-2 font-bold">Diagnostic Review</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">We audit your current processes, identify bottlenecks, and review your practice goals to build a custom roadmap.</p>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative group hover:border-trust-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  {/* Technical Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                  <div className="relative z-10">
                    <div className="absolute -top-5 -left-5 bg-trust-navy text-white p-4 rounded-br-2xl shadow-lg group-hover:bg-primary transition-colors border-r border-b border-white/20">
                      <span className="material-symbols-outlined text-2xl relative top-1 left-1">engineering</span>
                    </div>
                    <div className="flex justify-end mb-10">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded bg-white/80 backdrop-blur-sm">STEP 02</span>
                    </div>
                    <h3 className="font-serif text-2xl text-trust-navy mb-4 mt-2 font-bold">Implementation</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">We deploy EHR optimization, set up HIPAA-compliant workflows, and establish clear client management policies.</p>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative group hover:border-trust-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                  {/* Technical Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                  <div className="relative z-10">
                    <div className="absolute -top-5 -left-5 bg-trust-navy text-white p-4 rounded-br-2xl shadow-lg group-hover:bg-primary transition-colors border-r border-b border-white/20">
                      <span className="material-symbols-outlined text-2xl relative top-1 left-1">verified</span>
                    </div>
                    <div className="flex justify-end mb-10">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded bg-white/80 backdrop-blur-sm">STEP 03</span>
                    </div>
                    <h3 className="font-serif text-2xl text-trust-navy mb-4 mt-2 font-bold">Ongoing Management</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Daily administrative management, billing liaison support, and ongoing operational refinement to prevent drift.</p>
                  </div>
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

        {/* VERIFIED SERVICE PILLARS - ALIGNED WITH SILOS */}
        <section className="py-24 bg-[#FAF8F3]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-trust-navy mb-4">Verified Service Pillars</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Three pillars of support designed to scale your practice while minimizing liability.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Card 1: Clinical Ops (Silo 1) */}
              <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Silo 1: Ops</span>
                  </div>
                  <Image
                    src="/images/practice-consulting-dashboard.png"
                    alt="Psychiatric Practice Consulting Dashboard"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-trust-navy mb-3">Clinical Operations Strategy</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">Strategic consulting for psychiatrists requiring a stable, compliant, and scalable foundation.</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {["Start-up Launch", "EHR Setup", "HIPAA Policy", "Contract Analysis"].map((item) => (
                      <span key={item} className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-100">
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link href="/services/practice-consulting" className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide group/link hover:text-accent/80 transition-colors">
                    View Consulting Scopes <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 2: Virtual Support (Silo 2) */}
              <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col ring-1 ring-trust-navy/5">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-trust-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Silo 2: Support</span>
                  </div>
                  <Image
                    src="/images/psychiatrist-va-hero.png"
                    alt="Psychiatric Virtual Assistant"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-trust-navy mb-3">Virtual Support Systems</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">Administrative execution delivered with clinical nuance and absolute reliability.</p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {["Intake Selection", "Patient Comms", "Doc Management", "Prior Auths"].map((item) => (
                      <span key={item} className="bg-trust-navy/5 text-trust-navy px-3 py-1.5 rounded-lg text-xs font-bold border border-trust-navy/5">
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link href="/services/virtual-assistant" className="inline-flex items-center gap-2 text-trust-navy font-bold text-sm tracking-wide group/link hover:text-trust-navy/80 transition-colors">
                    View Clinical Support <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Card 3: Revenue (Silo 3) */}
              <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Silo 3: Revenue</span>
                  </div>
                  <Image
                    src="/images/visual-intel-rcm.png"
                    alt="Revenue Cycle Management Intelligence"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl text-trust-navy mb-3">Revenue Protection Liaison</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">We coordinate with your biller to resolve issues. <span className="text-primary font-bold">We do NOT submit claims.</span></p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {["Superbills", "Eligibility", "Biller Comms", "Cards & Payments"].map((item) => (
                      <span key={item} className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-100">
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link href="/services/billing-and-rcm" className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide group/link hover:text-primary/80 transition-colors">
                    View Liaison Scope <span className="material-symbols-outlined text-lg group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
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
              <Link href="/blog/how-to-choose-california-psychiatric-virtual-assistant" className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-trust-navy hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-trust-navy uppercase tracking-widest">Operations</span>
                  </div>
                  <Image
                    src="/images/operational-process-review-mental-health.jpg"
                    alt="Psychiatric practice operations review"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col h-full">
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors flex-grow leading-tight">
                    How to Choose a California Psychiatric Virtual Assistant
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-2">
                    A comprehensive guide to selecting the right psychiatric virtual assistant for your California practice.
                  </p>
                  <div className="flex items-center gap-2 text-trust-navy font-bold text-xs uppercase tracking-wider group-hover:text-primary transition-colors mt-auto border-t border-slate-100 pt-6">
                    Read Analysis <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Blog Post 2 */}
              <Link href="/blog/how-to-scale-private-psychiatry-practice" className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-trust-navy hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-trust-navy uppercase tracking-widest">Growth Strategy</span>
                  </div>
                  <Image
                    src="/images/how-to-scale-psychiatry-practice.jpg"
                    alt="Scaling a private psychiatry practice"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col h-full">
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors flex-grow leading-tight">
                    How to Scale Your Private Psychiatry Practice
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-2">
                    Strategic frameworks for sustainable growth without compromising clinical quality.
                  </p>
                  <div className="flex items-center gap-2 text-trust-navy font-bold text-xs uppercase tracking-wider group-hover:text-primary transition-colors mt-auto border-t border-slate-100 pt-6">
                    Read Analysis <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>

              {/* Blog Post 3 */}
              <Link href="/blog/psychiatrist-salary-california-private-practice" className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-trust-navy hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-bold text-trust-navy uppercase tracking-widest">Financial Intelligence</span>
                  </div>
                  <Image
                    src="/images/psychiatrist-salary-california.jpg"
                    alt="California Psychiatrist Salary Analysis"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col h-full">
                  <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors flex-grow leading-tight">
                    Psychiatrist Salary in California Private Practice
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-2">
                    Comprehensive analysis of earning potential and financial optimization strategies.
                  </p>
                  <div className="flex items-center gap-2 text-trust-navy font-bold text-xs uppercase tracking-wider group-hover:text-primary transition-colors mt-auto border-t border-slate-100 pt-6">
                    Read Analysis <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
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
                    <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">Let's Talk About Your Practice</h3>
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
