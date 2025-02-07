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
