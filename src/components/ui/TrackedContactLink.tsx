"use client";

import { useTracking } from "@/hooks/useTracking";
import { ReactNode } from "react";

interface TrackedContactLinkProps {
    href: string;
    contactType: 'phone' | 'email';
    value: string; // The actual phone number or email for the event log
    className?: string;
    children: ReactNode;
}

export default function TrackedContactLink({
    href,
    contactType,
    value,
    className = "",
    children
}: TrackedContactLinkProps) {
    const { trackPhoneClick, trackEmailClick } = useTracking();

    const handleClick = () => {
        if (contactType === 'phone') {
            trackPhoneClick(value);
        } else if (contactType === 'email') {
            trackEmailClick(value);
        }
    };

    return (
        <a
            href={href}
            className={className}
            onClick={handleClick}
        >
            {children}
        </a>
    );
}
