

// src/auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";
import { unstable_noStore } from "next/cache";

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
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }

      unstable_noStore();
      return session;
    },
    async jwt({ token, user }) {
      await connectDB();

      if (user) {
        token.id = user.id;
      }

      let dbUser = await User.findOne({ email: token.email });

      if (!dbUser) {
        dbUser = new User({
          name: token.name,
          email: token.email,
          image: token.picture,
          username: token.name?.split(" ").join("").toLowerCase(),
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
