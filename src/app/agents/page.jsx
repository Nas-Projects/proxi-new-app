
import clsx from 'clsx';

import { urlFor } from "@/sanity/lib/image.js";
import { agentsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import AgentsList from "../../components/AgentsList";
  
  export default async  function Agents() {
    const agentsData = await sanityFetch({ query: agentsQuery });
    // const agentsData = await getAgents();
    const agents = agentsData.map(person => ({
                ...person,
                imageUrl: person.image ? urlFor(person.image).url() : staticAgents[0].imageUrl // Use urlFor if image exists
              }));
   console.log("Agents", agents)
    return (
      <div className={clsx(!agents ? "bg-custom-gradient-dark" : "bg-pink-100 ", "min-h-[calc(100vh_-_216px)] text-sm leading-6 pb-24 py-14 lg:pt-18 sm:pb-32")}> 
          <div className="mx-auto max-w-7xl pt-[-4.5em] pb-12 lg:pt-16 text-center lg:px-8 ">
           <h1 className='text-5xl text-[$333]'>{!agents ? "Dear User, here are some agents while we're fetching new data for you" : "Our Agents"}</h1>
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              {/* <h2 className="shadow-sm text-3xl font-bold tracking-tight sm:text-4xl
               hover:text-custom-gradient mt-12 !text-white">
                 Meet the team
              </h2> */}
             <p className="mt-4 text-xl leading-8 text-gray-900">Our dynamic team of realestate professionals who are passionate about what we do.</p>
           </div>
          </div>
          <div className="agent-list-component bg-pink-100 pt-[0.5px]">
            <div className="mx-auto max-w-7xl text-center lg:px-8 pb-[0.1px]">
            <AgentsList agents={agents} />
          </div>
          </div>
          
        </div>
     
    );
  }



