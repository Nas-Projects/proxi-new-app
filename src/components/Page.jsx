import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import backgroundGif from '@/images/vllo-3.gif'
// import nas_singing_portrait from '@/images/nas_singing_portrait.jpeg'
// import SocialMediaHandle, { Galery } from '@/components/Gallery'
import { useRef } from 'react'
import { FeaturedContent } from './FeaturedContent'
import { ReturnLatest } from '@/lib/ReturneLatest'
import Link from 'next/link'
import { GotoItem, RegularButton } from './GotoItem'
import clsx from 'clsx'
import DetailAbsolute from './DetailAbsolute'
import { XMarkIcon } from '@heroicons/react/24/outline'


import { OmariAvatar, OmariMasterIcon } from './OmariMasterIcon'

import { urlFor } from "@/sanity/lib/image.js";
//import  Bars3Icon,
// CalendarIcon,
// CogIcon,
// HomeIcon,
// MagnifyingGlassCircleIcon,
// MapIcon,
// MegaphoneIcon,
// SquaresPlusIcon,
// UserGroupIcon,
// XMarkIcon,
// '@heroicons/react/24/outline'
//import  ChevronLeftIcon,
// EnvelopeIcon,
// FunnelIcon,
// MagnifyingGlassIcon,
// PhoneIcon,
// ('@heroicons/react/20/solid')
// import founderPoster1 from '@/images/founderPoster1.jpg'

const user = {
  name: 'Nasser Sanou',
  imageUrl: 'nas_singing_portrait.src',
}
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: 'HomeIcon', current: false },
  { name: 'Calendar', href: '#', icon: 'CalendarIcon', current: false },
  // { name: 'Teams', href: '#', icon: 'UserGroupIcon', current: false },
  {
    name: 'Saved',
    href: '#',
    icon: 'MagnifyingGlassCircleIcon',
    current: true,
  },
  { name: 'Announcements', href: '#', icon: 'MegaphoneIcon', current: false },
  // { name: 'Office Map', href: '#', icon: 'MapIcon', current: false },
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

export default function Page({ pageContent, featured, pageBackgrounds }) {
  console.log("PAGE_CONTENT", pageContent)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('PAGE_IN_COMPONENTS_DIR_This is client-side rendering');
    } else {
      console.log('PAGE_IN_COMPONENTS_DIR_This is server-side rendering');
    }
  }, []);
  // const { category, description, benefits, backgroundImage, resources } =
  //   pageContent[0]

  // const women = resources[1].articles
  // const men = resources[0].articles
  // const all = men.concat(men)

  const menExercises = [];
  const womenExercises = [];
  
