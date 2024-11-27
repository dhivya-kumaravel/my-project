import { GoogleAuthProvider } from 'firebase/auth'
import React from 'react'
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase,config';


const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
    const handleLogin = async () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            
          })
          .catch((error) => {
            // // Handle Errors here.
            // const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          })
        // try {
        //   const result = await signInWithPopup(auth, googleProvider);
        //   console.log(result);
        // } catch (error) {
        //   console.log(error);
        // }
      };
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-blue-600 px-8 py-2 text-white' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login