// utils/fetchLandingPageData.ts
import { groq } from "next-sanity";
import { sanityClient } from "../sanity/lib/client";

const query = groq`
  *[_type == "landingPage"][0] {
    hero,
    about,
    elevatorPitch,
    pricing{
      title,
      description,
      plans[]->{
        title,
        price,
        description,
        details,
        paymentMode
      }
    },
    benefits,
    testimonials,
    gallery,
    contact
  }
`;

type LandingPageData = {
  hero: {
    meta: string;
    banner: {
      image: any;
      title: string;
    };
    tagline: string;
  };
  about: {
    coverImage: any;
    tagline: string;
    title: string;
    description: string;
  };
  elevatorPitch: {
    title: string;
  };
  pricing: {
    title: string;
    description: string;
    plans: Array<{
      title: string;
      price: string;
      benefits: string[];
    }>;
  };
  benefits: {
    title: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    image: any;
  };
  gallery: {
    title: string;
    images: Array<{
      image: any;
      caption: string;
    }>;
  };
  contact: {
    image: any;
  };
};

 const fetchLandingPageData = async (): Promise<LandingPageData | null> => {
  try {
    const landingPageData = await sanityClient.fetch(query);
    return landingPageData;
  } catch (error) {
    console.error("Error fetching landing page data:", error);
    return null;
  }
};

export  default  fetchLandingPageData 