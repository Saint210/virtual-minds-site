import Link from "next/link";
import Image from "next/image";
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-16">
                    {featured.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-trust-navy transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Cinematic Image Header */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors z-10" />
                                <Image
                                    src={location.heroImage}
                                    alt={location.heroImageAlt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                {/* Location Badge Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                                    <h3 className="text-xl font-serif font-bold text-white shadow-sm">
                                        {location.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Key Metric */}
                                <div className="flex items-center gap-2 mb-4 text-xs font-bold text-primary uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-sm">trending_up</span>
                                    save ~{location.rentSavings}
                                </div>

                                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium line-clamp-3 flex-grow">
                                    {location.metaDesc}
                                </p>

                                {/* Footer */}
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto group/btn">
                                    <span className="text-xs font-bold text-trust-navy uppercase tracking-wider group-hover:text-primary transition-colors">Market Analysis</span>
                                    <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-trust-navy group-hover:bg-trust-navy group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center">
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-trust-navy hover:bg-slate-800 text-white font-bold text-lg rounded-xl shadow-xl shadow-trust-navy/20 hover:-translate-y-1 transition-all"
                    >
                        <span className="material-symbols-outlined">map</span>
                        View All 50+ California Locations
                    </Link>
                </div>
            </div>
        </section>
    );
}
