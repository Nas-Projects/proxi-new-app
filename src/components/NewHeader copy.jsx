// import { useRouter } from 'next/router'
// import { Popover, Transition } from '@headlessui/react'
// import clsx from 'clsx'


// import {
//   Bars3Icon,
//   // CurrencyDollarIcon,
//   // GlobeAmericasIcon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   UserIcon,
//   // XMarkIcon,
// } from '@heroicons/react/24/outline'

// // import { Container } from '@/components/Container'
// // import avatarImage from '../../public/amit-avatar.jpg'

// import {  useEffect, useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// // import ToggleICon from './ToggleIcon'
// import { SocialMedia } from './SocialMedia'

// function CloseIcon(props) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//       <path
//         d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

// function ChevronDownIcon(props) {
//   return (
//     <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
//       <path
//         d="M1.75 1.75 4 4.25l2.25-2.5"
//         fill="none"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// const oldnav= [
//   { name: "Project", href: "/naser2s-projects/omarihills" },
//   { name: "Deployments", href: "/naser2s-projects/omarihills/deployments" },
//   { name: "Analytics", href: "/naser2s-projects/omarihills/analytics" },
//   { name: "Speed Insights", href: "/naser2s-projects/omarihills/speed-insights" },
//   { name: "Logs", href: "/naser2s-projects/omarihills/logs" },
//   { name: "Firewall", href: "/naser2s-projects/omarihills/firewall" },
//   { name: "Storage", href: "/naser2s-projects/omarihills/stores" },
//   { name: "Settings", href: "/naser2s-projects/omarihills/settings" },
// ];
// const navLinks= [
//   {name:'Subscription'}, 
//   {href:'/subscription'},
//   {name:'Tracks', href:'/tracks'},
//   {name:'Tracks', href:'/tracks'},
//   {name:'Profile', href:"/profile"},
//   {name:'Login', href:'/login'},
//   {name:'Settings', href:'/settings'},
//   {name:'notification', href:"/notifications"},
//   {name:'Profile', href:"/profile"},  ]

// const SecondNavMenu = () => (
//   <div className="sub-menu_subMenu__zImHF !z-50 !h-[3.2em]" style={{ transform: "translateX(36px) translateZ(0px)" }}>
//     {navLinks.map((item, index) => (
//       <a
//         key={index}
//         href={item.href}
//         data-version="v1"
//         data-zone="same"
//         className="!text-white !z-50 link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-12 py-4"
//         style={{
//           "--text-color": "var(--ds-gray-900)",
//           "--text-size": "0.875rem",
//           "--text-line-height": "0.875rem",
//           "--text-letter-spacing": "initial",
//           "--text-weight": 400,
//         }}
//       >
//         {item.name}
//       </a>
//     ))}
//     <div className="sub-menu_activeBar__Zj0Fh" style={{ transform: "translateX(16px) scaleX(0.7)", display: "block" }}></div>
//   </div>
// );


// // function MobileNavItem({ href, children }) {
// //   return (
// //      <li className='relative h-12  w-full'> 

// //       <label  htmlFor="nav-menu-toggle" className='w-full'>
   
// //       <Link 
// //         // as={Link}
// //         href={href}
// //         className="text-white dark:text-[var(--themeColor)] block my-8 text-2xl uppercase dark:hover:text-white "
// //       >
// //           <input
// //           type="checkbox"
// //           className="nav__toggle-checkbox absolute top-0 inset-x-0 h-full !w-full !min-h-12 "
// //           id="nav-menu-toggle"
// //             /> {children}
// //       </Link>
// //     </label>
// //     </li>
// //   )
// // }

// // function MobileNavItem({ href, handleNavItemClick, classN, textStyle, active, children }) {

// //   const handleClick = () => {
// //     // Uncheck the nav toggle checkbox
// //     setIsNavOpen(false);
// //   };

// //   return (
// //     <li className={clsx(classN && classN,"relative w-full sm:h-full  justify-center sm:-mt-[1%] !pl-[4%] sm:border-r border-black dark:!group-hover:text-white")}
// //     onClick={()=>handleNavItemClick(false)}>
// //       <Link href={href} className={clsx(textStyle && textStyle,"text-white  block py-8 sm:py-4 text-2xl uppercase dark:hover:text-white")}>
// //         {children}
// //       </Link>
// //     </li>
// //   );
// // }

// function MobileNavItem({ href, handleNavItemClick, classN, textStyle, activeColor, children }) {
//   const router = useRouter();
//   const [activePath, setActivePath] = useState('');

//   useEffect(() => {
//     setActivePath(router.pathname);
//   }, [router.pathname]);

//   const handleClick = () => {
//     handleNavItemClick(false);
//   };

//   const isActive = activePath === href;

//   return (
//     <li className={clsx(classN && classN, "relative w-full sm:h-full justify-center  !pl-[4%] sm:border-r border-black dark:!group-hover:text-white")}
//         onClick={handleClick}>
//       <Link href={href} passHref>
//         <div className={clsx(
//           textStyle && textStyle,
//           "block py-8 sm:py-4 text-2xl uppercase",
//           isActive ? activeColor : "text-white",
//           "dark:hover:text-white"
//         )}>
//           {children}
//         </div>
//       </Link>
//     </li>
//   );
// }

