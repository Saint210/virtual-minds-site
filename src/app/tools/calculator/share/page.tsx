import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LazyPracticeLeaksCalculator from "@/components/tools/LazyPracticeLeaksCalculator";

export const metadata = {
    title: "Embed This Calculator | Virtual Minds",
    description: "Add the Practice Leaks Calculator to your own website or blog.",
};

export default function ShareCalculatorPage() {
    const embedCode = `<iframe src="https://thevirtualminds.com/embed/calculator" width="100%" height="800" frameborder="0" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);"></iframe>\n<p style="text-align: center; font-size: 12px; color: #94a3b8; font-family: sans-serif; margin-top: 10px;">Powered by <a href="https://thevirtualminds.com" target="_blank" rel="dofollow" style="color: #D2691E; text-decoration: none; font-weight: bold;">Virtual Minds</a></p>`;

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <main className="flex-grow py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-[0.2em] text-xs block mb-4">Free Tool for Bloggers</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                            Embed This Calculator <br /> On Your Site.
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Add the "Practice Leaks" calculator to your own blog or practice website. It's free, white-labeled, and runs entirely on our servers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        {/* LEFT: The Code Snippet */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                            <h3 className="font-bold text-trust-navy mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">code</span>
                                Copy Embed Code
                            </h3>
                            <div className="bg-slate-900 rounded-xl p-4 mb-6 group relative">
                                <code className="text-slate-300 text-sm font-mono break-all whitespace-pre-wrap">
                                    {embedCode}
                                </code>
                            </div>
                            <p className="text-slate-500 text-sm mb-6">
                                Simply copy the code above and paste it into any HTML block on your WordPress, Squarespace, or Wix site.
                            </p>
                            <div className="flex gap-4">
                                <a href="mailto:support@thevirtualminds.com" className="text-sm font-bold text-trust-navy hover:text-primary">Need Help?</a>
                            </div>
                        </div>

                        {/* RIGHT: The Preview */}
                        <div>
                            <h3 className="font-bold text-trust-navy mb-4 text-center">Live Preview</h3>
                            <div className="transform scale-[0.8] origin-top border-4 border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white">
                                <LazyPracticeLeaksCalculator cityName="Private Practice" />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
