// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity/lib/client";
// import { PageInfo, Social } from "../../typings";

const query = groq`
  *[_type == "social"]
`;

type Data = {
  socials:[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: [] = await sanityClient.fetch(query);

  return{ socials }
}
