import Image from 'next/image'

import { Fragment, useEffect, useId, useRef, useState } from 'react'

import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { CarouselImage } from './carouselImages.jsx'

import  { urlFor } from "@/sanity/lib/image.js";

const MotionCarouselImageHeader = motion(CarouselImage.Header)
const MotionCarouselImageBody = motion(CarouselImage.Body)

export function Carousel({ className, imageRatio, images }) {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = images.length

  const autoScroll = true
  let slideInterval
  let intervalTime = 7000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    console.log('next')
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    console.log('prev')
  }
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide, auto, autoScroll, slideInterval])

  return (
    <div
      id="carousel INAGEController"
      className={clsx(
        className && className,
        ' relative  focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none'
      )}
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div className=" relative flex-auto   after:clear-both after:block after:content-['']">
        <Tab.Group
          as="div"
          selectedIndex={selectedIndex}
          onChange={onChange}
          vertical
        >
          <div className="relative">
            <div className="mx-auto ">
              <Tab.Panels as={Fragment}>
                <AnimatePresence
                  initial={false}
                  custom={{ isForwards, changeCount }}
                >
                  {images.map((feature, featureIndex) => {
                    return (
                      <>
                        {currentSlide === featureIndex ? (
                          <Tab.Panel
                            headerAnimation
                            static
                            key={feature.name + changeCount}
                            className=" flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                          >
                            <CarouselImage
                              className=" w-full max-w-6xl overflow-auto truncate  
                                    ring-1
                                      ring-white/10 lg:max-w-none"
                            >
                              <MotionCarouselImageHeader headerAnimation>
                                <CarouselImage.Title>
                                  {feature?.title}
                                </CarouselImage.Title>
                                <CarouselImage.Subtitle>
                                  {feature?.description}
                                </CarouselImage.Subtitle>
                              </MotionCarouselImageHeader>

                              <MotionCarouselImageBody bodyAnimation custom>
                                <Image
                                  animated
                                  custom={{ isForwards, changeCount }}
                                  className={clsx(
                                    imageRatio
                                      ? imageRatio
                                      : 'max-w-10xl  aspect-[478/900] w-full  object-cover object-cover object-center md:aspect-[290/200] lg:max-w-none'
                                  )}
                                  // src={feature.source}
                                  src={urlFor(feature?.image).url()}
                                  alt={feature.title}
                                  height={1200}
                                  width={1600}
                                />
                              </MotionCarouselImageBody>
                            </CarouselImage>
                          </Tab.Panel>
                        ) : null}
                      </>
                    )
                  })}
                </AnimatePresence>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
    </div>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function PlaceholderFrame(props) {
  return (
    <svg viewBox="0 0 366 729" aria-hidden="true" {...props}>
      <path
        fill="#F2F2F2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
      />
      <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4" />
    </svg>
  )
}

export function PhoneFrame({
  className,
  children,
  priority = false,
  ...props
}) {
  return (
    <div
      className={clsx(
        'w-ful relative relative float-left -mr-[100%] !block hidden aspect-[729/366]',
        className
      )}
      {...props}
    >
      <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
      <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
        {children}
      </div>
      <PlaceholderFrame className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100" />
      <Image
        src={'/expertise-carousel-images/expertise-1.png'}
        alt="public/expertise-carousel-images/expertise-1.png"
        height={200}
        width={600}
        className="pointer-events-none absolute inset-0 h-full w-full"
        unoptimized
        // priority={priority}
        priority
      />
    </div>
  )
}

export function ContentSlider({ texts }) {
  console.log('TEXT--->', texts)
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = texts.length

  const autoScroll = true
  let slideInterval
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    console.log('next')
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    console.log('prev')
  }
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide, auto, autoScroll, slideInterval])

  return (
    <div
      id="SITE_PAGES"
      className="xl:left-10 absolute top-[40%] ml-[10%] max-w-[340px] 
      max-[400px]:backdrop-blur md:max-w-[600px] lg:max-w-[1200px] xl:max-w-[877px] transition ease-in-out duration-300 transform"
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div className="bg-tansparent mt-6 flex-auto rounded-2xl rounded-b-2xl">
        {/* <!--Carousel items--> */}
        <div className="bg-tansparent after:clear-bot relative mt-6 w-full flex-auto  rounded-2xl  rounded-b-2xl after:content-['']">
          <Tab.Group
            as="div"
            selectedIndex={selectedIndex}
            onChange={onChange}
            vertical
          >
            <div className="relative">
              <div className="mx-auto ">
                <Tab.Panels as={Fragment}>
                  <AnimatePresence
                    initial={false}
                    custom={{ isForwards, changeCount }}
                  >
                    {texts.map((text, textIndex) => {
                      return (
                        <>
                          {currentSlide === textIndex ? (
                            <Tab.Panel
                              headerAnimation
                              static
                              key={text.title + changeCount}
                              className=""
                            >
                              {/* <CarouselImage
                                className=" w-full max-w-6xl overflow-auto truncate  
                                    ring-1
                                      ring-white/10 lg:max-w-none"
                              >
                                <MotionCarouselImageHeader headerAnimation>
                                  <CarouselImage.Title> */}
                            <p class="font-bold banner-title  transition-all transition ease-in-out duration-300 transform ease-in-out px-2 rounded-xl">
                              {/* <p class="max-[500px]:text-health banner-title truncat px-6 sm:px-0 italic text-4xl font-bold  uppercase md:text-white lg:text-7xl"> */}
                                {text.title}
                              </p>
                              {/*  </CarouselImage.Title>
                                  <CarouselImage.Subtitle> */}
                              {/* <h3 class="h3  text-white">{text.description}</h3> */}
                              {/* </CarouselImage.Subtitle> */}
                              {/* </MotionCarouselImageHeader>
                              </CarouselImage> */}
                            </Tab.Panel>
                          ) : null}
                        </>
                      )
                    })}
                  </AnimatePresence>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}
