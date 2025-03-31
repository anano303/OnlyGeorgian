import Description from "@/components/descriptions/description";
import HomePagesHead from "@/components/homePagesHead/homePagesHead";
import HomePageShop from "@/components/homePageShop/homePageShop";
import LiveChat from "@/components/liveChat/liveChat";
import TopItems from "@/components/TopItems/TopItems";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import LiveChat from "../components/liveChat/liveChat";

const Home = () => {
  return (
    <div>
      <LiveChat />
      <HomePagesHead />
      <TopItems />
      <HomePageShop />
      <Description />
      <FeaturedProducts />
    </div>
  );
};

export default Home;