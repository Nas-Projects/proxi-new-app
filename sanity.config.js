'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './sanity/env' // Make sure to import from env.js
import {schema} from './sanity/schema'
// Logging the projectId to confirm if it's being set correctly

console.log("PROJECT_ID_INSANITY_CONFIG_JS", projectId)
let project_ID = projectId
if (!projectId) {
  console.log('Project ID is missing in env.js')
  project_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  console.log('USING process ENV Project ID  IN CONFIG',project_ID )
}



// if (!projectId) {
//   throw new Error('Configurationnnns must contain `projectId`')
// }

export default defineConfig({
  basePath: '/studio',
  projectId: project_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,// Use the projectId from env.js
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: apiVersion,
    }),
  ],
})

