// src/app/profile/page.tsx
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import ProfileComponent from "@/components/ProfileComponent";
import { fetchUserById } from "@/lib/data";

export default async function PrivatePage() {
  const session = await getServerSession(authOptions);
  console.log("SESSION_IN_USER_PROFILE_PAGE", session)
  if (!session || !session.user?.id) {
    redirect("/login");
  }

  const userId = session.user.id;

  const user = await fetchUserById(userId);

  if (!user) {
    // redirect("/login");
    console.log("User SESSION not found")
  }

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