import React, { useState } from "react";
import QrReader from "react-web-qr-reader";

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
  const [result, setResult] = useState("");

const Qr = () => {
   
  
    return (
      <></>
    );
  };
  
  

  //Swich casese increment count
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  //Reset count

  const resetCount = () => {
    setCount(0);
    console.log("reset count", count);
  };

  //Switch cases for nft

  function generateNft(count) {

    const delay = 500;
  
    // const previewStyle = {
    //   height: 240,
    //   width: 320
    // };
  
    
  
    const handleScan = (result) => {
      if (result) {
        setResult(result);
      }
    };
  
    const handleError = (error) => {
      console.log(error);
    };

    switch (count) {
      case 0:
        return (
          <Nft
            image={step1}
            buttonName={"Claim Discount!"}
            // onClick={Qr}
            clickgen={incrementCount}
          />
        );
        break;
      case 1:
        return (
          // <Nft image={chikengif} buttonName={"Nesting"} clickgen={incrementCount} />
          <>
          <div className="mt-20 mx-[5%] rounded-lg overflow-x-hidden ">
            <QrReader
              delay={delay}
              // style={previewStyle}
              onError={handleError}
              onScan={handleScan}
            />
            <p>{result}</p>
          </div>
          </>
        );
        break;
      case 2:
        return (
          <Nft image={step3} buttonName={" Egg "} clickgen={incrementCount} />
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
