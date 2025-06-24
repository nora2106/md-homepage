import {defineField, defineType} from 'sanity'

export const gallery = defineType({
    name: 'gallery',
    title: 'Bildergalerie',
    type: 'document',
    description: 'Bilder zum Download bereitstellen',
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
            name: 'images',
            title: 'Bilder',
            description: 'Bilder hochladen',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'image',
                        type: 'image',
                        title: 'Bild',
                    },
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alt-Text (für Barrierefreiheit und SEO)',
                    },
                    {
                        name: 'copyright',
                        type: 'string',
                        title: 'Name für Copyright',
                    },
                    {
                        name: 'sort',
                        type: 'number',
                        title: 'Priorität (1 = ganz oben)',
                    },
                ]
            }]
        }),
    ],
})