// export default MobileNavItem;
// const transparent =
//   'group flex items-center rounded-sm  py-2 text-sm font-medium backdrop-blur'


// // function MobileNavigation(props) {
// //   return (
// //     <Popover {...props} className={props.navButtonPossition}>
// //       <Popover.Button id="MENU_AS_CONTAINER_TOGGLE"
// //         className="md:!hidden group flex items-center  rounded-sm px-2 backdrop-blur mt-1  "
// //       >
// //         <Bars />
// //         {/* <ChevronDownIcon className="ml-3  h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" /> */}
// //       </Popover.Button>
// //       <Transition.Root>
// //         <Transition.Child
// //           as={Fragment}
// //           enter="duration-150 ease-out"
// //           enterFrom="opacity-0"
// //           enterTo="opacity-100"
// //           leave="duration-150 ease-in"
// //           leaveFrom="opacity-100"
// //           leaveTo="opacity-0"
// //         >
// //           <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm " />
// //         </Transition.Child>
// //         <Transition.Child
// //           as={Fragment}
// //           enter="duration-150 ease-out"
// //           enterFrom="opacity-0 scale-95"
// //           enterTo="opacity-100 scale-100"
// //           leave="duration-150 ease-in"
// //           leaveFrom="opacity-100 scale-100"
// //           leaveTo="opacity-0 scale-95"
// //         >
// //           <Popover.Panel
// //             focus
// //             className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-[[var(--themeColor)] "
// //           >
// //             <div className="flex flex-row-reverse items-center justify-between">
// //               <Popover.Button
// //                 aria-label="Close menu"
// //                 className="-m-1 rounded-full border dark:border-[var(--themeColor2)] p-1"
// //               >
// //                 <CloseIcon className="text-white h-6 w-6  outline-none dark:text-zinc-400" />
// //               </Popover.Button>
// //               {/* <h2 className="!text-white text-sm font-medium   dark:text-zinc-400 ">
// //                 Menu
// //               </h2> */}
// //             </div>
// //             <nav id="mobile-navigation" className="mt-6 nav__wrapper">
// //               <ul className="-my-2 divide-y divide-zinc-100 dark:divide-[var(--themeColor)] text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
// //                 <MobileNavItem href="/">Home</MobileNavItem>
// //                 <MobileNavItem href="/exercises">Exercises</MobileNavItem>
// //                 <MobileNavItem href="/about">About</MobileNavItem>
// //                 <MobileNavItem href="/diets">Diets</MobileNavItem> 
// //                 <MobileNavItem href="/programs">Programs</MobileNavItem>
                
// //                 {/* <MobileNavItem href="/fitness">Fitness</MobileNavItem> */}
               
// //                 <MobileNavItem href="/contact">Contact</MobileNavItem>
// //               </ul>
// //             </nav>
// //           </Popover.Panel>
// //         </Transition.Child>
// //       </Transition.Root>
// //     </Popover>
// //   )
// // }

// function NavItem({ href, children }) {
//   let isActive = useRouter().pathname === href

//   return (
//     <li className={clsx( isActive && 'btn--yellow', 'nav-item-box  bg-[#ffe2b5]')}>
//       <Link
//         href={href}
//         className={clsx(
//           'nav-item relative block px-6 text-black transition dark:text-white !py-4',
//           isActive ? '!text-black dark:hover:bg-[#ffe2b5]' : 'hover:text-gray-400 '
//         )}
//       >
//         {children}
//         {isActive && (
//           <span className="absolute inset-x-1 -bottom-px h-1 bg-gradient-to-r from-teal-500 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
//         )}
//       </Link>
//     </li>
//   )
// }

// function DesktopNavigation(props) {
//   return (
//     <nav {...props} id="SITE_HEADER" className={clsx(props.navButtonPossition)}>
//       <ul className="flex rounded-sm text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-400/5 backdrop-blur  
//       hover:shadow-zinc-900/5 dark:text-zinc-200 dark:ring-white/10  justify-center text-center content-center">
//         <NavItem href="/">Home</NavItem>
//         <NavItem href="/exercises">Exercises</NavItem> 
//           <NavItem href="/about">About</NavItem>
//         <NavItem href="/therappies">Therapies</NavItem>   
//           <NavItem href="/contact">Contact</NavItem>
//         {/* <NavItem href="/fitness">Fitness</NavItem> */}
//         {/* <NavItem href="/meditation">Meditation</NavItem> */}
   
//         {/* <NavItem href="/prices">Prices</NavItem> */}
//         <NavItem href="/learn">Learn</NavItem>
     
//       </ul>
//     </nav>
//   )
// }

// function ModeToggle() {
//   function disableTransitionsTemporarily() {
//     document.documentElement.classList.add('[&_*]:!transition-none')
//     window.setTimeout(() => {
//       document.documentElement.classList.remove('[&_*]:!transition-none')
//     }, 0)
//   }

//   function toggleMode() {
//     disableTransitionsTemporarily()

//     let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//     let isSystemDarkMode = darkModeMediaQuery.matches
//     let isDarkMode = document.documentElement.classList.toggle('dark')

