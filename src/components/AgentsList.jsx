
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import Link from 'next/link'


function AgentsList({agents}) {

  return (
    <ul role="list" className="text-white divide-y divide-gray-100 bg-white md:grid md:grid-cols-2 pb-24">
      {agents.map((person) => (
        <li key={person.email} className="relative py-5 hover:bg-gray-100">
          <Link href={clsx(`agents/${person._id}`)} className="block hover:bg-gray-50">
          <div className="pl-6 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-4xl justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={person.imageUrl} className="h-14 w-14 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex-auto">
                  <p className="text-xl text-left font-semibold leading-6 text-gray-900 ">
                    <a href={person.href}>
                      <span className="absolute inset-x-0 -top-px bottom-0 " />
                      {person.name}
                    </a>
                  </p>
                  <p className="-mt-[2.5px] flex text-lg text-gray-500">
                    <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
                      {person.email}
                    </a>
                    <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    {
                      person?.socials && person.socials.map((social) => (
                        <li key={social._key}>
                          <a href={social.url} className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">{social.name}</span>
                          </a>
                        </li>
                      ))
                    }
                  </ul>
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-4">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )}
                </div>
                <ChevronRightIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
              </div>
            </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}


export default AgentsList