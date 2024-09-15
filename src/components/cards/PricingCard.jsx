// import { FadeIn } from '../FadeIn';
// import { useState, useEffect } from 'react';
// import { PersonalIcon, CheckIcon, LotsOfContentIcon, DesktopIcon, LifetimeIcon } from '../icons';
// import Link from 'next/link';

// const PricingCard = ({ plan, session }) => {
//   const isOwned = session?.user?.plan === plan.title;

//   const [theme, setTheme] = useState({
//     backgroundColor: 'bg-white', // default
//     textColor: 'text-black',
//     buttonColor: 'bg-gray-500',
//     icon: PersonalIcon,
//   });

//   useEffect(() => {
//     if (plan?.title) {
//       const { backgroundColor, textColor, buttonColor, icon } = getCardTheme(plan.title);
//       setTheme({ backgroundColor, textColor, buttonColor, icon });
//     }
//   }, [plan?.title]);

//   return (
//     <FadeIn>
//       <div className={`relative z-20 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl ${theme.backgroundColor}`}>
//         <div className="absolute -top-72 bottom-[40%] left-1/2 -ml-[55vw] w-[110vw] text-slate-600/10 lg:hidden">
//           {theme.icon}
//         </div>
//         <div className={`relative bg-white p-5 py-10 sm:rounded-3xl sm:px-10 ${theme.backgroundColor}`}>
//           <div className="flex">
//             <svg className="h-14 w-14 flex-none" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0EA5E9" strokeWidth="1.5">
//               <path d="M28 33.75c-4.388 0-8.36 2.385-10.627 5.636-1.006 1.443-.428 3.372 1.131 4.187C21.326 45.048 24.771 46 28 46c3.23 0 6.674-.952 9.496-2.427 1.559-.815 2.137-2.744 1.13-4.187C36.36 36.136 32.389 33.75 28 33.75Z" fill="#535353" />
//               <circle cx={28} cy={24} r="6.25" fill="#535353" />
//               <path d="M44.002 38A19.912 19.912 0 0 0 48 26c0-11.046-8.954-20-20-20S8 14.954 8 26c0 4.502 1.488 8.657 3.998 12" strokeLinecap="round" />
//             </svg>
//             <div className="ml-4">
//               <h2 className={`text-base font-semibold leading-7 ${theme.textColor}`}>{plan.title}</h2>
//               <p className={`text-sm leading-6 ${theme.textColor}`}>{plan.description}</p>
//             </div>
//           </div>
//           <div className="relative -mx-5 mt-8 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl">
//             <div className="relative flex flex-col px-5 py-8 sm:rounded-2xl">
//               <p className="flex items-center justify-center">
//                 <span className={`text-[2.5rem] leading-none ${theme.textColor}`}>${plan.price}</span>
//                 <span className="ml-3 text-sm">
//                   <span className={`font-semibold ${theme.textColor}`}>{plan.paymentMode}</span>
//                   <br />
//                   <span className="text-slate-500">plus local taxes</span>
//                 </span>
//               </p>
//               <p className="order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-500 sm:space-x-2">
//                 {plan.details && plan.details.map((detail, index) => (
//                   <span key={index} className="hidden sm:inline">{detail}</span>
//                 ))}
//                 <span className="sm:hidden">Includes lifetime access and free updates.</span>
//               </p>
//               <div className={`mt-6 flex justify-center rounded-lg px-3 py-2 text-sm font-semibold ${theme.textColor} ring-1 ring-slate-900/10`}>
//                 <CheckIcon />
//                 {isOwned ? "You already own this" : "Suggested Plan"}
//               </div>
//             </div>
//           </div>
//           {/* Additional features or button logic */}
//         </div>
//       </div>
//     </FadeIn>
//   );
// };

