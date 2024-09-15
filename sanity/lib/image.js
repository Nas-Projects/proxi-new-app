
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create Sanity client with the correct projectId and dataset
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Make sure this matches your deployed studio project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'omairillbackend', // This should be 'omairillbackend'
  useCdn: true,
});
console.log("IMAGES_MANIFEST", process.env.NEXT_PUBLIC_SANITY_DATASET, "projectId", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}


// import { createClient } from '@sanity/client';

// // import { dataset, projectId } from '../env.js'
// const apiVersion =
// process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-18'


// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// console.log("projectId-in-src/sanity/lib/image.js", projectId)

// const client = createClient({
//   projectId ,
//   dataset,
//   useCdn: true, // `false` if you want to ensure fresh data
// });

// // Use client in your code as needed
// export function urlFor(source) {
//   return imageUrlBuilder(client).image(source);
// }
