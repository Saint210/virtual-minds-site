import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
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
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'A brief, punchy description of the service (e.g., "Revenue Optimization").',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Material Symbols icon name (e.g., "payments", "analytics").',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'price',
            title: 'Price Display',
            type: 'string',
            description: 'e.g., "Starting at $2,500/mo"',
        }),
        defineField({
            name: 'tags',
            title: 'Service Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'yield',
            title: 'Clinical yield',
            type: 'string',
            description: 'e.g., "Recover $25k/yr in Admin Overhead"',
        }),
        defineField({
            name: 'features',
            title: 'Key Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Feature Title' },
                        { name: 'detail', type: 'string', title: 'Feature Detail' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Detailed Content',
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }],
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'tagline',
            media: 'mainImage',
        },
    },
})
