import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen text-white 
    px-6 md:px-7">
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
      h-full text-center pb-[27px] md:pb-40">
        <div className="max-w-lg space-y-6 text-left">
          <h1 className="text-4xl uppercase font-extralight">
            Royal oak<br/>offshore
          </h1>
          <p className="text-xl capitalize">
            Discover the Royal Oak Offshore Collection - 
            where bold design meets the rhythm of life, 
            flowing from music, to sport, to elegance.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;