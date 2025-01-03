import {defineField, defineType} from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Überschrift',
            description: 'Titel der Webseite',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [{type: 'block'}],
        }),
    ],
})