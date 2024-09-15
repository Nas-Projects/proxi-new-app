// import Head from 'next/head'
// import clsx from 'clsx'
// import { Card, Tag } from '@/components/Card'

// import { getItems } from '@/lib/getItems'

// import Image from 'next/image'

// import { Carousel, ContentSlider } from '@/components/carousel/Corousel'
// const people = [
//   {
//     name: 'Women',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   {
//     name: 'Men',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
//     twitterUrl: '#',
//     linkedinUrl: '#',
//   },
//   // More people...
// ]

// export default function Meditation({ reiki, featured }) {
//   const grid = 'grid-clols-1 grid md:grid-cols-2'
//   const shadow =
//     'md:shadow-zinc-400/5 md:backdrop-blur hover:shadow-zinc-200/5 max-h-24'
//   console.log('DIETS COMPONENT -->', reiki)
//   return (
//     <>
//       <Head>
//         <title>Meditations - By Omari</title>
//         <meta
//           name="description"
//           content="These are diets crafted byOmari Hills"
//         />
//       </Head>
//       {/* <Page pageContent={reiki} featured={featured} /> */}
//       <div className="relative">
//         <div className="landing-hero-background srceen-h lg:h-screen/2 lg:-top-34 relative -mt-36 md:-mt-44">
//           <Carousel
//             images={WellnessCarouselImages}
//             className="landing-hero-background aspect-[400/900]  w-full object-cover md:aspect-[400/400]"
//           />
//           {/* <ContentSlider images={WellnessCarouselImages} /> */}
//           {/* <img
//             className="landing-hero-background aspect-[400/900]  w-full  object-cover md:aspect-[400/400]  "
//             src={reiki[0].backgroundImage}
//             width={1900}
//             height={2500}
//             alt=""
//           /> */}
//           <div
//             class="lg:top-30  h2-wellness absolute absolute top-44 left-10 top-0
//              z-50 mx-auto  mt-[10%] block flex inline-flex w-[89%] min-w-[15%]  transform items-center px-3 opacity-100  md:top-64 md:left-28
//            md:text-white lg:right-[80%] lg:mt-[58%]  lg:max-w-5xl lg:text-6xl lg:font-extrabold xl:top-0 "
//           >
//             {' '}
//             <h1 class="h1 " id="intro-text-width">
//               Reki &
//             </h1>{' '}
//             <h1 class="h1 " id="intro-text-width">
//               Meditations
//             </h1>
//           </div>
//           <div
//             className={clsx(
//               shadow,
//               'lg:top-[40% ] absolute bottom-28  left-10 z-50  mx-auto block flex inline-flex w-[89%] min-w-[15%] transform items-center px-3 opacity-100  md:top-64 md:left-28 lg:mt-[15%]   lg:max-w-5xl xl:top-[47%] '
//             )}
//           >
//             {' '}
//             <h1 className="h1-wellness flex text-5xl font-bold  text-slate-100/80 md:font-extrabold lg:text-7xl lg:text-white">
//               Wellness{' '}
//               <span className="sr-only lg:not-sr-only lg:pl-8 ">☀️</span>
//             </h1>{' '}
//             <h1 className="h1-wellness sr-only ml-20 mt-4 text-3xl font-bold  text-slate-100/80 md:font-extrabold lg:not-sr-only lg:text-5xl lg:text-slate-200/40">
//               Spiritual & Emotional{' '}
//               <span className="text-indigo-100/40">Balance</span>
//             </h1>{' '}
//           </div>{' '}
//           <div
//             id="wellness-toggle"
//             className="top-[-60%]] float-r absolute translate-x-[20%]"
//           >
//             <ToggleButtons />
//           </div>
//         </div>
//         <div className="max-w-8xl mx-auto -mt-14 mb-24 px-4  sm:px-6 md:mb-0 lg:px-8">
//           <div className="relative -mt-12 flex sm:-mt-16 sm:items-end sm:space-x-5 ">
//             <div className={clsx('bg-slate-100', grid)}>
//               <div class="conten">
//                 <Image
//                   src={'/reiki/reiki-1.png'}
//                   alt=""
//                   width="1658"
//                   height="1600"
//                   className="freevolvehealth-About-image relative aspect-[1318/952]  w-[82.375rem]  object-cover object-center"
//                 />
//               </div>{' '}
//               <div className="content relative ">
//                 <Tag text={'ABOUT'} />
//                 <h1 class="h2">Freevolve Health</h1>

//                 <p class="cta-banner__details-copy">
//                   Freevolve Health is an online wellness designed he wellness
//                   app designed specifically for people in their late 30s and 40s
//                   who want to stay fit and healthy.
//                 </p>
//               </div>
//             </div>{' '}
//           </div>
//         </div>
//         <div className="max-w-8xl mx-auto px-4  sm:px-6 lg:-mt-0 lg:px-8">
//           <div className="relative -mt-12 flex sm:-mt-16 sm:items-end sm:space-x-5 ">
//             <div className={clsx('bg-gray-300', grid)}>
//               <div class="conten">
//                 <Image
//                   src="/mccauley_7a26a24ef4.png"
//                   alt=""
//                   width="1658"
//                   height="1600"
//                   className="freevolvehealth-About-image relative aspect-[1318/952]  w-[82.375rem]  object-cover object-center"
//                 />
//               </div>{' '}
//               <div className="content relative ">
//                 <Tag text={'ABOUT'} />
//                 <h1 class="h2">Freevolve Health</h1>

