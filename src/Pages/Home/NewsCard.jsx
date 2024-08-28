import PropTypes from "prop-types"; // ES6
import StarRating from "./StarRating";
import { IoEyeSharp } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  //   console.log(news);

  const { author, _id, rating, title, image_url, details, total_view } = news;

  const starRatingNumber = rating.number;
  //   console.log(starRatingNumber);

  return (
    <div className="border-2 border-grey-500 rounded-lg shadow-xl m-4">
      <div className="flex justify-between items-center p-4 border bg-gray-200">
        <div className="flex items-center gap-2 ">
          <img
            className="h-9 rounded-full"
            src={author.img}
            alt="author image"
          />
          <span className="flex flex-col font-poppins">
            <p className="font-bold text-base">{author.name}</p>
            <p>{author.published_date}</p>
          </span>
        </div>
        <div className="flex gap-2 text-3xl">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className=" m-4 flex flex-col gap-4 ">
        <h2 className="text-xl font-bold font-poppins">{title}</h2>
        <img src={image_url} alt="" />
        {/* <p>{details}</p> */}
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link
              to={`/news/${_id}`}
              className="text-orange-500 font-bold block px-2 p-1 border-2 border-orange-500 rounded-md w-fit hover:bg-orange-500 hover:text-white"
            >
              Read More
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}

        <hr />
        <div className="flex justify-between text-2xl">
          <span>
            <StarRating starRatingNumber={starRatingNumber}></StarRating>
          </span>
          <span className="flex items-center gap-2">
            <IoEyeSharp />
            <p>{total_view}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.object,
};
