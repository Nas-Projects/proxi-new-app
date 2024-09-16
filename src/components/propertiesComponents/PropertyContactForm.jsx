'use client';
import { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSession, useUser } from '@supabase/auth-helpers-react';
import { extractSubabaseUserInfo } from '@/utils/extractSubabaseUserInfo'; // Adjust the path as necessary
import { extractSessionUserInfo } from '@/utils/extractSessionUserInfo';

const PropertyContactForm = ({ property }) => {
  const  session  = useSession();
  console.log("USER_SESSION: " + session)
  const userSession = extractSessionUserInfo(session);
  console.log("USER_INFO: " + userSession)

  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPhone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [wasSubmitted, setWasSubmitted] = useState(false);

  console.log("PROPERTY_OWER: ", property.owner)

const { // Session-level data
  accessToken,
  tokenType,
  expiresIn,
  expiresAt,
  refreshToken,

  // User-level data
  userId,
  aud,
  role,
  email,
  emailConfirmedAt,
  phone,
  confirmedAt,
  lastSignInAt,
  createdAt,
  updatedAt,
  isAnonymous,

  // Metadata
  appMetadata,
  userMetadata,

  // Identities
  identities } = userSession
  const { 
    firstName,
    lastName,
    license,
    phoneVerified,
    emailVerified,
    sub,
    userRole,
    role: userMetaRole} = userMetadata


    console.log(`Phone" ${phone} ${accessToken}  ${firstName} ${lastName} ${license} ${phoneVerified} ${emailVerified} ${sub} ${userRole} ${userMetaRole}. ${license} ${phoneVerified} ${emailVerified} ${sub} ${userRole} ${userMetaRole}`)
  useEffect(() => {
    if (userSession) {
      if(userSession.userMetadata){
        setName(userSession.userMetadata.firstName || null);
      } else {
        setName(userSession.name || '');
      }
      console.log("USERSESSION_NAME: ", userSession.name, "USERSESSION_PHONE: ", userSession.phone, "USERSESSION_EMAIL: ", userSession.email)
  
      setEmail(userSession.email || '');
      // setPhone(userSession.phone || '');
    }
  }, [userSession]);

  const handleSubmit = async (e) => {
    e.preventDefault();

   console.log("property.seller_info._id", property.seller_info._id)
  //  console.log("property.owner._id", property.owner._id)
  //  setName(e.vaue);
  //  setPhone(e.vaue);

    const data = {
      name:userName,
      email,
      userPhone,
      message,
      recipient: property.seller_info._id,
      property: property._id,
      supabaseUser:true
    };



    console.log("MNESSAGE_DATA_TO_SEND", data )
    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        toast.success('Message sent successfully');
        setWasSubmitted(true);
      } else if (res.status === 400 || res.status === 401) {
        const dataObj = await res.json();
        toast.error(dataObj.message);
      } else {
        toast.error('Error sending form');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error sending form');
    } finally {
      setMessage(''); // We might want to clear only the message field
    }
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h3 className='text-xl font-bold mb-6'>Contact Property {property.owner}</h3>
      {!userSession?.accessToken ? (
        <p>You must be logged in to send a message</p>
      ) : wasSubmitted ? (
        <p className='text-green-500 mb-4'>
          Your message has been sent successfully
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='name'
            >
              Name:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='userName'
              type='text'
              placeholder='Enter your name'
              required
              value={userName}
              onChange={(e) => setName(e.target.value)}
              readOnly // Optional: disable editing
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='userEmail'
              type='email'
              placeholder='Enter your userEmail'
              required
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
              readOnly // Optional: disable editing
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='phone'
            >
              Phone:
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='userPhone'
              type='text'
              placeholder='Enter your phone number'
              value={userPhone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='message'
            >
              Message:
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
              id='message'
              placeholder='Enter your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button
              className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
              type='submit'
            >
              <FaPaperPlane className='mr-2' /> Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PropertyContactForm;



// 'use client';
// import { useState } from 'react';
// import { FaPaperPlane } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import { useSession } from 'next-auth/react';

// const PropertyContactForm = ({ property }) => {
//   const { data: session } = useSession();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [phone, setPhone] = useState('');
//   const [wasSubmitted, setWasSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       name,
//       email,
//       phone,
//       message,
//       recipient: property.owner,
//       property: property._id,
//     };

//     try {
//       const res = await fetch('/api/messages', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (res.status === 200) {
//         toast.success('Message sent successfully');
//         setWasSubmitted(true);
//       } else if (res.status === 400 || res.status === 401) {
//         const dataObj = await res.json();
//         toast.error(dataObj.message);
//       } else {
//         toast.error('Error sending form');
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error('Error sending form');
//     } finally {
//       setName('');
//       setEmail('');
//       setPhone('');
//       setMessage('');
//     }
//   };

//   return (
//     <div className='bg-white p-6 rounded-lg shadow-md'>
//       <h3 className='text-xl font-bold mb-6'>Contact Property Manager</h3>
//       {!session ? (
//         <p>You must be logged in to send a message</p>
//       ) : wasSubmitted ? (
//         <p className='text-green-500 mb-4'>
//           Your message has been sent successfully
//         </p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='name'
//             >
//               Name:
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//               id='name'
//               type='text'
//               placeholder='Enter your name'
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='email'
//             >
//               Email:
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//               id='email'
//               type='email'
//               placeholder='Enter your email'
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='phone'
//             >
//               Phone:
//             </label>
//             <input
//               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
//               id='phone'
//               type='text'
//               placeholder='Enter your phone number'
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div className='mb-4'>
//             <label
//               className='block text-gray-700 text-sm font-bold mb-2'
//               htmlFor='message'
//             >
//               Message:
//             </label>
//             <textarea
//               className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
//               id='message'
//               placeholder='Enter your message'
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//           </div>
//           <div>
//             <button
//               className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
//               type='submit'
//             >
//               <FaPaperPlane className='mr-2' /> Send Message
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };
// export default PropertyContactForm;
