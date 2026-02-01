import React from 'react';

interface KeyTakeaway {
    point: string;
    detail: string;
}

interface KeyTakeawaysProps {
    takeaways: KeyTakeaway[];
}

export default function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
    return (
        <div className="my-12 p-8 bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] rounded-[32px] text-white shadow-2xl relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-6xl text-primary">auto_awesome</span>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-2xl font-bold">summarize</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight !text-white m-0">Executive Summary & Key Takeaways</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {takeaways.map((item, index) => (
                        <div key={index} className="flex gap-4 group">
                            <div className="size-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs shrink-0 mt-1 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                {index + 1}
                            </div>
                            <div>
                                <h4 className="font-black !text-primary text-[14px] uppercase tracking-[0.2em] mb-2 m-0 leading-tight">
                                    {item.point}
                                </h4>
                                <p className="!text-slate-100 text-[15px] leading-relaxed m-0 font-medium">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
