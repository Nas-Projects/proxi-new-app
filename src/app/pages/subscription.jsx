import Link from "next/link"

 function subscriptions({}){
    return <div className="relative min-h-screen w-screen relative pt-[8em]  mx-4 bg-white">
        <div class="flex flex-auto flex-col overflow-hidden lg:flex-row">
            <div class="absolute right-0 top-0 overflow-hidden pl-[50%] lg:left-[32rem] lg:pl-0 xl:left-[47rem]">
            <div className="shrink-0 px-4 lg:order-2 lg:min-w-0 lg:flex-1 lg:px-16 xl:px-20">
  <div className="mx-auto grid max-w-md grid-cols-1 lg:mx-0 lg:max-w-lg">
    <div className="relative py-10 lg:pt-24">
      <div className="absolute inset-y-0 left-1/2 -ml-[55vw] w-[110vw] bg-gradient-to-b from-white/100 shadow-slate-900/5 lg:hidden" />
      <div className="relative">
        <Link href="/">
          <svg
            className="h-6 w-auto text-slate-900 lg:hidden"
            aria-hidden="true"
            viewBox="0 0 160 24"
            fill="none"
          >
            <path
              d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
              className="fill-sky-400"
            />
            <path
              d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <span class="badge_badge__WnfZm badge_blue-subtle__DapOd badge_md__o99Fi" data-geist-badge="" data-version="v2"><span class="badge_contentContainer__khfN_"><span class="badge_iconContainer__G7dN0"><svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" ><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z" fill="currentColor"></path></svg></span>Default</span></span>
        <div className="mt-10 flex space-x-3 lg:mt-0">
          <h1 className="text-base font-semibold leading-6 text-sky-500">
            All-access (Upgrade)
          </h1>
          <span className="rounded-full bg-slate-300/25 px-3 text-xs font-semibold leading-6 text-slate-500">
            Team license
          </span>
          <div
            //  className={`${styles.stack} stack`} 
      className={`stack`} 
      data-version="v1"
      style={{
        '--stack-flex': 'initial',
        '--stack-direction': 'row',
        '--stack-align': 'center',
        '--stack-justify': 'flex-start',
        '--stack-padding': '0px',
        '--stack-gap': '8px'
      }}
    >
      <p
              // className={`${styles.textWrapper} text_wrapper__i87JK`}
        className={`text_wrapper__i87JK`}
        data-version="v1"
        style={{
          '--text-color': 'var(--ds-gray-1000)',
          '--text-size': '1rem',
          '--text-line-height': '1.5rem',
          '--text-letter-spacing': '-0.32px',
          '--text-weight': '500'
        }}
      >
        Total Due $31.00
      </p>
      <span
          //  className={`${styles.badge} badge_amber-subtle__OVCCT badge_md__o99Fi`}
        className={`badge_amber-subtle__OVCCT badge_md__o99Fi`}
        data-geist-badge=""
        data-version="v2"
      >
        <span className="badge_contentContainer__khfN_">Overdue</span>
      </span>
    </div>
        </div>
        <div className="mt-4 flex items-center space-x-3">
          <p className="text-4xl text-slate-900">
            $<span className="font-bold">5</span>
            <span className="font-bold">0</span>
            <span className="font-bold">0</span>
          </p>
          <p className="text-sm font-semibold text-slate-500">
            one-time payment
          </p>
        </div>
        <p className="mt-6 text-base leading-7 text-slate-700">
          Includes access for your team to all 500+ components and templates
          available in Tailwind UI today, plus all future updates.
        </p>
        <p className="mt-6 text-sm leading-6 text-slate-600">
          All prices in {/* */}USD
        </p>
        <div className="mt-4 flex space-x-3 text-sm leading-6">
          <p className="text-slate-500">
            Team licenses include 25 seats.{/* */}{" "}
            <Link className="text-slate-900 hover:underline" href="/all-access">
              Learn about licenses for larger teams
            </Link>
            .
          </p>
        </div>
        <dl className="mt-16 hidden divide-y divide-slate-900/5 text-base leading-6 text-slate-700 lg:block">
          <div className="flex justify-between pb-4">
            <dt>Subtotal</dt>
            <dd className="font-semibold text-slate-900">
              $<span>5</span>
              <span>0</span>
              <span>0</span>.<span>0</span>
              <span>0</span>
            </dd>
          </div>
          <div className="flex justify-between py-4">
            <dt>Taxes</dt>
            <dd className="text-slate-700">Calculated at next step</dd>
          </div>
          <div className="flex justify-between pt-4 font-semibold text-slate-900">
            <dt>Total price</dt>
            <dd>
              $<span>5</span>
              <span>0</span>
              <span>0</span>.<span>0</span>
              <span>0</span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>

               
                {/* <img src="/img/beams-checkout@95.jpg" alt="" class="-ml-[48rem] w-[124.125rem] max-w-none lg:-ml-[32rem] lg:-mt-[15.9375rem]" />
                <div class="mt-10 flex space-x-3 lg:mt-0"><h1 class="text-base font-semibold leading-6 text-sky-500">All-access (Upgrade)</h1>
                    <span class="rounded-full bg-slate-300/25 px-3 text-xs font-semibold leading-6 text-slate-500">Team license</span></div><div class="mt-4 flex items-center space-x-3">
                    <p class="text-4xl text-slate-900">$<span class="font-bold">5</span>
                        <span class="font-bold">0</span><span class="font-bold">0
                        </span></p><p class="text-sm font-semibold text-slate-500">one-time payment</p></div><p class="mt-6 text-base leading-7 text-slate-700">
                    Includes access for your team to all 500+ components and templates available in Tailwind UI today, plus all future updates.</p><p class="mt-6 text-sm leading-6 text-slate-600">All prices in
                </p><div class="mt-4 flex space-x-3 text-sm leading-6"><p class="text-slate-500">Team licenses include 25 seats<Link class="text-slate-900 hover:underline" href="/all-access">Learn about licenses for larger teams</Link>.
                </p></div>
                <dl class="mt-16 hidden divide-y divide-slate-900/5 text-base leading-6 text-slate-700 lg:block"><div class="flex justify-between pb-4">
                    <dt>Subtotal</dt><dd class="font-semibold text-slate-900">$<span>5</span><span>0</span><span>0</span>.<span>0</span><span>0</span></dd></div><div class="flex justify-between py-4"><dt>Taxes</dt><dd class="text-slate-700">
                        Calculated at next step</dd>
                    </div><div className="flex justify-between pt-4 font-semibold text-slate-900">
                        <dt>Total price</dt><dd>$<span>5</span><span>0</span><span>0</span>.<span>0</span><span>0</span></dd></div></dl> */}
            </div>
    </div>

  
    
 <div className="relative w-full bg-white/60 px-4 pb-28 pt-10 backdrop-blur lg:max-w-[34rem] lg:grow-0 lg:px-16 lg:shadow-2xl xl:px-20">
  {/* <Link href="/">
    <svg
      className="hidden h-6 w-auto text-slate-900 lg:block"
      aria-hidden="true"
      viewBox="0 0 160 24"
      fill="none"
    >
      <path
        d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z"
        className="fill-sky-400"
      />
      <path
        d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z"
        fill="currentColor"
      />
    </svg>
  </Link> */}
  <ul className="mt-8 hidden space-x-2 text-sm font-medium leading-6 text-slate-700 lg:flex">
    <li className="flex">
      <Link href="/all-access">Packages</Link>
      <svg
        aria-hidden="true"
        className="ml-2 h-6 w-6 stroke-slate-500/40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m10.75 8.75 3.5 3.25-3.5 3.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
    <li className="flex font-semibold text-sky-500">
      Your details
      <svg
        aria-hidden="true"
        className="ml-2 h-6 w-6 stroke-slate-500/40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m10.75 8.75 3.5 3.25-3.5 3.25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
    <li className="">Payment</li>
  </ul>
  <div className="mx-auto max-w-md lg:mt-12 lg:max-w-sm ">
    <div>
      <div className="-m-[13px]">
        <div className="paddle-checkout-container">
          <iframe
            id="pf_undefined"
            className="paddle-frame paddle-frame-inline"
            name="paddle_frame"
            frameBorder={0}
            allow="payment https://buy.paddle.com https://subscription-management.paddle.com;"
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none"
            }}
            height={691}
            src="https://buy.paddle.com/paddlejs?ccsURL=https://checkout-service.paddle.com/create/checkout/custom/eyJ0IjoiVGFpbHdpbmQgVUkgXHUyMDEzIEFsbC1hY2Nlc3MgKFRlYW0gTGljZW5zZSkiLCJpIjoiaHR0cHM6XC9cL3BhZGRsZS5zMy5hbWF6b25hd3MuY29tXC91c2VyXC8xMDQ4NzZcL0YxN2ZoMGZLUXRVZ25VdUtta2JTX1I2R1pPb0V0UnRXVEo1emU0bXhWX3RhaWx3aW5kLXVpLW1hcmstcGFkZGxlLnBuZyIsInIiOiJodHRwczpcL1wvdGFpbHdpbmR1aS5jb21cL3RoYW5rLXlvdT90eXBlPXVwZ3JhZGUmcGFkZGxlX2NoZWNrb3V0X2hhc2g9e2NoZWNrb3V0X2hhc2h9IiwiY20iOiIiLCJyZSI6MCwicCI6NjYwNzU4LCJjYyI6eyJVU0QiOiI1MDAiLCJBVUQiOiI2MjAiLCJDQUQiOiI2NTAiLCJFVVIiOiI1MDAiLCJHQlAiOiI0MzAiLCJJTlIiOiIxNDAwMCJ9LCJoIjoie1widHlwZVwiOlwidXBncmFkZVwiLFwidXNlcl9pZFwiOjE1MDksXCJ0ZWFtX2lkXCI6bnVsbCxcInVwZ3JhZGVkX2xpY2Vuc2VfaWRzXCI6WzE1MTIsNjc3MTRdfSIsInEiOjAsInEyIjoiMSIsImQiOiIwIiwiYSI6W10sInYiOiIxMDQ4NzYiLCJzIjoiMGZkMmRmNmJjYjJjZWEyZGE3MzVhMzA5MTAwY2NjNWNjNThkOTBhMmQ2ZTU5NGFiNmExNjcyMjQ0N2VmNzA2MWI1ODcxNmU1OGJiZDQyYWU0OTgxMjAxYzBmNDA5NTVmZjk5OWM3NWI5ZjI5ZGZmYzIxMjIyOTVhOTllM2VhNDEifQ==/?parentURL=https%3A%2F%2Ftailwindui.com%2Fcheckout%2Fcc42453b-bfcd-4a7c-8150-37946e36168e&parent_url=https%3A%2F%2Ftailwindui.com%2Fcheckout%2Fcc42453b-bfcd-4a7c-8150-37946e36168e&referring_domain=tailwindui.com&disable_logout=false&display_mode=inline&apple_pay_enabled=false&paddlejs-version=2.0.81&vendor=104876&checkout_initiated=1720210698629&popup=true&paddle_js=true&is_popup=true"
          />
        </div>
      </div>
    </div>
  </div>
</div>

             
    </div> 
    
}


export default subscriptions