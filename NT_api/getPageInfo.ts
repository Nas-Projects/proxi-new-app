// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity/lib/client";
// import { PageInfo } from "../../typings";

const pageInfoQuery = groq`
  *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: [];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo = await sanityClient.fetch(pageInfoQuery);

  return { pageInfo };
}
