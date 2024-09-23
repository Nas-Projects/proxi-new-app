'use client'

import Link from "next/link";
import { useEffect } from "react";

const Messages = () =>{
  const decodedUrl = (encodedUrl) => {
    return decodeURIComponent(encodedUrl);
  };

  useEffect(() => {
    // Ensure the code only runs in the browser
    // const images = document.querySelectorAll('img');
    // const urls = Array.from(images).map(img => img.getAttribute('src') || img.srcSet.split(', ')[0]);

    // Optional: You can log or handle the URLs here
  //   console.log(urls);
    
  //   // You can also trigger the download here
  //   urls.forEach((url, index) => {
  //     const a = document.createElement('a');
  //     a.href = decodeURIComponent(url);
  //     a.download = `image-${index}.jpg`;
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   });

  }, []); // Runs once on component mount

console.log(decodedUrl);
    return <div className="w-full mx-auto h-screen flex overflow-hidden bg-black">
    <div className="rounded-[16px] bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 w-11/12 sm:w-[581px] h-[160px] sm:h-[80px] p-0.5 absolute z-10 bottom-10 left-0 right-0 mx-auto">
      <div className="rounded-[14px] w-full h-full bg-[#111111] flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-3 sm:space-y-0 px-5">
        <p className="text-white text-[13px] font-mono w-[304px] h-[40px] flex items-center justify-center p-3">
          Get started with MongoDB Atlas and Vercel instantly.{" "}
          <button className="contents underline text-blue-400 font-bold">
            Dismiss →
          </button>
        </p>
        <Link 
          className="text-white text-[13px] font-mono bg-black border border-[#333333] hover:border-white transition-all rounded-md w-[220px] h-[40px] flex items-center justify-center whitespace-nowrap"
          href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fmongodb-starter&project-name=mongodb-nextjs&repo-name=mongodb-nextjs&demo-title=MongoDB%20Developer%20Directory&demo-description=Log%20in%20with%20GitHub%20to%20create%20a%20directory%20of%20contacts.&demo-url=https%3A%2F%2Fmongodb.vercel.app%2F&demo-image=https%3A%2F%2Fmongodb.vercel.app%2Fog.png&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH&env=NEXTAUTH_SECRET&envDescription=Generate%20one%20at%20https%3A%2F%2Fgenerate-secret.now.sh%2F32&envLink=https://next-auth.js.org/deployment#vercel"
          target="_blank"
          rel="noreferrer"
        >
          Clone &amp; Deploy
       </Link>
      </div>
    </div>
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div className="flex-1 relative z-0 flex overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
          <nav
            className="absolute right-0 w-full flex items-center justify-between md:justify-end px-4 h-16"
            aria-label="Navbar"
          >
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button className="bg-black hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all">
              Log in with GitHub
            </button>
          </nav>
          <div className="min-h-screen pb-20">
            <div>
              <div
                className="h-48 w-full lg:h-64 
      bg-gradient-to-r from-green-200 via-green-300 to-blue-500"
              />
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="relative group h-24 w-24 rounded-full overflow-hidden sm:h-32 sm:w-32">
                  <img
                    alt="Ahmad Awais ⚡️"
                    srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F960133%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F960133%3Fv%3D4&w=640&q=75 2x")}
                    src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F960133%3Fv%3D4&w=640&q=75")}
                    width={300}
                    height={300}
                    decoding="async"
                    data-nimg={1}
                    className="undefined transition-all grayscale-0 blur-0 scale-100"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="flex min-w-0 flex-1 items-center space-x-2">
                    <h1 className="text-2xl font-semibold text-white truncate">
                      Ahmad Awais ⚡️
                    </h1>
                    <svg
                      className="w-6 h-6 text-[#0070F3]"
                      viewBox="0 0 20 20"
                      fill="currentColor "
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <Link 
                      href="https://github.com/ahmadawais"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center px-4 py-2 border border-gray-800 hover:border-white shadow-sm text-sm font-medium rounded-md text-white font-mono bg-black focus:outline-none focus:ring-0 transition-all"
                    >
                      <svg
                        className="mr-3 h-5 w-5 text-white"
                        fill="currentColor"
                        height={24}
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>View GitHub Profile</span>
                   </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-2 2xl:mt-5">
              <div className="border-b border-gray-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button
                      className="border-white text-white
                whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono"
                    >
                      Profile
                    </button>
                    <button
                      disabled=""
                      className="border-transparent text-gray-400 cursor-not-allowed
                whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono"
                    >
                      Work History
                    </button>
                    <button
                      disabled=""
                      className="border-transparent text-gray-400 cursor-not-allowed
                whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm font-mono"
                    >
                      Contact
                    </button>
                  </nav>
                </div>
              </div>
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
              <h2 className="font-semibold font-mono text-2xl text-white">Bio</h2>
              <article className="mt-3 max-w-2xl text-sm tracking-wider leading-6 text-white font-mono prose prose-headings:text-white prose-a:text-white">
                <p>
                  Ahmad Awais is an award-winning open-source engineer,​ Vice
                  President of Developer Relations at RapidAPI, Google Developers
                  Expert ​Dev Advocate, Node.js Community Committee Outreach Lead,
                  BGB Member Linux Foundation &amp; OpenAPI Initiative, WordPress
                  Core​ Dev, and ex VP ​of ​Engineering​​ at WGA. He has authored
                  various open-source software tools used by millions of
                  developers worldwide, like his Shades of Purple code-theme​ or
                  projects like the​ corona-cli. Awais contributed code to NASA&apos;s
                  Ingenuity Mars Helicopter mission.
                </p>
              </article>
            </div>
          </div>
        </main>
        <div className="hidden md:order-first h-screen md:flex md:flex-col">
          <aside className="flex-shrink-0 w-full bg-black sm:w-96 h-full overflow-scroll border-r border-gray-800">
            <div className="px-6 pt-6 pb-0 sticky top-0 bg-black z-20">
              <Link href="/" />
             <Link href="#">
                <div className="bg-dark-accent-1 hover:bg-dark-accent-2 transition-all rounded-2xl h-12 w-12 flex justify-center items-center">
                  <div className="relative flex items-center group">
                    <svg
                      className="text-white"
                      data-testid="geist-icon"
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                    </svg>
                  </div>
                </div>
             </Link>
              <p className="mt-8 text-2xl text-white font-bold">Directory</p>
              <p className="mt-2 text-sm text-dark-accent-5">
                Search directory of 1,445 developers
              </p>
              <form className="py-8 flex space-x-4" action="#">
                <div className="flex-1 min-w-0">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative shadow-sm border-0 border-b-dark-accent-2 rounded-none border-b-[1px] ">
                    <div className="absolute bg-black inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-dark-accent-3"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        shapeRendering="geometricPrecision"
                      >
                        <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z" />
                        <path d="M16 16l4.5 4.5" />
                      </svg>
                    </div>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      className="text-white placeholder:text-dark-accent-3 focus:ring-transparent border-none bg-black focus:border-transparent block w-full pl-10 sm:text-sm rounded-md"
                      placeholder="Search"
                      defaultValue=""
                    />
                  </div>
                </div>
              </form>
            </div>
            <nav
              className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden"
              aria-label="Directory"
            >
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>0</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/0xflotus" />
                  <Link href="#"> 
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="0xflotus"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F26602940%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F26602940%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F26602940%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              0xflotus
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @0xflotus
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>1</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/19h" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="19h"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F280212%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F280212%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F280212%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              19h
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @19h
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>a</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/ahmadawais" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Ahmad Awais ⚡️"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F960133%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F960133%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F960133%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Ahmad Awais ⚡️
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @ahmadawais
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/ahoward" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="ara.t.howard"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6094%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6094%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6094%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              ara.t.howard
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @ahoward
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/adityaoberai" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Aditya Oberai"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F31401437%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F31401437%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F31401437%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Aditya Oberai
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @adityaoberai
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/alphaolomi" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Alpha Olomi"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10551599%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10551599%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10551599%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Alpha Olomi
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @alphaolomi
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/coetry" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Allen Hai"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10926503%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10926503%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10926503%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Allen Hai
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @coetry
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/aditya12gusain" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Aditya Gusain"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F59219284%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F59219284%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F59219284%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Aditya Gusain
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @aditya12gusain
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/abdus" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Abdus"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F32123917%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F32123917%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F32123917%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Abdus
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @abdus
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/ahmadbilaldev" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Ahmad Bilal"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19692245%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19692245%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19692245%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Ahmad Bilal
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @ahmadbilaldev
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/anandrajaram21" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Anand Rajaram"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F48560219%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F48560219%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F48560219%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Anand Rajaram
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @anandrajaram21
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/ptgamr" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Anh Trinh"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1619740%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1619740%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1619740%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Anh Trinh
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @ptgamr
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/a-trost" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Alex Trost"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19617280%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19617280%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19617280%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Alex Trost
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @a-trost
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/fordnox" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Andrius Putna"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F398619%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F398619%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F398619%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Andrius Putna
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @fordnox
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>b</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/bcomnes" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Bret Comnes"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F166301%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F166301%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F166301%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Bret Comnes
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @bcomnes
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/okbel" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Bel"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1401559%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1401559%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1401559%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Bel
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @okbel
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Yakumwamba" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Brian Lemba"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F72974932%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F72974932%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F72974932%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Brian Lemba
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Yakumwamba
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/itbruno" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Bruno Rodrigues"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3206543%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3206543%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3206543%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Bruno Rodrigues
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @itbruno
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>c</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/catnose99" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="catnose"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F34590683%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F34590683%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F34590683%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              catnose
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @catnose99
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/codeisneverodd" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="codeisneverodd"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54318460%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54318460%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54318460%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              codeisneverodd
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @codeisneverodd
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Dev-CasperTheGhost" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Casper"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F53900565%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F53900565%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F53900565%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Casper
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Dev-CasperTheGhost
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/dav-is" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Connor Davis"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F11590024%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F11590024%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F11590024%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Connor Davis
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @dav-is
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/casprine" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Casprine Assempah"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F21961780%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F21961780%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F21961780%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Casprine Assempah
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @casprine
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>d</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/delacruz-dev" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Dani de la Cruz"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5173869%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5173869%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5173869%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Dani de la Cruz
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @delacruz-dev
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/DaniAkash" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Dani Akash"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6841445%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6841445%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6841445%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Dani Akash
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @DaniAkash
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Deep-Codes" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Deepankar"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F61158210%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F61158210%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F61158210%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Deepankar
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Deep-Codes
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/devXprite" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="DevXprite"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F80192140%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F80192140%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F80192140%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              DevXprite
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @devXprite
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>e</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/evilrabbit" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Evil Rabbit"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6880091%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6880091%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6880091%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Evil Rabbit
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @evilrabbit
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>f</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/fabriceyopa" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Fabrice Yopa"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4902424%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4902424%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4902424%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Fabrice Yopa
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @fabriceyopa
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/filipecosta90" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="filipe oliveira"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5832149%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5832149%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5832149%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              filipe oliveira
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @filipecosta90
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/fatihcandev" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Fatih"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54099904%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54099904%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54099904%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Fatih
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @fatihcandev
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/flpms" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Filipe M. Silva"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4911643%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4911643%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4911643%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Filipe M. Silva
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @flpms
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/frontsideair" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Fatih Altinok"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F868283%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F868283%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F868283%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Fatih Altinok
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @frontsideair
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>g</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/rauchg" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Guillermo Rauch"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13041%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13041%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13041%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Guillermo Rauch
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @rauchg
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/goncy" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Gonzalo Pozzo"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6494462%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6494462%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6494462%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Gonzalo Pozzo
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @goncy
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Schniz" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Gal Schlezinger"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2054772%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2054772%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2054772%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Gal Schlezinger
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Schniz
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>h</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/hswolff" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Harry Wolff"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F322576%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F322576%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F322576%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Harry Wolff
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @hswolff
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/xcc3641" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Hugo"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3639158%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3639158%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3639158%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Hugo
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @xcc3641
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Nutlope" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Hassan El Mghari"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63742054%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63742054%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63742054%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Hassan El Mghari
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Nutlope
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/henryjeff" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Henry Heffernan"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13322650%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13322650%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F13322650%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Henry Heffernan
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @henryjeff
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Harindulk" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Harindu Fonseka "
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F61319844%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F61319844%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F61319844%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Harindu Fonseka{" "}
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Harindulk
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>i</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/smakosh" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Ismail Ghallou "
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20082141%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20082141%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20082141%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Ismail Ghallou{" "}
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @smakosh
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/irsyadadl" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Irsyad A. Panjaitan"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44585532%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44585532%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44585532%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Irsyad A. Panjaitan
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @irsyadadl
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>j</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/jaredpalmer" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Jared Palmer"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4060187%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4060187%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F4060187%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Jared Palmer
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @jaredpalmer
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/codeSTACKr" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Jesse Hall"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F52665907%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F52665907%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F52665907%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Jesse Hall
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @codeSTACKr
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/SuttonJack" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Jack Sutton"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F92991945%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F92991945%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F92991945%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Jack Sutton
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @SuttonJack
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/badabam" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Jerry Erbs"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F157286%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F157286%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F157286%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Jerry Erbs
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @badabam
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/capaj" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Jiri Spac"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1305378%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1305378%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1305378%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Jiri Spac
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @capaj
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/JaviCeRodriguez" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Javier Rodriguez"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F68615684%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F68615684%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F68615684%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Javier Rodriguez
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @JaviCeRodriguez
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/JefferyHus" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Jeffery ThaGintoki"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3521144%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3521144%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3521144%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Jeffery ThaGintoki
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @JefferyHus
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/josecarneiro" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="José Carneiro"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F7128083%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F7128083%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F7128083%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              José Carneiro
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @josecarneiro
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/mathcodes" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Jon Christie"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17928947%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17928947%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17928947%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Jon Christie
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @mathcodes
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>k</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/kingRayhan" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="King Rayhan"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F7611746%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F7611746%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F7611746%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              King Rayhan
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @kingRayhan
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/kale-stew" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Kylie Stewart"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F30479228%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F30479228%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F30479228%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Kylie Stewart
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @kale-stew
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>

                  <li>
                    <Link href="/gillkyle" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Kyle Gill"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F21114044%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F21114044%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F21114044%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Kyle Gill
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @gillkyle
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>

                  <li>
                    <Link href="/krshkun" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Krish Gupta"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F91655303%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F91655303%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F91655303%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Krish Gupta
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @krshkun
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/krishaamer" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Kris Haamer"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54409%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54409%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54409%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Kris Haamer
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @krishaamer
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/srph" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Kier Borromeo"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5093058%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5093058%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5093058%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Kier Borromeo
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @srph
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>l</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/leerob" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Lee Robinson"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9113740%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9113740%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9113740%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Lee Robinson
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @leerob
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>m</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/midudev" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Miguel Ángel Durán"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1561955%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1561955%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1561955%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Miguel Ángel Durán
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @midudev
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/m1guelpf" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Miguel Piedrafita"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F23558090%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F23558090%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F23558090%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Miguel Piedrafita
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @m1guelpf
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/maggiepint" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Maggie Johnson-Pint"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6054610%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6054610%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6054610%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Maggie Johnson-Pint
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @maggiepint
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/m-abdelwahab" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Mahmoud Abdelwahab"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F27310414%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F27310414%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F27310414%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Mahmoud Abdelwahab
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @m-abdelwahab
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/mikeyhodl" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="mikey"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F49108305%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F49108305%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F49108305%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              mikey
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @mikeyhodl
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/MauricioRobayo" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Mauricio Robayo"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2121481%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2121481%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2121481%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Mauricio Robayo
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @MauricioRobayo
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/marceloavf" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Marcelo Formentão"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5435657%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5435657%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F5435657%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Marcelo Formentão
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @marceloavf
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/manishprivet" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Manish Kumar ⛄"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54291836%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54291836%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F54291836%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Manish Kumar ⛄
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @manishprivet
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/thatbeautifuldream" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Milind Mishra ⚛️"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28717686%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28717686%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28717686%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Milind Mishra ⚛️
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @thatbeautifuldream
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/marcellodesales" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Marcello DeSales"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F131457%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F131457%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F131457%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Marcello DeSales
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @marcellodesales
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>n</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/niloysikdar" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Niloy Sikdar"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F58071992%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F58071992%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F58071992%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Niloy Sikdar
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @niloysikdar
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>p</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/pratikderepatil" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Pratik Derepatil"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F103197193%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F103197193%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F103197193%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Pratik Derepatil
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @pratikderepatil
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/pontusab" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Pontus Abrahamsson"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F655158%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F655158%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F655158%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Pontus Abrahamsson
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @pontusab
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/messa" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Petr Messner"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F115487%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F115487%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F115487%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Petr Messner
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @messa
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/akellbl4" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Paul Mineev"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2330682%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2330682%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2330682%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Paul Mineev
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @akellbl4
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/pikokr" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Pariring"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F68010770%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F68010770%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F68010770%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Pariring
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @pikokr
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>r</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/Chanzhaoyu" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Redon"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F24789441%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F24789441%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F24789441%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Redon
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Chanzhaoyu
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Rychillie" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Rychillie"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F14102456%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F14102456%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F14102456%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Rychillie
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Rychillie
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/CodeDotJS" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Rishi Giri"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9411252%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9411252%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F9411252%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Rishi Giri
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @CodeDotJS
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/rjperes" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Ricardo Peres"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F159433%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F159433%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F159433%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Ricardo Peres
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @rjperes
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>s</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/sw-yx" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="swyx"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6764957%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6764957%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F6764957%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              swyx
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @sw-yx
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/Atinux" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Sébastien Chopin"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F904724%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F904724%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F904724%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Sébastien Chopin
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @Atinux
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/shuding" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Shu Ding"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3676859%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3676859%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F3676859%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Shu Ding
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @shuding
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/TheAlphamerc" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Sonu Sharma"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F37103237%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F37103237%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F37103237%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Sonu Sharma
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @TheAlphamerc
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/samselikoff" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Sam Selikoff"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2922250%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2922250%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F2922250%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Sam Selikoff
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @samselikoff
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/msaaddev" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Saad Irfan ⚡️"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44341551%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44341551%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44341551%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Saad Irfan ⚡️
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @msaaddev
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/geekysrm" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Soumya Ranjan Mohanty"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10224804%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10224804%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10224804%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Soumya Ranjan Mohanty
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @geekysrm
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/shakilkhan12" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Shakil Khan "
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10473411%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10473411%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10473411%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Shakil Khan{" "}
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @shakilkhan12
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/scidroid" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="SciDroid"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F67038775%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F67038775%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F67038775%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              SciDroid
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @scidroid
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/steven-tey" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Steven Tey"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28986134%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Steven Tey
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @steven-tey
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/svr8" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Shikhar Vaish"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10533612%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10533612%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F10533612%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Shikhar Vaish
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @svr8
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/suciptoid" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Sucipto"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1310895%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1310895%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1310895%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Sucipto
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @suciptoid
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>t</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/turhansel" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Turhan"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63788958%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63788958%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63788958%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Turhan
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @turhansel
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/tungv" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Tung Vu"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1922462%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1922462%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1922462%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Tung Vu
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @tungv
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>u</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/uwussimo" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="UwUssimo Robinson"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F91214940%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F91214940%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F91214940%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              UwUssimo Robinson
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @uwussimo
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>v</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/vit0rr" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="vitor"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F70543018%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F70543018%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F70543018%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              vitor
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @vit0rr
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>w</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/willnode" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Wildan M"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20214420%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20214420%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F20214420%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Wildan M
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @willnode
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>y</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/yezz123" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Yasser Tahiri"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F52716203%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F52716203%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F52716203%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Yasser Tahiri
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @yezz123
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                  <li>
                    <Link href="/promer94" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Yixuan Xu"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F15878786%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F15878786%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F15878786%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Yixuan Xu
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @promer94
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>z</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/zenorocha" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="Zeno Rocha"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F398893%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F398893%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F398893%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              Zeno Rocha
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @zenorocha
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-dark-accent-1 px-6 py-1 text-sm font-bold text-white uppercase">
                  <h3>し</h3>
                </div>
                <ul role="list" className="relative z-0 directory-divide-y">
                  <li>
                    <Link href="/lightsound" />
                   <Link href="#">
                      <div className="relative px-6 py-4 flex items-center space-x-3 focus-within:ring-0">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
                          <img
                            alt="しまぶー"
                            srcSet={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F8220973%3Fv%3D4&w=384&q=75 1x, https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F8220973%3Fv%3D4&w=640&q=75 2x")}
                            src={decodedUrl("https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F8220973%3Fv%3D4&w=640&q=75")}
                            width={300}
                            height={300}
                            decoding="async"
                            data-nimg={1}
                            className="undefined transition-all grayscale-0 blur-0 scale-100"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-white truncate">
                              しまぶー
                            </p>
                            <svg
                              className="w-4 h-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor "
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-sm text-dark-accent-5 truncate">
                            @lightsound
                          </p>
                        </div>
                      </div>
                   </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  </div>
  
}


export default Messages