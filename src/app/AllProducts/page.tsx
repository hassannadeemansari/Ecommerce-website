"use client"
import Image from "next/image";



export default function AllProducts(){
    return(
        <div>

         <main className="w-[99%] 2xl:w-[1600px] 2xl:h-[35vh] bg-black mx-auto">
              <Image  width={600} height={600} className="w-full h-full object-cover object-fill" src="/AllProducts1.png" alt="back" />
         </main>
         <div className="h-12 w-[100%] mx-auto"></div>

         <div className="w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto p-4">
                 {[
                   { img: "/hero.png", name: "The Dandy Chair", price: "£250" },
                   { img: "/hero4.png", name: "Rustic Vase Set", price: "£155" },
                    { img: "/hero2.png", name: "The Silky Vase", price: "£125" },
                   { img: "/hero3.png", name: "The Lucy Lamp", price: "£399" },
                   { img: "/a1.png", name: "The Dandy Chair", price: "£250" },
                   { img: "/a4.png", name: "Rustic Vase Set", price: "£155" },
                    { img: "/a2.png", name: "The Silky Vase", price: "£125" },
                   { img: "/a3.png", name: "The Lucy Lamp", price: "£399" },
                   { img: "/hero.png", name: "The Dandy Chair", price: "£250" },
                   { img: "/hero2.png", name:"The Silky Vase", price: "£125" },
                    { img: "/hero4.png", name: "Rustic Vase Set", price: "£155" },
                   { img: "/hero3.png", name: "The Lucy Lamp", price: "£399" },
                 ].map((product, index) => (
                   <div key={index} className="flex flex-col items-center text-center">
                     <Image
                        width={500} height={500}
                        className="w-full h-[200px] object-cover mb-2 rounded-md"
                        src={product.img}
                        alt={product.name}
                     />
                      <p className="text-lg font-semibold">{product.name}</p>
                     <p className="text-gray-600">{product.price}</p>
                   </div>
                   ))}
        </div>


       
               <div className="flex mx-auto justify-center items-center h-[180px]"><button className="bg-gray-300 h-12 w-[14%]">View Collection</button></div>
                    
 


         {/* <div className="2xl:w-[1600px] w-[99%] h-[50vh] bg-orange-400 mx-auto flex justify-center items-center">
              <div className="w-[85%] h-[98%] bg-white flex justify-center gap-4">
                   <div className="w-[24%] h-full bg-blue-300">
                      <img className="w-[100%] h-[79%] object-cover object-center object-fill" src="hero.png" alt="cart1" />
                      <p></p>
                   </div>
              </div>
         </div> */}



        </div>
    );
}