import Link from "next/link";
import { locations } from "@/data/locations";

export default function ServingCaliforniaSection() {
    // Featured cities - top 8 by market size/importance
    const featuredCities = [
        'los-angeles',
        'san-francisco',
        'san-diego',
        'sacramento',
        'san-jose',
        'orange',
        'beverly-hills',
        'palo-alto'
    ];

    const featured = locations.filter(loc => featuredCities.includes(loc.slug));

    return (
        <section className="py-32 bg-white border-y border-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        Statewide Network
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-trust-navy mb-6 leading-tight">
                        Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">California</span> Psychiatrists
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Localized administrative intelligence for private practices across the Golden State. Select your region to see market-specific overhead savings.
                    </p>
                </div>

                {/* Featured Cities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {featured.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            className="group relative bg-gradient-to-br from-white via-[#FAF8F3] to-slate-50/50 p-8 rounded-[2rem] border-2 border-slate-200/60 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Savings Badge */}
                            <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                                    {location.rentSavings}
                                </span>
                            </div>

                            {/* City Icon */}
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl">location_city</span>
                            </div>

                            {/* City Name */}
                            <h3 className="text-2xl font-serif font-bold text-trust-navy mb-2 group-hover:text-primary transition-colors">
                                {location.name}
                            </h3>

                            {/* Divider */}
                            <div className="w-12 h-1 bg-slate-100 group-hover:bg-primary transition-colors duration-500 mb-4"></div>

                            {/* Description */}
                            <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow line-clamp-2">
                                {location.metaDesc.split('.')[0]}.
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-end pt-4 border-t border-slate-100">
                                <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center">
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-trust-navy hover:bg-trust-navy/90 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        <span className="material-symbols-outlined">map</span>
                        View All 50+ California Locations
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
