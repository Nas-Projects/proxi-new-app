

// "use client";
import Head from 'next/head';
import { BlogCard } from '@/components/blogs/BlogCard';
import blogsJson from '@/lib/blogsJson';
import Link from 'next/link';
import Image from 'next/image';
import { postsQuery } from "@/sanity/lib/queries";

import { sanityFetch } from "../../../sanity/lib/sanityFetch";
// import type { Post as PostType } from "./types";

import { propertiesQuery } from "../../../sanity/lib/queries";
import PropertiesPageComponent from '../../components/propertiesComponents/propertiesPageComponent';

// type Author = {
//   name: string;
//   image: {
//     asset: {
//       url: string;
//     };
//   };
//   bio: string;
//   email: string;
//   socialLinks: Array<{
//     platform: string;
//     url: string;
//   }>;
// };
// type Post = {
//   title: string;
//   file: string;
//   description: string;
//   content: string;
//   date: string;
//   datetime: string;
//   author: Author;
//   // author: { name: string; role: string; href: string; imageUrl: string };
//   imageUrl: string;
  
// };

// type SanityPost = {
//   title: string;
//   description: string | null;
//   content: string | null;
//   slug: { current: string; _type: "slug" };
//   mainImage: PostType["mainImage"];
//   imageURL: string | null;
//   authorName: string;
//   author: Author;
//   _createdAt: string;
// };


export default async function PropertiesPage() {
  const properties = await sanityFetch({ query: propertiesQuery });
  console.log("PROPERTOIES", properties);
  return <PropertiesPageComponent propertiesData={properties} />
}
