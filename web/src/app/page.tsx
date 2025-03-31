// import HomePageForum from "@/components/homePageForum/homePageForum";
import Description from "@/components/descriptions/description";
import HomePagesHead from "@/components/homePagesHead/homePagesHead";
import HomePageShop from "@/components/homePageShop/homePageShop";
import LiveChat from "@/components/liveChat/liveChat";
// import Navbar from "@/components/navbar/navbar";
import TopItems from "@/components/TopItems/TopItems";
const Home = () => {
  

  return (
    <div>
     <LiveChat/>
     <HomePagesHead/>
      <TopItems/>
      {/* <Navbar/> */}
      <HomePageShop/>
      {/* <HomePageForum/> */}
      <Description/>
    </div>
  );
};

export default Home;