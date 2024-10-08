'use client'


// import ProfileComponent from "@/components/ProfileComponent";
// import { fetchUserById } from "@/lib/data";
import { useEffect, useState } from "react";
// import supabase from '@/utils/supabase-browser';

import { useUser } from "@supabase/auth-helpers-react";
// import { getUser } from "../api/apiHelper";

export default function PrivatePage() {
  // const[loading, setLoading] = useState(true);
  const [mongoDBnUser, setMongoDBnUser] = useState(null);
  const user  = useUser();

  // }, [mongoDBnUser]);
  useEffect(() => {
    if (user && !mongoDBnUser) {
    const   userEmail = user?.email ? user.email : ""
         fetch(`/api/users?email=${encodeURIComponent(userEmail)}`)
        .then((res) => res.json())
        .then((data) => setMongoDBnUser(data));
    }
  }, [user, mongoDBnUser, setMongoDBnUser]);
  console.log("SESSION_IN_USER_PROFILE_PAGE", mongoDBnUser)
  if (!user) {
    return <div>Please log in</div>;
  }

  if (!mongoDBnUser) {
    return <div>Loading...</div>;
  }

  // const session = await getServerSession(authOptions);
  // console.log("SESSION_IN_USER_PROFILE_PAGE", session)
  // if (!session || !session.user?.id) {
  //   redirect("/login");
  // }


  if (!mongoDBnUser) {
    return <div>Loading...</div>;
  }

  // const userId = session.user.id;

  // const user = await fetchUserById(userId);

  // if (!user) {
  //   // redirect("/login");
  //   console.log("User SESSION not found")
  // }
return <h1>/ PROFILE </h1>
  // return <ProfileComponent user={mongoDBnUser} />;
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

// function setLoading(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }
