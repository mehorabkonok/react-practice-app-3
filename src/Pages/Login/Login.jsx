import { useContext, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RightNav from "../Shared/RightSideNav/RightNav";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [loginMessage, setLoginMessage] = useState(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("User logging in progress");

    const user_email = e.target.email.value;
    const user_password = e.target.password.value;

    // console.log(user_email, user_password);

    signInUser(user_email, user_password)
      .then(() => {
        // console.log(userCredential);
        // console.log(userCredential.user);
        console.log("User logging in successful!");
        setLoginMessage("User login successfull!");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);

        setLoginMessage("User not found.");
      });
  };

  return (
    <div>
      <div>
        {/* Header and navbar goes here*/}
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-4">
        <div className="hero bg-base-200 py-4 col-span-3 flex items-start justify-center">
          <div className="hero-content fle flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <div>
                {loginMessage ? (
                  <>
                    <h1 className="text-3xl font-bold">{loginMessage}</h1>
                  </>
                ) : (
                  <h1 className="text-5xl font-bold">Login Now </h1>
                )}
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="w-5/6 mx-auto mb-6 text-center">
                <h2>
                  New here ?{" "}
                  <Link
                    className="text-blue-500 font-bold mx-2 underline"
                    to="/register"
                  >
                    Register to login
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="border ml-2">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Login;
