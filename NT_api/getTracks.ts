// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity/lib/client";

const query = groq`
  *[_type == "track"] { 
     ...,
    exercises[]-> 
}
`;

type Data = {
  tracks: [];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const tracks: [] = await sanityClient.fetch(query);
    console.log("GET_TRACKS", tracks);
    return { tracks };
    // res.status(200).json({ tracks });
  } catch (error) {
    console.error("Error fetching tracks:", error);
    res.status(500).json({ tracks: [] });
  }
}



