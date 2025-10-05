import {defineField, defineType} from 'sanity'
import customText from './customText'
import customMedia from "./customMedia";
export const homepage = defineType({
    name: 'homepage2',
    title: 'Startseite',
    type: 'document',
     fieldsets: [
    {
      name: 'referencesSection',
      title: 'Rubrik - Referenzen',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'aboutMeSection',
      title: 'Rubrik - Lebenslauf',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'centeredMediaSection',
      title: 'Rubrik - Bild/Video mittig (optional)',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'projectsSection',
      title: 'Rubrik - Projekte',
      options: { collapsible: true, collapsed: true }
    },    
    {
      name: 'eventsSection',
      title: 'Rubrik - Öffentliche Termine',
      options: { collapsible: true, collapsed: true }
    },
    {
      name: 'publishmentsSection',
      title: 'Rubrik - Veröffentlichungen',
      options: { collapsible: true, collapsed: true }
    },
  ],
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
            name: 'page_headline',
            title: 'Überschrift',
            description: 'erste Überschrift der Webseite (max. 2 Zeilen)',
            type: 'array',
            of: [{type: 'string'}],
            validation: rule => rule.required().min(1).max(2),
        }),
        defineField({
            name: 'references_headline',
            title: 'Überschrift',
            type: 'array',
            of: [{type: 'string'}],
            fieldset: 'referencesSection',
            validation: rule => rule.required().min(1).max(2),
        }),
        defineField({
            name: 'references_media',
            title: 'Media',
            description: 'ein oder mehrere Bilder/Videos (optional)',
            type: 'array',
            of: customMedia.of,
            fieldset: 'referencesSection',
        }),
        defineField({
            name: 'references_text',
            title: 'Text',
            description: '(optional)',
            type: 'array',
            of: customText.of,
            fieldset: 'referencesSection',
        }),
        defineField({
            name: 'about_me_headline',
            title: 'Überschrift',
            type: 'array',
            of: [{type: 'string'}],
            fieldset: 'aboutMeSection',
            validation: rule => rule.required().min(1).max(2),
        }),
        defineField({
            name: 'about_me_media',
            title: 'Media',
            description: 'Bild oder Video (max. 1)',
            type: 'array',
            of: customMedia.of,
            fieldset: 'aboutMeSection',
            validation: rule => rule.max(1),
        }),
        defineField({
            name: 'about_me_text',
            title: 'Text',
            type: 'array',
            of: customText.of,
            fieldset: 'aboutMeSection'
        }),
        defineField({
            name: 'media_centered_headline',
            title: 'Überschrift',
            description: '(max. 2 Zeilen)',
            type: 'array',
            of: [{type: 'string'}],
            fieldset: 'centeredMediaSection',
            validation: rule => rule.required().max(2),
        }),
        defineField({
            name: 'media_centered',
            title: 'Media mittig',
            description: 'Bild oder Video (max. 1)',
            type: 'array',
            of: customMedia.of,
            fieldset: 'centeredMediaSection',
            validation: rule => rule.max(1),
        }),
        defineField({
            name: 'my_projects_headline',
            title: 'Überschrift',
            type: 'array',
            of: [{type: 'string'}],
            fieldset: 'projectsSection',
            validation: rule => rule.required().min(1).max(2),
        }),
        defineField({
            name: 'banner_text',
            title: 'Banner-Text',
            description: 'Farbiges Banner mit Text',
            type: 'string',
            fieldset: 'projectsSection',
        }),
        defineField({
            name: 'banner_button_text',
            title: 'Button-Text im Banner',
            description: 'Linktext im Banner mit Verlinkung zur Projekte-Seite',
            type: 'string',
            fieldset: 'projectsSection',
        }),
        defineField({
            name: 'media_centered_title',
            title: 'Überschrift',
            description: '(max. 2 Zeilen)',
            type: 'text',
            fieldset: 'centeredMediaSection',
        }),
        defineField({
            name: 'events_headline',
            title: 'Überschrift',
            type: 'array',
            of: [{type: 'string'}],
            fieldset: 'eventsSection',
            validation: rule => rule.required().min(1).max(2),
        }),
        defineField({
            name: 'events_image',
            title: 'Media',
            description: 'Bild oder Video (max. 1)',
            type: 'array',
            of: customMedia.of,
            fieldset: 'eventsSection',
            validation: rule => rule.max(1),
        }),
        defineField({
            name: 'publishments_headline',
            title: 'Überschrift',
            description: '(max. 2 Zeilen)',
            type: 'array',
            of: [{type: 'string'}],
            fieldset: 'publishmentsSection',
            validation: rule => rule.required().min(1).max(2),
        }),
        defineField({
            name: 'publishments_media',
            title: 'Media',
            description: 'Bild oder Video (max. 1)',
            type: 'array',
            of: customMedia.of,
            fieldset: 'publishmentsSection',
            validation: rule => rule.max(1),
        }),
        defineField({
            name: 'publishments_text',
            title: 'Text',
            type: 'array',
            of: customText.of,
            fieldset: 'publishmentsSection',
        }),
        defineField({
            name: 'contact_headline',
            title: 'Kontakt-Überschrift',
            type: 'array',
            of: [{type: 'string'}],
            validation: rule => rule.required().min(1).max(2),
        }),
    ],
})
