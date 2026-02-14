"use client";

import dynamic from "next/dynamic";
import { type ComponentProps } from "react";
import type PracticeLeaksCalculator from "./PracticeLeaksCalculator";

const PracticeLeaksCalculatorDynamic = dynamic(
    () => import("./PracticeLeaksCalculator"),
    {
        ssr: false,
        loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse rounded-3xl" />
    }
);

export default function LazyPracticeLeaksCalculator(props: ComponentProps<typeof PracticeLeaksCalculator>) {
    return <PracticeLeaksCalculatorDynamic {...props} />;
}
