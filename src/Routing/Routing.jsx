import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Routing;
