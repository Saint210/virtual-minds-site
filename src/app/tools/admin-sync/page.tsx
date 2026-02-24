"use client";

import { useState } from "react";
import { syncCityMetricsAction } from "@/app/actions/syncCityMetrics";

export default function AdminSyncPage() {
    const [status, setStatus] = useState("Idle");
    const [result, setResult] = useState<any>(null);

    const handleSync = async () => {
        setStatus("Syncing...");
        const res = await syncCityMetricsAction();
        setResult(res);
        setStatus(res.success ? "Success" : "Error");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-8">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4 text-slate-800">Admin Data Sync</h1>
                <p className="text-slate-600 mb-6">
                    Sync "Black Ops" City Metrics (Codebase) to Sanity CMS (Database).
                </p>

                <button
                    onClick={handleSync}
                    disabled={status === "Syncing..."}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg disabled:opacity-50"
                >
                    {status === "Syncing..." ? "Running Sync..." : "Start Sync"}
                </button>

                {result && (
                    <div className={`mt-6 p-4 rounded-lg overflow-auto max-h-60 text-xs font-mono ${result.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        <pre>{JSON.stringify(result, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}
