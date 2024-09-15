import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { OmariMasterIcon } from '@/components/OmariMasterIcon'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  return (
    <div>
      <header class="md::my-24 my-14 -mt-24 max-w-none   ">
        <div className="landing-hero-background lg:h-screen/2">
          <img
            className="landing-hero-background w-full object-cover "
            src="/beautiful-images/geran-de-klerk_trees-min 2.webp"
            width={1900}
            height={2500}
            alt=""
          />
        </div>
        <h1 class="invisible  sm:visible absolute top-[4%] translate-x-[100%]  transform  pb-4 text-center text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl md:top-[10%] md:left-[20%] lg:left-[30%] lg:top-[15%]  lg:text-6xl xl:top-[18%]">
          Contact
        </h1>
        <h1 class="absolute bottom-[82%] translate-x-[50%] 
         transform  pb-4 text-center !text-lg font-extrabold 
         tracking-tight text-slate-200 
       sm:hidden">
          Contact
        </h1>
      </header>
      <div className="relative isolate lg:-mt-64 bg-black ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 ">
          <div className="absolute  bg-[var(--themeColor)] left-0 top-0 h-full  sm:w-[2%] lg:w-[4%] xl:lg:w-[2%] min-[1400px]:w-[12%]">

          </div>
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 lg:pt-48 lg:pb-6">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg px-4 sm:px-6">
              <div
                id="SVG-WRAPPER"
                className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-50 ring-1 ring-gray-900/10 lg:w-1/2"
              >
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="white"
                  />
                  <svg
                    x="100%"
                    y={-1}
                    className="overflow-visible fill-gray-50"
                  >
                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  />
                </svg>
              </div>
              <h1 class="-mt-10 text-center text-2xl font-bold tracking-tight  text-gray-600 dark:text-blacksm:-mt-0 
              sm:text-4xl lg:-mt-24 lg:text-5xl dark:text-black  !text-left">
                Get in touch
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Please, Feel free to contact me and do not hesitate to reach out
                via social media or email as well. Chat soon ,...
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    545 5th Ave New york,
                    <br />
                    NY, 12034
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="text-black hover:text-gray-900"
                      href="tel:+1 (555) 234-5678"
                    >
                      +1 (3555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900"
                      href="mailto:hello@example.com"
                    >
                      Omary@hills.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="relative px-6 sm:pr-6 pb-24 pt-20 sm:pb-32 lg:-mt-24 lg:px-8 lg:py-48  lg:pt-48 lg:pb-6"
          >
            <div className="mx-auto mx-6 max-w-xl lg:mr-0 lg:max-w-lg dark:!text-white">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-200 dark:text-slate-200"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-200 dark:text-slate-200"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-200 dark:text-slate-200"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-200 dark:text-slate-200"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-200 dark:text-slate-200"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="bg-white text-black hover:bg-zinc-700 hover:text-white dark:bg-[var(--themeColor)] rounded-md px-3.5 py-2.5 text-center text-2xl 
                  text-sm font-semibold 
                   shadow-sm hover:bg-[white] hover:text-[black]
                  focus-visible:outline focus-visible:outline-2 
                  ocus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
        <Container className="py-2 -mt-4 sm:py-8 bg-white h-full sm:bg-black xl:w-[40vw]">
        <OmariMasterIcon  classN="hover:bg-white hover:!text-white"/>
      </Container>
      </div>
       <footer className="row-start-3 flex gap-6 flex-wrap bg-black items-center justify-center pt-12 xl:-mt-64  pb-24">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/exercises"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Exercises
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/tracks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
           Tracks
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact →
        </Link>
      </footer>
    </div>
  )
}
