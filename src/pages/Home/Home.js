import React from "react";
import { Link } from "react-router-dom";

import bglayer from "../../images/bglayer.svg";
import banner from "../../images/banner.png";
import banner2 from "../../images/banner2.png";
import chicken1 from "../../images/chicken1.png";
import chicken2 from "../../images/chicken2.png";
import chicken3 from "../../images/chicken3.png";
import arrowdown from "../../images/arrowdown.svg";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

const Home = () => {
  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  ">
      <div className="relative ">
        <Header />
        <div className="w-[100%] relative z-0 bg-[#F9DC5C] p-2 ">
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute top-0 bottom-0 z-[-1] "
          ></img>
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute top-[100vh] bottom-0 z-[-1] "
          ></img>
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute top-[200vh] bottom-0 z-[-1] "
          ></img>

          <img alt="" src={banner} className="w-[100%] mt-10 "></img>
          <img alt="" src={banner2} className="w-[100%] mt-10 "></img>
          <Link to="/getnft">
            <button
              className="w-[94%] bg-[#c32f27] translate-x-[-50%] ml-[50%] text-white py-4 my-8 text-[1.4rem] rounded-md font-bold drop-shadow-xl">
              Click here to start
            </button>
          </Link>

          <div className="mx-2 pb-16 rounded-2xl bg-[#231f1e]">
            <div className="flex flex-col text-white ">
              <h2 className="text-center m-4 text-5xl font-bold my-10 ">
                How does it works ?
              </h2>
              <img
                alt=""
                src={chicken1}
                width="60%"
                className="mx-auto my-4"
              ></img>
              <h3 className="text-center font-bold text-4xl ">Nest your NFT</h3>
              <img
                alt=""
                src={arrowdown}
                width="16%"
                className="mx-auto mb-4 mt-8"
              ></img>
              <img
                alt=""
                src={chicken2}
                width="60%"
                className="mx-auto my-4 "
              ></img>
              <h3 className="text-center font-bold text-4xl ">Let it grow</h3>
              <img
                alt=""
                src={arrowdown}
                width="16%"
                className="mx-auto mb-4 mt-8"
              ></img>

              <img
                alt=""
                src={chicken3}
                width="60%"
                className="mx-auto my-4"
              ></img>
              <p className="text-center font-bold text-3xl w-[60%] mx-auto">
                Claim anothe 25% discount 30 days after fully grown
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
