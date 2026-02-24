interface ServiceMatrixProps {
    consulting: string[];
    va: string[];
    billing: string[];
}

export default function ServiceMatrix({ consulting, va, billing }: ServiceMatrixProps) {
    const sections = [
        {
            title: "Practice Consulting",
            icon: "clinical_notes",
            services: consulting,
            color: "bg-blue-50 text-blue-600",
        },
        {
            title: "VA Administrative Support",
            icon: "support_agent",
            services: va,
            color: "bg-primary/10 text-primary",
        },
        {
            title: "Billing & Liaison Services",
            icon: "account_balance",
            services: billing,
            color: "bg-green-50 text-green-600",
        }
    ];

    return (
        <section id="services" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-trust-navy mb-6">
                        The Operational Matrix
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        Strictly verified administrative and consulting support tailored to your subspecialty's specific regulatory and clinical needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {sections.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-[2.5rem] border border-slate-100 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`size-12 rounded-xl flex items-center justify-center ${section.color}`}>
                                    <span className="material-symbols-outlined">{section.icon}</span>
                                </div>
                                <h3 className="font-serif text-xl font-bold text-trust-navy">{section.title}</h3>
                            </div>

                            <ul className="space-y-4 flex-grow">
                                {section.services.map((service, sidx) => (
                                    <li key={sidx} className="flex items-start gap-3 group">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1 group-hover:scale-125 transition-transform">check_circle</span>
                                        <span className="text-slate-600 text-sm font-medium leading-relaxed">{service}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-8 border-t border-slate-50 italic text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
                                {idx === 2 ? "Non-Submission Support" : "Verified Protocol"}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footnote about Billing */}
                <div className="mt-16 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <span className="material-symbols-outlined text-primary">info</span>
                    <p>
                        <strong>Note on Billing:</strong> Virtual Minds does not create claims or submit billing directly. We work in tandem with your billing company to resolve issues, generate superbills, and manage patient payments.
                    </p>
                </div>
            </div>
        </section>
    );
}
