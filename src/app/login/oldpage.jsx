'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client'; // Import the browser Supabase client
import LoginFormCard from '../../components/cards/LoginFormCard'
import RegisterFormCard  from '../../components/cards/LoginFormCard'
const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false); // Toggling between login and registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const supabase = createClient();

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
      router.push('/private'); // Redirect on successful login
    }
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      router.push('/private'); // Redirect on successful registration
    }
  };

  return (
    <div style={styles.container} className='mt-[40em]'>
<LoginFormCard />
  <RegisterFormCard />

      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      <form onSubmit={isRegistering ? handleRegister : handleLogin} style={styles.form}>
        {isRegistering && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ ...styles.input, color: '#000' }} // Added text color
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ ...styles.input, color: '#000' }} // Added text color
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{ ...styles.input, color: '#000' }} // Added text color
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ ...styles.input, color: '#000' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ ...styles.input, color: '#000' }}
        />
        <button type="submit" style={styles.button}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <p style={styles.toggleText}>
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span
          onClick={() => setIsRegistering(!isRegistering)}
          style={styles.toggleLink}
        >
          {isRegistering ? 'Login here' : 'Register here'}
        </span>
      </p>
    </div>
  );
};

// Inline styles for the form
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  toggleText: {
    marginTop: '10px',
  },
  toggleLink: {
    color: '#0070f3',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default AuthPage;


// "use client"


// import { useState } from 'react';
// import { supabase } from '@/lib/supabaseClient';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [user, setUser] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       setErrorMessage(error.message);
//     } else {
//       setUser(data.user);
//       console.log('Logged in user:', data.user);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin} style={styles.form}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//       {errorMessage && <p style={styles.error}>{errorMessage}</p>}
//       {user && <p>Welcome, {user.email}!</p>}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '300px',
//   },
//   input: {
//     padding: '10px',
//     margin: '10px 0',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     padding: '10px',
//     backgroundColor: '#0070f3',
//     color: '#fff',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//   },
//   error: {
//     color: 'red',
//     marginTop: '10px',
//   },
// };

// export default LoginPage;