// const getCardTheme = (planTitle) => {
//   switch (planTitle) {
//     case "Personal":
//       return {
//         backgroundColor: "bg-white",
//         textColor: "text-slate-900",
//         buttonColor: "bg-slate-600 hover:bg-slate-500",
//         icon: <PersonalIcon />
//       };
//     case "Teams":
//       return {
//         backgroundColor: "bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]",
//         textColor: "text-white",
//         buttonColor: "bg-blue-600 hover:bg-blue-500",
//         icon: <LotsOfContentIcon />
//       };
//     case "Elite":
//       return {
//         backgroundColor: "bg-black",
//         textColor: "text-white",
//         buttonColor: "bg-yellow-600 hover:bg-yellow-500",
//         icon: <DesktopIcon />
//       };
//     default:
//       return {
//         backgroundColor: "bg-gray-100",
//         textColor: "text-slate-900",
//         buttonColor: "bg-gray-600 hover:bg-gray-500",
//         icon: <LifetimeIcon />
//       };
//   }
// };

// export default PricingCard;


import { FadeIn } from '../FadeIn';
import { useState, useEffect } from 'react';
import { PersonalIcon, CheckIcon, LotsOfContentIcon, DesktopIcon, LifetimeIcon } from '../icons';
import Link from 'next/link';
import clsx from 'clsx';

