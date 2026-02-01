"use client";

import { useState } from "react";

// Step Types - REDESIGNED V3
type Step = "MODEL" | "CHALLENGE" | "STAFFING" | "TIME_DRAIN" | "TECH" | "DIGITAL" | "BOOKING";

interface WizardState {
    practiceModel: string;
    challenge: string;
    staffing: string;
    timeDrain: string;
    ehr: string;
    digital: string;
}

export default function PracticeAuditWizard() {
    const [step, setStep] = useState<Step>("MODEL");
    const [data, setData] = useState<WizardState>({
        practiceModel: "",
        challenge: "",
        staffing: "",
        timeDrain: "",
        ehr: "",
        digital: ""
    });


    // Step 1: Model
    const models = [
        { id: "solo_launch", label: "Solo (Launching)", icon: "rocket_launch", size: "1 - 5" },
        { id: "solo_est", label: "Solo (Established)", icon: "psychology", size: "1 - 5" },
        { id: "group", label: "Group Practice", icon: "groups", size: "6 - 15" },
        { id: "enterprise", label: "Clinical Enterprise", icon: "corporate_fare", size: "15+" }
    ];

    // Step 2: Primary Challenge (Enhanced)
    const challenges = [
        { id: "intake", label: "Intake & Scheduling", icon: "calendar_month" },
        { id: "billing", label: "Billing / Insurance Claims", icon: "receipt_long" },
        { id: "clinical", label: "Clinical Admin (Refills/Renewals)", icon: "medication" },
        { id: "prior_auth", label: "Prior Authorizations", icon: "approval" },
        { id: "no_shows", label: "Patient No-Shows", icon: "event_busy" },
        { id: "documentation", label: "Documentation Backlog", icon: "description" },
        { id: "staffing", label: "Staffing / Reliability", icon: "person_off" }
    ];

    // Step 3: Current Staffing (NEW)
    const staffingOptions = [
        { id: "none", label: "No admin staff (doing it all myself)", icon: "person" },
        { id: "part_time", label: "Part-time admin (in-office)", icon: "schedule" },
        { id: "full_time", label: "Full-time admin (in-office)", icon: "badge" },
        { id: "virtual", label: "Already using virtual assistants", icon: "cloud" },
        { id: "mix", label: "Mix of in-office and virtual", icon: "groups" }
    ];

    // Step 4: Biggest Time Drain (NEW)
    const timeDrains = [
        { id: "insurance", label: "Insurance billing and follow-ups", icon: "payments" },
        { id: "scheduling", label: "Patient scheduling and reminders", icon: "event" },
        { id: "refills", label: "Prescription refills and renewals", icon: "medication_liquid" },
        { id: "charting", label: "Documentation and charting", icon: "edit_note" },
        { id: "communication", label: "Phone calls and patient communication", icon: "call" }
    ];

    // Step 5: Tech
    const ehrs = [
        { id: "simplepractice", label: "SimplePractice" },
        { id: "drchrono", label: "DrChrono" },
        { id: "kareo", label: "Kareo / Tebra" },
        { id: "athena", label: "Athenahealth" },
        { id: "charm", label: "Charm Health" },
        { id: "other", label: "Other / Paper" }
    ];

    // Step 6: Digital Presence
    const digitalStates = [
        { id: "none", label: "Referrals Only (No Website)", icon: "campaign" },
        { id: "directory", label: "Psychology Today Only", icon: "contact_page" },
        { id: "needs_update", label: "Have Website (Needs Update)", icon: "web_asset_off" },
        { id: "strong", label: "Strong Digital Presence", icon: "language" }
    ];

    const handleNext = (key: keyof WizardState, value: string) => {
        setData(prev => ({ ...prev, [key]: value }));

        // Progression Logic - 6 Questions
        if (step === "MODEL") setStep("CHALLENGE");
        else if (step === "CHALLENGE") setStep("STAFFING");
        else if (step === "STAFFING") setStep("TIME_DRAIN");
        else if (step === "TIME_DRAIN") setStep("TECH");
        else if (step === "TECH") setStep("DIGITAL");
        else if (step === "DIGITAL") {
            // After all questions, show calendar
            setStep("BOOKING");
        }
    };

    const handleBack = () => {
        if (step === "CHALLENGE") setStep("MODEL");
        else if (step === "STAFFING") setStep("CHALLENGE");
        else if (step === "TIME_DRAIN") setStep("STAFFING");
        else if (step === "TECH") setStep("TIME_DRAIN");
        else if (step === "DIGITAL") setStep("TECH");
    };



    // Helper to calculate progress width (6 questions)
    const getProgress = () => {
        switch (step) {
            case "MODEL": return "w-[16.66%]";
            case "CHALLENGE": return "w-[33.33%]";
            case "STAFFING": return "w-[50%]";
            case "TIME_DRAIN": return "w-[66.66%]";
            case "TECH": return "w-[83.33%]";
            case "DIGITAL": return "w-[100%]";
            default: return "w-full";
        }
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative min-h-[600px] flex flex-col">

            {/* PROGRESS BAR */}
            <div className="h-2 bg-slate-50 w-full flex">
                <div className={`h-full bg-primary transition-all duration-500 ease-out ${getProgress()}`} />
            </div>

            {/* CONTENT AREA */}
            <div className="p-8 md:p-12 flex-grow flex flex-col">

                {step !== "BOOKING" && (
                    <div className="mb-10">
                        <span className="text-primary font-black uppercase tracking-widest text-xs mb-2 block">
                            Diagnostic Step {["MODEL", "CHALLENGE", "STAFFING", "TIME_DRAIN", "TECH", "DIGITAL"].indexOf(step) + 1} of 6
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy leading-tight">
                            {step === "MODEL" && "Describe your practice model."}
                            {step === "CHALLENGE" && "What's your biggest operational challenge?"}
                            {step === "STAFFING" && "What's your current admin support?"}
                            {step === "TIME_DRAIN" && "What administrative task takes most of your time?"}
                            {step === "TECH" && "What is your clinical OS?"}
                            {step === "DIGITAL" && "How do patients find you?"}
                        </h2>
                    </div>
                )}

                {/* STEP 1: MODEL */}
                {step === "MODEL" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {models.map((model) => (
                            <button
                                key={model.id}
                                onClick={() => handleNext("practiceModel", model.id)}
                                className="group text-left p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-4"
                            >
                                <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-2xl">{model.icon}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-trust-navy text-lg">{model.label}</p>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{model.size} Providers</p>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* STEP 2: CHALLENGE */}
                {step === "CHALLENGE" && (
                    <div className="grid grid-cols-1 gap-4">
                        {challenges.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => handleNext("challenge", c.id)}
                                className="group text-left p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-red-50 flex items-center justify-center text-red-400 group-hover:bg-red-100 transition-colors">
                                        <span className="material-symbols-outlined">{c.icon}</span>
                                    </div>
                                    <span className="font-bold text-trust-navy text-lg">{c.label}</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                            </button>
                        ))}
                        <button onClick={handleBack} className="text-slate-400 text-sm font-bold mt-4 hover:text-trust-navy transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                    </div>
                )}

                {/* STEP 3: STAFFING */}
                {step === "STAFFING" && (
                    <div className="grid grid-cols-1 gap-4">
                        {staffingOptions.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => handleNext("staffing", s.id)}
                                className="group text-left p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 transition-colors">
                                        <span className="material-symbols-outlined">{s.icon}</span>
                                    </div>
                                    <span className="font-bold text-trust-navy text-lg">{s.label}</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                            </button>
                        ))}
                        <button onClick={handleBack} className="text-slate-400 text-sm font-bold mt-4 hover:text-trust-navy transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                    </div>
                )}

                {/* STEP 4: TIME DRAIN */}
                {step === "TIME_DRAIN" && (
                    <div className="grid grid-cols-1 gap-4">
                        {timeDrains.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => handleNext("timeDrain", t.id)}
                                className="group text-left p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover:bg-purple-100 transition-colors">
                                        <span className="material-symbols-outlined">{t.icon}</span>
                                    </div>
                                    <span className="font-bold text-trust-navy text-lg">{t.label}</span>
                                </div>
                                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                            </button>
                        ))}
                        <button onClick={handleBack} className="text-slate-400 text-sm font-bold mt-4 hover:text-trust-navy transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                    </div>
                )}

                {/* STEP 5: TECH */}
                {step === "TECH" && (
                    <div className="grid grid-cols-2 gap-4">
                        {ehrs.map((ehr) => (
                            <button
                                key={ehr.id}
                                onClick={() => handleNext("ehr", ehr.id)}
                                className="group p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-md transition-all duration-300 text-center flex flex-col items-center gap-3"
                            >
                                <span className="font-bold text-trust-navy group-hover:text-primary transition-colors">{ehr.label}</span>
                            </button>
                        ))}
                        <button onClick={handleBack} className="col-span-2 text-slate-400 text-sm font-bold mt-4 hover:text-trust-navy transition-colors flex items-center gap-2 justify-center">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                    </div>
                )}

                {/* STEP 6: DIGITAL */}
                {step === "DIGITAL" && (
                    <div className="grid grid-cols-1 gap-4">
                        {digitalStates.map((d) => (
                            <button
                                key={d.id}
                                onClick={() => handleNext("digital", d.id)}
                                className="group text-left p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-100 transition-colors">
                                        <span className="material-symbols-outlined">{d.icon}</span>
                                    </div>
                                    <span className="font-bold text-trust-navy text-lg">{d.label}</span>
                                </div>
                                <div className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${d.id === 'strong' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}`}>
                                    {d.id === 'strong' ? 'Optimized' : 'Opportunity'}
                                </div>
                            </button>
                        ))}
                        <button onClick={handleBack} className="text-slate-400 text-sm font-bold mt-4 hover:text-trust-navy transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">arrow_back</span> Back
                        </button>
                    </div>
                )}



                {/* STEP 7: BOOKING - IMMEDIATE CALENDAR */}
                {step === "BOOKING" && (
                    <div className="flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                        <div className="size-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                            <span className="material-symbols-outlined text-4xl">check</span>
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-trust-navy">Diagnostic Complete.</h2>
                        <p className="text-slate-600 max-w-md font-medium">
                            Your practice profile has been analyzed. <strong className="text-trust-navy">Select a time below</strong> to discuss your <span className="text-[#D2691E] font-bold">customized strategy</span>.
                        </p>

                        {/* Fake Calendar Embed Placeholder for visual effect */}
                        <div className="w-full h-[600px] bg-white border border-slate-200 rounded-2xl flex flex-col overflow-hidden shadow-lg relative group">
                            {/* Calendar Header */}
                            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-red-400"></div>
                                    <div className="size-3 rounded-full bg-yellow-400"></div>
                                    <div className="size-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select a Time</div>
                            </div>

                            {/* Calendar Body Placeholder */}
                            <div className="flex-1 relative bg-white">
                                <div className="absolute inset-0 bg-[url('https://cal.com/api/avatar/3c9e6d0a-0a2b-4b1f-9b0d-1a2b3c4d5e6f.png')] bg-cover opacity-5"></div>
                                <div className="grid grid-cols-7 gap-px bg-slate-100 h-full opacity-50">
                                    {Array.from({ length: 35 }).map((_, i) => (
                                        <div key={i} className="bg-white"></div>
                                    ))}
                                </div>

                                {/* Overlay Message */}
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200 text-center max-w-sm">
                                        <div className="mb-4 flex justify-center">
                                            <span className="material-symbols-outlined text-4xl text-[#D2691E]">event_available</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-trust-navy mb-2">Scheduling System</h3>
                                        <p className="text-slate-500 text-sm mb-6">
                                            This is a demonstration of the scheduling flow. In production, this would connect directly to your HIPAA-compliant calendar.
                                        </p>
                                        <button className="px-6 py-2 bg-[#D2691E] text-white font-bold rounded-lg shadow-lg hover:bg-[#B8860B] transition-colors">
                                            Demo Mode Active
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-slate-400 flex items-center gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm">lock</span>
                            100% HIPAA Compliant Scheduling (Demo)
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}
