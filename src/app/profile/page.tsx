// src/app/profile/page.tsx
"use client"

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import ProfileComponent from "@/components/ProfileComponent";
import { fetchUserById } from "@/lib/data";
import { useEffect } from "react";
import supabase from '@/utils/supabase-browser';
export default async function PrivatePage() {
  const { user } = useUser();
  const { mongoUser, setMongoUser } = useMongoUser();

  useEffect(() => {
    if (user && !mongoUser) {
      fetch(`/api/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => setMongoUser(data));
    }
  }, [user, mongoUser, setMongoUser]);
  console.log("SESSION_IN_USER_PROFILE_PAGE", mongoUser)
  if (!user) {
    return <div>Please log in</div>;
  }

  if (!mongoUser) {
    return <div>Loading...</div>;
  }

  const session = await getServerSession(authOptions);
  console.log("SESSION_IN_USER_PROFILE_PAGE", session)
  if (!session || !session.user?.id) {
    redirect("/login");
  }


  if (!mongoUser) {
    return <div>Loading...</div>;
  }

  // const userId = session.user.id;

  // const user = await fetchUserById(userId);

  // if (!user) {
  //   // redirect("/login");
  //   console.log("User SESSION not found")
  // }

  return <ProfileComponent user={user} />;
}

{/*  
 //   <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//   <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
//   <div className="mt-4">
//     <p className="text-gray-600"><strong>Name:</strong> {data.user.user_metadata.first_name} {data.user.user_metadata.last_name}</p>
//     <p className="text-gray-600"><strong>Email:</strong> {data.user.email}</p>
//     <p className="text-gray-600"><strong>Plan:</strong> {data.user.user_metadata.phone}</p>
//     <p className="text-gray-600"><strong>Plan:</strong> {data.user.user_metadata.plan}</p>
//   </div>
// </div> */}