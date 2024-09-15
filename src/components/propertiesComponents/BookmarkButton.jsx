// 'use client';

import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { FaBookmark } from 'react-icons/fa';
// import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';

import { useUser, useSession } from '@supabase/auth-helpers-react';
// import { extractUserInfo } from '@/utils/extractUserInfo';
import {extractSessionUserInfo } from '@/utils/extractSessionUserInfo';
export const  BookmarkButton= ({ property })=> {
  // const supabase = createServerComponentSupabaseClient({ cookies });

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // // const { data: session } = useSession();
  // // console.log("BookmarkButton", session);
  // let userId
  
  // const  user = useUser();

  // if (user) {
  //   console.log("USER_@supabase/auth-helpers-react_BOOKMARK_POSITIVE ", user)
  //   // User is signed in
  //   const userId = user?.id;
  //   console.log("USER_@supabase/auth-helpers_USER_ID ", user.id)
  // } else if (error) {
  //   // Error occurred
  //   console.log("USER_@supabase/auth-helpers-react_BOOKMARK_ERROR ")
  // } else {
  //   console.log("NO_USER_@supabase/auth-helpers-react_BOOKMARK else ")
  //   // User is not signed in
  // }
  const sessionObject =  {
    "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6Ijh0SC9LZjBMMStxQjdoMTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2RndHBydHV1cXhwc3plb3h4eXhjLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiI0NDFhYjkxOS05ODQzLTQ0ZTYtOGYwZS1iOTgyMWNhYjIzMGIiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI2NDIxMDU5LCJpYXQiOjE3MjY0MTc0NTksImVtYWlsIjoibWlyYWtlaGFyODBAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6Im1pcmFrZWhhcjgwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyc3RfbmFtZSI6Ik1JcmEiLCJsYXN0X25hbWUiOiJtaXJha2VoYXI4MEBnbWFpbC5jb20iLCJsaWNlbnNlIjoid2Fyd3JhdGVzZGphbW5hdHlAeWFob28uZnIiLCJwaG9uZSI6IjIxMzI0NTM2IiwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJyb2xlIjoidW5hdXRoZW50aWNhdGVkIiwic3ViIjoiNDQxYWI5MTktOTg0My00NGU2LThmMGUtYjk4MjFjYWIyMzBiIiwidXNlclJvbGUiOiJBZ2VudCJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzI2MzU5MTE4fV0sInNlc3Npb25faWQiOiJlMDM4OTIzNS1jYjgxLTQ4YzMtYjRlOS1mM2M0YjhjOWUwOWYiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.LKmFvRhiIhmNrPIaWWpIHQjrtVmBqOI2zmgnzQnCrQ4",
    "token_type": "bearer",
    "expires_in": 3600,
    "expires_at": 1726421059,
    "refresh_token": "qRe2BPwY0-GboB0g9E5oig",
    "user": {
        "id": "441ab919-9843-44e6-8f0e-b9821cab230b",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "mirakehar80@gmail.com",
        "email_confirmed_at": "2024-09-14T18:33:40.512075Z",
        "phone": "",
        "confirmed_at": "2024-09-14T18:33:40.512075Z",
        "last_sign_in_at": "2024-09-15T00:11:58.51048Z",
        "app_metadata": {
            "provider": "email",
            "providers": [
                "email"
            ]
        },
        "user_metadata": {
            "email": "mirakehar80@gmail.com",
            "email_verified": false,
            "first_name": "MIra",
            "last_name": "mirakehar80@gmail.com",
            "license": "warwratesdjamnaty@yahoo.fr",
            "phone": "21324536",
            "phone_verified": false,
            "role": "unauthenticated",
            "sub": "441ab919-9843-44e6-8f0e-b9821cab230b",
            "userRole": "Agent"
        },
        "identities": [
            {
                "identity_id": "740890d7-5581-4216-afe5-0a25a5e9177b",
                "id": "441ab919-9843-44e6-8f0e-b9821cab230b",
                "user_id": "441ab919-9843-44e6-8f0e-b9821cab230b",
                "identity_data": {
                    "email": "mirakehar80@gmail.com",
                    "email_verified": false,
                    "first_name": "MIra",
                    "last_name": "mirakehar80@gmail.com",
                    "license": "warwratesdjamnaty@yahoo.fr",
                    "phone": "21324536",
                    "phone_verified": false,
                    "role": "unauthenticated",
                    "sub": "441ab919-9843-44e6-8f0e-b9821cab230b",
                    "userRole": "Agent"
                },
                "provider": "email",
                "last_sign_in_at": "2024-09-13T18:08:22.443263Z",
                "created_at": "2024-09-13T18:08:22.443316Z",
                "updated_at": "2024-09-13T18:08:22.443316Z",
                "email": "mirakehar80@gmail.com"
            }
        ],
        "created_at": "2024-09-13T18:08:22.43899Z",
        "updated_at": "2024-09-15T16:24:19.632921Z",
        "is_anonymous": false
    }
}
  
  const session = useSession()

  if (session && session.access_token) {
    console.log("SESSION_@supabase/auth-helpers-react_NO_SESSION");
    return <div>Please log in to bookmark this item.</div>;
  }
  else {
    console.log("SESSION_@supabase/auth-helpers-react_POSSITIVE", session);
    return <div>GOT NO SESSION - Checking data</div>;
  }

  const userInfo = extractSessionUserInfo(sessionUser);

  // const { user, error } = useUser();
  // if (!user) {
  //   console.log("NO_USER_@supabase/auth-helpers-react_BOOKMARK else if ")
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error fetching user data</div>;
  // }


 

  // const [isBookmarked, setIsBookmarked] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (!userId) {
  //     setLoading(false);
  //     return;
  //   }

  //   const checkBookmarkStatus = async () => {
  //     try {
  //       const res = await fetch('/api/bookmarks/check', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           propertyId: property._id,
  //         }),
  //       });

  //       if (res.status === 200) {
  //         const data = await res.json();
  //         setIsBookmarked(data.isBookmarked);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkBookmarkStatus();
  // }, [property._id, userId]);

  // const handleClick = async () => {
  //   if (!userId) {
  //     toast.error('You need to sign in to bookmark a property');
  //     return;
  //   }

  //   try {
  //     const res = await fetch('/api/bookmarks', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         propertyId: property._id,
  //       }),
  //     });

  //     if (res.status === 200) {
  //       const data = await res.json();
  //       toast.success(data.message);
  //       setIsBookmarked(data.isBookmarked);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Something went wrong');
  //   }
  // };

  // if (loading) return <p className='text-center'>Loading...</p>;

  // return isBookmarked ? (
  //   <button
  //     onClick={handleClick}
  //     className='bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
  //   >
  //     <FaBookmark className='mr-2' /> Remove Bookmark
  //   </button>
  // ) : (
  //   <button
  //     onClick={handleClick}
  //     className='bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'
  //   >
  //     <FaBookmark className='mr-2' /> Bookmark Property
  //   </button>
  // );
};
export default BookmarkButton;
