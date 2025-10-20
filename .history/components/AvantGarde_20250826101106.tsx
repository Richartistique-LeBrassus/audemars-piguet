import Image from 'next/image'
import React from 'react'

const AvantGarde = () => {
  return (
    <div className="min-h-screen w-full bg-black px-11 py-[3.3rem]">
      <div className="flex flex-col pt-[64px]">
        <div className="space-y-2 text-left
        md:max-w-[55vw]
        lg:max-w-[30vw]">
          <h2 className="text-[51px] uppercase leading-10
          mb-7 md:mb-9 md:text-6xl md:leading-11
          lg:text-7xl andrew tracking-widest">
            From Avant-garde
           <br/>
           <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px] tracking-normal">
            to icon
           </span>
          </h2>
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

       
    <div className="lookbook-container max-w-screen-xl mx-auto py-12 px-6 flex flex-col md:flex-row gap-8">
      <div className="video-container flex-1">
        <div className="relative h-0 pb-[56.25%]">
          {/*<iframe
            className="absolute top-0 left-0 w-full h-full"
            src="/vids/chrome-oak.mp4"
            title="Watch Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />*/}

          <video 
            className="absolute top-0 left-0 w-full h-full"
            src="/vids/chrome-oak.mp4"
            autoPlay
            muted
            loop
          >
          </video>
        </div>
      </div>

      {/* Right: Grid */}
      <div className="lookbook-grid flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="grid-item relative overflow-hidden">
          <Image
            src="/imgs/1.avif"
            alt="Image 1"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="grid-item relative overflow-hidden">
          <Image
            src="/imgs/2.avif"
            alt="Image 2"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="grid-item relative overflow-hidden">
          <Image
            src="/imgs/3.avif"
            alt="Image 3"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="grid-item relative overflow-hidden">
          <Image
            src="/imgs/4.avif"
            alt="Image 4"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default AvantGarde