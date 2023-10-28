import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = ({
  linkTo1,
  li1,
  linkTo2,
  li2,
  linkTo3,
  li3,
  linkTo4,
  li4,
  userImg,
  userName,
  onClick,
  profileLink,
  linkTo5,
  li5,
  class5,
}) => {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-2xl w-full fixed top-0 left-0 z-[100]">
      <div
        className={`md:flex items-center justify-between bg-teal-700 py-4 md:px-10 px-7`}
      >
        <div className="font-semibold text-2xl cursor-pointer flex items-center gap-1">
          <h1 className="text-white text-2xl hover:text-teal-950 duration-500 cursor-pointer">
            {" "}
            <Link to={"/"}>Investing Web</Link>{" "}
          </h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex bg-teal-700 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full h-[200%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {/* <li className='md:ml-8  md:my-0 my-7 font-semibold text-base sm:text-xl'>
            <Link to={linkTo1} className={`text-white  hover:text-blue-400 duration-500 ${customClass1} flex gap-2 place-items-center`}>
              <img
                src={imgSrc}
                className={imgClass}
              />{li1}</Link>
          </li> */}
          {/* <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg ">
            <Link
              to={linkTo1}
              className={`text-white hover:text-teal-950 duration-500 cursor-pointer`}
            >
              {li1}
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg ">
            <Link
              to={linkTo2}
              className={`text-white hover:text-teal-950 duration-500 cursor-pointer`}
            >
              {li2}
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg ">
            <Link
              to={linkTo3}
              className={`text-white hover:text-teal-950 duration-500 cursor-pointer`}
            >
              {li3}
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg ">
            <Link
              to={linkTo4}
              className={`text-white hover:text-teal-950 duration-500 cursor-pointer`}
            >
              {li4}
            </Link>
          </li> */}

          <li className="md:ml-8  md:my-0 my-7 font-semibold text-base sm:text-xl">
            <Link
              className={`text-white  hover:text-blue-400 duration-500 flex gap-2 place-items-center`}
            >
              <img src={userImg} className="h-[30px] w-[30px] rounded-full" />
              {userName}
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold text-lg ">
            <button className="text-white hover:text-teal-950 duration-500" onClick={onClick}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
