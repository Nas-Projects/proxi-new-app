

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import LoadingDots from '@/components/LoadingDots'
import { createClient } from '@/utils/supabase/client'
// import { useRouter } from 'next/navigation'
import { useSession } from '@supabase/auth-helpers-react'
import { extractSessionUserInfo } from '@/utils/extractSessionUserInfo'
import { NavigationLeft } from './navigationMenu/navigation'
import { MessageCircle } from 'lucide-react'
import  NavbarUserAvatarComponent  from './NavbarUserAvatarComponent'
//  console.log('NAVBAR_User profile loaded  successfully:', userData);
//         console.log('NAVBAR_User profileUSER:', userData.user.identities[0]);
//         console.log('NAVBAR_User_profile_IDENTITIES:', userData.user.identities[0]);
//         console.log('NAVBAR_User_profile_IDENTITIES_DOT_INDENTITY_DATA:', userData.user.identities[0]?.identity_data);
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Properties', href: '/properties', current: true },
  { name: 'Sales', href: '/properties/search-results?location=&propertyType=sale', current: false },
  { name: 'Retail', href: '/properties/search-results?location=&propertyType=retail', current: false },
  { name: 'Residentials', href: '/properties/search-results?location=&propertyType=residential', current: false },
  { name: 'Blockchain', href: '/blogs/how-blockchain-is-transforming-real-estate-transactions', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Agents', href: '/agents', current: false },
  { name: 'Join', href: '/join', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
  { name: 'Contact', href: '/contact', current: false },

  { name: 'Terms', href: '/terms', current: false },

]
const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Messages', href: '/messages' },
  { name: 'Settings', href: '/settings' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({}) {
  // const [isScrollingUp, setIsScrollingUp] = useState(false);
  // const [isTop, setIsTop] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [isSocialVisible, setIsSocialVisible] = useState(true);
  // const [open, setIsNavOpen] = useState(false); // New state for managing the nav checkbox



  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  // const { data: session } = useSession();

  // const router = useRouter();
  const  session  = useSession(); // destructuring session and error
console.log("errorMessage", errorMessage);
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!session) {
        setUserProfile(null);
        return;
      }

      const supabase = createClient(); // Initialize your Supabase client

      try {
        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError || !userData?.user) {
          setErrorMessage('Error loading authenticated user.');
          setUserProfile(null);
          return;
        }

        console.log('User profile loaded successfully:', userData);
        const identity = userData.user.identities[0];

        if (identity) {
          const userInfo = extractSessionUserInfo(session);
          console.log('User profile EXTRACTED in CUstom  FUNC:', userInfo);
          setUserProfile(userInfo); // Set user profile data here
        } else {
          setUserProfile(null); // Handle case where identity data doesn't exist
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setErrorMessage('An error occurred while fetching the user profile.');
        setUserProfile(null);
      }
    };

    fetchUserProfile();
  }, [session]);

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     if (!session) {
  //       setUserProfile(null);
  //       return;
  //     }

  //     const supabase = createClient();

  //     try {
  //       const { data: userData, error: userError } = await supabase.auth.getUser();

  //       if (userError || !userData?.user) {
  //         setErrorMessage('Error loading authenticated user.');
  //         setUserProfile(null);
  //         return;
  //       }

  //       // You can fetch additional profile information if needed
  //       // const { data: profileData, error: profileError } = await supabase
  //       //   .from('user_profiles')
  //       //   .select('*')
  //       //   .eq('id', userData.user.id)
  //       //   .single();

  //       // if (profileError) {
  //       //   setErrorMessage('Error loading user profile.');
  //       //   setUserProfile(null);
  //       // } else {
  //       //   setUserProfile(profileData);
  //       // }

       
  //       setUserProfile(userData.user);
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error);
  //       setErrorMessage('An error occurred while fetching the user profile.');
  //       setUserProfile(null);
  //     }
  //   };

  //   fetchUserProfile();
  // }, [session]); // Adding session as a dependency to run the effect when session changes

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      // setIsScrollingUp(st < lastScrollTop);
      setLastScrollTop(st);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  if (loading) return <LoadingDots />; // Show loading spinner while loading

  //  const baseStyle = 'h-[4.1em] sm:h-[4em] lg:!h-[8em] z-50 mt-0 !z-50';
  // const applyStyle = '!sticky bg-black !top-0 !z-30 !inset-x-0 lg:h-[5em] lg:pl-[1em] lg:pt-[0%] z-50';

  return (
    <Disclosure as="nav" className="bg-white z-50 pt-2 max-w-[600px]:!min-h-[60vh]">
      <div className="max-w-screen px-4 sm:px-6 lg:px-8 xl:px-12 ">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 mainText hover:bg-pink-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/* <Bars3Icon aria-hidden="true" className={`block h-6 w-6 group-data-[${open}]:hidden`} />
                <XMarkIcon aria-hidden="true" className={`hidden h-6 w-6 group-data-[${open}]:block`} /> */}
                <Bars3Icon aria-hidden="true" className={`block h-6 w-6 group-data-[open]:hidden`} />
                <XMarkIcon aria-hidden="true" className={`hidden h-6 w-6 group-data-[open]:block`} />
              </DisclosureButton>
            </div>
            <Link href="/" className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/logo.png"
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden z-50 md:ml-6 md:flex md:items-center md:space-x-4">
             <NavigationLeft />
              {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-[#da1f88]' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                >
                  {item.name}
                </a>
              ))} */}
            </div>
            
          </div>
          <div className="flex flex-end  items-center">
           { userProfile?.isAgent && <div className="flex-shrink-0">
              <button
                type="button"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <PlusIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
                  New Listing
              </button>
            </div>}
            <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
              <button
                type="button"
                className="relative rounded-full bg-gray-100 p-1 text-gray-600  hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                   { userProfile !== null ?
                   <div className="flex space-y-4 space-x-4">
                     { userProfile?.image &&  <div className="flex w-8"
                     ><img alt="" src={userProfile.user.imageUrl} className="h-8 w-8 rounded-full flex" />
                     
                     </div> }
                     {userProfile !== null  && !userProfile.image && <div className="flex w-8"><img alt="" src={'/assets/ryan_user_profile.png'} className="h-8 w-8 rounded-full flex" /></div> }
                      



                     <div className='hidden  md:ml-4 md:flex md:!mt-[-0.5em] md:flex-shrink-0 md:items-center'>
                      <MenuButton className="hidden relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <button
                          type="button"
                          className="inline-flex z-50 items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
                          onClick={() => setSidebarOpen(true)}>
                          <span className="sr-only">Open sidebar</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                      
                   {  userProfile !== null ?  <button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          signOut()
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200/20 border-gray-300'
                            : 'bg-white !text-black  border-black hover:bg-[var(--secondary-color)] hover:!text-white hover:border-pink-400'
                        } w-36  h-8 lg:h-[3em] py-1 text-white border rounded-md text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Logout'}
                      </button>
                       :
                      <button
                        disabled={loading}
                        onClick={() => {
                          setLoading(true);
                          signIn("Google", {redirect: "/properties"})
                        }}
                        className={`${
                          loading
                            ? 'bg-gray-200 border-gray-300'
                            : 'bg-black hover:bg-white border-black'
                        } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
                      >
                        {loading ? <LoadingDots color="gray" /> : 'Login'}
                      </button>}
                    </MenuButton>
                    </div>
                  
                   </div>
                 

                   :  <div className='hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center'>
                   <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none ring-1  ring-black focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> 
                    <Link href='/'
                      disabled={loading}
                      // onClick={() => {
                      //   setLoading(true);
                      //   signIn('google', { callbackUrl: `/properties` });
                      // }}
                      className={`${
                        loading
                          ? 'bg-gray-200 border-pink-500'
                          : 'bg-white/80 hover:bg-white '
                      }      w-36 h-8 py-1 text-bllack hover:text-white hover:bg-black text-white hover:text-black border rounded-md text-sm transition-all`}
                    >
                      {loading ? <LoadingDots color="gray" /> : 'Log in with Google'}
                    </Link> 
                  </MenuButton>
                </div>
                  //  <div className='hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center'>
                  //    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> 
                  //     <button
                  //       disabled={loading}
                  //       onClick={() => {
                  //         setLoading(true);
                  //         signIn('google', { callbackUrl: `/properties` });
                  //       }}
                  //       className={`${
                  //         loading
                  //           ? 'bg-gray-200 border-gray-300'
                  //           : 'bg-black hover:bg-white border-black'
                  //       } w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all`}
                  //     >
                  //       {loading ? <LoadingDots color="gray" /> : 'Log in with Google'}
                  //     </button> 
                  //   </MenuButton>
                  // </div>
                  }
                  </MenuButton>

                </div>
      
     
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden p-4 mt-6 z-50">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 max-w-[24em]">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-pink-100/80 text-black !text-[1.425rem]' : 'mainText hover:bg-pink-300 hover:text-black dark:hover:text-white',
                'block rounded-md px-3 py-2  !text-[1.325rem] font-medium ',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <hr class="text-gray-400"/>
        <div className="border-t border-gray-700 pb-3 pt-4 mt-4">
          <NavbarUserAvatarComponent userProfile={userProfile}/>
          {/* <div className="flex items-center px-5 sm:px-6">
            <div className="flex-shrink-0">
            { userProfile !== null && userProfile?.image ?  <img alt="" src={userProfile.image} className="h-10 w-10 rounded-full" /> :
            <div className='inline-flex gap-x-4'><img alt="proxy-admin-avatar" src={'/assets/ryan_user_profile.png'} className="h-16 w-16 rounded-full" />
            <h1>{userProfile.user.identities[0]?.identity_data.last_name}</h1>
            </div> }
            </div>
            <div className="ml-3">
             {userProfile !== null &&  userProfile?.username ? <div className="text-lg font-medium text-white">{userProfile?.first_name}</div> : <><div className="text-lg font-medium text-white">{userProfile?.name}</div>
              <div className="text-sm font-medium text-gray-400">{userProfile?.last_name}</div>
             </>}
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full p-1 mainText hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
           <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <button  type="button"
                className="relative rounded-full bg-gray-100 p-1 text-gray-600  hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
              
              </button>
          </div> */}
         {userProfile !== null &&  <div className="mt-3 space-y-1 px-2 sm:px-3">
            {userNavigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-md px-3 py-2 text-lg font-medium mainText hover:bg-gray-700 hover:text-white"
              >
                {item.name !== "Messages" ? item.name  
                : <div className="inline-flex gap-x-4">{item.name} <MessageCircle aria-hidden="true" className="h-6 w-6" />  </div> }
              </DisclosureButton>
            ))}
          </div>}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}


// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { BsX } from 'react-icons/bs';
// import styles from '@styles/styles';
// import { HiOutlineMenuAlt3 } from 'react-icons/hi';
// import Image from 'next/image';
// import Link from 'next/link';
// import { navLinks } from '@constants';
// import { logoalt } from '@public/assets';
// import { useRouter } from 'next/navigation';

// const Navbar = () => {
//   const [active, setActive] = useState('Home');
//   const [toggle, setToggle] = useState(false);
//   const menuRef = useRef(null);
//   const router = useRouter();

//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//         if (menuRef.current && !menuRef.current.contains(event.target)) {
//             setToggle(false);
//         }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//     };
// }, []);


//   return (
//     <nav className={`${styles.paddingX} w-full flex items-center fixed 
//       md:py-4 ss:py-4 py-3 top-0 z-20 navsmooth backdrop-blur-md bg-opacity-90
//       ${ isScrolled ? 'bg-white shadow-lg' : '' }`}
//     >
//       <div className="w-full flex justify-between items-center 
//       max-w-[86rem] mx-auto">
//         <Link href='/'
//           onClick={() => {
//           setActive('Home');
//           window.scrollTo(0, 0);
//           }}>
//           <Image 
//             src={logoalt} 
//             alt='logo'
//             height={'auto'}
//             width={180}
//           />
//         </Link>

