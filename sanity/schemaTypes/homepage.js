import {defineField, defineType} from 'sanity'

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
        }),
        defineField({
            name: 'page_headline',
            title: 'Überschrift',
            description: 'Überschrift der Webseite',
            type: 'array',
            validation: rule => rule.required().min(1).max(2),
            of: [{type: 'string'}],
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
            name: 'about_me_media',
            title: 'Video',
            description: 'Video zum Abschnitt "Über mich"',
            type: 'image',
        }),
        defineField({
            name: 'about_me_text',
            title: 'Über mich',
            description: 'Text zum Abschnitt "Über mich"',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'banner_text',
            title: 'Banner-Text',
            description: 'Farbiges Banner mit Text',
            type: 'string',
        }),
        defineField({
            name: 'events_headline',
            title: 'Öffentliche Termine',
            description: 'Titel zum Abschnitt "Öffentliche Termine"',
            type: 'array',
            validation: rule => rule.required().min(1).max(2),
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'events_image',
            title: 'Bild',
            description: 'Bild zum Abschnitt "Öffentliche Termine"',
            type: 'image',
        }),
        defineField({
            name: 'contact_headline',
            title: 'Kontakt-Überschrift',
            description: 'Titel zum Abschnitt "Kontakt"',
            type: 'array',
            validation: rule => rule.required().min(1).max(2),
            of: [{type: 'string'}],
        }),
    ],
})