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
        }),
        defineField({
            name: 'about_me_headline',
            title: 'Über mich',
            description: 'Titel zum Abschnitt "Über mich"',
            type: 'array',
            validation: rule => rule.required().min(1).max(2),
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'about_me_video',
            title: 'Video',
            description: 'Video zum Abschnitt "Über mich"',
            type: 'image',
        }),
        defineField({
            name: 'about_me',
            title: 'Über mich',
            description: 'Text zum Abschnitt "Über mich"',
            type: 'array',
            of: [{type: 'block'}],
        }),
    ],
})