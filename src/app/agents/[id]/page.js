"use client";

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import stringSlugifier from '@/lib/StringSlugifier';
import { sanityClient } from '@/sanity/lib/client';
import { useRouter } from 'next/navigation';
import AgentComponent from  "@/components/propertiesComponents/AgentPage.jsx"
// import FollowMessageButtons from '@/components/FollowMessageButtons';
const staticAgent = {
  name: 'Leonard Krasner',
  role: 'Senior Agent',
  imageUrl:
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  xUrl: '#',
  linkedinUrl: '#',
};

export default function Agents({ params }) {
  const { id } = params; // Get the ID from the URL parameters

  const [person, setPerson] = useState(staticAgent);
  const [loading, setLoading] = useState(true);
  const [fetchResultsText, setFetchResults] = useState('null');

  useEffect(() => {
    const fetchAgent = async () => {
      if (!id) return; // Exit if ID is not available
      try {
        const agentData = await sanityClient.fetch(`*[_type == "agents" && _id == $id]{name, role, imageUrl, xUrl, linkedinUrl}`, { id });
        
        if (!agentData.length) {
        //   setFetchResults("No valid agents found");
        } else {
          setPerson(agentData[0]); // Set the person to the fetched agent
        }
      } catch (error) {
        console.error('Error fetching agent:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgent();
  }, [id]); // Add id as a dependency
//  href={`/agents/${stringSlugifier(person.name)}`}
  return (
    <div className={clsx(loading ? "bg-custom-gradient-dark" : "bg-gray-900", "")}>
      <AgentComponent/>
        {/* <div  className="lg:inline-flex grid grid-cols-1 gap-y-16 grid-cols-2 lg:gap-y-12"> */}
        {/* <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h1 className='text-3xl text-orange-400'>{loading ? "Dear User, here are some agents while we're fetching new data for you" : fetchResultsText}</h1>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        
          <div key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
            <div>
              <img alt={person.name} src={person.imageUrl} className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
              <p className="text-sm leading-6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a href={person.xUrl} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">X</span>
                  
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">LinkedIn</span>
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
      </div> */}
      {/* ---- */}
      <h1>Listings</h1>
      <div class=" dark:bg-gray-700 bg-gray-200 pt-12">

    {/* <!-- Card start --> */}
        <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-4">
                    <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src="https://randomuser.me/api/portraits/women/21.jpg" alt=""/>
                    <div class="py-2">
                        <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                            New York, NY
                        </div>
                    </div>
                </div>
                {/* <FollowMessageButtons /> */}
                <div class="flex gap-2 px-2">
                    <button
                        class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                        Follow
                    </button>
                    <button
                        class="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                        Message
                    </button>
                </div>
            </div>
            <div class="px-4 py-4">
                <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                    <svg class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class=""
                            d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                    </svg>
                    <span><strong class="text-black dark:text-white">12</strong> Followers you know</span>
                </div>
                <div class="flex">
                    <div class="flex justify-end mr-2">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/31.jpg" alt=""/>
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/33.jpg" alt=""/>
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/32.jpg" alt=""/>
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/44.jpg" alt=""/>
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/42.jpg" alt=""/>
                        <span
                            class="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
                            +999
                        </span>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- Card end --> */}

</div>

   {/* </div> */}
   
    </div>
  );
}
