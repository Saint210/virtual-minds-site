"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-4 pb-8 md:pt-8 md:pb-16 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-healthcare-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Copy (Left) */}
          <div className="lg:w-[55%] space-y-6">

            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out fill-mode-forwards">
              <h1 className="font-serif text-4xl md:text-6xl font-medium text-trust-navy leading-[1.1] tracking-tight mb-4">
                <span className="block text-lg md:text-xl text-primary font-bold mb-2 uppercase tracking-wide">California Psychiatric Virtual Assistant</span>
                You Didn't Go to Medical School<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 font-bold">to Chase Prior Authorizations.</span>
              </h1>
            </div>

            <motion.p
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl border-l-4 border-primary pl-4 md:pl-6 mb-4"
            >
              20+ hours a week on calls, forms, and follow-ups — that's time you should be spending with patients. We handle the admin with a dedicated <strong>Psychiatric Virtual Assistant</strong> so you don't have to.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-4"
            >
              Generic VAs don't understand <strong>psychiatric billing</strong>, <strong>HIPAA</strong>, or how your <strong>EHR actually works</strong>. We do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] text-center flex items-center justify-center gap-2 group">
                <span>Request Audit</span>
                <span className="material-symbols-outlined text-white/80 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link href="/services" className="bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-trust-navy/30 hover:shadow-lg text-center flex items-center justify-center">
                View Verified Services
              </Link>
            </motion.div>

            {/* Micro-Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-3 gap-4 py-3 mt-4"
            >
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
            </motion.div>

            {/* Authority Signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-3 border-t border-slate-200/60 mt-2"
            >
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
            </motion.div>

          </div>

          {/* Hero Image (Right) - OPTIMIZED FOR MOBILE PERFORMANCE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:w-[45%] relative"
          >
            <div
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-slate-100 hover:scale-[1.02] transition-transform duration-700 ease-out"
              style={{ aspectRatio: '1/1' }}
            >
              {/* Organic Tech Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-trust-navy/40 via-transparent to-accent/20 z-10 pointer-events-none mix-blend-multiply" />

              <Image
                src="/images/homepage-hero.webp"
                alt="Professional Psychiatric Virtual Consultation - Virtual assistant managing practice workflows"
                width={800}
                height={1000}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 40vw"
                priority
                fetchPriority="high"
                decoding="sync"
                loading="eager"
                quality={80}
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
