

"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Spinner from './Spinner.jsx';
// import SearchResultsCard from '../propertiesComponents/SearchResultsCard';
// import PropertySearchForm from './PropertySearchForm.jsx';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function SearchResultsCSR() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location, propertyType]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <section className='px-4 py-6 py-4 min-h-[60vh]'>
       {/* <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div> */}
      <div className='container-xl lg:container m-auto px-4 py-6'>
        <Link
          href='/properties'
          className='flex items-center hover:underline mb-3 max-w-xl'
        >
          <FaArrowAltCircleLeft className='mr-2 mb-1  h-8 w-8 hover:text-custom-gradient  ' /> Back To Properties
        </Link>
        <h1 className='text-xl sm:text-2xl mb-4 lg:text-5xl mainText inline-flex gap-x-4'>
          {location && <span> - {location}</span>} 
          {propertyType && <span className='text-custom-gradient'> {propertyType}</span>} Results
        </h1>
        {properties.length === 0 ? (
          <p className='lg:text-3xl text-slate-600'>
            No search results found for {location} {propertyType}
          </p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-12 lg:pt-12 pb-24'>
            {properties.map((property) => (
              <SearchResultsCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default SearchResultsCSR;
// export default SearchResultsCSR;

// const SearchResultsComponent = () => {
//   const searchParams = useSearchParams();
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const location = searchParams.get('location');
//   const propertyType = searchParams.get('propertyType');

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const res = await fetch(
//           `/api/properties/search?location=${location}&propertyType=${propertyType}`
//         );

//         if (res.status === 200) {
//           const data = await res.json();
//           setProperties(data);
//         } else {
//           setProperties([]);
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSearchResults();
//   }, [location, propertyType]);

//   return (
//     <>
//       <section className='bg-custom-gradient px-4 py-12 lg:py-12'>
//         <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
//           <PropertySearchForm />
//         </div>
//       </section>
//       {loading ? (
//         <Spinner loading={loading} />
//       ) : (
//         <section className='px-4 py-6 py-4 min-h-[60vh]'>
//           <div className='container-xl lg:container m-auto px-4 py-6'>
//             <Link
//               href='/properties'
//               className='flex items-center hover:underline mb-3 max-w-xl'
//             >
//               <FaArrowAltCircleLeft className='mr-2 mb-1  h-8 w-8 hover:text-custom-gradient  ' /> Back To Properties
//             </Link>
//             <h1 className='text-xl sm:text-2xl mb-4 lg:text-5xl mainText inline-flex gap-x-4'>
//               {location && <span> - {location}</span>} 
//               {propertyType && <span className='text-custom-gradient'> {propertyType}</span>} Results
//             </h1>
//             {properties.length === 0 ? (
//               <p className='lg:text-3xl text-slate-600'>
//                 No search results found for {location} {propertyType}
//               </p>
//             ) : (
//               <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-12 lg:pt-12 pb-24'>
//                 {properties.map((property) => (
//                   <SearchResultsCard key={property._id} property={property} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default SearchResultsComponent;


// const SearchResultsComponent = ({ property }) => {
//   const searchParams = useSearchParams();

//   const [properties, setProperties] = useState([]);
//   const [searchedLocation, setSearchedLocation] = useState('');
//   const [searchedRType, setSearchedType] = useState('');
//   const [loading, setLoading] = useState(true);

//   const location = searchParams.get('location');
//   const propertyType = searchParams.get('propertyType');

//   //  console.log("Property type: " + propertyType)

//   useEffect(() => {
    
//     const fetchSearchResults = async () => {
//       console.log('PROPERTY_REQUEST_Fetching results for location:', location, 'and property type:', propertyType);
//       try {
//         const res = await fetch(
//           `/api/properties/search?location=${location}&propertyType=${propertyType}`
//         );
//         if(propertyType){
//           setSearchedType(propertyType);
//         }
//         console.log("Property type: " + propertyType)
//         if (res.status === 200) {
//           const data = await res.json();
//           setProperties(data);
//         } else {
//           setProperties([]);
//         }
//         if(location !== "location"){
//         setSearchedLocation(location);
//         }
      
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSearchResults();
//   }, [location, propertyType]);

//   return (
//     <>
//       <section className='bg-custom-gradient px-4 py-12 lg:py-12'>
//         <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
//           <PropertySearchForm />
//         </div>
//       </section>
//       {loading ? (
//         <Spinner loading={loading} />
//       ) : (
//         <section className='px-4 py-6 py-4 min-h-[60vh]'>
//           <div className='container-xl lg:container m-auto px-4 py-6'>
//             <Link
//               href='/properties'
//               className='flex items-center hover:underline mb-3 max-w-xl'
//             >
//               <FaArrowAltCircleLeft className='mr-2 mb-1  h-8 w-8 hover:text-custom-gradient  ' /> Back To Properties
//             </Link>
//             <h1 className='text-xl sm:text-2xl mb-4 lg:text-5xl mainText inline-flex gap-x-4'> <span className="text-slate-400"> {location &&  <span> - {location} </span> } </span>  {propertyType && <span className="text-custom-gradient"> {propertyType}<span className='text-custom-gradient pr-3'></span></span>}  Results</h1>
//             {properties.length === 0 ? (
//               <p className='lg:text-3xl text-slate-600'>No search results found  for <span>{searchedLocation && searchedLocation} </span> <span>{searchedRType && searchedRType}</span>
//                <div className=" inline-flex pl-2">
//                 {propertyType && <span className="text-custom-gradient"> {propertyType}</span>}
//                   <span className='text-custom-gradient pr-3'>&apos;s</span>
//               in {location && <span className='text-custom-gradient pl-3'>{location}</span>}
//                 </div>
//               </p>
//             ) : (
//               <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-12 lg:pt-12 pb-24 '>
//                 {properties.map((property) => (
//                   <SearchResultsCard key={property._id} property={property} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}
//     </>
//   );
// };
// export default SearchResultsComponent;



export const SearchResultsCard = ({ property }) => {
  console.log("PropertyCard", property

  )
  // <Link className="property h-[520px] w-[379px] min-[600px]:h-[420px] min-[600px]:w-[30%] md:h-[280px] md:h-[470px] md:w-[319px] lg:md:h-[500px] xl:w-[299px]" href={`properties/${property._id}`}>
 return ( <Link className="property h-[420px] max-[439px]:!w-[85vw] !w-[329px]  max-[1351px]:!w-[299px] max-[1380px]:!w-[309px]  max-[1550px]:!w-[300px]  relative isolate flex flex-col justify-end  rounded-2xl bg-gray-900  pb-8  mx-2" href={`/properties/${property._id}`}> 
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
      <p className="inline-flex gap-x-4 ">
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
        </svg>
        <span className="-mt-2">{property.square_feet}</span>
      </p>
    </div>
  </div>
</Link>

)}