//     if (isDarkMode === isSystemDarkMode) {
//       delete window.localStorage.isDarkMode
//     } else {
//       window.localStorage.isDarkMode = isDarkMode
//     }
//   }

//   return (
//     <div
//       type="button"
//       aria-label="Toggle dark mode"
//       className="group rounded-full px-0.5 py-0 backdrop-blur transition 
//      "
//       onClick={toggleMode}
//     >
//       {/* <ToggleICon /> */}
//     </div>
//   )
// }

// export function clamp(number, a, b) {
//   let min = Math.min(a, b)
//   let max = Math.max(a, b)
//   return Math.min(Math.max(number, min), max)
// }

// export function AvatarContainer({ className, homePage, ...props }) {
//   return (
//     <div
//       className={clsx(
//         className,
//         !homePage ? 'h-10 w-10 ' : 'h-[6.5rem] w-[6.5rem] ',
//         'rounded-full p-0.5 '
//       )}
//       {...props}
//     />
//   )
// }

// function Avatar({ large = false, className, homePage, ...props }) {
//   return (
//     <>
//       <div
//         aria-label="Home"
//         className={clsx(
//           className,
//           'group pointer-events-auto mt-6 flex  hover:animate-bounce  sm:mt-0'
//         )}
//         {...props}
//       >
//         <Image
//           id="AVATAR-LG"
//           src={'/logo.jpeg'}
//           alt=""
//           height={58}
//           width={58}
//           sizes={large ? '20rem' : '10.25rem'}
//           className={clsx(
//             !homePage ? 'h-20 w-20' : 'h-18 w-18',
//             'rounded-full  object-cover',
//             `${showOnlyAt500Px}`,
//             large ? 'sm:h-16 sm:w-16' : 'h-22 w-22'
//           )}
//           priority
//           as="image"
//           // placeholder="blur"
//           blurDataURL={'/logo.jpeg'}
//         />
//         <Image
//           id="AVATAR-MOBILE"
//           src={'/logo.jpeg'}
//           alt=""
//           height={19}
//           width={19}
//           sizes={large ? '6rem' : '4.25rem'}
//           className={clsx(
//             !homePage ? 'w-17 h-17' : 'h-[5.7rem] w-[5.5rem] ',
//             '-mt-8 rounded-full  bg-transparent object-cover',
//             `${HideAt500Px}`
//           )}
//           placeholder="/logo.jpeg'"
//           blurDataURL={'/logo.jpeg'}
//           priority
//         />

//         {!homePage && (
//           <div
//             href="/"
//             id="DIRECTOR CREDENTIALS_MOBILE"
//             className={clsx(
//               transparent,
//               'sm:text-5x flex-block -mt-9 flex min-w-[20px] flex-nowrap text-2xl uppercase font-bold tracking-tight  text-zinc-800 dark:text-zinc-100'
//             )}
//           >
//             <div id="MOBILE-CRED" className="siteTile-SM min-[500px]:hidden">
//               <div
//                 className="siteTitle-SM  -mt-5  px-4 text-slate-800"
//                 data-shrink-original-size="27"
//                 style={{ letterSpacing: '0.0740741em' }}
//               >
//                 <h1 id="NAME-SM" className="flex text-left dark:text-slate-50">
//                   Freevolve
//                 </h1>
//                 <br />
//                 <h1 id="NAME-SM" className="flex text-left dark:text-slate-50">
//                   Health
//                 </h1>
//               </div>
//               <div
//                 id="director-position-mobile"
//                 className="logo-subtitle-SM -mt-1 w-64 sm:w-full"
//               >
//                 <h2 className=" dark:text-slate-200/70">
//                   Director, Cinematographer
//                 </h2>

//                 <h2 className="-mt-5  text-left text-base text-slate-500 dark:text-slate-200/70">
//                   &amp; Visual Media Artist{' '}
//                 </h2>
//               </div>
//             </div>{' '}
//             <DesktopTitle />
//           </div>
//         )}
//       </div>
//       {/* <div id="header-social-media" className="-ml-4 -mt-6">
//         <SocialMedia
//           className={'mx-4 flex gap-y-4 gap-x-2 sm:-mt-6 sm:mb-10'}
//           iconStyle=""
//         />
//       </div> */}
//     </>
//   )
// }
// const showOnlyAt500Px = 'max-[500px]:hidden'
// const HideAt500Px = 'min-[500px]:hidden'
// const DesktopTitle = () => {
//   return (
//     <div
//       href="/"
//       id="DIRECTOR_NAME_DESKTOP"
//       className="inline=-flextext-2xl uppercase mt-10 flex font-bold text-zinc-800 dark:text-zinc-100 max-[500px]:hidden md:mt-20"
//     >
//       <div
//         data-content-field="DESTKOOP TYITLE"
//         className="director-title-Desktop  mt-6  px-4 text-slate-800"
//       >
//         <h1
//           id="NAME-DESKTOP"
//           className="flex min-w-[250px] text-left dark:text-slate-50"
//         >
//          OMARI HILL
//         </h1>

