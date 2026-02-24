"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const specialties = [
    { name: "Neuropsychiatry", slug: "neuropsychiatry", preview: "Neurological testing & specialized assessments", icon: "neurology" },
    { name: "Child & Adolescent", slug: "child-adolescent-psychiatry", preview: "School coordination & family communication", icon: "child_care" },
    { name: "Women's Mental Health", slug: "womens-mental-health", preview: "Reproductive psychiatry & perinatal care", icon: "female" },
    { name: "Integrative Psychiatry", slug: "integrative-psychiatry", preview: "Functional labs & holistic coordination", icon: "science" },
    { name: "Sleep Medicine", slug: "sleep-medicine", preview: "Sleep study coordination & scheduling", icon: "bedtime" },
    { name: "ADHD & Executive Function", slug: "adhd-neuropsychiatry", preview: "Prior authorizations & testing coordination", icon: "psychology" },
    { name: "OCD & Anxiety Disorders", slug: "ocd-anxiety-disorders", preview: "ERP protocols & intensive treatment support", icon: "waves" },
    { name: "Eating Disorders", slug: "eating-disorders", preview: "Multidisciplinary team coordination", icon: "restaurant_menu" },
    { name: "Consult-Liaison", slug: "consult-liaison", preview: "Hospital consultation & medical team liaison", icon: "medical_services" }
];

export default function WhoWeServeSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block"
                    >
                        We Know Your Specialty
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-serif text-4xl md:text-5xl text-trust-navy mb-6"
                    >
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Complex Care</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xl text-slate-600 leading-relaxed font-light"
                    >
                        Every subspecialty has different scheduling, billing, and compliance demands. We've seen them all.
                    </motion.p>
                </div>

                {/* Specialties Grid - Clinical Precision Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {specialties.map((spec) => (
                        <motion.div key={spec.slug} variants={item}>
                            <Link
                                href={`/specialties/${spec.slug}`}
                                className="group relative bg-white h-full rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-trust-navy transition-all duration-300 flex flex-col gap-4 overflow-hidden cursor-pointer"
                            >
                                {/* Hover Beam Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/0 via-trust-navy/0 to-trust-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-start justify-between relative z-10 w-full">
                                    {/* Icon badge */}
                                    <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-trust-navy group-hover:border-trust-navy flex items-center justify-center transition-all duration-300 shadow-sm">
                                        <span className="material-symbols-outlined text-trust-navy group-hover:text-white text-3xl transition-colors duration-300">{spec.icon}</span>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                                        <span className="text-xs font-bold text-trust-navy uppercase tracking-wider">Explore</span>
                                        <span className="material-symbols-outlined text-trust-navy text-sm">arrow_forward</span>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-2">
                                    <h3 className="font-serif text-xl font-bold text-trust-navy group-hover:text-primary transition-colors mb-2">{spec.name}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                                        {spec.preview}
                                    </p>
                                </div>

                                {/* Bottom Border Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
