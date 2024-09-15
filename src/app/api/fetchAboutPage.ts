// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity/lib/client";
// import { Project, Skill } from "../../typings";

console.log("GOT_HERE_TO GET__TRACKS", sanityClient);
const query = groq`
*[_type == "aboutPage"][0] {
  ...,
}
`;

type Data = {
  aboutPageData: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const aboutPageData = await sanityClient.fetch(query);


  // console.log("GET__TRACKS", JSON.stringify(tracks));

  // res.status(200)
  return  aboutPageData ;
}



