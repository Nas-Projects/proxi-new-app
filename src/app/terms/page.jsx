"use client" 

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef, useState } from "react";
// import fetchAboutPage from '../../api/fetchAboutPage.ts'
import AboutPage from '@/components/AboutPage'

import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";

export async function getTerms() {
  const query = groq`
  *[_type == "termsAndConditions"] {
    ...,
  }
  `;
  const termsData = await sanityClient.fetch(query);
  console.log("Terms_PAGE_DATA", termsData);
  return termsData;
}

function About() {
  const [termsData, setTermsData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const termsData = await getTerms();
        setTermsData(termsData);
      } catch (error) {
        console.error("Error fetching Terms data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!termsData) {
    return <div>No data found.</div>; // Handle the case where no data is found
  }

  return ( <div className="terms py-6 px-4 lg:px-12 lg:py-24 min-h-[60vh]"><h1> TERMS </h1>
  {termsData.map((term) => {
    return <div className='py-6 px-4 '>
        <h2>{term.title}</h2>
        <p>{term.terms}</p>
       </div>  
       } 
       )
  }
 </div>
    // <AboutPage aboutPagedata={termsData} />
  );
}

export default About;