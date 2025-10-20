"use client";
import AvantGrid from "./ui/AvantGrid";
import { motion } from "framer-motion";
import React from "react";

const AvantGarde = () => {
  return (
    <div className="min-h-fit w-full bg-black px-[45px] 
    md:px-16 lg:px-[188px] lg:py-[90px] py-[3.3rem]">
      <div className="flex flex-col md:flex-row pt-[64px] pb-22 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2 text-left md:flex md:flex-row justify-between
          md:w-full md:gap-12 lg:gap-12 xl:gap-12">
          <div className="md:">
            <h2
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
              octagonal bezel with eight hexagonal screws, guilloché &quot;Tapisserie&quot; dial, 
              and integrated bracelet.
            </p> 
          </div>        
        </motion.div>
      </div>  
      <AvantGrid />
    </div>
  )
}

export default AvantGarde