import { groq } from "next-sanity";


export const searchQuery = groq`
  *[_type == "property" &&
    (location.city match $location || location.state match $location || location.street match $location || name match $location) &&
    ($propertyType == "All" || type match $propertyType)] {
    _id,
    name,
    description,
    type,
    location {
      city,
      state,
      street,
      zipcode
    },
    retail,
    office,
    investmentSale,
    amenities,
    images
  }
`;

// export const termsQuery = groq`
//   *[_type == "termsAndConditions"] {
//     _id,
//     title,
//     terms[] {
//       _key,
//       content
//     }
//   }
// `;


export const termsQuery = groq`*[_type == "termsAndConditions"] {
  ...,
}`
// JoinUs 
export const joinUsQuery = groq`
  *[_type == "joinUsPage"][0] {
    introParagraph,
    sections[] {
      sectionTitle,
      sectionContent,
      sectionImage {
        asset -> { url }
      },
      tiles[] {
        icon {
          asset -> { url }
        },
        tileTitle,
        tileContent
      }
    }
  }
`;


//About
export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    title,
    description,
    "sections": sections[] {
      title,
      description,
      image {
        asset -> { url }
      }
    },
    mainImage {
      asset -> { url }
    },
   
  }
`;

// Get all posts
export const postsQuery = groq`*[_type == "blogPost"] | order(_createdAt desc) {
  _createdAt,
  title,
  description,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  author -> {
    name,
    image {
      asset -> { url }
    },
    bio,
    email,
    socialLinks[] {
      platform,
      url
    } 
  },
}`;

// Get a single post by its slug
export const postQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0] {
  title,
  slug,
  publishedAt,
  author -> {
    name,
    image {
      asset -> { url }
    },
    bio,
    email,
    socialLinks[] {
      platform,
      url
    } // Ensure this is structured correctly
  },
  
  mainImage {
    asset -> { url } 
  },
  content,
  "authorName": author->name,
  "authorImage": author->image.asset->url, // Fetching the image URL directly
  "authorTwitter": author->twitter
}
`;

export const agentsQuery = groq`
  *[_type == "agent"] | order(_createdAt desc) {
    _createdAt,
    _id,
    name,
    username,
    bio,
    email,
    phone,
    image {
      asset -> { url }
    },
    socials[] {
      platform,
      url
    }
  }
`;

export const agentQuery = groq`
  *[_type == "agent" && _id == $id][0]{
    name,
    id,
    username,
    bio,
    email,
    phone,
    image {
      asset -> { url }
    },
    socials[] {
      platform,
      url
    }
  }
`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get 4 most recent posts
export const recentPostsQuery = groq`*[_type == "post"] | order(date desc) [0...4] {
  "slug": slug.current,
  title,
  description,
  date,
  "image": mainImage.asset->url
}`;

export const postSlugsQuery = groq`*[_type == "post"] {
  "slug": slug.current,
  date
}`;




// Get a single agent by ID
export const agentByIdQuery = groq`
*[_type == "agent" && _id == $id][0] {
  _id,
  name,
  email,
  phone,
  image {
    asset -> { url }
  },
  bio,
  socials[]-> {
    platform,
    url
  }
}
`;


export const propertiesQuery = groq`
  *[_type == "property"] | order(_createdAt desc) {
    _createdAt,
    _id,
    name,
    email,
    type,
    category,
    description,
    location {
      street,
      city,
      state,
      zipcode
    },
    amenities,
    images[] {
      asset -> { url }
    },
    "mainImage": images[0].asset->url, // Grab the first image as the main image
    contact-> {
      name,
      email,
      phone,
      image {
        asset -> { url }
      }
    },
    forSale,
    forRent,
    acceptsCrypto,
    isFeatured,
    views,
    daysOnMarket
  }
`;



export const propertyQuery = groq`
*[_type == "property" && _id == $id][0] {
  _id,
  _createdAt,
  _updatedAt,
  name,
  email,
  type,
  category,
  description,
  location {
    street,
    city,
    state,
    zipcode
  },
  amenities,
  images[] {
    asset -> { url }
  },
  "mainImage": images[0].asset->url, // First image as the main image
  contact-> {
    name,
    email,
    phone,
    image {
      asset -> { url }
    }
  },
  retail {
    address,
    crossStreets,
    neighborhood,
    pricePerMonth,
    priceAnnual,
    size,
    psf,
    basement,
    frontage,
    ceilingHeight,
    cookingAllowed,
    popUpAllowed,
    neighbors
  },
  office {
    address,
    suite,
    crossStreets,
    neighborhood,
    priceMonthly,
    priceYearly,
    size,
    psf,
    numberOfOffices,
    numberOfConferenceRooms,
    ceilingHeight,
    kitchen,
    bathrooms
  },
  investmentSale {
    assetType,
    portfolio,
    sizeAvailable,
    price,
    psf,
    totalBuildingSize,
    lotSize,
    buildingDimensions,
    occupied,
    floors,
    numberOfUnits,
    averageFloorSize,
    grossIncome,
    realEstateTax,
    totalExpenses,
    noi,
    far,
    airRights,
    capRate,
    zoning,
    capEx,
    loadingDock
  },
  forSale,
  forRent,
  acceptsCrypto,
  isFeatured,
  views,
  daysOnMarket
}`


// export const propertyQuery = groq`
//   *[_type == "property" && id == $id][0] {
//     _createdAt,
//     _id,
//     name,
//     email,
//     type,
//     category,
//     description,
//     location {
//       street,
//       city,
//       state,
//       zipcode
//     },
//     amenities,
//     images[] {
//       asset -> { url }
//     },
//     "mainImage": images[0].asset->url, // First image as the main image
//     contact-> {
//       name,
//       email,
//       phone,
//       image {
//         asset -> { url }
//       }
//     },
//     retail {
//       address,
//       crossStreets,
//       neighborhood,
//       pricePerMonth,
//       priceAnnual,
//       size,
//       psf,
//       basement,
//       frontage,
//       ceilingHeight,
//       cookingAllowed,
//       popUpAllowed,
//       neighbors
//     },
//     office {
//       address,
//       suite,
//       crossStreets,
//       neighborhood,
//       priceMonthly,
//       priceYearly,
//       size,
//       psf,
//       numberOfOffices,
//       numberOfConferenceRooms,
//       ceilingHeight,
//       kitchen,
//       bathrooms
//     },
//     investmentSale {
//       assetType,
//       portfolio,
//       sizeAvailable,
//       price,
//       psf,
//       totalBuildingSize,
//       lotSize,
//       buildingDimensions,
//       occupied,
//       floors,
//       numberOfUnits,
//       averageFloorSize,
//       grossIncome,
//       realEstateTax,
//       totalExpenses,
//       noi,
//       far,
//       airRights,
//       capRate,
//       zoning,
//       capEx,
//       loadingDock
//     },
//     forSale,
//     forRent,
//     acceptsCrypto,
//     isFeatured,
//     views,
//     daysOnMarket
//   }
// `;
