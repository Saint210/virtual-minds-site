import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            initials: "JS",
            quote:
                "Virtual Minds saved me 18 hours per week and increased my practice revenue by $85,000 annually. I finally have time to focus purely on patient care.",
            name: "Dr. Julia Smith, MD",
            title: "Board Certified Psychiatrist",
            location: "Los Angeles, CA",
            roi: "$85K annual revenue increase",
            practice: "Private Practice",
            image: "/images/avatar-sarah-chen.png"
        },
        {
            initials: "RM",
            quote:
                "The HIPAA training and EHR integration expertise is exceptional. Our billing accuracy improved from 87% to 96% in just 60 days.",
            name: "Dr. Robert Miller, DO",
            title: "Group Practice Owner (5 providers)",
            location: "San Francisco, CA",
            roi: "9% billing accuracy improvement",
            practice: "Group Practice",
            image: "/images/avatar-michael-patel.png"
        },
        {
            initials: "LC",
            quote:
                "The time saved on prior authorizations alone has allowed me to see 3 extra patients per week. That&apos;s $120K additional annual revenue.",
            name: "Dr. Linda Chen, MD",
            title: "Child & Adolescent Psychiatry",
            location: "San Diego, CA",
            roi: "$120K additional revenue",
            practice: "Telehealth Specialist",
            image: "/images/avatar-sarah-chen.png"
        },
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
                        <span className="material-symbols-outlined text-primary">verified</span>
                        <span>California Psychiatrist Reviews</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Trusted by Leading California Psychiatrists
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Hear from California psychiatric practices who&apos;ve transformed their operations with our specialized virtual assistants
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="group relative">
                            {/* Glassmorphism Card */}
                            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                                {/* Rating */}
                                <div className="flex text-primary mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="material-symbols-outlined fill-1 group-hover:scale-110 transition-transform">
                                            star
                                        </span>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote className="text-xl italic font-display leading-relaxed mb-8 text-trust-navy group-hover:text-primary transition-colors">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-bold text-primary group-hover:scale-110 transition-transform shadow-sm">
                                        {t.image ? (
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            t.initials
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-bold text-trust-navy">{t.name}</p>
                                        <p className="text-sm text-slate-600 font-medium">{t.title}</p>
                                        <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                                            <span className="material-symbols-outlined text-xs">location_on</span>
                                            <span>{t.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                                                {t.practice}
                                            </span>
                                            <span className="bg-green-10 text-green-700 text-xs font-medium px-2 py-1 rounded">
                                                {t.roi}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-trust-navy mb-4">Join These Success Stories</h3>
                        <p className="text-slate-600 mb-6">Become one of California's thriving psychiatric practices with our specialized support</p>
                        <button className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center">
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined">star</span>
                                Start Your Success Story
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
