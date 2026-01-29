"use client";

import { submitConsultation, ActionState } from "@/server/actions/consultation";
import { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const INITIAL_STATE: ActionState = {
    success: false,
    message: "",
    errors: {},
};

export default function ConsultationForm() {
    const [state, formAction, isPending] = useActionState(submitConsultation, INITIAL_STATE);
    const [selectedPracticeSize, setSelectedPracticeSize] = useState("");
    const router = useRouter();

    // Redirect to thank-you page on success
    useEffect(() => {
        if (state.success) {
            router.push("/thank-you");
        }
    }, [state.success, router]);

    // Helper for controlled buttons (hidden input)
    const handleSizeSelect = (size: string) => {
        setSelectedPracticeSize(size);
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 h-fit relative overflow-hidden transition-all duration-500 ease-in-out">

            <h2 className="text-2xl font-bold mb-6 text-trust-navy font-display">Book Your Strategy Call</h2>
            <form action={formAction} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
                        <input
                            id="fullName"
                            name="fullName"
                            className={`w-full h-11 px-4 rounded-lg bg-slate-50 border ${state.errors?.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary'} focus:ring-2 focus:border-transparent text-sm text-trust-navy transition-all`}
                            placeholder="Dr. Sarah Johnson"
                            type="text"
                            defaultValue=""
                        />
                        {state.errors?.fullName && <span className="text-xs text-red-500 font-medium">{state.errors.fullName[0]}</span>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase">Practice Email</label>
                        <input
                            id="email"
                            name="email"
                            className={`w-full h-11 px-4 rounded-lg bg-slate-50 border ${state.errors?.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary'} focus:ring-2 focus:border-transparent text-sm text-trust-navy transition-all`}
                            placeholder="sarah@psychiatry.com"
                            type="email"
                            defaultValue=""
                        />
                        {state.errors?.email && <span className="text-xs text-red-500 font-medium">{state.errors.email[0]}</span>}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="ehrPlatform" className="text-xs font-bold text-slate-400 uppercase">Primary EHR Platform</label>
                    <select
                        id="ehrPlatform"
                        name="ehrPlatform"
                        className={`w-full h-11 px-4 rounded-lg bg-slate-50 border ${state.errors?.ehrPlatform ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-primary'} focus:ring-2 focus:border-transparent text-sm text-trust-navy transition-all`}
                        defaultValue=""
                    >
                        <option value="" disabled>Select your EHR</option>
                        <option value="athena">Athenahealth</option>
                        <option value="charm">Charm Health</option>
                        <option value="drchrono">DrChrono</option>
                        <option value="elation">Elation Health</option>
                        <option value="kareo">Kareo</option>
                        <option value="luminello">Luminello</option>
                        <option value="simplepractice">SimplePractice</option>
                        <option value="other">Other / Custom</option>
                    </select>
                    {state.errors?.ehrPlatform && <span className="text-xs text-red-500 font-medium">{state.errors.ehrPlatform[0]}</span>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-slate-400 uppercase">Practice Size (Providers)</label>
                    <input type="hidden" name="practiceSize" value={selectedPracticeSize} />
                    <div className="grid grid-cols-3 gap-2">
                        {['1 - 5', '6 - 15', '15+'].map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => handleSizeSelect(size)}
                                className={`h-10 border rounded-lg text-sm font-medium transition-colors ${selectedPracticeSize === size
                                    ? 'bg-primary text-white border-primary shadow-md'
                                    : 'border-slate-200 bg-white text-trust-navy hover:bg-primary/5'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="painPoint" className="text-xs font-bold text-slate-400 uppercase">Primary Pain Point</label>
                    <textarea
                        id="painPoint"
                        name="painPoint"
                        className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent text-sm resize-none text-trust-navy transition-all"
                        placeholder="What is your biggest administrative hurdle?"
                        rows={3}
                    ></textarea>
                </div>

                <button
                    disabled={isPending}
                    className="w-full h-12 mt-4 bg-primary text-white font-black uppercase tracking-wider rounded-lg hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    type="submit"
                >
                    {isPending ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Processing...</span>
                        </>
                    ) : (
                        <span>Book Strategy Call</span>
                    )}
                </button>

                <p className="text-center text-[10px] text-slate-400 mt-2">
                    By clicking "Book Strategy Call", you agree to our Terms of Service. Your data is protected by industry-standard encryption.
                </p>
            </form>
        </div>
    );
}
