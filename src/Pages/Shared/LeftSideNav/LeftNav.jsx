import PropTypes from "prop-types";
import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";
import { CiCalendar } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState();

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
  };

  // console.log(isActive);

  return (
    <div className="">
      <div className=" py-4">
        <h2 className="text-xl font-bold font-poppins mb-4">All Category</h2>
        <div>
          {/* <h2 className=" px-4 py-3  bg-gray-200 text-xl font-bold font-poppins">
            National News
          </h2> */}
          {categories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              className={`block py-2 px-8 border-b font-poppins hover:bg-gray-200 hover:font-bold ${
                activeCategory === category.id ? "bg-gray-200 font-bold" : ""
              }`}
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="card bg-base-100 shadow-xl p-4">
          <figure>
            <img className="border-2 border-dashed" src={one} alt="one" />
          </figure>
          <div className="mt-2">
            <h2 className="text-xl font-poppins font-bold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-4 items-center mt-2">
              <p>Sports</p>
              <span className="text-2xl">
                <CiCalendar />
              </span>
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl p-4">
          <figure>
            <img className="border-2 border-dashed" src={two} alt="one" />
          </figure>
          <div className="mt-2">
            <h2 className="text-xl font-poppins font-bold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-4 items-center mt-2">
              <p>Sports</p>
              <span className="text-2xl">
                <CiCalendar />
              </span>
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl p-4">
          <figure>
            <img className="border-2 border-dashed" src={three} alt="one" />
          </figure>
          <div className="mt-2">
            <h2 className="text-xl font-poppins font-bold">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-4 items-center mt-2">
              <p>Sports</p>
              <span className="text-2xl">
                <CiCalendar />
              </span>
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;

LeftNav.propTypes = {
  categoryData: PropTypes.object,
};
