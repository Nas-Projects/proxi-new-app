"use client" 

import { useEffect, useState } from "react";

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
        <div className='px-6 md:px-8 lg:px-12 xl:px-24'>
            <h1 className="!text-3xl lg:!text-4xl px-4  mainText mb-8 text-center py-24 ">Terms and Conditions.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-44">
                {terms.map((term, index) => {
                   console.log("terms", term.terms[0])
                  return <div key={index} className="p-4 border rounded">
                        <h4  className={`flex items-center justify-between cursor-pointer ${
                                term.isOpen ? 'text-custom-gradient font-medium' : ''
                            }`}
                            onClick={() => toggleTerm(index)}
                        >
                            {term.title}
                            <svg
                                className="w-5 h-5 text-gray-500 transform transition-transform duration-300"
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
    );
}

export default TermsComponent;

