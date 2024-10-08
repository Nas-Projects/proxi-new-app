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
      // {
      //   name: "About Us",
      //   route: "/about",
      // },
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
  id: "apartment",
  name: "Retail Leasing",
  Icon: BsBuildings,
  link: "/properties/search-results?location=&propertyType=Residential"
},
  {
    id: "office",
    name: "Office Leasing",
    Icon: FaRegBuilding,
    link: "/properties/search-results?location=&propertyType=office"
  },
  {
    id: "sales",
    name: "Ivestment Sales",
    Icon: HiOutlineBuildingLibrary,
    link: "/properties/search-results?location=&propertyType=sale",
  },
  { id: "residential",
  name: "Residential Sales",
  Icon: RiBuilding2Line,
  link: "/properties/search-results?location=&propertyType=sale"
  },
  {
    id: "office",
    name: "Office Leasing",
    Icon: FaRegBuilding,
    link: "/properties/search-results?location=&propertyType=office"
  },
  {
    id: "blockchain",
    name: "Blockchain Tech",
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