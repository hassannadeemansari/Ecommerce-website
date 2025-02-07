"use client"
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineInbox } from "react-icons/md";
import { PiPlantDuotone } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import Link from "next/link";




export default function About(){
    return(
        <div>

          <div className="flex w-[90%] 2xl:w-[1580px]  mx-auto h-[6vh] items-center bg-primary text-white justify-center">
               <p>Free delivery on all orders over £50 with code easter checkout</p>
               <div className="flex justify-end"><ImCross /></div>
          </div>


         
         <main className="2xl:w-[1600px] w-[95%] h-[350px] mx-auto flex items-center justify-center">
              <div className="w-[80%] sm:h-[76%] h-[60%] bg-white flex sm:flex-row flex-col justify-around sm:justify-between items-center">
                      <p className="lg:w-[44%] w-[320px] 2xl:text-3xl text-2xl text-gray-700 font-sans flex ">
                      A brand built on the love of craftmanship,
                      quality and outstanding customer service
                      </p>
                  
                  <div>
                      <button className="bg-gray-300 2xl:w-[200px] w-[150px] h-[7vh]"><a href="/AllProducts">ViewOurProducts</a></button>
                  </div>
              </div>
         </main>



    {/* hero section */}

               <div className="h-[100vh] 2xl:h-[55vh] h-[60vh] 2xl:w-[1600px] mx-auto flex items-center ">
                    <div className="sm:w-[80%] w-[95%] h-[60vh]  mx-auto flex sm:gap-3">
                         <div className="sm:w-[700px] w-[300px] h-full bg-primary flex ">
       
                               <div className="w-full text-white pt-10 pl-10 flex flex-col 2xl:gap-[160px]">
                                  <div> 
                                       <div className="sm:w-[60%] w-[80%]  font-sans text-2xl ">
                                          <p className="2xl:text-3xl text:sm">The furniture brand for the future, with timeless designs</p>
                                        </div><br/>
                                        <div>
                                           <button className="bg-gray-500 h-12 w-[120px]"><Link href="/AllProducts">View Collection</Link></button>
                                        </div>
                                   </div>
                                   <div>       
                                        <div className="sm:w-[80%] w-[90%] sm:mt-0 mt-8 font-sans font-extralight sm:text-lg ">
                                           <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                              with nice fonts, tasteful colors and a beautiful way to display things digitally 
                                              using modern web technologies.
                                           </p>
                                        </div>
                                   </div>
                              </div>
                    
       
                         </div>

                                                       <div className="w-[45%] h-auto ">
              
              <Image width={500} height={500}  src="/About1.png" alt="Description" className="w-[100%] h-[100%]  object-cover object-fill " />
                              </div>

                    </div>
               </div> 



  {/* Our service isn’t just personal, it’s actually */}


           <div className="w-[99%] 2xl:w-[1600px] 2xl:h-[75vh] h-[550px] bg-white mx-auto flex mt-11">


                  <div className="sm:w-[52%] sm:h-[70vh]  w-[55%] h-[52vh] mt-12">
                     <Image width={500} height={500} className="w-[100%] h-[100%] object-cover object-center object-fill"  src="/About2.png" alt="menu" />
                  </div>


                  <div className="w-[48%] h-[90%] flex justify-center items-center mt-10 ">
                       <div className="w-[85%] h-[76%] -300 flex flex-col justify-between">
                           <div>
                                <h1 className="2xl:text-3xl text-gray-600">From a studio in London to a global brand withover 400 outlets</h1><br/>

                                <p className="2xl:text-sm text-sm text-gray-500">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p><br/>
                                <p className="2xl:text-sm text-sm text-gray-500" >Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p><br/>
                           </div>

                           <div>     <button className="h-[6vh] 2xl:w-[18%] w-[120px] bg-gray-200 text-white">Get In Touch</button>   </div>

                       </div>
                       
                  </div>
                  
           </div>



              {/* What makes our brand different */}



              <main>
        <div className="sm:w-[28%]  font-sans text-2xl text-gray-500 mx-auto p-10 hover:text-primary mx-auto sm:mt-0 mt-[100px]">
          <p>What makes our brand different</p>
        </div>
      </main>

      <div className="w-[74%] h-[65%] hover:text-blue-800 grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-10 mx-auto">
        <div className="sm:w-[35%] h-[30%] ">
          <div>
            <FaTruckFast />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>

        <div className="sm:w-[35%] h-[30%] ">
           <span>
            <FaRegCheckCircle />
           </span><br />
           <h1>
            Next day as standard
           </h1><br />
           <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
           </p>
        </div>
        <div className="sm:w-[35%] h-[30%] ">
          <div>
            <MdOutlineInbox />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>
        <div className="sm:w-[35%] h-[50%] ">
          <div>
            <PiPlantDuotone />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="2xl:text-sm  font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>
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
                                <button className="h-[46px] w-[18%] bg-primary text-white"><Link href="/Sign">Sign Up</Link></button>
                           </div>
                      </div>
                  </div>
            </div>


          
        </div>
    );
}