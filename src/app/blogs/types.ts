import type { PortableTextBlock } from "next-sanity";


export type Post = {
  title: string;
  slug: string;
  description: string | object;
  content: object;
  publishedAt: string;
  author: {
    name: string;
    bio: string;
    email: string;
    image: {
      asset: {
        _ref: string;
        _type: "reference";
      };
    } | null;
    socialLinks: { // Define the structure of socialLinks
      platform: string;
      url: string;
    }[] | null; // Array of social link objects or null
  };
  mainImage: {
    _type: "image";
    alt: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  } | null;
  body: PortableTextBlock[] | null;
  authorName: string | null;
  authorImage: string | null;
  authorTwitter: string | null;
};
