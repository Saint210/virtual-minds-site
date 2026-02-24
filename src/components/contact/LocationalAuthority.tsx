"use client";

import { motion } from "framer-motion";
import LazyMapEmbed from "@/components/marketing/LazyMapEmbed";

export default function LocationalAuthority() {
    return (
        <section className="py-32 bg-white border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6 italic leading-tight">
                        Serving California's Clinical Leaders <br /> from Los Angeles.
                    </h2>
                    <p className="text-xl text-slate-500 italic">Our headquarters support practices from San Diego to the Bay Area.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="bg-[#FAF8F3] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 relative group"
                >
                    <div className="aspect-[21/9] relative grayscale hover:grayscale-0 transition-all duration-700">
                        <LazyMapEmbed
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3383751.5955934543!2d-119.00754000000002!3d34.08374100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f462550a12ec479%3A0x82ef737d2ad2d6d9!2sVirtual%20Minds%2C%20LLC!5e0!3m2!1sen!2sus!4v1768762142031!5m2!1sen!2sus"
                            height={500}
                            title="Virtual Minds Locational Command"
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-all" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
