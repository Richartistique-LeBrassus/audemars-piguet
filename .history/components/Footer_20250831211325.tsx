import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-screen w-full bg-teal-900">
      <div className="flex flex-col">
        <div className="relative w-fit h-fit overflow-clip"
        >
          <Image
            src="/imgs/chronicles.svg"
            alt="AP Chronicles"
            layout="responsive"
            fill
            className="object-cover 
            brightness-200 transition duration-500 hover:scale-110"
          />
        </div>
      </div>  
    </footer>
  )
}

export default Footer