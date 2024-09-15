import Image from 'next/image'
import { Feedback } from '../Button'
import { PlayPauseButtons } from './PlayPauseButtons'
import { PlayPauseIcon } from './VideoController'
import { Menu, Transition } from '@headlessui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  EyeIcon,
} from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { MasterVideoIcon, ReikiMasterIcon } from '../OmariMasterIcon'
import ViewersDropdown from './ViewersDropdown'
// import { Feedback, FeedbackForm } from '@/components/Button'
export const VideoStats = ({ media, likes, addLikes, views, saveMedia }) => {
  return (
    <div id="VIEO_AND_INFO_WRAPPER" className="relative max-w-[710px]">
      {' '}
      <Metadata
        views={views}
        media={media}
        addLikes={addLikes}
        likes={likes}
        saveMedia={saveMedia}
      />
      {/* <MobileViewsDate likes={likes} addLikes={addLikes} views={views} /> */}
    </div>
  )
}

const Metadata = ({ media, likes, addLikes, views, saveMedia }) => {
  return (
    <div id="DESKTOP TOP DATA" className="width-full mt-4  md:mt-4 ">
      <div className="flex-block relative ">
        <div id="title">
          <h1 force-default-style="" className="video-watch-metadata-title">
            {media.title}
          </h1>
        </div>
        <div className=" max-w-[260px]">
          <dl class="mt-2 flex flex-wrap text-sm font-medium leading-6">
            <div class="xl:lef-[10px] absolute  top-0 right-0 hidden items-center space-x-1 sm:flex">
              <ViewersDropdown
                text={'People who watched'}
                viewers={'viewersArray'}
              />
              {/* <dd>223</dd> */}
            </div>
            <MobileMetada views={views} />

            <div className="md:hidden">
              <VideoMenu description={media.description} seemore />
            </div>
          </dl>{' '}
        </div>
      </div>

      <div id="USER-LIKE-SAHRE_DESKtOP" className=" max-w-[680px]">
        <div class="relative flex items-center justify-between pt-4 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200 md:-mt-4 lg:pt-8">
          <MasterVideoIcon />

          <div class="flex items-center">
            <button className="bg-play-pause hover:text-sky-00 -ml-10  rounded-md py-1.5 px-3 text-white shadow-md md:rounded-full">
              <span id="subscribe-text" className=" group-hover:text-sky-500">
                Subscribe
              </span>
            </button>
            <div class="flex items-center">
              <div class="hidden items-center md:flex">
                <ul class="flex items-center gap-x-8">
                  <li>
                    <Feedback likes={likes} addLikes={addLikes} />
                  </li>{' '}
                </ul>
              </div>
              <div class=" ml-6 flex hidden items-center items-center border-l border-slate-200 pl-4 dark:border-slate-800 md:flex">
                <span className="rounded-md  bg-gray-50 text-slate-600 shadow-md hover:text-sky-500 md:rounded-full">
                  <Save saveMedia={saveMedia} />
                </span>
                <a
                  href="#"
                  class="ml-0 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                >
                  <VideoMenu description={media.description} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 items-center md:hidden">
        <ul class="flex items-center gap-x-8">
          <li>
            <Feedback likes={likes} addLikes={addLikes} />
          </li>
          {/* <li>
            <Save saveMedia={saveMedia} />
          </li>{' '} */}
          <li>
            <Share saveMedia={saveMedia} />
          </li>{' '}
        </ul>
      </div>
      <Description description={media.description} views={views} />
    </div>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MobileMetada = ({ views, likes, addLikes, date }) => {
  return (
    <div
      id="VIEWS_MOBILE"
      className="inline-flex  leading-6 min-[600px]:hidden"
    >
      <div class="">
        <dd class="rounded px-1.5 ring-1 ring-slate-200 dark:ring-slate-700">
          {views}
        </dd>
      </div>
      <div class="ml-2">
        <dt class="sr-only">Views</dt>
        <dd className="leading-6"> Views</dd>
      </div>{' '}
      <div>
        <dt class="sr-only">Genre</dt>
        <dd class="flex items-center">
          <svg
            width="2"
            height="2"
            fill="currentColor"
            class="mx-2 text-slate-300"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          Feb 21
        </dd>
      </div>{' '}
      <div id="RUNTIME" className="max-[600px]:hidden">
        <dt class="sr-only">Runtime</dt>
        <dd class="flex items-center">
          <svg
            width="2"
            height="2"
            fill="currentColor"
            class="mx-2 text-slate-300"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          1h 46m
        </dd>
      </div>
    </div>
  )
}

const Save = ({ saveMedia }) => {
  return (
    <div className="mx-2 flex rounded-full  border border-slate-300 px-3 py-1 text-center ">
      Save{' '}
      <button
        onClick={saveMedia}
        type="button"
        aria-label="Add to favorites"
        className="justify-center text-center text-slate-400/70 group-hover:text-sky-500"
      >
        <svg width="24" height="24">
          <path
            d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  )
}
const Share = ({ saveMedia }) => {
  return (
    <div className="mx-2 flex rounded-full  border border-slate-300 px-3 py-1 text-center ">
      Share{' '}
      <button
        onClick={saveMedia}
        type="button"
        aria-label="Add to favorites"
        className=" justify-center text-center text-slate-400/70 group-hover:text-sky-500"
      >
        <svg width="24" height="24">
          <path
            d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  )
}

const Description = ({ description, views }) => {
  return (
    <div class="description-desktop  rounded-md bg-gray-50 px-2 py-1 text-slate-400 max-[600px]:hidden lg:-m-0">
      <div class="mt-2 w-full flex-none font-normal max-[400px]:hidden">
        <dt class="sr-only">DESCRIPTION</dt>
        <div id="META" className="inline-flex">
          <div class="dark:text-slate-200">
            <dd class="rounded px-1.5 text-slate-700 ring-1 ring-slate-200 dark:ring-slate-600">
              {views}
            </dd>
          </div>
          <div class="ml-2">
            <dt class="sr-only">Views</dt>
            <dd className="text-slate-600"> Views</dd>
          </div>
          <div>
            <dd
              id="REALSED_ DATE"
              className="flex items-center px-4 text-slate-500 "
            >
              1 Month ago
            </dd>
          </div>
        </div>
        <dd class="flex text-slate-600 ">{description}</dd>
        <dd class="flex text-slate-600 ">
          <p>
            <h2>See more</h2>
          </p>
        </dd>

        <div>{/* <VideoMenu description={description} seemore /> */}</div>
      </div>
    </div>
  )
}
const VideoMenu = ({ description, seemore }) => {
  return (
    <Menu
      as="div"
      className="right-0 z-50 mx-4 -mr-6 mt-[8px] justify-end lg:absolute xl:relative xl:top-auto xl:right-auto xl:self-center "
    >
      <div>
        <Menu.Button className="-mt-2  flex items-center rounded-full px-1 text-gray-500 hover:text-gray-600">
          {seemore ? (
            <span className="">...more</span>
          ) : (
            <div
              id="LG-VIDEO-MENU"
              className="hidden rounded-full bg-slate-100 px-2 py-2 md:flex"
            >
              <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50   mt-2 w-36 min-w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <h2
                  href="#"
                  className={classNames(
                    'block bg-gray-100 px-4 py-2 text-sm text-gray-900'
                  )}
                >
                  Episode #4
                </h2>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <h4
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'z-50 block px-4 py-2 text-sm'
                  )}
                >
                  {description}
                </h4>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Feb 2021 1h 46m
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
