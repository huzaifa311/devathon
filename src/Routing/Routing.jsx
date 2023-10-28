import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
// import Private from "../Pages/Private";
import AuthRoute from "../Routes/ProtectedRoute";
import ProtectedRoute from "../Routes/Authroute";
import Index from "../Pages/Index";
import Investor from "../Pages/Investor";
import User from "../Pages/User";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Index />} />
        <Route element={<AuthRoute />} >
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />} >
          <Route path="/investor" element={<Investor />} />
          <Route path="/user" element={<User />} />
        </Route>

      </Routes>
    </>
  );
};

export default Routing;
