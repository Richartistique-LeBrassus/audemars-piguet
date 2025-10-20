"use client";
import ViewCollection from "./ViewCollection";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import React, { useEffect, useRef, useState } from "react";

interface ViewCollectionProps {
  img: string;
  title: string;
}

export default function OtherCollectionsRow({ items }: { items: ViewCollectionProps[] }) {
  const stories = [
    {
      img: "/imgs/code-59.avif",
    },
    {
      img: "/imgs/offshore.avif",
    },
    {
      img: "/imgs/concept.avif",
    },
    {
      img: "/imgs/remaster.avif",
    },
  ];

  const wrapperRef = useRef<HTMLDivElement | null>(null); 
  const scrollRef = useRef<HTMLDivElement | null>(null); 
  const [arrowTopPx, setArrowTopPx] = useState<number | null>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 1, 
        duration: 2,
        ease: "easeOut" as const, 
      },
    }),
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  const computeArrowTop = () => {
    if (!wrapperRef.current || !scrollRef.current) return;

    const imgs = scrollRef.current.querySelectorAll("img");
    if (!imgs.length) return;

    const imgEl = Array.from(imgs).find((i) => (i as HTMLImageElement).complete) as HTMLImageElement
                || (imgs[0] as HTMLImageElement);


    let imageContainer: HTMLElement | null = imgEl.parentElement;
    while (imageContainer && imageContainer !== scrollRef.current) {
      if (imageContainer.clientHeight && imageContainer.clientHeight > 20) break;
      imageContainer = imageContainer.parentElement;
    }
    if (!imageContainer) imageContainer = imgEl;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const imageRect = imageContainer.getBoundingClientRect();

    const centerY = imageRect.top - wrapperRect.top + imageRect.height / 2;
    setArrowTopPx(Math.round(centerY));
  };

  useEffect(() => {
    computeArrowTop();

    const ro = new ResizeObserver(() => computeArrowTop());
    if (scrollRef.current) ro.observe(scrollRef.current);

    window.addEventListener("resize", computeArrowTop);

    const imgs = scrollRef.current?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => img.addEventListener("load", computeArrowTop));

    const t = window.setTimeout(computeArrowTop, 300);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computeArrowTop);
      imgs.forEach((img) => img.removeEventListener("load", computeArrowTop));
      clearTimeout(t);
    };

  }, [items]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div 
        ref={scrollRef}
        className="flex gap-[10px] 
        overflow-x-auto snap-x snap-mandatory scrollbar-hide md:scrollbar-default
        lg:ml-auto"
      >              
        {stories.map((story, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <ViewCollection img={story.img} title="View Collection" />
          </motion.div>
        ))}
      </div>
    
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="hidden lg:hidden md:flex items-center justify-center absolute left-0 -translate-y-1/2
        w-12 h-12 bg-black/30 rounded-full z-10 border-white/50 border-2
        hover:cursor-pointer shadow hover:bg-black/80 transition ml-3"
        style={{ top: arrowTopPx !== null ? `${arrowTopPx}px` : "50%" }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
    
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="hidden lg:hidden md:flex items-center justify-center absolute right-0 -translate-y-1/2
        w-12 h-12 bg-black/30 rounded-full z-10 border-white/50 border-2
        hover:cursor-pointer shadow hover:bg-black/80 transition mr-3"
        style={{ top: arrowTopPx !== null ? `${arrowTopPx}px` : "50%" }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}