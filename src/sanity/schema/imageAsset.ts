import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'sanity.imageAsset',
    title: 'Image Asset',
    type: 'document',
    fields: [
        defineField({
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for screen readers and SEO.',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the image.',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Detailed description of the image context.',
        }),
    ],
})
