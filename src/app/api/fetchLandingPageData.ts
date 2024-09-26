import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";

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
    ourValues,
    testimonials,
    blockchain,
    contactInformation
  }
`;

type ImageType = {
  url: string;
  alt: string;
};

type LandingPageData = {
  hero: {
    meta: string;
    banner: {
      image: ImageType; // Replace 'any' with specific image type
      title: string;
    };
    tagline: string;
  };
  aboutSection: {
    coverImage: ImageType; // Replace 'any' with specific image type
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
    image: ImageType; // Replace 'any' with specific image type
  };
  gallery: {
    title: string;
    images: Array<{
      image: ImageType; // Replace 'any' with specific image type
      caption: string;
    }>;
  };
  contact: {
    image: ImageType; // Replace 'any' with specific image type
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

export default fetchLandingPageData;
