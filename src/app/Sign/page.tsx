// import React from 'react';
// import Link from 'next/link';

// const SignUp = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4 text-white">
//       <div className="w-full max-w-md bg-primary p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Name Field */}
//           <div>
//             <label className="block text-gray-700 mb-1">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="block text-gray-700 mb-1">Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label className="block text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Confirm Password Field */}
//           <div>
//             <label className="block text-gray-700 mb-1">Confirm Password</label>
//             <input
//               type="password"
//               placeholder="Confirm your password"
//               className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-purple-600"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-3 rounded-lg text-black font-bold hover:bg-purple-700 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Sign-In Link */}
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{' '}
//           <Link href="/sign-in" className="text-purple-600  hover:underline">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>

//   );
// };

// export default SignUp;




"use client";

import { SignedOut, SignIn, UserButton, SignedIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SignPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Header with UserButton */}
      <header className="w-full max-w-md flex justify-between items-center p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-lg font-bold">Avion</h1>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </header>

      {/* Sign-in Card */}
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg mt-4">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <SignedOut>
          {mounted && <SignIn routing="hash" />}
        </SignedOut>
      </div>
    </div>
  );
}

