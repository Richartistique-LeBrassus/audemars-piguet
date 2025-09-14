import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchWatches = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-50 text-black
      pt-12 px-6 md:px-8"
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

      <div className="relative w-full">
        <div className="right-0 top-1/3 -translate-y-1/2 text-black">
          <SlidersHorizontal size={22} />
        </div>
      </div>

    </div>
  )
}

export default SearchWatches