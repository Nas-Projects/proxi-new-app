import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, EyeIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Fragment } from 'react'

export default function ViewersDropdown({ text, viewers }) {
  const solutions = [
    {
      name: 'Insights',
      description: 'Measure actions your users take',
      href: '##',
      icon: IconOne,
    },
    {
      name: 'Automations',
      description: 'Create your own targeted content',
      href: '##',
      icon: IconTwo,
    },
    {
      name: 'Reports',
      description: 'Keep track of your growth',
      href: '##',
      icon: IconThree,
    },
  ]

  return (
    <div className=" md:px- top-0 z-50  w-full max-w-sm">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button
              className={clsx(`
                    ${!open ? '' : 'text-opacity-90'}  ${
                open && 'min-w-[600px]' && 'hidden'
              } 
                    bg-gray-10 group inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-black hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`)}
            >
              <EyeIcon className={clsx('h-5 text-sky-500')} />
              {/* <span>{text}</span> */}
              {/* <ChevronDownIcon
                className={`${!open ? '' : 'text-opacity-70'}
                      ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              /> */}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="w-screen/2  z-10 mt-3 transform px-0 sm:px-0 lg:left-[20%] lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative flex bg-white ">
                    <Viewers />
                  </div>
                  {/* <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          See more
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div> */}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}

export const Viewers = () => {
  return (
    <>
      <section className="z-50 flex ">
        <header class=" space-y-4 bg-white xl:py-0"></header>
        <ul class="">
          <li x-for="project in projects">
            <a
              href="#"
              class="group flex bg-blue-500  p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-600 hover:shadow-md hover:ring-blue-500"
            >
              <dl class=" items-center sm:block">
                <div>
                  <dt class="sr-only">Title</dt>
                  <dd class="mb-2 font-semibold text-slate-100 group-hover:text-white">
                    People who watched this.
                  </dd>
                </div>

                <div class=" sm:mt-4 lg:mt-0 xl:mt-4">
                  <dt class="sr-only">Users</dt>
                  <dd
                    x-for="user in project.users"
                    class="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start  "
                  >
                    {/* <dd class="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start"> */}
                    <img
                      src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="group -mt-3 flex cursor-pointer items-center py-2 pl-2 pr-3 text-sm font-medium text-slate-100 shadow-sm group-hover:text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2"
                      >
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"></path>
                      </svg>
                      423 More
                    </div>
                  </dd>
                </div>
              </dl>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
