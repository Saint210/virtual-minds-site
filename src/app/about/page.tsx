import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AboutHero from "@/components/about/AboutHero";
import LeadershipProfile from "@/components/about/LeadershipProfile";
import ClinicalPedigree from "@/components/about/ClinicalPedigree";
import AboutSpecialization from "@/components/about/AboutSpecialization";
import PremiumPageSection from "@/components/ui/PremiumPageSection";
import Link from "next/link";

export const metadata = {
    title: "About Virtual Minds | Specialized Psychiatric Practice Management & Virtual Assistants",
    description: "California's premier psychiatric practice management firm. We provide director-level virtual assistants and operational systems for high-acuity private practices.",
    keywords: ["psychiatric virtual assistant", "mental health operations director", "psychiatric practice management", "medical residency training VA", "mental health operations staff"],
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "The Firm" }
                ]}
            />

            <main className="flex-grow">
                <AboutHero />
                <LeadershipProfile />
                <ClinicalPedigree />
                <AboutSpecialization />

                {/* CORE MESSAGING - Modularized with PremiumWrapper */}
                <PremiumPageSection withGrid bgType="white">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Operational Value</span>
                            <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                            Director-Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Operational Support</span>.
                        </h2>
                        <p className="text-slate-600 max-w-3xl mx-auto text-lg font-medium">
                            We handle the workflows that <strong className="text-trust-navy">take you away from patient care</strong>, ensuring your practice runs <span className="text-primary font-bold">smoothly while you focus on clinical excellence</span>.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Specialized Training", icon: "school", desc: "Our team is trained specifically in psychiatric-specific telehealth workflows, prescription authorization, and EHR management." },
                            { title: "California Privacy", icon: "security", desc: "Expertise in California patient privacy requirements and secure data handling protocols." },
                            { title: "Administrative Mastery", icon: "verified_user", desc: "Reliable support for intake, pharmacy liaison, and insurance verification for psychiatric practices." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#FAF8F3] p-10 rounded-[2.5rem] border-2 border-slate-200 hover:border-primary/30 group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </PremiumPageSection>

                {/* FINAL CTA - Refined with Premium Styling */}
                <section className="bg-trust-navy py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight !text-white">
                            Return to <span className="text-primary">Patient Care</span>.
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Experience the difference of a <strong className="text-white">specialized psychiatric operations team</strong>. Request your <span className="text-primary font-bold">15-minute Recovery Plan</span> to get started.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/book-consultation"
                                className="px-12 py-5 bg-primary hover:bg-[#B8860B] text-white font-bold text-xl rounded-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                            >
                                <span className="material-symbols-outlined">calendar_today</span>
                                See My Recovery Plan
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
