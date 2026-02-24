"use client";

import Link from "next/link";
import { useTracking } from "@/hooks/useTracking";
import { ReactNode } from "react";

interface TrackedLinkProps {
    href: string;
    ctaName: string;
    source: string;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

export default function TrackedLink({ href, ctaName, source, className, children, onClick }: TrackedLinkProps) {
    const { trackCTAClick } = useTracking();

    const handleClick = () => {
        trackCTAClick(ctaName, href, source);
        if (onClick) onClick();
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
}
