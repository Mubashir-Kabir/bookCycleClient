import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
// import Services from "../pages/Services";
import AddBook from "../pages/AddBook";
// import MyReviews from "../pages/MyReviews";
// import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../pages/BookDetails";
import Profile from "../pages/Profile";
import Category from "../pages/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "log-in",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      //   {
      //     path: "services",
      //     element: <Services></Services>,
      //   },
      {
        path: "add-book",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "book/:_id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book?id=${params._id}`),
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:categoryName",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/category?categoryName=${params.categoryName}`
          ),
        element: <Category></Category>,
      },

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      //   {
      //     path: "blogs",
      //     element: <Blogs></Blogs>,
      //   },

      //   {
      //     path: "services/:id",
      //     loader: ({ params }) =>
      //       fetch(
      //         `https://koni-s-kitchen-server-side.vercel.app/services/${params.id}`
      //       ),
      //     element: <ServiceDetails></ServiceDetails>,
      //   },
    ],
  },
]);

export default router;
