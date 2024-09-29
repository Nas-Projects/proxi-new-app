'use client';
import Link from 'next/link';
import {  useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';
// import { fetchProperty } from '../../../utils/requests';
import PropertyHeaderImage from '@/components/propertiesComponents/PropertyHeaderImage';
// import PropertyDetails from '@/components/propertiesComponents/PropertyDetails';
import PropertyImages from '@/components/propertiesComponents/PropertyImages';
import BookmarkButton from '@/components/propertiesComponents/BookmarkButton';
import PropertyContactForm from '@/components/propertiesComponents/PropertyContactForm';
import ShareButtons from '@/components/propertiesComponents/ShareButtons';
import Spinner from '@/components/propertiesComponents/Spinner';
// import PropertyGalleryCard from '@/components/propertiesComponents/PropertyGalleryCard';
import OtherProperties from '@/components/propertiesComponents/OtherProperties'
import MorgageCalculator from '@/components/propertiesComponents//MorgageCalculator'
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import CutomTable from '@/components/ui/CutomTable';
import {
  Breadcrumb,
  // BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  // DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  FaMapMarker,
  FaCheck,
} from 'react-icons/fa';
import PropertyDetailsCard from "@/components/propertiesComponents/PropertyDetailsCard.jsx";
 import PropertyNeighborhoodDetails from "@/components/propertiesComponents/PropertyNeighborhoodDetails.jsx";
 import PropertyAmenitiesDetails from "@/components/propertiesComponents/PropertyAmenitiesDetails";
//  import PropertyRatesOrPriceDetails from "@/components/propertiesComponents/PropertyRatesOrPriceDetails";
import PropertyMap from '@/components/propertiesComponents/PropertyMap';
// import NewPropertyContactForm from '@/components/propertiesComponents/NewPropertyContactForm';
const PropertyPageComponent = ({propertyData}) => {

console.log("PROPERTY_PAGE_COMPONENT", propertyData)

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      try {
       if(propertyData)
        console.log("PROPERTY_COMPONENT", propertyData)
        setProperty(propertyData);
      } catch (error) {
        console.log('Error fetching property:')
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
 
  }, [propertyData]);

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
              propertyTitle={property.name}
              image={`${property.mainImage}`} 
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
        <div className="main-container w-container">
         {/* ------ Property-Main Container */}
        <section className='block relative lg:grid lg:grid-cols-7'>
         <div className="col-span-5">
            {property.images.length > 1 && <PropertyImages images={property.images} />}
            {/* <PropertyGalleryCard images={property} /> */}
         </div>

        <div  className="cols-span-2 hidden lg:flex">
           <PropertyDetailsCard property={property} classes={'sr-only lg:not-sr-only lg:h-[fit-content] lg:!fixed z-30'}/>
        </div>
         </section>

   
       <div className="section breadcrumps">
        </div>  
        <PropertyDetailsCard property={property} classes={'min-w-[max-w-[42em] !max-w-[42em] h-[fit-content] relative  lg:sr-only'}/>

        <div className="breadcrumb w-full bg-slate-200 py-4 px-6 lg:px-12 xl:px-24">
            <BreadcrumbDemo 
              marketCategory={marketCategory}
              propertyName={property.name}
              />
          </div> 
            <div className="property-share">
              <aside className='space-y-4 lg:grid lg:grid-cols-3'> 
            <div className='inline-flex gap-x-4 py-4 mt-4 '>
              <h4 className='text-xl text-left mainText text-center py-2'>
                Share Property
              </h4>
              <ShareButtons property={property} />
              </div>
                <BookmarkButton property={property} />
              </aside>
            </div>
         <div className='my-12 bg-white/70 p-6 rounded-lg shadow-md text-center md:text-left max-w-4xl'>
          { property.rates &&  <h1 className='text-3xl font-bold mb-4'> Rates & Options</h1>}
          { property.retail && property.retail.askingPrice &&  <h1 className='text-3xl font-bold mb-4'>Asking Price <span>{property.askingPrice}</span></h1>}
          {property.category == "Commercial" &&  <CutomTable retail={property?.retail} residential={property} investement={property}/>}
        {/* <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
          Rates & Options
        </h3> */}
      {property.rates && <div className='flex flex-col md:flex-row justify-around '>
        <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
          <div className='text-gray-500 mr-2 font-bold'>Nightly</div>
          <div className='text-xl text-left sm:text-2xl font-bold text-custom-gradient'>
            {property.rates?.nightly ? (
              `$${property.rates.nightly.toLocaleString()}`
            ) : (
              <FaTimes className='text-red-700' />
            )}
          </div>
        </div>
        <div className='flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0'>
          <div className='text-gray-500 mr-2 font-bold'>Weekly</div>
          <div className='text-xl sm:text-2xl font-bold text-teal-500'>
            {property.rates?.weekly ? (
              `$${property.rates.weekly.toLocaleString()}`
            ) : (
              <FaTimes className='text-red-700' />
            )}
          </div>
        </div>
        <div className='flex items-center justify-center mb-4 pb-4 md:pb-0'>
          <div className='text-gray-500 mr-2 font-bold'>Monthly</div>
          <div className='text-xl sm:text-2xl font-bold text-custom-gradient'>
            {property.rates?.monthly ? (
              `$${property.rates.monthly.toLocaleString()}`
            ) : (
              <FaTimes className='text-red-700' />
            )}
          </div>
        </div>
      </div>}
     </div>
        <div className="px-6 pt-6 py-10 lg:px-12 xl:px-12 rounded-xl  lg:max-w-[60vw] lg:py-12 xl:-my-4">
          <h3 className="font-bold !text-4xl py-4">Property description</h3>
            <p className='paragraph-big'>{property.description} </p>
        </div>   
        <section className='relative mx-4'>
         <div className="px-4 lg:px-6 w-full lg:w-2/3 lg:h-[60vh]">
            <h3 className="font-bold !text-4xl text-left pl-2 lg:px-4">Location</h3>
            <div className='text-gray-500 mb-4 flex align-middle justify-start md:justify-start pt-4 pl-2 lg:pl-2'>
                <FaMapMarker className='text-lg text-pink-600 mr-2 lg:pl-2' />
                <p className='text-custom-gradient-secondary'>
                  {property.location.street}, {property.location.city}{' '}
                  {property.location.state}
                </p>
              </div>
            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
              <PropertyMap property={property} /> 
            </div> 
        </div> 
      
        </section>
        <section className='relative mx-4 mt-6'>
         { property?.neighborhoodDetails &&  <PropertyNeighborhoodDetails neighborhoodDetails={property. neighborhoodDetails} />}
        </section>
        {/* <section className='relative mx-4 mt-4 lg:my-2  px-4 lg:px-12'>
          <PropertyRatesOrPriceDetails property={property} />
        </section> */}
        <section className='relative mx-4 lg:my-2   z-20'>
      {  property.amenities && <PropertyAmenitiesDetails property={property} />}
        </section> 
        <section className='text-left relative mx-4 lg:my-2 z-20'> 
        <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
        <h3 className='text-lg font-bold mb-6'>Additional Amenities</h3>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2'>
          {property?.amenities &&  property.amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck className='inline-block text-green-600 mr-2' /> {amenity}
            </li>
          ))}
        </ul>
      </div>     </section> 
        
        <section className="relative">
          <MorgageCalculator/>
        </section>
        <section className='relative '>
        <PropertyContactForm property={property} />
        </section> 
       
          <div className='bg-blue-50 pt-6 py-12 lg:px-8 xl:px-12 rounded-xl px-8  lg:py-12 xl:my-24'> 
   
            {/* <div className='py-10 px-6'>
              <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
             <PropertyDetails property={property} />
             
              </div> 
            </div> */}
          </div>
         {/* --------Property--main End */}
          
        </div>
     
          {/* <NewPropertyContactForm agentrInfo={property.seller_info} /> */}
        </>
      )}
      <OtherProperties />
    </>
  );
};
export default PropertyPageComponent;



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