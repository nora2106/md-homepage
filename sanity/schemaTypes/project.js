import {defineField, defineType} from 'sanity'
import customMedia from "@/sanity/schemaTypes/customMedia";
import customText from "@/sanity/schemaTypes/customText";
import client from "../sanity-client";


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
            name: 'slug',
            type: 'string',
            title: 'URL-Slug',
            description: 'Projektname für URL-Adresse (kleingeschrieben, keine Umlaute)',
            options: {source: 'name'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'previewImage',
            title: 'Vorschaubild',
            description: 'Vorschaubild für Projektseite',
            type: 'image',
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
        defineField({
            name: 'sort',
            title: 'Sortierung',
            description: 'Priorität des Projekts in der Anzeige (1 = ganz oben)',
            type: 'number',
            validation: (Rule) =>
                Rule.custom(async (sortValue) => {
                    if (sortValue < 1) {
                        return 'Minimum-Priorität 1';
                    }

                    const totalProjects = await client.fetch(
                        'count(*[_type == "project"])'
                    );

                    if (sortValue > totalProjects) {
                        return `Priorität darf nicht höher als ${totalProjects} sein (Projektanzahl)`;
                    }

                    return true;
                }),
        }),
    ],
})
