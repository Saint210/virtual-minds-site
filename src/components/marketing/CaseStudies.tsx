import Link from "next/link";

export default function CaseStudies() {
    const cases = [
        {
            title: "Private Psychiatric Group",
            location: "Los Angeles, CA",
            metric: "Clinical Focus",
            description: "Admin overhead managed while maintaining confidentiality for high-profile patients",
            timeframe: "Implementation",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoBGbhvj7k-Ll-t6u66eAB1CYEijqOgS7h-CENj3Huh-8W8QwUhXK8e7vrCOIaJgV-zQlKz_2_ltebNpPQeis0cPzpwxd26MS-ymH8LGBxlpN57xJr5Re_r2FwxQz-LKNg0vOvcDI0djaJhIT8d43MTF_c4pMFfPuIo3r87A2eo-tnTbOmmrTR_meO9SQOE8Yc9slk_5m7BLkg0yuC_9gVD1lFhjKGEWMzLwxidaWtfzHs6Gn9rg4uLcCzKfK7MMYqhMH2XlF_ZoM"
        },
        {
            title: "Concierge Mental Health",
            location: "Palo Alto, CA",
            metric: "Precise Billing",
            description: "Medi-Cal billing support with superbills and insurance company contact assistance",
            timeframe: "Onboarding",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-eDHnCFc0TAhlzjSoJqAxgqwutxhsbudk7_dmEWPUNHq_7uQ77VMWAJjRQodX5bPzydQDUCBvj-X7SIOl79nSZiPQnIZaOS2F6nYLX3dEIhiEGvHUmi2Q8A82rVkGuTjNQqaKL8hw8BLPU_1HTDdiV2RKsxRYPq8NO6hDOyOqviRNzg-Ukk51BPyxIfVFEZqYxo8H9BYIqo-pZy5SPQgdPdWQFyItgX3NgsFcCWMwxMnY-i915ZpWC3Wv1DNCj_uo4uAnw5ijcQ"
        },
        {
            title: "Adolescent Psychiatry Center",
            location: "San Diego, CA",
            metric: "Sustainable Growth",
            description: "Patient capacity increased without adding staff through operational efficiency",
            timeframe: "Review",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFjx8QBhCCRJ7bXHuLCbhGtK-09inmQnwHk3pPrc4MiINrTtDfz2WbagKzKhbrMf30Ir0dgt0o48U00IBH2-tc_biudU_w50Jm8kJWJkdVYPpVent65HO-Xrc1jFmTZ1V9_l1SWmB3aT5iWoiLOfkfAoQe1Al1vX2_88PlhiREPwiqd3pL04jHOu57yLcEThq27ABR89nF7e9eEKWj7PCgnDnzBPE9Bw3g5SRE5pdsq1NNJzlsqf4pa-V4E0bWgO_7ZvaGV5UHvk0"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-[#F8FAFC]">
            {/* Modern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/10">
                {/* Animated Elements */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                        <span className="material-symbols-outlined text-primary">stars</span>
                        <span>California Success Stories</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Real Results for California Practices
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        See how California psychiatric practices transformed their operations with specialized virtual assistants
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((caseStudy, i) => (
                        <div key={i} className="group relative">
                            {/* Glassmorphism Card */}
                            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden hover:bg-white transition-all duration-300 hover:scale-105">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url("${caseStudy.image}")` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/50 to-transparent"></div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-slate-300 rounded-full px-3 py-1">
                                        <span className="text-xs font-bold text-trust-navy">{caseStudy.timeframe}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                                        <span className="text-slate-600 text-sm">{caseStudy.location}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-trust-navy mb-3 group-hover:text-primary transition-colors">
                                        {caseStudy.title}
                                    </h3>

                                    <div className="mb-4">
                                        <p className="text-3xl font-black text-primary mb-1">{caseStudy.metric}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{caseStudy.description}</p>
                                    </div>

                                    <Link
                                        href="/book-consultation"
                                        className="inline-flex items-center gap-2 text-trust-navy font-bold text-sm hover:text-primary transition-colors group"
                                    >
                                        View Full Case Study
                                        <span className="material-symbols-outlined !text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-trust-navy mb-4">Ready for Similar Results?</h3>
                        <p className="text-slate-600 mb-6">Become one of California&apos;s thriving psychiatric practices with our specialized support</p>
                        <Link
                            href="/book-consultation"
                            className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined">calendar_today</span>
                                Get These Results
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
