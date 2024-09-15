// import connectDB from '@/config/database';
// import User from '@/models/User';

// import GoogleProvider from 'next-auth/providers/google';

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       authorization: {
//         params: {
//           prompt: 'consent',
//           access_type: 'offline',
//           response_type: 'code',
//         },
//       },
//     }),
//   ],
//   callbacks: {

//     // Invoked on successful signin
//     async signIn({ profile }) {
//       console.log("PROFILE: " + JSON.stringify(profile))
//       // 1. Connect to database
//       await connectDB();
//       // 2. Check if user exists
//       const userExists = await User.findOne({ email: profile.email });
//       // 3. If not, then add user to database
//       if (!userExists) {
//         console.log("USER DOESNT EXIST")
//         // Truncate user name if too long
//         const username = profile.name.slice(0, 20);

//         await User.create({
//           email: profile.email,
//           username,
//           image: profile.picture,
//         });
//       }
//       // 4. Return true to allow sign in
//       return true;
//     },
//     // Modifies the session object
//     async session({ session }) {
//       // 1. Get user from database
//       console.log("GET_SESSION_IN_AUTHOPTIONS", session)
//       const user = await User.findOne({ email: session.user.email });
//       console.log("GET_SESSION_IN_USER", user)
//       // 2. Assign the user id to the session
//       session.user.id = user._id.toString();
//       // console.log("SESSION in authOptions: " + session)
//       console.log("SESSION_USER: " + session?.user.email ? session.user.email : "No email")
//       console.log("SESSION_USER_ID: " + session?.user._id ? session.user._id : "No id")
//       console.log("SESSION_USER: " + session?.user.name )
//       // 3. return session
//       return session;
//     },
//   },
// };
