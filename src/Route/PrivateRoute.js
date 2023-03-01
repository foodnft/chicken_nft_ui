import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return localStorage.getItem("loggedInData") ? (
    <Outlet />
  ) : (
    <Navigate to="/getnft" />
  );
};

export default PrivateRoute;