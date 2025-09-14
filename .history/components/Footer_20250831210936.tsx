import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-screen w-full bg-teal-900">
      <div className="flex flex-col">
        <div className="relative w-full h-[70vw] overflow-clip
          2xl:h-[75vh]"
        >
          <Image
            src="/imgs/cufflink-1.jpg"
            alt="Image 1"
            layout="responsive"
            fill
            className="object-contain 
            brightness-200 transition duration-500 hover:scale-110"
          />
        </div>
      </div>  
    </footer>
  )
}

export default Footer