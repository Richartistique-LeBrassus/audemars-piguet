// components/Hero.tsx

import React from 'react';
import Image from 'next/image'; // Use this for optimized image handling in Next.js

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] bg-gray-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/path-to-your-hero-image.jpg" // Replace with your image
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center">
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl font-bold">
            Welcome to the Future of Timekeeping
          </h1>
          <p className="text-lg">
            Explore the extraordinary craftsmanship and timeless beauty of Audemars Piguet.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;