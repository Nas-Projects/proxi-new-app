'use client'

import SectionWrapper from "../../hoc/SectionWrapper";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Spinner from '@/components/propertiesComponents/Spinner';
import Pagination from '@/components/propertiesComponents/Pagination';
import { SelectButton } from '@/components/select/SelectButton';
import  CardGrid  from '@/components/cards/CardGrid.jsx';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@medusajs/ui";
// Reusable PropertyCard component
const PropertyCard = ({ property }) => (
  // <Link className="property h-[520px] w-[379px] min-[600px]:h-[420px] min-[600px]:w-[30%] md:h-[280px] md:h-[470px] md:w-[319px] lg:md:h-[500px] xl:w-[299px]" href={`properties/${property._id}`}>
  <Link className="property h-[520px] w-[379px] sm:w-[289px] relative isolate flex flex-col justify-end  rounded-2xl bg-gray-900  pb-8 min-[1400px]:w-[309px] xl:sm:w-[359px] " href={`properties/${property._id}`}> 
  <img
    alt={property.name}
    loading="lazy"
    width={property.imageWidth}
    height={property.imageHeight}
    decoding="async"
    data-nimg={1}
    style={{ color: 'transparent' }}
    src={`${property.images[0]}`}
  />
  <div className="propertyInfo">
    <h2 className="text-white text-[1.1rem] mt-2 font-bold text-left">{property.name}</h2>
    <hr className="text-gray-400"/>
    <div className="propLocDist">
      <p className="inline-flex space-x-2 -mt-2">
        <svg className="mr-2 mt-[0.4em]" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
        </svg>
        {property.location.city}, {property.location.zipcode}
      </p>
      <p className="">
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
        </svg>
        {property.size}
      </p>
    </div>
  </div>
</Link>

);


export default PropertyCard
