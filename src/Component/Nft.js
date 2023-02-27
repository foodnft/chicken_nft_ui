import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nft = ({ image, buttonName, clickgen }) => {
  const [childValue, setChildValue] = useState(0);

  function handleChange(event) {
    setChildValue(childValue + 1);
    clickgen(childValue);
  }
  return (
    <div className=" h-[460px] max-w-[400px] mx-auto bg-black mt-20 my-2 rounded-xl flex flex-col drop-shadow-xl ">
      <div className="w-[90%] bg-slate-400 h-[80%] mx-[5%] my-5 rounded-lg overflow-x-hidden ">
        <img alt="" src={image} className=" h-[100%] w-[100%] "></img>
      </div>
      <div className="flex text-white max-w-[90%] mx-[6%] ">
        <button
          className="bg-[#db7c26] my-2 px-4 py-2 inline rounded-3xl mx-auto  font-bold text-lg"
          onClick={handleChange}
        >
          {buttonName}
        </button>
      </div>
      <p>Terms and Conditions | Private Policy</p>
    </div>
  );
};

export default Nft;
