'use client';

import { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSession } from '@supabase/auth-helpers-react';
// import { extractSubabaseUserInfo } from '@/utils/extractSubabaseUserInfo'; // Adjust the path as necessary
import { extractSessionUserInfo } from '@/utils/extractSessionUserInfo';
import clsx from 'clsx';

const PropertyContactForm = ({ property }) => {



  console.log("PROPERTY_OWER: ", property.owner)


    // console.log(`Phone" ${phone}  Email ${email} First Name  ${firstName} Last Name ${lastName}  Lisence ${license} ${phoneVerified} ${emailVerified} ${sub} ${userRole} ${userMetaRole}. ${license} ${phoneVerified} ${emailVerified} ${sub} ${userRole} ${userMetaRole}`)
    const session = useSession();
    const userSession = extractSessionUserInfo(session);
  
    // const [userName, setName] = useState('');
    const [firstName, setFirstName] = useState(''); // Updated to use a consistent name
    const [lastName, setLastName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPhone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [budget, setBudget] = useState('');
    const [wasSubmitted, setWasSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
    
      const name = `${firstName} ${lastName}`;
      const subject = `Inquiry: ${property.name} - ${property.location.street}`;
      const body = `
        Name: ${name}
        Email: ${userEmail}
        Phone: ${userPhone}
        Budget: ${budget}
        Message:
        ${message}
      `;
    
      const mailtoLink = `mailto:${property.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the user's email client with the prefilled subject and body
      window.location.href = mailtoLink;
    
      // You can still send the message to your backend API if needed
      const data = {
        name,
        email: userEmail,
        userPhone,
        budget: budget || 'N/A',
        message,
        recipient: property.contact._id,
        property: property._id,
        supabaseUser: true,
      };
    
      console.log("MNESSAGE_DATA_TO_SEND", data);
    
      try {
        fetch('/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }).then((res) => {
          if (res.status === 200) {
            toast.success('Message sent successfully');
            setWasSubmitted(true);
          } else {
            res.json().then((dataObj) => {
              toast.error(dataObj.message || 'Error sending form');
            });
          }
        });
      } catch (error) {
        console.log(error);
        toast.error('Error sending form');
      } finally {
        setMessage(''); // Clear the message field
      }
    };
    
  //   useEffect(() => {
  //     if (userSession) {
  //       setFirstName(userSession.userMetadata?.firstName || '');
  //       setLastName(userSession.userMetadata?.lastName || '');
  //       setEmail(userSession.email || '');
  //       setPhone(userSession.phone || '');   

  //       // const { 
  //       //   accessToken,
  //       //   tokenType,
  //       //   expiresIn,
  //       //   expiresAt,
  //       //   refreshToken,
          
  //       //   // User-level data
  //       //   userId,
  //       //   aud,
  //       //   role,
  //       //   email = '', // Default to empty string if email is not available
  //       //   emailConfirmedAt,
  //       //   phone = '', // Default to empty string if phone is not available
  //       //   confirmedAt,
  //       //   lastSignInAt,
  //       //   createdAt,
  //       //   updatedAt,
  //       //   isAnonymous,
          
  //       //   // Metadata
  //       //   appMetadata,
  //       //   userMetadata,
          
  //       //   // Identities
  //       //   identities 
  //       // } = userSession  // Fallback to an empty object if userSession is null
        

      
  //       console.log("USER_INFO: " + userSession)
      
  //     }
  //   }, [userSession]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //  console.log("property.seller_info._id", property.seller_info._id)
  // //  console.log("property.owner._id", property.owner._id)
  // //  setName(e.vaue);
  // //  setPhone(e.vaue);
  //   const name = firstName + " " + lastName;
  //   const data = {
  //     name:name,
  //     email,
  //     userPhone,
  //     message,
  //     recipient: property.seller_info._id,
  //     property: property._id,
  //     supabaseUser:true
  //   };



  //   console.log("MNESSAGE_DATA_TO_SEND", data )
  //   try {
  //     const res = await fetch('/api/messages', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (res.status === 200) {
  //       toast.success('Message sent successfully');
  //       setWasSubmitted(true);
  //     } else if (res.status === 400 || res.status === 401) {
  //       const dataObj = await res.json();
  //       toast.error(dataObj.message);
  //     } else {
  //       toast.error('Error sending form');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Error sending form');
  //   } finally {
  //     setMessage(''); // We might want to clear only the message field
  //   }
  // };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md lg:mt-12'>
      {/* <h3 className='text-xl font-bold mb-6 text-custom-gradient'>Contact Property {property.owner}</h3> */}
      {!userSession?.accessToken ? (
        <p>You must be logged in to send a message</p>
      ) : wasSubmitted ? (
        <p className='text-green-500 mb-4'>
          Thank Your. Your message has been sent successfully
        </p>
      ) : (
        <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-custom-gradient text-left">{property.seller_info ? property.seller_info.name :  "Meet Ryan"}</h2>
            {/* <p className={clsx(`${styles.paragraphBig} mt-2 text-lg leading-8 text-gray-600`)}> */}
            <p className={clsx("paragraphBig mt-2 text-lg text-left leading-8 text-gray-600")}>
            {property.seller_info  && property.seller_info?.bio ? user.bio : "I am the right agent for you—feel free to give me a call or send a message, and let’s start finding your dream home together"}
            </p>
            <form onSubmit={handleSubmit}
            //  action="#" method="POST" 
             className="mt-16"
             >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input  onChange={(e) => setFirstName(e.target.value)}
                       value={firstName}
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input    
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input  
                    onChange={(e) => setEmail(e.target.value)}
                       value={userEmail}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input  onChange={(e) => setCompany(e.target.value)}
                      //  value={ company ? company : "N/A" }
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="phone" className="block font-semibold text-gray-900">
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input  onChange={(e) => setPhone(e.target.value)}
                       value={userPhone}
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Send me a meassage
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea  
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-semibold leading-6 text-gray-900">Aproximate budget</legend>
                  <div className="mt-4 space-y-4 text-sm leading-6 text-gray-600">
                    <div className="flex gap-x-2.5">
                      <input onChange={(e) => setBudget(e.target.value)}
                        defaultValue="under_25k"
                        id="budget-under-25k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300  text-custom-gradient shadow-sm focus:ring-pink-600"
                      />
                      <label htmlFor="budget-under-25k">Less than $25K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input  onChange={(e) => setBudget(e.target.value)}
                        defaultValue="25k-50k"
                        id="budget-25k-50k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300  text-custom-gradient shadow-sm focus:ring-pink-600"
                      />
                      <label htmlFor="budget-25k-50k">$25K – $50K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input onChange={(e) => setBudget(e.target.value)}
                        defaultValue="50k-100k"
                        id="budget-50k-100k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300  text-custom-gradient shadow-sm focus:ring-pink-600"
                      />
                      <label htmlFor="budget-50k-100k">$50K – $100K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input onChange={(e) => setBudget(e.target.value)}
                        defaultValue="50k-100k"
                        id="budget-50k-100k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300  text-custom-gradient shadow-sm focus:ring-pink-600"
                      />
                      <label htmlFor="budget-50k-100k">$100K + </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <p className='text-xs mt-6'>By clicking on “Send message” you agree with our Terms and Conditions, meaning you agree to get back in touch with you based on provided information.</p>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="inline-flex gap-x-4  py-4 rounded-md bg-custom-gradient px-3.5  text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message  <FaPaperPlane className='mr-2' /> 
                </button>
              </div>
            </form>
          </div>
            </div>
          </div>
        </div>
    
      )}
    </div>
  );
};

export default PropertyContactForm;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
