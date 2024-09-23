// export default function LoginForm(){
//     return (
//         <div className="flex justify-center items-center h-screen">
//         <div className="w-96 p-4 bg-white rounded shadow-lg">
//             <h1 className="text-2xl font-bold text-center">Login</h1>
//             <form className="mt-4">
//             <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">Login</button>
//             </form>
//         </div>
//         </div>
//     );
// }
   {/* LOGIN----------- */}
    export default function LoginFormCard(){
        return <div
        data-state="active"
        data-orientation="horizontal"
        role="tabpanel"
        aria-labelledby="radix-:r0:-trigger-account"
        id="radix-:r0:-content-account"
        tabIndex={0}
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        style={{}}
        >
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">Login</h3>
            <p className="text-sm text-muted-foreground">
              Make changes to your account here. Click save when you&apos;re done.
            </p>
          </div>
          <div className="p-6 pt-0 space-y-2">
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="name"
              >
              Email
              </label>
              <input
                className="flex h-10 w-full rounded-md focus:ring-indigo-50 border border-input focus:ring-indigo-500 focus:border-black bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                type="text"
                placeholder="anick@PROXY.com"
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed focus:ring-indigo-500 focus:border-indigo-500 peer-disabled:opacity-70"
                htmlFor="username"
              >
               Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border focus:ring-black border-input focus:border-indigo-50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="username"
                type="password"
                placeholder="@peduarte"
              />
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
             Login
            </button>
          </div>
        </div>
        </div>
    }

// export default function LoginForm(){
//     return (
//         <div className="flex justify-center items-center h-screen">
//         <div className="w-96 p-4 bg-white rounded shadow-lg">
//             <h1 className="text-2xl font-bold text-center">Login</h1>
//             <form className="mt-4">
//             <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//             </div>
//             <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">Login</button>
//             </form>
//         </div>
//         </div>
//     );
// }
export  function PasswordResetCard(){
    return <div
data-state="active"
data-orientation="horizontal"
role="tabpanel"
aria-labelledby="radix-:r0:-trigger-password"
id="radix-:r0:-content-password"
tabIndex={0}
className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
>
<div className="rounded-xl border bg-card text-card-foreground shadow">
  <div className="flex flex-col space-y-1.5 p-6">
    <h3 className="font-semibold leading-none tracking-tight">Password</h3>
    <p className="text-sm text-muted-foreground">
      Change your password here. After saving, you'll be logged out.
    </p>
  </div>
  <div className="p-6 pt-0 space-y-2">
    <div className="space-y-1">
      <label
        className="text-sm font-medium leading-none focus:ring-indigo-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="current"
      >
        Current password
      </label>
      <input
        className="flex h-10 w-full  focus:ring-indigo-50 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="current"
        type="password"
        defaultValue=""
      />
    </div>
    <div className="space-y-1">
      <label
        className="text-sm font-medium focus:ring-indigo-50 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="new"
      >
        New password
      </label>
      <input
        className="flex h-10 w-full rounded-md border focus:ring-indigo-50 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="new"
        type="password"
        defaultValue=""
      />
    </div>
  </div>
  <div className="flex items-center p-6 pt-0">
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
      Save changes
    </button>
  </div>
</div>
</div>
}


 



    {/* ----------ACOUNT-------------------- */}
    export  function EditProfileCard(){
        return <div
        data-state="active"
        data-orientation="horizontal"
        role="tabpanel"
        aria-labelledby="radix-:r4:-trigger-profile"
        id="radix-:r4:-content-profile"
        tabIndex={0}
        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Profile Information
            </h3>
            <p className="text-sm text-muted-foreground">
              Update your profile details such as bio, website, and gender.
            </p>
          </div>
          <div className="p-6 pt-0 space-y-2">
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="first_name"
                type="text"
                defaultValue="John"
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="last_name"
                type="text"
                defaultValue="Doe"
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="bio"
              >
                Bio
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="bio"
                type="text"
                defaultValue="Bodybuilding enthusiast"
              />
            </div>
            <div className="space-y-1">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="gender"
              >
                Gender
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="gender"
                type="text"
                defaultValue="Male"
              />
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Save changes
            </button>
          </div>
        </div>
        </div>
    }
