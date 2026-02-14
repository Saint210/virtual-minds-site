import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'calculatorSubmission',
    title: 'Calculator Submission',
    type: 'document',
    fields: [
        defineField({
            name: 'timestamp',
            title: 'Timestamp',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email Address',
            type: 'string',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'adminHours',
            title: 'Admin Hours',
            type: 'number',
        }),
        defineField({
            name: 'monthlyRent',
            title: 'Monthly Rent',
            type: 'number',
        }),
        defineField({
            name: 'hourlyRate',
            title: 'Hourly Rate',
            type: 'number',
        }),
        defineField({
            name: 'activePatients',
            title: 'Active Patients',
            type: 'number',
        }),
        defineField({
            name: 'projectedRevenueGain',
            title: 'Projected Revenue Gain',
            type: 'number',
        }),
        defineField({
            name: 'source',
            title: 'Source / Referrer',
            type: 'string',
            description: 'Where did this calculation come from? (e.g. "embed", "blog-post")',
        }),
    ],
    preview: {
        select: {
            title: 'city',
            subtitle: 'timestamp',
        },
        prepare(selection) {
            const { title, subtitle } = selection
            return {
                title: title || 'Unknown Location',
                subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'No date',
            }
        },
    },
})
