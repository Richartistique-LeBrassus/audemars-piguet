import React from "react";
import { motion } from "framer-motion";
import OtherCollectionsRow from "./ui/OtherCollectionsRow";

const OtherCollections = () => {
  const stories = [
    {
      img: "/imgs/code-59.avif",
      title: "trial",
    },
    {
      img: "/imgs/offshore.avif",
      title: "trial",
    },
    {
      img: "/imgs/concept.avif",
      title: "trial",
    },
    {
      img: "/imgs/remaster.avif",
      title: "trial",
    },
  ];
  
  return (
    <div className="relative min-h-screen w-full bg-black pt-27 pb-40
      px-6 md:px-8
      lg:flex md:flex-wrap lg:gap-[78px]">
      <div
        className="relative z-10 flex items-end justify-start w-full drop-shadow-2xl
          h-[80%] text-start lg:px-[97px]
          lg:pb-0 lg:items-center lg:top-20"
        >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2 text-left
            md:max-w-[55vw]
            lg:max-w-[30vw]">
          <h1
            className="text-[51px] uppercase leading-9 
              mb-7 md:mb-9 md:text-6xl md:leading-11
              lg:text-7xl andrew">
              Our Other 
            <br/>
            <span className="serif italic text-[40px] md:text-[45px] lg:text-[54px]">
              Collection
            </span>
          </h1>      
        </motion.div>
      </div> 

      <div 
        className="flex gap-[10px] 2xl:px-[97px]
        overflow-x-auto snap-x snap-mandatory scrollbar-hide md:scrollbar-default
        md:ml-48 lg:ml-auto"
      >
        <OtherCollectionsRow items={stories} />
      </div>
    </div>
  )
}

export default OtherCollections