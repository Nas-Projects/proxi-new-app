"use client" 

import { useEffect, useRef, useState } from "react";
// import fetchAboutPage from '../../api/fetchAboutPage.ts'


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




function TermsPage() {

    const [terms, setTermsData] = useState([]);


     useEffect(() => {
    const fetchData = async () => {
      try {
        const termsData = await getTerms();
        setTermsData(termsData);
        console.log("Terms_PAGE_DATA", termsData);
      } catch (error) {
        console.error("Error fetching Terms data:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

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

export default TermsPage;

const localFaqs = [
    {
      question: 'What are some common hair treatments offered at salons?',
      answer:
        'Common hair treatments offered at salons include hair coloring, haircuts, hair styling, hair straightening, hair extensions, and hair conditioning treatments.',
    },
    {
      question: 'How often should I visit a salon for hair treatments?',
      answer:
        'The frequency of salon visits for hair treatments depends on the type of treatment and your hair$quots specific needs. Generally, its recommended to get a haircut every 6-8 weeks and color treatments every 4-6 weeks.',
    },
    {
      question: 'What should I consider when choosing a hair salon?',
      answer:
        'When choosing a hair salon, consider factors such as reputation, cleanliness, the expertise of stylists, customer reviews, pricing, location, and the range of services offered.',
    },
    {
      question: 'What are the benefits of professional hair treatments?',
      answer:
        'Professional hair treatments can provide various benefits such as improved hair health, enhanced appearance, customized solutions for specific hair concerns, access to high-quality products, and expert advice from trained stylists.',
    },
    {
      question: 'How can I maintain my hair after salon treatments?',
      answer:
        'To maintain your hair after salon treatments, follow a regular hair care routine, use recommended products, protect your hair from heat and environmental damage, avoid overwashing or using harsh chemicals, and schedule regular touch-up appointments as needed.',
    },
    {
      question: 'What should I do if I experience a negative reaction to a hair treatment?',
      answer:
        'If you experience a negative reaction to a hair treatment, such as irritation, allergic reaction, or damage to your hair, immediately rinse your hair with water and seek professional help from a stylist or dermatologist. Avoid using any further products on your hair until you receive appropriate advice.',
    },
    {
      question: 'Can I get a consultation before booking a hair treatment?',
      answer:
        'Yes, most salons offer consultations before booking a hair treatment. During the consultation, you can discuss your hair goals, concerns, preferences, and any specific requirements you may have. The stylist can then recommend suitable treatments and provide personalized advice.',
    },
    {
      question: 'What are some trending hairstyles or hair colors?',
      answer:
        'Trending hairstyles and hair colors often vary based on current fashion trends, celebrity influences, and seasonal changes. Some popular trends include balayage, ombre, beach waves, pixie cuts, bob hairstyles, pastel hair colors, and vibrant hues.',
    },
    {
      question: 'Are there any natural remedies for common hair problems?',
      answer:
        'Yes, there are several natural remedies for common hair problems such as dryness, dandruff, frizz, and hair loss. These remedies may include using natural oils like coconut oil or argan oil, incorporating ingredients like honey or aloe vera into hair masks, and maintaining a healthy diet rich in vitamins and minerals.',
    },
  ];
  