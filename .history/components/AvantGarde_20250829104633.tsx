import React from "react"
import AvantGrid from "./ui/AvantGrid"

const AvantGarde = () => {
  return (
    <div className="min-h-fit w-full bg-black px-[45px] 
    md:px-16 lg:px-[188px] lg:py-[90px] py-[3.3rem]">
      <div className="flex flex-col md:flex-row pt-[64px] pb-22 w-full">
        {/*<div className="space-y-2 text-left md:grid md:grid-cols-2
        md:w-full md:gap-12 lg:gap-2 xl:gap-20">*/}
        <div className="space-y-2 text-left md:flex md:flex-row justify-between
        md:w-full md:gap-12 lg:gap-8 xl:gap-7">
          <div className="md:">
            <h2 className="text-[51px] uppercase leading-10
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

      <AvantGrid />
       
      {/*<div 
        className="grid grid-cols-2 grid-rows-6 gap-[9px] md:px-[55px] lg:px-3
        w-full aspect-[1/2] overflow-clip"
      >        
        <div className="relative row-start-1 row-end-4 col-span-2
        xl:w-1/2">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
            src="/vids/chrome-oak.mp4"
            //autoPlay
            muted
            loop
          >
          </video>
        </div>

        <div className="row-start-4 row-end-5">
          <Image
            src="/imgs/1.avif"
            alt="Image 1"
            layout="responsive"
            width={2880}
            height={1920}
            className="object-cover h-[100%] w-[100%] overflow-hidden"
          />
        </div>
        <div className="row-start-6 row-span-1">
          <Image
            src="/imgs/3.avif"
            alt="Image 2"
            layout="responsive"
            width={2880}
            height={1920}
            className="object-cover h-[100%] w-[100%] overflow-hidden"
          />
        </div>

        
        <div className="row-start-4 row-end-4">
          <Image
            src="/imgs/2.avif"
            alt="Image 3"
            layout="responsive"
            width={2880}
            height={1920}
            className="object-cover h-[100%] w-[100%] overflow-hidden"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-5 row-end-6">
          <Image
            src="/imgs/4.avif"
            alt="Image 4"
            layout="responsive"
            width={2880}
            height={1920}
            className="object-cover h-[100%] w-[100%] overflow-hidden"
          />
        </div>
      </div>*/}

    </div>
  )
}

export default AvantGarde