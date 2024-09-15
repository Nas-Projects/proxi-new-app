'use client'

import Head from 'next/head'
import clsx from 'clsx'
import { Card, Tag } from '@/components/Card'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { getItems } from '@/lib/getItems'

import { Container } from '@/components/Container'
import Image from 'next/image'
import Page from '@/components/Page'

import { Carousel, ContentSlider } from '@/components/carousel/Corousel'
import Link from 'next/link'
// import getTracks  from '../../../api/getTracks'
import { urlFor } from "@/sanity/lib/image.js";
import { useEffect, useState } from 'react'
import  getTracks  from '../../../api/getTracks.ts'


export default function Tracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const grid = 'grid-clols-1 grid md:grid-cols-2'
  const shadow =
    'md:shadow-zinc-400/5 md:backdrop-blur hover:shadow-zinc-200/5 max-h-24'
  console.log('LEARN COMPONENT -->', tracks)

  
  useEffect(() => {
    const fetchTracksData = async () => {
      try {
        const data = await getTracks(); // Fetch tracks data directly
        console.log("TRACKS_IN_TRACKS_PAGE", data);

        // Ensure the data is properly structured
        if (data && Array.isArray(data.tracks)) {
          setTracks(data.tracks); // Set the tracks array
        } else {
          console.error("Unexpected tracks data format", data);
          setTracks([]); // Default to an empty array if the structure is unexpected
        }
      } catch (error) {
        console.error("Error fetching tracks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTracksData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("LEARN COMPONENT -->", tracks);

  const tracksMainImages = tracks.map((track) => ({
    title: track.title,
    image: track.images && track.images.length > 0 ? track.images[0] : null,
  }));

  console.log("MAINTRACKS__", tracksMainImages);

  return (
    <>
      <Head>
        <title>tracks - By OMARY HILLS</title>
        <meta
          name="description"
          content="These are diets crafted byOmari Hills"
        />
      </Head>
      {/* <Page pageContent={reiki} featured={featured} /> */}
      <div className="overflow-wrap relative mx-auto">
        <div className="landing-hero-background h-[80vh]  lg:h-screen/2 lg:-top-34 relative -mt-36 md:-mt-44">
          <Carousel
            images={tracksMainImages}
            className="landing-hero-background aspect-[400/900]  w-full object-cover md:aspect-[400/400]"
          />
          <ContentSlider texts={tracksMainImages} />
          {/* <div className="text-freevolve absolute top-[28%] text-4xl text-4xl  font-extrabold font-extrabold text-white max-[700px]:translate-x-[20%] md:max-w-none md:text-5xl lg:mx-[140px]  lg:text-6xl lg:text-7xl xl:text-7xl">
            <h1 id="intro-text-width">Resources</h1>
          </div> */}
          <div
            class="lg:top-30  h2-wellness absolute absolute top-44 left-10 top-0
             z-50 mx-auto  mt-[10%] block flex inline-flex  min-w-[15%]  transform items-center px-3 opacity-100  md:top-64 md:left-28 
           md:text-white lg:right-[80%] lg:mt-[58%]  lg:max-w-5xl lg:text-6xl lg:font-extrabold xl:top-0 "
          >
            {/* <h1 class="h1 mb-4" id="intro-text-width">
              Reki &
            </h1>{' '} */}
            {/* <h1 class="h1 " id="intro-text-width">
              Therapy
            </h1> */}
          </div>
          <div
            className={clsx(
              shadow,
              'absolute hidden bottom-28 left-[10em] z-50 mx-auto  block flex inline-flex min-w-[15%]  transform items-center px-3 opacity-100 md:top-[330px] lg:top-[40%] lg:mt-[15%]   lg:max-w-5xl xl:top-[42%]  '
            )}
          >
            {/* <h1 className="h1-wellness flex text-5xl font-bold  text-slate-100/80 md:font-extrabold lg:text-7xl lg:text-white">
              Wellness
              <span className="sr-only lg:not-sr-only lg:pl-8 ">☀️</span>
            </h1> */}
         <h1 className="banner-title sr-only uppercase  ml-20 mt-4 text-3xl font-bold  text-slate-100/80 md:font-extrabold lg:not-sr-only lg:text-4xl lg:text-slate-200/40">
            
              They Not Like
              <span className="text-indigo-100/40">Us</span>
            </h1>{' '}
          </div>{' '}
          <div
            id="wellness-toggle"
            className="top-[-60%]] float-r absolute translate-x-[20%]"
          >
            <ToggleButtons />
          </div>
        </div>
       
      
      </div>
      <FadeInStagger key={"Tracks-group-stagger"}>     
      <div className="relative mt-[-7em] max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {tracks.map((track) => {
          console.log('TRACK-IN-HTML-->', track)
          return (
           <FadeIn key={track.title}> 
             <Link href={`tracks/${track._id}`} key={track.title} className={clsx('group my-10 bg-black tracks-container hover:!shadow-xl hover:!border-1 !border-slate-900', grid)}>
              <div class="">
                <Image
                 src={urlFor(track?.images[0]).url()}
                  // src={track.bannerImage.imageSrc}
                  alt=""
                  width="1658"
                  height="1600"
                  className="eX3zme relative aspect-[1318/952]  w-[82.375rem]  object-cover object-center scale-99 hover:rounded-xl hover:scale-105 transition ease-in duration-500"
                />
              </div>{' '}
              <div className=" relative text-area-container sm:!px-4 lg:sm:!px-24 xl:!px-44 xl:!-mt-24">
                {/* <Tag text={'ABOUT'} /> */}
                <h1 class="h2 !ml-0 text-left text-white hover:!text-[#d19d7d]  group-hover:text-[#e2d5ce] hover:underline">{track.title}</h1>

                <p class="cta-banner__details-copy description xl:!text-2xl xl:!text-slate-200 group-hover:!text-[white]">
                   {track.summary}
                </p>
              </div>
            </Link>
            </FadeIn>
          )
        })}
      </div>
      </FadeInStagger>
      <div className={clsx(
              shadow,
              'bg-black  w-[90vw] !h-[20em] z-50 mx-auto  py-24 px-12 lg:pb-[10em]'
            )}
          >
            {/* <h1 className="h1-wellness flex text-5xl font-bold  text-slate-100/80 md:font-extrabold lg:text-7xl lg:text-white">
              Wellness
              <span className="sr-only lg:not-sr-only lg:pl-8 ">☀️</span>
            </h1> */}
         <h1 className="banner-title">
            
              TRAIN LIKE <br/>
              <span className="text-gray-100">THE STARS</span>
            </h1>{' '}
          </div>{' '}
      {/* <div className="bg-white bark:bg-black  py-12 md:py-32 md:pt-24 md:pb-0">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
          {people.map((person) => () }
        </div>
      </div> */}
    </>
  )
}
const ToggleButtons = () => {
  return (
    <div id="cta" className="lg:grid-cols2 z-50 grid grid-cols-1">
      <div class="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
        <button
          type="button"
          class="dark:highlight-white/5 hidden h-12 w-72 items-center space-x-3 rounded-lg bg-white px-4 text-left text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:text-slate-300 dark:ring-0 dark:hover:bg-slate-700 sm:flex"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="flex-none text-slate-300 dark:text-slate-400"
            aria-hidden="true"
          >
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
          <span class="flex-auto">Meditation..</span>
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
        <a
          class="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50  dark:hover:bg-gray-700 hover:text-white sm:w-auto"
          href="/docs/installation"
        >
          Search
        </a>
      </div>
    </div>
  )
}
const WellnessCarouselImages = [
  {
    source: '/reiki/track-1.webp',
  },
  {
    source: '/reiki/track-2.jpeg',
  },

  {
    source: '/reiki/track-3.jpeg',
  },
  {
    source: '/reiki/track-3.jpeg',
  },
  {
    source: '/reiki/track-5.jpeg',
  },
]

