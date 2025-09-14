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
    <div className="flex flex-col items-center bg-neutral-200 py-6 px-5
      text-center space-y-3 w-full  cursor-pointer group"
    >
      <div className="relative w-full h-[21.82vh] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <div className="space-y-1">
        <p className="text-base tracking-wide text-neutral-500 mt-4 font-bold">{reference}</p>
        <h3 className="text-[22px] font-bold">{name}</h3>
        <p className="text-[22px] italic">{type}</p>
        <p className="text-lg text-neutral-500">{details}</p>
      </div>
    </div>
  )
}

export default SearchResults