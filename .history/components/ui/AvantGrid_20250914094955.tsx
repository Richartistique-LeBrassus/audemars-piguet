import { Pause, Play } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AvantGrid = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    setIsPlaying(false);
  };

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

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.addEventListener("play", handlePlay);
    videoRef.current.addEventListener("pause", handlePause);
    return () => {
      videoRef.current?.removeEventListener("play", handlePlay);
      videoRef.current?.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-2 min-h-fit gap-2 
      md:px-[76px] lg:px-[14px] ">
        <div className="relative w-full h-[71.25vw] sm:h-[86.091vw]
          2xl:h-[75vh]">
          <video 
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover 
            overflow-hidden brightness-105"
            src="/vids/chrome-oak.mp4"
            autoPlay
            muted
            loop
          />
          
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="absolute bottom-10 left-10 z-20 flex items-center justify-center 
            w-12 h-12 bg-transparent hover:cursor-pointer
            duration-300 transition-all"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-neutral-200" />
            ) : ( 
              <Play className="w-4 h-4 text-neutral-200 ml-[2px]" />
            )}
          </button>
        </div>
          <div 
            className="grid grid-cols-2 h-[71.25vw] sm:h-[86.091vw]
            gap-2 
            w-full aspect-[1/2] 2xl:h-[75vh] 2xl:overflow-hidden"
          >        
            <div className="flex flex-col gap-2">
              <div className="row-start-1 row-end-4 overflow-hidden">
                <Image
                  src="/imgs/1.avif"
                  alt="Image 1"
                  layout="responsive"
                  width={2880}
                  height={1920}
                  className="object-cover h-[100%] w-[100%] overflow-clip
                  brightness-125 transition duration-500 hover:scale-105"
                />
              </div>
              <div className="row-start-5 row-end-6 overflow-hidden">
                <Image
                  src="/imgs/3.avif"
                  alt="Image 2"
                  layout="responsive"
                  width={2880}
                  height={1920}
                  className="object-cover h-[100%] w-[100%] overflow-clip
                  brightness-125 transition duration-500 hover:scale-105"
                />
              </div>
            </div>           
            <div className="flex flex-col gap-2">
              <div className="row-span-1 overflow-hidden">
                <Image
                  src="/imgs/2.avif"
                  alt="Image 3"
                  layout="responsive"
                  width={2880}
                  height={1920}
                  className="object-cover h-[100%] w-[100%] overflow-clip
                  brightness-125 transition duration-500 hover:scale-105"
                />
              </div>
            <div className="row-start-2 row-end-6 overflow-clip relative h-full ">
              <Image
                src="/imgs/4.avif"
                alt="Image 4"
                fill
                className="object-cover brightness-110 
                  transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AvantGrid