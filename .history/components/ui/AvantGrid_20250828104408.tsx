import Image from 'next/image'
import React from 'react'

const AvantGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-2 min-h-fit gap-2 2xl:gap-0">
        <div className="relative w-full h-[71.25vw]
          2xl:h-[75vh]">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover 
            overflow-hidden brightness-110 hover:cursor-pointer"
            src="/vids/chrome-oak.mp4"
            autoPlay
            muted
            loop
          >
          </video>
        </div>
          <div 
            className="grid grid-cols-2 h-[14.5rem] gap-2 md:px-[55px] lg:px-3
            w-full aspect-[1/2] 2xl:h-[75vh] 2xl:overflow-hidden"
          >        
            <div className="flex flex-col gap-2">
              <div className="row-start-1 row-end-4 overflow-hidden">
                <Image
                  src="/imgs/1.avif"
                  alt="Image 1"
                  layout="responsive"
                  width={2880}
                  height={1920}
                  className="object-cover h-[100%] w-[100%] overflow-clip
                  brightness-125 transition duration-500 hover:scale-110"
                />
              </div>
              <div className="row-start-5 row-end-6 overflow-hidden">
                <Image
                  src="/imgs/3.avif"
                  alt="Image 2"
                  layout="responsive"
                  width={2880}
                  height={1920}
                  className="object-cover h-[100%] w-[100%] overflow-clip
                  brightness-125 transition duration-500 hover:scale-110"
                />
              </div>
            </div>           
            <div className="flex flex-col gap-2">
              <div className="row-span-1 overflow-hidden">
                <Image
                  src="/imgs/2.avif"
                  alt="Image 3"
                  layout="responsive"
                  width={2880}
                  height={1920}
                  className="object-cover h-[100%] w-[100%] overflow-clip
                  brightness-125 transition duration-500 hover:scale-110"
                />
              </div>
              <div className="row-start-2 row-end-6 overflow-hidden">
                <Image
                  src="/imgs/4.avif"
                  alt="Image 4"
                  layout="responsive"
                  width={2880}
                  height={1920}
                  className="object-cover h-[100%] w-[100%] overflow-clip
                  brightness-125 transition duration-500 hover:scale-110"
                />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AvantGrid