const PricingCard = ({ plan, session }) => {

  const isOwned = session?.user?.plan === plan.type;
console.log("PLAN", plan)

  const [theme, setTheme] = useState({
    backgroundColor: 'bg-white', // default
    backgroundColor2: "bg-slate-700/25",
    backgroundColor3: "bg-bg-slate-900",
    textColor: 'text-black',
    buttonTextColor: 'text-white',
    buttonColor: 'bg-gray-500',
    icon: PersonalIcon,
  });

  useEffect(() => {
    if (plan?.title) {
      const { backgroundColor, backgroundColor2, backgroundColor3, textColor, buttonColor,buttonTextColor, icon } = getCardTheme(plan.title);
      setTheme({ backgroundColor, backgroundColor2, backgroundColor3, buttonTextColor, textColor, buttonColor, icon });
    }
  }, [plan.title]);


  return (
    <FadeIn>
         <div className={clsx(`relative z-20 -mx-4 shadow-lg sm:mx-0  rounded-2xl  ${theme.backgroundColor}`)}>
    {/* <div className={`relative z-20 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl ${backgroundColor}`}> */}
        {/* <div className="absolute -top-72 bottom-[40%] left-1/2 -ml-[55vw] w-[110vw] text-slate-600/10 lg:hidden">
          {theme.icon}
        </div> */}
        <div className={`relative z-20 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0  rounded-2xl `}>
          <div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" />
          </div>
          <div className={`relative px-4 sm:p-5 rounded-xl py-10  sm:px-10 ${theme.backgroundColor}`}>
            <div className="flex">
              <svg className="h-14 w-14 flex-none" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0EA5E9" strokeWidth="1.5">
                <path d="M28 33.75c-4.388 0-8.36 2.385-10.627 5.636-1.006 1.443-.428 3.372 1.131 4.187C21.326 45.048 24.771 46 28 46c3.23 0 6.674-.952 9.496-2.427 1.559-.815 2.137-2.744 1.13-4.187C36.36 36.136 32.389 33.75 28 33.75Z" fill="#535353" />
                <circle cx={28} cy={24} r="6.25" fill="#535353" />
                <path d="M44.002 38A19.912 19.912 0 0 0 48 26c0-11.046-8.954-20-20-20S8 14.954 8 26c0 4.502 1.488 8.657 3.998 12" strokeLinecap="round" />
              </svg>
              <div className="ml-4">
                <h2 className={`text-base font-semibold leading-7 py-2 ${theme.textColor}`}>{plan.title}</h2>
                <p className={`text-sm leading-6 py-2 ${theme.textColor}`}>{plan.description}</p>
              </div>
            </div>
            <div className={clsx(theme.backgroundColor2, "relative -mx-5 mt-8 ring-1 ring-slate-900/5 sm:mx-0 sm:rounded-2xl")}>
              <div className="relative flex flex-col  px-5 py-8 sm:rounded-2xl">
                <p className="flex items-center justify-center">
                  <span className={`text-[2.5rem] leading-none ${theme.textColor}`}>${plan.price}</span>
                  <span className="ml-3 text-sm">
                    <span className={`font-semibold ${theme.textColor}`}>{plan.paymentMode}</span>
                    <br />
                    <span className="text-slate-500">plus local taxes</span>
                  </span>
                </p>
                <p className="order-last -mx-1 mt-4 flex justify-center text-sm leading-6 text-slate-500 sm:space-x-2">
                  {plan.details && plan.details.map((detail, index) => (
                    <span key={index} className="hidden sm:inline">{detail}</span>
                  ))}
                  <span className="sm:hidden">Includes lifetime access and free updates.</span>
                </p>
                <Link   href={`/subscription/${plan.title.toLowerCase()}` } 
                className={`mt-6 flex justify-center rounded-lg px-3 py-4 text-sm font-semibold ${theme.buttonColor} ring-1 ring-slate-900/10`}>
                  <CheckIcon session={session}/>
                 <h3  className={` ${theme.buttonTextColor}`}>{isOwned ? "You already own this" : "Suggested Plan"}</h3> 
                </Link>
              </div>
            </div>
            <h3 className="sr-only">Plan features</h3>
            <ul className="mt-8 space-y-8 text-sm leading-6 text-slate-700">
              {plan.features?.map((feature, index) => (
                <li className="flex" key={index}>
                  <LotsOfContentIcon />
                  <p className="ml-6">
                    <strong className={`font-semibold ${theme.textColor}`}>{feature.name}</strong> {feature.description}
                  </p>
                </li>
              ))}
              <li className="flex">
                <DesktopIcon />
                <p className={`ml-6 ${theme.textColor}`}>
                  <strong className="font-semibold">Cross-platform Access</strong> — access on all devices
                </p>
              </li>
              {/* <li className="flex">
                <LifetimeIcon />
                <p className={`ml-6 ${theme.textColor}`}>
                  <strong className="font-semibold">Lifetime Access</strong> — get instant access to all content.
                </p>
              </li> */}
            </ul>
            {!isOwned && (
              <Link
                className={clsx(`inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 ${buttonColor} mt-6 w-full`)}
                href="/subscription"
              >
                <span>Get all-access for your gym bodies</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const getCardTheme = (planType) => {
  switch (planType) {
    case "Fit lifestyle":
      return {
        backgroundColor: "bg-white border-black",
        backgroundColor2:"bg-slate-700/25",
        backgroundColor3:"bg-bg-slate-900",
        textColor: "text-slate-900",
        buttonColor: "bg-slate-600 hover:!bg-black",
        buttonTextColor: "text-white",
        icon: <PersonalIcon />
      };
    case "PROXY TOGETHER":
      return {
        backgroundColor: "bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)] border",
        backgroundColor2:"bg-slate-700/25",
        backgroundColor3:"bg-bg-slate-900",
        textColor: "!text-white",
        buttonColor: "bg-blue-600 hover:!bg-blue-500",
        buttonTextColor: "text-white",
        icon: <LotsOfContentIcon />
      };
    case "PROXY PREP":
      return {
        backgroundColor: "bg-black border",
        backgroundColor2:"bg-slate-700/25",
        backgroundColor3:"bg-bg-slate-900",
        textColor: "text-white",
        buttonColor: "bg-yellow-600 hover:bg-yellow-500 !text-black",
        buttonTextColor: "text-black",
        icon: <DesktopIcon />
      };
    default:
      return {
        backgroundColor: "bg-gray-100",
        textColor: "text-slate-900",
        buttonColor: "hover:bg-gray-600 bg-black",
        buttonTextColor: "text-white",
        icon: <LifetimeIcon />
      };
  }
};

export default PricingCard;


