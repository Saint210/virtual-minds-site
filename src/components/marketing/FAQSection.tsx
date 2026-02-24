"use client";

import { useState } from "react";

export default function FAQSection() {
    const faqs = [
        {
            question: "How do I calculate the ROI of a specialized VA?",
            answer: "A specialized VA typically saves a practitioner 15+ hours per week on scheduling and billing. For most California psychiatrists, this allows for 5-8 additional patient slots per week, resulting in a 4x to 6x return on investment based on average billing rates.",
        },
        {
            question: "How do you handle HIPAA compliance and security?",
            answer: "Every VA undergoes rigorous HIPAA training and certification. We sign Business Associate Agreements (BAA) and provide managed, encrypted devices with strict access controls to ensure your patient data never leaves a secure environment.",
        },
        {
            question: "Can a VA really help prevent practitioner burnout?",
            answer: "Burnout is rarely caused by clinical work; it's caused by 'pajama time'—the hours spent documenting and billing after clinic hours. By offloading these tasks to a VA, practitioners report higher job satisfaction and more quality time with family.",
        },
        {
            question: "Are your VAs familiar with California's telehealth laws?",
            answer: "Yes. All our VAs are trained on California's Telehealth Act and understand telehealth parity requirements, reimbursement rules, and cross-state licensing considerations.",
        },
        {
            question: "Do you support California's Mental Health Parity Act compliance?",
            answer: "Absolutely. We help practices navigate MHPA requirements for insurance parity, documentation standards, and appeal processes for mental health services.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative py-20 overflow-hidden bg-[#F8FAFC]">
            {/* Modern Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary/10">
                {/* Animated Elements */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative z-10 max-w-[900px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full px-4 py-2 text-trust-navy text-sm font-medium mb-6">
                        <span className="material-symbols-outlined text-primary">help</span>
                        <span>California FAQ</span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy mb-6">
                        Questions on Growth & Recovery
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Focused on your ROI, security, and well-being with California-specific expertise
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:bg-white transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-slate-50/50 transition-colors group"
                            >
                                <span className="text-lg font-bold text-trust-navy group-hover:text-primary transition-colors flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                        {openIndex === index ? "help" : "question_mark"}
                                    </span>
                                    {faq.question}
                                </span>
                                <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                                    openIndex === index ? "rotate-45" : ""
                                }`}>
                                    add
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    openIndex === index 
                                        ? "max-h-[500px] opacity-100" 
                                        : "max-h-0 opacity-0 overflow-hidden"
                                }`}
                            >
                                <div className="px-8 py-6 border-t border-slate-200 bg-slate-50/50 text-slate-600 leading-relaxed text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                            
                            {/* Hover Glow Effect */}
                            <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Enhanced CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
                        <h3 className="text-2xl font-bold text-trust-navy mb-4">Still Have Questions?</h3>
                        <p className="text-slate-600 mb-6">Get answers from our California psychiatric VA specialists</p>
                        <a
                            href="/book-consultation"
                            className="group relative overflow-hidden bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-black/20 inline-flex items-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="material-symbols-outlined">support_agent</span>
                                Talk to an Expert
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
