import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Shared/NotFound/NotFound";
// import News from "../Pages/NewsDetails/NewsDetails";
import NewsByCategory from "../Pages/NewsByCategory/NewsByCategory";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AboutPage from "../Pages/About/AboutPage";
import CareersPage from "../Pages/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/news.json"),
      },
      {
        path: "/news/:id_parameter",

        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>,
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:category_id_parameter",
        element: (
          <PrivateRoute>
            <NewsByCategory></NewsByCategory>,
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/career",
        element: <CareersPage></CareersPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
