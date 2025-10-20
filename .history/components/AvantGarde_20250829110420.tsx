"use client";
import { gsap } from "gsap";
import AvantGrid from "./ui/AvantGrid";
import React, { useEffect, useRef } from "react";

const AvantGarde = () => {
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
    <div className="min-h-fit w-full bg-black px-[45px] 
    md:px-16 lg:px-[188px] lg:py-[90px] py-[3.3rem]">
      <div className="flex flex-col md:flex-row pt-[64px] pb-22 w-full">
        <div className="space-y-2 text-left md:flex md:flex-row justify-between
        md:w-full md:gap-12 lg:gap-12 xl:gap-12">
          <div className="md:">
            <h2 
              ref={textRef}
              className="text-[51px] uppercase leading-10
              mb-7 md:mb-9 md:text-[54px] md:leading-12
              lg:text-7xl andrew tracking-widest">
              From Avant-garde
             <br/>
             <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px] tracking-normal">
              to icon
             </span>
            </h2>
          </div>  
          <div className="2xl:w-[40%]">
            <p className="max-w-[450px] 
            text-[22px] lg:text-[23px] capitalize leading-6
            lg:leading-[25px]">
              Designed by Gérald Genta, 
              the Royal Oak revolutionised traditional watchmaking codes with its 
              hand-finished body of stainless steel, 
              octagonal bezel with eight hexagonal screws, guilloché "Tapisserie" dial, 
              and integrated bracelet.
            </p> 
          </div>        
        </div>
      </div>  
      <AvantGrid />
    </div>
  )
}

export default AvantGarde