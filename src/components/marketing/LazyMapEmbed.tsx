"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type LazyMapEmbedProps = {
    src: string;
    title: string;
    height?: number | string;
    className?: string;
    staticImageSrc?: string;
};

export default function LazyMapEmbed({ src, title, height, className, staticImageSrc }: LazyMapEmbedProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (shouldLoad) return;

        const el = containerRef.current;
        if (!el) return;

        if (typeof IntersectionObserver === "undefined") {
            const timeoutId = setTimeout(() => setShouldLoad(true), 0);
            return () => clearTimeout(timeoutId);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [shouldLoad]);

    const resolvedHeight = typeof height === "number" ? `${height}px` : height;
    const fallbackStaticSrc =
        staticImageSrc ??
        "https://staticmap.openstreetmap.de/staticmap.php?center=34.083741,-119.00754&zoom=5&size=800x450&markers=34.083741,-119.00754,red-pushpin";

    return (
        <div ref={containerRef} className={className} style={{ height: resolvedHeight }}>
            {shouldLoad ? (
                <iframe
                    src={src}
                    width="100%"
                    height={height}
                    style={{ border: "none" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title={title}
                ></iframe>
            ) : (
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={fallbackStaticSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                        priority={false}
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 grid place-items-center">
                        <button
                            type="button"
                            onClick={() => setShouldLoad(true)}
                            className="inline-flex items-center justify-center rounded-lg bg-white/90 px-4 py-2 text-sm font-bold text-trust-navy shadow"
                        >
                            Load interactive map
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
