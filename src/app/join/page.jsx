"use client"

import { useEffect, useState } from "react";
// import fetchAboutPage from '../../api/fetchAboutPage.ts'
import JoinUsComponent from '@/components/JoinUsComponent'

import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";

export async function getJoinUsPage() {
  const query = groq`
  *[_type == "joinUsPage"] {
    ...,
  }

  `;
  const joinUsData = await sanityClient.fetch(query);
  console.log("JOIN_US_PAGE_DATA", joinUsData);
  return joinUsData;
}

function JoinUsPage() {
    const [sectionIntro, setSectionIntro] = useState(null);
    const [section1, setSection1] = useState(null);
    const [remainingSections, setRemainingSections] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const joinUsData = await getJoinUsPage();
            if (joinUsData.length > 0) {
              const data = joinUsData[0];
              // Set intro paragraph as sectionIntro
              setSectionIntro(data.introParagraph);
    
              // Set first section as section1
              setSection1(data.sections[0]);
              console.log("DATA_SECTION:", + section1.tiles)
              // Set remaining sections as section2, section3, etc.
              setRemainingSections(section1.tiles);
    
              setLoading(false);
            }
          } catch (error) {
            console.error("Error fetching Join Us Page data:", error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!sectionIntro && !section1 && remainingSections.length === 0) {
    return <div>No data found.</div>;
  }

  return (
   <div className='!relative min-h-screen'><JoinUsComponent
      sectionIntro={sectionIntro}
      section1={section1}
      remainingSections={remainingSections}
  /></div> 
  );
}

export default JoinUsPage;