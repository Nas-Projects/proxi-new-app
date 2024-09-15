"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import TrackProgress from '@/components/TrackProgress';
import ProfileComponent from '../../components/ProfileComponent/index'
export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();

  useEffect(() => {
    async function fetchUserProfile() {
      const supabase = createClient();

      // Get the authenticated user
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData?.user) {
        console.log("DASHBOARD_Error loading authenticated user.");
        setErrorMessage("Error loading authenticated user.");
        return;
      }

      // Fetch the user profile from user_profiles table
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userData.user.id)
        .single();

      if (profileError) {
        setErrorMessage("Error loading user profile.");
      } else {
        setUserProfile(profileData);
      }
    }

    fetchUserProfile();
  }, []);

  

  if (errorMessage) {
    return <div className="text-red-500">{errorMessage}</div>;
  }

  if (!userProfile) {
    return <div>Loading...</div>;
  }


  return (
    <>
    {userProfile.role === 'trainer' ? <TrainerDashboard  userProfile={userProfile}/> : <MemberDashboard  userProfile={userProfile}/>}
  </>
    
  );
}



const TrainerDashboard =({userProfile}) => {
  return <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-semibold text-gray-800">TRAINER DASBOARD</h1>
  <div className="mt-4">
    <p className="text-gray-600"><strong>Name:</strong> {userProfile.first_name} {userProfile.last_name}</p>
    <p className="text-gray-600"><strong>Email:</strong> {userProfile.email}</p>
    <p className="text-gray-600"><strong>Plan:</strong> {userProfile.plan_id}</p>
    {/* Add more fields like track progress, badges, saved items here */}
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
   <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>


   <div className="mt-6">
    <button 
       className="px-4 py-2 bg-blue-500 text-white rounded-lg"
       onClick={() => router.push('/schedule')}>
       Schedule 1-on-1 Session
     </button>
   </div>

   {/* Show saved items */}
   <div className="mt-6">
     <h2 className="text-xl font-semibold text-gray-800">Saved Items</h2>
     <ul className="list-disc pl-5">
       {userProfile.saved_items?.map((item, index) => (
         <li key={index} className="text-gray-600">
           {item.title}
         </li>
       ))}
     </ul>
   </div>
 </div>
  </div>
</div>
}


