import { twitter, instagram, facebook, linkedin } from '../../public/assets';


import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { RiBuilding2Line } from "react-icons/ri";
import { BsBuildings } from "react-icons/bs";
import { GrResources } from "react-icons/gr";


export const navLinks = [
  {
    id: "home",
    title: "Home",
    route: "/",
  },
  {
    id: "properties",
    title: "Properties",
    links: [
      {
        name: "Residential",
        route: "/properties/residential",
      },
      {
        name: "Commercial",
        route: "properties/commercial",
      },
    ],
  },
  {
    id: "agents",
    title: "Agents",
    route: "/agents",
  },
  {
    id: "about",
    title: "About Us",
    links: [
      {
        name: "About Us",
        route: "/about",
      },
      {
        name: "Contact Us",
        route: "/contact",
      },
      {
        name: "Services",
        route: "/services",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      {
        name: "About Us",
        route: "/about",
      },
      {
        name: "Contact Us",
        route: "/contact",
      },
      {
        name: "Services",
        route: "/services",
      },
    ],
  },
];

export const SearchBtns = [
  {
    id: "office",
    name: "Office",
    Icon: FaRegBuilding,
    link: "/properties/search-results?location=&propertyType=Studio"
  },
  {
    id: "sales",
    name: "Sales",
    Icon: HiOutlineBuildingLibrary,
    link: "/properties/search-results?location=&propertyType=sale",
  },
  {
    id: "rentals",
    name: "Rentals",
    Icon: GrResources,
    link: "/properties/search-results?location=&propertyType=rentals"
  },
  { id: "modern",
    name: "Modern",
    Icon: RiBuilding2Line,
    link: "/properties/search-results?location=&propertyType=modern"
  },
  {
    id: "apartment",
    name: "Apartment",
    Icon: BsBuildings,
    link: "/properties/search-results?location=&propertyType=apartment"
  },
  {
    id: "blockchain",
    name: "Blockchain",
    Icon: HiOutlineBuildingLibrary,
    link: "/blogs/how-blockchain-is-transforming-real-estate-transactions"
  },
  // {
  //   id: "studios",
  //   name: "Studios",
  //   Icon: FaRegBuilding,
  //   link: "/properties/search-results?location=&propertyType=Studio"
  // },
  
];
// {
  //   id: "resources",
  //   name: "Resources",
  //   Icon: GrResources,
  //   link: "properties/resources"
  // },
export const socialMedia = [
  {
    id: "twitter",
    Icon: twitter,
    link: ""
  },
  {
    id: "instagram",
    Icon: instagram,
    link: ""
  },
  {
    id: "facebook",
    Icon: facebook,
    link: ""
  },
  {
    id: "linkedin",
    Icon: linkedin,
    link: ""
  }
];

export const footerLinks =[
  {
    id: "about",
    name: "About Us",
    route: "/about",
  },
  {
    id: "properties",
    name: "Properties",
    route: "/properties",
  },
  {
    id: "agents",
    name: "Agents",
    route: "/agents",
  },
  {
    id: "contact",
    name: "Contact Us",
    route: "/contact",
  },
  {
    id: "privacy",
    name: "Privacy Policy",
    route: "/privacy",
  },
  {
    id: "terms",
    name: "Terms of Usage",
    route: "/terms",
  },
];