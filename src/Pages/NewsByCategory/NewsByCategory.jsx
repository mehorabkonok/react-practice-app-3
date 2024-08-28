import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightNav from "../Shared/RightSideNav/RightNav";
import NewsCard from "../Home/NewsCard";
import LeftNav from "../Shared/LeftSideNav/LeftNav";

const NewsByCategory = () => {
  const { category_id_parameter } = useParams();

  const [newsByCategory, setNewsByCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  // console.log(category_id_parameter);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const foundNews = data.filter(
          (news) => news.category_id === category_id_parameter
        );
        // console.log(foundNews);
        setNewsByCategory(foundNews);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [category_id_parameter]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCategory = data.filter(
          (category) => category.id === category_id_parameter
        );

        foundCategory.forEach((categoryObj) =>
          setCategoryName(categoryObj.name)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category_id_parameter]);

  return (
    <div>
      <div className="">
        <Header></Header>
        <Navbar></Navbar>
      </div>

      {/* <div>
        {newsData.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div> */}

      <div className="grid grid-cols-4">
        <div>
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-2 p-4">
          <div className="mx-4">
            {categoryName ? (
              <h2 className="text-2xl font-bold font-poppins">
                {categoryName}
              </h2>
            ) : (
              <h2 className="text-2xl font-bold font-poppins">
                News By Category
              </h2>
            )}
          </div>

          {newsByCategory.map((news) => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))}
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsByCategory;
