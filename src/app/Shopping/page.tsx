// "use client";

// import { FaLinkedin, FaSquareFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterestP } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Product } from "../../../types/products";
// import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";

// const ShoppingBasket = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire("Removed!", "Item has been removed from your cart.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
//   };

//   // const handleProceed = () => {
//   //   Swal.fire({
//   //     title: "Processing your order...",
//   //     text: "Please wait a moment.",
//   //     icon: "info",
//   //     showCancelButton: true,
//   //     confirmButtonColor: "#3085d6",
//   //     cancelButtonColor: "#d33",
//   //     confirmButtonText: "Proceed",
//   //   }).then((result) => {
//   //     if (result.isConfirmed) {
//   //       Swal.fire("Success!", "Your order has been successfully processed!", "success");
//   //       setCartItems([]);
//   //     }
//   //   });
//   // };


//   const handleProceed = async () => {
//     // Show SweetAlert confirmation dialog
//     const result = await Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Proceed",
//     });
  
//     // If user clicks "Proceed"
//     if (result.isConfirmed) {
//       try {
//         // Make the API request to create a Stripe checkout session
//         const res = await fetch("/api/checkout", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             items: cartItems.map(item => ({
//               id: item._id,
//               name: item.title,
//               price: item.price,
//               quantity: item.inventory,
//             })),
//           }),
//         });
  
//         const data = await res.json();
  
//         // If URL is returned from API, redirect to Stripe checkout
//         if (data.url) {
//           window.location.href = data.url;
//         } else {
//           console.error("No URL returned from the checkout API");
//         }
//       } catch (error) {
//         console.error("Error during checkout:", error);
//       }
//     } else {
//       // If user cancels, show a message
//       Swal.fire("Cancelled", "Your order was not processed.", "error");
//     }
//   }
  



//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="flex w-[90%] 2xl:w-[1580px] mx-auto h-[7vh] items-center justify-between py-4">
//         <Link href="/" className="text-xl font-bold md:text-2xl">Avion</Link>
//         <div className="hidden md:flex gap-6">
//           <Link href="/About" className="hover:underline">About Us</Link>
//           <a className="hover:underline">Contact</a>
//           <Link href="/Product" className="hover:underline">Blog</Link>
//           <div className="flex gap-4">
//             <Link href="/Shopping"><IoCartOutline size={24} /></Link>
//             <Link href="/Sign"><MdOutlineAccountCircle size={24} /></Link>
//             <CiSearch size={24} />
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto p-4 md:p-8 lg:p-12">
//         <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
//         <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
//           {cartItems.length > 0 ? (
//             <table className="min-w-full border border-gray-200 text-sm md:text-base">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="py-2 px-4 text-left font-semibold">Product</th>
//                   <th className="py-2 px-4 text-right font-semibold">Total</th>
//                   <th className="py-2 px-4 text-right font-semibold">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item._id} className="border-b">
//                     <td className="py-4 px-4 flex items-center">
//                       <Image
//                         src={item.productImage ? urlFor(item.productImage).url() : "/placeholder-image.jpg"}
//                         alt={item.title}
//                         width={64}
//                         height={64}
//                         className="object-cover mr-4 rounded-md"
//                       />
//                       <div>
//                         <p className="font-semibold">{item.title}</p>
//                         <p className="text-gray-600">${item.price}</p>
//                       </div>
//                     </td>
//                     <td className="py-4 px-4 text-center flex flex-row">
//                       <button onClick={() => handleQuantityChange(item._id, item.inventory - 1)} className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400">-</button>
//                       <span className="mx-2 font-semibold">{item.inventory}</span>
//                       <button onClick={() => handleQuantityChange(item._id, item.inventory + 1)} className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400">+</button>
//                     </td>
//                     <td className="py-4 px-4 text-right font-semibold">${(item.price * item.inventory).toFixed(2)}</td>
//                     <td className="py-4 px-4 text-right">
//                       <button onClick={() => handleRemove(item._id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Remove</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-gray-600 text-center">Your cart is empty.</p>
//           )}
//         </div>
//         {cartItems.length > 0 && (
//           <div className="mt-8 text-center ">
//             <p className="text-lg font-semibold">Subtotal: ${calculateTotal().toFixed(2)}</p>
//             <button onClick={handleProceed} className="min-w-full mt-4 bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">Go to Checkout</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShoppingBasket;



"use client";


import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";

const ShoppingBasket = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());

    // Check if payment was successful
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("payment") === "success") {
      // Clear the cart after payment success
      localStorage.removeItem("cart");
      setCartItems([]); // Reset cart in state
      Swal.fire("Payment Successful", "Your order has been processed.", "success");
    }
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed from your cart.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = async () => {
    // Show SweetAlert confirmation dialog
    const result = await Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    });

    // If user clicks "Proceed"
    if (result.isConfirmed) {
      try {
        // Make the API request to create a Stripe checkout session
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: cartItems.map(item => ({
              id: item._id,
              name: item.title,
              price: item.price,
              quantity: item.inventory,
            })),
          }),
        });

        const data = await res.json();

        // If URL is returned from API, redirect to Stripe checkout
        if (data.url) {
          // Reset the cart after redirecting to the payment page
          localStorage.removeItem("cart"); // Assuming you're using localStorage for cart items

          // Proceed to Stripe checkout
          window.location.href = data.url;
        } else {
          console.error("No URL returned from the checkout API");
        }
      } catch (error) {
        console.error("Error during checkout:", error);
      }
    } else {
      // If user cancels, show a message
      Swal.fire("Cancelled", "Your order was not processed.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <header className="flex w-[90%] 2xl:w-[1580px] mx-auto h-[7vh] items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold md:text-2xl">Avion</Link>
        <div className="hidden md:flex gap-6">
          <Link href="/About" className="hover:underline">About Us</Link>
          <a className="hover:underline">Contact</a>
          <Link href="/Product" className="hover:underline">Blog</Link>
          <div className="flex gap-4">
            <Link href="/Shopping"><IoCartOutline size={24} /></Link>
            <Link href="/Sign"><MdOutlineAccountCircle size={24} /></Link>
            <CiSearch size={24} />
          </div>
        </div>
      </header> */}

      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
          {cartItems.length > 0 ? (
            <table className="min-w-full border border-gray-200 text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-left font-semibold">Product</th>
                  <th className="py-2 px-4 text-right font-semibold">Total</th>
                  <th className="py-2 px-4 text-right font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-b">
                    <td className="py-4 px-4 flex items-center">
                      <Image
                        src={item.productImage ? urlFor(item.productImage).url() : "/placeholder-image.jpg"}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover mr-4 rounded-md"
                      />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-gray-600">${item.price}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center flex flex-row">
                      <button onClick={() => handleQuantityChange(item._id, item.inventory - 1)} className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400">-</button>
                      <span className="mx-2 font-semibold">{item.inventory}</span>
                      <button onClick={() => handleQuantityChange(item._id, item.inventory + 1)} className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400">+</button>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold">${(item.price * item.inventory).toFixed(2)}</td>
                    <td className="py-4 px-4 text-right">
                      <button onClick={() => handleRemove(item._id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600 text-center">Your cart is empty.</p>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-8 text-center ">
            <p className="text-lg font-semibold">Subtotal: ${calculateTotal().toFixed(2)}</p>
            <button onClick={handleProceed} className="min-w-full mt-4 bg-purple-700 text-white py-2 px-6 rounded hover:bg-purple-800">Go to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingBasket;
