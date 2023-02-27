import React from "react";

import bglayer from "../images/bglayer.svg";
import Nft from "../Component/Nft";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import step1 from "../images/Nft/step1.png";
import step2 from "../images/Nft/step2.png";
import step3 from "../images/Nft/step3.png";
import step4 from "../images/Nft/step4.png";
import step5 from "../images/Nft/step5.png";
import chikengif from "../images/Nft/chicken_gif.gif";


const YourNft = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const resetCount = () => {
    setCount(0);
    console.log("reset count", count);
  };

  function generateNft(count) {
    switch (count) {
      case 0:
        return (
          <Nft
            image={step1}
            buttonName={"Claim & Nest"}
            clickgen={incrementCount}
          />
        );
        break;
      case 1:
        return (
          <Nft image={chikengif} buttonName={"Nesting"} clickgen={incrementCount} />
        );
        break;
      case 2:
        return (
          <Nft image={step3} buttonName={"Nesting"} clickgen={incrementCount} />
        );
        break;
      case 3:
        return (
          <Nft image={step4} buttonName={"Chick"} clickgen={incrementCount} />
        );
        break;
      default:
        return (
          <Nft
            image={step5}
            buttonName={"Young Chicken"}
            clickgen={resetCount}
          />
        );
    }
  }

  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  ">
      <div className="relative ">
        <Header />
        <div className="relative z-0 bg-[#F9DC5C] p-2 h-[1000px]">
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute left-0  top-0 bottom-0 z-[-1] "
          />
          <h1 className="text-[2.4rem] text-center font-bold my-6">Your Nft</h1>
          {generateNft(count)}
          {/* <Nft image={step1} buttonName={"Buy"} /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default YourNft;
