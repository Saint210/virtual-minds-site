import Link from "next/link";
import { locations } from "@/data/locations";

interface NearbyCitiesWidgetProps {
    currentCitySlug: string;
}

// Define nearby cities relationships
const nearbyCitiesMap: Record<string, string[]> = {
    'los-angeles': ['beverly-hills', 'santa-monica', 'pasadena', 'glendale'],
    'beverly-hills': ['los-angeles', 'santa-monica', 'west-hollywood'],
    'santa-monica': ['los-angeles', 'beverly-hills', 'marina-del-rey'],
    'san-francisco': ['palo-alto', 'oakland', 'san-jose', 'berkeley'],
    'palo-alto': ['san-francisco', 'sunnyvale', 'san-jose'],
    'san-diego': ['la-jolla', 'del-mar', 'carlsbad', 'oceanside'],
    'la-jolla': ['san-diego', 'del-mar', 'carlsbad'],
    'del-mar': ['la-jolla', 'san-diego', 'carlsbad'],
    'sacramento': ['elk-grove', 'roseville', 'davis'],
    'san-jose': ['palo-alto', 'sunnyvale', 'san-francisco', 'fremont'],
    'orange': ['irvine', 'anaheim', 'santa-ana', 'fullerton'],
    'irvine': ['newport-beach', 'orange', 'costa-mesa'],
    'newport-beach': ['irvine', 'costa-mesa', 'huntington-beach'],
    'oakland': ['san-francisco', 'berkeley', 'alameda'],
    'pasadena': ['los-angeles', 'glendale', 'burbank'],
    'long-beach': ['los-angeles', 'torrance', 'carson'],
    'riverside': ['corona', 'moreno-valley', 'san-bernardino'],
    'bakersfield': ['delano', 'shafter', 'tehachapi'],
    'fresno': ['clovis', 'madera', 'visalia'],
    'santa-barbara': ['goleta', 'carpinteria', 'montecito'],
    'carlsbad': ['oceanside', 'encinitas', 'san-diego'],
    'oceanside': ['carlsbad', 'vista', 'san-diego'],
};

export default function NearbyCitiesWidget({ currentCitySlug }: NearbyCitiesWidgetProps) {
    const nearbySlugs = nearbyCitiesMap[currentCitySlug] || [];

    // Get location data for nearby cities
    const nearbyCities = locations.filter(loc => nearbySlugs.includes(loc.slug)).slice(0, 4);

    if (nearbyCities.length === 0) {
        return null;
    }

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">
                        Regional Network
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy mb-4">
                        Nearby <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Service Areas</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We provide specialized administrative support across California's major metropolitan areas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {nearbyCities.map((location) => (
                        <Link
                            key={location.slug}
                            href={`/locations/${location.slug}`}
                            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Location Icon */}
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">location_on</span>
                            </div>

                            {/* City Name */}
                            <h3 className="text-xl font-serif font-bold text-trust-navy mb-2 group-hover:text-primary transition-colors">
                                {location.name}
                            </h3>

                            {/* Savings */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl font-bold text-primary">{location.rentSavings}</span>
                                <span className="text-xs text-slate-500 uppercase tracking-wider">Avg. Savings</span>
                            </div>

                            {/* Rent Info */}
                            <p className="text-sm text-slate-500 mb-4">
                                Office rent: <span className="font-bold text-trust-navy">{location.rentAvg}</span>
                            </p>

                            {/* Arrow */}
                            <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                                View Details
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-12">
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-2 text-trust-navy hover:text-primary font-bold transition-colors"
                    >
                        <span className="material-symbols-outlined">map</span>
                        View All California Locations
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
