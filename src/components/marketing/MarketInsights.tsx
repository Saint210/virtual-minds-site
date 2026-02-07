export default function MarketInsights() {
    const marketData = [
        {
            icon: "trending_up",
            value: "28.1%",
            label: "Annual Market Growth",
            description: "Medical VA market expanding rapidly"
        },
        {
            icon: "people",
            value: "7,797",
            label: "California Psychiatrists",
            description: "Active practitioners in 2025"
        },
        {
            icon: "payments",
            value: "$311M",
            label: "Total Market Size",
            description: "California psychiatric VA market"
        },
        {
            icon: "psychology",
            value: "8.2%",
            label: "Healthcare Spending",
            description: "Behavioral health share in CA"
        }
    ];

    const trends = [
        {
            title: "Telehealth Expansion",
            description: "Telehealth market growing at 24.68% CAGR through 2030",
            icon: "video_call",
            color: "text-blue-600"
        },
        {
            title: "HIPAA Compliance Priority",
            description: "Increasing demand for certified compliant virtual staff",
            icon: "security",
            color: "text-green-600"
        },
        {
            title: "Psychiatric Specialization",
            description: "Rising need for mental health-specific expertise",
            icon: "psychology",
            color: "text-purple-600"
        },
        {
            title: "California Market Focus",
            description: "State-specific compliance requirements driving demand",
            icon: "location_on",
            color: "text-orange-600"
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-[#FAF8F3]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                        <span className="material-symbols-outlined text-primary">insights</span>
                        <span>California Market Intelligence</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Why California Psychiatrists Choose Virtual Assistants
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        The California psychiatric virtual assistant market is experiencing unprecedented growth.
                        With 7,797 active psychiatrists and expanding telehealth adoption, the timing has never been better to optimize your practice.
                    </p>
                </div>

                {/* Market Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {marketData.map((item, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="material-symbols-outlined text-3xl text-primary">
                                        {item.icon}
                                    </span>
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-trust-navy mb-2">
                                    {item.value}
                                </div>
                                <div className="font-bold text-trust-navy mb-1">
                                    {item.label}
                                </div>
                                <div className="text-sm text-slate-600">
                                    {item.description}
                                </div>
                            </div>
                            {/* Hover Glow */}
                            <div className="absolute -inset-1 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Market Trends Section */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-trust-navy mb-8 text-center">
                        Key Market Trends Driving Growth
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {trends.map((trend, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-50 to-primary/5 border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl bg-white shadow-sm ${trend.color}`}>
                                        <span className="material-symbols-outlined text-2xl">
                                            {trend.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-trust-navy mb-2">
                                            {trend.title}
                                        </h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {trend.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Opportunity Section */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-trust-navy mb-6">
                                Your Practice Opportunity
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-slate-700">Significant reduction in administrative time</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-slate-700">Precise billing support coordination</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-slate-700">Sustainable increase in patient capacity</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span className="text-slate-700">Full HIPAA compliance guaranteed</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center border border-slate-200">
                            <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                                Maximum
                            </div>
                            <div className="font-bold text-trust-navy mb-1">
                                Operational Efficiency
                            </div>
                            <div className="text-sm text-slate-600 mb-4">
                                Based on California practice standards
                            </div>
                            <a
                                href="/roi-calculator"
                                className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">calculate</span>
                                Calculate Your ROI
                            </a>
                        </div>
                    </div>
                </div>

                {/* Competitive Advantage */}
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-trust-navy mb-8">
                        The Virtual Minds Advantage
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                            <span className="material-symbols-outlined text-3xl text-primary mb-4">psychology</span>
                            <h4 className="font-bold text-trust-navy mb-2">Psychiatric Specialization</h4>
                            <p className="text-slate-600 text-sm">
                                Unlike general medical VAs, our assistants are trained specifically for psychiatric workflows, terminology, and patient care coordination.
                            </p>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                            <span className="material-symbols-outlined text-3xl text-primary mb-4">location_on</span>
                            <h4 className="font-bold text-trust-navy mb-2">California Expertise</h4>
                            <p className="text-slate-600 text-sm">
                                Deep understanding of California-specific compliance, regulations, and mental health market dynamics.
                            </p>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                            <span className="material-symbols-outlined text-3xl text-primary mb-4">security</span>
                            <h4 className="font-bold text-trust-navy mb-2">HIPAA Excellence</h4>
                            <p className="text-slate-600 text-sm">
                                Comprehensive HIPAA training and certification with ongoing compliance monitoring and audit-ready documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
