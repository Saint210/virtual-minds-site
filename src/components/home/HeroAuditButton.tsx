"use client";

import Link from "next/link";

export default function HeroAuditButton() {
    return (
        <Link
            href="#calculator"
            className="mt-8 w-full py-4 bg-primary/10 border border-primary/20 text-trust-navy font-bold rounded-xl text-sm hover:bg-primary/20 transition-all flex items-center justify-center gap-2"
            onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('calculator');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }}
        >
            <span className="material-symbols-outlined text-primary text-[20px]">play_circle</span>
            Run Your Practice Economic Audit
        </Link>
    );
}
