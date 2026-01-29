import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OnboardingProcess from "@/components/marketing/OnboardingProcess";
import FAQSection from "@/components/marketing/FAQSection";
import Brands from "@/components/marketing/Brands";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
    title: "California Psychiatrist Virtual Assistant – Virtual Minds",
    description: "Improve your California practice efficiency with a dedicated psychiatric virtual assistant. HIPAA-compliant, CCPA-compliant, and trained for California mental health workflows including Medi-Cal billing.",
};

export default function MoneyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <Breadcrumbs 
                items={[
                    { label: "Home", href: "/" },
                    { label: "Psychiatrist VA" }
                ]}
            />
            <main className="flex-grow">
                {/* Hero Section - 2026 Modern Design */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Clean Background */}
                    <div className="absolute inset-0 bg-white">
                    </div>
                    
                    <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content - Mobile First */}
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium">
                            <span className="material-symbols-outlined text-primary">verified</span>
                            <span>Trusted by California Psychiatric Practices</span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-trust-navy">
                                California Psychiatric VAs
                                <br />
                                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                                    Reclaim Your Practice
                                </span>
                            </h1>
                            
                            {/* Value Proposition */}
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg">
                                Eliminate burnout and scale your practice with VAs trained in 
                                <span className="text-primary font-bold"> Medi-Cal billing</span>, 
                                <span className="text-primary font-bold"> HIPAA compliance</span>, and 
                                <span className="text-primary font-bold"> California telehealth</span>
                            </p>
                        </div>

                        {/* Interactive Metrics */}
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all">
                                <div className="text-2xl md:text-3xl font-black text-primary mb-1">15+</div>
                                <div className="text-trust-navy text-xs font-medium">Hours Saved</div>
                            </div>
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all">
                                <div className="text-2xl md:text-3xl font-black text-primary mb-1">95%</div>
                                <div className="text-trust-navy text-xs font-medium">Accuracy</div>
                            </div>
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 hover:bg-primary/20 transition-all">
                                <div className="text-2xl md:text-3xl font-black text-primary mb-1">25%</div>
                                <div className="text-trust-navy text-xs font-medium">More Patients</div>
                            </div>
                        </div>

                        {/* Modern CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/book-consultation"
                                className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="material-symbols-outlined">calendar_today</span>
                                    Book Free Strategy Call
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                            </Link>
                            
                            <button className="group border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors">
                                <span className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">calculate</span>
                                    Calculate Your ROI
                                </span>
                            </button>
                        </div>

                        {/* Urgency & Social Proof */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                                <span>Limited spots available this month</span>
                            </div>
                            
                            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 max-w-md mx-auto lg:mx-0">
                                <p className="text-slate-700 text-sm italic">
                                    Join California's leading psychiatric practices in elevating patient care with specialized virtual assistant expertise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Modern Visual */}
                    <div className="relative">
                        {/* Main Image with Glassmorphism */}
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center text-trust-navy p-8">
                                    <span className="material-symbols-outlined text-6xl text-primary mb-4">psychology</span>
                                    <h3 className="text-2xl font-bold mb-2">Virtual Assistant Excellence</h3>
                                    <p className="text-slate-600">California-trained psychiatric VAs ready to transform your practice efficiency and patient care</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        </div>
                        
                        {/* Floating California Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-primary/10 border border-primary/20 rounded-xl p-6 shadow-xl max-w-[200px] hover:bg-primary/20 transition-all">
                            <div className="text-center">
                                <p className="text-3xl font-display font-bold text-primary mb-1">CA</p>
                                <p className="text-xs font-bold uppercase tracking-widest text-trust-navy">Specialists</p>
                            </div>
                        </div>

                        {/* Floating Trust Indicators */}
                        <div className="absolute top-6 -left-6 bg-primary/10 border border-primary/20 rounded-xl p-4 shadow-xl hover:bg-primary/20 transition-all">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">security</span>
                                <div>
                                    <p className="text-xs font-bold text-trust-navy">HIPAA</p>
                                    <p className="text-xs text-slate-600">Certified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>

                {/* Brand Section */}
                <Brands />

                {/* Onboarding Process */}
                <OnboardingProcess />

                {/* FAQ Section */}
                <FAQSection />

                {/* Ready to Transform Final CTA */}
                <section className="relative py-20 overflow-hidden bg-[#F8FAFC]">
                    {/* Modern Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/10">
                        {/* Animated Elements */}
                        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                    </div>
                    
                    <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-12 md:p-20 text-center shadow-xl">
                            {/* Section Header */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                                <span className="material-symbols-outlined text-primary">rocket_launch</span>
                                <span>Ready to Transform</span>
                            </div>
                            
                            <h2 className="!text-trust-navy text-4xl md:text-6xl font-black mb-6 leading-tight">
                                Ready to Transform Your California Practice?
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                            <p className="text-slate-600 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
                                Join California psychiatric practices who have regained their freedom. Book your discovery call today and get expert California compliance support.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/book-consultation"
                                    className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white text-xl font-bold px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className="material-symbols-outlined">calendar_today</span>
                                        Hire Your California VA Now
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                                </Link>
                                <button className="group bg-white/80 backdrop-blur-md border border-slate-200 text-trust-navy text-xl font-bold px-12 py-6 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-lg inline-flex items-center">
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">support_agent</span>
                                        Speak to a California Expert
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
