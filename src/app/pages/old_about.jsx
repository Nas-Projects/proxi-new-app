import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { SocialMedia } from '@/components/SocialMedia'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <div className="-mt-24  lg:mt-32">
      <div className="relative bg-white">
        {' '}
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="absolute  top-0 aspect-[4/3.8] w-full bg-gray-50 object-cover sm:top-[305] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/sandra-chilling-mobile.jpeg"
            alt=""
          />
          <div
            id="mobilde-socialmedia"
            className="absolute right-[0.0%] top-[345px]  z-50 sm:bottom-[10%] md:top-[433px] lg:hidden"
          >
            <SocialMedia gap="gap-x-3" className="mx-4" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:-mt-64">
              <img
                className="h-24 md:h-64 lg:h-[30rem]"
                src="/logo.jpeg"
                alt="FreevolveCompany"
              />
              {/* md:mt-[700px]  */}
              <h1 className="mt-[85%] text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                I’mOmari Hills.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Just finished up my Reiki Master and ready to help and assist.
                I’m excited about getting to work and help you.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="bg-freevolve rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book a session
                </a>
                <Link
                  href="learn"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative max-[1024px]:hidden lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="/sandra-chilling.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:mt-20 lg:grid-cols-2 lg:px-8 ">
        <div class="max-w-2xl">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Reiki MAster
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            I was recently certified as a Reiki Master from the Institute of
            Reiki For Life. I was initially a long process but I&apos;m very
            happy to have completed this training...
          </p>
          <br />

          <p class="mt-6 text-lg leading-8 text-gray-600">
            It was such a wondeful thing to be out there learning with al these
            knowlegable folks. Very exited toput this to good use.
          </p>
        </div>
        <div role="list" class="flex-block  gap-x-8 gap-y-12 sm:gap-y-16">
          <div class="block gap-x-6  lg:flex">
            <div className="grelative lg:-mr-8 lg:mb-64  xl:inset-0 xl:left-1/2 xl:mr-0">
              <img
                className=" aspect-[3/2] w-full bg-gray-50 object-cover lg:inset-0 lg:aspect-auto lg:h-64 "
                src="/sandra-certificate.jpeg"
                alt=""
              />
            </div>
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                Calgary, Alberta
              </h3>
              <p class="text-freevolve text-sm font-semibold leading-6">
                With Lisa Bonnet
              </p>
            </div>
          </div>
        </div>
        <h3 className="mx-auto -mt-20 mt-[85%] max-w-7xl gap-x-8 gap-y-0 px-6 text-4xl font-bold tracking-tight text-gray-900 sm:-mt-10 sm:text-5xl lg:px-8 xl:px-20 ">
          Talk to you soon
        </h3>
      </div>
    </div>
  )
}
// export default function OldAbout() {
//   return (
//     <>
//       <Head>
//         <title>About -Omari Hills</title>
//         <meta
//           name="description"
//           content="I’mOmari Hills. I live in New York City, where I design the future."
//         />
//       </Head>
//       <Container className="mt-16 sm:mt-32">
//         <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
//           <div className="lg:pl-20">
//             <div className="max-w-xs px-2.5 lg:max-w-none">
//               <Image
//                 src={portraitImage}
//                 alt=""
//                 sizes="(min-width: 1024px) 32rem, 20rem"
//                 className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
//               />
//             </div>
//           </div>
//           <div className="lg:order-first lg:row-span-2">
//             <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
//               I’mOmari Hills. I live in New York City, where I design the
//               future.
//             </h1>
//             <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
//               <p>
//                 I’ve loved making things for as long as I can remember, and
//                 wrote my first program when I was 6 years old, just two weeks
//                 after my mom brought home the brand new Macintosh LC 550 that I
//                 taught myself to type on.
//               </p>
//               <p>
//                 The only thing I loved more than computers as a kid was space.
//                 When I was 8, I climbed the 40-foot oak tree at the back of our
//                 yard while wearing my older sister’s motorcycle helmet, counted
//                 down from three, and jumped — hoping the tree was tall enough
//                 that with just a bit of momentum I’d be able to get to orbit.
//               </p>
//               <p>
//                 I spent the next few summers indoors working on a rocket design,
//                 while I recovered from the multiple surgeries it took to fix my
//                 badly broken legs. It took nine iterations, but when I was 15 I
//                 sent my dad’s Blackberry into orbit and was able to transmit a
//                 photo back down to our family computer from space.
//               </p>
//               <p>
//                 Today, I’m the founder of Planetaria, where we’re working on
//                 civilian space suits and manned shuttle kits you can assemble at
//                 home so that the next generation of kids really <em>can</em>{' '}
//                 make it to orbit — from the comfort of their own backyards.
//               </p>
//             </div>
//           </div>
//           <div className="lg:pl-20">
//             <ul role="list">
//               <SocialLink href="#" icon={TwitterIcon}>
//                 Follow on Twitter
//               </SocialLink>
//               <SocialLink href="#" icon={InstagramIcon} className="mt-4">
//                 Follow on Instagram
//               </SocialLink>
//               <SocialLink href="#" icon={GitHubIcon} className="mt-4">
//                 Follow on GitHub
//               </SocialLink>
//               <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
//                 Follow on LinkedIn
//               </SocialLink>
//               <SocialLink
//                 href="mailto:spencer@planetaria.tech"
//                 icon={MailIcon}
//                 className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
//               >
//                 spencer@planetaria.tech
//               </SocialLink>
//             </ul>
//           </div>
//         </div>
//       </Container>
//     </>
//   )
// }
