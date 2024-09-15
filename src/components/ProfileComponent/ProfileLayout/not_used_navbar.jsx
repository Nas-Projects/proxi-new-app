
// 'use client'


// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { PlusIcon } from '@heroicons/react/20/solid'
// import { useEffect, useState } from 'react'
// import Link from 'next/link'
// import { signIn, signOut } from 'next-auth/react'
// import LoadingDots from '@/components/LoadingDots'
// import { createClient } from '@/utils/supabase/server'
// import { useRouter } from 'next/router'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example({session}) {

//   const [isScrollingUp, setIsScrollingUp] = useState(false);
//   const [isTop, setIsTop] = useState(true);
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [isSocialVisible, setIsSocialVisible] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false); // New state for managing the nav checkbox
//   const [loading, setLoading] = useState(true);


//   const [userProfile, setUserProfile] = useState(null);

//   const [errorMessage, setErrorMessage] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     async function fetchUserProfile() {
//       const supabase = createClient();

//       // Get the authenticated user
//       const { data: userData, error: userError } = await supabase.auth.getUser();

//       if (userError || !userData?.user) {
//         setErrorMessage("Error loading authenticated user.");
//         return;
//       }

//       // Fetch the user profile from user_profiles table
//       const { data: profileData, error: profileError } = await supabase
//         .from('user_profiles')
//         .select('*')
//         .eq('id', userData.user.id)
//         .single();

//       if (profileError) {
//         setErrorMessage("Error loading user profile.");
//       } else {
//         setUserProfile(profileData);
//       }
//     }

//     fetchUserProfile();
//   }, []);

  

//   if (errorMessage) {
//     return <div className="text-red-500">{errorMessage}</div>;
//   }

//   if (!userProfile) {
//     return <div>Loading...</div>;
//   }

 

//  const additionalNavItems = [
//   {name:'Subscription', 
//  href:'/subscription'},
//  {name:'Tracks', href:'/tracks'},
//   {name:'Tracks', href:'/tracks'},
//   {name:'Profile', href:"/profile"},
//   {name:'Login', href:'/login'},
//   {name:'Social', href:'/social'}  ]
//   useEffect(() => {
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
//         if (st === 0 || st <= 9) {
//           setIsTop(true);
//           console.log("IS_TOP-", isTop)
//         } else {
//           setIsTop(false);
//           console.log("IS_TOP-", isTop)
//         }
//       }
//       setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollTop]);


//   // const baseStyle = 'h-[6.1em] sm:h-[8em] lg:!h-[12em] z-50 mt-20 !z-50';
//    const baseStyle = 'h-[4.1em] sm:h-[4em] lg:!h-[8em] z-50 mt-0 !z-50';
//   const applyStyle = '!sticky bg-black !top-0 !z-30 !inset-x-0 lg:h-[5em] lg:pl-[1em] lg:pt-[0%] z-50';

//   const handleNavToggle = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const handleNavItemClick = () => {
//     setIsNavOpen(false);
//   };
// useEffect(() => {
//   setLoading(false)
// },[])

//     //   // const { data: session, status } = useSession();
//     //   const [loading, setLoading] = useState(false);
//     //  const session= null
//   return (
//     <Disclosure as="nav" className="bg-gray-800 z-50 pt-2">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 justify-between">
//           <div className="flex">
//             <div className="-ml-2 mr-2 flex items-center md:hidden">
//               {/* Mobile menu button */}
//               <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon aria-hidden="true" className={`block h-6 w-6 group-data-[${open}]:hidden`} />
//                 <XMarkIcon aria-hidden="true" className={`hidden h-6 w-6 group-data-[${open}]:block`} />
//               </DisclosureButton>
//             </div>
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   aria-current={item.current ? 'page' : undefined}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'rounded-md px-3 py-2 text-sm font-medium',
//                   )}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <button
//                 type="button"
//                 className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 <PlusIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
//                 New Job
//               </button>
//             </div>
//             <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
//               <button
//                 type="button"
//                 className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//               >
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">View notifications</span>
//                 <BellIcon aria-hidden="true" className="h-6 w-6" />
//               </button>

//               {/* Profile dropdown */}
//               <Menu as="div" className="relative ml-3">
//                 <div>
//                   <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">Open user menu</span>
//                    { session?.user ? 
//                    <div className="inline-flex space-y-4">
//                       <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                      



//                      <div className='hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center'>
//                       <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                         <button
//                           type="button"
//                           className="inline-flex z-50 items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
//                           onClick={() => setSidebarOpen(true)}>
//                           <span className="sr-only">Open sidebar</span>
//                         {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
//                       </button>
                      
//                       <button
//                         disabled={loading}
//                         onClick={() => {
//                           setLoading(true);
//                           signOut()
//                         }}
//                         className={`${
//                           loading
//                             ? 'bg-gray-200 border-gray-300'
//                             : 'bg-black hover:bg-white border-black'
//                         } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
//                       >
//                         {loading ? <LoadingDots color="gray" /> : 'Logout'}
//                       </button>
//                     </MenuButton>
//                     </div>
                  
//                    </div>
                 

//                    :<div className='hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center'>
//                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> 
//                       <button
//                         disabled={loading}
//                         onClick={() => {
//                           setLoading(true);
//                           signIn('google', { callbackUrl: `/profile` });
//                         }}
//                         className={`${
//                           loading
//                             ? 'bg-gray-200 border-gray-300'
//                             : 'bg-black hover:bg-white border-black'
//                         } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
//                       >
//                         {loading ? <LoadingDots color="gray" /> : 'Log in with Google'}
//                       </button> 
//                     </MenuButton>
//                   </div>
//                   }
//                   </MenuButton>

//                 </div>
      
     
//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                 >
//                   {userNavigation.map((item) => (
//                     <MenuItem key={item.name}>
//                       <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                         {item.name}
//                       </a>
//                     </MenuItem>
//                   ))}
//                 </MenuItems>
//               </Menu>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="md:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//         <div className="border-t border-gray-700 pb-3 pt-4">
//           <div className="flex items-center px-5 sm:px-6">
//             <div className="flex-shrink-0">
//               <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
//             </div>
//             <div className="ml-3">
//               <div className="text-base font-medium text-white">{user.name}</div>
//               <div className="text-sm font-medium text-gray-400">{user.email}</div>
//             </div>
//             <button
//               type="button"
//               className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="mt-3 space-y-1 px-2 sm:px-3">
//             {userNavigation.map((item) => (
//               <DisclosureButton
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//               >
//                 {item.name}
//               </DisclosureButton>
//             ))}
//           </div>
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }
