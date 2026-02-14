import Link from "next/link";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";

export const metadata = {
    title: "Psychiatry Revenue Calculator | Virtual Minds",
    description: "Calculate the overhead opportunity cost of your private practice.",
    robots: {
        index: false, // We don't want the embed page itself to rank, we want the PARENT page to rank
        follow: true,
    }
};

export default function EmbedCalculatorPage() {
    return (
        <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-none border-none">
                <PracticeLeaksCalculator cityName="Private Practice" />

                {/* THE SEO PAYOFF: Hardcoded Backlink */}
                <div className="text-center py-4 border-t border-slate-100 mt-0">
                    <p className="text-xs text-slate-400 font-medium">
                        Powered by <a href="https://thevirtualminds.com" target="_blank" rel="dofollow" className="text-primary hover:underline font-bold">Virtual Minds</a> • <Link href="https://thevirtualminds.com/tools/calculator/share" target="_blank" className="hover:text-trust-navy">Get This Tool</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
