import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen text-stone-100 
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

      <div className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
      h-full text-center pb-[27px] md:pb-40 lg:pb-0 lg:items-center lg:top-20">
        <div className="space-y-2 text-left
        md:max-w-[55vw] md:space-y-2
        lg:max-w-[30vw]">
            <h1 className="text-[51px] uppercase leading-9 
            mb-7 md:mb-9">
              Royal oak<br/><span className="font-serif italic text-[40px]">offshore</span>
            </h1>
            <p className="text-[21px] md:text-[22px] lg:text-[23px] capitalize leading-[22px]
            lg:leading-[25px]">
              Discover the Royal Oak Offshore Collection - 
              where bold design meets the rhythm of life, 
              flowing from music, to sport, to elegance.
            </p>         
          <button className="pl-[2px] py-3 text-white font-semibold text-[19px]">
           --------  Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;