import Link from "next/link";
import TrackedLink from "@/components/ui/TrackedLink";

export default function BottomCTA() {
    return (
        <section className="py-20 bg-trust-navy text-white text-center relative overflow-hidden">
            {/* Background Tokens */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                    Ready to Reclaim Your Time?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Join California psychiatrists who've eliminated administrative overhead and returned to clinical excellence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <TrackedLink
                        href="/book-consultation"
                        ctaName="Bottom CTA - Book Session"
                        source="service_page_bottom"
                        className="inline-flex px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl hover:bg-primary-hover hover:scale-105 transition-all items-center gap-3 cursor-pointer"
                    >
                        <span className="material-symbols-outlined">calendar_today</span>
                        Book Your Strategy Session
                    </TrackedLink>
                    <Link href="#calculator" className="inline-flex px-10 py-5 border-2 border-slate-600 text-slate-300 font-bold text-lg rounded-2xl hover:bg-white/5 hover:border-white transition-all items-center gap-3">
                        <span className="material-symbols-outlined">calculate</span>
                        Calculate Savings
                    </Link>
                </div>
            </div>
        </section>
    );
}
