import { Link, NavLink } from "react-router-dom";
import DNLogo from "../../../assets/dragon_news_logo_thumbnail.png";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
// import auth from "../../../firebase/firebase.config";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    console.log("User is signing out");

    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log("Current user:", user);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="border">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="" to="/">
            <img
              className="h-9 rounded-full border-1 border-black"
              src={DNLogo}
              alt="DNLogo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="">
            {user ? (
              <p className="border border-dashed px-2">{user.displayName}</p>
            ) : (
              ""
            )}
          </div>
          {user?.photoURL ? (
            <img className="rounded-full w-10 m-2" src={user.photoURL} />
          ) : (
            <FaUserCircle className="text-5xl mx-2"></FaUserCircle>
          )}

          <div className="">
            <button onClick={handleSignOut} className="btn px-6">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
