import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env.js'
 const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-18'


 const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
//  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
 const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
console.log("--projectId-in-/src/sanity/lib/client.js", projectId)

export const sanityClient = createClient({
  projectId: projectId || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
