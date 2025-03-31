import Description from "@/components/descriptions/description";
import HomePagesHead from "@/components/homePagesHead/homePagesHead";
import HomePageShop from "@/components/homePageShop/homePageShop";
import TopItems from "@/components/TopItems/TopItems";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <HomePagesHead />
      <TopItems />
      <HomePageShop />
      <Description />
      <FeaturedProducts />
    </div>
  );
};

export default Home;