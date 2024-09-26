import React from 'react';
import { BellIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';



const NavbarUserAvatarComponent = ({ userProfile }) => {
    if (!userProfile) {
      return null; // Return null if userProfile is not provided
    }
  
    const { image, identities } = userProfile;
    const identityData = identities[0]?.identity_data || {};
    const firstName = identityData.first_name || '';
    const lastName = identityData.last_name || '';
  
    return (
      <div className="flex items-center px-5 sm:px-6">
        <div className="flex-shrink-0">
          {image ? (
            <img alt="User Avatar" src={image} className="h-10 w-10 rounded-full" />
          ) : (
            <img alt="Default Avatar" src={'/assets/ryan_user_profile.png'} className="h-16 w-16 rounded-full" />
          )}
        </div>
        <div className="ml-3 pl-4">
          {firstName && lastName ? (
            <div className="text-lg font-medium mainText">{`${firstName} ${lastName}`}</div>
          ) : (
            <div className="text-lg font-medium text-black">User</div>
          )}
        </div>
        <div className='flex-end ml-[34vw]'>
         <Link href="/messages"
           type="button"
             className="relative ml-auto flex-shrink-0 rounded-full p-1 mainText hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
         </Link>
            <button  type="button"className="relative rounded-full bg-gray-100 p-1 text-gray-600  hover:text-pink-800 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-pink-800"
            >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            
              </button>
        
            
         </div>  
      </div>
    );
  };
  
  export default NavbarUserAvatarComponent;




       