import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import chicken from "../images/chicken.svg";
import mail from "../images/mail.svg";
import telegram from "../images/telegram.svg";
import bglayer from "../images/bglayer.svg";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { asyncApiCall } from "../Axios";

const Getnft = () => {
  const [digits, setDigits] = useState("");
  const [countryCode, setCountryCode] = useState("+60");

  const navigate = useNavigate();

  function handleDigitsChange(event) {
    const newDigits = event.target.value.replace(/[^0-9]/g, "");
    setDigits(newDigits);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted digits:", digits);
  }

  const sendOtp = () => {
    sessionStorage.setItem("userMobileNumber", `${countryCode}${digits}`);
    const url = {
      url: "/otp/sendOtp",
      method: "post",
      data: {
        mobile: `${countryCode}${digits}`,
      },
    };
    asyncApiCall(url)
      .then((res) => {
        if (res.status === 200) {
          navigate("/enterotp");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isSubmitDisabled = digits.length !== 10;

  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh]  overflow-x-hidden  ">
      <div className="relative ">
        <Header />
        <div className="relative z-0 bg-[#F9DC5C] p-2 h-[920px]">
          <img
            src={bglayer}
            className="w-[100%] absolute top-0 bottom-0 z-[-1] "
          ></img>
          <h1 className="text-[2.4rem] text-center font-bold my-6">Get NFT</h1>
          <div className="h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl relative drop-shadow-xl flex flex-col justify-center ">
            <div className="flex flex-col">
              <h2 className="text-[#fdf523] text-2xl mb-10 text-center mx-5 font-bold">
                Collect the Tastiest <br /> Chicken NFTs
              </h2>
              <div>
                <form className="flex justify-center gap-4">
                  <select
                    id="cars"
                    name="cars"
                    className="h-14 w-[20%] text-center font-bold text-2xl "
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+60" className="font-bold text-2xl  ">
                      +60
                    </option>
                    <option value="+91" className="font-bold text-2xl  ">
                      +91
                    </option>
                  </select>
                  <input
                    type={Number}
                    value={digits}
                    onChange={handleDigitsChange}
                    maxLength={10}
                    className="h-14 w-[60%] font-bold text-2xl text-center "
                  ></input>
                </form>
              </div>
              <button
                className="bg-[#db7c26] my-10 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg"
                disabled={isSubmitDisabled}
                onClick={sendOtp}
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Getnft;
