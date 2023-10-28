import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  idea,
  investment,
  author,
  authorImage,
  date,
  linkToProfile,
  productimg,
  showDeleteButton,
  onClickdlt,
}) => {
  return (
    <div className="bg-white shadow-2xl border-[1px] border-gray-300 rounded-lg overflow-hidden w-[97%] sm:w-[600px] h-full max-h-[500px] min-h-[380px]">
      <div className="px-6  py-4 flex justify-between bg-gray-300 ">
        <div className="flex items-center">
          <img
            src={authorImage}
            alt={author}
            className="w-14 h-14 rounded-full mr-2 object-cover object-center"
          />
          <div>
            <Link
            //   to={linkToProfile}
              className="text-2xl font-medium text-gray-900"
            >
              {author}
            </Link>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>
        {showDeleteButton && (
          <div className="block">
            <i
              onClick={onClickdlt}
              className="fas fa-trash top-0 cursor-pointer text-red-600 text-lg"
            ></i>
          </div>
        )}
      </div>    
      <div className="px-6 py-4 flex rounded flex-col place-items-center">
        <img src={productimg} alt="" className="w-[100px] h-[100px]" />
        <p className="mt-2 text-gray-600">Product Idea: {idea}</p>
        <h2 className="text-xl font-semibold text-gray-800">Product Price:{investment}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
