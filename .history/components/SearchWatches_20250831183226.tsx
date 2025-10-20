import React from "react";
import { Search, SlidersHorizontal, ArrowLeftRight } from "lucide-react";
import SearchResults from "./SearchResults";

const SearchWatches = () => {
  const watches = [
    {
      image: "/imgs/minimal-s-winding.avif",
      reference: "77350CE.OO.1266CE.03.A",
      name: "Royal Oak",
      type: "Selfwinding",
      details: "44mm, Black Ceramic",
    },
    {
      image: "/imgs/grande.avif",
      reference: "15500ST.OO.1220ST.01",
      name: "Royal Oak",
      type: "Selfwinding",
      details: "41mm, Stainless Steel",
    },
        {
      image: "/imgs/minute.avif",
      reference: "Ref. 26591CE.OO.D002CA.01",
      name: "Royal Oak",
      type: "Minute Repeater Supersonnerie",
      details: "44mm, Black Ceramic",
    },
    {
      image: "/imgs/selfwinding.avif",
      reference: "26240CE.OO.1225CE.02",
      name: "Royal Oak",
      type: "Selfwinding Chronograph",
      details: "41mm, Stainless Steel",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-50 text-black
      py-12 px-6 md:px-8"
    >
      <div className="relative max-w-xs mx-auto md:mx-0">
        <input
          type="text"
          placeholder="Search For Watches"
          className="w-full bg-transparent border-b border-black 
          focus:border-black outline-none text-black 
          placeholder-neutral-400 pb-4 pr-10 text-xl"
        />
        <div className="absolute right-0 top-1/3 -translate-y-1/2 text-black">
          <Search size={22} />
        </div>
      </div>  

      <div className="w-full flex justify-between my-24">
        <div className="text-black inline-flex">
          <SlidersHorizontal size={22} />
          <p className="pl-5 font-bold text-xl">Filters</p>
        </div>

        <div className="text-black">
          <ArrowLeftRight size={22} />
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <h2 className="uppercase text-[29px]">Royal Oak</h2>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
          w-full min-h-fit gap-4">
          {watches.map((watch, idx) => (
            <SearchResults key={idx} {...watch} />
          ))}
        </section>  
      </div>
    </div>
  )
}

export default SearchWatches