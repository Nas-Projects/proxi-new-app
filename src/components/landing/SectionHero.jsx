import {
    ChevronRightIcon,
  } from '@heroicons/react/20/solid'
import HeroSearchForm from '../propertiesComponents/HeroSearchForm'
import Link from 'next/link'
import Image from 'next/image'
import SearchButtons from '../SearchButtons'
  
  // const primaryFeatures = [
  //   {
  //     name: 'Server monitoring',
  //     description:
  //       'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
  //     href: '#',
  //     icon: BoltIcon,
  //   },
  //   {
  //     name: 'Collaborate',
  //     description:
  //       'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
  //     href: '#',
  //     icon: UsersIcon,
  //   },
  //   {
  //     name: 'Task scheduling',
  //     description:
  //       'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
  //     href: '#',
  //     icon: CalendarDaysIcon,
  //   },
  // ]
  // const secondaryFeatures = [
  //   {
  //     name: 'Push to deploy.',
  //     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
  //     icon: CloudArrowUpIcon,
  //   },
  //   {
  //     name: 'SSL certificates.',
  //     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  //     icon: LockClosedIcon,
  //   },
  //   {
  //     name: 'Simple queues.',
  //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
  //     icon: ArrowPathIcon,
  //   },
  //   {
  //     name: 'Advanced security.',
  //     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
  //     icon: FingerPrintIcon,
  //   },
  //   {
  //     name: 'Powerful API.',
  //     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  //     icon: Cog6ToothIcon,
  //   },
  //   {
  //     name: 'Database backups.',
  //     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
  //     icon: ServerIcon,
  //   },
  // ]
  // const stats = [
  //   { id: 1, name: 'Developers on the platform', value: '8,000+' },
  //   { id: 2, name: 'Daily requests', value: '900m+' },
  //   { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  //   { id: 4, name: 'Projects deployed', value: '12m' },
  // ]
  // const footerNavigation = {
  //   solutions: [
  //     { name: 'Hosting', href: '#' },
  //     { name: 'Data Services', href: '#' },
  //     { name: 'Uptime Monitoring', href: '#' },
  //     { name: 'Enterprise Services', href: '#' },
  //   ],
  //   support: [
  //     { name: 'Pricing', href: '#' },
  //     { name: 'Documentation', href: '#' },
  //     { name: 'Guides', href: '#' },
  //     { name: 'API Reference', href: '#' },
  //   ],
  //   company: [
  //     { name: 'About', href: '#' },
  //     { name: 'Blog', href: '#' },
  //     { name: 'Jobs', href: '#' },
  //     { name: 'Press', href: '#' },
  //     { name: 'Partners', href: '#' },
  //   ],
  //   legal: [
  //     { name: 'Claim', href: '#' },
  //     { name: 'Privacy', href: '#' },
  //     { name: 'Terms', href: '#' },
  //   ],
  //   social: [
  //     {
  //       name: 'Facebook',
  //       href: '#',
  //       icon: (props) => (
  //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //           <path
  //             fillRule="evenodd"
  //             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: 'Instagram',
  //       href: '#',
  //       icon: (props) => (
  //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //           <path
  //             fillRule="evenodd"
  //             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: 'X',
  //       href: '#',
  //       icon: (props) => (
  //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //           <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: 'GitHub',
  //       href: '#',
  //       icon: (props) => (
  //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //           <path
  //             fillRule="evenodd"
  //             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: 'YouTube',
  //       href: '#',
  //       icon: (props) => (
  //         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //           <path
  //             fillRule="evenodd"
  //             d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
  //             clipRule="evenodd"
  //           />
  //         </svg>
  //       ),
  //     },
  //   ],
  // }
  

  export default function SectionHero() {
    return (
      <div className="">
        <main>
          {/* Hero section */}
          <div className="relative isolate overflow-hidden sm:pt-8">
            <Image
                src="/beams-basic.png"
                alt=""
                height={1000}
                width={1000}
                placeholder="blur"
                class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
            />
            {/* <svg
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
            </svg> */}
            <div
              aria-hidden="true"
              className="absolute  left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
                className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 pb-4 pt-0 sm:pb-24 lg:flex lg:px-8 lg:pt-0 z-20">
              <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                {/* <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-11"
                /> */}
                <div className="mt-12 sm:-mt-4 lg:-mt-4 z-30">
                  <Link href="/properties" className="inline-flex space-x-6">
                    <span className="rounded-full bg-pink-500/10 px-3 py-1 text-sm font-semibold leading-6 text-pink-600 !text-custom-gradient ring-1 ring-inset ring-pink-500/20">
                      Properties
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-custom-gradient">
                      <span>Proxy v1.0</span>
                      <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                    </span>
                  </Link>
                </div>
                <h1 className="z-30 mt-3 lg:mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  <span className="text-custom-gradient">Proxy - </span>
                </h1>
                <p
                  className="-pt-12 md:mt-6 ss:mt-5  md:text-[18px] ss:text-[18px] text-[16px] text-main md:leading-[25px] ss:leading-[25px]  leading-[20px] fade-in-from-bottom md:max-w-[600px]  ss:max-w-[480px] max-w-[320px]"
                  style={{
                    opacity: 0,
                    animationDelay: "0.5s",
                    animationFillMode: "forwards"
                  }}
                >
                  noun /&apos;prak·si/ the agency, office, person or function who is given <br />
                  the authority or power to act for another.
                </p>
                <h1 className="text-black md:text-[82px] mt-6 ss:text-[70px]  text-[52px] md:leading-[90px] fade-in-from-bottom font-black tracking-tight">
                  <span className="text-custom-gradient">
                    <br className="ss:flex hidden" />
                    Reinventing {/* */}{" "}
                  </span>{" "}
                  <br className="ss:flex hidden" />
                  the real estate business.
                </h1>
               
                <p className="mt-6 text-lg leading-8 text-gray-[#333]">
                     Armed with two decades of industry wisdom, we are focused on combining these insights with the prowess of modern technology, delivering outcomes that not only meet but exceed your expectations.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                <div className="min-[900px]:hidden mt-5 lg:mt-5 mb-30px xl:mb-0 animated">
                  <h5 class="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color bg-white hover:border-heading-color inline-block mr-15px">
                    <span class="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                    <Link href="/properties" className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">
                     ENQUIRY
                      </Link>
                  </h5>
                 </div>
                 <div className="max-[600px]:hidden mt-5 lg:mt-5 mb-30px xl:mb-0 animated">
                  <h5 class="capitalize text-sm md:text-base text-white relative group whitespace-nowrap font-normal transition-all duration-300 border border-secondary-color bg-white hover:border-heading-color inline-block mr-15px">
                    <span class="inline-block absolute top-0 right-0 w-full h-full bg-secondary-color group-hover:bg-primary-color z-1 group-hover:w-0 transition-all duration-300"></span>
                    <Link href="/properties" className="relative z-10 px-5 md:px-25px lg:px-10 py-10px md:py-3 lg:py-17px group-hover:text-heading-color leading-23px">
                      MAKE AN ENQUIRY
                      </Link>
                  </h5>
                 </div>
                 <div className="max-[600px]:-mt-5 md:-mt-8 xl:-mt-0 
                 inline-block border-heading-color z-1 group-hover:w-0 transition-all duration-300"> 
                 <Link
                    href="/contact"
                    className="bg-transparent border border-gray-800  py-3
                    focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-400 outline-pink-200 outline-offset-2  hover:border-pink-300  px-3.5 py-2.5 text-sm font-semibold text-[#333] shadow-sm 
                    "
                  >
                    ABOUT
                  </Link>
                  </div>
                  <div className="max-[600px]:-mt-5 sm:-mt-8  xl:-mt-0"> 
                  <Link href="/properties" className="text-[#333]  border  py-3 hover:text-custom-gradient text-sm font-semibold leading-6  hover:border border-gray-800  hover:border-pink-300  px-3.5 py-2.5">
                    PROPERTIES <span aria-hidden="true">→</span>
                  </Link>
                 </div>
                </div>
              </div>
              {/* !mr-24 */}
              <div className="lg:mx-auto  mt-6 md:mt-14 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-32 lg:max-w-none lg:flex-none xl:ml-32 xl:mt-64">
                <div className="max-w-3xl mx-4 flex-none sm:max-w-5xl lg:max-w-none">
                   <HeroSearchForm />
                 
                </div>
              </div>
            </div>
          </div>
  
          {/* Logo cloud */}
          <div className="mx-auto -mt-[4rem] max-w-7xl sm:px-6 sm:-mt-10 lg:!-mt-20 xl:-mt-16 lg:px-8">
            <SearchButtons />
          </div>
  
          {/* Feature section */}
          {/* <div className="!text-black mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                accusamus quisquam.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {primaryFeatures.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div> */}
  
          {/* Feature section */}
          {/* <div className="mt-32 sm:mt-56">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
             
            </div>
          </div> */}
  
          {/* Stats */}
          {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h2 className="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by thousands of developers&nbsp;worldwide
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
                dolor cupiditate blanditiis ratione.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-sm leading-6">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div> */}
  
          {/* CTA section */}
          {/* <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
            <svg
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={0}
                  id="1d4240dd-898f-445f-932d-e2872fd12de3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
                className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                commodo do ea.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div> */}
        </main>
  
        {/* Footer */}
        {/* <footer aria-labelledby="footer-heading" className="relative">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
            <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                {footerNavigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                &copy; 2020 Your Company, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer> */}
      </div>
    )
  }
  

  export const RightPart = () =>{
    return (
    <div className="flex flex-col w-full justify-center max-[1000px]:!mt-[3em]">
      <h1 className="text-black md:text-[82px] ss:text-[70px] text-custom-gradient  text-[52px] md:leading-[90px] fade-in-from-bottom ss:leading-[70px] leading-[55px] mb-4 font-black tracking-tight">
        proxy -{/* */}{" "}
      </h1>
      <span className="text-black text-[20px] md:leading-[30px] fade-in-from-bottom  mb-4  tracking-tight italic">
      <p
        className="-pt-12 md:mt-6 ss:mt-5  md:text-[18px] ss:text-[18px] text-[16px] text-main md:leading-[25px] ss:leading-[25px]  leading-[20px] fade-in-from-bottom md:max-w-[600px]  ss:max-w-[480px] max-w-[320px]"
        style={{
          opacity: 0,
          animationDelay: "0.5s",
          animationFillMode: "forwards"
        }}
      >
         noun /ˈprɑk·si/ the agency, office, person or function who is given <br />
        the authority or power to act for another.
      </p>
      </span>
      <h1 className="text-black md:text-[82px] mt-6 ss:text-[70px]  text-[52px] md:leading-[90px] fade-in-from-bottom font-black tracking-tight">
        <span className="text-custom-gradient">
          <br className="ss:flex hidden" />
          Reinventing {/* */}{" "}
        </span>{" "}
        <br className="ss:flex hidden" />
        the real estate business.
      </h1>
      <p
        className="md:mt-6 ss:mt-5 mt-6 md:text-[18px] ss:text-[18px] text-[16px] text-main md:leading-[25px] ss:leading-[25px]  leading-[20px] fade-in-from-bottom md:max-w-[600px]  ss:max-w-[480px] max-w-[320px]"
        style={{
          opacity: 0,
          animationDelay: "0.5s",
          animationFillMode: "forwards"
        }}
      >
       Armed with two decades of industry wisdom, we are focused on combining these insights with the prowess of modern technology, delivering outcomes that not only meet but exceed your expectations
      </p>
      <div
        className="flex md:mt-6 ss:mt-8 mt-6 items-center  buttonfull fade-in-from-bottom2"
        style={{ opacity: 0, animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <a href="/join">
          <button className="grow4 bg-custom-gradient border-none buttonhalf md:text-[18px] ss:text-[17px] text-[14px] md:py-3 ss:py-3 py-3 md:px-24 ss:px-7 px-3 text-white  md:rounded-[6px] ss:rounded-[3px] rounded-[3px]  font-medium cursor-pointer">
            Join Us
          </button>
        </a>
      </div>
    </div>)
      }