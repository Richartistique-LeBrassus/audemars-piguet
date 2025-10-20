"use client"
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 bg-neutral-50 z-[9999] flex flex-col 
      items-center justify-center gap-2"
    >
      <motion.img
        src="/imgs/logo-blk.png"
        alt="Audemars Piguet Logo"
        //className="w-24 h-24 mb-8 mt-4"
        className="w-40 h-fit 
          sm:w-48 lg:w-52 2xl:w-56
          mb-8 mt-4
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      />
    </motion.div>
  )
};

export default SplashScreen;