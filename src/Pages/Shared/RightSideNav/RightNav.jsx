import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";

import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const RightNav = () => {
  const { signInUserWithGoogle, signInUserWithGithub } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInUserWithGoogle()
      .then(() => {
        console.log("Google sign in successfull");
        // console.log("Result:", result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInUserWithGithub()
      .then(() => {
        console.log("Github sign in successfull!");
        // console.log(result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Login with section */}
      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-lg font-bold">Login With</h2>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline text-base text-blue-500"
        >
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline text-base"
        >
          <FaGithub></FaGithub> Login With GitHub
        </button>
      </div>

      {/* Find Us On section */}
      <div className=" p-4">
        <h2 className="text-lg font-bold mb-2">Find Us On</h2>
        <div className="">
          <a
            className="flex items-center gap-4 pl-4 text-base border rounded-t-lg p-2"
            href="https://web.facebook.com/"
          >
            <TiSocialFacebook className="text-2xl text-blue-500 bg-gray-50 rounded-full shadow-md" />
            Facebook
          </a>
          <a
            className="flex items-center gap-4 pl-4 text-base border-x p-2"
            href="https://twitter.com/"
          >
            <TiSocialTwitter className="text-2xl text-sky-500 bg-gray-50 rounded-full shadow-md" />
            Twitter
          </a>
          <a
            className="flex items-center gap-4 pl-4 text-base border rounded-b-lg p-2"
            href="https://www.instagram.com/"
          >
            <AiOutlineInstagram className="text-2xl text-red-500 bg-gray-50 rounded-full shadow-md" />
            Instagram
          </a>
        </div>
      </div>
      {/* Q-Zone section */}
      <div className="flex flex-col gap-2 p-4 bg-gray-100">
        <h2 className="text-lg font-bold">Q Zone</h2>
        <div className="flex items-center">
          <img className="border-2 border-dashed" src={qzone1} alt=""></img>
        </div>
        <div className="flex items-center">
          <img className="border-2 border-dashed" src={qzone2} alt=""></img>
        </div>
        <div className="flex items-center">
          <img className="border-2 border-dashed" src={qzone3} alt=""></img>
        </div>
      </div>
      {/* Learn More section */}
      <div className="bg-black text-white text-center px-12 py-16 flex flex-col gap-6">
        <h2 className="text-3xl">Create an Amazing Newspaper</h2>
        <p className="text-base">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn btn-error rounded-none px-8 text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightNav;
