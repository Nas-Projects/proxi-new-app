import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card, Tag } from '@/components/Card'
import { Container } from '@/components/Container'

import Reiki from '@/images/services/reiki.jpeg'
import Fitness from '@/images/services/fitness.jpeg'
import Diet from '@/images/services/diet-hormones.jpeg'
import Mindfulness from '@/images/services/minddulness.jpeg'
import Therapy from '@/images/services/therapy.jpeg'
// import image2 from '@/images/photos/image-2.jpg'
// import image3 from '@/images/photos/image-3.jpg'
// import image4 from '@/images/photos/image-4.jpg'
import Coaching from '@/images/services/coaching.jpeg'

// import { generateRssFeed } from '@/lib/generateRssFeed'
// import { getAllArticles } from '@/lib/getAllArticles'
// import SectionLandingHero from '@/components/SectionLandingHero'
import LandingIntro from '@/components/LandingIntro'
import ChallengeListFeatured from '@/components/ChallengeListFeatured'
import { PlayButton } from '@/components/PlayButton'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import AboustSection from '@/components/AboustSection'
import Gallery from '@/components/Gallery'
import AnimatedGallery from '@/components/AnimatedGallery'
import ContactSection from '@/components/ContactSection'
import SectionProvenMethods from '@/components/SectionProvenMethods'
import { SectionSSubscription } from '@/components/SectionSubscribtion'
import AnimatedComponent from '@/components/AnimatedComponent'
import SlidingImage from '@/components/SlidingImage'
// import { fetchTracks } from '@/utils/fetchTracks'
import fetchTracks  from '../../api/getTracks'
import fetchLandingPageData from '../../api/fetchLandingPageData' 
import  ElevatorPitch  from '@/components/ElevatorPitch'
// import { fetchSocials } from '@/utils/fetchSocials'


const shadow =
  'md:shadow-zinc-400/5 md:backdrop-blur hover:shadow-zinc-200/5 dark:text-zinc-200 dark:ring-white/10'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

// function Resume() {
//   let resume = [
//     {
//       company: 'Planetaria',
//       title: 'CEO',
//       logo: logoPlanetaria,
//       start: '2019',
//       end: {
//         label: 'Present',
//         dateTime: new Date().getFullYear(),
//       },
//     },
//     {
//       company: 'Airbnb',
//       title: 'Product Designer',
//       logo: logoAirbnb,
//       start: '2014',
//       end: '2019',
//     },
//     {
//       company: 'Facebook',
//       title: 'iOS Software Engineer',
//       logo: logoFacebook,
//       start: '2011',
//       end: '2014',
//     },
//     {
//       company: 'Starbucks',
//       title: 'Shift Supervisor',
//       logo: logoStarbucks,
//       start: '2008',
//       end: '2011',
//     },
//   ]

//   return (
//     <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <BriefcaseIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Work</span>
//       </h2>
//       <ol className="mt-6 space-y-4">
//         {resume.map((role, roleIndex) => (
//           <li key={roleIndex} className="flex gap-4">
//             <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
//               <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
//             </div>
//             <dl className="flex flex-auto flex-wrap gap-x-2">
//               <dt className="sr-only">Company</dt>
//               <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
//                 {role.company}
//               </dd>
//               <dt className="sr-only">Role</dt>
//               <dd className="text-xs text-zinc-500 dark:text-zinc-400">
//                 {role.title}
//               </dd>
//               <dt className="sr-only">Date</dt>
//               <dd
//                 className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
//                 aria-label={`${role.start.label ?? role.start} until ${
//                   role.end.label ?? role.end
//                 }`}
//               >
//                 <time dateTime={role.start.dateTime ?? role.start}>
//                   {role.start.label ?? role.start}
//                 </time>{' '}
//                 <span aria-hidden="true">—</span>{' '}
//                 <time dateTime={role.end.dateTime ?? role.end}>
//                   {role.end.label ?? role.end}
//                 </time>
//               </dd>
//             </dl>
//           </li>
//         ))}
//       </ol>
//       <Button href="#" variant="secondary" className="group mt-6 w-full">
//         Download CV
//         <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
//       </Button>
//     </div>
//   )
// }

// function Photos() {
//   let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
//               rotations[imageIndex % rotations.length]
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

