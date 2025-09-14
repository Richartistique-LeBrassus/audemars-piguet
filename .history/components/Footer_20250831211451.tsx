import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-screen w-full bg-teal-900">
      <div className="flex flex-col">
        <div className="relative w-[30vw] h-[10vh] overflow-clip"
        >
          <Image
            src="/imgs/chronicles.svg"
            alt="AP Chronicles"
            layout="responsive"
            fill
            className="object-fit 
            brightness-200 transition duration-500 hover:scale-110"
          />
        </div>
      </div>  
    </footer>
  )
}

export default Footer