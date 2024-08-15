import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SingUp from "../pages/SingUp";
import SingIn from "../pages/SingIn";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <span>Error...</span>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singUp",
        element: <SingUp />,
      },
      {
        path: "/signIn",
        element: <SingIn />,
      },
    ],
  },
]);