pageContent.excercises.forEach(exercise => {
    const tagTitles = exercise.tags.map(tag => tag.title.toLowerCase());
    
    if (tagTitles.includes("men")) {
      menExercises.push(exercise);
    } else if (tagTitles.includes("woman") || tagTitles.includes("women")) {
      womenExercises.push(exercise);
    }
  });
  
  const allExercises = menExercises.concat(womenExercises);
  
  console.log('Men Exercises:', menExercises);
  console.log('Women Exercises:', womenExercises);
  console.log('All Exercises:', allExercises);

  console.log('ALLLLL', allExercises)
  const [tabs, setTabs] = useState(tabsPanel)
  const [isLiked, setIsLiked] = useState([{ id: 1, liked: true }])
  const [currentTab, setCurrent] = useState('Women')
  // const [allDiets, setAllDiets] = useState(all)
  const [men, setMenDiets] = useState(menExercises)
  const [women, setWomen] = useState(womenExercises)

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
  const handleLikes = (id, type) => {
    if (type == 'women') {
      const updatedWomen = [...women].map((diet) => {
        if (diet.id == id) {
          diet.liked = !diet.liked

          console.log('WOMEN LIKED ID ', id)
        }

        return diet
      })

      setWomen(updatedWomen)
    }
    if (type == 'men') {
      const updatedMenDiets = [...men].map((diet) => {
        if (diet.id == id) {
          diet.liked = !diet.liked

          console.log('MEN LIKED ID ', id)
        }

        return diet
      })
      setMenDiets(updatedMenDiets)
    }

    // setIsLiked([...isLiked, { id: id, liked: true }])
  }
  // const [likedId, setIsLikedId] = useState(null)

  console.log('PAGE CONTENT-->', pageContent)
  const [sidebarOpen, setSidebarOpen] = useState(false)
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
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div className="mt-2 h-full pb-24 md:-mt-20 dark:text-white">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 "
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

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
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
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
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
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
                            className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
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
              {/* Breadcrumb nav should be here*/}

              <article>
                {/* Profile header */}
                <div className='relative'>
                  <div className="landing-hero-background lg:h-screen/2  sm:pt-0">
                  <img
                      className="sm:hidden landing-hero-background h-full w-full object-cover max-[740px]:aspect-[598/600]"
                      src='/exercise-bg.webp'
                      //  src={pageBackgrounds.mobile}
                      //  srcSet={pageBackgrounds.mobile}
                        width={1900}
                        height={2500}
                        alt=""
                    />
                      <img id="DESKTOP-BG"
                        className="hidden sm:flex landing-hero-background w-full object-cover max-[740px]:aspect-[598/600] max-h-[570px]"   
                        // src={pageBackgrounds.desktop}
                        // srcSet={pageBackgrounds.desktop}
                      src='/exercise-bg.webp'
                      width={1900}
                      height={2500}
                      alt=""
                    />
                 
           <div className="!absolute dark:!bg-white top-[38%] left-[4%] z-40 group 
                        dark:border rounded-full 
                        dark:border-[var(--themeColor3)]
                        hover:!bg-[black] 
                        dark:!bg-[var(--themeColor)] border-b 
                        border-gray-200 bg-gray-50">
            <button   type="button" onClick={() => setSidebarOpen(true)} 
            className="rounded-full h-8 w-4 flex items-center justify-between  px-5 py-1.5 py-3">
              {/* <div></div> */}
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
          <div className="max-w-8xl sm:px-6  dark:text-white dark:border-t dark:border-[var(--themeColor)] lg:pr-44">
          <h1 className="text-center text-4xl mt-12 font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl dark:hover:text-[var(--themeColor2)] dark:text-[#e6e6e6]">
                    Workouts Excercises
               </h1>
              <div className="relative -mt-12 sm:-mt-6 sm:items-end sm:space-x-5 xl:flex ">
           
                <div id="top-content"  
                     className=" grid grid-cols-1 gap-x-6 gap-y-8 lg:mt-14 xl:grid-cols-2">
                        <div class="max-w-8xl relative sm:mx-auto pt-16 sm:pt-20 lg:pt-8">
                          {/* {category === 'exercises' ? (
                            <h1 class="text-center text-4xl font-extrabold tracking-tight text-slate-900  sm:text-5xl lg:text-6xl dark:hover:text-[var(--themeColor2)] dark:text-[#e6e6e6]">
                          Workouts Excercises
                            </h1>
                          ) : (
                            <h1 class="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-[var(--themeColor2)]">
                              {category}
                            </h1>
                          )} */}
                          {/* <p class="mx-auto mt-6  max-w-3xl px-4 text-center text-lg text-slate-600 
                           lg:px-36 dark:text-gray-300 text-[var(--themeColor)]">
                            {description}
                            <code class="font-mono font-medium !text-black dark:text-[var(--themeColor)]">
                              <br />
                              Feefree to explore all {category}
                            </code>{' '}
                         <span className='dark:text-[#e6e6e6]'>OMARI HILLS Icon.</span>  
                          </p> */}
                          {/* <GenderSpecifiButtons /> */}
                          <p class="flex-block lg:inline-flex mx-auto mt-6 sm:mt-0  max-w-3xl px-4 text-center  text-slate-600 
                           lg:px-36 dark:text-gray-300 text-[var(--themeColor)] lg:text-6xl">
                           <Fragment className="hidden lg:flex"><OmariAvatar /> </Fragment> 
                          </p>
                        
                        </div>  <div id="cta" className="mx-0 lg:mt-4 lg:mx-[1em] lg:!justify-center w-full lg:min-w-[5em]">
                            <div class="sm:mt-6 !h-[4em] justify-center sm:space-x-6 text-sm sm:mt-10 !inline-flex  h-12 w-full ">
                              <button
                                type="button"
                                class="dark:bg-[#453c2d] highlight-white/5 inline-flex
                                        w-72 items-center space-x-3 rounded-lg 
                                       bg-white px-4 text-left text-slate-400 shadow-sm ring-1 
                                       ring-gray-900 hover:ring-black focus:outline-none 
                                       focus:ring-2 dark:focus:ring-sky-500 focus:!ring-black  
                                       dark:bg-slate-800 dark:text-slate-300 dark:ring-2 dark:bg-[var(--themeColor)] dark:hover:bg-slate-100
                                       sm:inline-flex"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="flex-none text-slate-300 dark:text-slate-400"
                                  aria-hidden="true"
                                >
                                  <path d="m19 19-3.5-3.5"></path>
                                  <circle cx="11" cy="11" r="6"></circle>
                                </svg>
                                <span class="flex-auto dark:hover:text-black text-xl">Weight loss ...</span>
                                <kbd class="font-sans font-semibold dark:text-slate-500">
                                  <abbr
                                    category="Command"
                                    class="text-slate-300 no-underline dark:text-slate-500"
                                  >
                                    ⌘
                                  </abbr>{' '}
                                  K
                                </kbd>
                              </button>
                              <span className="flex !h-[4em]"><Link
                                className="dark:highlight-white/20 dark:bg-[#575555]  dark:!bg-[#383c42] dark:bg-var(--themeColor)] lg:dark:bg-[#090909]
                                flex text-xl sm: items-center justify-center rounded-lg  px-6 font-semibold text-white hover:bg-slate-700 
                                focus:outline-none
                                 focus:ring-2 focus:ring-slate-400 
                                 focus:ring-offset-2 focus:ring-offset-slate-50 
                                dark:text-black dark:hover:!text-black dark:hover:bg-white sm:w-auto !text-white"
                                href="#"
                              >
                                Search
                              </Link></span>
                            </div>
                          </div>
                        <div className="mt-6 sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1 xl:flex">
                         { featured && <FeaturedContent featured={featured} />}
                        </div>
                      </div>
                    </div>
    
                    {/* <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                      <h1 className="truncate text-2xl font-bold text-gray-900">
                        {profile.name}
                      </h1>
                    </div> */}
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-6 justify-center">
                  <div className="border-b border-t border-gray-200 border-gray-800 dark:border-[var(--themeColor)] content-center">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
                      <nav className="-mb-px flex space-x-8 dark:space-x-0 justify-center" aria-label="Tabs">
                        {tabs.map((tab) => (
                          <button
                            onClick={() => setCurrentTab(tab.name)}
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                              tab.current
                                ? 'border-sky-500  bg-gray-200 text-gray-900 dark:border-[var(--themeColor2)] border-indigo-500 dark:bg-[white] dark:hover:bg-green-800  dark:hover:text-white dark:hover:border-green-200'
                                : 'border-transparent text-gray-100 hover:border-black hover:text-gray-700 dark:text-gray-100  dark:hover:text-green-700',
                              'whitespace-nowrap border-b-2 py-4  sm:py-6 px-8 text-2xl md:text-3xl lg:text-4xl  font-medium sm:text-2xl text-whitedark:hover:border-b dark:hover:border-green-200'
                            )}
                            style={{fontSize: '24px',
                              lineHeight: '32px'}}
                            // aria-current={tab.current ? 'page' : undefined}
                          >
                            {tab.name}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
               <div className="relative h-fulllg:mt-12">
                <div
                  id="pro-gallery-comp-kaw9poau"
                  className="!text-white pro-gallery lg:px-18 mx-auto px-4 sm:px-24 xl:px-10 dark:text-white"
                >
                  <div className="!text-white pro-gallery-margin-container lg:h-[430pxpx] lg:min-w-[1133px] relative">
                  {currentTab === 'All' ? (
                     <>
                      {/* <h1 className="mt-0 flex-auto px-6 py-4 text-center text-2xl font-semibold uppercase text-slate-900 md:px-0 dark:text-white">
                        {currentTab}
                      </h1> */}
                    
                    <AllExercises
                    // resources={resources}
                      men={men}
                      women={women}
                      // category={category}
                      isLiked={isLiked}
                      handleLikes={handleLikes}
                    /></>
                  ) : (
                    <>
                      {
                        // <h1 className="mt-0 flex-auto px-6 py-4 text-center text-2xl font-semibold uppercase text-slate-900 md:px-0 dark:text-white">
                        //   {currentTab}
                        // </h1>
                      }
                      {currentTab == 'Men' && (
                        <MenList
                          men={men}
                          // category={category}
                          isLiked={isLiked}
                          handleLikes={handleLikes}
                        />
                      )}
                      {currentTab == 'Women' && (
                        <WomenList
                          women={women}
                          // category={category}
                          isLiked={isLiked}
                          handleLikes={handleLikes}
                        />
                      )}
                    </>
                  )}
               
                  {/* {currentTab == 'All' && <ItemLIst resources={resources} />} */}

                  </div>
                 
                </div>
               </div>
                

                
              </article>
            </div>
          </div>    
        </div>
      </div>            <footer class="bg-black border-t border-accent-2">
                  <div class="container mx-auto px-5"><div class="py-28 flex flex-col lg:flex-row items-center"><h3 class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                Did not find what you&apos;re looking for?</h3><div class="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                <Link href="/register" className="dark:bg-[white] mx-3 bg-black hover:bg-white dark:text-black hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
                Message Omary Hills</Link><Link href="/register" class="mx-3 text-xl text-green-600 font-bold hover:underline uppercase">Register</Link><strong className="pl-2 lowercase">For Full Access</strong>.</div></div></div></footer>
    </>
  )
}

