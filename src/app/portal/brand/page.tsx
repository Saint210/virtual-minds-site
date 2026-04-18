export default function BrandVoicePage() {
    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Identity & Branding</h2>
                <p className="text-slate-500 text-lg">Fine-tune the voice and clinical personality of your practice.</p>
            </div>

            <div className="bg-white rounded-[40px] p-16 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 mb-8">
                    <span className="material-symbols-outlined text-4xl">fingerprint</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Under Construction</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-8">
                    The manual brand tuning console will be available after migration is complete.
                </p>
            </div>
        </div>
    );
}
