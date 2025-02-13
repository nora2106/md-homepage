import {defineField, defineType} from 'sanity'

export const event = defineType({
    name: 'event',
    title: 'Öffentliche Termine',
    type: 'document',
    description: 'Neuen Termin hinzufügen',
    fields: [
        defineField({
            name: 'name',
            title: 'Name der Veranstaltung',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Datum',
            description: 'Datum der Veranstaltung',
            type: 'datetime',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Text über die Veranstaltung (maximal x Zeichen)',
            type: 'string',
            validation: (rule) => rule.max(200),
        }),
        defineField({
            name: 'location',
            title: 'Ort der Veranstaltung',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link zu mehr Details',
            type: 'url',
        }),
        defineField({
            name: 'link_name',
            title: 'Text des "Mehr Details"-Buttons',
            type: 'string',
            hidden: ({document}) => !document?.link
        }),
    ],
})