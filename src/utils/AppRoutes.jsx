import Signin from "../Components/Signin";
import Register from "../Components/Register";
import Dashboard from "../Components/Dashboard";
import Create from "../Components/Create";
import Edit from "../Components/Edit";
import { Navigate } from "react-router-dom";

const AppRoutes = [
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];

export default AppRoutes;
