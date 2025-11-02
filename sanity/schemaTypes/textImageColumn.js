import { defineField, defineType } from 'sanity'
import customText from './customText';

export default defineType({
    title: 'Spalte Bild/Text',
    name: 'textImageColumn',
    type: 'object',
    description: 'Spalte mit Text und einem zugehörigen Bild',
    fields: [
        defineField({
            name: 'text',
            title: 'Text',
            type: 'array',
            of: customText.of
        }),
        defineField({
            type: 'object',
            title: 'Bild',
            name: 'imageObject',
            fields: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Bild',
                    options: { hotspot: true },
                },
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Text (Bildbeschreibung)',
                },
                {
                    name: 'copyright',
                    type: 'string',
                    title: 'Copyright-Name (optional)',
                },
            ]
        }),
    ]
});