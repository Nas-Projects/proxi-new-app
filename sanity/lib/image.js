
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create Sanity client with the correct projectId and dataset
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Make sure this matches your deployed studio project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // This should be 'omairillbackend'
  useCdn: true,
});
console.log("IMAGES_MANIFEST", process.env.NEXT_PUBLIC_SANITY_DATASET, "projectId", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

