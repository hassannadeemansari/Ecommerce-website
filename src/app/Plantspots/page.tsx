
import Link from "next/link";
import Image from "next/image";

export default function Plants(){
    return(
        <div>

                     {/* <header>
              <div className="flex justify-between w-[90%] 2xl:w-[1580px] bg mx-auto h-[7vh] items-center">
                  <div><CiSearch /></div>
                  <h1 className="2xl:text-2xl"><Link href="/">Avion</Link></h1>
                     <div className="flex gap-5">
                     <div><Link href="/Shopping"><IoCartOutline /></Link></div>
                     <div><Link href="/Sign"><MdOutlineAccountCircle/></Link></div>
                     </div>
              </div>
              <div className="2xl:w-[1600px] w-[90%] border-b-2 mx-auto" />

              <div className="flex mx-auto items-center h-11">
                  <div className="flex gap-5 font-sans text-gray-500 mx-auto">
                      <a href="Product">Products List</a>
                      <Link href="/Plantspots" className="hover:text-primary transition duration-200">Plants Pots</Link>
                      <a>Ceramics</a>
                      <a>Tables</a>
                      <a>Chairs</a>
                      <a>Crockery</a>
                      <a>Tableware</a>
                      <a>Cutlery</a>
                  </div> 
              </div>
         </header> */}


         <main className="w-[99%] 2xl:w-[1600px] 2xl:h-[35vh] bg-black mx-auto">
              <Image  width={600} height={600} className="w-full h-full object-cover object-fill " src="/plantbackground1.jpg" alt="back" />
         </main>   


          <div className="w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto p-4">
                          {[
                            { img: "/pot1.jpeg", name: "The Dandy Chair", price: "£250" },
                            { img: "/pot2.jpeg", name: "Rustic Vase Set", price: "£155" },
                             { img: "/pot3.jpeg", name: "The Silky Vase", price: "£125" },
                            { img: "/pot4.jpeg", name: "The Lucy Lamp", price: "£399" },
                            { img:"/pot5.jpeg", name: "The Dandy Chair", price: "£250" },
                            { img:"/pot6.jpeg", name: "Rustic Vase Set", price: "£155" },
                             { img:"/pot7.jpeg", name: "The Silky Vase", price: "£125" },
                            { img:"/pot8.jpeg", name: "The Lucy Lamp", price: "£399" },
                            { img: "/pot9.jpeg", name: "The Dandy Chair", price: "£250" },
                            { img: "/pot10.jpeg", name:"The Silky Vase", price: "£125" },
                             { img: "/pot11.jpeg", name: "Rustic Vase Set", price: "£155" },
                            { img: "/pot12.jpeg", name: "The Lucy Lamp", price: "£399" },
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


                    {/* Join the club and get the benefits */}




           <div className="w-[99%] 2xl:w-[1600px] h-[440px] mx-auto flex justify-center items-center">
                  <div className="w-[100%] h-[80%] bg-gray-100 flex justify-center items-center">
                      <div className="sm:w-[55%] w-[85%] sm:h-[80%] h-[80%] bg-white flex flex-col justify-around">
                           <div className="flex justify-center flex-col items-center">
                                <h1 className="2xl:text-3xl font-sans">Join the club and get the benefits</h1><br/>
                                <p className="w-[50%] 2xl:text-lg text-[10px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                           </div>
                           <div className="flex gap-2 justify-center">
                                <input className="h-[46px] w-[30%] bg-gray-200" type="text" placeholder="your@gmail.com" />  
                                <button className="h-[46px] w-[18%] bg-primary text-white transition duration-200"><Link href="/Sign">Sign Up</Link></button>
                           </div>
                      </div>
                  </div>
            </div>



         {/* <div className="2xl:w-[1600px] w-[99%] h-[50vh] bg-orange-400 mx-auto flex justify-center items-center">
              <div className="w-[85%] h-[98%] bg-white flex justify-center gap-4">
                   <div className="w-[24%] h-full bg-blue-300">
                      <img className="w-[100%] h-[79%] object-cover object-center object-fill" src="hero.png" alt="cart1" />
                      <p></p>
                   </div>
              </div>
         </div> */}



    </div>

      

    )
}