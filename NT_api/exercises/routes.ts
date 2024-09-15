
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "../sanity/lib/client";
// // import Excercises from "@/pages/exercises";
// // import {  TechStack } from "../../typings"]]

// /pages/api/exercises.js
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";

const query = groq`
  *[_type == "exercise"] {
    ...,
    tags[]->
  }
`;

export default async function handler(req, res) {
  console.log("REQUEST", req)
  try {
    const exercises = await sanityClient.fetch(query);
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: "Error fetching exercises" });
  }
}


// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "../sanity/lib/client";
// // import Excercises from "@/pages/exercises";
// // import {  TechStack } from "../../typings";

// const query = groq`
//   *[_type == "exercise"] { 
//      ...,
//     tags[]->
// }
// `;

// type Data = {
//   exercise: [];
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const excercises: [] = await sanityClient.fetch(query);
//   console.log("GET TECH EXERCISE", excercises)

//   return { excercises };
// }



