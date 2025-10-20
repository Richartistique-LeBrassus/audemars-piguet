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
    <div className="flex flex-col max-w-sm w-full text-stone-100">
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-semibold uppercase tracking-wide">{title}</h3>
        <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-block text-sm font-medium uppercase tracking-wider text-stone-900 relative after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full"
        >
          Discover More
        </Link>
      </div>
    </div>
  )
}

export default Collection