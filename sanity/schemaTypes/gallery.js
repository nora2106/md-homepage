import {defineField, defineType} from 'sanity'

export const gallery = defineType({
    name: 'gallery',
    title: 'Bildergalerie',
    type: 'document',
    description: 'Bilder zum Download bereitstellen',
    fields: [
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
                        options: { hotspot: true },
                    },
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alt-Text (für Barrierefreiheit und SEO)',
                    },
                ]
            }]
        }),
    ],
})
