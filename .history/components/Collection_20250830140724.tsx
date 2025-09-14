import Image from "next/image";
import React from "react";
import Link from "next/link";

"use client";

import { useRef } from "react";
import Collection from "./Collection";
import { ChevronLeft, ChevronRight } from "lucide-react"; // lightweight icons

interface ReleaseCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export default function CollectionsRow({ items }: { items: ReleaseCardProps[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >
        {items.map((item, idx) => (
          <Collection key={idx} {...item} />
        ))}
      </div>

      {/* Left Arrow (only on md+) */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow hover:bg-white transition"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>

      {/* Right Arrow (only on md+) */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 rounded-full shadow hover:bg-white transition"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
