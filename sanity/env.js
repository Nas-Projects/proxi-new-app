export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-18'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'omairillbackend'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''  // Use only NEXT_PUBLIC_ prefix for client-side

console.log("API_VERSION_IN_SANITY_ENV_JS:", apiVersion, "DATASET_IN_SANITY_ENV_JS:", dataset, "PROJECT_ID_IN_SANITY_ENV_JS:", projectId)

if (!projectId) {
  throw new Error('Missing projectId in env.js')
}
