import { useContext, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import RightNav from "../Shared/RightSideNav/RightNav";

const Register = () => {
  const { creatNewsUser, userDisplayName, signOutUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const [registrationMessage, setRegistrationMessage] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("User registration in progress...");

    const user_name = e.target.name.value;
    const user_email = e.target.email.value;
    const user_password = e.target.password.value;

    // console.log(user_name, user_email, user_password);

    creatNewsUser(user_email, user_password)
      .then(() => {
        // console.log(userCredential);
        // console.log(userCredential.user);
        setRegistrationMessage("User registration successful!");

        // setting up the displayName
        userDisplayName(user_name)
          .then(() => {
            console.log("Display name set successfully!");
          })
          .catch((error) => {
            console.log("Some error occured while setting displayName:", error);
          });

        // signing out user for manual login
        signOutUser()
          .then(() => {
            console.log("User signed out successfully");
          })
          .catch((error) => {
            console.log(error);
          });

        // redirecting to the Login page
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error:", error.message);
        setRegistrationMessage(error.message);
      });
  };
  // console.log(user);

  return (
    <div>
      <div>
        {/* Header and navbar goes here*/}
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-4">
        <div className="hero bg-base-200 py-4 col-span-3 flex items-start justify-center">
          <div className="hero-content fle flex-col lg:flex-row-reverse rounded-3xl p-10">
            <div className="text-center lg:text-left">
              <div>
                {registrationMessage ? (
                  <>
                    <h1 className="text-3xl font-bold">
                      {registrationMessage}
                    </h1>
                  </>
                ) : (
                  <h1 className="text-5xl font-bold">Register Now </h1>
                )}
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div className="w-5/6 mx-auto mb-6 text-center">
                <h2>
                  Already registered ?{" "}
                  <Link
                    className="text-blue-500 font-bold mx-2 underline"
                    to="/login"
                  >
                    Login here
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

export default Register;
