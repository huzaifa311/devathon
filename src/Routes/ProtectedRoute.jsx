import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (user.signupType === "User") {
      return <Navigate to={"/user"} />;
    } else if (user.signupType === "Investor") {
      return <Navigate to={"/investor"} />;
    }
  }

  return <Outlet />;
};

export default AuthRoute;
