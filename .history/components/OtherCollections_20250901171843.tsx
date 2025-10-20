import React from 'react'
import OtherCollectionsRow from './ui/OtherCollectionsRow';

const OtherCollections = () => {
  const otherCollection = [
    {
      image: "/imgs/code-59.avif",
      title: "",
      description: "",
      href: "/watches/royal-oak-selfwinding",
    },
    {
      image: "/imgs/offshore.avif", 
      title: "",
      description: "",
      href: "/watches/royal-oak-selfwinding",
    },
    {
      image: "/imgs/concept.avif", 
      title: "",
      description: "",
      href: "/watches/royal-oak-offshore",
    },
    {
      image: "/imgs/remaster.avif", 
      title: "",
      description: "",
      href: "/watches/royal-oak-offshore",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-black py-27
      px-6 md:px-8 xl:gap-0
      lg:flex lg:inine-flex lg:px-[97px] lg:gap-9">
      <div
        className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
          h-[80%] text-start pb-[29px]  
          md:pb-11 lg:pb-0 lg:items-center lg:top-20
          ">
        <div className="space-y-2 text-left
            md:max-w-[55vw]
            lg:max-w-[30vw]">
          <h1
            className="text-[51px] uppercase leading-9 
              mb-7 md:mb-9 md:text-6xl md:leading-11
              lg:text-7xl andrew">
              OUR LATEST 
            <br/>
            <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
              RELEASES
            </span>
          </h1>      
          <button className="pl-[2px] text-white font-semibold text-[19px] capitalize">
            --------  Browse the full collection
          </button>
        </div>
      </div>  
      <div 
        className="flex gap-[10px] 
        overflow-x-auto snap-x snap-mandatory  scrollbar-hide md:scrollbar-default
        lg:-mr-[97px] 2xl:-ml-96"
      >
        <OtherCollectionsRow items={otherCollection} />
      </div>
    </div>
  )
}

export default OtherCollections