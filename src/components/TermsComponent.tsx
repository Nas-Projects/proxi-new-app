"use client" 

import clsx from "clsx";
import { useEffect, useState } from "react";
import BlurImage from "./blur-image";

function TermsComponent({termsData}) {
   const [loading, setLoading] = useState(true)
    const [terms, setTermsData] = useState([]);


     useEffect(() => {
       console.log("Terms_PAGE_DATA", termsData)
      try {
       if (termsData) {
           setTermsData(termsData);
           setLoading(false)
        }
        else {
            setLoading(false)
          return 
        }
     
      } catch (error) {
        console.error("Error fetching Terms data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }

  }, [termsData]); // Empty dependency array to run only once

if (loading) {
    return <h1 className="my-64 flex text-center">Loading...</h1>
}


    const toggleTerm = (index) => {
      setTermsData((prevTerms) => {
            return prevTerms.map((term, i) => {
                if (i === index) {
                    return { ...term, isOpen: !term.isOpen };
                } else {
                    return term;
                }
            });
        });
    };

    return (
        <div className="hero hero-primary bg-gray-50 overflow-hidden relative">
          <BlurImage
            src="/beams-basic.png"
            alt=""
            height={1000}
            width={1000}
            placeholder="blur"
            className="absolute left-1/2 top-0 -ml-[39rem]  w-[113.125rem] max-w-none"
            />
         <div className='absolute inset-x-0 z-20 top-12  md:top-24  lg:top-44  flex-block px-6 md:px-8 lg:px-12 xl:px-24 pb-44 justify-center items-center !z-50'>
           
           <h1 className="!text-4xl lg:!text-4xl xl:!text-5xl 
                     !text-black px-4 pt-16 mainText mb-8 lg:text-center py-12 xl:py-24 ">Terms and Conditions.</h1>
           <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 max-w-2xl gap-x-4 pb-44">
               {terms.map((term, index) => {
                  console.log("terms", term.terms[0])
                 return <div key={index} className={clsx(term.isOpen && "!bg-gray-100 rounded-xl my-2","p-4 border rounded")}>
                       <h4  className={`flex mainText text-[1.5em] items-center justify-between cursor-pointer ${
                               term.isOpen ? 'text-custom-gradient font-medium bg-white' : ''
                           }`}
                           onClick={() => toggleTerm(index)}
                       >
                           {term.title}
                           <svg
                               className="ml-6 w-5 h-5 text-gray-500 transform transition-transform duration-300"
                               fill="none"
                               stroke="currentColor"
                               viewBox="0 0 24 24"
                               xmlns="http://www.w3.org/2000/svg"
                               style={{ transform: term.isOpen ? 'rotate(180deg)' : '' }}
                           >
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                       </h4>
                       {term.isOpen && <p className="mt-3">{term.terms[0]}</p>}
                   </div>
               })}
           </div>
           </div>
          
       </div>
        </div>
      
    );
}

export default TermsComponent;

