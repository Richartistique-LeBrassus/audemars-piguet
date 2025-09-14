import Image from "next/image";
import React from "react";

interface ReleaseCardProps {
  image: string;
  title: string;
  description: string;
  linkTitle: string;
}

const BehindCollection = ({ image, title, description, linkTitle }: ReleaseCardProps) => {
  return (
    <figure className="w-fit h-fit cursor-pointer snap-start overflow-clip"
    > 
      <div className="relative w-[83.8vw] h-[54.92vw] 
        md:w-[41.82vw] md:h-[27.42vw]
        mdp:w-fit mdp:h-fit
        overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain mdp:object-cover"
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
            <p className="pl-3 text-lg capitalize font-semibold
              tracking-wider">
              {linkTitle}
            </p>
          </div>
      </div>
    </figure>
  )
}

export default BehindCollection