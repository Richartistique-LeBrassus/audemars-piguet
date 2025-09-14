import React from "react";
import { Search } from "lucide-react";

const SearchWatches = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 text-black">
      <div className="relative max-w-xs mx-auto md:mx-0">
        <input
          type="text"
          placeholder="Search for watches"
          className="w-full bg-transparent border-b border-white/70 
                     focus:border-white outline-none text-black 
                     placeholder-white/70 py-2 pr-10"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-black">
          <Search size={20} />
        </div>
      </div>  
    </div>
  )
}

export default SearchWatches