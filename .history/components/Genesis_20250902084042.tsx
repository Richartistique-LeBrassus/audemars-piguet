"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Pause, Play } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Genesis = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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
          ref={videoRef}
          src="/vids/genesis.mp4" 
          className="absolute w-full h-full object-cover brightness-75"
          muted
          autoPlay
          loop
        />
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute bottom-10 left-10 z-20 flex items-center justify-center 
            w-12 h-12 bg-transparent hover:cursor-pointer
            transition"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-neutral-600" />
            ) : ( 
              <Play className="w-4 h-4 text-neutral-600 ml-[2px]" />
            )}
          </button>
          <div 
            className="absolute inset-x-0 top-0 h-40 
            bg-gradient-to-b from-black to-transparent pointer-events-none"
          >
          </div>
          <div 
            className="absolute inset-x-0 bottom-0 h-40 
            bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none"
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
            <Link 
              href="https://www.youtube.com/watch?v=vV5ou2rZcCY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2
                className="text-[51px] uppercase leading-9 
                mb-7 md:mb-9 md:text-6xl md:leading-11
                lg:text-7xl andrew hover:cursor-pointer"
              >
                MEET THE
                <br/>
                <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
                  iconic <br/> ROYAL OAK
                </span>
              </h2>
            </Link>
          </motion.div>
      </div>
    </section>
  )
}

export default Genesis