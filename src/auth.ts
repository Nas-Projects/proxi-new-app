
// src/auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";
import { unstable_noStore } from "next/cache";

// Extend the session type with optional properties for user
declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
    };
  }
}

// Extend the JWT type with optional properties for token
declare module "next-auth/jwt" {
  interface JWT {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    username?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "your-secret-here",
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      await connectDB();

      if (token) {
        session.user.id = token.id || null; // Safely handle missing id
        session.user.name = token.name || null;
        session.user.email = token.email || null;
        session.user.image = token.picture || null;
        session.user.username = token.username || null;
      }

      unstable_noStore();
      return session;
    },
    async jwt({ token, user }) {
      await connectDB();

      if (user) {
        token.id = user.id || null;
      }

      let dbUser = await User.findOne({ email: token.email });

      if (!dbUser) {
        dbUser = new User({
          name: token.name || "Unknown User",
          email: token.email || "no-email@example.com",
          image: token.picture || "",
          username: token.name?.split(" ").join("").toLowerCase() || "anonymous",
        });

        await dbUser.save();
      }

      if (!dbUser.username) {
        dbUser.username = dbUser.name?.split(" ").join("").toLowerCase();
        await dbUser.save();
      }

      token.id = dbUser._id.toString();
      token.name = dbUser.name;
      token.email = dbUser.email;
      token.username = dbUser.username;
      token.picture = dbUser.image;

      unstable_noStore();
      return token;
    },
  },
};

export default NextAuth(authOptions);

// // src/auth.ts
// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import connectDB from "@/config/database";
// import User from "@/models/User";
// import { unstable_noStore } from "next/cache";

// export const authOptions: NextAuthOptions = {
//   secret: process.env.NEXTAUTH_SECRET || "your-secret-here",
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async session({ session, token }) {
//       await connectDB();

//       if (token) {
//         session.user.id = token.id;
//         session.user.name = token.name;
//         session.user.email = token.email;
//         session.user.image = token.picture;
//         session.user.username = token.username;
//       }

//       unstable_noStore();
//       return session;
//     },
//     async jwt({ token, user }) {
//       await connectDB();

//       if (user) {
//         token.id = user.id;
//       }

//       let dbUser = await User.findOne({ email: token.email });

//       if (!dbUser) {
//         dbUser = new User({
//           name: token.name,
//           email: token.email,
//           image: token.picture,
//           username: token.name?.split(" ").join("").toLowerCase(),
//         });

//         await dbUser.save();
//       }

//       if (!dbUser.username) {
//         dbUser.username = dbUser.name?.split(" ").join("").toLowerCase();
//         await dbUser.save();
//       }

//       token.id = dbUser._id.toString();
//       token.name = dbUser.name;
//       token.email = dbUser.email;
//       token.username = dbUser.username;
//       token.picture = dbUser.image;

//       unstable_noStore();
//       return token;
//     },
//   },
// };

// export default NextAuth(authOptions);
