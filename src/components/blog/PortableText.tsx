"use client";

import { PortableText as BasePortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

const components = {
    types: {
        image: ({ value }: any) => (
            <div className="relative w-full aspect-video my-12 rounded-[2rem] overflow-hidden shadow-2xl group">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || "Blog Image"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {value.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md text-white text-xs font-light italic">
                        {value.caption}
                    </div>
                )}
            </div>
        ),
    },
    block: {
        h2: ({ children }: any) => (
            <h2 className="font-serif !text-4xl md:!text-5xl !font-bold !text-trust-navy !mt-20 !mb-10 !tracking-tight relative pl-8 md:pl-0">
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary rounded-full opacity-80" />
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="font-serif !text-2xl md:!text-3xl !font-bold !text-trust-navy !mt-14 !mb-8">
                {children}
            </h3>
        ),
        normal: ({ children, index }: any) => (
            <p className={`blog-p ${index === 0 ? 'first-paragraph' : ''}`}>
                {children}
            </p>
        ),
        blockquote: ({ children }: any) => (
            <div className="magazine-quote">
                <span className="quote-mark open">"</span>
                <blockquote className="italic text-2xl md:text-4xl text-trust-navy leading-snug font-serif">
                    {children}
                </blockquote>
                <span className="quote-mark close">"</span>
            </div>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="space-y-4 mb-10 ml-6 list-none">
                {children}
            </ul>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => (
            <li className="flex items-start gap-4 text-slate-600 text-xl font-light">
                <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                <span>{children}</span>
            </li>
        ),
    },
    marks: {
        strong: ({ children }: any) => <strong className="font-bold text-trust-navy">{children}</strong>,
        link: ({ children, value }: any) => (
            <a
                href={value.href}
                className="text-primary hover:text-accent underline underline-offset-4 decoration-primary/30 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
    },
};

export default function PortableText({ value }: { value: any }) {
    if (!value) return null;

    return (
        <div className="magazine-content max-w-4xl mx-auto">
            <style jsx global>{`
                .magazine-content p.blog-p {
                    font-size: 1.25rem !important;
                    line-height: 1.8 !important;
                    color: #475569 !important;
                    margin-bottom: 2.5rem !important;
                    font-weight: 300 !important;
                    display: block !important;
                }
                .magazine-content .first-paragraph::first-letter {
                    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
                    font-size: 6rem !important;
                    font-weight: 700 !important;
                    color: #0B1C3E !important;
                    float: left !important;
                    line-height: 0.7 !important;
                    margin-right: 0.85rem !important;
                    margin-top: 0.6rem !important;
                    padding-top: 0.2rem !important;
                }
                .magazine-content h2 {
                    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
                    font-size: 3rem !important;
                    font-weight: 700 !important;
                    color: #0B1C3E !important;
                    margin-top: 6rem !important;
                    margin-bottom: 3rem !important;
                    letter-spacing: -0.02em !important;
                    position: relative !important;
                    padding-left: 0 !important;
                }
                .magazine-content h2::before {
                    content: "" !important;
                    position: absolute !important;
                    left: -2rem !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    width: 6px !important;
                    height: 3rem !important;
                    background-color: #D2691E !important;
                    border-radius: 9999px !important;
                    opacity: 0.9 !important;
                    display: block !important;
                }
                .magazine-content h3 {
                    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
                    font-size: 2rem !important;
                    font-weight: 700 !important;
                    color: #1a2e54 !important;
                    margin-top: 4rem !important;
                    margin-bottom: 2rem !important;
                }
                @media (max-width: 768px) {
                    .magazine-content h2::before {
                        display: none !important;
                    }
                    .magazine-content h2 {
                        font-size: 2.25rem !important;
                    }
                }
                .magazine-content .magazine-quote {
                    position: relative !important;
                    margin: 5rem 0 !important;
                    padding: 4rem 4rem !important;
                    background-color: #f8fafc !important;
                    border-radius: 3rem !important;
                    text-align: center !important;
                    border: 1px solid #f1f5f9 !important;
                }
                .magazine-content .quote-mark {
                    position: absolute !important;
                    font-size: 8rem !important;
                    font-family: ui-serif, serif !important;
                    color: rgba(210, 105, 30, 0.15) !important;
                    line-height: 1 !important;
                    pointer-events: none !important;
                    user-select: none !important;
                }
                .magazine-content .quote-mark.open {
                    top: 1rem !important;
                    left: 2rem !important;
                }
                .magazine-content .quote-mark.close {
                    bottom: -2rem !important;
                    right: 2rem !important;
                    transform: rotate(180deg) !important;
                }
            `}</style>
            <BasePortableText value={value} components={components} />
        </div>
    );
}