//         <div id="DESCKTOP CREDENTIALS" className="site-title mt-0">
//           <h2 class="logo-subtitle -mt-4 lg:-mt-2">
//             Director, Cinematographer
//           </h2>
//           <h2 class="logo-subtitle -mt-3">&amp; Visual Media Artist</h2>
//         </div>

//         <div id="desktop-cred" className="-ml-8 sm:mt-6">
//           <SocialMedia className={'flex gap-x-2 gap-y-4'} iconStyle="" />
//         </div>
//       </div>
//       <Link
//         href="/"
//         // to={homePage}
//         aria-label="Home"
//         className={clsx(
//           // className,
//           'mt-6 hidden hover:flex group-hover:relative'
//         )}
//       >
//         <p className="text-md mx-4 mt-2 rounded-lg bg-slate-200 px-8 py-2 leading-6 text-slate-700 dark:text-gray-700 sm:px-0">
//           Go to home page ? .
//         </p>
//       </Link>
//     </div>
//   )
// }



// // export function NewHeader() {
// //   const [isScrollingUp, setIsScrollingUp] = useState(false);
// //   const [isTop, setIsTop] = useState(true);
// //   const [lastScrollTop, setLastScrollTop] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const st = window.scrollY || document.documentElement.scrollTop;

// //       if (st > lastScrollTop) {
// //         // Downscroll code
// //         setIsScrollingUp(false);
// //       } else {
// //         // Upscroll code
// //         if (st > 0) {
// //           setIsScrollingUp(true);
// //         }
// //         if (st === 0 || st <= 5) {
// //           setIsTop(true);
// //         } else {
// //           setIsTop(false);
// //         }
// //       }
// //       setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
// //     };

// //     window.addEventListener('scroll', handleScroll, { passive: true });

// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [lastScrollTop]);
// export function NewHeader() {
//   const [isScrollingUp, setIsScrollingUp] = useState(false);
//   const [isTop, setIsTop] = useState(true);
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [isSocialVisible, setIsSocialVisible] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false); // New state for managing the nav checkbox

//  const navigation = [{name:'About', href:'/about'}, {name:'Exercises', href:'/exercises'}, {href:"/contact", name:'Contact'} ]
// //  const paradigms = [{name:'Tracks', href:'/tracks'}, {name:'Settings', href:"/settings"},{name:'Login', href:'/auth'} ]
// //  const additionalNavItems = [
// //   {name:'Subscription', 
// //  href:'/subscription'},
// //  {name:'Tracks', href:'/tracks'},
// //   {name:'Tracks', href:'/tracks'},
// //   {name:'Profile', href:"/profile"},
// //   {name:'Login', href:'/login'},
// //   {name:'Social', href:'/social'}  ]

//   useEffect(() => {
//     console.log("IS_START_IS_STOP",isTop) 
//     console.log("IS_START_lastScrollTop",lastScrollTop) 
    
//     const handleScroll = () => {

//       const st = window.scrollY || document.documentElement.scrollTop;

//       if (st > lastScrollTop) {
//         // Downscroll code
//         setIsScrollingUp(false);
//       } else {
//         // Upscroll code
//         if (st > 0) {
//           setIsScrollingUp(true);
//         }
//         if (st >=0 || st <= 12) {
//           setIsTop(true);
//           console.log("IS_TOP-", isTop)
//         } else {
//           setIsTop(false);
//           console.log("IS_TOP-", isTop)
//         }
//       }
//       setLastScrollTop(st <= 2 ? 0 : st); // For Mobile or negative scrolling
//       console.log("IS_lastScrollTop",lastScrollTop) 
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollTop, isTop]);


//   // const baseStyle = 'h-[6.1em] sm:h-[8em] lg:!h-[12em] z-50 mt-20 !z-50';
//     const baseStyle = 'h-[4.1em] sm:h-[4em] lg:!h-[8em] z-50 mt-0 !z-50';
//   const applyStyle = '!sticky bg-black !top-0 !z-30 !inset-x-0 lg:h-[7em] lg:pl-[1em] lg:!pt-[0%] z-50';

//   const handleNavToggle = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleNavItemClick = () => {
//     setIsNavOpen(false);
//   };

//   return (
//     <div
//       id="NewHeader"
//       className={`!z-30 box-shadow container-fluid dark:!text-white w-screen mx-auto !overflow-hidden  ${isScrollingUp ? applyStyle : baseStyle}  ${isTop && baseStyle}`}
//       style={{ transition: 'all 0.8s' }}
//     >
//       {/* <div className="inner h-[4em]  sm:grid sm:grid-cols-6"> */}
//       <div className="inner h-[2em] max-[490px]:mt-[12px] sm:grid sm:grid-cols-6">
        
//         <div className={`logo px-8 sm:px-[4%] sm:col-span-2 sm:pt-[-3%] !max-w-sm  ${isScrollingUp ? 'sm:flex pt-[0.2%] sm:mt-[-4%]' : 'sm:mt-[-4%] lg:!py-[0.2%]'}`}>
//         {/* <Link href="/" onClick={handleNavItemClick}>
//           <h1 className="text-white text-7xl flex py-[5.2%]">
//             PROXY 
//           </h1>
//           <br/>
//           <h2 className="text-white text-2xl flex py-[3.2%]">
//               Do it for yourself
//           </h2>
//           </Link> */}
//           <Link href="/" onClick={handleNavItemClick}>
//             {isTop ? (
//               <h1 className="text-white text-7xl flex max-w-[30vw] py-[3.2%] lg:py-[8.2%] lg:ml-4">
//                 PROXY <br /> 
//               </h1>
//             ) : (
             
