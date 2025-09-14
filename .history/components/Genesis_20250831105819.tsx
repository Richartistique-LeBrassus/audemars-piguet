import React from "react";

const Genesis = () => {
  return (
    <>
      <div className="min-h-fit w-full bg-black px-[45px] 
        md:px-16 lg:px-[188px] lg:py-[90px] py-[3.3rem]">
        <div className="flex flex-col md:flex-row pt-[64px] pb-22 w-full">
          <div className="space-y-2 text-left md:flex md:flex-row justify-between
          md:w-full md:gap-12 lg:gap-12 xl:gap-12">
            <div className="md:">
              <h2 
                className="text-[51px] uppercase leading-10
                mb-7 md:mb-9 md:text-[54px] md:leading-12
                lg:text-7xl andrew tracking-widest">
                From Avant-garde
               <br/>
               <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px] tracking-normal">
                to icon
               </span>
              </h2>
            </div>  
            <div className="2xl:w-[40%]">
              <p className="max-w-[450px] 
              text-[22px] lg:text-[23px] capitalize leading-6
              lg:leading-[25px]">
                Designed by Gérald Genta, 
                the Royal Oak revolutionised traditional watchmaking codes with its 
                hand-finished body of stainless steel, 
                octagonal bezel with eight hexagonal screws, guilloché "Tapisserie" dial, 
                and integrated bracelet.
              </p> 
            </div>        
          </div>
        </div>  
      </div>
      <div className="relative w-screen h-[120vh]">
        <video 
          src="/vids/wonders.mp4" 
          className="absolute w-full h-full object-cover"
          muted
          autoPlay
          loop
        >            
        </video>
          <div 
            className="absolute inset-x-0 top-0 h-12 
            bg-gradient-to-b from-black to-transparent pointer-events-none"
          >
          </div>
          <div 
            className="absolute inset-x-0 bottom-0 h-12 
            bg-gradient-to-t from-black to-transparent pointer-events-none"
          >
          </div>
      </div>
    </>
  )
}

export default Genesis