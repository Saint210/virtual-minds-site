"use client";

import { useCallback, useMemo, useState } from "react";

type ProtectedEmailProps = {
    localPart: string;
    domain: string;
    className?: string;
    buttonClassName?: string;
    revealedClassName?: string;
    label?: string;
};

export default function ProtectedEmail({
    localPart,
    domain,
    className,
    buttonClassName,
    revealedClassName,
    label = "Email",
}: ProtectedEmailProps) {
    const [revealed, setRevealed] = useState(false);
    const [copied, setCopied] = useState(false);

    const email = useMemo(() => `${localPart}@${domain}`, [localPart, domain]);

    const copyToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = email;
            textarea.setAttribute("readonly", "true");
            textarea.style.position = "absolute";
            textarea.style.left = "-9999px";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        }
    }, [email]);

    return (
        <span className={className}>
            {!revealed ? (
                <button
                    type="button"
                    onClick={() => setRevealed(true)}
                    className={
                        buttonClassName ??
                        "underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
                    }
                    aria-label={`Show ${label}`}
                >
                    Show email
                </button>
            ) : (
                <span className="inline-flex items-center gap-2">
                    <a
                        href={`mailto:${email}`}
                        className={
                            revealedClassName ??
                            "underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
                        }
                    >
                        {email}
                    </a>
                    <button
                        type="button"
                        onClick={copyToClipboard}
                        className={
                            buttonClassName ??
                            "rounded-md bg-white/10 px-2 py-1 text-[11px] font-bold hover:bg-white/20 transition-colors"
                        }
                        aria-label={`Copy ${label} to clipboard`}
                    >
                        {copied ? "Copied" : "Copy"}
                    </button>
                </span>
            )}
        </span>
    );
}
