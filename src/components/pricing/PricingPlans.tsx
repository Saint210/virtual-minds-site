"use client";

import { motion } from "framer-motion";
import TrackedLink from "@/components/ui/TrackedLink";

interface PricingPlan {
    name: string;
    description: string;
    price: string;
    period: string;
    features: string[];
    highlight: boolean;
    cta: string;
}

interface PricingPlansProps {
    plans: PricingPlan[];
}

export default function PricingPlans({ plans }: PricingPlansProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section className="py-32 bg-white border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Investment Tiers</span>
                        <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                        <span className="relative inline-block">
                            Strategic
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary/20"></span>
                        </span>
                        {' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Pricing</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                        <strong className="text-trust-navy">Quality-focused investment</strong> designed to{' '}
                        <span className="relative inline-block text-primary font-bold">
                            return clinical focus and autonomy
                            <span className="absolute bottom-0 left-0 w-full h-2px bg-primary/30"></span>
                        </span>.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {plans.map((plan, idx) => (
                        <motion.div key={idx} variants={itemVariants} className="h-full">
                            {plan.highlight ? (
                                // FEATURED NAVY CARD
                                <div className="relative group h-full">
                                    <div className="absolute -inset-2 bg-primary/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <div className="relative p-12 rounded-[3rem] bg-trust-navy text-white shadow-2xl overflow-hidden border-2 border-primary/30 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:bg-primary/30 transition-colors"></div>

                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full blur-md opacity-60"></div>
                                                <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white text-[9px] font-bold uppercase tracking-[0.25em] px-6 py-2.5 rounded-full shadow-xl border border-white/20 flex items-center gap-2 whitespace-nowrap">
                                                    <span className="material-symbols-outlined text-sm font-bold">star</span>
                                                    <span>Strategic Choice</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-8">
                                                <h3 className="text-3xl font-serif font-bold !text-white">{plan.name}</h3>
                                                <span className="material-symbols-outlined text-5xl text-primary/30">hub</span>
                                            </div>

                                            <div className="mb-8">
                                                <p className="text-base leading-relaxed mb-6 font-medium text-slate-300">
                                                    {plan.description}
                                                </p>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-6xl font-serif font-bold text-white">{plan.price}</span>
                                                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">/{plan.period}</span>
                                                </div>
                                            </div>

                                            <ul className="space-y-4 mb-12">
                                                {plan.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3">
                                                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                                        <span className="text-base font-bold text-white">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <TrackedLink
                                            href="/book-consultation"
                                            ctaName={`Pricing Page - ${plan.cta}`}
                                            source="pricing_group_plan"
                                            className="relative z-10 w-full py-4 bg-primary hover:bg-[#B8860B] text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                                        >
                                            {plan.cta}
                                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                        </TrackedLink>
                                    </div>
                                </div>
                            ) : (
                                // STANDARD GLASS CARDS
                                <div className="group p-12 bg-white/50 backdrop-blur-md rounded-[3rem] border border-slate-200 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between hover:-translate-y-2 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full blur-[60px] -mr-10 -mt-10 pointer-events-none group-hover:bg-primary/5 transition-colors"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-2xl font-serif font-bold text-trust-navy">{plan.name}</h3>
                                            <span className="material-symbols-outlined text-5xl text-slate-300 group-hover:text-primary/40 transition-colors">
                                                {idx === 0 ? 'foundation' : 'business_center'}
                                            </span>
                                        </div>

                                        <div className="mb-8">
                                            <p className="text-base leading-relaxed mb-6 font-medium text-slate-600">
                                                {plan.description}
                                            </p>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-6xl font-serif font-bold text-trust-navy">{plan.price}</span>
                                                <span className="text-sm font-black uppercase tracking-widest text-slate-400">/{plan.period}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-12">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                                    <span className="text-base font-bold text-slate-600">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <TrackedLink
                                        href="/book-consultation"
                                        ctaName={`Pricing Page - ${plan.cta}`}
                                        source={idx === 0 ? "pricing_solo_plan" : "pricing_custom_plan"}
                                        className="relative z-10 w-full py-4 bg-white border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm flex items-center justify-center gap-2 group/btn"
                                    >
                                        {plan.cta}
                                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </TrackedLink>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
