import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ConsultationForm from "@/components/conversion/ConsultationForm";

export const metadata = {
    title: "Book Your Strategy Call | Virtual Minds",
    description: "Schedule your 15-minute psychiatric strategy call. We'll analyze your workflow and match you with a specialized, HIPAA-trained VA.",
};

export default function BookConsultationPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Book Consultation" }
                ]}
            />
            <main className="flex-grow flex flex-col items-center py-12 px-6">
                <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side: Content & Timeline */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-[#D2691E] font-bold tracking-widest text-xs uppercase">Strategy & Consultation</span>
                            <h1 className="text-[#4A4A4A] text-4xl font-black leading-tight tracking-tight lg:text-5xl font-display">
                                Your <span className="text-[#D2691E]">Gold Standard</span> <br />
                                Strategy Audit
                            </h1>
                            <p className="text-[#4A4A4A] text-lg leading-relaxed">
                                Schedule your 15-minute California psychiatric strategy call. Our team will help analyze your vertical administrative hurdles and match you with a specialized, HIPAA-trained VA.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="material-symbols-outlined text-[#D2691E] text-xl font-bold">verified</span>
                                <p className="text-sm font-bold text-[#4A4A4A] italic">Exclusively Serving California Psychiatric Practices</p>
                            </div>
                        </div>

                        {/* What to Expect Timeline */}
                        <div className="border-t border-[#D2691E]/20 pt-8">
                            <h3 className="text-xl font-bold mb-6 text-[#4A4A4A] font-display">What to Expect</h3>
                            <div className="grid grid-cols-[40px_1fr] gap-x-4">
                                {/* Step 1 */}
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center size-10 rounded-full bg-[#D2691E]/20 text-[#D2691E]">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div className="w-[2px] bg-[#D2691E]/20 h-full"></div>
                                </div>
                                <div className="flex flex-col pb-8">
                                    <p className="text-[#4A4A4A] text-base font-bold">Initial Assessment</p>
                                    <p className="text-[#4A4A4A] text-sm mt-1">A brief 15-minute call to understand your clinic's specific administrative hurdles.</p>
                                </div>

                                {/* Step 2 */}
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center justify-center size-10 rounded-full bg-[#9CAF88]/20 text-[#9CAF88]">
                                        <span className="material-symbols-outlined">analytics</span>
                                    </div>
                                    <div className="w-[2px] bg-slate-200 h-full"></div>
                                </div>
                                <div className="flex flex-col pb-8">
                                    <p className="text-trust-navy text-base font-bold">Workflow Analysis</p>
                                    <p className="text-slate-500 text-sm mt-1">We review your current EHR (Athena, Charm, etc.) and identify automation opportunities.</p>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-col items-center gap-1 pb-2">
                                    <div className="flex items-center justify-center size-10 rounded-full bg-primary text-white">
                                        <span className="material-symbols-outlined">person_add</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-trust-navy text-base font-bold">VA Matching</p>
                                    <p className="text-slate-500 text-sm mt-1">Get introduced to your specialized psychiatric virtual assistant within 72 hours.</p>
                                </div>
                            </div>
                        </div>

                        {/* HIPAA Shield */}
                        <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                            <span className="material-symbols-outlined text-primary text-3xl">security</span>
                            <div>
                                <p className="text-sm font-bold text-trust-navy">100% HIPAA Compliant</p>
                                <p className="text-xs text-slate-500">All data handled according to federal security standards.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Capture Form */}
                    <ConsultationForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}
