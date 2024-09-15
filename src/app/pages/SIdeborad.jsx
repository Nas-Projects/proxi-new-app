 const Progress = () => {
    return <main className="px-5 md:px-8 min-h-[calc(100vh-theme(height.header))]">
    <div className="max-w-container mx-auto">
      <div className="mt-12 mb-24 block space-y-4 md:flex md:space-x-12 md:space-y-0">
        <div className="flex flex-col space-y-4 items-start w-[240px]">
          <aside className="w-full md:w-sidebar md:min-w-sidebar md:sticky md:top-4 h-max pt-0 md:!w-auto">
            <div className="pt-0 mb-6">
              <button
                type="button"
                id="radix-:ra:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                className="border-none hover:bg-gray-100 hover:rounded-md w-56 !h-16 -ml-4 md:-ml-0 flex items-center border border-gray-200 rounded-md h-md py-2 px-3 space-x-2 hover:border-gray-400 focus:outline-none focus-visible:border-pink-400"
              >
                <div className="flex space-x-3 items-center w-full truncate">
                  <span
                    className="inline-block rounded-full overflow-hidden"
                    title="Nas"
                    style={{ width: 32, height: 32, minWidth: 32, minHeight: 32 }}
                  >
                    <div
                      className="w-full h-full rounded-full bg-cover bg-no-repeat bg-center"
                      style={{
                        backgroundImage:
                          'url("https://avatars.githubusercontent.com/u/20908727?v=4")'
                      }}
                    />
                  </span>
                  <div className="flex flex-col items-start">
                    <p className="text-base font-semibold">Nas</p>
                    <p className="text-xs text-gray-600 font-medium">
                      Personal Account
                    </p>
                  </div>
                </div>
                <div
                  className="icon-container icon-md text-2xl ml-2 text-gray-500"
                  aria-hidden="true"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </button>
            </div>
            <div className="pt-0 mb-6">
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-General group mb-2 space-x-4 mx-1"
                href="/account"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                    <path
                      clipRule="evenodd"
                      d="M13.906 4.91a6.41 6.41 0 0 0-1.451-.84l-.469-1.873a1.25 1.25 0 0 0-1.212-.947H9.226a1.25 1.25 0 0 0-1.213.947L7.545 4.07a6.41 6.41 0 0 0-1.452.84l-1.857-.532a1.25 1.25 0 0 0-1.427.577l-.774 1.34A1.25 1.25 0 0 0 2.25 7.82l1.388 1.343a6.477 6.477 0 0 0 0 1.676L2.25 12.181a1.25 1.25 0 0 0-.214 1.524l.774 1.34a1.25 1.25 0 0 0 1.427.577l1.857-.531c.442.34.93.623 1.452.84l.468 1.872c.14.557.64.947 1.213.947h1.548a1.25 1.25 0 0 0 1.213-.947l.468-1.873c.522-.216 1.01-.5 1.452-.84l1.857.532a1.25 1.25 0 0 0 1.427-.577l.774-1.34a1.25 1.25 0 0 0-.214-1.524l-1.389-1.343a6.494 6.494 0 0 0 0-1.676l1.389-1.343a1.25 1.25 0 0 0 .213-1.524l-.773-1.34a1.25 1.25 0 0 0-1.427-.577l-1.857.531ZM10 12.332a2.333 2.333 0 1 0 0-4.666 2.333 2.333 0 0 0 0 4.666Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="text-base">General</p>
              </a>
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Plans group mb-2 space-x-4 mx-1"
                href="/account/plans"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg width={18} height={18} viewBox="0 0 18 18" fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth="1.5"
                      d="M3 2.375h-.25c-.69 0-1.25.56-1.25 1.25V15c0 .69.56 1.25 1.25 1.25H3M15 2.375h.25c.69 0 1.25.56 1.25 1.25V15c0 .69-.56 1.25-1.25 1.25H15m-8.5.25h5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25Z"
                    />
                  </svg>
                </div>
                <p className="text-base">Plans</p>
              </a>
              {/* <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Usage group mb-2 space-x-4 mx-1"
                href="/account/usage"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bar-chart-2"
                  >
                    <path d="M18 20V10m-6 10V4M6 20v-6" />
                  </svg>
                </div>
                <p className="text-base">Usage</p>
              </a> */}
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-foreground md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Billing group mb-2 space-x-4 mx-1"
                href="/account/billing"
              >
                <div
                  className="icon-container icon-md text-2xl text-pink-500 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-credit-card"
                  >
                    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                    <path d="M1 10h22" />
                  </svg>
                </div>
                <p className="text-base">Billing</p>
              </a>
              {/* <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Feature-Flags group mb-2 space-x-4 mx-1"
                href="/account/feature-flags"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-flag"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zm0 7v-7" />
                  </svg>
                </div>
                <p className="text-base">Feature Flags</p>
              </a> */}
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Tokens group mb-2 space-x-4 mx-1"
                href="/account/messages"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-key"
                  >
                    <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
                  </svg>
                </div>
                <p className="text-base">Messages</p>
              </a>
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Security group mb-2 space-x-4 mx-1"
                href="/account/security"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-lock"
                  >
                    <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <p className="text-base">Security</p>
              </a>
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Referrals group mb-2 space-x-4 mx-1"
                href="/account/referrals"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-gift"
                  >
                    <path d="M20 12v10H4V12M2 7h20v5H2zm10 15V7m0 0H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zm0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <p className="text-base">Referrals</p>
              </a>
              {/* <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Earnings group mb-2 space-x-4 mx-1"
                href="/account/earnings"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-dollar-sign"
                  >
                    <path d="M12 1v22m5-18H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <p className="text-base">Earnings</p>
              </a> */}
              <a
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 relative flex items-center md:px-3 py-2 rounded text-gray-500 md:hover:bg-gray-100 hover:text-foreground sidebar-item sidebar-item-Templates group mb-2 space-x-4 mx-1"
                href="/account/programs"
              >
                <div
                  className="icon-container icon-md text-2xl text-gray-400 group-hover:text-foreground"
                  aria-hidden="true"
                  style={{ transform: "none" }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-layout"
                  >
                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <p className="text-base">Programs</p>
              </a>
            </div>
          </aside>
        </div>
        <main className="flex flex-col items-center w-full min-w-0 min-h-lg pt-3">
          <section className="flex flex-col flex-grow w-full first:mt-0 last:mb-0">
            <div className="flex flex-col space-y-12 w-full">
              <div className="flex justify-between items-center">
                <p className="text-h2 font-normal">Billing</p>
              </div>
              <hr className="my-4 w-full border-t border-gray-100" />
              <div className="flex flex-col space-y-12">
                <div className="flex flex-col space-y-8">
                  <h2 className="text-h4 font-semibold">Active Plan</h2>
                  <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 p-6 border border-pink-200 rounded-lg relative">
                      <img
                        alt=""
                        src="/billing/chart-dark.svg"
                        className="absolute bottom-0 left-1/4 hidden lg:flex"
                      />
                      <div className="flex flex-col space-y-3">
                        <p className="text-lg font-semibold text-pink-600">
                          Hobby/Newbie Plan
                        </p>
                        <p className="text-sm text-pink-600">
                          The Hobby plan costs $15 per month and includes up to 5
                          consultations @ $27 (per 15 minutes). Additional resources is billed
                          separately as you add addons.
                        </p>
                        <button className="group/button flex items-center !bg-white !text-black justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2 max-w-max">
                          <span className="inline-block">
                            Manage Subscription
                          </span>
                        </button>
                      </div>
                      <div className="flex flex-col divide-y divide-gray-50 -mt-2">
                        <div className="flex justify-between items-center py-2">
                          <p className="text-sm text-gray-600">
                            Subscription Type
                          </p>
                          <p className="text-sm font-semibold">
                            Monthly (Jul 25 - Aug 25)
                          </p>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <p className="text-sm text-gray-600">
                            Exercises per Programs
                          </p>
                          <p className="text-sm font-semibold">18 Exercises</p>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <p className="text-sm text-gray-600">
                            Number of Programs
                          </p>
                          <p className="text-sm font-semibold">4 </p>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <p className="text-sm text-gray-600">Shared disk</p>
                          <p className="text-sm font-semibold">100 GB</p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-3 p-6 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center">
                          <p className="text-base font-semibold">
                            {" "}
                            Payment Method
                          </p>
                          <button className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-200 text-foreground dark:text-white hover:bg-gray-100 hover:border-gray-200 disabled:bg-transparent disabled:border-gray-200 disabled:text-foreground focus-visible:ring-gray-600 focus-visible:bg-gray-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2">
                            <span className="inline-block">Replace</span>
                          </button>
                        </div>
                        <div className="flex flex-col space-y-3">
                          <p className="text-sm text-gray-600">
                            Subscription fees and usage will be billed to this
                            card
                          </p>
                          <div className="flex flex-col bg-gray-50 rounded-md py-2 px-4">
                            <p className="text-base text-gray-600">
                              Card ending in 5116
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-3 p-6 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center">
                          <p className="text-base font-semibold">Billing Email</p>
                          <button className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-gray-200 text-foreground dark:text-white hover:bg-gray-100 hover:border-gray-200 disabled:bg-transparent disabled:border-gray-200 disabled:text-foreground focus-visible:ring-gray-600 focus-visible:bg-gray-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2">
                            <span className="inline-block">Update</span>
                          </button>
                        </div>
                        <div className="flex flex-col space-y-3">
                          <p className="text-sm text-gray-600">
                            All receipts will be sent here
                          </p>
                          <div className="flex flex-col bg-gray-50 rounded-md py-2 px-4">
                            <p className="text-base text-gray-600">
                              nassersanou23@gmail.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-6">
                  <h2 className="text-h4 font-semibold">Billing History</h2>
                  <div
                    variant="danger"
                    className="relative flex p-3 rounded-md text-red-700 bg-red-50 dark:bg-red-100 mb-6"
                  >
                    <div
                      className="icon-container icon-md text-2xl mr-3 text-red-500"
                      aria-hidden="true"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-alert-triangle"
                      >
                        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" />
                      </svg>
                    </div>
                    <p className="text-base">
                      You have an unpaid invoice.&nbsp;
                      <a
                        href="https://invoice.stripe.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 underline hover:text-pink-600"
                      >
                        Click here to pay your invoice
                      </a>
                      &nbsp;in order to avoid Omari Hill access cancelation.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="group grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr] gap-4 items-center px-6 py-4 text-right border-t border-gray-100 hover:bg-secondaryBg text-red-500">
                      <div className="flex space-x-3 items-center">
                        <div
                          className="icon-container icon-sm text-lg text-red-500"
                          aria-hidden="true"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-alert-triangle"
                          >
                            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01" />
                          </svg>
                        </div>
                        <p className="text-base whitespace-nowrap">
                          Jul 25, 2024
                        </p>
                      </div>
                      <p className="text-base hidden md:block whitespace-nowrap truncate">
                        Usage-based subscription
                      </p>
                      <p className="text-base">$ 5.00</p>
                      <div className="flex space-x-2 justify-end flex-wrap">
                        <a
                          href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RWGJaa1k0WnJoOVAyMHlnalVwcm9KUGxFeWVydU9vLDExMjU1NTM1NQ0200VrN2ySM5?s=ap"
                          target="_blank"
                          rel="noreferrer"
                          name="Pay Invoice"
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 text-red-500 hover:text-pink-600"
                        >
                          Pay
                        </a>
                      </div>
                    </div>
                    <div className="group grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr] gap-4 items-center px-6 py-4 text-right border-t border-gray-100 hover:bg-secondaryBg">
                      <div className="flex space-x-3 items-center">
                        <div
                          className="icon-container icon-sm text-lg text-green-500"
                          aria-hidden="true"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check-circle"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="M22 4 12 14.01l-3-3" />
                          </svg>
                        </div>
                        <p className="text-base whitespace-nowrap">
                          Jun 25, 2024
                        </p>
                      </div>
                      <p className="text-base hidden md:block whitespace-nowrap truncate">
                        Usage-based subscription
                      </p>
                      <p className="text-base">$ 423.24</p>
                      <div className="flex space-x-2 justify-end flex-wrap">
                        <a
                          href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RTU1sbG5EQWM5UTlsbUZhUU1yNDFPb01VU29JcUxRLDExMjU1NTM1NQ0200OdZ0T2C6?s=ap"
                          target="_blank"
                          rel="noreferrer"
                          name="View Invoice"
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 text-gray-500 group-hover:underline hover:text-pink-600"
                        >
                          View
                        </a>
                      </div>
                    </div>
                    <div className="group grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr] gap-4 items-center px-6 py-4 text-right border-t border-gray-100 hover:bg-secondaryBg">
                      <div className="flex space-x-3 items-center">
                        <div
                          className="icon-container icon-sm text-lg text-green-500"
                          aria-hidden="true"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-check-circle"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="M22 4 12 14.01l-3-3" />
                          </svg>
                        </div>
                        <p className="text-base whitespace-nowrap">
                          May 25, 2024
                        </p>
                      </div>
                      <p className="text-base hidden md:block whitespace-nowrap truncate">
                        Usage-based subscription
                      </p>
                      <p className="text-base">$ 305.00</p>
                      <div className="flex space-x-2 justify-end flex-wrap">
                        <a
                          href="https://invoice.stripe.com/i/acct_1HNrvlCJoPsRzQsd/live_YWNjdF8xSE5ydmxDSm9Qc1J6UXNkLF9RQWtsSEdBYnkxUVIyaDRPbk9aUzNNRmhsVTlpQ3RQLDExMjU1NTM1NQ0200GL55KZy1?s=ap"
                          target="_blank"
                          rel="noreferrer"
                          name="View Invoice"
                          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 text-gray-500 group-hover:underline hover:text-pink-600"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </main>
  
}

export default  Progress 