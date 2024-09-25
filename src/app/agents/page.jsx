"use client"

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import stringSlugifier from '@/lib/StringSlugifier';
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image.js";
const staticAgents = [

    // {
    //   name: 'Leonard Krasner',
    //   role: 'Senior Agent',
    //   imageUrl:
    //     'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    //   xUrl: '#',
    //   linkedinUrl: '#',
    // },
    // {
    //     name: 'Leonard Krasner',
    //     role: 'Realestate agents',
    //     imageUrl:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    //     xUrl: '#',
    //     linkedinUrl: '#',
    // },
    // {
    //     name: 'Leonard Krasner',
    //     role: 'SalesAgen',
    //     imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    //     xUrl: '#',
    //     linkedinUrl: '#',
    // },
    {
        name: 'Marietou Safari',
        role: 'Rentals agent',
        imageUrl:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Leonard Krasner',
        role: 'Realestate Agent',
        imageUrl:"https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Ema Krasner',
        role: 'Realestate Agent',
        imageUrl:"https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=800",
        xUrl: '#',
        linkedinUrl: '#',
    },
    // {
    //     name: 'Jakie Dorseyr',
    //     role: 'Realestate Agentr',
    //     imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80",
    //     xUrl: '#',
    //     linkedinUrl: '#',
    // },

    // More people...
  ]

  
  export async function getAgents() {
    const query = groq`
      *[_type == "agent"] {
        ...,
       socials[]->
      }
    `;
    const agentsData = await sanityClient.fetch(query);
    console.log("agentsData", agentsData);
    return agentsData;
  }
  
  export default function Agents() {
    const [people, setPeople] = useState(staticAgents);
    const [loading, setLoading] = useState(true);
    const [fetchResultsText, setFetchResults] = useState('null');
  
    useEffect(() => {
      const fetchAgents = async () => {
        try {
          const agentsData = await getAgents();
          console.log("AGENTS_FETCHED-->", agentsData);
          
          if (!agentsData || agentsData.length === 0) {
            setFetchResults("No valid agents found");
            console.log("AGENTS_FETCHED-->", agentsData);
            setPeople(staticAgents); // Optionally keep static agents
          } else {
            setFetchResults("200 ok");
            setPeople(agentsData.map(person => ({
              ...person,
              imageUrl: person.image ? urlFor(person.image).url() : staticAgents[0].imageUrl // Use urlFor if image exists
            })));
          }
          
        } catch (error) {
          console.error('Error fetching agents:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAgents();
    }, []);
  
    return (
      <div className={clsx(loading ? "bg-custom-gradient-dark" : "bg-gray-900", "bg-custom-gradient-dark py-24 sm:py-32")}>
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className='text-3xl text-orange-100'>{loading ? "Dear User, here are some agents while we're fetching new data for you" : "Available Agents"}</h1>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-custom-gradient mt-12 !text-white ">Meet our team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-200">We are a dynamic group of individuals who are passionate about what we do.</p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                <Link href={`/agents/${stringSlugifier(person.name)}`}>
                  <img alt={person.name} src={person.imageUrl} className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                { fetchResultsText === "200 ok"&&  <p className="!text-base leading-6 text-gray-400"><p className=" leading-6 text-gray-400">Realeste {person.userRole}</p></p> }
                  {<p className="text-sm leading-6 text-gray-400">{person.role}</p>}
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    {
                      person?.socials && person.socials.map((social) => (
                        <li key={social._key}>
                          <a href={social.url} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">{social.name}</span>
                            {/* SVG for X icon */}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
