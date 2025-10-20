import React from 'react'

const AvantGarde = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="flex flex-col">
        <div className="space-y-2 text-left
        md:max-w-[55vw]
        lg:max-w-[30vw]">
          <h1 className="text-[51px] uppercase leading-9 
          mb-7 md:mb-9 md:text-6xl md:leading-11
          lg:text-7xl andrew">
            From Avant-garde
           <br/>
           <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
            to icon
           </span>
          </h1>
          <p className="text-[21px] md:text-[22px] lg:text-[23px] capitalize leading-[22px]
          lg:leading-[25px]">
            Designed by Gérald Genta, 
            the Royal Oak revolutionised traditional watchmaking codes with its hand-finished body of stainless steel, 
            octagonal bezel with eight hexagonal screws, guilloché "Tapisserie" dial, 
            and integrated bracelet.
          </p>         
      </div>
      </div>  
    </div>
  )
}

export default AvantGarde