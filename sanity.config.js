import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  projectId: 'mh231zz3',
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  dataset: 'development',
  basepath: '/studio',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
