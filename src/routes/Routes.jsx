import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SingUp from "../pages/SingUp";
import SingIn from "../pages/SingIn";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <span>Error...</span>,
    children: [
      {
        path: "/",
        element: <span>Home</span>,
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
