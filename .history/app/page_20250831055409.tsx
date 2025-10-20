import Accessories from "@/components/Accessories";
import AvantGarde from "@/components/AvantGarde";
import Hero from "@/components/Hero";
//import LatestReleases from "@/components/LatestReleases";
import QuoteBanner from "@/components/QuoteBanner";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <AvantGarde/>
      
      <QuoteBanner />
      <Accessories />{/**/}
    </div>
  );
}
