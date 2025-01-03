import {defineField, defineType} from 'sanity'

export const project = defineType({
    name: 'project',
    title: 'Projekt',
    type: 'document',
    description: 'Neues Projekt hinzufügen',
    fields: [
        defineField({
            name: 'Name',
            title: 'Projektname',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Kurzbeschreibung',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'title'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Bild',
            type: 'image',
        }),
        defineField({
            name: 'body',
            title: 'Text',
            type: 'array',
            of: [{type: 'block'}],
        }),
    ],
})