//                 <p class="cta-banner__details-copy">
//                   Freevolve Health is an online wellness designed he wellness
//                   app designed specifically for people in their late 30s and 40s
//                   who want to stay fit and healthy.
//                 </p>
//               </div>
//             </div>{' '}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         {reiki[0].resources.map((r) => {
//           console.log('REIKIT', r)
//           return (
//             <div key={r.title} className={clsx('my-10 bg-slate-100 ', grid)}>
//               <div class="conten">
//                 <Image
//                   src={r.imageUrl}
//                   alt=""
//                   width="1658"
//                   height="1600"
//                   className="freevolvehealth-About-image relative aspect-[1318/952]  w-[82.375rem]  object-cover object-center"
//                 />
//               </div>{' '}
//               <div className="content relative ">
//                 <Tag text={'ABOUT'} />
//                 <h1 class="h2">{r.title}</h1>

//                 <p class="cta-banner__details-copy">
//                   Freevolve Health is an online wellness designed he wellness
//                   app designed specifically for people in their late 30s and 40s
//                   who want to stay fit and healthy.
//                 </p>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//       {/* <Container>

//         <h1 className={'h1 intro-text-width'} id="intro-text-width">
//           Meditations
//         </h1>
//       </Container> */}
//       <div className="bg-white py-24 md:py-32">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
//           {/* <div className="max-w-2xl xl:col-span-2">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               About the team
//             </h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               We’re a dynamic group of individuals who are passionate about what
//               we do and dedicated to delivering the best results for our
//               clients.
//             </p>
//           </div> */}
//           {/* <ul
//             role="list"
//             className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
//           >
//             {people.map((person) => (
//               <li
//                 key={person.name}
//                 className="flex flex-col gap-10 pt-12 sm:flex-row"
//               >
//                 <img
//                   className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
//                   src={person.imageUrl}
//                   alt=""
//                 />
//                 <div className="max-w-xl flex-auto">
//                   <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
//                     {person.name}
//                   </h3>
//                   <p className="text-base leading-7 text-gray-600">
//                     {person.role}
//                   </p>
//                   <p className="mt-6 text-base leading-7 text-gray-600">
//                     {person.bio}
//                   </p>
//                   <ul role="list" className="mt-6 flex gap-x-6">
//                     <li>
//                       <a
//                         href={person.twitterUrl}
//                         className="text-gray-400 hover:text-gray-500"
//                       >
//                         <span className="sr-only">Twitter</span>
//                         <svg
//                           className="h-5 w-5"
//                           aria-hidden="true"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
//                         </svg>
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href={person.linkedinUrl}
//                         className="text-gray-400 hover:text-gray-500"
//                       >
//                         <span className="sr-only">LinkedIn</span>
//                         <svg
//                           className="h-5 w-5"
//                           aria-hidden="true"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//             ))}
//           </ul> */}
//         </div>
//       </div>
//     </>
//   )
// }
// const ToggleButtons = () => {
//   return (
//     <div id="cta" className="lg:grid-cols2 z-50 grid grid-cols-1">
//       <div class="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
//         <button
//           type="button"
//           class="dark:highlight-white/5 hidden h-12 w-72 items-center space-x-3 rounded-lg bg-white px-4 text-left text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:text-slate-300 dark:ring-0 dark:hover:bg-slate-700 sm:flex"
//         >
//           <svg
//             width="24"
//             height="24"
//             fill="none"
//             stroke="currentColor"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             class="flex-none text-slate-300 dark:text-slate-400"
//             aria-hidden="true"
//           >
//             <path d="m19 19-3.5-3.5"></path>
//             <circle cx="11" cy="11" r="6"></circle>
//           </svg>
//           <span class="flex-auto">Meditation..</span>
//           <kbd class="font-sans font-semibold dark:text-slate-500">
//             <abbr
//               category="Command"
//               class="text-slate-300 no-underline dark:text-slate-500"
//             >
//               ⌘
//             </abbr>{' '}
//             K
//           </kbd>
//         </button>
//         <a
//           class="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto"
//           href="/docs/installation"
//         >
//           Search
//         </a>
//       </div>
//     </div>
//   )
// }
// const WellnessCarouselImages = [
//   {
//     source: '/reiki/reiki-2.png',
//   },
//   {
//     source: '/reiki/reiki-1.png',
//   },

//   {
//     source: '/reiki/sandra-mindfull.png',
//   },
//   {
//     source: '/reiki/reiki-wellesss-peace.jpeg',
//   },
// ]

// // Strategy Development
// // Analysis and Planning
// // UI/UX Design
// // App Development
// // Application Testing
// // Deployment
// // Support and Performance Monitoring
// export async function getStaticProps() {
//   let reiki = await getItems('Reiki')
//   console.log('REIKI  ', reiki)
//   return {
//     props: {
//       reiki: reiki,
//       featured: reiki[0].resources[0],
//     },
//   }
// }
