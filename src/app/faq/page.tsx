import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import FaqClient from "@/components/faq/FaqClient";

export const metadata = {
    title: "Operational Intelligence FAQ | Psychiatric Practice Management",
    description: "Technical and operational answers for specialized psychiatric practices. Compliance, scaling, and operational support protocols.",
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3] text-trust-navy font-display">
            <Navbar />

            <main className="flex-grow">
                {/* 1. EXECUTIVE HERO BACKGROUND */}
                <section className="relative pt-10 md:pt-24 pb-16 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10">
                        {/* Client Component handles Hero Content + Search + FAQ List */}
                        <FaqClient />
                    </div>
                </section>

                {/* 3. FINAL CTA */}
                <section className="bg-[#1A2332] py-32 relative overflow-hidden">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2691E]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Specific Inquiry Required?</h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                            If your practice has custom compliance or EHR requirements, book a brief recovery plan session with our lead strategist.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/book-consultation" className="px-10 py-5 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-[#D2691E]/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                                <span className="material-symbols-outlined">calendar_month</span>
                                See My Recovery Plan
                            </Link>
                            <Link href="/contact" className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-3">
                                <span className="material-symbols-outlined">mail</span>
                                Direct Channel
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
