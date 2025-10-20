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
    <>
      {/*<div>
        <h2 className="uppercase">Royal Oak</h2>
      </div>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4
        w-full min-h-fit space-y-2"
      >*/}
        <div className="flex flex-col items-center bg-neutral-200 py-6 px-3
          text-center space-y-3 w-full max-w-xs cursor-pointer group"
        >
          {/*<div className="relative w-full aspect-[3/4] overflow-hidden">*/}
          <div className="relative w-full h-[21.82vh] overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
    
          {/* Text */}
          <div className="space-y-2">
            <p className="text-sm tracking-wide text-stone-500 mt-4 font-bold">{reference}</p>
            <h3 className="text-[22px] font-bold">{name}</h3>
            <p className="text-[22px] italic">{type}</p>
            <p className="text-sm text-stone-600">{details}</p>
          </div>
        </div>
      {/*</div>*/}
    </>
  )
}

export default SearchResults