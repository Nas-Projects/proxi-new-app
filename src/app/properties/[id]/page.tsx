import type { ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import {  propertyQuery } from "@/sanity/lib/queries"
import { sanityClient } from "../../../../sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";
import  PropertyPageComponent  from "@/components/propertiesComponents/PropertyPageComponent";
import type { Property as PropertyType } from "../types";
import { console } from "inspector";
import clsx from "clsx";

// export const revalidate = 60;

// export async function generateStaticParams() {
//   const property = await sanityClient.fetch(propertyQuery);
//   console.log("Post_generateStaticParams", property)
//   return property;
// }

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
) {
  const property = await sanityFetch<PropertyType>({ query: propertyQuery, params });
  console.log("metadata-property, parentoperty", property);

  const previousImages = (await parent).openGraph?.images || [];

  const builder = urlFor(sanityClient);
  const imageUrl = property.mainImage
    ? builder
        .image(property.mainImage)
        .auto("format")
        .fit("max")
        .width(1200)
        .height(630)
        .url()
    : undefined;

  // Map custom property type to a valid OpenGraph type
  // const openGraphType = property.type === "Retail" ? "Sale" : "Commercial"; // Default to 'website' if not Retail

  return {
    title: property.name, // Using the property name as the title
    description: property.description ?? "No description available.",
    publishedAt: property._createdAt, // Assuming publishedAt maps to _createdAt
    alternates: {
      canonical: `/properties/${params.id}`, // Fix: Use params.id
    },
  
    openGraph: {
      title: property.name,
      description: property.description ?? "No description available.",
      images: imageUrl ? [imageUrl, ...previousImages] : previousImages,
      // type: openGraphType, // Use valid OpenGraph type
      location: {
        street: property.location.street,
        city: property.location.city,
        state: property.location.state,
        zipcode: property.location.zipcode,
      },
      amenities: property.amenities ? property.amenities.join(", ") : "No amenities listed.",
    },
  
    // Additional metadata that includes contact info
    contact: {
      name: property.contact?.name ?? "No contact available",
      email: property.contact?.email ?? "No email available",
      phone: property.contact?.phone ?? "No phone available",
      imageUrl: property.contact?.image?.asset?.url ?? null,
    },
  
    // Property details
    propertyDetails: {
      forSale: property.forSale,
      forRent: property.forRent,
      acceptsCrypto: property.acceptsCrypto,
      isFeatured: property.isFeatured,
      views: property.views,
      daysOnMarket: property.daysOnMarket,
    },
  };
}


// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// export default async function PropertyPage({ params }: { params: { id: string } }) {
//   console.log("ID", params.id)
//   const property = await sanityFetch({ query: propertyQuery, params});
//   console.log("Post_Page_sanityFetch", property)

//   // const property: PropertyType = await sanityClient.fetch(propertyQuery, { id: params.id });
//   // const marketCategory = property?.forRent === true ? "For rent" : "For sale"

//   return (<PropertyPageComponent propertyData={ property } />);
// };


// export default async function PropertyPage({ params }: { params: { id: string } }) {
//   console.log("ID", params.id);

//   // Pass the id correctly to the query
//   const property = await sanityFetch({ query: propertyQuery, params: { id: params.id } });
  
//   if (!property) {
//     return <div>No property found.</div>; // Handle case where no property is found
//   }

//   console.log("Post_Page_sanityFetch", property);

//   return <PropertyPageComponent propertyData={property} />;
// }


export default async function PropertyPage({ params }: Props) {

  const { id } = params
  console.log("PROPERTY_ID", id)

  const property = await sanityFetch<PropertyType>({ query: propertyQuery,
    params: { id: params.id }
  })
  console.log("PROPERTY_PAGE_sanityFetch", property)

  return (
    <div className={clsx("min-h-[90vh] relative justify-center h-full")}>
      <PropertyPageComponent propertyData={property} />
    </div>
  );
}

