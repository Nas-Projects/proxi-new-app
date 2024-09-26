import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";

// Define the GROQ query
const query = groq`
  *[_type == "aboutPage"][0] {
    ...,
  }
`;

type AboutPageData = Record<string, unknown>; // Use a more specific type or refine this

export default async function handler(
  _req: NextApiRequest, // We’re not using `req`
  res: NextApiResponse<{ aboutPageData: AboutPageData }>
) {
  try {
    // Fetch the data from Sanity using the query
    const aboutPageData = await sanityClient.fetch(query);

    // Respond with the fetched data and a 200 status code
    res.status(200).json({ aboutPageData });
  } catch (error) {
    console.error("Error fetching about page data:", error);

    // If something goes wrong, send a 500 error response
    res.status(500).json({ aboutPageData: {} });
  }
}
