import React from "react";
import { Link } from "react-router-dom";

const Nft = () => {
  return (
    <div className=" h-[400px] max-w-[400px] mx-auto bg-black mt-20 my-2 rounded-xl flex flex-col drop-shadow-xl ">
      <div className="w-[90%] bg-slate-400 h-[80%] mx-[5%] my-5 rounded-lg "></div>
      <Link to="/" className="mx-auto">
        <div className="flex text-white max-w-[90%] mx-[6%] ">
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="bg-[#db7c26] my-2 py-2 inline w-[150px]  rounded-3xl mx-auto  font-bold text-lg">
            Buy
          </button>
        </div>
      </Link>
      <p>Terms and Conditions | Private Policy</p>
    </div>
  );
};

export default Nft;
