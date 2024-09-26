'use client'

import SectionWrapper from "../../hoc/SectionWrapper";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Spinner from '@/components/propertiesComponents/Spinner';
import Pagination from '@/components/propertiesComponents/Pagination';
import  SelectButton  from '@/components/Select/SelectButton';
import  CardGrid  from '@/components/cards/CardGrid.jsx';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@medusajs/ui";
import Image from 'next/image';
import PropertyListCard from '@/components/propertiesComponents/PropertiesListCard';
// Reusable PropertyCard component
// export const PropertyCard = ({ property }) => (
//   <Link className="property" href={`properties/${property._id}`}>
//     <img
//       alt={property.name}
//       loading="lazy"
//       width={property.imageWidth}
//       height={property.imageHeight}
//       decoding="async"
//       data-nimg={1}
//       style={{ color: 'transparent' }}
//       src={`${property.images[0]}`}
//     />
//     <div className="propertyInfo">
//       <h2 className="text-white text-[1.1rem] font-bold">{property.name}</h2>
//       <hr />
//       <div className="propLocDist">
//         <p className="inline-flex space-x-2 -mt-4">
//           <svg className="mr-2 mt-[0.4em]" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//             <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
//           </svg>
//           {property.location.city}, {property.location.zipcode}
//         </p>
//         <p className="">
//           <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//             <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
//           </svg>
//           {property.size}
//         </p>
//       </div>
//     </div>
//   </Link>
// );

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
    console.log("E_TARGET", e.target)
    const { name, value } = e.target;
    console.log("E_TARGET_NAME", e.target.name,"E_TARGET_VALUE", e.target.value )
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
  // const clearLocationFilter = () => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     location: ''
  //   }));
  // };

  return (
    <div className="filterSection my-4 lg:my-8 container-navbar">
      <div className="filterFields space-between lg:flex   lg:space-x-24 xl:space-x-44">
        <div className="filterFieldsOne relative">
          <div className="select-1">
          <SelectButton htmlFor="location"
            label="Location"
            name="location"
            items={["All Locations", ...locations]} 
            handleInputChange={handleInputChange}
            value={filters.location} // Bind the value to the filters state
          />  
          </div>
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
         <div className="absolute -ml-4 top-[5em]">
             <a href="/contact" className="cta dark-link w-inline-block">
          <img
            src="https://cdn.prod.website-files.com/63c93770199def60f97204e0/63c93770199def55cd720556_place.svg"
            loading="lazy"
            alt=""
          />
          <div className="text-slate-500">
            Can&apos;t find your location?
            <span className="span-grey-link">Ask us here</span>
          </div>
        </a>
        </div>
        </div>
        <div className="right-top-filters lg:-mt-6">
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
                    name="priceTo"
                    onChange={handleInputChange}
                    value={filters.priceTo} 
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




const PropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalItems, setTotalItems] = useState(0);

  const [filters, setFilters] = useState({
    location: '',
    type: '',
    size: '',
    priceFrom: '',
    priceTo: '',
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

  // Fetch properties on page load
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setProperties(data.rawproperties);
        setTotalItems(data.total);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, pageSize]);

  console
  useEffect(() => {
    let filtered = properties;
  
    // Filter by location (using city)
    if (filters.location) {
      filtered = filtered.filter((property) =>
        property.location.city.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
  
    // // Filter by size (using square_feet)
    // if (filters.size) {
    //   const sizeRange = filters.size.split("-");
      
    //   if (sizeRange.length === 2) {
    //     const [minSize, maxSize] = sizeRange.map(Number);
    //     filtered = filtered.filter((property) =>
    //       property.square_feet >= minSize && property.square_feet <= maxSize
    //     );
    //   } else if (filters.size.includes("<")) {
    //     const maxSize = Number(filters.size.replace("<", ""));
    //     console.log("FILTERED LES THAN OR EQUAL", minSize);
    //     filtered = filtered.filter((property) =>
    //       property.square_feet <= maxSize // less than or equal to maxSize
    //     );
    //   } else if (filters.size.includes("+")) {
    //     const minSize = Number(filters.size.replace("+", ""));
    //     console.log("FILTERED + SIZE", minSize);
    //     filtered = filtered.filter((property) =>
    //       property.square_feet >= minSize // greater than or equal to minSize
    //     );
    //   }
    // }
    // Filter by size (using square_feet)
// Filter by size (using square_feet)
if (filters.size) {
  const sizeRange = filters.size.split(" ");
  
  // Extract size values only
  const sizeValues = sizeRange[0].split("-");
  
  if (sizeValues.length === 2) {
    const [minSize, maxSize] = sizeValues.map(size => parseInt(size)); // Convert to number
    console.log("FILTERED SIZE RANGE", minSize, maxSize);
    
    filtered = filtered.filter((property) => {
      console.log("Property square_feet:", property.name); // Log property value
      return property.square_feet >= minSize && property.square_feet <= maxSize;
    });
  } else if (filters.size.includes("<")) {
    const maxSize = parseInt(filters.size.replace("<", "").trim());
    console.log("FILTERED LESS THAN OR EQUAL", maxSize);
    
    filtered = filtered.filter((property) => {
      console.log("Property square_feet:", property.price); // Log property value
      return property.square_feet <= maxSize; // less than or equal to maxSize
    });
  } else if (filters.size.includes("+")) {
    const minSize = parseInt(filters.size.replace("+", "").trim());
    console.log("FILTERED + SIZE", minSize);
    
    filtered = filtered.filter((property) => {
      console.log("Property square_feet:", property.size); // Log property value
      return property.square_feet >= minSize; // greater than or equal to minSize
    });
  }
}

  
    // Filter by type
    if (filters.type) {
      filtered = filtered.filter((property) =>
        property.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }
  
    // Filter by price (using weekly or monthly rate)
    if (filters.priceFrom || filters.priceTo) {
      filtered = filtered.filter((property) => {
        let price = 0;
  
        // Prioritize monthly rate, then weekly, then fallback to a sale price if any
        if (property.rates?.monthly) {
          price = property.rates.monthly;
        } else if (property.rates?.weekly) {
          price = property.rates.weekly * 4; // Convert weekly rate to a monthly equivalent
        } else if (property.price) {
          price = property.price;
        }
  
        const matchesPriceFrom = filters.priceFrom ? price >= Number(filters.priceFrom) : true;
        const matchesPriceTo = filters.priceTo ? price <= Number(filters.priceTo) : true;
  
        return matchesPriceFrom && matchesPriceTo;
      });
    }
  
    // Set filtered properties or show a message if none match
    setFilteredProperties(filtered.length > 0 ? filtered : []);
  }, [filters, properties]);
  

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

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="main-properties px-0">
      <div className="wrap-title-wrap-center">
        <h1 className="page-h1 text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px] slide-animation">
          Our Properties
        </h1>
        <h2 className="text-4xl text-custom-gradient">Proxy <span className="text-slate-600 text-4xl ">will give you help hand with search for a new living</span></h2>
        <Filters filters={filters} setFilters={setFilters} />
        
        {/* <button className="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button> */}

      </div>
      <section className="min-[700px]:px-0 sm:px-0 lg:px-16 sm:py-12 py-4 max-w-[180rem] mx-auto bg-white">
        <div className="md:min-h-[350px] ss:min-h-[400px] min-h-[550px] min-w-[360px] mx-auto flex items-center relative propertiesMainSection">
          <div className="items-center w-full mx-auto flex flex-col max-w-[126rem]">
            <div className="container-xl lg:container m-auto px-4 py-6 min-w-[330px]">
              {filteredProperties.length === 0 ? (
                <p>No properties found matching your criteria. Please adjust the price or location.</p>
              ) : (
                <div className="grid grid-cols-1 min-[712px]:grid-cols-2 min-[1079px]:grid-cols-3 min-[1475px]:!grid-cols-4 gap-6 bg-white">
                  {filteredProperties.map((property) => (
                    <PropertyListCard key={property._id} property={property} />
                  ))}
                </div>
              )}
              <Pagination
                page={page}
                pageSize={pageSize}
                totalItems={totalItems}
                onPageChange={handlePageChange}
              />
            </div> 
          </div>
       
        </div>
      </section> 
      <section className="mt-4 lg:my-8"> 
        <CardGrid/>
      </section>
    <section className="bg-white my-12 lg:my-24 mx-auto flex items-center relative joinSection">
    <div className="w-full block lg:grid  lg:drid grid-cols-3">
    <div action="#" method="POST" className="col-span-2 h-full w-full z-10">
        <Image src="/what-is-blockchain-1.jpeg" 
          width={500}
          height={300}
          alt="what-is-blockchain-1.jpeg" 
          className="h-full w-full object-cover"
          />
      </div>
      <div className="col-span-1 items-center  mx-auto max-w-[86rem] px-4 lg:p-8 xl:p-12">
        <div
          className="flex items-center w-full md:mb-16 ss:mb-8  mb-16"
          style={{ opacity: 1, transform: "none", willChange: "auto" }}
        >
          <h1 className="text-custom-gradient font-bold md:text-[55px] ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5">
          Want to join the team?
          </h1>
          <div
            className="flex-1 relative items-center justify-center"
            style={{ opacity: 1, transform: "none", willChange: "auto" }}
          >
            <div className="bg-main w-full h-[2px]" />
          </div>
        </div>
        <div
          className="w-full"
          style={{ opacity: 1, transform: "none", willChange: "auto" }}
        >
          <div
            className="flex1 flex justify-center items-start flex-col"
            style={{ opacity: 1, transform: "none", willChange: "auto" }}
          >
            <div className="joinContainer -mt-4 xl:-mt-12">
              <div className="joinText text-left">
                <p>
                  Join our dynamic, team and unleash your full earning potential in
                  a company that&apos;s revolutionizing real estate. Our cutting-edge
                  technology ensures you&apos;re always ahead of the curve, and our
                  lucrative referral program offers additional income opportunities.
                  Don&apos;t just work in real estate—thrive in it. Join us today and
                  transform your career!
                </p>
              </div>

             <div className="flex-start">
              <h5 className="uppercase text-sm md:text-base text-white relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-secondary-color hover:border-heading-color inline-block">
                <span className="inline-block absolute top-0 right-0 w-full h-full bg-custom-gradient group-hover:bg-black hover:bg-primary-cogroup-lor z-1 group-hover:w-0 transition-all duration-300" />
                <Link href="/join"
                 
                  className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px"
                >
                 Join ggggdgd
                </Link>
              </h5>
            </div>

            
            </div>
          </div>
        </div>
      </div>
      </div> 
    </section>

      
    </div>
  );
};


export default SectionWrapper(PropertiesPage, 'propertiesPage');




//  <RealEstateListing />