"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumPageSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    bgType?: "white" | "slate" | "navy" | "cream";
    withGrid?: boolean;
}

export default function PremiumPageSection({
    children,
    className = "",
    id,
    bgType = "white",
    withGrid = false,
}: PremiumPageSectionProps) {
    const bgStyles = {
        white: "bg-white",
        slate: "bg-slate-50",
        navy: "bg-trust-navy text-white",
        cream: "bg-[#FAF8F3]",
    };

    return (
        <section
            id={id}
            className={`relative py-24 md:py-32 overflow-hidden ${bgStyles[bgType]} ${className}`}
        >
            {/* Technical Grid Background */}
            {withGrid && (
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
                </div>
            )}

            {/* Ambient Glows for Navy BG */}
            {bgType === "navy" && (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-healthcare-cyan/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
                </div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[1400px] mx-auto px-6 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}
