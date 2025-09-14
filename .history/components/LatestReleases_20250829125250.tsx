import React from "react";

const LatestReleases = () => {
  return (
    <div className="relative min-h-screen w-screen bg-black">
      <div
        className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
          h-[80%] text-center pb-[27px] 
          md:pb-40 lg:pb-0 lg:items-center lg:top-20">
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
          <p className="text-[21px] capitalize leading-[22px]
                lg:leading-[25px]">
            Since its groundbreaking debut in 1972, 
            the Royal Oak has stood as a symbol of audacity and innovation in the world of Haute Horlogerie, 
            blending technological advances with ancestral craftsmanship.
          </p>         
          <button className="pl-[2px] py-3 text-white font-semibold text-[19px]">
            --------  Discover More
          </button>
        </div>
      </div>       
    </div>
  )
}

export default LatestReleases