//               <h1 className="text-white text-5xl py-4">PROXY</h1>
//             )}
//           </Link>
//           <div class="relative -mx-5 mt-8 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl">
//             <div class="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
//               <div class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
//               </div><div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]">
//                 </div>
//               <div class="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div><div class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div></div></div>
//             </div>
        
//         <div className={clsx(`px-4 sm:!px-0 sm:col-span-4  max-[490px]:flex sm:px-0 bg-[#2c2c2c80] relative  ${isScrollingUp ? applyStyle  : baseStyle}  ${isTop && baseStyle} ${isTop && 'bg-[#1c1a1a] ' } ${isSocialVisible && '!bg-[#2b2829]'}`)}>
//           <nav 
//           className={clsx(`nav nav--primary ${isTop && 'pt-[1px] lg:!pt-0' }`)}
//           // className={clsx(`nav nav--primary py-[15px]`)}
//           >
//              <input
//               type="checkbox"
//               className="nav__toggle-checkbox"
//               id="nav-menu-toggle"
//               checked={isNavOpen}
//               onChange={handleNavToggle}
//             />
//             {/* <input
//               type="checkbox"
//               className="nav__toggle-checkbox "
//               id="nav-menu-toggle"
//             /> */}
//             <label  
//             //  style={{ transition: '.4s'}}
//               htmlFor="nav-menu-toggle"
//               className={`absolute nav__toggle dark:!text-white !px-[1em] !py-0  lg:py-[10px] lg:!top-[-72%] before:text-white mt-[-0.5em] sm:mt-[1.5em] ${isScrollingUp && '!top-[-5.3em]'} ${isTop && '!top-[-3.2em]'}`}
//             >
//               <span className=''/>
    
//             </label>
           
//             <div id="MOBILE_NAV_OPEN" className={clsx(`nav__wrapper nav__wrapper--active !overflow-y-hidden ${isNavOpen ? '!bg-[#0c0c0c]': 'h-[4em]'}`)} > 
//                 <div className="w-0 invisible group sm:visible sm:!absolute sm:!bottom-[6em] inset-0 sm:h-full sm:w-full" />
//               <div className="absolute top-[0%] py-[4%] max-w-[70vw] left-[0%] px-[7%] sm:hidden text-white text-5xl py-4 !text-gray-100 bg-black"> 
//                 <h1 className="text-white text-5xl !text-gray-100 text-left  "><Link href="/">PROXY</Link></h1>
//               </div>
//               <div  className={clsx(`w-full flex-block ${isScrollingUp ?  'max-[640px]:!mt-[8em] lg:!mt-[-0%]  lg:!h-[1em]': " !pb-[4%] lg:!pt-[0%] lg:grid "} ${isSocialVisible && 'lg:!py-[2.6%]'} ${isSocialVisible && isScrollingUp && 'lg:py-[2.6%]'}  "lg:mt-[-4%]"`)} style={{ transition: '2s !important' }}>
   
