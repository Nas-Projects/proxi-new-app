import type { ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { postPathsQuery, postQuery } from "@/sanity/lib/queries"
import { sanityClient } from "../../../../sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";
import { Post } from "./Post";
import type { Post as PostType } from "../types";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await sanityClient.fetch(postPathsQuery);
  console.log("Post_generateStaticParams", posts)
  return posts;
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
) {
  const post = await sanityFetch<PostType>({ query: postQuery, params });
  console.log("Post", post);

  const previousImages = (await parent).openGraph?.images || [];

  const builder = urlFor(sanityClient);
  const imageUrl = post.mainImage
    ? builder
        .image(post.mainImage)
        .auto("format")
        .fit("max")
        .width(1200)
        .height(630)
        .url()
    : undefined;

  return {
    title: post.title,
    description: post.description ?? "",
    content: post.content ?? "",
    publishedAt: post.publishedAt,
    alternates: { canonical: `/blog/post/${params.slug}` },
    openGraph: {
      images: imageUrl ? [imageUrl, ...previousImages] : previousImages,
    },
  };
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: Props) {
  const post = await sanityFetch<PostType>({ query: postQuery, params });
  console.log("Post_Page_sanityFetch", post)

  // const {
  //   // title,
  //   // publishedAt,
  //   author: {
  //     name,
  //     bio,
  //     email,
  //     image: { asset: { url: authorImageUrl } },
  //     socialLinks, // Access socialLinks directly
  //   },
  //   content,
  //   mainImage: {
  //     asset: { url: mainImageUrl }
  //   }
  // } = post;

  return <Post post={post} />;

}