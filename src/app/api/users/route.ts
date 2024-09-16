

import { NextResponse, NextRequest } from 'next/server';
// import { getAllUsers, getUserCount, searchUser, updateUser, getMdxSource } from '@/lib/api/user';
import { getSession } from 'next-auth/react';
import User from "@/models/User";
import connectDB from '@/config/database';
// import { auth } from '@/lib/auth/[...nextauth]';
import { revalidatePath, unstable_noStore } from 'next/cache';

console.log("USERS_ROUTE APP/API/USERS");

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  try {
    await connectDB();

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ exists: true });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (err) {
    console.error('Error checking user existence:', err);
    return NextResponse.json({ error: 'Error checking user existence' }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const supabaseUser = await request.json();  // Parse the incoming request body

  try {
    await connectDB();  // Ensure the MongoDB connection is established

    const userMetadata = supabaseUser.user_metadata || {};  // Safely access user_metadata

    // Check if the user already exists in MongoDB
    let dbUser = await User.findOne({ email: supabaseUser.email });
    if (!dbUser) {
      // If user doesn't exist, create a new one
      dbUser = new User({
        name: `${userMetadata.first_name || ''} ${userMetadata.last_name || ''}`.trim(),
        email: supabaseUser.email,
        phone: userMetadata.phone || '',  // Use userMetadata phone or default to empty string
        username: supabaseUser.email.split('@')[0],  // Generate username from email if none is provided
        userRole: userMetadata.userRole || 'Enthusiast',  // App-specific user role
        role: supabaseUser.role || 'unauthenticated',  // Supabase authentication role
        realEstateLicense: userMetadata.license || null,  // License if applicable
        supabaseUserId: supabaseUser.id || null,  // Store Supabase user ID
        googleUserId: supabaseUser.googleUserId || undefined,  // Google user ID if available
      });
      console.log("SAVING_NEW_USER_TO_MONGO", dbUser);
      await dbUser.save();
    } else {
      // If the user exists, update only the fields that are provided (do not overwrite existing data)
      dbUser.name = `${userMetadata.first_name || dbUser.name.split(' ')[0]} ${userMetadata.last_name || dbUser.name.split(' ')[1] || ''}`.trim();
      dbUser.phone = userMetadata.phone || dbUser.phone;
      dbUser.userRole = userMetadata.userRole || dbUser.userRole;
      dbUser.realEstateLicense = userMetadata.license || dbUser.realEstateLicense;
      dbUser.supabaseUserId = supabaseUser.id || dbUser.supabaseUserId;
      
      // Only update googleUserId if it exists, otherwise keep the current one
      if (supabaseUser.googleUserId) {
        dbUser.googleUserId = supabaseUser.googleUserId;
      }
    
      dbUser.role = supabaseUser.role || dbUser.role;
    
      console.log("UPDATING_EXISTING_USER_IN_MONGO", dbUser);
      await dbUser.save();
    }
    

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Failed to sync user to MongoDB:', err);
    return NextResponse.json({ error: 'Failed to sync user to MongoDB' }, { status: 500 });
  }
};


// export const POST = async (req: Request) => {
//     const supabaseUser = await req.json();  // Parse the incoming request body
  
//     try {
//       await connectDB();  // Ensure the MongoDB connection is established
  
//       // Log the received Supabase user data for debugging
//       console.log("SUPABASE_USER_RECEIVED", supabaseUser);
  
//       const userMetadata = supabaseUser.user_metadata || {};  // Safely access user_metadata
  
//       // Check if the user already exists in MongoDB
//       let dbUser = await User.findOne({ email: supabaseUser.email });
  
//       if (!dbUser) {
//         // If user doesn't exist, create a new one
//         dbUser = new User({
//           name: `${userMetadata.first_name || ''} ${userMetadata.last_name || ''}`.trim(),
//           email: supabaseUser.email,
//           phone: userMetadata.phone || '',
//           userRole: supabaseUser.userRole || '',  // Use userRole to store app-specific roles
//           role: supabaseUser.role || 'unauthenticated', // Supabase role (e.g., 'authenticated', 'unauthenticated')
//           realEstateLicense: userMetadata.license || null, // License if applicable
//           supabaseUserId: supabaseUser.id, // Store Supabase user ID
//         });
//         console.log("SAVING_NEW_USER_TO_MONGO", dbUser);
//         await dbUser.save();
//       } else {
//         // If the user exists, update any missing fields or data changes
//         dbUser.name = `${userMetadata.first_name || dbUser.name} ${userMetadata.last_name || ''}`.trim();
//         dbUser.phone = userMetadata.phone || dbUser.phone;
//         dbUser.userRole = userMetadata.userRole || dbUser.userRole;
//         dbUser.realEstateLicense = userMetadata.license || dbUser.realEstateLicense;
//         dbUser.supabaseUserId = supabaseUser.id || dbUser.supabaseUserId;
//         dbUser.role = supabaseUser.role || dbUser.role;
  
//         await dbUser.save();
//         console.log("UPDATING_EXISTING_USER_IN_MONGO", dbUser);
//       }
  
//       return NextResponse.json({ success: true });
//     } catch (err) {
//       console.error('Failed to sync user to MongoDB:', err);
//       return NextResponse.json({ error: 'Failed to sync user to MongoDB' }, { status: 500 });
//     }
//   };
  
// // Handle GET requests
// // export async function GET(req: Request) {
// //   const { searchParams } = new URL(req.url);
// //   const query = searchParams.get('query');

// //   if (query) {
// //     try {
// //       const result = await searchUser(query);
// //       return NextResponse.json(result);
// //     } catch (e: any) {
// //       console.log(e);
// //       return NextResponse.json({ error: e.toString() }, { status: 500 });
// //     }
// //   } else {
// //     try {
// //       const results = await getAllUsers();
// //       const totalUsers = await getUserCount();
// //       revalidatePath('/admin/users/')
// //       return NextResponse.json({ results, totalUsers });
// //     } catch (error) {
// //       console.error("Failed to fetch users:", error);
// //       return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
// //     }
// //   }
// // }

// // Handle PUT requests
// export async function PUT(req: Request) {
//   const body = await req.json();
//   const { username, bio } = body;
//   console.log("3_APP_API_USER_UPDATE-handle: " + username, "Bio: " + bio);

//   // const session = await getSession({ req });
//   const session = await getSession();
//   console.log("3_APP_API_UPDATE With Session ?", "username-->", username, "SESSION--",session);

//   if (!session || session?.user?.username !== username) {
//     console.log("APP_API_UPDATE with NO SESSION or Unauthorized", session);
//     return NextResponse.json({ success: 'Unauthorized' }, { status: 401 });
//   }

//   try {
//     const result = await updateUser(username, bio);
//     if (result) {
//       console.log("APP_API_UPDATE_REVALIDATE", result);
//     }
//     const bioMdx = await getMdxSource(bio); // return bioMdx to optimistically show updated state
//     console.log("BIO_MDX", bioMdx);
//     unstable_noStore()
//     revalidatePath(`/${username}`);
//     return NextResponse.json(bioMdx, { status: 200 });
//   } catch (e: any) {
//     console.log(e);
//     return NextResponse.json({ error: e.toString() }, { status: 500 });
//   }
// }

// // Handle other methods (OPTIONS, POST, DELETE)
//    export function OPTIONS() {
//   return NextResponse.json({ message: 'Method OPTIONS Not Allowed' }, { status: 405 });
// }




