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
            name: 'targetPatients',
            title: 'Target Patient Load (12 Months)',
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
            city: 'city',
            email: 'email',
            timestamp: 'timestamp',
        },
        prepare(selection) {
            const { city, email, timestamp } = selection
            // Prioritize Valid Email -> City -> Generic Linked
            let title = 'Anonymous Visitor'

            if (email) {
                title = email
            } else if (city && city !== 'Unknown') {
                title = `${city} Practice`
            }

            return {
                title: title,
                subtitle: timestamp ? new Date(timestamp).toLocaleString() : 'No date',
            }
        },
    },
})
