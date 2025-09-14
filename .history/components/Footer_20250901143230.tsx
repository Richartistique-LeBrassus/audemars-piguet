import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-screen w-full bg-teal-900">
      <div className="flex flex-col gap-7">
        <div className="relative w-[45vw] h-[12vw] 
          md:w-[41.82vw] md:h-[27.42vw]
          mdp:w-fit mdp:h-fit
          overflow-hidden"
        >
          <Image
            src="imgs/chronicles.svg"
            alt="CU"
            fill
            //width={1280}
            //height={838}
            className="object-contain mdp:object-cover"
          />
        </div>

        <div className="relative w-[28vw] h-[17.7vw] 
          md:w-[41.82vw] md:h-[27.42vw]
          mdp:w-fit mdp:h-fit
          overflow-hidden"
        >
          <Image
            src="imgs/musee.svg"
            alt="CU"
            fill
            //width={1280}
            //height={838}
            className="object-contain mdp:object-cover"
          />
        </div>

        <div className="relative w-[47vw] h-[24vw] 
          md:w-[41.82vw] md:h-[27.42vw]
          mdp:w-fit mdp:h-fit
          overflow-hidden"
        >
          <Image
            src="imgs/foundations.svg"
            alt="CU"
            fill
            //width={1280}
            //height={838}
            className="object-contain mdp:object-cover"
          />
        </div>
      </div>  
    </footer>
  )
}

export default Footer