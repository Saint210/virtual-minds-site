import React from 'react';

interface SeoProps {
    page: {
        title: string;
        description?: string;
        slug: string;
    };
    onClose: () => void;
}

export default function SeoAnalyzer({ page, onClose }: SeoProps) {
    const titleLength = page.title.length;
    const descLength = page.description?.length || 0;

    const checks = [
        {
            label: "Title Length",
            status: titleLength >= 30 && titleLength <= 60 ? "good" : "warning",
            details: `${titleLength} chars (Recommended: 30-60)`
        },
        {
            label: "Meta Description",
            status: descLength >= 120 && descLength <= 160 ? "good" : descLength > 0 ? "warning" : "error",
            details: descLength > 0 ? `${descLength} chars (Recommended: 120-160)` : "Missing description"
        },
        {
            label: "URL Slug",
            status: /^[a-z0-9-]+$/.test(page.slug) ? "good" : "error",
            details: page.slug === page.slug.toLowerCase() ? "Clean format" : "Contains invalid characters"
        }
    ];

    const score = Math.round(checks.filter(c => c.status === 'good').length / checks.length * 100);

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex justify-end">
            <div className="w-96 bg-white h-full shadow-2xl p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-slate-900">SEO Analysis</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="mb-8 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-slate-100 mb-2 relative">
                        <span className={`text-3xl font-bold ${score === 100 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {score}
                        </span>
                        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50" cy="50" r="46"
                                fill="none"
                                stroke={score === 100 ? '#16a34a' : score >= 60 ? '#ca8a04' : '#dc2626'}
                                strokeWidth="4"
                                strokeDasharray={`${score * 2.89} 289`}
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <p className="text-slate-500 text-sm">Overall Health Score</p>
                </div>

                <div className="space-y-6">
                    {checks.map((check, i) => (
                        <div key={i} className="border-b border-slate-100 pb-4 last:border-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-slate-900">{check.label}</span>
                                <span className={`material-symbols-outlined text-sm ${check.status === 'good' ? 'text-green-500' :
                                        check.status === 'warning' ? 'text-yellow-500' : 'text-red-500'
                                    }`}>
                                    {check.status === 'good' ? 'check_circle' : check.status === 'warning' ? 'warning' : 'error'}
                                </span>
                            </div>
                            <p className="text-sm text-slate-500">{check.details}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3">Live SERP Preview</h3>
                    <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                                <img src="/favicon.ico" alt="" className="w-4 h-4 opacity-50" />
                            </div>
                            <span className="text-xs text-slate-700">virtualminds.com › {page.slug}</span>
                        </div>
                        <h4 className="text-[#1a0dab] text-lg font-medium hover:underline truncate mb-1 cursor-pointer">
                            {page.title}
                        </h4>
                        <p className="text-sm text-[#4d5156] line-clamp-2">
                            {page.description || "No meta description provided. Google will generate one from the page content."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