//         {/* <Bars /> */}
//         {/* <ChevronDownIcon className="ml-3  h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700" /> */}
  
  
//                <div className="block max-[490px]:mt-[3vh] !z-50 ">
//                 <ul id="menu-primary-navigation" className="menu dark:!text-white sm:flex  w-full group" >
//                   {navigation.map((navlink, index )=>
//                   <MobileNavItem  key={index} href={navlink.href} handleNavItemClick={handleNavItemClick} classN={'flex h-[89px] lg:h-[2.9rem]   lg:mt-[-20px] max-[640px]:bg-black  !mb-4 '} textStyle={'dark:text-[var(--themeColorGray1)]'} activeColor={'!text-white'}>{navlink.name} </MobileNavItem>)}
//                 {/* <li
//                     // onMouseEnter={() => setIsSocialVisible(true)}
//                     // onMouseLeave={() => setIsSocialVisible(false)}
//                     id="menu-item-46"
//                     className="relative h-12 w-full sm:h-full sm:-mt-[2%]"  onClick={()=>handleNavItemClick(false)} >
//                     <Link  className="text-white dark:!text-[var(--themeColorGray)] block my-4 sm:my-8 text-2xl uppercase dark:!group-hover:text-white" 
//                           href="socials">
//                      More..
//                     </Link>
//                   </li> */}
//                 </ul>
// {/* <div className={clsx(isTop &&  "border-t border-[#ffffff25]", "paradigms  w-full groupmax-[640px]:py-0 max-[640px]:pb-4 py-2 bg-red-400 sm:!h-[7vh] sm:py-4")}> */}
//   <div className="stack_stack__iZkUS stack sub-menu_container__C2u_O" data-testid="navbar/submenu" data-version="v1" style={{ "--stack-flex": "initial", "--stack-direction": "row", "--stack-align": "center", "--stack-justify": "flex-start", "--stack-padding": "0px", "--stack-gap": "0px" }}>
//   <div className="sub-menu_subMenu__zImHF !z-50 !h-[3.2em] z-50" style={{ transform: "translateX(36px) translateZ(0px)" }}>
//     <SecondNavMenu/>
//     {/* <a data-version="v1" data-sub-menu-segment="(overview)" data-zone="same"
//      className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5 " href="/naser2s-projects/omarihills" style={{ "--text-color": "var(--ds-gray-1000)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Project
//     </a>
//     <a data-version="v1" data-sub-menu-segment="deployments" data-zone="same"
//      className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5" href="/naser2s-projects/omarihills/deployments" style={{ "--text-color": "var(--ds-gray-900)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Deployments
//     </a>
//     <a data-version="v1" data-sub-menu-segment="analytics" data-zone="same" className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5" href="/naser2s-projects/omarihills/analytics" style={{ "--text-color": "var(--ds-gray-900)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Analytics
//     </a>
//     <a data-version="v1" data-sub-menu-segment="speed-insights" data-zone="same" className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5" href="/naser2s-projects/omarihills/speed-insights" style={{ "--text-color": "var(--ds-gray-900)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Speed Insights
//     </a>
//     <a data-version="v1" data-sub-menu-segment="logs" data-zone="same" className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5" href="/naser2s-projects/omarihills/logs" style={{ "--text-color": "var(--ds-gray-900)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Logs
//     </a>
//     <a data-version="v1" data-sub-menu-segment="firewall" data-zone="same" className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5" href="/naser2s-projects/omarihills/firewall" style={{ "--text-color": "var(--ds-gray-900)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Firewall
//     </a>
//     <a data-version="v1" data-sub-menu-segment="stores" data-zone="same" className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5" href="/naser2s-projects/omarihills/stores" style={{ "--text-color": "var(--ds-gray-900)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Storage
//     </a>
//     <a data-version="v1" data-sub-menu-segment="settings" data-zone="same" className="!text-white link_link__hbWKh text_wrapper__i87JK sub-menu-link_link__FJz2m -mt-5" href="/naser2s-projects/omarihills/settings" style={{ "--text-color": "var(--ds-gray-900)", "--text-size": "0.875rem", "--text-line-height": "0.875rem", "--text-letter-spacing": "initial", "--text-weight": 400 }}>
//       Settings
//     </a> */}
//     <div className="sub-menu_activeBar__Zj0Fh" style={{ transform: "translateX(16px) scaleX(0.7)", display: "block" }}></div>
//   </div>
// </div>

               
//                 {/* <ul id="menu-primary-navigation" className="!z-50 menu dark:!text-white sm:flex w-full group !bg-white" >
//                     {paradigms.map((navlink, index )=>
//                     <MobileNavItem  key={index} href={navlink.href} handleNavItemClick={handleNavItemClick} classN="max-[640px]:border-t sm:border-r t!ext-white" textStyle={'dark:!text-black'}>{navlink.name} </MobileNavItem>)}
//                 </ul> */}
//               {/* </div> */}
//               </div>
               
//               <div className="social-icons z-30 mx-auto justify-center">
//               <nav className={`nav nav--social ${isSocialVisible ? 'visible' : ''} transition-all duration-700 ease-in-out bg-[#1c1a1a] dark:!text-white z-30 absolute top-[0em] left-0 w-full justify-center content-center border-b border-yellow-600`}>
//               <div className="paradigms w-full group border-t max-[640px]:py-0 max-[640px]:pb-4 py-8  sm:py-4 sm:h-24   bg-white">
//               {/* <DinamicElements /> */}
//                 {/* <ul id="menu-primary-navigation" className="menu dark:!text-white sm:flex w-full group !bg-white" >
//                     {additionalNavItems.map((navlink, index )=>
//                     <MobileNavItem  key={index} href={navlink.href} handleNavItemClick={handleNavItemClick} classN="max-[640px]:border-t sm:border-r" textStyle={'dark:!text-black'}>{navlink.name} </MobileNavItem>)}
//                 </ul> */}
//               </div>
//               {/* <div className="socials flex width-full">  
//                 <Link href="#" className="nav__search-icon">
//                 <svg role="presentation">
//                   <use xlinkHref="#sprite-search" />
//                 </svg>
//               </Link>
//               <form action="https://acuteart.com" className="overlay overlay--search">
//                 <fieldset className="container">
//                   <input type="text" name="s" placeholder="Search…" />
//                 </fieldset>
//                 <Link href="#" className="overlay__close">
//                   <span>&nbsp;</span>
//                 </Link>

