'use client';

import Script from 'next/script';

declare global {
    interface Window {
        plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
    }
}

export default function PlausibleProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Privacy-friendly analytics by Plausible */}
            <Script
                async
                src="https://plausible.io/js/pa-Q79v-N-ZPyyfPvWxSpHnk.js"
                strategy="afterInteractive"
            />
            <Script id="plausible-init" strategy="afterInteractive">
                {`
          window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
          plausible.init()
        `}
            </Script>
            {children}
        </>
    );
}
