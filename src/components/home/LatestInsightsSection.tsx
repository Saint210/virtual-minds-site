"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
    {
        title: "How to Choose a California Psychiatric Virtual Assistant",
        slug: "how-to-choose-california-psychiatric-virtual-assistant",
        category: "Operations",
        image: "/images/operational-process-review-mental-health.jpg",
        description: "A comprehensive guide to selecting the right psychiatric virtual assistant for your California practice."
    },
    {
        title: "How to Scale Your Private Psychiatry Practice",
        slug: "how-to-scale-private-psychiatry-practice",
        category: "Growth Strategy",
        image: "/images/how-to-scale-psychiatry-practice.jpg",
        description: "Strategic frameworks for sustainable growth without compromising clinical quality."
    },
    {
        title: "Psychiatrist Salary in California Private Practice",
        slug: "psychiatrist-salary-california-private-practice",
        category: "Financial Intelligence",
        image: "/images/psychiatrist-salary-california.jpg",
        description: "Comprehensive analysis of earning potential and financial optimization strategies."
    }
];

export default function LatestInsightsSection() {
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
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block"
                    >
                        Industry Insights
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl text-trust-navy mb-6"
                    >
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Expert Guidance</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto"
                    >
                        Strategic insights for California psychiatric practices
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-3 gap-8 mb-12"
                >
                    {blogPosts.map((post) => (
                        <motion.div key={post.slug} variants={item}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-trust-navy transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                                        <span className="text-[10px] font-bold text-trust-navy uppercase tracking-widest">{post.category}</span>
                                    </div>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-trust-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="p-8 flex flex-col h-full">
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors flex-grow leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed text-sm line-clamp-2">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-trust-navy font-bold text-xs uppercase tracking-wider group-hover:text-primary transition-colors mt-auto border-t border-slate-100 pt-6">
                                        Read Analysis <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link href="/blog" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                        View All Articles <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
