// "use client"

// import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
// import stringSlugifier from '@/lib/StringSlugifier';

import { urlFor } from "@/sanity/lib/image.js";
import { agentsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";



// const staticAgents = [

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
    // {
    //     name: 'Marietou Safari',
    //     role: 'Rentals agent',
    //     imageUrl:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    //     xUrl: '#',
    //     linkedinUrl: '#',
    //     username: '@arietou_22',
    //     verified: true,
    // },
    // {
    //     name: 'Leonard Krasner',
    //     role: 'Realestate Agent',
    //     imageUrl:"https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    //     xUrl: '#',
    //     linkedinUrl: '#',
    //     username: '@arietou_22',
    //     verified: true,
    // },
    // {
    //     name: 'Ema Krasner',
    //     role: 'Realestate Agent',
    //     imageUrl:"https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=800",
    //     xUrl: '#',
    //     linkedinUrl: '#',
    //     username: '@arietou_22',
    //     verified: true,
    // },
    // {
    //     name: 'Jakie Dorseyr',
    //     role: 'Realestate Agentr',
    //     imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80",
    //     xUrl: '#',
    //     linkedinUrl: '#',
    // },

    // More people...
  // ]

  
  // export async function getAgents() {
  //   const query = groq`
  //     *[_type == "agent"] {
  //       ...,
  //      socials[]->
  //     }
  //   `;
  //   const agentsData = await sanityClient.fetch(query);
  //   console.log("agentsData", agentsData);
  //   return agentsData;
  // }
  
  export default async  function Agents() {
    const agentsData = await sanityFetch({ query: agentsQuery });
    // const agentsData = await getAgents();
    const agents = agentsData.map(person => ({
                ...person,
                imageUrl: person.image ? urlFor(person.image).url() : staticAgents[0].imageUrl // Use urlFor if image exists
              }));
              console.log("Agents", agents)
            
    // const [people, setPeople] = useState(staticAgents);
    // const [loading, setLoading] = useState(true);
    // // const [fetchResultsText, setFetchResults] = useState('null');
  
    // useEffect(() => {
    //   const fetchAgents = async () => {
    //     try {
    //       const agentsData = await getAgents();
    //       console.log("AGENTS_FETCHED-->", agentsData);
          
    //       if (!agentsData || agentsData.length === 0) {
    //         // setFetchResults("No valid agents found");
    //         console.log("AGENTS_FETCHED-->", agentsData);
    //         setPeople(staticAgents); // Optionally keep static agents
    //       } else {
    //         // setFetchResults("200 ok");
    //         console.log("AGENTS", agentsData)
    //         const agents = agentsData.map(person => ({
    //           ...person,
    //           imageUrl: person.image ? urlFor(person.image).url() : staticAgents[0].imageUrl // Use urlFor if image exists
    //         }));
    //       }
          
    //     } catch (error) {
    //       console.error('Error fetching agents:', error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchAgents();
    // }, []);
  
    return (
      <div className={clsx(!agents ? "bg-custom-gradient-dark" : "bg-gray-900", "pb-24 bg-custom-gradient-dark py-12 sm:pt-12 sm:pb-32")}> 
          <div className="mx-auto max-w-7xl pt-[-4em] pb-14 text-center lg:px-8 ">
           <h1 className='text-5xl text-orange-100'>{!agents ? "Dear User, here are some agents while we're fetching new data for you" : "Available Agents"}</h1>
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <h2 className="shadow-sm text-3xl font-bold tracking-tight sm:text-4xl
               hover:text-custom-gradient mt-12 !text-white">
                 Meet the team
              </h2>
             <p className="mt-4 text-xl leading-8 text-gray-200">We are a dynamic group of realestate professionals who are passionate about what we do.</p>
           </div>
          </div>
          <div className="agent-list-component bg-pink-100 pt-[0.5px]">
            <div className="mx-auto max-w-7xl text-center lg:px-8 pb-[0.1px]">
            <AgentList agents={agents} />
            {/* {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
                <Link href={`/agents/${stringSlugifier(person.name)}`}>
                  <img alt={person.name} src={person.imageUrl} className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                { fetchResultsText === "200 ok"&&  <p className="!text-base leading-6 text-gray-400"><p className=" leading-6 text-gray-400">Realeste {person.userRole}</p></p> }
                  {<p className="text-sm leading-6 text-gray-400">{person.role}</p>}
                 
                </Link>
              </li>
            ))} */}
          </div>
          </div>
          
        </div>
     
    );
  }




  import { ChevronRightIcon } from '@heroicons/react/20/solid'


// export const people = [
//   {
//     name: 'Leslie Alexander',
//     email: 'leslie.alexander@example.com',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//     lastSeen: '3h ago',
//     lastSeenDateTime: '2023-01-23T13:23Z',
//   },
//   {
//     name: 'Michael Foster',
//     email: 'michael.foster@example.com',
//     role: 'Co-Founder / CTO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//     lastSeen: '3h ago',
//     lastSeenDateTime: '2023-01-23T13:23Z',
//   },
//   {
//     name: 'Dries Vincent',
//     email: 'dries.vincent@example.com',
//     role: 'Business Relations',
//     imageUrl:
//       'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//     lastSeen: null,
//   },
//   {
//     name: 'Lindsay Walton',
//     email: 'lindsay.walton@example.com',
//     role: 'Front-end Developer',
//     imageUrl:
//       'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//     lastSeen: '3h ago',
//     lastSeenDateTime: '2023-01-23T13:23Z',
//   },
//   {
//     name: 'Courtney Henry',
//     email: 'courtney.henry@example.com',
//     role: 'Designer',
//     imageUrl:
//       'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//     lastSeen: '3h ago',
//     lastSeenDateTime: '2023-01-23T13:23Z',
//   },
//   {
//     name: 'Tom Cook',
//     email: 'tom.cook@example.com',
//     role: 'Director of Product',
//     imageUrl:
//       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     href: '#',
//     lastSeen: null,
//   },
// ]

export function AgentList({agents}) {

  return (
    <ul role="list" className="text-white divide-y divide-gray-100 bg-white md:grid md:grid-cols-2 pb-24">
      {agents.map((person) => (
        <li key={person.email} className="relative py-5 hover:bg-gray-100">
          <Link href={clsx(`agents/${person._id}`)} className="block hover:bg-gray-50">
          <div className="pl-6 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={person.imageUrl} className="h-14 w-14 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-xl text-left font-semibold leading-6 text-gray-900 ">
                    <a href={person.href}>
                      <span className="absolute inset-x-0 -top-px bottom-0 " />
                      {person.name}
                    </a>
                  </p>
                  <p className="-mt-[2.5px] flex text-lg text-gray-500">
                    <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
                      {person.email}
                    </a>
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    {
                      person?.socials && person.socials.map((social) => (
                        <li key={social._key}>
                          <a href={social.url} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">{social.name}</span>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )}
                </div>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </div>
            </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
