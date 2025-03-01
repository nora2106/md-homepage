import {defineField, defineType} from 'sanity'
import customMedia from "@/sanity/schemaTypes/customMedia";
import customText from "@/sanity/schemaTypes/customText";

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
            name: 'text',
            title: 'Text',
            type: 'array',
            of: customText.of,
        }),
        defineField({
            name: 'media',
            title: 'Media',
            description: 'Bilder oder Videos',
            type: 'array',
            of: customMedia.of,
        }),
    ],
})