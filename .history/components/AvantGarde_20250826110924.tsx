import Image from 'next/image'
import React from 'react'

const AvantGarde = () => {
  return (
    <div className="min-h-screen w-full bg-black px-11 py-[3.3rem]">
      <div className="flex flex-col pt-[64px]">
        <div className="space-y-2 text-left md:grid md:grid-cols-2
        md:w-full md:gap-5
        lg:max-w-[30vw]">
          <div>
            <h2 className="text-[51px] uppercase leading-10
            mb-7 md:mb-9 md:text-6xl md:leading-11
            lg:text-7xl andrew tracking-widest">
              From Avant-garde
             <br/>
             <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px] tracking-normal">
              to icon
             </span>
            </h2>
          </div>  

          <div>
            <p className="max-w-[450px]
            text-[22px] lg:text-[23px] capitalize leading-6
            lg:leading-[25px]">
              Designed by Gérald Genta, 
              the Royal Oak revolutionised traditional watchmaking codes with its hand-finished body of stainless steel, 
              octagonal bezel with eight hexagonal screws, guilloché "Tapisserie" dial, 
              and integrated bracelet.
            </p> 
          </div>        
        </div>
      </div>  

       
      <div className="max-w-screen-xl mx-auto py-12 flex flex-col md:flex-row gap-8">
        <div className="grid grid-cols-2 h-[464px] w-full">
          <div className="flex flex-col w-full h-full">
            <div className="h-[70%]">
              <Image
                src="/imgs/1.avif"
                alt="Image 1"
                layout="responsive"
                width={2880}
                height={1920}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-[30%]">
              <Image
                src="/imgs/3.avif"
                alt="Image 2"
                layout="responsive"
                width={2880}
                height={1920}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
      
          <div className="flex flex-col w-full h-full">
            <div className="h-[30%]">
              <Image
                src="/imgs/2.avif"
                alt="Image 3"
                layout="responsive"
                width={2880}
                height={1920}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-[70%]">
              <Image
                src="/imgs/4.avif"
                alt="Image 4"
                layout="responsive"
                width={2880}
                height={1920}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AvantGarde