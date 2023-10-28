import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Investor = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userType = user.signupType;
  const navigate = useNavigate(); // Get the navigate function

  // Conditionally navigate based on userType
  useEffect(() => {
    if (userType === "User") {
      navigate("/user");
    } else {
      navigate("/investor");
    }
  }, []);
  return <div className="text-6xl mt-16">Investor</div>;
};

export default Investor;
