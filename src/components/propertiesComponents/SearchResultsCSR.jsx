

"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Spinner from './Spinner.jsx';
// import SearchResultsCard from '../propertiesComponents/SearchResultsCard';
// import PropertySearchForm from './PropertySearchForm.jsx';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image.js';
import BlurImage from '../blur-image';

function SearchResultsCSR() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(`/api/properties/search`);
        console.log("searchResults", res);
    
        if (res.status === 200) {
          const data = await res.json();
          console.log("SEARCH_DATA_RETURNED_FROM_API", data);  // Log the data to inspect it
    
          // Decode the propertyType from the URL to handle spaces and special characters
          let decodedPropertyType = decodeURIComponent(propertyType || '').trim().toLowerCase();
          console.log("DECODED_PROPERTY_TYPE", decodedPropertyType);
    
          // Defining a mapping between URL query params and actual property types
          const typeMapping = {
            sale: "Investment Sale",
            retail: "Retail",
            office: "Office",
            rental: "Rental",
            residential: "Residential",
            commercial: "Commercial",
            studio: "Studio",
          };
    
          // Map the decoded propertyType to the correct property type name
          const mappedPropertyType = typeMapping[decodedPropertyType] || decodedPropertyType;
          console.log("MAPPED_PROPERTY_TYPE", mappedPropertyType);  // Log the mapped property type
    
          // Filter properties based on the mapped propertyType
          const filteredProperties = data.filter((property) => {
            console.log("PROPERTY_TYPE", property.type);  // Log the type of each property to debug matching
  
            // Handle "All" or empty cases where we return all properties
            if (mappedPropertyType === "all" || mappedPropertyType === "") {
              return true;  // Return all properties
            }
  
            // Comparing property.type directly with the mapped property type
            return property.type.toLowerCase() === mappedPropertyType.toLowerCase();
          });
    
          console.log("SEARCH_DATA_FILTERED", filteredProperties);  // Log the filtered properties
          setProperties(filteredProperties);
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
  
  // useEffect(() => {
  //   const fetchSearchResults = async () => {
  //     try {
  //       const res = await fetch(`/api/properties/search`);
  //       console.log("searchResults", res);
    
  //       if (res.status === 200) {
  //         const data = await res.json();
  //         console.log("SEARCH_DATA_RETURNED_FROM_API", data);
    
  //         // Decode the propertyType from the URL to handle spaces and special characters
  //         let decodedPropertyType = decodeURIComponent(propertyType || '').trim().toLowerCase();
  //         console.log("DECODED_PROPERTY_TYPE", decodedPropertyType);
    
  //         // Defining a mapping between URL query params and actual property types
  //         const typeMapping = {
  //           sale: "Investment Sale",
  //           retail: "Retail",
  //           office: "Office",
  //           rental: "Rental",
  //           residential: "Residential",
  //           commercial: "Commercial",
  //           studio: "Studio",
  //         };
    
  //         // Map the decoded propertyType to the correct property type name
  //         const mappedPropertyType = typeMapping[decodedPropertyType] || decodedPropertyType;
  //         console.log("MAPPED_PROPERTY_TYPE", mappedPropertyType);
    
  //         // Filter properties based on the mapped propertyType
  //         const filteredProperties = data.filter((property) => {
  //           // Handle "All" or empty cases where we return all properties
  //           if (mappedPropertyType === "all" || mappedPropertyType === "") {
  //             return true; // Return all properties if propertyType is "All"
  //           }
    
  //           console.log("PROPERTY_TYPE", property.type, "MAPPED_SEARCHED_PROPERTY_TYPE", mappedPropertyType);
    
  //           // Comparing property.type directly with the mapped property type
  //           return property.type === mappedPropertyType;
  //         });
    
  //         console.log("SEARCH_DATA_FILTERED", filteredProperties);
  //         setProperties(filteredProperties);
  //       } else {
  //         setProperties([]);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
    
  //   fetchSearchResults();
  // }, [location, propertyType]);
  
  // useEffect(() => {
  //   const fetchSearchResults = async () => {
  //     try {
  //       const res = await fetch(`/api/properties/search`);
  //       console.log("searchResults", res);
  
  //       if (res.status === 200) {
  //         const data = await res.json();
  //         console.log("SEARCH_DATA_RETURNED_FROM_API", data);
  
  //         // Decode the propertyType from the URL to handle spaces and special characters
  //         let decodedPropertyType = decodeURIComponent(propertyType || '').trim();
  //         console.log("DECODED_PROPERTY_TYPE", decodedPropertyType);
  //         if (decodedPropertyType=="sale"){
  //           decodedPropertyType = "Investment Sale"
  //         }

  
  //         // Filter properties based on propertyType
  //         const filteredProperties = data.filter((property) => {
  //           if (decodedPropertyType === "All" || decodedPropertyType === "") {
  //             return true; // Return all properties
  //           }
  
  //           console.log("PROPERTY_TYPE", property.type.toLowerCase(), "DECODED_SEARCHED_PROPERTY_TYPE", decodedPropertyType.toLowerCase());
  
  //           // Map specific terms to match the property's type
  //           const typeMapping = {
  //             sales: "Investment Sale",
  //             retail: "Retail",
  //             office: "Office",
  //             rental: "Rental",
  //             residential: "Residential",
  //             commercial: "Commercial",
  //             studio: "Studio",
  //           };
  
  //           // Match the property type using the typeMapping object
  //           return property.type.toLowerCase() == typeMapping[decodedPropertyType.toLowerCase()];
  //         });
  
  //         console.log("SEARCH_DATA_FILTERED", filteredProperties);
  //         setProperties(filteredProperties);
  //       } else {
  //         setProperties([]);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchSearchResults();
  // }, [location, propertyType]);
  
  if (loading) {
    return <Spinner loading={loading} />;
  }

  // useEffect(() => {
  //   const fetchSearchResults = async () => {
  //     try {
  //       const res = await fetch(
  //         `/api/properties/search?location=${location}&propertyType=${propertyType}`
  //       );
  //       console.log("searchResults Response:", res);
  
  //       if (res.status === 200) {
  //         const data = await res.json();
  //         console.log("Fetched Properties:", data);
  //         setProperties(data);
  //       } else {
  //         setProperties([]);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchSearchResults();
  // }, [location, propertyType]);

  // useEffect(() => {
  //   const fetchSearchResults = async () => {
  //     try {
  //       const res = await fetch(
  //         `/api/properties/search?location=${location}&propertyType=${propertyType}`
  //       );
  //       console.log("searchResults", res)
  //       if (res.status === 200) {
  //         const data = await res.json();
  //         setProperties(data);
  //       } else {
  //         setProperties([]);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSearchResults();
  // }, [location, propertyType]);

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
          className='flex items-center hover:underline mb-12 max-w-xl'
        >
          <FaArrowAltCircleLeft className='mr-2   h-8 w-8 hover:text-custom-gradient  ' /> Back To Properties
        </Link>
        <h2 className='text-xl sm:text-2xl mb-4 lg:text-5xl mainText inline-flex gap-x-4'>
          {location && <span> - {location}</span>} 
          {propertyType && 
            <span className='text-custom-gradient'>
              {propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}
            </span>} <div className="text-slate-500">search results
              </div>
        </h2>
        {properties.length === 0 ? (
          <p className='lg:text-3xl text-slate-600'>
            No search results found for {location.charAt(0).toUpperCase() + location.slice(1)} {propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}
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

  // href={`/properties/${property._id}`}> 

export const SearchResultsCard = ({ property }) => {
  console.log("PropertyCard", property

  )
  // <Link className="property h-[520px] w-[379px] min-[600px]:h-[420px] min-[600px]:w-[30%] md:h-[280px] md:h-[470px] md:w-[319px] lg:md:h-[500px] xl:w-[299px]" href={`properties/${property._id}`}>
 return ( <div role="listitem" className="collection-item w-dyn-item">
          <Link href={`/properties/${property._id}`}
           style={{  backgroundImage:`url(${urlFor(property.images[0].asset).url()})`  }}
            
              aria-current="page"
              className="property house-card w-inline-block w--current">
              <div className="house-content">
                <div className="house-title">{property.name}</div>
                <div className="house-card-divider" />
                <div className="house-detail-wrap">
                    <div className="detail-block white-block">
                      <div className="icon paragraph-small">
                        <img
                          src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def8171720524_place.svg"
                          loading="lazy"
                          alt=""
                          className="image"
                        />
                      </div>
                      <p className="paragraph-small">  {property.location.city}, {property.location.zipcode}</p>
                    </div>
                  <div className="detail-block white-block">
                    <div className="icon paragraph-small">
                    <BlurImage
                        loading="lazy"
                        alt=""
                        className="image"
                        height={200}
                        width={200}
                        style={{ color: 'transparent' }}
                        src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199defda7c72052e_door_back.svg"
                      />
                    </div>
                    <div className="wrap-detail-value">
                      <p className="paragraph-small">  {property?.size ? property.size : property?.retail.psf || property.retail.size || property.retail.squaref_feet && property?.retail.size}</p>
                      <p className="paragraph-small">ft2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay house" />
            </Link>
          </div>)
          }




