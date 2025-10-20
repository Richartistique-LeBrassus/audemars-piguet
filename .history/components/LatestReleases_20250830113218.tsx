import React from "react";
import Collection from "./Collection";

const LatestReleases = () => {
  const releases = [
    {
      image: "/imgs/sand-gold.avif",
      title: "A New 'Sand Gold' Shade",
      description: "The new Royal Oak Selfwinding Flying Tourbillon Openworked introduces a new 18-carat gold alloy, called sand gold.",
      href: "/watches/royal-oak-selfwinding",
    },
    {
      image: "/imgs/s-winding.avif", 
      title: "Royal Oak Selfwinding",
      description: "Audemars Piguet has collaborated with American designer Matthew Williams, founder of the brand 1017 ALYX 9SM, on the design of a series of Royal Oak and Royal Oak Offshore that combines the Manufacture's recognisable codes with the designer's refined touch.",
      href: "/watches/royal-oak-selfwinding",
    },
    {
      image: "/imgs/perpetual-calendar.avif", 
      title: "Royal Oak Perpetual Calendar",
      description: "Designed for adventurous spirits, combining sportiness and elegance.",
      href: "/watches/royal-oak-offshore",
    },
    {
      image: "/imgs/frosted.avif", 
      title: "Royal Oak Mini Frosted Gold Quartz",
      description: "A trio of new 23 mm Royal Oak Mini Frosted Gold in a choice of 18-carat yellow, white or pink gold.",
      href: "/watches/royal-oak-offshore",
    },
    {
      image: "/imgs/37.avif", 
      title: "RD#3: a Complicated Timepiece in 37 mm",
      description: "Designed in collaboration with John Mayer, this limited edition pairs an 18-carat white gold case and bracelet with the Manufacture’s new shimmering, embossed “Crystal Sky” dial in a dark blue tone.",
      href: "/watches/royal-oak-offshore",
    },
  ];

  return (
    <div className="relative min-h-screen w-screen bg-black py-27
    px-6 md:px-8 lg:px-[97px]">
      <div
        className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
          h-[80%] text-start pb-[29px]  
          md:pb-[53px] lg:pb-0 lg:items-center lg:top-20">
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
      <div className="flex gap-[10px] overflow-x-auto snap-x snap-mandatory scroll-hide">
        {releases.map((release, idx) => (
          <Collection key={idx} {...release} />
        ))}
      </div>
    </div>
  )
}

export default LatestReleases