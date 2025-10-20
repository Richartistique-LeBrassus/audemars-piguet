"use client";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.1,
        duration: 10,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 2,
        ease: 'power2.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="relative w-full h-[120vh] text-stone-50
    px-6 md:px-8 lg:px-[97px]">
      <div className="absolute inset-0">
        <video 
          src="/vids/royaloak-bg.mp4" 
          className="h-full w-full object-cover brightness-105"
          autoPlay
          loop
          muted
        >
        </video>
        <div className="absolute inset-x-0 bottom-0 h-42 
          bg-gradient-to-t from-black to-transparent pointer-events-none">
        </div>
      </div>
    
      <div
        ref={textRef}
        className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
          h-[80%] text-center pb-[27px] 
          md:pb-40 lg:pb-0 lg:items-center lg:top-20">
        <div className="space-y-2 text-left
            md:max-w-[55vw]
            lg:max-w-[30vw]">
          <h1
            className="text-[51px] uppercase leading-9 
              mb-7 md:mb-9 md:text-6xl md:leading-11
              lg:text-7xl andrew">
            MEET THE
            <br/>
            <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
              iconic <br/> ROYAL OAK
            </span>
          </h1>
          <p className="text-[21px] capitalize leading-[22px]
                lg:leading-[25px]">
            Since its groundbreaking debut in 1972, 
            the Royal Oak has stood as a symbol of audacity and innovation in the world of Haute Horlogerie, 
            blending technological advances with ancestral craftsmanship.
          </p>         
          {/*<button className="pl-[2px] py-3 text-white font-semibold text-[19px]">
            --------  Discover More
          </button>*/}
          <Link
            href="#"
            className="relative flex flex-row 
                       after:absolute after:left-0 after:bottom-0 
                       after:h-[1px] after:w-full after:bg-white 
                       after:origin-right after:transition-all after:duration-500 
                       hover:after:scale-x-0"
          >
            View Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;