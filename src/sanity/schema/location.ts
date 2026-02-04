import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'City Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            description: 'SEO Page Title',
        }),
        defineField({
            name: 'metaDesc',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: 'SEO Description',
        }),
        defineField({
            name: 'rentAvg',
            title: 'Average Rent',
            type: 'string',
            description: 'e.g., "$4.50/sqft"',
        }),
        defineField({
            name: 'rentSavings',
            title: 'Annual Savings',
            type: 'string',
            description: 'e.g., "$65,000/yr"',
        }),
        defineField({
            name: 'hospitals',
            title: 'Local Hospitals',
            type: 'string',
            description: 'e.g., "Cedars-Sinai, UCLA Health"',
        }),
        defineField({
            name: 'neighborhoods',
            title: 'Target Neighborhoods',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'painPoint',
            title: 'Regional Pain Point',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        }),
        defineField({
            name: 'faqZone',
            title: 'FAQ Timezone',
            type: 'string',
            initialValue: 'Pacific Standard Time (PST)',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'rentSavings',
            media: 'heroImage',
        },
    },
})
