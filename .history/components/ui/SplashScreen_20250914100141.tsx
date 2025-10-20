"use client";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const SplashScreen = () => {
  const [isMinDurationDone, setIsMinDurationDone] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
  if (!isClient) return;

  setShouldShow(true);
  setIsMinDurationDone(false);
  setIsPageLoaded(false);

  const minTimer = setTimeout(() => setIsMinDurationDone(true), 2000);
  const handleLoad = () => setIsPageLoaded(true);

  if (document.readyState === 'complete') {
    setIsPageLoaded(true);
  } else {
    window.addEventListener('load', handleLoad);
  }

  return () => {
    clearTimeout(minTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname, isClient]);

  useEffect(() => {
    if (isMinDurationDone && isPageLoaded) {
      setShouldShow(false);
    }
  }, [isMinDurationDone, isPageLoaded]);

  return (
    <AnimatePresence mode="wait">
      {shouldShow && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-50"
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeIn' }}
            className="fixed inset-0 bg-neutral-50 z-[9999] flex flex-col 
            items-center justify-center gap-2"
          >
              <motion.img
                src="/imgs/logo-blk.png"
                alt="Audemars Piguet Logo"
                className="w-40 h-fit 
                  sm:w-48 lg:w-52 2xl:w-56
                  mb-8 mt-4
                "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              />                 
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
};

export default SplashScreen;