import React from "react";
import { Link } from "react-router-dom";

const QAcard = ({ qusetions, answer }) => {
  return (
    <div className="bg-white border-[1px] border-gray-300 rounded-lg overflow-hidden ">
      <div className="py-4 px-4 flex justify-between bg-gray-300 ">
        <h5 className="text-lg">{qusetions}</h5>
      </div>
      <div className="px-6 py-4">
        
        <p className="mt-2">{answer}</p>
      </div>
    </div>
  );
};

export default QAcard;
