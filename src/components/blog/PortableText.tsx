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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mt-16 mb-8 italic">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-trust-navy mt-12 mb-6">
                {children}
            </h3>
        ),
        normal: ({ children }: any) => (
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                {children}
            </p>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-primary pl-8 my-12 italic text-2xl text-trust-navy/80 font-serif leading-relaxed">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="space-y-4 mb-8 ml-6">
                {children}
            </ul>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => (
            <li className="flex items-start gap-4 text-slate-600 text-lg">
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
                className="text-primary hover:text-accent underline underline-offset-4 decoration-primary/30 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
    },
};

export default function PortableText({ value }: { value: any }) {
    return <BasePortableText value={value} components={components} />;
}
