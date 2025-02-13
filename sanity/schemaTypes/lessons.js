import {defineField, defineType} from 'sanity'

export const lessons = defineType({
    name: 'lessons',
    title: 'Unterricht',
    type: 'document',
    description: 'Neues Projekt hinzufügen',
    fields: [
        defineField({
            name: 'headline',
            title: 'Überschrift',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'media',
            title: 'Media',
            description: 'Bilder oder Videos',
            type: 'array',
            of: [{type: 'file'}],
        }),
        defineField({
            name: 'body',
            title: 'Text',
            type: 'array',
            of: [{type: 'block'}],
        }),
    ],
})