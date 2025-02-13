import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'md-homepage',
  projectId: 'mh231zz3',
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  dataset: 'production',
  basepath: '/studio',
  plugins: [structureTool({
    structure: (S) =>
        S.list()
            .title('Base')
            .items([
              S.listItem()
                  .title('Seiten')
                  .child(
                      S.list()
                          .title('Settings Documents')
                          .items([
                            S.listItem()
                                .title('Allgemeine Einstellungen')
                                .child(S.document().schemaType('settings').documentId('settings')),
                            S.listItem()
                                .title('Startseite')
                                .child(S.document().schemaType('homepage2').documentId('homepage2')),
                            S.listItem()
                                .title('Unterricht')
                                .child(S.document().schemaType('lessons').documentId('lessons')),
                        ])
        ),
    ...S.documentTypeListItems().filter(
        (listItem) => !['homepage2', 'lessons', 'settings'].includes(listItem.getId())
    ),
  ])
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
