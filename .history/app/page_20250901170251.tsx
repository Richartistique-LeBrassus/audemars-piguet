import Accessories from "@/components/Accessories";
import AvantGarde from "@/components/AvantGarde";
import CollectionStories from "@/components/CollectionStories";
import Footer from "@/components/Footer";
import Genesis from "@/components/Genesis";
import Hero from "@/components/Hero";
import LatestReleases from "@/components/LatestReleases";
import QuoteBanner from "@/components/QuoteBanner";
import SearchWatches from "@/components/SearchWatches";

export default function Home() {
  return (
    <div className="w-full overflow-clip">
      <Hero />
      <AvantGarde/>
      <LatestReleases />
      <QuoteBanner />
      <CollectionStories />
      <Genesis />
      <SearchWatches />
      <Accessories />{/**/}
      <LatestReleases />
      <Footer />
    </div>
  );
}
