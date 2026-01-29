import Link from "next/link";

export default function GrowthStore() {
    const categories = [
        {
            title: "Engagement Modules", items: [
                { id: 'ca1', name: 'ROI & Savings Calculator', price: '$1,500', icon: 'calculate', desc: 'Embeddable calculator that traps patient admin leakage leads.' },
                { id: 'ca2', name: 'ADHD Self-Assessment', price: '$1,200', icon: 'psychology', desc: 'Interactive screening tool that funnels directly into booking.' },
            ]
        },
        {
            title: "SEO Expansion Packs", items: [
                { id: 'seo1', name: '20-City pSEO Grid', price: '$2,500', icon: 'map', desc: 'Generate high-ranking pages for every major city in California.' },
                { id: 'seo2', name: 'Specialty Silo: Depression', price: '$1,000', icon: 'psychiatry', desc: 'Deep content silo targeting treatment-resistant depression keywords.' },
            ]
        },
        {
            title: "Admin Integrations", items: [
                { id: 'adm1', name: 'HIPAA Chat Integration', price: '$500', icon: 'forum', desc: 'Connect your site directly to your HIPAA-compliant EHR inbox.' },
                { id: 'adm2', name: 'Self-Serve Intake Form', price: '$800', icon: 'assignment', desc: 'Automated intake logic that screens patients before you see them.' },
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Growth Store</h2>
                    <p className="text-lg text-slate-500">Enable advanced modules to scale your practice infrastructure.</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-400">CREDITS AVAILABLE</span>
                    <span className="text-xl font-black text-slate-900">0.00</span>
                    <button className="text-[#D2691E] font-bold text-sm hover:underline">+ Top Up</button>
                </div>
            </div>

            <div className="space-y-16">
                {categories.map((cat) => (
                    <div key={cat.title}>
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-4">
                            {cat.title}
                            <div className="flex-grow h-px bg-slate-100"></div>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {cat.items.map((item) => (
                                <div key={item.id} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#D2691E]/20 transition-all group flex gap-8">
                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl shrink-0 flex items-center justify-center text-slate-400 group-hover:bg-[#FAF8F3] group-hover:text-[#D2691E] transition-all">
                                        <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold text-slate-900">{item.name}</h4>
                                            <span className="font-black text-slate-900">{item.price}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                                        <button className="w-full py-3 bg-slate-50 text-slate-700 font-bold rounded-xl text-sm group-hover:bg-[#D2691E] group-hover:text-white transition-all">
                                            Activate Module
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
