import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h4 className="text-4xl font-bold ml-12 mt-[80px]">
        {" "}
        <Link to="/login">Signup</Link>
      </h4>
      <div className=" flex justify-center mt-10">
        <div className="bg-gray-100 w-96 p-8 border border-slate-400 rounded-lg boxShadow">
          <form /* onSubmit={handleSignupSubmit} */ className="w-full ">
            <div className="mb-4">
              <TextField
                type="text"
                // id='outline-basic'
                label="Full Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold mb-2 md:text-sm">
                Upload Profile Image
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="w-full text-sm sm:text-lg p-2 border  hover:border-gray-600 border-gray-300 rounded focus:outline-none focus:border-purple-700"
                onChange={(e) => setProfileImg(e.target)}
              />
            </div>
            <div className="mb-5">
              <TextField
                // id='outline-basic'
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                label="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <TextField
                // id='outline-basic'
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-700"
                label="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <button
                className="mt-2 absolute right-2 top-2 text-blue-500 focus:outline-none hover:cursor-pointer bg-white"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "hide" : "show"}
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-purple-700 text-white font-semibold py-2 px-4 rounded hover:bg-purple-800 focus:outline-none focus:ring focus:ring-blue-300 mb-3 flex justify-center"
              >
                {loader ? <CircularColor /> : "Signup"}
              </button>
            </div>
          </form>

          <div className="flex justify-center">
            <span className="text-gray-600">
              Already have an account?
              <Link
                to="/login"
                type="button"
                className="ml-2 text-blue-500 focus:outline-none hover:cursor-pointer"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
