import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import bglayer from "../images/bglayer.svg";
import banner from "../images/banner.png";
import banner2 from "../images/banner2.png";
import chicken1 from "../images/chicken1.png";
import chicken2 from "../images/chicken2.png";
import chicken3 from "../images/chicken3.png";
import arrowdown from "../images/arrowdown.svg";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import AccordionItem from "../Component/AccordionItem";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  function handleClick(index) {
    setOpenIndex(index === openIndex ? null : index);
  }

  const items = [
    {
      title: "What is NFT?",
      content: "NFT is Non-Fungible Token, a digital collectible that you can own",
    },
    {
      title: "What is Broasted Chicken house NFT?",
      content: "With Broasted Chicken house NFT which can be used to claim 25% discount on your tasted meal EVERY MONTH, it can also be used as PFP (Profile Picture) on social media",
    },
    {
      title: "How to get Broasted Chicken house NFT?",
      content: "Its Simple!, Register with your mobile number and claim your NFT",
    },
    {
      title: "How to Claim Discount?",
      content: "Once you have your NFT, you can claim your discount by showing your NFT to the cashier of the restaurant, only dine-in orders are eligible for discount",
    },
    {
      title: "How to can i re-claim Discount?",
      content: "After claiming your discount, you can Nest your NFT and re-claim your discount once your chicken grows back to full size in aprox 30 days",
    },
    {
      title: "Can the NFT discount be expired?",
      content: "Yes, if the discount is not claimed within 15 days, the discount will be expired and the NFT will be transferred back to the pool",
    },
  ];

  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  ">
      <div className="relative ">
        <Header />
        <div className="w-[100%] relative z-0 bg-[#F9DC5C] p-2 ">
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute left-0 top-0 bottom-0 z-[-1] "
          ></img>
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute left-0  top-[100vh] bottom-0 z-[-1] "
          ></img>
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute left-0  top-[200vh] bottom-0 z-[-1] "
          ></img>

          <img alt="" src={banner} className="w-[100%] mt-10 "></img>
          <img alt="" src={banner2} className="w-[100%] mt-10 "></img>
          <Link to="/getnft">
            <button
              className="w-[94%] bg-[#c32f27] translate-x-[-50%] ml-[50%] text-white py-4 my-8 text-[1.4rem] rounded-md font-bold drop-shadow-xl

 "
            >
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
                Claim another 25% discount 30 days after fully grown
              </p>
            </div>
          </div>
          <div className=" min-h-[100px] mt-10 ">
          <h2 className="text-3xl font-bold text-center mb-4" >FAQ</h2>

            <div className="mb-12">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  isOpen={index === openIndex}
                  title={item.title}
                  content={item.content}
                  onClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
