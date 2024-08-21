import { ExploreMenu } from "../components/explore/exploreMenu";
import { HeroSection } from "../components/heroSection";
import { Line } from "../components/line";
import { TopDishes } from "../components/topDishes/topDishes";

export function HomePage() {
  return(
    <>
      <HeroSection />  
      <ExploreMenu />
      <Line />
      <TopDishes />
    </>
  );
}