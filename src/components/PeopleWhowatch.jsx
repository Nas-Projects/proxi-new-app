export const PeopleWatched = () => {
  return (
    <>
      <section className="flex ">
        <header class="z-50  space-y-4 bg-white xl:py-0"></header>
        <ul class="">
          <li x-for="project in projects">
            <a
              href="project.url"
              class="group flex  p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500"
            >
              <dl class=" items-center sm:block">
                <div>
                  <dt class="sr-only">Title</dt>
                  <dd class="font-semibold text-slate-100 group-hover:text-white">
                    People who watched this.
                  </dd>
                </div>

                <div class=" sm:mt-4 lg:mt-0 xl:mt-4">
                  <dt class="sr-only">Users</dt>
                  <dd
                    x-for="user in project.users"
                    class="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start"
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
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"
                      alt=""
                      class="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <div class="group -mt-3 flex cursor-pointer items-center py-2 pl-2 pr-3 text-sm font-medium text-slate-600 shadow-sm group-hover:text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2"
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