const GenderSpecifiButtons = () => {
  return (
    <div class="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
      <Link
        class="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-black dark:hover:bg-sky-400 sm:w-auto"
        href="/diets/women"
      >
        Women
      </Link>
      <Link
        class="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-black dark:hover:bg-sky-400 sm:w-auto"
        href="/diets/men"
      >
        Men
      </Link>
    </div>
  )
}

const ItemLIst = ({ resources }) => {
  console.log('ITems = ' + resources)
  return (
    <div
      id="resources-grid"
      className="mt-2 grid grid-cols-1 gap-x-6 sm:gap-y-8 lg:mt-14 xl:grid-cols-2 dark:text-white"
    >
      {resources
        .sort((a, z) => new Date(z.date) - new Date(a.date))
        .map((item) => {
          return (
            <div
              key={item.title}
              class="flex-block relative  font-sans md:flex"
            >
              <div class="relative w-64 flex-none lg:w-[20rem]">
                <img
                  src={item.imageUrl}
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <form class="p-6 md:flex-auto">
                <div class="w-68 relative mb-4 flex-none  md:hidden lg:w-[20rem]">
                  <img
                    src={item.imageUrl}
                    alt=""
                    class=" inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="mt-4 flex flex-wrap">
                  <h1 class="flex-auto text-md  sm:text-lg font-semibold text-slate-900">
                    {item.title}
                  </h1>
                  <div class="text-lg font-semibold text-slate-500">
                    <div class="mb-6 flex space-x-4 text-sm font-medium">
                      <div class="flex flex-auto space-x-4">
                        <div class=" top-0 right-0 hidden items-center space-x-1 dark:text-slate-100 sm:flex">
                          <dt class="!text-black text-sky-500 text-black">
                            <span class="sr-only">Star rating</span>
                            <svg width="16" height="20" fill="currentColor">
                              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path>
                            </svg>
                          </dt>
                          <dd>2.66</dd>
                        </div>
                      </div>
                      <button
                        class="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-200 text-slate-300"
                        type="button"
                        aria-label="Like"
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mt-2 w-full flex-none text-md font-medium text-slate-700">
                    In stock
                  </div>
                </div>
                <div class="mt-1md: mb-2 flex items-baseline border-b border-slate-200 pb-0"></div>

                <p class="-pb-[10px] lg:-pb-0 text-xl text-slate-700">
                  {item.description}
                </p>
              </form>
            </div>
          )
        })}
    </div>
  )
}

