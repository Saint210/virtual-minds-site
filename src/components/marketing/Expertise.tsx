export default function Expertise() {
    const certifications = [
        {
            icon: "security",
            title: "HIPAA Compliant",
            description: "Comprehensive HIPAA training with ongoing compliance monitoring and audit-ready documentation",
            level: "Certified"
        },
        {
            icon: "verified_user",
            title: "CMIA Trained",
            description: "California-specific medical privacy law expertise for psychiatric practices",
            level: "Specialized"
        },
        {
            icon: "medical_services",
            title: "Psychiatric Workflow",
            description: "Specialized training in psychiatric terminology, procedures, and patient care coordination",
            level: "Expert"
        },
        {
            icon: "computer",
            title: "EHR Proficiency",
            description: "Expert-level knowledge of DrChrono, CharmHealth, Luminello, and other psychiatric EHR systems",
            level: "Advanced"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Practice Assessment",
            description: "Comprehensive analysis of your current workflows, EHR systems, and administrative challenges",
            duration: "Week 1"
        },
        {
            step: "02", 
            title: "Custom Matching",
            description: "We match you with a psychiatric-trained VA specialized in your practice type and EHR platform",
            duration: "Week 2"
        },
        {
            step: "03",
            title: "Integration Training",
            description: "Seamless onboarding with your team, EHR systems, and specific practice protocols",
            duration: "Week 3-4"
        },
        {
            step: "04",
            title: "Ongoing Support",
            description: "Continuous optimization, quality assurance, and California compliance updates",
            duration: "Ongoing"
        }
    ];

    const guaranteePoints = [
        {
            icon: "thumb_up",
            title: "30-Day Satisfaction Guarantee",
            description: "Full refund if you're not completely satisfied with our service quality"
        },
        {
            icon: "support_agent",
            title: "Dedicated Support Manager",
            description: "Personal account manager for immediate issue resolution"
        },
        {
            icon: "autorenew",
            title: "Flexible Month-to-Month",
            description: "No long-term contracts. Cancel anytime with 30 days notice"
        },
        {
            icon: "trending_up",
            title: "Results Promise",
            description: "Guaranteed 40% admin time reduction or we work for free until achieved"
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
                        <span className="material-symbols-outlined text-primary">workspace_premium</span>
                        <span>California Psychiatric Expertise</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Specialized Training & Certification
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Our virtual assistants undergo rigorous psychiatric-specific training and California compliance certification
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {certifications.map((cert, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="material-symbols-outlined text-3xl text-primary">
                                        {cert.icon}
                                    </span>
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                                        {cert.level}
                                    </span>
                                </div>
                                <h3 className="font-bold text-trust-navy mb-2">{cert.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
                            </div>
                            {/* Hover Glow */}
                            <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-trust-navy mb-4">Implementation Process</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Get started with a streamlined 4-week onboarding process designed for California psychiatric practices
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="group relative">
                                <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-black text-primary">{step.step}</span>
                                        <span className="bg-green-10 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-trust-navy mb-2">{step.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                                </div>
                                {/* Connector Line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Guarantee Section */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-trust-navy mb-4">Risk-Free Guarantee</h3>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We're confident in our ability to transform your practice. Our guarantees ensure you see results without risk.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {guaranteePoints.map((point, index) => (
                            <div key={index} className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl p-6 hover:bg-white transition-all duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="material-symbols-outlined text-primary text-xl">{point.icon}</span>
                                    <h4 className="font-bold text-trust-navy text-sm">{point.title}</h4>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-trust-navy mb-4">Ready to Transform Your Practice?</h3>
                        <p className="text-slate-600 mb-6">Start with a free consultation and practice assessment</p>
                        <a
                            href="/book-consultation"
                            className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined">calendar_today</span>
                                Schedule Free Assessment
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
