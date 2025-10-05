import {defineField, defineType} from 'sanity'
import customMedia from "@/sanity/schemaTypes/customMedia";
import customText from "@/sanity/schemaTypes/customText";

export const lessons = defineType({
    name: 'lessons',
    title: 'Unterricht',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Seitentitel',
            description: 'Titel, der im Browserfenster angezeigt wird und dem Suchmaschinenranking dient',
            type: 'string',
        }),
        defineField({
            name: 'meta_description',
            title: 'Seitenbeschreibung',
            description: 'Zur Vorschau, dient dem Suchmaschinenranking',
            type: 'string',
        }),
        defineField({
            name: 'headline',
            title: 'Überschrift',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'text',
            title: 'Textblöcke',
            type: 'array',
            of: customText.of,
        }),
        defineField({
            name: 'media',
            title: 'Media',
            description: 'ein oder mehrere Bilder oder Videos',
            type: 'array',
            of: customMedia.of,
        }),
    ],
})