const IntroMobile = () => {
  return (
    <Container className="relative mt-9 ">
      <div id="INTRO-MOPBILE" className="relative max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="mt-6 flex gap-6">
          <div
          // className="relative w-full"
          // role="banner"
          // aria-labelledby="text-image-section-title"
          >
            <div
              // text-image-section__copy-wrapper
              // text-image-section__copy-wrapper--hero content-container-MD
              className={clsx(
                // shadow,
                'relative  block flex inline-flex transform   items-center '
              )}
            >
              <div className=" dark:text-zinc-800 dark:ring-white/10 ">
                <h1
                  className="f-medium-editorial text-image-section__hero-title "
                  id="text-image-section-title dark:text- "
                >
                  Online daily  Workouts
                  <br /> classes &amp; workouts.
                </h1>
                <p className="section__description">
                  From Vinyasa and Hatha to Yin and Restorative, explore 3,000
                  yoga videos across twelve different styles. Learn from the
                  world’s best yoga teachers, at home or on the go.
                </p>{' '}
                <a
                  href="/register"
                  className="btn btn--yellow mt-20 "
                  data-tracking-action="Account Registration - CTA Sign Up"
                  data-tracking-properties='{"button_copy":"Start your 7-day free trial","page_name":"landing - yoga"}'
                >
                  Start your 7-day free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

let services = [
  {
    service: 'Reiki',
    description:
      'This practice is best described as a effective way to treat stress levels.',
    logo: Reiki,
    start: '2014',
    end: '2019',
  },
  {
    service: 'Fitness & Wellness',
    description:
      'Here we will focuss a adaptive exercises to build strength and..',
    logo: Fitness,
    start: '2014',
    end: '2019',
  },
  {
    service: 'Group Therapy ',
    description: 'Therapy treatment modalities are...',
    logo: Therapy,
    start: '2014',
    end: '2019',
  },
  {
    service: 'Mindfulness',
    description:
      'In these sessions, I purposely bring your attention to the present-moment experience without evaluation through meditation',
    logo: Mindfulness,
    start: '2014',
    end: '2019',
  },
  {
    service: 'Diet & Hormones',
    description: 'We find ways to circumvent bad food..',
    logo: Diet,
    start: '2014',
    end: '2019',
  },
  {
    service: '1/1 Coaching',
    description: 'I will help you  achieve happiness, mindfullness and growth.',
    logo: Coaching,
    start: '2014',
    end: '2019',
  },
]
export default function Home({ tracks, landingPageData }) {
  const H3 = 'f-header-h3 my-2'
  const H1 = 'f-medium-editorial'
  const H2 = 'f-medium-'
  const container = 'relative mx-auto max-w-5xl bg-white'
  const grid = 'grid-clols-1 grid md:grid-cols-2'
  const freeWarapper =
    'relative px-6 sm:px-8 lg:px-12 lg:px-44 xl:px-64 py-4 md:py-10'
  const date = new Date('2023-044-21')
  // let date = new Date('2023-044-21T00:00:00.000Z')
  // let date = '2015-03-25T12:00:00-06:30'
  console.log('DATE--->e', date)
  return (
    <>
      <Head>
        <title>
         Omari Hills - A Reiki master in here to help you find your balance.
        </title>
        <meta
          name="description"
          content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
        <div className="relative w-screen overflow-hidden ">
        <div
          id="comp-kkr1kfyd"
          className="comp-kkr1kfyd YzqVVZ wixui-column-strip__column"
        >
          <div
            id="bgLayers_comp-kkr1kfyd"
            data-hook="bgLayers"
            data-motion-part="BG_LAYER"
            className="MW5IWV N3eg0s"
          >

            <SlidingImage hero={landingPageData?.hero}/>
            <AnimatedComponent textToScaleDown={landingPageData?.hero.title} break/>

            </div>
              {/* TRAINING CARDS DEMO */}
              <ChallengeListFeatured tracks={tracks}/>
              <AboustSection aboutSection={landingPageData.about} shouldBreak/>
              <ElevatorPitch elevatorPitch={landingPageData.ElevatorPitch} />
              <SectionSSubscription pricingSections={landingPageData?.pricing}/>
              <SectionProvenMethods benefit={landingPageData?.benefits}/>
            

              <Gallery landingGalleryData={landingPageData?.gallery}/>
              {/* <AnimatedGallery/> */}
              <ContactSection contactForm={landingPageData?.contact}/>
          </div>






    {/* <LandingIntro /> */}
   
     
  

  </div> 
 </>
     
  )
}


export const getStaticProps = async () => {
  // const pageInfo = await fetchPageInfo();
  const landingPageData = await fetchLandingPageData();
  // const experiences = await fetchExperiences();

  // const skills = await fetchSkills();
  // const subSkills: SubSkill[] = await fetchSubSkills();
  const tracks  = await fetchTracks();
  // const socials  = await fetchSocials();
  // const techStacks  = await fetchTechStacks();
 
  console.log("LANDING_STATIC", landingPageData )
  console.log("TRACKS IN STATIC", tracks )

  return {
    props: {
      landingPageData,
      // pageInfo,
      // experiences,
      // skills,
      // subSkills,
      tracks,
      // socials,
      // techStacks,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 5,
  };
};
