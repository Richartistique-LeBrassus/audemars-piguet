import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 z-50
    text-white uppercase text-sm w-full
    font-semibold px-6 md:px-8 lg:px-20 py-4
    ">
      <div className="px-auto flex items-center justify-between w-full">
        <div className="h-[28.5px] w-[37.5px]">
          <Image
            src="/imgs/150.svg"
            alt="Image 1"
            layout="responsive"
            width={2880}
            height={1920}
            className="object-cover h-full w-full text-white"
          />
        </div>    

        <div className="w-fit h-fit md:h-[38.86px] md:w-[183.58px]">
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
            width={24}
            height={31}
            className="object-cover h-full w-full block md:hidden"
          />
        </div>

        <div className="">
          something
        </div>
      </div>
    </nav>
  )
}

export default Nav