import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import image1 from '@/images/about-images/Cam1.png'
// import image2 from '@/images/about-images/Cam2.png'
// import image3 from '@/images/about-images/Cam3.png'
// import image4 from '@/images/about-images/Cam4.png'
// import image5 from '@/images/about-images/Cam5.png'
// import image6 from '@/images/about-images/Cam_random_2.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { PlayButton } from './PlayButton'
import { Carousel } from './carousel/Corousel'
export default function LandingIntro() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="intro" className="md:-mt-30 relative -mt-44 ">
      <div className="rounded-md bg-gray-900">
        <header className="absolute inset-x-0  top-0 z-50 rounded-md ">
          <span className="sr-only">Re Master&apos;s Page</span>
        </header>

        <div className="landing-video-container relative isolate overflow-hidden ">
          <Carousel
            images={WellnessCarouselImages}
            className="absolute inset-0   -z-10 -mt-4 aspect-[1818/952] object-cover"
            // className="landing-hero-background aspect-[400/600]  w-full object-cover md:aspect-[400/400]"
          />

          <div className="mx-auto max-w-2xl sm:py-48 lg:py-32  lg:py-56">
            <div className="text-center">
              <IntroDesktop />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const IntroDesktop = () => {
  const H3 = 'f-header-h3 my-2'
  const H1 = 'f-medium-editorial'
  return (
    <div
    // className="relative top-0 w-full" role="banner"
    >
      <Image
        className="absolute top-28 left-4 z-50  h-20 w-20  rounded-md  lg:top-[10%] lg:h-[4rem] lg:w-[4rem] xl:top-[14%] xl:h-[6rem]  xl:w-[6rem] "
        src="/logo.jpeg"
        alt="FreevolveCompany"
        width={100}
        height={100}
      />{' '}
      <div
        // text-image-section__copy-wrapper
        // text-image-section__copy-wrapper--hero
        // content-container
        className={clsx(
          // shadow,
          'lg:top-30 absolute left-0 top-[32%] z-50 mt-[15%] block flex  inline-flex min-w-[25%]  translate-x-[15%]   transform items-center opacity-100 sm:left-[2%]  sm:top-20   md:w-[15%] md:min-w-[26%] xl:top-[10%]  xl:w-[33%]'
        )}
      >
        <div className="shadow-zinc-400/5 dark:text-zinc-800 dark:ring-white/10 ">
          <h1
            className={clsx('h1 text-freevolve font-extrabold')}
            id="intro-text-width"
          >
            Freevolve <span className="text-health">Health</span>
          </h1>

          <PlayButton className="-mt-4  hover:border-sky-400  max-[700px]:hidden lg:-mt-10   lg:bg-sky-100  " />
          <div id="text-cta" className="mt-44 lg:mt-64">
            <div id="button-wrapper">
              {/* <div className={clsx('lg:pt-10')} id="intro-text-width">
                <h2
                  className={clsx(
                    'h1  font-bold  text-sky-600/80 lg:pt-7 xl:pt-5'
                  )}
                  id="intro-text-width"
                >
                  <br /> Wellness &amp; Fitness
                </h2>
              </div> */}
              <p
                className={clsx(
                  shadow,
                  'text-image-section__description flex-block hidden lg:flex  '
                )}
              >
                Freevolve Health is an online wellness service designed
                specifically for people in their late 30s and 40s who want to
                stay fit and healthy. Explore yoga & wellness video at home or
                on the go.{' '}
              </p>{' '}
              <Link
                href="/register"
                className="btn btn--yellow mt-0 max-[700px]:hidden"
                data-tracking-action="Account Registration - CTA Sign Up"
                data-tracking-properties='{"button_copy":"Start your 7-day free trial","page_name":"landing - yoga"}'
              >
                Start your free 7-day trial
              </Link>
            </div>
          </div>
        </div>
        <Link
          id="MOBILE_START-FRE_TRIAL"
          href="/register"
          className="btn btn--yellow mt-0 -ml-64 min-[700px]:hidden "
          data-tracking-action="Mobile-Account Registration - CTA Sign Up"
          data-tracking-properties='{"button_copy":"Start your 7-day free trial","page_name":"landing - yoga"}'
        >
          Start your free 7-day trial
        </Link>
      </div>
    </div>
  )
}

const WellnessCarouselImages = [
  {
    source: '/sandra-main.jpeg',
  },
  {
    source: '/reiki/reiki-1.png',
  },

  {
    source: '/reiki/sandra-mindfull.png',
  },
]
const shadow =
  'md:shadow-zinc-400/5 md:backdrop-blur hover:shadow-zinc-200/5 dark:text-zinc-200 dark:ring-white/10'
