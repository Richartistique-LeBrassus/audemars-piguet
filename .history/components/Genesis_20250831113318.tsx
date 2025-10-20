"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Genesis = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section className="relative w-full h-[165vh] text-white
      px-6 md:px-8 lg:px-[97px]">
      <div className="absolute inset-0">
        <video 
          src="/vids/genesis.mp4" 
          className="absolute w-full h-full object-cover brightness-75"
          muted
          autoPlay
          loop
        >            
        </video>
          <div 
            className="absolute inset-x-0 top-0 h-40 
            bg-gradient-to-b from-black to-transparent pointer-events-none"
          >
          </div>
          <div 
            className="absolute inset-x-0 bottom-0 h-40 
            bg-gradient-to-t from-black to-transparent pointer-events-none"
          >
          </div>
      </div>

        <div
          className="relative z-10 flex items-center justify-center w-full drop-shadow-2xl
          h-full text-center ">
          <motion.div
            ref={ref}
            style={{ opacity, y }}
            className="space-y-2 text-center
            md:max-w-[55vw]
            lg:max-w-[30vw]"
          >
            <h2
              className="text-[51px] uppercase leading-9 
              mb-7 md:mb-9 md:text-6xl md:leading-11
              lg:text-7xl andrew"
            >
              MEET THE
              <br/>
              <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
                iconic <br/> ROYAL OAK
              </span>
            </h2>
          </motion.div>
      </div>
    </section>
  )
}

export default Genesis