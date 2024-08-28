import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftSideNav/LeftNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightSideNav/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const newsData = useLoaderData();

  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <BreakingNews></BreakingNews>
      <div className="grid grid-cols-4">
        <div className="">
          <LeftNav></LeftNav>
        </div>
        <div className=" col-span-2">
          <p className="text-xl font-bold font-poppins pt-4 px-4">
            Dragon News Home
          </p>
          {/* News cards will be rendered below */}
          <div>
            {newsData.map((news) => (
              <NewsCard key={news._id} news={news}></NewsCard>
            ))}
          </div>
        </div>
        <div className="">
          {/* <p>Right Navbar</p> */}
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
