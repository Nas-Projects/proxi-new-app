'use client';

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import  Footer  from '@/components/Footer'
// import '../styles/tailwind.css'
import 'focus-visible'
// import { NewHeader } from '../components/NewHeader'
import Navbar from "@/components/Navbar";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
// import supabase from '@/utils/supabase-browser';
// import { useState } from "react";
import FooterNew from "@/components/FooterNew";
// import { SessionProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@/utils/supabase/client';

const supabaseClient = createClient();
// import '../styles/globals.css';
// import { useEffect, useRef } from "react";

// function usePrevious(value) {
//   let ref = useRef()

//   useEffect(() => {
//     ref.current = value
//   }, [value])

//   return ref.current
// }

// import AuthProvider from './context/AuthProvider'
// // App.js or your root component
// import { UserProvider } from '../UserContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "PROXY",
//   description: "A WEB APP FOR THOSE THINGS YOU CANT BUY",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [supabaseClient] = useState(() => supabase);
  // let previousPathname = usePrevious(router.pathname)
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased !min-h-[100vh] `}>
      <SessionContextProvider supabaseClient={supabaseClient}>
         <Navbar />
        {children} 
      <FooterNew/>
      <Footer/>
     </SessionContextProvider>
      </body>
     
    </html>
  );
}