const AllExercises = ({ men, women,  isLiked, handleLikes }) => {
  console.log('IS LIKED LIKED ', isLiked)
  const arr = [[1], [2, 3], [4], ["GFG"]]; 
const allExercises = [].concat(...men, women);
console.log(allExercises);
 console.log("FLATTEN ", allExercises);
  // const women = resources[1]
  // const men = resources[0]
  return (
    <div id="ALL-RESOURCES-GRID"
      className="mt-2 grid grid-cols-1 gap-x-6 sm:gap-y-8 lg:mt-14 lg:grid-cols-2  xl:grid-cols-3">
    {allExercises.map((exercise, index)=> {
      return  <DescktopCard key={index}  item={exercise}/>})
        }
    </div>
  )
}

const MenList = ({ men, isLiked,handleLikes}) => {
  console.log('IS LIKED LIKED ', isLiked)

  return (
    <div
      id="MEN-RESOURCES-GRID"
      className="mt-0 grid sm:grid-cols-2 gap-x-6 sm:gap-y-8  gap-y-0 lg:mt-14 xl:grid-cols-3 gap-x-6 lg:gap-x-12 sm:gap-y-8 lg:mt-14  lg:mx-4"
    >
      {men
        .sort((a, z) => new Date(z.date) - new Date(a.date))
        .map((item) => {
          return (<>
          <div key={item._id} className="sr-only lg:not-sr-only w-full relative my-4 font-sans">
            <DescktopCard item={item} men/>
          </div>
           
            <div
              key={item.title}
              class="lg:hidden bg-black pb-4 rounded-xl  flex-block relative my-4 font-sans md:flex"
            >
{/*               
              <Link  href={`exercises/${item._id}`} class="relative w-64 flex-none lg:w-[20rem]">
                <img
                  src={item.imageUrl}
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </Link> */}
              <div className="mx-auto relative">
                <form class="px-2 md:flex-auto sm:mx-8">
                  
                {/* <Link   href={`exercises/${item._id}`}  class="w-68 relative mb-4 flex-none  md:hidden lg:w-[20rem]">
                  <img
                    src={urlFor(item.mainImage).url()}
                    alt=""
                    class="inset-0 h-[18em] sm:h-full w-full object-cover"
                    loading="lazy"
                  />
                   <DetailAbsolute title= {item.title} tag={'men'} />
                </Link> */}
                <div class="mt-1 flex items-baseline border-b border-slate-200 dark: border-slate-500 pb-0 md:mb-2"></div>
               <div className="flex sm:hidden"><RegularButton  text={"View excercise"}  href={`exercises/${item._id}`} arrow/>
                </div> 
                <p class="sr-only sm:not-sr-only py-4 font-normal font-sans text-xl pt-6 text-ui-fg-subtle">
                  {item.description} 
                  <Fragment className="my-4"> 
                    <RegularButton  text={"View excercise"}  href={`exercises/${item._id}`} arrow/>
                  </Fragment>
                 
                </p>
              </form>
              </div>
              
            </div></>
          )
        })}

    </div>
  )
}