//               </form>
//               <ul className="social z-30  justify-center content-center  grid !grid-cols-4 gap-x-4">
//                 <div className=' w-full  dark:!text-white'>
//                   <Link href="https://instagram.com/omaridoesfitness" rel="external">
//                     <svg role="presentation">
//                       <use xlinkHref="#sprite-facebook" />
//                     </svg>
//                     <h4>INSTAGRAM</h4>
//                   </Link>
//                 </div>
//                 <div className='dark:!text-white'>
//                   <Link href="https://www.instagram.com/acuteart/" rel="external">
//                     <svg role="presentation">
//                       <use xlinkHref="#sprite-instagram" />
//                     </svg>
//                     <h4 className='flex  dark:!text-white'>TWITTER</h4 >
//                   </Link>
//                 </div>
//                 <li className='flex  dark:!text-white'>
//                   <Link href="https://twitter.com/acuteart" rel="external">
//                     <svg role="presentation">
//                       <use xlinkHref="#sprite-twitter" />
//                     </svg>
//                     <h4 className='flex  dark:!text-white'>TWITTER</h4 >
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/twitter" rel="external">
//                     <svg role="presentation">
//                       <use xlinkHref="#sprite-youtube" />
//                     </svg>
//                     <h4 className='flex  dark:!text-white'>TWITTER</h4 >
//                   </Link>
//                 </li>
//               </ul>
//               </div>  */}
//             </nav>
//            </div>
//           </div>  
           
      
//             </div>
        
//           </nav>
        
//         </div>
//       </div>
//     </div>
//   );
// }



// // const DinamicElements = () => {
// //   return      <header className="relative bg-white">
// //   <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// //     <div className="border-b border-gray-200">
// //       <div className="flex h-16 items-center justify-between">
// //         <div className="flex flex-1 items-center lg:hidden">
// //           <button
// //             type="button"
// //             // onClick={() => setOpen(true)}
// //             className="-ml-2 rounded-md bg-white p-2 text-gray-400"
// //           >
// //             <span className="sr-only">Open menu</span>
// //             <Bars3Icon aria-hidden="true" className="h-6 w-6" />
// //           </button>

// //           <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
// //             <span className="sr-only">Search</span>
// //             <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
// //           </a>
// //         </div>

// //         {/* Flyout menus */}
// //         <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
// //           <div className="flex h-full space-x-8">
// //             {navigation.categories.map((category) => (
// //               <Popover key={category.name} className="flex">
// //                 <div className="relative flex">
// //                   <Popover.Button className="group relative z-10 flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:text-indigo-600">
// //                     {category.name}
// //                     <span
// //                       aria-hidden="true"
// //                       className="absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out group-data-[open]:bg-indigo-600 sm:mt-5 sm:translate-y-px sm:transform"
// //                     />
// //                   </Popover.Button>
// //                 </div>

// //                 <Popover.Panel
// //                   transition
// //                   className="absolute inset-x-0 top-full z-20 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
// //                 >
// //                   {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
// //                   <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow" />

// //                   <div className="relative bg-white">
// //                     <div className="mx-auto max-w-7xl px-8">
// //                       <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
// //                         <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
// //                           {category.featured.map((item, itemIdx) => (
// //                             <div
// //                               key={item.name}
// //                               className={classNames(
// //                                 itemIdx === 0 ? 'aspect-w-2 col-span-2' : '',
// //                                 'group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100',
// //                               )}
// //                             >
// //                               <img
// //                                 alt={item.imageAlt}
// //                                 src={item.imageSrc}
// //                                 className="object-cover object-center group-hover:opacity-75"
// //                               />
// //                               <div className="flex flex-col justify-end">
// //                                 <div className="bg-white bg-opacity-60 p-4 text-sm">
// //                                   <a href={item.href} className="font-medium text-gray-900">
// //                                     <span aria-hidden="true" className="absolute inset-0" />
// //                                     {item.name}
// //                                   </a>
// //                                   <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
// //                                     Shop now
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           ))}
// //                         </div>
// //                         <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
// //                           {category.sections.map((column, columnIdx) => (
// //                             <div key={columnIdx} className="space-y-10">
// //                               {column.map((section) => (
// //                                 <div key={section.name}>
// //                                   <p
// //                                     id={`${category.id}-${section.id}-heading`}
// //                                     className="font-medium text-gray-900"
// //                                   >
// //                                     {section.name}
// //                                   </p>
// //                                   <ul
// //                                     role="list"
// //                                     aria-labelledby={`${category.id}-${section.id}-heading`}
// //                                     className="mt-4 space-y-4"
// //                                   >
// //                                     {section.items.map((item) => (
// //                                       <li key={item.name} className="flex">
// //                                         <a href={item.href} className="hover:text-gray-800">
// //                                           {item.name}
// //                                         </a>
// //                                       </li>
// //                                     ))}
// //                                   </ul>
// //                                 </div>
// //                               ))}
// //                             </div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </Popover.Panel>
// //               </Popover>
// //             ))}

// //             {navigation.pages.map((page) => (
// //               <a
// //                 key={page.name}
// //                 href={page.href}
// //                 className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
// //               >
// //                 {page.name}
// //               </a>
// //             ))}
// //           </div>
// //         </Popover.Group>

// //         {/* Logo */}
// //         <a href="#" className="flex">
// //           <span className="sr-only">Your Company</span>
// //           <img
// //             alt=""
// //             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
// //             className="h-8 w-auto"
// //           />
// //         </a>

// //         <div className="flex flex-1 items-center justify-end">
// //           <a href="#" className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
// //             <img
// //               alt=""
// //               src="https://tailwindui.com/img/flags/flag-canada.svg"
// //               className="block h-auto w-5 flex-shrink-0"
// //             />
// //             <span className="ml-3 block text-sm font-medium">CAD</span>
// //             <span className="sr-only">, change currency</span>
// //           </a>

