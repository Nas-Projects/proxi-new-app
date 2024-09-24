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

export async function getAboutPage() {
  const query = groq`
  *[_type == "aboutPage"] {
    ...,
    sections[] {
      title,
      description,
    }
  }
  `;
  const aboutPageData = await sanityClient.fetch(query);
  console.log("ABOUT_PAGE_DATA", aboutPageData);
  return aboutPageData;
}

function About() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const aboutPageData = await getAboutPage();
        setPageData(aboutPageData[0]);
      } catch (error) {
        console.error("Error fetching About Page data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pageData || pageData.length === 0) {
    return <div>No data found.</div>; // Handle the case where no data is found
  }

  return (
    <AboutPage aboutPagedata={pageData} />
  );
}

export default About;