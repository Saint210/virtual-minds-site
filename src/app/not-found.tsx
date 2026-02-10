import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Navbar />
      </div>

      <main className="flex-grow flex items-center justify-center py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="relative mb-6">
            <div className="text-[120px] md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary leading-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-primary">search_off</span>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-3">
              Page Not Found
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back to finding the perfect administrative support for your California psychiatric practice.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-xl shadow-primary/20"
            >
              <span className="material-symbols-outlined text-xl">home</span>
              Back to Homepage
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-xl">apps</span>
              View Services
            </Link>
          </div>

          {/* Helpful Links Grid */}
          <div className="bg-[#FAF8F3] rounded-2xl p-6 border border-slate-200">
            <h3 className="font-serif text-xl font-bold text-trust-navy mb-4">
              Looking for something specific?
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Link
                href="/specialties"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-trust-navy group-hover:text-primary transition-colors">Specialties</div>
                  <div className="text-xs text-slate-500">All subspecialties</div>
                </div>
              </Link>

              <Link
                href="/pricing"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">payments</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-trust-navy group-hover:text-primary transition-colors">Pricing</div>
                  <div className="text-xs text-slate-500">Plans & packages</div>
                </div>
              </Link>

              <Link
                href="/tools/roi-calculator"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">calculate</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-trust-navy group-hover:text-primary transition-colors">ROI Calculator</div>
                  <div className="text-xs text-slate-500">See your savings</div>
                </div>
              </Link>

              <Link
                href="/resources"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">library_books</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-trust-navy group-hover:text-primary transition-colors">Resources</div>
                  <div className="text-xs text-slate-500">Guides & articles</div>
                </div>
              </Link>

              <Link
                href="/blog"
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">article</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-trust-navy group-hover:text-primary transition-colors">Blog</div>
                  <div className="text-xs text-slate-500">Industry insights</div>
                </div>
              </Link>

              <Link
                href="/book-consultation"
                className="group flex items-center gap-3 p-4 bg-primary/5 rounded-xl border-2 border-primary hover:bg-primary hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 group-hover:bg-white/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">calendar_today</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-primary group-hover:text-white transition-colors">Book Consultation</div>
                  <div className="text-xs text-primary/70 group-hover:text-white/70">Get started today</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
