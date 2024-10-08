'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  // Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {  EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
// import { TryInboxZero } from '@/components/TryInboxZero';
// import { Card, CardContent } from '@/components/ui/card';
// import { GitHubIcon } from '../SocialIcons';
import { CheckInCircleIcon } from '../nassersIcons';
// import { getGradient } from '@/lib/gradients';
import BlurImage from '../blur-image';
// import { InstagramLogoIcon } from '@radix-ui/react-icons';
import AgentsTabs from "@/components/AgentsTabs.jsx"
import clsx from 'clsx';
import { Globe2Icon } from 'lucide-react';
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Team', href: '/teams', icon: UsersIcon, current: false },
  { name: 'Listings', href: '/listings', icon: FolderIcon, current: false },
  { name: 'Clients', href: '/clients', icon: CalendarIcon, current: false },
  { name: 'Disclosures', href: '/disclosures', icon: DocumentDuplicateIcon, current: false },
  { name: 'Prospects', href: '/prospects', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Yosef Kirschenbaum', href: "/agents/7a0ac7f6-39c8-49fe-afad-52b7f1166887", initial: 'Y', current: false },
  { id: 2, name: 'Chinelo Newton', href: '/agents/"8f21a8b8-d084-4b18-8f0e-54c4cd596869"', initial: 'C', current: false },
  { id: 3, name: 'Jason Brizan', href: '/agents/"8f21a8b8-d084-4b18-8f0e-54c4cd596869"', initial: 'J', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const profileWidth = 'max-w-5xl inline-flex  mx-auto px-4 sm:px-6 lg:px-8';

export default function AgentPage({agent}) {
  console.log("AGENT_AgentPage Passed down:", agent);
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div id="AGENT_PAGE" className='min-h-[calc(80vh_-_216px)] bg-section-bg-2  text-sm leading-6 justify-center content-center w-full min-h-screen pb-'>
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 !hidden  lg:hidden">
          <DialogBackdrop
            transition
            className="inline-flex bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-custom-gradient'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-pink-600' : 'text-gray-400 group-hover:text-custom-gradient',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-50 text-custom-gradient-secondary'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-custom-gradient-secondary',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? 'border-indigo-600 text-custom-gradient-secondary'
                                    : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-custom-gradient-secondary',
                                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium',
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

     
        {/* lg:pl-72 xl:pr-96 inline-flex*/}
        <main className="justify-center content-center sm:-mt-4 lg:px-24 xl:px-34  min-[1500px]:px-44  gap-x-4">
       
        {/* -------LEFT BAR BEGIN ------- */}
      
         <div className=" lg:relative  lg:flex-col"> 
           <AgentProfileCard agent={agent} /> 
        </div>
        {/* <div className="hidden sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="h-8 w-8 rounded-full bg-gray-50"
            />
          </a>
        </div> */}
        
{/* 
        -------LEFT BAR END ------- */}
 

      
        </main>

      </div>
    </div>
  )
}





export const AgentProfileCard = ({agent}) => {
  return          <div className="">
  <div className="sm:pr-4 py-0 md:pt-4 sm:px-6 lg:pr-8 pb-  ">
       {/* <!-- Card start --> */}
  <div class="bg-black  max-[600px]:min-w-[90vw] sm:w-3xl lg:min-w-[384px] lg:max-w-[30vw] xl:min-w-[37vw] mx-auto dark:bg-gray-900  overflow-hidden shadow-sm hover:shadow-lg">
  <div class="border-b  pb-6" >
   <div class="text-center my-0">
       {/* ----Profile --Header */}
       <div>
 <div className="h-48 w-full lg:h-64 bg-custom-gradient"
    // className={`h-48 w-full lg:h-64 
    // ${getGradient(agent.username || agent?.name)}`}
  />
  <div
    className={`${profileWidth} !ml-[-16em] sm:!ml-[1em] -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5`}
  >
    <div className=" relative group h-24 w-24 rounded-full overflow-hidden sm:h-32 sm:w-32">
    {agent?.image?.asset?.url ?
        <BlurImage
          src={agent.image.asset.url }
          alt={agent?.name}
          width={300}
          height={300}
        />
        :
        <DefaultAvatar/>
        }
    </div>
    <div className="mt-20 pl-4 sm:flex-1 mt-12 sm:min-w-0 sm:flex sm:items-center 
                     sm:justify-end sm:space-x-6 sm:pb-1 gap-x-4">
      <div className="flex min-w-0 flex-1 items-center space-x-2 mt-[-2em]">
        {/* <h3 className="font-bold text-2xl text-gray-800 !text-white mb-1 mt-2 truncate">
          {agent?.name  ? agent.name : agent.username}
        </h3>
        {!agent?.verified && (
          <CheckInCircleIcon className="w-6 h-6 text-[#2196F3]" />
        )} */}
      </div>
     
    </div>
  </div>
</div>
{/* max-[600px]:flex */}
       
          <div class="py-4 md:pt-6 ">
              {/* <h4 class="px-8 flex mb-1 font-bold !text-[28px] lg:text-2xl text-gray-800 text-white dark:text-white   mb-1 mt-2">
                Realestate Agent</h4> */}
              {/* <div class="flex mx-8 py-2 inline-flex px-12 text-left lg:text-right mr-24 font-bold !text-sm lg:text-xl xl:text-2xl text-gray-800 text-white/90 dark:text-white mb-1">
                <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg><p class="text-left font-bold !text-sm lg:text-xl xl:text-2xl text-gray-800 text-white dark:text-white mb-1">
                  New York, NY
               </p>
          </div> */}
              {/* <div class="flex inline-flex text-gray-200 dark:text-gray-700 dark:text-gray-300 items-center">
                  <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path class="" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  </svg>
                  <h1 className='px-12 text-left font-bold !text-sm lg:text-xl xl:text-2xl text-gray-800 text-white/90 dark:text-white mb-1'></h1>
                  New York, NY
              </div> */}
          </div>
      </div>
      {/* <FollowMessageButtons /> */}
      <div class="px-6 py-4 lg:-mt-4"> 
      <div className="-1">
           <Link href={clsx(`tel:+1-${agent.phone}`)} className="text-white group">
              <span className="font-bold text-2xl text-gray-800 !text-white mb-1 mt-2 truncate">{agent?.name  ? agent.name : agent.username}</span>
           </Link> 
      </div>
      <div className="0 mb-3">
            <Link href={clsx(`tel:+1-${agent.phone}`)} className="text-white group">
            <span className="group pr-2 font-bold text-gray-200">
               <Globe2Icon aria-hidden="true" className="h-5 w-5 text-pink-100 -mb-1 group-hover:text-pink-500 " />
           </span>
              <span className="text-pink-100 text-xl lg:text-lg group-hover:text-pink-400">{agent?.speacksLanguages?.length ? speacksLanguages.map((language)=>(<span className='inline-flex gap-x-3'>{language}</span>)) :"Mandingo | English"}</span>
           </Link> 
         
      </div>
      <div className="1 mb-3">
     
         <Link href={clsx(`tel:+1-${agent.phone}`)} className="text-white group">
            <span className="group pr-2 font-bold text-gray-200">
               <PhoneIcon aria-hidden="true" className="h-5 w-5 text-pink-100 -mb-1 group-hover:text-pink-500 " />
           </span>
              <span className="text-pink-100 text-xl lg:text-lg group-hover:text-pink-400">{agent.phone}</span>
           </Link> 
      </div>
       <div className="2  mb-3">
        <Link  href={clsx(`mailto:${agent.email}?subject=Inquiry&body=Hello ${agent.name}, I am reaching out about ...."`)}className="text-white group">
          <span className="pr-2 text-bold ">  
          <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-pink-100  group-hover:text-pink-500 -mb-1 " />
          </span>
           <span className="-mt-4 text-pink-1x00 text-xl lg:text-lg group-hover:text-pink-400"> {agent.email}</span>
          </Link>
       </div>
         
      </div>

      <div className="px-6 flex gap-2 px-2 gap-x-4 md:gap-x-5 md:gap-x-6">
          {/* <button
              class="flex-1  max-w-[9em] ] rounded-sm bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
              Follow
          </button>   */}
        
          <Link  href={clsx(`mailto:${agent.email}?subject=Inquiry&body=Hello ${agent.name}, I am reaching out about ...."`)}>
                <button className="hover:bg-custom-gradient hover:text-white bg-white hover:!text-custom-gradient-2 flex-1 rounded-sm dark:bg-blue-800 text-black
                 dark:text-white antialiased font-bold  dark:hover:border-sky-200 px-4 py-2">
                Message
                </button>
            
          </Link> 
          <Link href={clsx(`tel:+1-${agent.phone}`)}>
                <button className="hover:bg-custom-gradient hover:text-white bg-white hover:!text-custom-gradient-2 flex-1 rounded-sm dark:bg-blue-800 text-black
                 dark:text-white antialiased font-bold  dark:hover:border-sky-200 px-4 py-2">
                Call
                </button>
            
          </Link> 
      </div>
  </div>
  <div class="px-6 py-4">
    {/* <p className="text-white">{agent.phone}</p> <p className="text-white">{agent.email}</p> */}
      {/* <div class="flex gap-2 items-center text-gray-200 dark:text-gray-300 mb-4">
          <svg class="h-6 w-6 text-gray-200 dark:text-gray-400" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path class=""
                  d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
          </svg>
          <span><strong class="text-slate-200 dark:text-white">12</strong> Followers you know</span>
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
                  class="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-100 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
                  +999
              </span>
          </div>
      </div> */}
  </div>
  <div id="agent-tabs">
  <AgentsTabs bio={agent.bio}/>
  </div>
</div>
{/* <!-- Card end --> */}

</div>
</div>
}

export const DefaultAvatar = ()=> {
  return <div class="sc-hLQSwg dmFaqS h-full w-full object-cover"><svg width="11" height="7" viewBox="0 0 11 7" fill="none"><path d="M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z" fill="gray"></path></svg></div>
}