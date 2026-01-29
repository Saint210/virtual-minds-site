export default function OnboardingProcess() {
    const steps = [
        {
            id: "1",
            title: "Consultation",
            description: "In-depth discovery session to audit your practice needs and California EHR workflows.",
            icon: "chat",
        },
        {
            id: "2",
            title: "Match",
            description: "Hand-picked selection from our elite psychiatric-specialized VA pool.",
            icon: "person_search",
        },
        {
            id: "3",
            title: "Integration",
            description: "Seamless setup on your EHR, billing, and communication channels.",
            icon: "settings_input_component",
        },
        {
            id: "4",
            title: "Launch",
            description: "Offload administrative burdens and start seeing more patients immediately.",
            icon: "rocket_launch",
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
                        <span className="material-symbols-outlined text-primary">route</span>
                        <span>California Onboarding Process</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Your Path to a Balanced Practice
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Our four-step onboarding process ensures you get the perfect clinical match without the administrative headache
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-primary/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center text-center group">
                                <div className="relative">
                                    {/* Glassmorphism Icon Container */}
                                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 transition-all shadow-lg group-hover:-translate-y-2 group-hover:scale-110 ${
                                        index === 3
                                            ? "bg-primary shadow-xl shadow-primary/30"
                                            : "bg-white/80 backdrop-blur-md border border-slate-200 hover:bg-white"
                                    }`}>
                                        <span className={`material-symbols-outlined text-4xl transition-colors ${
                                            index === 3 ? "text-white" : "text-primary"
                                        }`}>
                                            {step.icon}
                                        </span>
                                    </div>
                                    
                                    {/* Hover Glow Effect */}
                                    <div className="absolute -inset-2 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                
                                <div className="bg-white/60 backdrop-blur-md border border-slate-200 rounded-xl p-6 hover:bg-white transition-all duration-300">
                                    <h3 className="text-xl font-bold text-trust-navy mb-3 group-hover:text-primary transition-colors">
                                        {step.id}. {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-trust-navy mb-4">Ready to Start Your Journey?</h3>
                        <p className="text-slate-600 mb-6">Begin your transformation with our streamlined California-focused onboarding process</p>
                        <a
                            href="/book-consultation"
                            className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined">rocket_launch</span>
                                Start Your Onboarding
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
