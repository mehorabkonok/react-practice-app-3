import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import RightNav from "../Shared/RightSideNav/RightNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const { id_parameter } = useParams();

  const [title, setTitle] = useState("");
  const [image_url, setImage_url] = useState("");
  const [details, setDetails] = useState("");
  const [news_category_id, setNewsCategory_id] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const foundNews = data.find((news) => news._id === id_parameter);

        if (foundNews) {
          setTitle(foundNews.title);
          setImage_url(foundNews.image_url);
          setDetails(foundNews.details);
          setNewsCategory_id(foundNews.category_id);
          setLoading(false);
        } else {
          setError("News item not found");
          setLoading(false);
        }
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
        console.log("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id_parameter]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="loading loading-dots loading-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div className="error"> {error} </div>;
  }

  const handleCategoryNewsData = () => {
    console.log("clicked");
  };

  return (
    <div>
      {/* Header and Navbar */}
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col gap-4 border-2 border-grey-500 p-4 col-span-3 shadow-xl">
          <h2 className="text-xl font-bold font-poppins">Detailed News</h2>
          {image_url ? (
            <img src={image_url} alt="" />
          ) : (
            <span className="loading loading-dots loading-lg"></span>
          )}
          <h2 className="text-2xl font-bold font-poppins">{title}</h2>
          <p>{details}</p>
          <div>
            <Link to={`/category/${news_category_id}`}>
              <button
                onClick={handleCategoryNewsData}
                className="btn btn-error rounded-none px-8 text-white"
              >
                <GoArrowLeft />
                All news in this category
              </button>
            </Link>
          </div>
        </div>

        {/* Right NavBar */}
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
