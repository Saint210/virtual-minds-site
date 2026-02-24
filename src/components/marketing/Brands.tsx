export default function Brands() {
    const locations = [
        {
            name: "DOWNTOWN LA",
            specialty: "Addiction & Women's Reproductive Mental Health",
            image: "/luxury_psychiatry_office_interior_1.png",
            alt: "addiction-and-womens-reproductive-mental-health-treatments-downtown-la"
        },
        {
            name: "SANTA MONICA",
            specialty: "Depression & Anxiety Treatment",
            image: "/modern_medical_reception_california_2.png",
            alt: "depression-and-anxiety-treatment-santa-monica"
        },
        {
            name: "HERMOSA BEACH",
            specialty: "Mental Health Treatments",
            image: "/professional_consultation_room_3.png",
            alt: "mental-health-treatments-hermosa-beach"
        },
        {
            name: "MARINA DEL REY",
            specialty: "Mood Disorders & ADHD Treatment",
            image: "/luxury_psychiatry_office_interior_1.png",
            alt: "mood-disorders-and-adhd-treatment-marina-del-rey"
        },
        {
            name: "ECHO PARK",
            specialty: "Psychiatric Services",
            image: "/modern_medical_reception_california_2.png",
            alt: "Echo Park Los Angeles psychiatric services"
        },
        {
            name: "SANTA BARBARA",
            specialty: "Coastal Mental Health",
            image: "/professional_consultation_room_3.png",
            alt: "santa-barbara-at-dusk coastal mental health"
        },
        {
            name: "PALO ALTO",
            specialty: "Silicon Valley Psychiatry",
            image: "/luxury_psychiatry_office_interior_1.png",
            alt: "silicon valley psychiatry services palo alto"
        },
        {
            name: "MIRACLE MILE",
            specialty: "Urban Mental Health",
            image: "/modern_medical_reception_california_2.png",
            alt: "urban mental health services miracle mile los angeles"
        },
        {
            name: "SAN FRANCISCO",
            specialty: "Bay Area Psychiatry",
            image: "/professional_consultation_room_3.png",
            alt: "bay area psychiatry services san francisco"
        },
        {
            name: "DEL MAR",
            specialty: "Coastal Mental Wellness",
            image: "/luxury_psychiatry_office_interior_1.png",
            alt: "coastal mental wellness services del mar california"
        },
        {
            name: "LA JOLLA",
            specialty: "Be City Psychiatry",
            image: "/modern_medical_reception_california_2.png",
            alt: "be city psychiatry services la jolla california"
        },
        {
            name: "ORANGE COUNTY",
            specialty: "Community Mental Health",
            image: "/professional_consultation_room_3.png",
            alt: "community mental health services orange county california"
        }
    ];

    return (
        <section className="relative py-16 overflow-hidden bg-[#F8FAFC]">
            {/* Modern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/5">
                {/* Animated Elements */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        <span>Serving Psychiatrists in These Locations</span>
                    </div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
                        Trusted by California&apos;s Leading Psychiatric Practices Across Major Cities
                    </p>
                </div>

                {/* SEO-Optimized Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8 justify-items-center">
                    {locations.map((location) => (
                        <div
                            key={location.name}
                            className="group relative w-full max-w-[200px]"
                        >
                            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl overflow-hidden hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg w-full">
                                {/* SEO-Optimized Image */}
                                <div className="aspect-[4/3] w-full overflow-hidden relative">
                                    <img
                                        src={location.image}
                                        alt={location.alt}
                                        title={`${location.name} - ${location.specialty}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        width="400"
                                        height="300"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4">
                                    <span className="text-lg md:text-xl font-white tracking-tight text-center block font-bold">
                                        {location.name}
                                    </span>
                                    <span className="text-xs text-white/95 text-center block leading-relaxed">
                                        {location.specialty}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-1 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
