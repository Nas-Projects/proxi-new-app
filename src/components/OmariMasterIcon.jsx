import clsx from "clsx"
import Link from "next/link"

export const OmariMasterIcon = ({classN}) => {
  return (
    <figcaption className={clsx(`${classN && classN} "relative mx-4 mt-6 mb-12 sm:mt-10 flex  max-w-[300px] gap-x-6 rounded-md bg-gray-50/40 py-2 px-2 hover:bg-black  dark:bg-white`)}>
      <img
        src="/omariIcon.jpg "
        alt=""
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
      />
      <div>
        <div id="master-icon" className="relative inline-flex">
          <div class="text-lg font-semibold text-gray-800">
           Omari Hills{' '}
          </div>

          <div class="mt-1 text-base font-semibold text-gray-800">
            <span id="verified" classNamwe="inline-flex ">
              <svg
                class="mt- mx-2 mr-1.5 h-5 w-5 flex-shrink-0 text-blue-400"
                x-description="Heroicon name: mini/check-circle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="text-left text-md leading-6 text-gray-600">
          PROXY CEO & TRAINER
        </div>
      </div>
    </figcaption>
  )
}
export const OmariAvatar = () => {
  return (
    <Link href="/about" className="relative mr-6 inline-flex  w-full min-w-[4em] lg:max-w-[300px] gap-x-6 rounded-md bg-[#383c42] py-2 px-2 hover:bg-black">
      <img
        src="/omariIcon.jpg "
        alt=""
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
      />
      <div className="lg:-mt-6">
        <div id="master-icon" className="relative inline-flex">
          <div class="text-base font-semibold text-gray-200">
           Omari Hills{' '}
          </div>

          <div class="mt-1 text-base font-semibold text-gray-800">
            <span id="verified" classNamwe="inline-flex ">
              <svg
                class="mt- mx-2 mr-1.5 h-5 w-5 flex-shrink-0 text-blue-400"
                x-description="Heroicon name: mini/check-circle"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div class="text-left text-sm leading-6 text-gray-300">
          Fitness Pro
        </div>
      </div>
    </Link>
  )
}


export const MasterVideoIcon = () => {
  return (
    <figcaption class="z-40 flex items-center space-x-4">
      <img
        src="/sandraAboutLanding.jpeg "
        alt=""
        class="h-14 w-14 flex-none rounded-full object-cover"
        decoding="async"
      />

      <div class="flex-auto">
        <div class="text-base font-semibold text-slate-900 ">
          {/* <a href="https://" tabindex="0"> */}
          <div id="name-verified" className="inline-flex">
            <span class="absolute inset-0 flex max-w-[200px] "></span>Master
            Omari
            <Verified />
          </div>
          {/* </a> */}
        </div>
        <div class="mt-0.5 text-slate-600 md:-mt-1 ">545k Subscribers</div>
      </div>
    </figcaption>

  )
}

const Verified = () => {
  return (
    <div class="mt-1 text-base font-semibold text-gray-800">
      <span id="verified" classNamwe="inline-flex ">
        <svg
          class="mt- mx-2 mr-1.5 h-5 w-5 flex-shrink-0 text-blue-400"
          x-description="Heroicon name: mini/check-circle"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  )
}