// //           {/* Search */}
// //           <a href="#" className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
// //             <span className="sr-only">Search</span>
// //             <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
// //           </a>

// //           {/* Account */}
// //           <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
// //             <span className="sr-only">Account</span>
// //             <UserIcon aria-hidden="true" className="h-6 w-6" />
// //           </a>

// //           {/* Cart */}
// //           <div className="ml-4 flow-root lg:ml-6">
// //             <a href="#" className="group -m-2 flex items-center p-2">
// //               <ShoppingBagIcon
// //                 aria-hidden="true"
// //                 className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
// //               />
// //               <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
// //               <span className="sr-only">items in cart, view bag</span>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </nav>
// // </header>
// }


// const navigation = {
//   categories: [
//     {
//       id: 'women',
//       name: 'Women',
//       featured: [
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
//           imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
//         },
//         {
//           name: 'Basic Tees',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
//           imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
//         },
//         {
//           name: 'Accessories',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
//           imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
//         },
//       ],
//       sections: [
//         [
//           {
//             id: 'shoes',
//             name: 'Shoes & Accessories',
//             items: [
//               { name: 'Sneakers', href: '#' },
//               { name: 'Boots', href: '#' },
//               { name: 'Flats', href: '#' },
//               { name: 'Sandals', href: '#' },
//               { name: 'Heels', href: '#' },
//               { name: 'Socks', href: '#' },
//             ],
//           },
//           {
//             id: 'collection',
//             name: 'Shop Collection',
//             items: [
//               { name: 'Everything', href: '#' },
//               { name: 'Core', href: '#' },
//               { name: 'New Arrivals', href: '#' },
//               { name: 'Sale', href: '#' },
//               { name: 'Accessories', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'clothing',
//             name: 'All Clothing',
//             items: [
//               { name: 'Basic Tees', href: '#' },
//               { name: 'Artwork Tees', href: '#' },
//               { name: 'Tops', href: '#' },
//               { name: 'Bottoms', href: '#' },
//               { name: 'Swimwear', href: '#' },
//               { name: 'Underwear', href: '#' },
//             ],
//           },
//           {
//             id: 'accessories',
//             name: 'All Accessories',
//             items: [
//               { name: 'Watches', href: '#' },
//               { name: 'Wallets', href: '#' },
//               { name: 'Bags', href: '#' },
//               { name: 'Sunglasses', href: '#' },
//               { name: 'Hats', href: '#' },
//               { name: 'Belts', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'brands',
//             name: 'Brands',
//             items: [
//               { name: 'Full Nelson', href: '#' },
//               { name: 'My Way', href: '#' },
//               { name: 'Re-Arranged', href: '#' },
//               { name: 'Counterfeit', href: '#' },
//               { name: 'Significant Other', href: '#' },
//             ],
//           },
//         ],
//       ],
//     },
//     {
//       id: 'men',
//       name: 'Men',
//       featured: [
//         {
//           name: 'Accessories',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
//           imageAlt:
//             'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
//         },
//         {
//           name: 'New Arrivals',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
//           imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
//         },
//         {
//           name: 'Artwork Tees',
//           href: '#',
//           imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
//           imageAlt:
//             'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
//         },
//       ],
//       sections: [
//         [
//           {
//             id: 'shoes',
//             name: 'Shoes & Accessories',
//             items: [
//               { name: 'Sneakers', href: '#' },
//               { name: 'Boots', href: '#' },
//               { name: 'Sandals', href: '#' },
//               { name: 'Socks', href: '#' },
//             ],
//           },
//           {
//             id: 'collection',
//             name: 'Shop Collection',
//             items: [
//               { name: 'Everything', href: '#' },
//               { name: 'Core', href: '#' },
//               { name: 'New Arrivals', href: '#' },
//               { name: 'Sale', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'clothing',
//             name: 'All Clothing',
//             items: [
//               { name: 'Basic Tees', href: '#' },
//               { name: 'Artwork Tees', href: '#' },
//               { name: 'Pants', href: '#' },
//               { name: 'Hoodies', href: '#' },
//               { name: 'Swimsuits', href: '#' },
//             ],
//           },
//           {
//             id: 'accessories',
//             name: 'All Accessories',
//             items: [
//               { name: 'Watches', href: '#' },
//               { name: 'Wallets', href: '#' },
//               { name: 'Bags', href: '#' },
//               { name: 'Sunglasses', href: '#' },
//               { name: 'Hats', href: '#' },
//               { name: 'Belts', href: '#' },
//             ],
//           },
//         ],
//         [
//           {
//             id: 'brands',
//             name: 'Brands',
//             items: [
//               { name: 'Re-Arranged', href: '#' },
//               { name: 'Counterfeit', href: '#' },
//               { name: 'Full Nelson', href: '#' },
//               { name: 'My Way', href: '#' },
//             ],
//           },
//         ],
//       ],
//     },
//   ],
//   pages: [
//     { name: 'Company', href: '#' },
//     { name: 'Stores', href: '#' },
//   ],
// }