const WomenList = ({ women,  isLiked, handleLikes }) => {
  console.log('IS LIKED LIKED ', isLiked)
  // console.log('RESOURCES', resources[0])
  // const women = resources[1]

  return (
    <div
      id="WOMEN-RESOURCES-GRID"
      className="mt-4 grid sm:grid-cols-2 gap-x-6 sm:gap-y-8 lg:mt-14 xl:grid-cols-3 gap-x-6 lg:gap-x-12 sm:gap-y-8 lg:mt-14  lg:mx-4"
    >
    
      {women
        .sort((a, z) => new Date(z.date) - new Date(a.date))
        .map((item) => {
          return (<>
          <div key={item._id} className="sr-only lg:not-sr-only w-full relative my-4 font-sans">
            <DescktopCard item={item} />
          </div>
           
            <div
              key={item.title}
              class="lg:hidden flex-block relative my-4 font-sans md:flex  bg-black pb-4 rounded-xl "
            >
              
              <Link   href={`exercises/${item._id}`} class="relative w-64 flex-none lg:w-[20rem]">
                <img
                  src={urlFor(item.mainImage).url()}
                  // src={item.mainImage.src}
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </Link>
              <div className="mx-auto relative">
                <form class="px-2 md:flex-auto sm:mx-8">
                  
                <Link   href={`exercises/${item._id}`} class="w-68 relative mb-4 flex-none  md:hidden lg:w-[20rem]">
                  <img
                     src={urlFor(item.mainImage).url()}
                    // src={item.imageUrl}
                    alt=""
                    class="inset-0 h-[19em] sm:h-full w-full object-cover "
                    loading="lazy"
                  />
                   <DetailAbsolute title= {item.title} tag={'women'} />
                </Link>
                {/* <div class="mt-4 sm:flex sm:flex-wrap !inline-flex">
            
                </div> */}
                <div class="my-1 flex items-baseline border-b border-slate-200 dark: border-slate-500 pb-0 md:mb-2"></div>
               <div className="flex sm:hidden"><RegularButton  text={"View excercise"}  href={`exercises/${item._id}`} arrow/>
                </div> 
                {/* <p class="sr-only sm:not-sr-only py-4 font-normal font-sans text-xl  pt-6  text-ui-fg-subtle">
                  {item.description} 
                  <div className="my-4"> 
                    <RegularButton  text={"View excercise"}  href={`exercises/${item._id}`} arrow/>
                    </div>
                 
                </p> */}
              </form>
              </div>
              
            </div>
            </>
          )
        })}
      {/* </div> */}
    </div>
  )
}



