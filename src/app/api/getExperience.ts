// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity/lib/client";
// import { Experience } from "../../typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: [];
};

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
) {
  const experiences: [] = await sanityClient.fetch(query);

return { experiences }
}
