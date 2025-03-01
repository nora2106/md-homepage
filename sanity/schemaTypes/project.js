import {defineField, defineType} from 'sanity'
import customMedia from "@/sanity/schemaTypes/customMedia";
import customText from "@/sanity/schemaTypes/customText";

export const project = defineType({
    name: 'project',
    title: 'Projekte',
    type: 'document',
    description: 'Neues Projekt hinzufügen',
    fields: [
        defineField({
            name: 'name',
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
            name: 'body',
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