import Image from "next/image";
import React from "react";
import { Watch, User, MapPin } from "lucide-react";

const Nav = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 z-50
    text-neutral-50 uppercase text-sm w-full
    font-semibold md:py-11 py-[24px] 
    px-6 md:px-8 lg:px-[97px]">
      <div className="px-auto flex items-center justify-between w-full">
        <div className="flex items-center justify-between gap-3 max-w-fit">
          <div className="h-[28.5px] w-[37.5px] lg:h-[32.2px] lg:w-[42.5px]">
            <Image
              src="/imgs/150-white.svg"
              alt="Image 1"
              layout="responsive"
              width={2880}
              height={1920}
              className="object-cover h-full w-full text-neutral-50"
            />
          </div>  
   
          <div>
            <hr className="ap-header__event-button-divider"/>
          </div>

          <div className="relative w-[18px] h-[18px]">
            {/* Burger */}
            <div
              className="absolute inset-0 flex flex-col justify-between mt-1 w-full h-2 lg:h-2.5 2xl:hidden"
            >
              <span className="block w-full h-[1px] lg:h-[1.7px] bg-white transition-all duration-500 ease-in-out"></span>
              <span className="block w-full h-[1px] lg:h-[1.7px] bg-white transition-all duration-500 ease-in-out"></span>
            </div>
    

            <div
              className="absolute inset-0 2xl:inline-flex 2xl:gap-5 2xl:justify-between 
              mt-1 w-full h-2 lg:h-2.5 text-white capitalize text-xl
              hidden"
            >
              <span
                className=""
              >
                Watches
              </span>
              <span
                className=""
              >
                Our World
              </span>
              <span
                className=""
              >
                Stories
              </span>
              <span
                className=""
              >
                Services
              </span>
            </div>
          </div>

        </div>


        <div className="w-fit h-fit lg:h-[38.86px] lg:w-[183.58px] 
          md:w-[143.5px] md:h-[30.33px]
          absolute left-1/2 transform
           -translate-x-1/2 ">
          {/* Logo visible above md */}
          <Image
            src="/imgs/logo-white.svg"
            alt="Logo White"
            layout="responsive"
            width={183.58}
            height={38.86}
            className="object-cover h-full w-full hidden md:block"
          />
        
          {/* Mini logo visible below md */}
          <Image
            src="/imgs/mini-logo.svg"
            alt="Mini Logo"
            layout="responsive"
            width={27}
            height={33}
            className="object-cover h-full w-full block md:hidden"
          />
        </div>

        <div className="flex items-center justify-between gap-2 md:gap-3 max-w-fit">
          <div className="h-fit w-fit">
            <Watch className="w-8 h-8 text-neutral-50" />
          </div>  

          <div className="h-fit w-fit">
            <MapPin className="w-7 h-7 text-neutral-50 hidden md:block" />
          </div> 

          <div className="h-fit w-fit">
            <User className="w-8 h-8 text-neutral-50" />    
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav