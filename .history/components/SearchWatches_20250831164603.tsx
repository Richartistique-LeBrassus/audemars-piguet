import React from "react";
import { Search } from "lucide-react";

const SearchWatches = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-50 text-black
    px-6 md:px-8">
      <div className="relative max-w-xs mx-auto md:mx-0">
        <input
          type="text"
          placeholder="Search for watches"
          className="w-full bg-transparent border-b border-black 
          focus:border-black outline-none text-black 
          placeholder-neutral-400 py-2 pr-10"
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-black">
          <Search size={20} />
        </div>
      </div>  
    </div>
  )
}

export default SearchWatches