//         <div className="flex items-center justify-end w-full hidden 
//         mr-16 md:flex">
//           <ul className="list-none flex gap-12">
//             {navLinks.map((link) => (
//               <li
//                 key={link.id}
//                 className={`${
//                   active === link.title
//                     ? 'font-bold text-custom-gradient'
//                     : 'text-main'
//                 } text-[17px] text-decoration-none cursor-pointer`}
//                 onClick={() => {
//                   setActive(link.title);
//                   if (link.special) {
//                     router.push(link.route);
//                   }
//                 }}
//               >
//                 <a href={`/${link.id}`}>{link.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <button className='border-gradient border-[1px] grow4 justify-center 
//         hidden md:flex text-[16px] py-2.5 px-10 text-main rounded-md 
//         w-[20%]'
//             >
//               Sign In or Register
//           </button>

//         {/* FOR MOBILE */}
        
//         <div className="md:hidden flex justify-end flex-1 items-center
//         mt-3">
//           <div className="flex items-center z-20">
//             {toggle ? (
//               <BsX
//                 size={40}
//                 className="object-contain cursor-pointer"
//                 style={{ color: isScrolled ? '#000' : '#021e31' }}
//                 onClick={() => setToggle(!toggle)}
//               />
//             ) : (
//               <HiOutlineMenuAlt3
//                 size={40}
//                 className="object-contain cursor-pointer"
//                 style={{ color: isScrolled ? '#000' : '#021e31' }}
//                 onClick={() => setToggle(!toggle)}
//               />
//             )}
//           </div>
          
//           <div
//             ref={menuRef}
//             className={`p-6 ss:mt-28 mt-24 bg-primaryalt absolute top-0 right-0 
//             z-10 flex-col w-full shadow-xl
//             ${toggle ? 'menu-slide-enter menu-slide-enter-active' 
//             : 'menu-slide-exit menu-slide-exit-active'}`}
//           >
//             <ul className="list-none flex justify-end 
//             flex-col">
//               {navLinks.map((link, index) => (
//                 <li
//                   key={link.id}
//                   className={`${
//                     active === link.title
//                       ? 'text-secondary'
//                       : 'text-primary'
//                   } font-medium cursor-pointer ss:text-[20px] text-[17px] 
//                   w-full
//                   ${index !== navLinks.length - 1 ? 'border-b-[1px] pb-1.5 pt-1.5' : 'pt-1.5'}`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(link.title);
//                     if (link.special) {
//                       router.push(link.route);
//                     }
//                   }}
//                 >
//                   <a href={`#${link.id}`}>{link.title}</a>
//                 </li>
//               ))}
//             </ul>

//             <button className='bg-main text-[16px] py-2 px-4
//               text-white rounded-[5px] mt-5 ss:text-[20px] text-[14px]'
//               onClick={() => {
//                 setToggle(!toggle);
//               }}
//               >
//                 Our Newsletter
//               </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


