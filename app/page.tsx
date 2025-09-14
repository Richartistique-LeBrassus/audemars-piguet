"use client";
import Accessories from "@/components/Accessories";
import AvantGarde from "@/components/AvantGarde";
import CollectionStories from "@/components/CollectionStories";
import Footer from "@/components/Footer";
import Genesis from "@/components/Genesis";
import Hero from "@/components/Hero";
import LatestReleases from "@/components/LatestReleases";
import Nav from "@/components/Nav";
import OtherCollections from "@/components/OtherCollections";
import QuoteBanner from "@/components/QuoteBanner";
import SearchWatches from "@/components/SearchWatches";
import SplashScreen from "@/components/ui/SplashScreen";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {showSplash ? (
          <SplashScreen />
        ) : (
        <div className="w-full overflow-clip">
          <Nav />
          <Hero />
          <AvantGarde/>
          <LatestReleases />
          <QuoteBanner />
          <CollectionStories />
          <Genesis />
          <SearchWatches />
          <Accessories />
          <OtherCollections />
          <Footer />
        </div>
      )}
    </>
  );
}