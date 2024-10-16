"use client"

// import { useEffect, useState } from 'react';
// import PropertyCard from './PropertiesListCard'; // Make sure this import is correct
import SectionHeader from './SectionHeader';
import LoadingDots from '../LoadingDots';
import Link from 'next/link';
import BlurImage from '../blur-image';
import { urlFor } from '@/sanity/lib/image';

const PropertiesForSale = ({properties}) => {
  let loading =true
  // const [properties, setProperties] = useState([]);
   properties?.length ? loading = false : loading 
   console.log("PROPERTIES FOR SALES", properties);
  // const page = 1;
  // const pageSize = 4;

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     const response = await fetch(`/api/properties/type/forSale?page=${page}&pageSize=${pageSize}`);
  //     const data = await response.json();
  //     console.log("PROPERTIES_RESPONSE: ", data.properties);
  //     setProperties(data.properties);
  //     setLoading(false); // Set loading to false after fetching data
  //   };

  //   fetchProperties();
  // }, []);

  if (loading) {
    return <div className='py-64 px-64 justify-center content-center'><LoadingDots /></div>; // Show loading dots while loading
  }

  return (
    <div className="property-list mt-[2vh]  sm:mt-[57vh] lg:mt-[6vh] 
    max-auto mx-4 md:mx-8 lg:mx-[0] xl:mx-[0em] min-[1600px]:mx-[0em] justify-center">
      <SectionHeader
        title="Properties For Sale"
        subtitle="Find the right location"
        description="We believe Proxy Realestatecan make the world a much better place by choosing the right houses for the right people."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 px-4 xl:mx-12 xl:mt-[-3em]">
        {properties.map((property) => (
          <PropertyCard property={property} key={property._id} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesForSale;


export const PropertyCard = ({ property }) => {
  const firstImage = property.images?.[0].asset.url || property.mainImage 
  return(
  
  // <Link className="property h-[520px] w-[379px] min-[600px]:h-[420px] min-[600px]:w-[30%] md:h-[280px] md:h-[470px] md:w-[319px] lg:md:h-[500px] xl:w-[299px]" href={`properties/${property._id}`}>
 <Link className="group shadow-md hover:shadow-2xl mb-4 relative property h-[280px] lg::w-[379px] sm:w-[289px] min-[1400px]:w-[309px] xl:sm:w-[359px] relative isolate flex flex-col justify-end  rounded-2xl bg-gray-900  pb-8" 
     href={`properties/${property._id}`}> 
  <BlurImage className="grroup-hover:hover:scale-110 absolute top-0 inset-0 pb-[1em]"
    alt={property.name}
    loading="lazy"
    width={property.imageWidth || 800}
    height={property.imageHeight || 600}
    decoding="async"
    data-nimg={1}
    style={{ color: 'transparent' }}
    // src={`${property.images[0]}`}
    src={firstImage ? urlFor(firstImage).url() : property.mainImage} 
  />
  <div className="propertyInfo bg-white !pt-0">
    <div className="title inline-flex gap-x-5 max-h-[2em]">
      <h2 className="text-white text-[1.1rem] mt-2 font-bold text-left mainText flex">{property.name} 
      <img src="/arrow-topblue.svg"
       loading="lazy"
       alt="" 
       className="icon-cta !h-6 !w-6" />
   </h2>   </div>
    <hr className="text-gray-200"/>
    <div className="propLocDist mainText max-h-[3em]">
      <p className="inline-flex space-x-2 -mt-4">
        <svg className="mr-2 mt-[0.4em]" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
        </svg>
        {property.location.city}, {property.location.zipcode}
      </p>
      {/* <p className="">
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
        </svg>
        {property.size}
      </p> */}
    </div>
  </div>
</Link>

);
}