export const DescktopCard =({item, men}) => {
  const menImageUrl = "https://static.wixstatic.com/media/ad420a_504fb4aaf08d4b2a95d2abe5e7b7ff8e~mv2.jpg/v1/fill/w_668,h_668,q_90/ad420a_504fb4aaf08d4b2a95d2abe5e7b7ff8e~mv2.webp"
  return  <div
  className="!relative gallery-item-container item-container-regular has-custom-focus visible clickable zoom-in-on-hover"
  id="pgi0aec496692a941b5aaed1f06c433b65e_0"
  tabIndex={0}
  aria-label=""
  data-hash="0aec4966-92a9-41b5-aaed-1f06c433b65e"
  data-id="0aec4966-92a9-41b5-aaed-1f06c433b65e"
  data-idx={0}
  role="link"
  data-hook="item-container"
  style={{
    position: "absolute",
    inset: "0px auto auto 0px",
    margin: 0,
    width:'430px',
    height: '430px',
    overflow: "hidden",
    transition: "opacity 0.2s ease 0s",
    opacity: 1,
    display: "block"
  }}
>
<Link href={`exercises/${item._id}`}>
    <div href={`exercises/${item._id}`}
      data-hook="item-wrapper"
      className="gallery-item-wrapper visible cube-type-fill [object Object]"
      id="item-wrapper-0aec4966-92a9-41b5-aaed-1f06c433b65e"
      style={{ height: 430, width: 430, margin: 0 }}
    >
      <div href={`exercises/${item._id}`}
        className="w-[398px] !h-[413px] lg:w-[430px] gallery-item-content item-content-regular image-item gallery-item-visible gallery-item gallery-item-preloaded  load-with-color image-loaded"
        data-hook="image-item"
        style={{ marginTop: 0, marginLeft: 0 }}
      >
        <picture>
          <source  
            // src={'https://static.wixstatic.com/media/ad420a_504fb4aaf08d4b2a95d2abe5e7b7ff8e~mv2.jpg/v1/fill/w_668,h_668,q_90/ad420a_504fb4aaf08d4b2a95d2abe5e7b7ff8e~mv2.webp'}
            type="image/webp"
          />
          {/* <source
          
            srcSet="https://static.wixstatic.com/media/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg/v1/fill/w_358,h_358,q_90/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg 1x, https://static.wixstatic.com/media/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg/v1/fill/w_716,h_716,q_90/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg 2x, https://static.wixstatic.com/media/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg/v1/fill/w_1074,h_1074,q_90/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg 3x, https://static.wixstatic.com/media/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg/v1/fill/w_1432,h_1432,q_90/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg 4x, https://static.wixstatic.com/media/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg/v1/fill/w_1790,h_1790,q_90/ad420a_f1883ca910c7454b81b034469bb362a7~mv2.jpg 5x"
            type="image/jpeg"
          /> */}
          <img
            id="0aec4966-92a9-41b5-aaed-1f06c433b65e"
            className="!max-h-[390px] w-[398px] sm:!h-[413px] lg:w-[430px] gallery-item-visible gallery-item gallery-item-preloaded w-full"
            data-hook="gallery-item-image-img"
            data-idx={0}
            src={urlFor(item.mainImage).url()}
            // src={item.mainImage.src}
            alt=""
            loading="eager"
            style={{ width: 430, height: 430 }}
          />
        </picture>
      </div>
      <div
        className="!w-[395px] lg:w-[430px]"
        style={{
          width: 430,
          height: 430,
          marginTop: 0,
          marginLeft: 0,
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          alignItems: "flex-end"
        }}
      >
        <div
          data-hook="item-hover-0"
          aria-hidden="true"
          className="gallery-item-hover fullscreen-enabled force-hover item-overlay-regular w-[395px] lg:w-[430px]"
          style={{ width: 430, height: 390, margin: 0, position: "relative" }}
        >
    <div className="gallery-item-hover-inner h-full  group">
      <div data-hook="info-element" style={{ height: "30%", width: "100%" }}>
        <div
          className="hover-info-element w-[101%]  lg:w-[115%] text-[#FFFCFC] hover:backdrop-blur max-h-[19em] lg:!h-[12em] absolute inset-x-0  !bottom-10 group-hover:!bg-black"
          data-hook="hover-info-element"
          style={{
            boxSizing: "border-box",
            // paddingLeft: 6,
            // paddingRight: 6,
            paddingTop: 0,
            paddingBottom: 0
          }}
        >
          <div
            style={{
              alignItems: "flex-start",
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "flex-end",
              direction: "ltr"
            }}
            className="info-element-text bg-[#2d2d2d47]"
            dir="auto"
          >
            <div>
              <div
                className="info-member info-element-title opacity-1 text-[#fffcfc] !font-bold"
                data-hook="item-title"
                style={{
                  overflow: "hidden",
                  marginBottom: 6,
                  visibility: "inherit"
                }}
              >
                <span className='group-hover:text-white dark:group-hover:text-black !mt-6'>{item.title} </span>
              </div>
              <div
                className="info-member -mt-0 info-element-description group-hover:bg-white group-hover:px-4 group-hover:py-3 group-hover:!rounded-xl max-w-[9em] hover:bg-slate-200"
                data-hook="item-description"
                style={{
                  marginBottom: 0,
                  // visibility: "inherit",
                  overflow: "hidden",
                  WebkitLineClamp: 14
                }}>
                <span className='group-hover:text-black dark:group-hover:text-sky-100 '>
                View Exercise
                  <br />
                </span>
              </div>
            </div>
          </div>
          <div
            className="info-element-social info-align-left vertical-item info-element-social-absolute"
            data-hook="item-social"
          />
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  </Link>

</div>

  
  
}
