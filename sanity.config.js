import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'md-homepage',

  projectId: 'mh231zz3',
  dataset: 'development',
  basepath: '/studio',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
