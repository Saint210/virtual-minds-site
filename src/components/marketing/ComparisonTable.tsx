export default function ComparisonTable() {
    const features = [
        {
            name: "Appointment & Calendar",
            generalist: "Basic Scheduling",
            specialist: "Strategic Calendar Management",
            icon: "calendar_today"
        },
        {
            name: "Billing Support",
            generalist: "Data Entry Only",
            specialist: "Superbills, Credit Card Processing & Insurance Contact",
            icon: "payments"
        },
        {
            name: "Prescription Management",
            generalist: "None",
            specialist: "Prior Authorizations",
            icon: "medication"
        },
        {
            name: "New Patient Intake",
            generalist: "Send Forms",
            specialist: "Full Onboarding & History Collection",
            icon: "person_add"
        },
        {
            name: "EHR Implementation",
            generalist: "Unfamiliar",
            specialist: "Setup & Optimization Support",
            icon: "computer"
        },
        {
            name: "Practice Consulting",
            generalist: "None",
            specialist: "Workflow & Policy Creation",
            icon: "business_center"
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
                        <span className="material-symbols-outlined text-primary">compare</span>
                        <span>California VA Comparison</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Why Specialized Psychiatric VAs Matter
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Not all virtual assistants are created equal. Discover the difference between a generalist and a Virtual Minds psychiatric specialist for California practices
                    </p>
                </div>

                {/* Desktop/Tablet View */}
                <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white/80 backdrop-blur-md mb-16 hover:bg-white transition-all duration-300">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/80 backdrop-blur-sm">
                                <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-trust-navy border-b border-slate-200">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">category</span>
                                        Feature
                                    </div>
                                </th>
                                <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-500">person</span>
                                        Generalist VA
                                    </div>
                                </th>
                                <th className="py-6 px-8 text-sm font-bold uppercase tracking-wider text-trust-navy border-b border-slate-200 bg-primary/10">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">stars</span>
                                        Virtual Minds Specialist
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {features.map((feature, index) => (
                                <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="py-6 px-8 font-semibold text-trust-navy">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                                {feature.icon}
                                            </span>
                                            {feature.name}
                                        </div>
                                    </td>
                                    <td className="py-6 px-8 text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-slate-400 text-sm">remove_circle</span>
                                            {feature.generalist}
                                        </div>
                                    </td>
                                    <td className="py-6 px-8 font-medium text-trust-navy bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">
                                                check_circle
                                            </span>
                                            {feature.specialist}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View - Stacked Cards */}
                <div className="lg:hidden space-y-6 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-trust-navy mb-4 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-primary">compare</span>
                            Feature Comparison
                        </h3>
                    </div>
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 group">
                            <div className="mb-4">
                                <h4 className="text-lg font-bold text-trust-navy mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </span>
                                    {feature.name}
                                </h4>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-slate-50/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-slate-500 text-sm">remove_circle</span>
                                        <span className="text-sm font-semibold text-slate-600">Generalist VA</span>
                                    </div>
                                    <p className="text-slate-600">{feature.generalist}</p>
                                </div>
                                <div className="bg-primary/10 rounded-xl p-4 border border-primary/20 hover:bg-primary/15 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-primary">check_circle</span>
                                        <span className="text-sm font-semibold text-trust-navy">Virtual Minds Specialist</span>
                                    </div>
                                    <p className="text-trust-navy font-medium">{feature.specialist}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center">
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-trust-navy mb-4">Ready to Upgrade Your Practice?</h3>
                        <p className="text-slate-600 mb-6">Experience the difference with California&apos;s specialized psychiatric virtual assistants</p>
                        <a
                            href="/book-consultation"
                            className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined">rocket_launch</span>
                                Book Your Psychiatric VA Consultation
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
