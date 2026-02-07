import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpecialtyHero from "@/components/marketing/SpecialtyHero";
import ServiceMatrix from "@/components/marketing/ServiceMatrix";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import Link from "next/link";
import specialtiesData from "@/data/specialties.json";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const specialty = specialtiesData.find((s) => s.slug === slug);

    if (!specialty) {
        return {
            title: "Specialty Not Found | Virtual Minds",
        };
    }

    return {
        title: specialty.metaTitle,
        description: specialty.metaDescription,
        openGraph: {
            title: specialty.metaTitle,
            description: specialty.metaDescription,
            images: [
                {
                    url: specialty.heroImage,
                    width: 1200,
                    height: 630,
                    alt: specialty.name,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: specialty.metaTitle,
            description: specialty.metaDescription,
            images: [specialty.heroImage],
        },
    };
}

export default async function SpecialtyPage({ params }: Props) {
    const { slug } = await params;
    const specialty = specialtiesData.find((s) => s.slug === slug);

    if (!specialty) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <Navbar />
            </div>

            <main className="flex-grow">
                {/* 1. Specialized Hero */}
                <SpecialtyHero
                    name={specialty.name}
                    description={specialty.heroDescription}
                    image={specialty.heroImage}
                />

                {/* 2. Service Matrix (Verified Offerings) */}
                <ServiceMatrix
                    consulting={specialty.consultingServices}
                    va={specialty.vaServices}
                    billing={specialty.billingSupport}
                />

                {/* 2.5 Audit Section (Personalized Calculator) */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="material-symbols-outlined text-primary text-[16px]">analytics</span>
                            Financial Intelligence
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-trust-navy italic">
                            Quantify Your <br />
                            <span className="text-primary italic">{specialty.name} Revenue Gap.</span>
                        </h2>
                        <p className="mt-4 text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                            Most {specialty.name} practitioners lose significant clinical revenue to administrative drag. Use the calculator below to see the reclaimed potential with Virtual Minds.
                        </p>
                    </div>
                    <PracticeLeaksCalculator />
                </section>

                {/* 3. Proof Section - Why VM for this Niche? */}
                <section className="py-24 bg-[#FAF8F3] relative overflow-hidden">
                    <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                        <div className="bg-trust-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                        <span className="material-symbols-outlined text-primary text-[16px]">shield_person</span>
                                        California Compliance Shield
                                    </div>
                                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 italic">
                                        The Infrastructure <br />
                                        Your Patients Deserve.
                                    </h2>
                                    <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                                        We don't just find you a VA. We provide the <strong className="text-white">Compliance Shield</strong>, the operational templates, and the ongoing support needed to scale a boutique {specialty.name} practice.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/book-consultation" className="px-10 py-5 bg-primary text-white font-black text-lg rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20 text-center">
                                            Request Operational Audit
                                        </Link>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "BAA Protected", desc: "Full Business Associate Agreement coverage for all administrative staff." },
                                        { title: "EHR Specialists", desc: "Native expertise in SimplePractice, Elation, and AdvancedMD." },
                                        { title: "No Claim Submission", desc: "We focus on the liaison and superbills, keeping your revenue cycle clean." }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary">done_all</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                                                <p className="text-sm text-slate-400 font-medium">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Final CTA */}
                <section className="py-24 bg-white text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                            Ready to Modernize Your <br /> {specialty.name} Operations?
                        </h2>
                        <p className="text-slate-500 text-lg mb-10 font-medium">
                            Join the elite California psychiatrists who have delegated their administrative burden to Virtual Minds.
                        </p>
                        <Link href="/book-consultation" className="px-12 py-5 bg-trust-navy text-white font-black text-xl rounded-2xl hover:bg-primary transition-all shadow-xl">
                            Start Your Recovery Plan
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
