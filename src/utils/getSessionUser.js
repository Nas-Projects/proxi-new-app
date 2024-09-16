// utils/getSessionUser.js

import { createClient } from '@/utils/supabase/server'

import { cookies } from 'next/headers';
import { extractSessionUserInfo } from './extractSessionUserInfo';

export const getSessionUser = async () => {
  const supabase = createClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userInfo = extractSessionUserInfo(session);
  console.log("getSessionUser", userInfo)

  return userInfo;
};



// // utils/getSessionUser.js

// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

// import { cookies } from 'next/headers';
// import { extractSessionUserInfo } from './extractSessionUserInfo';

// export const getSessionUser = async () => {
//   const supabase = createServerComponentClient({ cookies });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const userInfo = extractSessionUserInfo(session);

//   return userInfo;
// };


// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { extractSessionUserInfo } from './extractSessionUserInfo'; // Adjust the path
// import { Database } from '@/types/supabase'; // Adjust the path and import as needed

// export const getSessionUser = async () => {
//   const supabase = createServerComponentClient<Database>({ cookies });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const userInfo = extractSessionUserInfo(session);

//   return userInfo;
// };