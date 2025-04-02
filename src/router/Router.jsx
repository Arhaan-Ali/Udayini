import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import end_points from "./end_points";
import Explore from "../pages/Explore";
import Account from "../pages/Account";

const router = createBrowserRouter([
  {
    path: end_points.root,
    element: <App />,
    errorElement: <h1>Page not found</h1>,
    children: [
      {
        path: end_points.home,
        element: <Home />,
      },
      {
        path: end_points.explore,
        element: <Explore />,
      },
      {
        path: end_points.account,
        element: <Account />,
      },
    ],
  },
]);

export default router;
