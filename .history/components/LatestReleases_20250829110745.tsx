import React from "react";

const LatestReleases = () => {
  return (
    <div className="min-h-screen w-screen bg-black">
      <div className="space-y-2 text-left md:flex md:flex-row justify-between
        md:w-full md:gap-12 lg:gap-12 xl:gap-12">
          <div className="md:">
            <h2 
              className="text-[51px] uppercase leading-10
              mb-7 md:mb-9 md:text-[54px] md:leading-12
              lg:text-7xl andrew tracking-widest">
              Our Latest
             <br/>
             <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px] tracking-normal">
              Releases
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
  )
}

export default LatestReleases