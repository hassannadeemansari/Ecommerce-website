"use client"
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineInbox } from "react-icons/md";
import { PiPlantDuotone } from "react-icons/pi";
import Link from "next/link";
import NewCeramics from "./Ceramics/page";

export default function Home() {
  return (
    <div>

      {/* header
      <header>
        <div className="flex justify-between w-[90%] 2xl:w-[1580px] bg mx-auto h-[7vh] items-center">
          <div><a href='AllProducts'><CiSearch /></a></div>
          <h1><Link href="/">Avion</Link></h1>
          <div className="flex gap-5">
            <div><Link href="/Shopping"><IoCartOutline /></Link></div>
            <div><Link href="/Sign"><MdOutlineAccountCircle /></Link></div>
          </div>
        </div>
        <div className="flex mx-auto items-center h-11">
  <div className="flex flex-wrap justify-center gap-5 font-sans text-gray-500 mx-auto ">
    <Link href="/AllProducts" className="hover:text-primary transition duration-200 hover:font-bold">All Products</Link>
    <Link href="/Plantspots" className="hover:text-primary transition duration-200 hover:font-bold">Plants Pots</Link>
    <a  className="hover:text-primary transition duration-200">Ceramics</a>
    <a className="hover:text-primary transition duration-200">Tables</a>
    <a className="hover:text-primary transition duration-200">Chairs</a>
    <a className="hover:text-primary transition duration-200">Crockery</a>
    <a className="hover:text-primary transition duration-200">Tableware</a>
    <a className="hover:text-primary transition duration-200">Cutlery</a>
  </div>
</div>
      </header> */}

      {/* hero section */}


      <div className="h-[100vh] sm:h-[600px] h-[550px] 2xl:w-[1600px] mx-auto flex items-center">
        <div className="sm:w-[75%] w-[90%] h-[450px] xl:h-[500px] bg-red-400 mx-auto">
          <div className="w-full h-full bg-primary flex">
            <div className="w-[55%] text-white pt-10 pl-10 flex flex-col 2xl:gap-[160px]">
              <div>
                <div className="sm:w-[60%] w-[90%] font-sans text-2xl ">
                  <p>The furniture brand for the future, with timeless designs</p>
                </div><br />
                <div>
                  <button className="bg-gray-500 h-12 sm:w-[150px] w-[135px] hover:bg-gray-600 transition duration-500"><a href="/AllProducts">View Collection</a></button>
                </div>
              </div>
              <div>
                <div className="sm:w-[80%] w-[90%] sm:text-lg text-[10px] font-sans font-extralight sm:mt-0 mt-9 ">
                  <p>A new era in eco-friendly furniture with Avelon, the French luxury retail brand
                    with nice fonts, tasteful colors, and a beautiful way to display things digitally 
                    using modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[45%] h-auto ">
              <Image src="/hero.png" alt="Description" width={500} height={500} className="w-[100%] h-[100%] object-cover object-fill " />
            </div>
          </div>
        </div>
      </div>

      {/* What makes our brand different */}


      <main>
        <div className="sm:w-[28%]  font-sans text-2xl text-gray-500 mx-auto p-10 hover:text-primary mx-auto">
          <p>What makes our brand different</p>
        </div>
      </main>

      <div className="w-[74%] h-[65%] mt-8 hover:text-blue-800 grid 2xl:grid-rows-1 xl:grid-rows-1 lg:grid-rows-1 grid-rows-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-10 mx-auto">
        <div className=" h-[30%] ">
          <div>
            <FaTruckFast />
          </div><br />
          <h1>
            Next day as standard
          </h1><br />
          <p className="  font-sans">
            Order before 3pm and get your order
            the next day as standard
          </p>
        </div>

        <div className=" h-[30%] ">
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
        <div className=" h-[30%] ">
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
        <div className=" h-[50%] ">
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

      {/* New ceramics   ***** */}
       <br/>
       <br/>

      <NewCeramics />
      

      
      {/* <div className="h-[10vh] sm:w-[90%] py-5 ml-5 mt-3 2xl:w-[1600px] flex items-end mx-auto text-3xl font-sans 2xl:ml-[180px] " >
         <div>New ceramics</div>
      </div>

      <div>
        <div className="w-[100%] 2xl:w-[1600px] h-[400px] sm:h-[380px] xl:h-[370px] mx-auto flex items-center justify-center">
          <div className="w-[85%] h-[85%] flex justify-center items-center gap-5 flex-wrap ">
            <div className="w-[40%] 2xl:w-[300px] h-[100%] overflow-hidden">
              <Image width={500} height={500} className="w-[100%] h-[78%] object-cover object-center object-fill" src="/hero.png" alt="cart1" /><br />
              <p>The Dandy chair</p>
              <p>£250</p>
            </div>
            <div className="w-[40%] 2xl:w-[300px] h-[100%] overflow-hidden">
              <Image width={500} height={500} className="w-[100%] h-[78%] object-cover object-center object-fill" src="/hero2.png" alt="cart2" /><br />
              <p>Rustic Vase Set</p>
              <p>£155</p>
            </div>
            <div className="w-[40%] 2xl:w-[300px] h-[100%]  overflow-hidden">
              <Image width={500} height={500} className="w-[100%] h-[78%] object-cover object-center object-fill" src="/hero3.png" alt="cart3" /><br />
              <p>The Silky Vase</p>
              <p>£125</p>
            </div>
            <div className="w-[40%] 2xl:w-[300px] h-[100%] overflow-hidden">
              <Image width={500} height={500} className="w-[100%] h-[78%] object-cover object-center object-fill" src="/hero4.png" alt="cart4" /><br />
              <p>The Lucy Lamp</p>
              <p>£399</p>
            </div>
          </div>
        </div>

        <div className="flex mx-auto justify-center 2xl:mt-[10px] mt-[350px]"><button className="bg-gray-300 h-12 w-[140px] hover:bg-gray-400 transition duration-200"><Link href="/AllProducts">View Collection</Link></button></div>
      </div> */}


      {/* cards */}


      <div>
        <div className="h-[10vh] w-[99%] 2xl:w-[1600px] flex items-end mx-auto text-3xl font-sans 2xl:ml-[100px] 2xl:mt-2 mt-[60px] ">
          <p> <div>Our popular products</div></p>
        </div>

        <div className="w-[98%] 2xl:w-[1600px] h-[1000px]  sm:h-[800px]  mx-auto flex items-center">
          <div className="w-[87%] h-[86%] mx-auto flex items-center sm:flex-row flex-col gap-5">
            <div className="sm:w-[47%] h-[90%]">
              <Image width={500} height={500} className="w-[100%] h-[80%] object-cover object-center object-fill" src="/card1.jpg" alt="c1" /><br />
              <p>The Poplar suede sofa</p>
              <p>£250</p>
            </div>
            <div className="sm:w-[47%] w-[100%] h-[50%] sm:h-[90%]">
              <Image width={500} height={500} className="w-[100%] h-[80%] object-cover object-center object-fill" src="/hero.png" alt="c2" /><br />
              <p>The Dandy chair</p>
              <p>£250</p>
            </div>
            <div className="sm:w-[47%] w-[100%] h-[50%] sm:h-[90%]">
              <Image className="w-[100%] h-[80%] object-cover object-center object-fill"width={500} height={500} src="/card3.png" alt="c3" /><br />
              <p>The Dandy chair</p>
              <p>£980</p>
            </div>
          </div>
        </div>
        <div className="flex mx-auto justify-center 2xl:mt-[-80px] sm:mt-0 mt-[280px]"><button className="bg-gray-300 h-12 w-[140px] hover:bg-gray-400 transition duration-200"><Link href="/AllProducts">View Collection</Link></button></div>
      </div>
      <br />
      <br />



      {/* From a studio in London to a global brand with */}


      <div className="w-[99%] 2xl:w-[1600px] h-[550px] bg-white mx-auto flex">
            
                  <div className="w-[48%] h-[90%] flex justify-center items-center ">
                       <div className="w-[85%] h-[76%] -300 flex flex-col justify-between">
                           <div>
                                <h1 className="2xl:text-3xl text-gray-600">From a studio in London to a global brand withover 400 outlets</h1><br/>

                                <p className="2xl:text-sm text-sm text-gray-500">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p><br/>
                                <p className="2xl:text-sm text-sm text-gray-500" >Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p><br/>
                           </div>

                           <div>     <button className="h-[6vh] 2xl:w-[18%] w-[100px] bg-gray-400 text-white hover:bg-gray-500 transition duration-200">Get In Touch</button>   </div>

                       </div>
                       
                  </div>

                  <div className="w-[52%] h-full">
                     <Image width={500} height={500} className="w-[100%] h-[100%] object-cover object-center object-fill"  src="/last.png" alt="menu" />
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
                                <button className="h-[46px] w-[18%] bg-primary text-white transition duration-200"><Link href="/Sign">Sign Up</Link></button>
                           </div>
                      </div>
                  </div>
            </div>

    </div>
  );
}
