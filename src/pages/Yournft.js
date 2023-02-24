import React from "react";

import bglayer from "../images/bglayer.svg";
import Nft from "../Component/Nft";

const YourNft = () => {
  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  ">
      <div className="relative ">
        <div className="relative z-0 bg-[#F9DC5C] p-2 h-[1000px]">
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute top-0 bottom-0 z-[-1] "
          />
          <h1 className="text-[2.4rem] text-center font-bold my-6">Your Nft</h1>
          <Nft />
        </div>
      </div>
    </div>
  );
};

export default YourNft;
