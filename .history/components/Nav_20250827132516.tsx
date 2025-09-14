import Image from "next/image"
import React from "react"

const Nav = () => {
  return (
    <nav className="bg-transparent text-white uppercase text-sm 
    font-semibold px-6 md:px-8 lg:px-20 py-4
    ">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between bg-transparent">                
        <div className="h-fit w-fit mx-auto">
          <Image
            src="/imgs/logo-white.svg"
            alt="Image 1"
            layout="responsive"
            width={2880}
            height={1920}
            className="object-cover h-[100%] w-[100%] overflow-clip
            brightness-125 transition duration-500 hover:scale-110"
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav