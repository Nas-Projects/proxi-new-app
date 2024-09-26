'use client'

import SectionWrapper from "../../hoc/SectionWrapper";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Spinner from '@/components/propertiesComponents/Spinner';
// import Pagination from '@/components/propertiesComponents/Pagination';
import  SelectButton from '@/components/select/SelectButton';
// import  CardGrid  from '@/components/cards/CardGrid.jsx';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@medusajs/ui";


const PropertyCard = ({ property }) => (
  <Link className="property" href={`properties/${property.id}`}>
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
    <div className="propertyInfo slide-animation">
      <h2 className="text-white text-[1.1rem] font-bold">{property.name}</h2>
      <hr />
      <div className="propLocDist">
        <p className="inline-flex space-x-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
          {property.location.city}, {property.location.zipcode}
        </p>
        <p>
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
          </svg>
          {property.size}
        </p>
      </div>
    </div>
  </Link>
);

// app/properties/page.jsx



// import Filters from '@/components/Filters';

const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    location: '',
    name: '',
    description: '',
    priceFrom: '',
    priceTo: '',
    size: '',
    type: '',
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/properties?page=1&pageSize=6&${new URLSearchParams(filters)}`);
        // console.log("PROPERTIESS_PAGE_SIZE: ",  response.json())
        const data = await response.json();
        console.log("PROPERTIESS_PAGE_SIZE: ", data)
        setProperties(data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [filters]); // Re-fetch properties whenever filters change

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h1>Properties</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="property-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;



// Arrays for Locations, Property Types, and Sizes
const locations = ["New York", "Los Angeles", "Austin", "Phoenix", "San Francisco", "Miami", "Lost Angeles", "Chicago", "Houston", "Phoenix","Seattle", "Miami", "Denver", "Boston",  "Brooklyn", "Queens"];
const propertyTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
  "Multifamily",
  "Office",
  "Retail",
  "Mixed-Use",
  "Hospitality",
  "Agricultural",
  "Special Purpose",
  "Vacant Land",
  "Apartment",
  "Studio",
  "Chalet",
  "Condo",
  "Co-op",
  "Condominium",
  "Townhouse",
  "Cottage Or Cabin",
];
const sizes = ["< 1000 sqft", "1000-2000 sqft", "2000-3000 sqft", "3000+ sqft"];

// Filter Component
export const Filters = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      size: '',
      priceFrom: '',
      priceTo: '',
    });
  };

  // Clear a specific filter, e.g., location
  const clearLocationFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: ''
    }));
  };

  return (
    <div className="filterSection my-4 lg:my-8 container-navbar">
      <div className="filterFields space-between lg:flex   lg:space-x-24 xl:space-x-44">
        <div className="filterFieldsOne">
          <SelectButton
            label="Location"
            name="location"
            items={["All Locations", ...locations]} 
            handleInputChange={handleInputChange}
            value={filters.location} // Bind the value to the filters state
          />
          <SelectButton className="text-left"
            label="Type"
            name="type"
            items={["All Types", ...propertyTypes]} 
            handleInputChange={handleInputChange}
            value={filters.type} // Bind the value to the filters state
          />
          <SelectButton
            label="Size"
            name="size"
            items={["All ", ...sizes]} 
            handleInputChange={handleInputChange}
            value={filters.size} // Bind the value to the filters state
          />
        </div>
        <div className="right-top-filters ">
          <div className="w-form">
             <div className="form-price-inputs">
              <div className="gap-[12px] flex">
                <div className="input-wrap filter-input">
                <Label htmlFor="price-from" className="text-left block text-gray-700 !font-bold mb-2">Price from</Label>
                   <Input 
                    type="text"
                    id="price-from"
                    placeholder="$1000"
                    name="priceFrom"
                    value={filters.priceFrom}
                    onChange={handleInputChange}
                    className="filter-text-field bg-white"
                  />
                 
                </div>
                <div className="input-wrap filter-input">
                <Label htmlFor="price-to" className="text-left block text-gray-700 !font-bold mb-2">Price to</Label>
                <Input 
                    type="text"
                    id="price-to"
                    placeholder="$10000000"
                    name="proceTo"
                    onChange={handleInputChange}
                    value={filters.priceFrom} 
                    className="bg-white"
                    // Bind the value to the filters state
                  />
                  
                </div>
              </div>
              <div className="space-32" />
              <div className="cta-wrap-price-inputs">
                <Button  onClick={clearFilters} className="dark-link w-inline-block font-bold">
                  <div>Clear filters</div>
                </Button>
                <Button
                  type="submit"
                  data-wait="Please wait..."
                  className="cta filter-results  !bg-[#0f1841] text-white"
                  defaultValue="Filter results"
                >
                    Filter result
                </Button>
              </div>
            </div>
            <div
              className="success-message w-form-done"
              tabIndex={-1}
              role="region"
              aria-label="Email Form success"
            >
              <div>Learn how you can make filters functional in our documentation</div>
            </div>
            <div
              className="w-form-fail sr-only"
              tabIndex={-1}
              role="region"
              aria-label="Email Form failure"
            >
              <div> "Oops! Something went wrong while submitting the form.
            </div>
            </div>
          </div>

        </div>

        {/* <div className="filterFieldsTwo inline-flex">
          <div className="price">
            <Label htmlFor="price-to">From $:</Label>
            <Input
                type="text"
                id="price-from"
                placeholder="$1000"
                name="priceFrom"
                value={filters.priceFrom}
                onChange={handleInputChange}
              />
           
          </div>
          <div className="price">
          <Label htmlFor="price-to">To $:</Label>
            <Input 
              type="text"
              id="price-from"
              placeholder="$10000000"
              name="proceTo"
              onChange={handleInputChange}
              value={filters.priceFrom} // Bind the value to the filters state
            />
          </div> 
        <button className="cta" onClick={clearFilters}>Clear All Filters</button>
          <button onClick={clearLocationFilter}>Clear Location Filter</button> 
        </div> */}
      </div>
    </div>
  );
};




// const PropertiesPage = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(6);
//   const [totalItems, setTotalItems] = useState(0);

//   const [filters, setFilters] = useState({
//     location: '',
//     type: '',
//     size: '',
//     priceFrom: '',
//     priceTo: '',
//   });

//   const [filteredProperties, setFilteredProperties] = useState([]);

//   // Fetch properties on page load
//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const res = await fetch(
//           `/api/properties?page=${page}&pageSize=${pageSize}`
//         );

//         if (!res.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const data = await res.json();
//         setProperties(data.properties);
//         setTotalItems(data.total);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, [page, pageSize]);

//   // Filtering logic
//   // useEffect(() => {
//   //   let filtered = properties;
  
//   //   // Filter by location (using city)
//   //   if (filters.location) {
//   //     filtered = filtered.filter((property) =>
//   //       property.location.city.toLowerCase().includes(filters.location.toLowerCase())
//   //     );
//   //   }
  
//   //   // Filter by size (using square_feet)
//   //   // if (filters.size) {
//   //   //   const sizeRange = filters.size.split("-"); // Assuming sizes are formatted like "1000-2000 sqft"
//   //   //   if (sizeRange.length === 2) {
//   //   //     const [minSize, maxSize] = sizeRange.map(Number);
//   //   //     filtered = filtered.filter((property) =>
//   //   //       property.square_feet >= minSize && property.square_feet <= maxSize
//   //   //     );
//   //   //   } else if (filters.size.includes("<")) {
//   //   //     const maxSize = Number(filters.size.replace("<", ""));
//   //   //     filtered = filtered.filter((property) =>
//   //   //       property.square_feet <= maxSize // less than or equal to maxSize
//   //   //     );
//   //   //   } else if (filters.size.includes("+")) {
//   //   //     const minSize = Number(filters.size.replace("+", ""));
//   //   //     filtered = filtered.filter((property) =>
//   //   //       property.square_feet >= minSize // greater than or equal to minSize
//   //   //     );
//   //   //   }
//   //   // }
//   //   // Filter by size (using square_feet)
//   //   if (filters.size) {
//   //     const sizeRange = filters.size.split("-");
      
//   //     if (sizeRange.length === 2) {
//   //       const [minSize, maxSize] = sizeRange.map(Number);
//   //       filtered = filtered.filter((property) =>
//   //         property.square_feet >= minSize && property.square_feet <= maxSize
//   //       );
//   //     } else if (filters.size.includes("<")) {
//   //       const maxSize = Number(filters.size.replace("<", ""));
//   //       filtered = filtered.filter((property) =>
//   //         property.square_feet <= maxSize // less than or equal to maxSize
//   //       );
//   //     } else if (filters.size.includes("+")) {
//   //       const minSize = Number(filters.size.replace("+", ""));
//   //       filtered = filtered.filter((property) =>
//   //         property.square_feet >= minSize // greater than or equal to minSize
//   //       );
//   //     }
//   //   }

  
//   //   // Filter by type
//   //   if (filters.type) {
//   //     filtered = filtered.filter((property) =>
//   //       property.type.toLowerCase().includes(filters.type.toLowerCase())
//   //     );
//   //   }
  
//   //   if (filters.priceFrom || filters.priceTo) {
//   //     filtered = filtered.filter((property) => {
//   //       let price = 0;
        
//   //       // Prioritize monthly rate, then weekly, then fallback to a sale price if any
//   //       if (property.rates?.monthly) {
//   //         price = property.rates.monthly;
//   //       } else if (property.rates?.weekly) {
//   //         price = property.rates.weekly * 4; // Convert weekly rate to a monthly equivalent
//   //       } else if (property.price) {
//   //         price = property.price;
//   //       }
        
//   //       const matchesPriceFrom = filters.priceFrom ? price >= Number(filters.priceFrom) : true;
//   //       const matchesPriceTo = filters.priceTo ? price <= Number(filters.priceTo) : true;
    
//   //       return matchesPriceFrom && matchesPriceTo;
//   //     });
//   //   }
    
    
//   //   // Set filtered properties or show a message if none match
//   //   if (filtered.length === 0) {
//   //     setFilteredProperties([]);
//   //   } else {
//   //     setFilteredProperties(filtered);
//   //   }
//   // }, [filters, properties]);
  
//   useEffect(() => {
//     let filtered = properties;
  
//     // Filter by location (using city)
//     if (filters.location) {
//       filtered = filtered.filter((property) =>
//         property.location.city.toLowerCase().includes(filters.location.toLowerCase())
//       );
//     }
  
//     // Filter by size (using square_feet)
//     if (filters.size) {
//       const sizeRange = filters.size.split("-");
      
//       if (sizeRange.length === 2) {
//         const [minSize, maxSize] = sizeRange.map(Number);
//         filtered = filtered.filter((property) =>
//           property.square_feet >= minSize && property.square_feet <= maxSize
//         );
//       } else if (filters.size.includes("<")) {
//         const maxSize = Number(filters.size.replace("<", ""));
//         filtered = filtered.filter((property) =>
//           property.square_feet <= maxSize // less than or equal to maxSize
//         );
//       } else if (filters.size.includes("+")) {
//         const minSize = Number(filters.size.replace("+", ""));
//         filtered = filtered.filter((property) =>
//           property.square_feet >= minSize // greater than or equal to minSize
//         );
//       }
//     }
  
//     // Filter by type
//     if (filters.type) {
//       filtered = filtered.filter((property) =>
//         property.type.toLowerCase().includes(filters.type.toLowerCase())
//       );
//     }
  
//     // Filter by price (using weekly or monthly rate)
//     if (filters.priceFrom || filters.priceTo) {
//       filtered = filtered.filter((property) => {
//         let price = 0;
  
//         // Prioritize monthly rate, then weekly, then fallback to a sale price if any
//         if (property.rates?.monthly) {
//           price = property.rates.monthly;
//         } else if (property.rates?.weekly) {
//           price = property.rates.weekly * 4; // Convert weekly rate to a monthly equivalent
//         } else if (property.price) {
//           price = property.price;
//         }
  
//         const matchesPriceFrom = filters.priceFrom ? price >= Number(filters.priceFrom) : true;
//         const matchesPriceTo = filters.priceTo ? price <= Number(filters.priceTo) : true;
  
//         return matchesPriceFrom && matchesPriceTo;
//       });
//     }
  
//     // Set filtered properties or show a message if none match
//     setFilteredProperties(filtered.length > 0 ? filtered : []);
//   }, [filters, properties]);
  

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       location: '',
//       type: '',
//       size: '',
//       priceFrom: '',
//       priceTo: '',
//     });
//   };

//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   return loading ? (
//     <Spinner />
//   ) : (
//     <div className="main-properties px-0">
//       <div className="wrap-title-wrap-center">
//         <h1 className="page-h1 text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px] slide-animation">
//           Our Properties
//         </h1>
//         <h3 className="text-4xl">Proxy will give you help hand with search for a new living</h3>
//         <Filters filters={filters} setFilters={setFilters} />
//         <button className="clear-filters" onClick={clearFilters}>
//           Clear Filters
//         </button>
//       </div>
//       <section className="px-4 lg:px-16 sm:py-12 py-4 max-w-[140rem] mx-auto bg-white">
//         <div className="md:min-h-[750px] ss:min-h-[600px] min-h-[850px] min-w-[360px] mx-auto flex items-center relative propertiesMainSection">
//           <div className="items-center w-full mx-auto flex flex-col max-w-[126rem]">
//             <div className="container-xl lg:container m-auto px-4 py-6 min-w-[330px]">
//               {filteredProperties.length === 0 ? (
//                 <p>No properties found matching your criteria. Please adjust the price or location.</p>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-white">
//                   {filteredProperties.map((property) => (
//                     <PropertyCard key={property.id} property={property} />
//                   ))}
//                 </div>
//               )}
//               <Pagination
//                 page={page}
//                 pageSize={pageSize}
//                 totalItems={totalItems}
//                 onPageChange={handlePageChange}
//               />
//             </div> 
//           </div>
       
//         </div>
//       </section> 
//          <section className="mt-4 lg:my-8"> 
//          <CardGrid/>
//          </section>


// //  <RealEstateListing />