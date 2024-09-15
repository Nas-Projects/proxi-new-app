"use client"

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { useRef } from 'react'

import Link from 'next/link'
import { GotoItem, RegularButton } from '../GotoItem'
import clsx from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/outline'


import { OmariAvatar, OmariMasterIcon } from '../OmariMasterIcon'

import { urlFor } from "@/sanity/lib/image.js";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const user = {
  name: 'Nasser Sanou',
  imageUrl: 'nas_singing_portrait.src',
}
// const navigation = [
//   { name: 'Dashboard', href: '/dashboard', icon: 'HomeIcon', current: false },
//   { name: 'Calendar', href: '#', icon: 'CalendarIcon', current: false },
//   // { name: 'Teams', href: '#', icon: 'UserGroupIcon', current: false },
//   {
//     name: 'Saved',
//     href: '#',
//     icon: 'MagnifyingGlassCircleIcon',
//     current: true,
//   },
//   { name: 'Announcements', href: '#', icon: 'MegaphoneIcon', current: false },
//   // { name: 'Office Map', href: '#', icon: 'MapIcon', current: false },
// ]
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const secondaryNavigation = [
  // { name: 'Apps', href: '/projects', icon: 'SquaresPlusIcon' },
  { name: 'Settings', href: '/settings', icon: 'CogIcon' },
]


const tabsPanel = [
  { name: 'All', href: '#', current: false },
  { name: 'Women', href: '/exercises/women', current: true },
  { name: 'Men', href: '/exercises/men', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CustomSidebar({  }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('PAGE_IN_COMPONENTS_DIR_This is client-side rendering');
    } else {
      console.log('PAGE_IN_COMPONENTS_DIR_This is server-side rendering');
    }
  }, []);



  const [tabs, setTabs] = useState(tabsPanel)
  const [isLiked, setIsLiked] = useState([{ id: 1, liked: true }])
  const [currentTab, setCurrent] = useState('Women')
  // const [allDiets, setAllDiets] = useState(all)
  // const [men, setMenDiets] = useState(menExercises)
  // const [women, setWomen] = useState(womenExercises)

  function setCurrentTab(tabName) {
    console.log('TAB NAME', tabName)
    const tabsState = [...tabs].map((tab) => {
      tab.current = false
      if (tab.name == tabName) {
        tab.current = true
        setCurrent(tabName)
        console.log('TabNAMe', tabName)
        // let completedtask = tasks[task.id].taskCompleted === true
        // setCompletedTasks([...completedTasks], completedtask)
      }

      return tab
    })

    console.log('updatedTasks', tabsState)
    setTabs(tabsState)
  }

  const [sidebarOpen, setSidebarOpen] = useState(true)
  const sectAboutRef = useRef(null)
  const sectAboutMeRef = useRef(null)
  const podcastsRef = useRef(null)
  const sectProjectRef = useRef(null)
  const blogsRef = useRef(null)
  const learnCode = useRef(null)
  const contactRef = useRef(null)
  const podcastRef = useRef(null)
  const socialsRef = useRef(null)
  const githubRef = useRef(null)

  return (
    <>
     
  
      <div className="mt-2 h-full pb-24 md:-mt-20 dark:text-white">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 "
            onClose={setSidebarOpen}
          >
            {/* <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-indigo-600 bg-opacity-75" />
            </Transition.Child> */}

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-black focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2 sm:hidden">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center  rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[transparent]"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <span className="">Directory</span>
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-zinc-900 text-gray-100'
                                : 'text-gray-600 hover:bg-zinc-900 hover:text-gray-100',
                              'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? 'text-gray-200'
                                  : 'text-gray-400 group-hover:text-gray-100',
                                'mr-4 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <hr
                        className="my-5 border-t border-gray-200"
                        aria-hidden="true"
                      />
                      <div className="space-y-1 px-2">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-zinc-900 hover:text-gray-100"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                        
                      </div>
                      <li className="mt-auto">
                 
                </li>
                    </nav>
                  </div>
                  <a
                    href="#"
                    className="group px-4 -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                    />
                    Settings
                  </a>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    
                    <Link href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={user?.imageUrl || '/https://avatars.githubusercontent.com/u/20908727?v=4&quot'}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            View profile
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* Static sidebar for desktop */}

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

          <div className="relative z-0 -mt-12 flex  flex-1 overflow-hidden md:-mt-0 md:pt-12 ">
            <div className="relative z-0 flex-1  focus:outline-none xl:order-last dark:text-white">
            <button  
              type="button" 
              onClick={() => setSidebarOpen(true)} 
              className="rounded-full h-8 w-4 flex items-center justify-between  px-5 py-1.5 py-3">
                <div></div> 
                  <div>
                    <div
                    
                      className="inline-flex h-4 w-4  items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:!outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
                    
                    >
                      <span className="sr-only">Open sidebar</span>
                      <svg
                        viewBox="0 0 10 9"
                        fill="none"
                        stroke-linecap="round"
                        aria-hidden="true"
                        class="w-.5 stroke-zinc-900 dark:stroke-slate-900 group-hover:stroke-slate-100"
                      >
                        <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              {/* Breadcrumb nav should be here*/}

              <article>
              
                <div className='relative'>
                  <div className="landing-hero-background lg:h-screen/2  sm:pt-0">
                 
                  
                  <div className="!absolute !bg-white top-0 left-0  bg-white z-40 group 
                        dark:border rounded-full 
                        dark:border-[var(--themeColor3)]
                        hover:!bg-[black] 
                        dark:!bg-[var(--themeColor)] border-b 
                        border-gray-200 bg-gray-50">
                        <button  
                        type="button" 
                        onClick={() => setSidebarOpen(true)} 
                        className="rounded-full h-8 w-4 flex items-center justify-between  px-5 py-1.5 py-3">
                          <div></div> 
                            <div>
                              <div
                              
                                className="inline-flex h-4 w-4  items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:!outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
                              
                              >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                  viewBox="0 0 10 9"
                                  fill="none"
                                  stroke-linecap="round"
                                  aria-hidden="true"
                                  class="w-.5 stroke-zinc-900 dark:stroke-slate-900 group-hover:stroke-slate-100"
                                >
                                  <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    </article>
            </div>
          </div>    
        </div>
      </div>          
    </>
  )
}



