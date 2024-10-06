

import { aboutPageQuery } from "@/sanity/lib/queries";

import AboutPageComponent from "@/components/AboutPageComponent";
import { sanityClient } from "@/sanity/lib/client";

export default async function AboutPage() {

const aboutData = await sanityClient.fetch(aboutPageQuery, {cache:"no-store"});

  return ( <AboutPageComponent aboutData={aboutData} /> );
  
}


