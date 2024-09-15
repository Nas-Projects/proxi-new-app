import Link from 'next/link'

export const Comments = () => {
  return (
    <section class="bg-white py-8 dark:bg-gray-900 lg:py-16">
      <div class="mx-auto max-w-2xl px-4">
        <div class="mb-6 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
            Discussion (20)
          </h2>
        </div>
        <form class="mb-6">
          <div class="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white py-2 px-4 dark:border-gray-700 dark:bg-gray-800">
            <label for="comment" class="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              class="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 inline-flex items-center rounded-lg py-2.5 px-4 text-center text-xs font-medium text-white focus:ring-4"
          >
            Post comment
          </button>
        </form>
        <article class="mb-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900">
          <footer class="mb-2 flex items-center justify-between">
            <div class="flex items-center">
              <p class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                <img
                  class="mr-2 h-6 w-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              class="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <span class="sr-only">Comment settings</span>
            </button>

            <div
              id="dropdownComment1"
              class="z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
          <div class="mt-4 flex items-center space-x-4">
            <button
              type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>
        <article class="mb-6 ml-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900 lg:ml-12">
          <footer class="mb-2 flex items-center justify-between">
            <div class="flex items-center">
              <p class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                <img
                  class="mr-2 h-6 w-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Jese Leos"
                />
                Jese Leos
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-02-12" title="February 12th, 2022">
                  Feb. 12, 2022
                </time>
              </p>
            </div>
            <button
              id="dropdownComment2Button"
              data-dropdown-toggle="dropdownComment2"
              class="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <span class="sr-only">Comment settings</span>
            </button>

            <div
              id="dropdownComment2"
              class="z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            Much appreciated! Glad you liked it ☺️
          </p>
          <div class="mt-4 flex items-center space-x-4">
            <button
              type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>
        <article class="mb-6 border-t border-gray-200 bg-white p-6 text-base dark:border-gray-700 dark:bg-gray-900">
          <footer class="mb-2 flex items-center justify-between">
            <div class="flex items-center">
              <p class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                <img
                  class="mr-2 h-6 w-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie Green"
                />
                Bonnie Green
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-03-12" title="March 12th, 2022">
                  Mar. 12, 2022
                </time>
              </p>
            </div>
            <button
              id="dropdownComment3Button"
              data-dropdown-toggle="dropdownComment3"
              class="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
              <span class="sr-only">Comment settings</span>
            </button>

            <div
              id="dropdownComment3"
              class="z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            The article covers the essentials, challenges, myths and stages the
            UX designer should consider while creating the design strategy.
          </p>
          <div class="mt-4 flex items-center space-x-4">
            <button
              type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>
        <article class="border-t border-gray-200 bg-white p-6 text-base dark:border-gray-700 dark:bg-gray-900">
          <footer class="mb-2 flex items-center justify-between">
            <div class="flex items-center">
              <p class="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                <img
                  class="mr-2 h-6 w-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  alt="Helene Engels"
                />
                Helene Engels
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <time pubdate datetime="2022-06-23" title="June 23rd, 2022">
                  Jun. 23, 2022
                </time>
              </p>
            </div>
            <button
              id="dropdownComment4Button"
              data-dropdown-toggle="dropdownComment4"
              class="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
              </svg>
            </button>

            <div
              id="dropdownComment4"
              class="z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
            >
              <ul
                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
          <p class="text-gray-500 dark:text-gray-400">
            Thanks for sharing this. I do came from the Backend development and
            explored some of the tools to design my Side Projects.
          </p>
          <div class="mt-4 flex items-center space-x-4">
            <button
              type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mr-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              Reply
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}
