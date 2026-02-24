import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [
                { type: 'heroSection' },
                { type: 'statsSection' },
                { type: 'splitContentSection' },
                { type: 'testimonialSection' },
                { type: 'ctaSection' },
                { type: 'logoCloudSection' },
                { type: 'servicesGridSection' },
                { type: 'recoveryMatrixSection' },
            ],
        }),
        defineField({
            name: 'seo',
            title: 'SEO Metadata',
            type: 'object',
            fields: [
                { name: 'metaTitle', type: 'string', title: 'Meta Title' },
                { name: 'metaDesc', type: 'text', rows: 3, title: 'Meta Description' },
            ],
        }),
    ],
})

// SECTION DEFINITIONS

export const heroSection = defineType({
    name: 'heroSection',
    title: 'Hero Section (Premium)',
    type: 'object',
    fields: [
        defineField({ name: 'badge', type: 'string', title: 'Badge Text' }),
        defineField({ name: 'title', type: 'string', title: 'Main Title' }),
        defineField({ name: 'subtitle', type: 'text', rows: 3, title: 'Subtitle' }),
        defineField({
            name: 'layout',
            type: 'string',
            title: 'Layout Style',
            options: {
                list: [
                    { title: 'Classic Bubbles', value: 'bubbles' },
                    { title: 'Executive Economics Bar', value: 'economics' }
                ]
            }
        }),
        defineField({ name: 'showSocialProof', type: 'boolean', title: 'Show Institutional Avatars?' }),
        defineField({
            name: 'cta',
            type: 'object',
            title: 'Main CTA',
            fields: [
                { name: 'text', type: 'string' },
                { name: 'link', type: 'string' }
            ]
        }),
        defineField({ name: 'secondaryCta', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
        defineField({
            name: 'metrics',
            type: 'array',
            title: 'Hero Metrics / Economics',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string' },
                    { name: 'value', type: 'string' },
                    { name: 'icon', type: 'string', description: 'Material Symbol Name' }
                ]
            }]
        }),
        defineField({ name: 'image', type: 'image', title: 'Hero Image', options: { hotspot: true } }),
    ]
})

export const recoveryMatrixSection = defineType({
    name: 'recoveryMatrixSection',
    title: 'Recovery Matrix (Leakage vs Impact)',
    type: 'object',
    fields: [
        defineField({ name: 'badge', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({
            name: 'items',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string' },
                    { name: 'stats', type: 'string', description: 'e.g., -15%' },
                    { name: 'statsLabel', type: 'string', description: 'e.g., Leakage' },
                    {
                        name: 'statsColor',
                        type: 'string',
                        options: { list: [{ title: 'Red', value: 'red' }, { title: 'Primary', value: 'primary' }] }
                    },
                    { name: 'description', type: 'text' },
                    { name: 'impact', type: 'string', description: 'Recovery Strategy' },
                    { name: 'icon', type: 'string' }
                ]
            }]
        })
    ]
})

export const servicesGridSection = defineType({
    name: 'servicesGridSection',
    title: 'Services Grid Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
    ]
})

export const statsSection = defineType({
    name: 'statsSection',
    title: 'Stats/Metrics Section',
    type: 'object',
    fields: [
        defineField({
            name: 'stats',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'label', type: 'string' },
                    { name: 'value', type: 'string' },
                    { name: 'subtext', type: 'string' }
                ]
            }]
        })
    ]
})

export const splitContentSection = defineType({
    name: 'splitContentSection',
    title: 'Split Content Section',
    type: 'object',
    fields: [
        defineField({ name: 'badge', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 4 }),
        defineField({
            name: 'checklist',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string' },
                    { name: 'detail', type: 'string' }
                ]
            }]
        }),
        defineField({ name: 'reverse', type: 'boolean', title: 'Reverse Layout?' })
    ]
})

export const testimonialSection = defineType({
    name: 'testimonialSection',
    title: 'Testimonial Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'testimonials',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'quote', type: 'text' },
                    { name: 'author', type: 'string' },
                    { name: 'role', type: 'string' },
                    { name: 'image', type: 'image' }
                ]
            }]
        })
    ]
})

export const ctaSection = defineType({
    name: 'ctaSection',
    title: 'CTA Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'highlightText', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'buttonText', type: 'string' }),
        defineField({ name: 'buttonLink', type: 'string' })
    ]
})

export const logoCloudSection = defineType({
    name: 'logoCloudSection',
    title: 'Logo Cloud',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'logos',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'name', type: 'string' },
                    { name: 'icon', type: 'string', description: 'Material Symbols icon name' }
                ]
            }]
        })
    ]
})
