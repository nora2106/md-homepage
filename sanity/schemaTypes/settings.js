import {defineField, defineType} from 'sanity'

export const settings = defineType({
    name: 'settings',
    title: 'Allgemeine Einstellungen',
    type: 'document',
    description: 'Allgemeine Einstellungen bearbeiten',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'Vor- und Nachname für Impressum',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'E-Mail',
            description: 'E-Mail für Impressum & Kontakt',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Anschrift',
            description: 'Anschrift für Impressum',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'imprint_text',
            title: 'Impressum-Text',
            description: 'Haftungstext für Impressum',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'image_credit',
            title: 'Illustration Credit',
            description: 'Copyright-Notiz unter der Startseitenillustration',
            type: 'string',
        }),
        defineField({
            name: 'footer_credit',
            title: 'Footer Credit',
            type: 'string',
        }),
        defineField({
            name: 'footer_link',
            title: 'Footer Link',
            type: 'string',
        }),
    ],
})