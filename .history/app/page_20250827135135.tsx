import Accessories from "@/components/Accessories";
import AvantGarde from "@/components/AvantGarde";
import Hero from "@/components/Hero";
import QuoteBanner from "@/components/QuoteBanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <AvantGarde/>
      <Accessories />
      {/*<QuoteBanner />*/}
    </div>
  );
}
