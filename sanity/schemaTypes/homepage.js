import {defineField, defineType} from 'sanity'
import customText from './customText'
import customMedia from "./customMedia";
export const homepage = defineType({
    name: 'homepage2',
    title: 'Startseite',
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
            title: 'Bild/Video',
            description: 'Bild oder Video zum Abschnitt "Über mich"',
            type: 'array',
            of: customMedia.of,
            validation: rule => rule.required().max(1),
        }),
        defineField({
            name: 'about_me_text',
            title: 'Über mich',
            description: 'Text zum Abschnitt "Über mich"',
            type: 'array',
            of: customText.of,
        }),
        defineField({
            name: 'banner_text',
            title: 'Banner-Text',
            description: 'Farbiges Banner mit Text (optional)',
            type: 'string',
        }),
        defineField({
            name: 'media_centered',
            title: 'Bild/Video mittig',
            description: 'Bild oder Video mittig unter "Über mich" (optional)',
            type: 'array',
            of: customMedia.of,
            validation: rule => rule.max(1),
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
            type: 'array',
            of: customMedia.of,
            validation: rule => rule.max(1),
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
