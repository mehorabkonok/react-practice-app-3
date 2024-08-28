import { Link } from "react-router-dom";
import "./NotFound.css"; // Assuming you are using external CSS

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="not-found-suggestion">
          It might have been moved or the URL might be incorrect.
        </p>
        <Link to="/" className="not-found-home-link">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
