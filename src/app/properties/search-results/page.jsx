'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
// import PropertyCard from '@/components/propertiesComponents/PropertyCard';
import PropertyListCard from '@/components/propertiesComponents/PropertiesListCard'

import Spinner from '@/components/propertiesComponents/Spinner';
import PropertySearchForm from '@/components/propertiesComponents/PropertySearchForm.jsx'

const SearchResultsPage = () => {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState('');
  const [searchedRType, setSearchedType] = useState('');
  const [loading, setLoading] = useState(true);

  const location = searchParams.get('location');
  const propertyType = searchParams.get('propertyType');

  //  console.log("Property type: " + propertyType)

  useEffect(() => {
    
    const fetchSearchResults = async () => {
      console.log('PROPERTY_REQUEST_Fetching results for location:', location, 'and property type:', propertyType);
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );
        if(propertyType){
          setSearchedType(propertyType);
        }
        console.log("Property type: " + propertyType)
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]);
        }
        if(location !== "location"){
        setSearchedLocation(location);
        }
      
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location, propertyType]);

  return (
    <>
      <section className='bg-custom-gradient px-4 py-12 lg:py-12'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <section className='px-4 py-6 py-4 min-h-[60vh]'>
          <div className='container-xl lg:container m-auto px-4 py-6'>
            <Link
              href='/properties'
              className='flex items-center hover:underline mb-3 max-w-xl'
            >
              <FaArrowAltCircleLeft className='mr-2 mb-1  h-8 w-8 hover:text-custom-gradient  ' /> Back To Properties
            </Link>
            <h1 className='text-xl sm:text-2xl mb-4 lg:text-5xl mainText inline-flex gap-x-4'> <span className="text-slate-400"> {location &&  <span> - {location} </span> } </span>  {propertyType && <span className="text-custom-gradient"> {propertyType}<span className='text-custom-gradient pr-3'></span></span>}  Results</h1>
            {properties.length === 0 ? (
              <p className='lg:text-3xl text-slate-600'>No search results found  for <span>{searchedLocation && searchedLocation} </span> <span>{searchedRType && searchedRType}</span>
               <div className=" inline-flex pl-2">
                {propertyType && <span className="text-custom-gradient"> {propertyType}</span>}
                  <span className='text-custom-gradient pr-3'>&apos;s</span>
              in {location && <span className='text-custom-gradient pl-3'>{location}</span>}
                </div>
              </p>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-12 lg:pt-12 pb-24 '>
                {properties.map((property) => (
                  <PropertyListCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
export default SearchResultsPage;
