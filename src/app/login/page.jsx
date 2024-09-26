'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import LoadingDots from '@/components/LoadingDots';
import { signIn } from 'next-auth/react';
import { GoogleButton } from '@/components/button';
import  SelectButton  from '@/components/select/SelectButton';


  
    const userTypes = ['Agent', 'Broker', 'Lawyer', 'Owner', 'Prospect', "Enthusiast"];

    const AuthPage = () => {
      const [isRegistering, setIsRegistering] = useState(false); // Toggling between login and registration
      const [userRole, setUserRole] = useState(''); 
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [phone, setPhone] = useState('');
      const [license, setLicense] = useState(''); // State for license input
      const [errorMessage, setErrorMessage] = useState('');
      const router = useRouter();
      const supabase = createClient();
    
  

      // Ensure that role updates correctly when changed
      useEffect(() => {
        if (userRole) {
          console.log(`Role updated: ${userRole}`);
        }
      }, [userRole]);
    
      // Handle login
      const handleLogin = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          setErrorMessage(error.message);
        } else {
          router.push('/properties'); // Redirect on successful login
        }
      };

      const handleRegister = async (e) => {
        e.preventDefault();
      
        try {
          // Step 1: Check if user already exists in MongoDB
          const existingUserResponse = await fetch(`/api/users?email=${email}`);
          const existingUserData = await existingUserResponse.json();
      
          if (existingUserData.exists) {
            console.error('User already exists in MongoDB');
            setErrorMessage('User already exists');
            return;
          }
      
          // Step 2: Try signing up with Supabase
          const supabaseUser = {
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            role: userRole,  // Your app-specific role
            userRole:userRole,
            license: userRole === 'Agent' || userRole === 'Broker' || userRole === 'Lawyer' ? license : null,
          };
          console.log("USER_TO_SYNC", supabaseUser);
      
          const { error, data } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: supabaseUser,
            },
          });
      
          if (error) {
            // Step 3: Handle Supabase returning an existing user (error code 400 or similar)
            if (error.status === 400 && error.message.includes('already registered')) {
              // User exists in Supabase, so let's sync them to MongoDB
              console.log('User already exists in Supabase, syncing with MongoDB...');
              
              // Try fetching the Supabase user by email
              const { data: supabaseUserData } = await supabase.auth.getUserByEmail(email);
      
              if (supabaseUserData?.user) {
                // Sync the existing Supabase user to MongoDB
                console.log('SUPERBASE_USERNexists in Supabase, syncing with MongoDB...');
                await syncUserToMongoDB(supabaseUserData.user, supabaseUser.useRole, supabaseUser.license);
                router.push('/private'); // Redirect on successful sync
              } else {
                console.log('FAILED_SUPERBASE_USER FETCH in Supabase, --RERROR');
                console.error('Failed to fetch Supabase user data');
              }
              return;
            } else {
              console.log('SUPERBASE_SIGUP in Supabase, ERROR...');
              console.error('Supabase Signup Error:', error.message);
              setErrorMessage(error.message);
              return;
            }
          } else {
            console.log('SUPERBASE_SIGUP SUCCSEFFUL in Supabase:',  data);
            console.log('Supabase signup successful:', data);
      
            // Step 4: Sync the new user with MongoDB
            await syncUserToMongoDB(data.user, supabaseUser.userRole, supabaseUser.license);
            console.log('SUPERBASE_POSTED_TO_MOGO_RESPONSEi:',  data.userRole);
            router.push('/properties');  // Redirect on successful registration
          }
        } catch (err) {
          console.error('Registration error:', err);
          setErrorMessage('Failed to register user');
        }
      };
      
      
      // Sync the Supabase user data to MongoDB
      const syncUserToMongoDB = async (supabaseUser, userRole, license) => {
        try {
          console.log('Syncing user to MongoDB:', supabaseUser, userRole, license); // Log the data being sent
      
          const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
              ...supabaseUser,  // Supabase user object, including metadata
              userRole,  // Your custom field for role like 'Broker', 'Agent', etc.
              license,   // License field, if applicable
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          const data = await response.json();
          console.log('Response from MongoDB sync:', data);
      
          if (!response.ok) {
            throw new Error(data.error || 'Failed to sync user to MongoDB');
          }
        } catch (err) {
          console.error('Failed to sync user to MongoDB:', err);
        }
      };
      
      
      // Handle role change for the SelectButton
      const handleRoleChange = (selectedRole) => {
        setUserRole(selectedRole); // Correctly update the role state
      };
    
      return (
        <div className="relative bg-[var(--background)] hover:border border-black">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="px-6 lg:pl-12  pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-24 xl:col-span-6">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="logo flex gap-x-4">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {isRegistering ? 'Register' : "Login"}
                  </h1>
                </div>
    
                <div className="py-4 lg:max-w-[38vw] lg:pt-12 xl:max-w-[44vw] xl:mr-24 gap-6 flex-wrap items-center justify-center">
                  <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="grid grid-cols-6">
                        <div className="col-span-2">
                          <h1 className="text-xl font-bold tracking-tight text-gray-600 m:text-3xl py-4">
                            Or continue
                          </h1>
                        </div>
                        <div className="googlq pb-4 col-span-4">
                          <GoogleButton />
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {isRegistering ? 'Create a new account. Click save when you are done.' : 'Log into your account here.'}
                      </p>
                    </div>
    
                    <div className="p-6 pt-0 space-y-2">
                      <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-4">
                        {isRegistering && (
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-sm font-medium" htmlFor="firstName">First Name</label>
                              <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                placeholder="John"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-sm font-medium" htmlFor="lastName">Last Name</label>
                              <input
                                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                        )}
    
                        {isRegistering && (
                          <>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                                <input
                                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                                  id="phone"
                                  type="text"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  required
                                  placeholder="(555) 123-4567"
                                />
                              </div>
    
                              <div className="space-y-1">
                                {/* <label className="text-sm font-medium" htmlFor="role">
                                  Role</label> */}
                                <SelectButton
                                  label="User Role (defaut)"
                                  name="userRole"
                                  items={['Select a userRole', ...userTypes]} // Pass the array of user types
                                  handleInputChange={handleRoleChange} // This correctly updates the role state
                                  value={userRole} // Bind the selected role to the state
                                />
                              </div>
                            </div>
                          </>
                        )}

                        {/* Show the License field when role is Agent, Broker, or Lawyer */}
                        {['Agent', 'Broker', 'Lawyer'].includes(userRole) && (
                          <div className="space-y-1">
                            <label className="text-sm font-medium" htmlFor="license">
                              {userRole && userRole} License
                            </label>
                            <input
                              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                              id="license"
                              type="text"
                              value={license}
                              onChange={(e) => setLicense(e.target.value)}
                              required
                              placeholder="Your license number"
                            />
                          </div>
                        )}
    
                        <div className="space-y-1">
                          <label className="text-sm font-medium" htmlFor="email">Email</label>
                          <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@domain.com"
                          />
                        </div>
    
                        <div className="space-y-1">
                          <label className="text-sm font-medium" htmlFor="password">Password</label>
                          <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="•••••••"
                          />
                        </div>
    
                        <button
                          type="submit"
                          className="py-2 text-xl min-w-[14em] bg-primary text-white rounded-md"
                        >
                          {isRegistering ? 'Get Started' : 'Login'}
                        </button>
                      </form>
    
                      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    
                      <p className="text-lg text-gray-600 py-4">
                        {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <span
                          className="text-blue-600 cursor-pointer"
                          onClick={() => setIsRegistering(!isRegistering)}
                        >
                          {isRegistering ? 'Login here' : 'Register here'}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white   lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
              <div className="block  justify-center px-12 lg:pl-24 lg:py-[5rem] py-44">
 <div className="w-full max-w-[424px]">
  <div className="text-font-xl mb-6 p-0 lg:text-4xl text-center font-serif font-semibold text-glass-700">
    Unlock the best Realestate experience
  </div>
  <div className="mb-6 flex items-center justify-center">
    <img
      alt=""
      loading="lazy"
      width={60}
      height={60}
      decoding="async"
      data-nimg={1}
      className="mr-4"
      srcSet="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/intro/intro-avatar.png 1x, https://storage.googleapis.com/speechify-website-assets/onboarding-v3/intro/intro-avatar.png 2x"
      src="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/intro/intro-avatar.png"
      style={{ color: "transparent" }}
    />
    <img
      alt=""
      loading="lazy"
      width={60}
      height={60}
      decoding="async"
      data-nimg={1}
      className="mr-4"
      srcSet="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/goals/goals-avatar.png 1x, https://storage.googleapis.com/speechify-website-assets/onboarding-v3/goals/goals-avatar.png 2x"
      src="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/goals/goals-avatar.png"
      style={{ color: "transparent" }}
    />
    <img
      alt=""
      loading="lazy"
      width={60}
      height={60}
      decoding="async"
      data-nimg={1}
      className="mr-4"
      srcSet="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/voice/voice-avatar.png 1x, https://storage.googleapis.com/speechify-website-assets/onboarding-v3/voice/voice-avatar.png 2x"
      src="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/voice/voice-avatar.png"
      style={{ color: "transparent" }}
    />
    <img
      alt=""
      loading="lazy"
      width={60}
      height={60}
      decoding="async"
      data-nimg={1}
      className="mr-4"
      srcSet="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/speed/speed-avatar.png 1x, https://storage.googleapis.com/speechify-website-assets/onboarding-v3/speed/speed-avatar.png 2x"
      src="https://storage.googleapis.com/speechify-website-assets/onboarding-v3/speed/speed-avatar.png"
      style={{ color: "transparent" }}
    />
  </div>
  <div className="mx-auto mb-4 flex max-w-[339px] text-font-s flex-col items-start text-start text-glass-600">
    <div className="mb-4 flex items-center">
      <img
        alt=""
        loading="lazy"
        width={18}
        height={24}
        decoding="async"
        data-nimg={1}
        className="mr-2"
        srcSet="check-mark-yellow.1e4c6a8b.svg"
        src="check-mark-yellow.1e4c6a8b.svg"
        style={{ color: "transparent" }}
      />
      <div className="font-bold text-left">Convert leads to sales</div>
    </div>
    <div className="mb-4 flex items-center">
      <img
        alt=""
        loading="lazy"
        width={18}
        height={24}
        decoding="async"
        data-nimg={1}
        className="mr-2"
        srcSet="check-mark-yellow.1e4c6a8b.svg"
        src="check-mark-yellow.1e4c6a8b.svg"
        style={{ color: "transparent" }}
      />
      <div className="font-bold text-left">Access 50+ premium property insights</div>
    </div>
    <div className="mb-4 flex items-center">
      <img
        alt=""
        loading="lazy"
        width={18}
        height={24}
        decoding="async"
        data-nimg={1}
        className="mr-2"
        srcSet="check-mark-yellow.1e4c6a8b.svg"
        src="check-mark-yellow.1e4c6a8b.svg"
        style={{ color: "transparent" }}
      />
      <div className="font-bold text-left">Blockchain property sales and titles transfers</div>
    </div>
    <div className="mb-4 flex items-center">
      <img
        alt=""
        loading="lazy"
        width={18}
        height={24}
        decoding="async"
        data-nimg={1}
        className="mr-2"
        srcSet="check-mark-yellow.1e4c6a8b.svg"
        src="check-mark-yellow.1e4c6a8b.svg"
        style={{ color: "transparent" }}
      />
      <div className="font-bold text-left">
      Analyze market trends faster with accelerated data processing
      </div>
    </div>
    <div className="mb-4 flex items-center">
      <img
        alt=""
        loading="lazy"
        width={18}
        height={24}
        decoding="async"
        data-nimg={1}
        className="mr-2"
        srcSet="check-mark-yellow.1e4c6a8b.svg"
        src="check-mark-yellow.1e4c6a8b.svg"
        style={{ color: "transparent" }}
      />
      <div className="font-bold text-left">
      Automatically filter out irrelevant information (e.g., outdated listings, irrelevant details)
      </div>
    </div>
    <div className="mb-4 flex items-center">
      <img
        alt=""
        loading="lazy"
        width={18}
        height={24}
        decoding="async"
        data-nimg={1}
        className="mr-2"
        srcSet="check-mark-yellow.1e4c6a8b.svg"
        src="check-mark-yellow.1e4c6a8b.svg"
        style={{ color: "transparent" }}
      />
      <div className="font-bold text-left">No ads</div>
    </div>
  </div>
  <div className="border-tertiaryTint w-full border-t-2 border-dotted" />
  <div className="mt-m flex justify-center leading-none">
    <div className="pb-l relative flex items-center justify-evenly sm:pb-0">
      <button data-le="clicked_web=itemClicked:previousQuote">
        <img
          alt=""
          loading="lazy"
          width={9}
          height={16}
          decoding="async"
          data-nimg={1}
          className="pointer-events-none mb-8 mr-5"
          srcSet="check-mark-yellow.1e4c6a8b.svg"
          src="check-mark-yellow.1e4c6a8b.svg"
          style={{ color: "transparent" }}
        />
      </button>
      <div className="mb-l font-sans-serif flex h-40 items-center lg:mb-0  pt-8 lg:pt-12">
        <div className="animate-in fade-in duration-2s">
          <div
            className="text-font-xxs lg:text-font-xs mb-6 text-center text-glass-600"
            style={{ maxWidth: 328 }}
          >
**Proxy has transformed real estate transactions with its blockchain technology. It ensures secure, transparent transactions and immutable records. Verifying property histories and ownership is now effortless. I can't imagine managing real estate deals without it.**”
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Reviewer"
              loading="lazy"
              width={32}
              height={32}
              decoding="async"
              data-nimg={1}
              className="mr-xs rounded-full"
              srcSet="https://storage.googleapis.com/speechify-website-assets/new-speechify/review/writer%2060x60%402x.png 1x, https://storage.googleapis.com/speechify-website-assets/new-speechify/review/writer%2060x60%402x.png 2x"
              src="https://storage.googleapis.com/speechify-website-assets/new-speechify/review/writer%2060x60%402x.png"
              style={{ color: "transparent" }}
            />
            <div className="font-sans-serif text-font-xxs text-glass-600">
              Daniel, writer
            </div>
          </div>
        </div>
      </div>
      <button data-le="clicked_web=itemClicked:nextQuote">
        <img
          alt=""
          loading="lazy"
          width={9}
          height={16}
          decoding="async"
          data-nimg={1}
          className="pointer-events-none mb-8 ml-5 rotate-180"
          srcSet="check-mark-yellow.1e4c6a8b.svg"
          src="check-mark-yellow.1e4c6a8b.svg"
          style={{ color: "transparent" }}
        />
      </button>
    </div>
  </div>
</div>
              </div>


              {/* <img
                alt=""
                src="/omari_3_ copy-modified.png"
                className="aspect-[3/2] w-full bg-custom-gradient object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              /> */}
            </div>
          </div>
        </div>
      );
    };
    
    export default AuthPage;