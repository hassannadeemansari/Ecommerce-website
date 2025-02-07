'use client'

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaSkype, FaTwitter, FaPinterestP } from "react-icons/fa";
import Link from "next/link";
import "./globals.css"; // Ensure you don't have any custom font styles in this file
import { ClerkProvider } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/nextjs";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ClerkProvider>
    <html lang="en">
      <body className="antialiased">
        {/* Header */}
        <header>
          {/* Top Header */}
          <div className="flex justify-between items-center w-[90%] max-w-[1200px] mx-auto h-[7vh] sm:h-[8vh] py-4">
            {/* Left Side: Menu Icon and Logo */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl block sm:hidden">
                &#9776;
              </button>
              {/* Logo */}
              <h1 className="text-2xl sm:text-3xl font-semibold">
                <Link href="/">Avion</Link>
              </h1>
            </div>

            {/* Right Side: Search, Cart, and Account Icons */}
            <div className="flex items-center sm:gap-5 gap-3">
              <div>
                <a href="/AllProducts" className="text-xl">
                  <CiSearch />
                </a>
              </div>
              <div>
                <Link href="/Shopping">
                  <IoCartOutline className="text-xl" />
                </Link>
              </div>
              <div className="flex items-center sm:gap-3 gap-2">
                    <Link href="/Sign">
                   <SignInButton>
                  <MdOutlineAccountCircle className="text-xl cursor-pointer" />
                   </SignInButton>
                 </Link>
                  <UserButton showName  />
             </div>
            </div>
          </div>

          {/* Side-Sliding Menu for Mobile */}
          <div
            className={`fixed top-0 left-0 h-full w-[70%] max-w-[300px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl absolute top-4 right-4"
              >
                &times;
              </button>
              <div className="flex flex-col gap-4 mt-10">
                <Link href="/AllProducts" className="hover:text-primary transition duration-200 hover:font-bold">All Products</Link>
                <Link href="/Plantspots" className="hover:text-primary transition duration-200 hover:font-bold">Plants Pots</Link>
                <a href="/AllProducts" className="hover:text-primary transition duration-200">Ceramics</a>
                <a href="/AllProducts" className="hover:text-primary transition duration-200">About</a>
                <a href="/AllProducts" className="hover:text-primary transition duration-200">Product List</a>
                <a href="/AllProducts" className="hover:text-primary transition duration-200">Cart</a>
                <a  className="hover:text-primary transition duration-200">Tableware</a>
                <a className="hover:text-primary transition duration-200">All Products</a>
              </div>
            </div>
          </div>

          {/* Overlay for Mobile Menu */}
          {menuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}

          {/* Menu Links for Desktop */}
          <div className="hidden sm:flex flex-wrap justify-center items-center gap-4 sm:gap-5 font-sans text-gray-500 mx-auto py-4 sm:py-0">
            <Link href="/AllProducts" className="hover:text-primary transition duration-200 hover:font-bold">All Products</Link>
            <Link href="/Plantspots" className="hover:text-primary transition duration-200 hover:font-bold">Plants Pots</Link>
            <a className="hover:text-primary transition duration-200">Ceramics</a>
            <a className="hover:text-primary transition duration-200">About</a>
            <a className="hover:text-primary transition duration-200">Product List</a>
            <a className="hover:text-primary transition duration-200">Cart</a>
            <a className="hover:text-primary transition duration-200">Tableware</a>
            <a className="hover:text-primary transition duration-200">All Products</a>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

      {/* footer */}
                    
      <footer className="w-[99%] 2xl:w-[1600px] 2xl:h-[50vh] h-auto bg-primary text-white flex-wrap xl:text-sm text-sm mx-auto flex justify-center">
    <div className="w-[89%] h-auto flex flex-col sm:flex-row flex-wrap items-start justify-between gap-6 sm:gap-0 py-8">
        
        {/* Menu Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Menu</h1>
            <div><a>New Arrivals</a></div>
            <div><a>Best Sellers</a></div>
            <div><a>Recently Viewed</a></div>
            <div><a>Popular This Week</a></div>
            <div><a href="/Product">All Products</a></div>
        </div>

        {/* Categories Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Categories</h1>
            <div><a>Crockery</a></div>
            <div><a>Furniture</a></div>
            <div><a>Homeware</a></div>
            <div><a>Plant pots</a></div>
            <div><a>Chairs</a></div>
            <div><a>Crockery</a></div>
        </div>

        {/* Our Company Section */}
        <div className="font-sans flex flex-col gap-3 text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-xl sm:text-2xl">Our Company</h1>
            <div><Link href="/About">About Us</Link></div>
            <div><a>Vacancies</a></div>
            <div><a>Contact Us</a></div>
            <div><a>Privacy</a></div>
            <div><a>Returns Policy</a></div>
        </div>

        {/* Mailing List Section */}
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <p className="text-lg sm:text-xl">Join our mailing list</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                <input 
                    className="w-full sm:w-[380px] h-[7vh] bg-white opacity-[0.4] text-black px-3 py-2" 
                    placeholder="your@gmail.com" 
                    type="text" 
                />
                <button className="h-[7vh] w-full sm:w-[160px] bg-white text-primary"><Link href="/Sign">Sign Up</Link></button>
            </div>
        </div>

        {/* Footer Bottom Section */}
<div className="border-t-[1px] 2xl:w-[1500px] flex flex-col sm:flex-row justify-between items-center mx-auto py-4">
    <div className="h-[8vh] flex items-center text-sm sm:text-base mb-4 sm:mb-0">Copyright 2022 Avion LTD</div>
    <div className="flex items-center gap-4 flex-wrap">
        <FaLinkedin className="text-2xl sm:text-3xl" />
        <FaFacebookSquare className="text-2xl sm:text-3xl" />
        <FaInstagram className="text-2xl sm:text-3xl" />
        <FaSkype className="text-2xl sm:text-3xl" />
        <FaTwitter className="text-2xl sm:text-3xl" />
        <FaPinterestP className="text-2xl sm:text-3xl" />
    </div>
</div>


    </div>
    </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}



// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import { ClerkProvider, SignIn } from "@clerk/nextjs";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Avion",
//   description: "Generated by Hassan",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SignIn path="/Sign" routing="path"/>
//         {children}
//       </body>
//     </html>
//     </ClerkProvider>
//   );
// }
