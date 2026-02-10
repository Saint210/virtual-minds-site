import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import specialtiesData from "@/data/specialties.json";

export const metadata: Metadata = {
    title: "Psychiatric Specialties We Support | Virtual Minds",
    description: "Specialized administrative support for all psychiatric subspecialties in California. From neuropsychiatry to eating disorders, we provide tailored practice management solutions.",
};

export default function SpecialtiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <Navbar />
            </div>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Specialties" }
                ]}
            />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-12 pb-16 bg-[#FAF8F3] overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
                                Executive Specialization
                            </div>

                            <h1 className="font-serif text-4xl md:text-6xl font-bold text-trust-navy mb-6 leading-tight">
                                Specialized Support for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Every Psychiatric Subspecialty</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                We provide tailored administrative infrastructure for California psychiatrists across all subspecialties. Select your specialty to see how we support your unique practice needs.
                            </p>
                        </div>

                        {/* Specialties Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {specialtiesData.map((specialty) => (
                                <Link
                                    key={specialty.slug}
                                    href={`/specialties/${specialty.slug}`}
                                    className="group relative bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm mb-4">
                                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent group-hover:shadow-lg group-hover:shadow-primary/50 transition-all" />
                                        </div>

                                        {/* Title */}
                                        <h2 className="font-serif text-2xl font-bold text-trust-navy group-hover:text-primary transition-colors mb-3">
                                            {specialty.name}
                                        </h2>

                                        {/* Description */}
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                            {specialty.heroDescription}
                                        </p>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <span>View specialty details</span>
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                            Don't See Your Specialty?
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We work with psychiatrists across all subspecialties. If you practice in a niche area not listed above, we'd love to discuss how we can support your unique needs.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]"
                        >
                            <span className="material-symbols-outlined">calendar_today</span>
                            Schedule a Consultation
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
