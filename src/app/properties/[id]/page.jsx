'use client';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '../../../utils/requests';
import PropertyHeaderImage from '@/components/propertiesComponents/PropertyHeaderImage';
import PropertyDetails from '@/components/propertiesComponents/PropertyDetails';
import PropertyImages from '@/components/propertiesComponents/PropertyImages';
import BookmarkButton from '@/components/propertiesComponents/BookmarkButton';
import PropertyContactForm from '@/components/propertiesComponents/PropertyContactForm';
import ShareButtons from '@/components/propertiesComponents/ShareButtons';
import Spinner from '@/components/propertiesComponents/Spinner';
import { FaArrowLeft } from 'react-icons/fa';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  FaMapMarker,
  FaCheck,
} from 'react-icons/fa';
import PropertyDetailsCard from "@/components/propertiesComponents/PropertyDetailsCard.jsx";
 import PropertyNeighborhoodDetails from "@/components/propertiesComponents/PropertyNeighborhoodDetails.jsx";
import PropertyMap from '@/components/propertiesComponents/PropertyMap';
import NewPropertyContactForm from '@/components/propertiesComponents/NewPropertyContactForm';
const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
       
        console.log('Error fetching property:')
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property Not Found
      </h1>
    );
  }


  const marketCategory = property?.forRent === true ? "For rent" : "For sale"
  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage 
              image={`${property.images[0]}`} 
              propertyTitle={property.name}
              propertyType={property.type}
              propertyLocation={property.location} 
              forRentorSale={property.forRent===true ? "For rent" : "For sale"}/>
          <div>
            <div className='w-full  py-6 px-6 bg-custom-gradient'>
              <Link
                href='/properties'
                className='text-blue-500 hover:text-blue-600 flex items-center text-white'
              >
                <FaArrowLeft className='mr-2' /> Back to Properties
              </Link>

            </div>
          </div>
          <section className='block relative lg:grid lg:grid-cols-7'>
         
         <div className="col-span-5">
            <PropertyImages images={property.images} />
         </div>
        <div  className="cols-span-2 hidden lg:flex">
           <PropertyDetailsCard property={property}/>
        </div>
         </section>
          <div className="section breadcrumps">
 
        </div>  
          <PropertyDetailsCard property={property}/>
          <div className="breadcrumb w-full bg-slate-200 py-4 px-6 lg:px-12 xl:px-24">
            <BreadcrumbDemo 
            marketCategory={marketCategory}
            propertyName={property.name}
            />
        </div>

    <div className="px-6 pt-6 py-10 lg:px-12 xl:px-12 rounded-xl  lg:max-w-[60vw] lg:py-12 xl:my-18">
       <h2 className="heading-two-property-detail font-bold !text-4xl py-4">Property description</h2>
        <p className='paragraph-big'>{property.description} </p>
     </div>   
          <div className='bg-blue-50 pt-6 py-12 lg:px-8 xl:px-12 rounded-xl px-8  lg:py-12 xl:my-24'> 
         <div className="lg:grid lg:grid-cols-2 gap-x-4 ">
              <div>
                <PropertyNeighborhoodDetails property={property} />
              <div className='bg-white/50 p-6 rounded-lg shadow-md mt-6'>
                  <h3 className='text-lg font-bold mb-6 '>Amenities</h3>

                  <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2'>
                    {property.amenities.map((amenity, index) => (
                      <li key={index}>
                        <FaCheck className='inline-block text-green-600 mr-2' /> {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              <div className="l...">
                  <h1 className="heading-two-property-detail font-bold !text-4xl ">Location</h1>
                  <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start pt-4'>
                      <FaMapMarker className='text-lg text-pink-600 mr-2' />
                      <p className='text-custom-gradient-secondary'>
                        {property.location.street}, {property.location.city}{' '}
                        {property.location.state}
                      </p>
                    </div>
                  <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                    <PropertyMap property={property} /> 
                  </div>
             </div> 
             {/* <PropertyDetails property={property} /> */}
        </div>
           
            <div className='py-10 px-6'>
              <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
                <PropertyDetails property={property} />
                <aside className='space-y-4 lg:grid lg:grid-cols-3'> 
                <div>
                <h3 className='text-xl font-bold text-center pt-2'>
                  Share This Property:
                </h3>
                <ShareButtons property={property} />
                </div>
                
                  <BookmarkButton property={property} />
                </aside>
                
                  <PropertyContactForm property={property} />
              </div>
            </div>
          </div>
          <NewPropertyContactForm agentrInfo={property.seller_info} />
        </>
      )}
    </>
  );
};
export default PropertyPage;



export function BreadcrumbDemo({marketCategory, propertyName}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">   
             <Link href='/properties'
                className='custom-text-gradient hover:text-blue-600 flex items-center'>
                <FaArrowLeft className='mr-2' /> Back to Properties
              </Link>
            </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
           {/* <BreadcrumbItem>
        <DropdownMenu>
           <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger> */}
             {/*  <DropdownMenuContent align="start">
            <DropdownMenuItem> 
              <img
                src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def4aaa72056e_arrow_right.svg"
                loading="lazy"
                alt=""
              /> 
              {marketCategory}</DropdownMenuItem>
              <DropdownMenuItem>{marketCategory == "For sale" ? "Lease" : "Sale"}</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent> 
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />*/}
        <BreadcrumbItem>
          <BreadcrumbLink href={`/properties/${marketCategory}`}>{marketCategory}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{propertyName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}