import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Thank You - Consultation Booked | Virtual Minds",
    description: "Your strategy call has been successfully scheduled. Here's what happens next.",
};

export default function ThankYouPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-20 px-6">
                <div className="max-w-3xl w-full">
                    {/* Success Animation */}
                    <div className="text-center mb-12">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto animate-in zoom-in duration-500">
                            <span className="material-symbols-outlined text-6xl text-green-600">check_circle</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mb-4 italic">
                            You're on the <span className="text-[#D2691E]">Waitlist!</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-2">
                            Your strategy call request has been received.
                        </p>
                        <p className="text-sm text-slate-500">
                            Confirmation email sent to your inbox.
                        </p>
                    </div>

                    {/* What Happens Next - Timeline */}
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl mb-8">
                        <h2 className="text-2xl font-bold text-[#2A2A2A] mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#D2691E]">schedule</span>
                            What Happens Next
                        </h2>

                        <div className="space-y-8">
                            {/* Step 1 */}
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-[#D2691E] text-white flex items-center justify-center font-bold shrink-0">
                                        1
                                    </div>
                                    <div className="w-[2px] h-full bg-[#D2691E]/20 mt-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h3 className="font-bold text-lg text-[#2A2A2A] mb-2">Email Confirmation (Next 5 Minutes)</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Check your inbox for a confirmation email with your request details. If you don't see it, check your spam folder.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-[#D2691E] text-white flex items-center justify-center font-bold shrink-0">
                                        2
                                    </div>
                                    <div className="w-[2px] h-full bg-[#D2691E]/20 mt-2"></div>
                                </div>
                                <div className="pb-8">
                                    <h3 className="font-bold text-lg text-[#2A2A2A] mb-2">Team Review (Within 24 Hours)</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Our clinical operations team will review your practice details and verify your California location to ensure we're the right fit.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-[#D2691E] text-white flex items-center justify-center font-bold shrink-0">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-[#2A2A2A] mb-2">Strategy Call Scheduled</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        We'll send you a calendar invite for your 15-minute strategy audit via email or text. You'll meet with a Virtual Minds specialist who understands California psychiatric practice operations.
                                    </p>
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                                        <p className="text-sm font-bold text-[#2A2A2A] mb-2">
                                            <span className="material-symbols-outlined text-sm align-middle mr-1">info</span>
                                            Preparation Tip
                                        </p>
                                        <p className="text-sm text-slate-600">
                                            Have your EHR dashboard open and be ready to discuss your biggest administrative bottleneck. The more specific you are, the more actionable your audit will be.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* While You Wait Section */}
                    <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-3xl p-8 md:p-12 text-white mb-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#D2691E]">auto_stories</span>
                            While You Wait: Free Resources
                        </h2>
                        <p className="text-white/90 mb-8">
                            Explore our operational blueprints to start optimizing your practice today.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Link
                                href="/resources/blueprints/medication-management"
                                className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group"
                            >
                                <span className="material-symbols-outlined text-[#D2691E] text-3xl mb-3 block">medication</span>
                                <h3 className="font-bold text-lg mb-2 text-white">Medication Mgmt Blueprint</h3>
                                <p className="text-sm text-white/80 mb-3">Stop losing 8+ hours/week on pharmacy calls.</p>
                                <span className="text-[#D2691E] text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </span>
                            </Link>

                            <Link
                                href="/resources/blueprints/revenue-architecture"
                                className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group"
                            >
                                <span className="material-symbols-outlined text-[#D2691E] text-3xl mb-3 block">payments</span>
                                <h3 className="font-bold text-lg mb-2 text-white">Revenue Optimization</h3>
                                <p className="text-sm text-white/80 mb-3">Capture $18K+ in missed billing opportunities.</p>
                                <span className="text-[#D2691E] text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                        <div className="flex justify-center items-center gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="material-symbols-outlined text-yellow-400 text-xl">star</span>
                            ))}
                        </div>
                        <p className="text-slate-600 italic mb-3">
                            "Virtual Minds transformed my practice from chaos to precision in 90 days. The strategy call alone was worth thousands in insights."
                        </p>
                        <p className="text-sm font-bold text-[#2A2A2A]">
                            — Dr. Sarah Chen, Private Practice Psychiatrist, San Francisco
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <Link
                            href="/"
                            className="px-8 py-3 bg-white border-2 border-slate-200 text-[#2A2A2A] font-bold rounded-xl hover:bg-slate-50 transition-all text-center"
                        >
                            Return to Homepage
                        </Link>
                        <Link
                            href="/resources"
                            className="px-8 py-3 bg-[#D2691E] text-white font-bold rounded-xl hover:bg-[#B8860B] transition-all text-center"
                        >
                            Browse Resources
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
