import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen text-white 
    px-6 md:px-8 lg:px-[97px]">
      <div className="absolute inset-0">
        <Image
          src="/imgs/hero-bg.jpg" 
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 flex items-end justify-start w-full 
      h-full text-center pb-[27px] md:pb-40 lg:">
        <div className="max-w-xs space-y-6 text-left">
          <h1 className="text-4xl uppercase">
            Royal oak<br/><span className="font-serif italic font-light">offshore</span>
          </h1>
          <p className="text-xl capitalize">
            Discover the Royal Oak Offshore Collection - 
            where bold design meets the rhythm of life, 
            flowing from music, to sport, to elegance.
          </p>
          <button className="px-6 py-3 text-white">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;