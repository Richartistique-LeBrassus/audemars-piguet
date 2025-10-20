"use client"
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 bg-red-950 z-[9999] flex flex-col 
      items-center justify-center gap-2"
    >
      <motion.img
        src="/imgs/logo-white.svg"
        alt="Audemars Piguet Logo"
        className="w-24 h-24 mb-8 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="w-35 h-1 bg-white rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "7rem" }}
        transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
      />
    </motion.div>
  )
};

export default SplashScreen;