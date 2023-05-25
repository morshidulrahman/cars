import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Checkout from "../Checkout/Checkout";
import Booking from "../Booking/Booking";
import Privateroute from "./Privateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/bookings",
        element: (
          <Privateroute>
            {" "}
            <Booking />
          </Privateroute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <Privateroute>
            <Checkout />
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
