import Image from "next/image";
import React from "react";
import Link from "next/link";

interface ReleaseCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

const Collection = ({ image, title, description, href }: ReleaseCardProps) => {
  return (
    /*<figure className="w-[76.56vw] h-fit">*/
    <figure className="w-[76.56vw] h-fit 
      md:w-80 lg:w-96 snap-start overflow-clip"
    > 
      <div className="relative w-full h-[119.1vw] aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 
          ease-in-out hover:scale-105"
        />
      </div>

      <div className="mt-4 space-y-3 pl-1 pr-3">
        <h3 className="text-[21px] font-semibold capitalize tracking-wide">{title}</h3>
        <p className="text-[22px] leading-6">
          {description}
        </p>
        <Link
          href={href}
          className="
          inline-block text-lg font-medium capitalize 
          tracking-wider relative after:absolute after:left-0 
          after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-stone-900 
          after:transition-all after:duration-300 hover:after:w-full"
        >
          Discover More
        </Link>
      </div>
    </figure>
  )
}

export default Collection