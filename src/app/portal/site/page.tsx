export default function SiteManagementPage() {
    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">My Practice Site</h2>
                <p className="text-slate-500 text-lg">Manage domain, deployment, and live updates.</p>
            </div>

            <div className="bg-white rounded-[40px] p-16 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 mb-8">
                    <span className="material-symbols-outlined text-4xl">public</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Waiting for Deployment</h3>
                <p className="text-slate-500 max-w-sm mx-auto mb-8">
                    Once you complete the migration, you'll be able to manage your live site here.
                </p>
            </div>
        </div>
    );
}
