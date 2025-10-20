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
    /*<figure className="w-72 md:w-80 lg:w-96 snap-start">*/
      <figure className="w-[85vw] md:w-80 lg:w-96 snap-start"> 
      <div className="relative w-full h-[39.1vh] aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 
          ease-in-out hover:scale-105"
        />
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="text-lg font-semibold uppercase tracking-wide">{title}</h3>
        <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
          {description}
        </p>
        <Link
          href={href}
          className="inline-block text-sm font-medium uppercase 
          tracking-wider text-stone-900 relative after:absolute after:left-0 
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