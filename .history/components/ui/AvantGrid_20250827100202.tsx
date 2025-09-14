import Image from 'next/image'
import React from 'react'

const AvantGrid = () => {
  return (
    <div 
      className="grid grid-cols-2 grid-rows-6 gap-[9px] md:px-[55px] lg:px-3
      w-full aspect-[1/2] overflow-clip"
    >        
      <div>
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
      </div>

      <div>
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
        </div>
    </div>
  )
}

export default AvantGrid