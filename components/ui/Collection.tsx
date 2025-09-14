import Image from "next/image";
import React from "react";

interface ReleaseCardProps {
  image: string;
  title: string;
  description: string;
}

const Collection = ({ image, title, description }: ReleaseCardProps) => {
  return (
    <figure className="w-[76.56vw] h-fit cursor-pointer
      md:w-96
      snap-start overflow-clip"
    > 
      <div className="relative w-full h-[101.42vw] 
        md:h-[34.01vw] lg:h-[22.52vw]
        aspect-[4/5] overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4 space-y-3 pl-1 pr-3">
        <h3 className="text-[21px] font-semibold capitalize tracking-wide
          leading-[26px]">{title}</h3>
        <p className="text-[22px] leading-6">
          {description}
        </p>
          <div className="group flex flex-row items-center w-fit cursor-pointer">
            <span
              className="relative inline-block w-[47px]
              after:absolute after:left-0 after:top-1/2 
              after:h-[1px] after:w-full after:bg-white 
              after:origin-right after:transition-all after:duration-500 
              group-hover:after:scale-x-[0.25]"
            ></span>
            <p className="pl-3 text-white font-semibold text-[19px]">
              Discover More
            </p>
          </div>
      </div>
    </figure>
  )
}

export default Collection