const MemberDashboard = ({ userProfile }) => {
  const [trackData, setTrackData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log("USER_PROFILE", userProfile);  // Debugging log

    // Fetch track data if a track_id exists
    const fetchTrackData = async () => {
      if (userProfile?.track_id) {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('tracks')
          .select('*')
          .eq('id', userProfile.track_id)
          .single();

        if (error) {
          console.error("Error fetching track:", error.message);
        } else {
          console.log("Track_Data:", data);
          setTrackData(data);
        }
      }
    };

    fetchTrackData();
  }, [userProfile]);

  if (!userProfile) {
    return <div>Loading user profile...</div>;
  }

  return (<>
  <ProfileComponent user={userProfile}/>
  <div className="flex fixed flex-col gap-docs_0.5 right-0 md:w-auto w-full overflow-y-auto max-h-[50%] md:max-h-[calc(100vh-57px)] max-[768px]:h-[50%] bottom-0">
  <div className="md:max-w-[320px] md:w-[320px] w-full fixed md:right-docs_1 left-0 md:m-docs_1 md:bottom-docs_1 bottom-0 opacity-100 transition-opacity duration-200 ease-ease flex flex-col !relative !top-0 !bottom-0 !right-0">
    <div className="bg-medusa-bg-base shadow-flyout dark:shadow-flyout-dark rounded transition-transform origin-bottom-right flex flex-col">
      <div className="overflow-auto basis-3/4">
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Choose your client
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/medusa-react/overview"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Set CORS configurations in Backend
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/development/backend/configurations#admin_cors-and-store_cors"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Create a Publishable API Key
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/user-guide/settings/publishable-api-keys"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Use Publishable API Key
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/development/publishable-api-keys/storefront/use-in-requests"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Add Region Selection
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/modules/regions-and-currencies/storefront/use-regions"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Display Products
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/modules/products/storefront/show-products"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Implement Cart Functionalities
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/modules/carts-and-checkout/storefront/implement-cart"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Implement Checkout Flow
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/modules/carts-and-checkout/storefront/implement-checkout-flow"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                className="text-ui-fg-interactive"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm3.857-9.809a.75.75 0 1 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              Implement Customer Profiles
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/modules/customers/storefront/implement-customer-profiles"
            />
          </div>
        </div>
        <div className="border-0 border-b border-solid border-medusa-border-base relative p-1">
          <div className="flex items-center gap-1 relative">
            <div className="w-2 flex-none flex items-center justify-center">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-ui-fg-subtle shadow-active dark:shadow-active-dark rounded-full !text-ui-fg-interactive"
              >
                <path
                  d="M12.5 2.93589C10.884 2.3547 9.116 2.3547 7.5 2.93589"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.63049 8.63198C2.94295 6.94471 3.82573 5.41606 5.13094 4.30209"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.13094 15.6979C3.82575 14.5839 2.94298 13.0552 2.63049 11.368"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 17.0641C9.116 17.6453 10.884 17.6453 12.5 17.0641"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.3695 8.63198C17.057 6.94471 16.1742 5.41606 14.869 4.30209"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.869 15.6979C16.1742 14.5839 17.057 13.0552 17.3695 11.368"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-compact-medium-plus text-medusa-fg-base">
              More Commerce Functionalities
            </span>
            <a
              className="absolute top-0 left-0 w-full h-full"
              href="/modules/overview"
            />
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 flex-none" />
            <div className="text-medium text-ui-fg-subtle mt-1">
              This recipe guided you to create a storefront with basic
              functionalities. You can add more functionalities to your
              storefront based on your use case.
              <ul>
                <li>
                  The <a href="/modules/overview">Commerce Modules</a>{" "}
                  documentation holds various storefront-related how-to guides
                  to help you implement different features.
                </li>
                <li>
                  You can also checkout the{" "}
                  <a
                    href="https://docs.medusajs.com/api/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Store REST APIs
                  </a>{" "}
                  for a full list of available REST APIs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-1 justify-between items-center">
        <div>
          <button className="inline-flex flex-row justify-center items-center gap-[6px] py-[5px] px-docs_0.75 rounded-docs_sm cursor-pointer bg-button-neutral bg-medusa-button-neutral dark:bg-button-neutral-dark hover:bg-medusa-button-neutral-hover hover:bg-no-image hover:no-underline active:bg-medusa-button-neutral-pressed active:bg-no-image focus:bg-medusa-button-neutral-pressed focus:bg-no-image disabled:!bg-no-image disabled:bg-medusa-bg-disabled disabled:cursor-not-allowed border border-solid border-medusa-border-base text-compact-small-plus text-medusa-fg-base [&_a]:text-medusa-fg-base shadow-button-neutral focus:shadow-button-neutral-focused active:shadow-button-neutral-focused transition-shadow dark:shadow-button-neutral dark:focus:shadow-button-neutral-focused dark:active:shadow-button-neutral-focused select-none !text-medusa-fg-subtle !p-[6px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              className="flip-y hidden md:inline"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 8.667 4.667 12 8 15.333"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.333 4.667v4.666A2.667 2.667 0 0 1 12.667 12h-8"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              className="inline md:hidden"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m15 11-5 5m0 0-5-5m5 5V4"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-0.5 items-center">
          <button className="inline-flex flex-row justify-center items-center gap-[6px] py-[5px] px-docs_0.75 rounded-docs_sm cursor-pointer bg-button-inverted bg-medusa-button-inverted dark:bg-button-inverted-dark hover:bg-medusa-button-inverted-hover hover:bg-no-image hover:no-underline active:bg-medusa-button-inverted-pressed active:bg-no-image focus:bg-medusa-button-inverted-pressed focus:bg-no-image shadow-button-colored active:shadow-button-colored-focused focus:shadow-button-colored-focused transition-shadow dark:shadow-button-colored-dark dark:active:shadow-button-colored-focused-dark dark:focus:shadow-button-colored-focused-dark disabled:!bg-no-image disabled:bg-medusa-bg-disabled disabled:cursor-not-allowed disabled:border-medusa-border-base text-compact-small-plus text-medusa-fg-on-inverted [&_a]:text-medusa-fg-on-inverted disabled:text-medusa-fg-disabled [&_a]:disabled:text-medusa-fg-disabled border border-medusa-border-loud select-none">
            Finish
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">MEMBER DASHBOARD</h1>
      <div className="mt-4">
        <p className="text-gray-600"><strong>Name:</strong> {userProfile.first_name} {userProfile.last_name}</p>
        <p className="text-gray-600"><strong>Email:</strong> {userProfile.email}</p>
        <p className="text-gray-600"><strong>Plan:</strong> {userProfile.plan_id}</p>

        {/* Conditional rendering for track progress */}
        {userProfile.track_id ? (
          trackData ? (
            <TrackProgress userProfile={userProfile} trackData={trackData} />
          ) : (
            <div>Loading track data...</div>
          )
        ) : (
          <div className="p-4 bg-yellow-100 text-yellow-700 rounded">
            <p>You have not started any track yet.</p>
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-4"
              onClick={() => router.push('/tracks')}
            >
              Browse Tracks
            </button>
          </div>
        )}

        {/* Button for scheduling a 1-on-1 session */}
        <div className="mt-6">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => router.push('/schedule')}
          >
            Schedule 1-on-1 Session
          </button>
        </div>
        
        {/* Display saved items if available */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Saved Items</h2>
          <ul className="list-disc pl-5">
            {userProfile.saved_items?.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div> </>
  );
};
