import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          {/* 404 Number */}
          <div className="text-8xl md:text-9xl font-black text-[#D2691E] mb-8">404</div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-trust-navy mb-6">
            Page Not Found
          </h1>

          <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back to finding the perfect virtual assistant for your California psychiatric practice.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group bg-[#D2691E] hover:bg-[#B8860B] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">home</span>
              Back to Homepage
            </Link>

            <Link
              href="/services"
              className="group border-2 border-[#D2691E] text-[#D2691E] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D2691E]/5 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">services</span>
              View Services
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 p-6 bg-white/80 backdrop-blur-md border border-[#D2691E]/20 rounded-2xl">
            <h3 className="font-bold text-trust-navy mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Link href="/pricing" className="text-[#D2691E] hover:text-[#B8860B] transition-colors">
                → Pricing Plans
              </Link>
              <Link href="/services" className="text-[#D2691E] hover:text-[#B8860B] transition-colors">
                → All Services
              </Link>
              <Link href="/about" className="text-[#D2691E] hover:text-[#B8860B] transition-colors">
                → About Virtual Minds
              </Link>
              <Link href="/contact" className="text-[#D2691E] hover:text-[#B8860B] transition-colors">
                → Contact Us
              </Link>
              <Link href="/roi-calculator" className="text-[#D2691E] hover:text-[#B8860B] transition-colors">
                → ROI Calculator
              </Link>
              <Link href="/book-consultation" className="text-[#D2691E] hover:text-[#B8860B] transition-colors">
                → Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
