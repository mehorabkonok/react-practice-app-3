import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types"; //

const StarRating = ({ starRatingNumber }) => {
  // Round the star number
  const roundedRating = Math.round(starRatingNumber);

  // Create an empty array that will hold the stars
  const stars = [];

  // Fill the full and half start base on the rounded rating
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} style={{ color: "#ffc107" }} />);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(<FaStarHalfAlt key={i} style={{ color: "#ffc107" }} />);
    } else {
      stars.push(<FaRegStar key={i} style={{ color: "#ffc107" }} />);
    }
  }

  return (
    <div className="flex gap-2">
      <div className="flex gap-1">{stars}</div>
      <div>{starRatingNumber}</div>
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  starRatingNumber: PropTypes.number,
};
