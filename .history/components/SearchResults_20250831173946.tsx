import Image from "next/image";
import React from "react";

interface SearchResultsProps {
  image: string;
  reference: string;
  name: string;
  type: string;
  details: string;
}

const SearchResults = ({
  image,
  reference,
  name,
  type,
  details,
}: SearchResultsProps ) => {
  return (
    <div className="w-full flex flex-col">
      <div>
        <h2 className="uppercase">Royal Oak</h2>
      </div>  
      <div className="grid grid-cols-1 w-full min-h-fit gap-2">
        <div className="flex flex-col items-center bg-neutral-600
          text-center space-y-3 w-full max-w-xs cursor-pointer group"
        >
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
    
          {/* Text */}
          <div className="space-y-1">
            <p className="text-sm tracking-wide text-stone-500">{reference}</p>
            <h3 className="text-lg font-semibold uppercase">{name}</h3>
            <p className="text-base italic">{type}</p>
            <p className="text-sm text-stone-600">{details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults