import React, { useState } from "react";
import { Link } from "react-router-dom";

import chicken from "../../images/chicken.svg";
import bglayer from "../../images/bglayer.svg";
import Success from "../../images/Success.svg";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

const Mycollection = () => {
  const [nft, setNft] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function generateNft() {
    // this method will generate, mint, claim, ETC the NFT
    setNft(false);
    setIsLoading(true);
    setTimeout(() => {
      setNft(true);
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  ">
      <div className="relative overflow-hidden">
        <Header />
        <div className="relative z-0 bg-[#F9DC5C] p-2 h-[920px]">
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute top-0 bottom-0 z-[-1] "
          ></img>

          <h1 className="text-[2.4rem] text-center font-bold my-6">Mint NFT</h1>
          <button
            onClick={generateNft}
            className="bg-[#780116] text-white py-4 w-[92%] rounded-md ml-[4%] mx-auto text-[1.4rem] font-bold drop-shadow-xl"
          >
            Generate NFT
          </button>
          {nft ? (
            <div className="h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl  flex flex-col justify-center drop-shadow-xl">
              <img alt="" src={Success} className="w-[80%] mx-auto"></img>
              <Link to="/yournft" className="mx-auto">
                <button className="bg-[#db7c26] my-10 py-3  inline w-[180px] rounded-3xl mx-auto  font-bold text-lg">
                  Your Collection
                </button>
              </Link>

              <p>Terms and Conditions | Private Policy</p>
            </div>
          ) : (
            <></>
          )}

          {isLoading ? (
            <div class="flex justify-center items-center mt-20">
              <div class=" animate-spin w-20 h-20 ">
                <span class="visually-hidden ">
                  <img
                    alt=""
                    src={chicken}
                    className="transform  origin-center transition duration-1000 ease-in-out hover:rotate-360"
                  ></img>
                </span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Mycollection;
