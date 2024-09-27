

import { aboutPageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import AboutPageComponent from "@/components/AboutPageComponent";

export default async function AboutPage() {
  const aboutData = await sanityFetch({ query: aboutPageQuery });
  return ( <AboutPageComponent aboutData={aboutData} /> );
  
}


