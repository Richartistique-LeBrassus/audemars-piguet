"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import BehindCollection from "./BehindCollection";

interface ReleaseCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  linkTitle: string;
}

export default function CollectionStoriesRow({ items }: { items: ReleaseCardProps[] }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null); // outer relative container (arrows anchored here)
  const scrollRef = useRef<HTMLDivElement | null>(null); // scrollable row
  const [arrowTopPx, setArrowTopPx] = useState<number | null>(null);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 1, // stagger interval
        duration: 2,
        ease: "easeOut" as const, // ✅ cast fixes type error
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

    // find first meaningful image container inside the scroll row
    const imgs = scrollRef.current.querySelectorAll("img");
    if (!imgs.length) return;

    // pick first loaded image (fallback to first if none loaded)
    let imgEl = Array.from(imgs).find((i) => (i as HTMLImageElement).complete) as HTMLImageElement
                || (imgs[0] as HTMLImageElement);

    // climb up from img to find the nearest ancestor that has a height > 20px (likely the image wrapper)
    let imageContainer: HTMLElement | null = imgEl.parentElement;
    while (imageContainer && imageContainer !== scrollRef.current) {
      if (imageContainer.clientHeight && imageContainer.clientHeight > 20) break;
      imageContainer = imageContainer.parentElement;
    }
    if (!imageContainer) imageContainer = imgEl;

    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const imageRect = imageContainer.getBoundingClientRect();

    // compute center Y of image relative to wrapper (px)
    const centerY = imageRect.top - wrapperRect.top + imageRect.height / 2;
    setArrowTopPx(Math.round(centerY));
  };

  useEffect(() => {
    computeArrowTop();

    // Observe size/layout changes of the scroll container
    const ro = new ResizeObserver(() => computeArrowTop());
    if (scrollRef.current) ro.observe(scrollRef.current);

    // Recompute on window resize
    window.addEventListener("resize", computeArrowTop);

    // Recompute when images load
    const imgs = scrollRef.current?.querySelectorAll("img") ?? [];
    imgs.forEach((img) => img.addEventListener("load", computeArrowTop));

    // fallback recompute shortly after mount in case layout stabilizes late
    const t = window.setTimeout(computeArrowTop, 300);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computeArrowTop);
      imgs.forEach((img) => img.removeEventListener("load", computeArrowTop));
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        ref={scrollRef}
        className="flex gap-[10px] overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide w-full"
      >
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <BehindCollection {...item} />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="hidden md:flex items-center justify-center absolute left-0 -translate-y-1/2
        w-12 h-12 bg-black/30 rounded-full z-10 border-white/50 border-2
        hover:cursor-pointer shadow hover:bg-black/80 transition ml-3"
        style={{ top: arrowTopPx !== null ? `${arrowTopPx}px` : "50%" }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="hidden md:flex items-center justify-center absolute right-0 -translate-y-1/2
        w-12 h-12 bg-black/30 rounded-full z-10 border-white/50 border-2
        hover:cursor-pointer shadow hover:bg-black/80 transition mr-3"
        style={{ top: arrowTopPx !== null ? `${arrowTopPx}px` : "50%" }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}