import Image from "next/image"
import React from "react"

const AvantGrid = () => {
  return (
    <>
      <div className="min-h-fit relative grid grid-cols-1 2xl:grid-cols-2gap-2 2xl:gap-0
        px-5 md:px-28"
      >
          <div className="relative w-full h-[70vw] overflow-clip
          2xl:h-[75vh]">
          <Image
            src="/imgs/cufflink-1.jpg"
            alt="Image 1"
            layout="responsive"
            width={1944}
            height={1921}
            //fill
            className="object-contain 
            brightness-200 transition duration-500 hover:scale-110"
          />
        </div>
          <div 
            className="grid grid-cols-2 h-[14.5vw] gap-2 lg:px-3
            w-full 2xl:h-[75vh] 2xl:overflow-hidden"
          >        
            <div className="flex flex-col gap-2">
              <div className="row-start-1 row-end-4 overflow-hidden">
                <Image
                  src="/imgs/cufflink-2.jpg"
                  alt="Image 1"
                  layout="responsive"
                  width={1921}
                  height={2576}
                  //fill
                  className="object-fill  overflow-clip
                  brightness-200 transition duration-500 hover:scale-110"
                />
              </div>
              <div className="row-start-5 row-end-6 overflow-hidden">
                <Image
                  src="/imgs/cufflink-3.jpg"
                  alt="Image 2"
                  layout="responsive"
                  width={1921}
                  height={1261}
                  //fill
                  className="object-cover  overflow-clip
                  brightness-200 transition duration-500 hover:scale-110"
                />
              </div>
            </div>           
            <div className="flex flex-col gap-2">
              <div className="row-span-1 overflow-hidden">
                <Image
                  src="/imgs/cufflink-4.jpg"
                  alt="Image 3"
                  layout="responsive"
                  width={1921}
                  height={1261}
                  //fill
                  className="object-cover  overflow-clip
                  brightness-200 transition duration-500 hover:scale-110"
                />
              </div>
              <div className="row-start-2 row-end-6 overflow-hidden">
                <Image
                  src="/imgs/cufflink-5.jpg"
                  alt="Image 4"
                  layout="responsive"
                  width={1921}
                  height={2576}
                  //fill
                  className="object-cover  overflow-clip
                  brightness-200 transition duration-500 hover:scale-110"
                />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AvantGrid