import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // it will check for the data available in the local storage if not it will route to getOtp page
  return localStorage.getItem("loggedInData") ? (
    <Outlet />
  ) : (
    <Navigate to="/getnft" />
  );
};

export default PrivateRoute;
