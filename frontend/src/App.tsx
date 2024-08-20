import { ExploreMenu } from "./components/explore/exploreMenu";
import { Header } from "./components/header/header";
import { HeroSection } from "./components/heroSection";
import { Line } from "./components/line";
import { TopDishes } from "./components/topDishes/topDishes";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="md:mx-[10%] flex flex-col gap-8">
        <HeroSection />  
        <ExploreMenu />
        <Line />
        <TopDishes />
      </main>
    </div>
  );
}

export default App;
