
// import { ChevronRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import Link from 'next/link'
import BlurImage from './blur-image'


function AgentsList({agents}) {

  return (
    <ul role="list" className="p-6 bg-[#e91e6326]  min-[800px]:bg-black min-[800px]:p-12 text-white divide-y divide-gray-100  md:grid md:grid-cols-2 lg:grid-cols-3 pb-24">
      {agents.map((person) => (
        <AgentListNewCard {...person} key={person.email}/>

        // <li key={person.email} className="relative py-5 hover:bg-gray-100">
        //   <Link href={clsx(`agents/${person._id}`)} className="block hover:bg-gray-50">
        //   <div className="pl-6 px-4 sm:px-6 lg:px-8">
        //     <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
        //       <div className="flex min-w-0 gap-x-4">
        //         <img alt="" src={person.imageUrl} className="h-14 w-14 flex-none rounded-full bg-gray-50" />
        //         <div className="min-w-0 flex-auto">
        //           <p className="text-xl text-left font-semibold leading-6 text-gray-900 ">
        //             <a href={person.href}>
        //               <span className="absolute inset-x-0 -top-px bottom-0 " />
        //               {person.name}
        //             </a>
        //           </p>
        //           <p className="-mt-[2.5px] flex text-lg text-gray-500">
        //             <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
        //               {person.email}
        //             </a>
        //             <ul role="list" className="mt-6 flex justify-center gap-x-6">
        //             {
        //               person?.socials && person.socials.map((social) => (
        //                 <li key={social._key}>
        //                   <a href={social.url} className="text-gray-400 hover:text-gray-300">
        //                     <span className="sr-only">{social.name}</span>
        //                   </a>
        //                 </li>
        //               ))
        //             }
        //           </ul>
        //           </p>
        //         </div>
        //       </div>
        //       <div className="flex shrink-0 items-center gap-x-4">
        //         <div className="hidden sm:flex sm:flex-col sm:items-end">
        //           <p className="text-lg leading-6 text-gray-900">{person.role}</p>
        //           {person.lastSeen ? (
        //             <p className="mt-1 text-md  mdtext-sm leading-5 text-gray-500">
        //               Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
        //             </p>
        //           ) : (
        //             <div className="mt-1 flex items-center gap-x-1.5">
        //               <div className="flex-none rounded-full bg-emerald-500/20 p-1">
        //                 <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        //               </div>
        //               <p className="text-md  mdtext-sm leading-5 text-gray-500">Online</p>
        //             </div>
        //           )}
        //         </div>
        //         <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
        //       </div>
        //     </div>
        //   </div>
        //   </Link>
        // </li>
      ))}
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow shadow-lg mx-4 my-4 transition-transform duration-300 hover:scale-105">
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt=""
            />
            <h3 className="mt-6 font-medium text-gray-900 text-lg">
              Jane Sakande
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-lg">In training</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                Onboarding
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="!bg-black -mt-px flex divide-x divide-[#f5f3f6a3] !text-white">
              <div className="flex w-0 flex-1">
                <a
                  href="mailto:janecooper@proxyre.io"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-200"
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href="tel:+1-202-555-0170"
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow shadow-lg m-4 transition-transform duration-300 hover:scale-105" >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full transition-transform duration-300 hover:scale-105"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt=""
            />
            <h3 className="mt-6 font-medium text-gray-900 text-lg">
              Cody Fisher
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-lg">Real Estate Agent</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Licensing
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="!bg-black -mt-px flex divide-x divide-[#f5f3f6a3] !text-white">
              <div className="flex w-0 flex-1">
                <a
                  href="mailto:codyfisher@proxyre.io"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-200"
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                  </svg>
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href="tel:+1-202-555-0114"
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
    </ul>
  )
}


export default AgentsList



export const AgentListNewCard = (agent) => {
  return   <li key={agent.email} className="max-[800px]:m-10 col-span-1 flex flex-col divide-y divide-slate-custom rounded-xl  lg:rounded-lg bg-white text-center
  shadow  shadow-lg hover:shadow-2xl m-4 transition-transform duration-300 hover:scale-105">
    <Link href={clsx(`agents/${agent._id}`)}>
      <div className="flex flex-1 flex-col p-8">
      <BlurImage alt={`${agent.name}-image`}
                 src={agent.imageUrl} className="mx-auto h-32 w-32 flex-shrink-0 rounded-full transition-transform duration-300 hover:scale-105" 
                 height={300} 
                 width={300}
                 priority="primary"
                 />
        <h3 className="mt-6 font-medium text-gray-900 text-xl">
        {agent.name}
        </h3>
    <dl className="mt-1 flex flex-grow flex-col justify-between">
      <dt className="sr-only">Title</dt>
      <dd className="text-gray-500 text-lg">{agent.userRole}</dd>
      <dt className="sr-only">Role</dt>
      <dd className="mt-3">
        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-md  md:text-md  mdtext-sm  font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          Verified
        </span>
      </dd>
    </dl>
  </div>
  <div>
    <div className="bg-[#eeeeee] text-[#333]  min-[800px]:!bg-black  flex divide-x divide-[#f5f3f6a3] !text-white">
      <div className="flex w-0 flex-1 md:px-3 lg:px-2 xl:px-8">
        <a
          href="mailto:janecooper@proxyre.io"
          className="text-gray-500  min-[800px]:text-gray-400 relative lg:-mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 md:text-lg font-semibold text-gray-300/80"
        >
          <svg
            className="h-6 w-6 text-[#333]  min-[800px]:text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
          </svg>
          {agent.email}
        </a>
      </div>
      <div className="-ml-px flex w-0 flex-1">
        <a
          href="tel:+1-202-555-0170"
          className="text-gray-500  min-[800px]:text-gray-40 relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-lg font-semibold text-gray-200"
        >
          <svg
            className="h-5 w-5 text-gray-500  min-[800px]:text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              clipRule="evenodd"
            />
          </svg>
          Call
        </a>
      </div>
    </div>
  </div>
    </Link>
  
</li>
}