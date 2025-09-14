import React from "react";
import AccessoriesGrid from "@/components/ui/AccessoriesGrid";

const Accessories = () => {
  return (
    <div className="relative min-h-screen bg-black w-screen py-20
      px-6 md:px-8 lg:px-[97px]"
    >
      <div className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
          h-[80%] text-center pb-[20px] 
          md:pb-20 lg:pb-0 lg:items-center lg:top-20">
        <div className="space-y-2 text-left
            md:max-w-[55vw]
            lg:max-w-[30vw]">
          <h2 className="text-[51px] uppercase leading-9 
            mb-7 md:mb-9 md:text-6xl md:leading-11
            lg:text-7xl andrew">
              Matching  
            <br/>
            <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
              Accessories
            </span>
          </h2>
          <p className="text-[21px] capitalize leading-[22px]
            lg:leading-[25px]"
           >
            Audemars Piguet refreshes its accessories collection with six new pairs of Royal Oak Cufflinks.
          </p>         
          <button className="pl-[2px] py-3 text-white font-semibold text-[19px]">
            --------  See Them In Person
          </button>
        </div>
      </div>
      <AccessoriesGrid />
    </div>
  )
}

export default Accessories