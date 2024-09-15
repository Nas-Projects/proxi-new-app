// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "../src/sanity/lib/client";
// import { SubSkill } from "../../typings";

// const query = groq`
//   *[_type == "subSkill"]
// `;

// type Data = {
//   subSkills: SubSkill[];
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const subSkills: SubSkill[] = await sanityClient.fetch(query);


//   console.log("SUBSKILL IN GET JSON", subSkills);
//   res.status(200).json({ subSkills });


// }
