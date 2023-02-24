import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../Component/Header";
import Footer from "../Component/Footer";
import bglayer from "../images/bglayer.svg";
import { asyncApiCall } from "../Axios";

const Enterotp = () => {
  const [resendTimer, setResendTimer] = useState(60);
  const [otpValue, setOtpValue] = useState("");
  const [otpValue1, setOtpValue1] = useState("");
  const [otpValue2, setOtpValue2] = useState("");
  const [otpValue3, setOtpValue3] = useState("");

  const optResendTimer = useRef();

  const navigate = useNavigate();

  const handleKeyPress = (event, index) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^\d$/.test(keyValue)) {
      event.preventDefault();
    } else {
      switch (true) {
        case index === 0:
          setOtpValue(keyValue);
          break;
        case index === 1:
          setOtpValue1(keyValue);
          break;
        case index === 2:
          setOtpValue2(keyValue);
          break;
        default:
          setOtpValue3(keyValue);
          break;
      }
    }
  };
  useEffect(() => {
    if (resendTimer === 0) {
      clearInterval(optResendTimer.current);
    }
  }, [resendTimer]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(optResendTimer.current);
  }, []);

  const startTimer = () => {
    optResendTimer.current = setInterval(() => {
      setResendTimer((previousTime) => (previousTime -= 1));
    }, 1000);
  };

  const verifyOtp = () => {
    const otpReceived = `${otpValue}${otpValue1}${otpValue2}${otpValue3}`;
    const url = {
      url: "/otp/verifyOtp",
      method: "post",
      data: {
        mobile: `${sessionStorage.getItem("userMobileNumber")}`,
        otpValue: otpReceived,
      },
    };
    asyncApiCall(url)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          sessionStorage.clear();
          navigate("/myCollection");
        }
      })
      .catch((err) => {
        // navigate("/myCollection");
        console.log(err);
      });
  };

  const reSendOtp = () => {
    const apiData = {
      url: "/otp/resendOtp",
      method: "post",
      data: {
        mobileNumber: sessionStorage.getItem("userMobileNumber"),
      },
    };
    asyncApiCall(apiData)
      .then((data) => {
        setResendTimer(60);
        startTimer();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh] overflow-x-hidden  ">
      <div className="relative ">
        <Header />
        <div className="relative z-0 bg-[#F9DC5C] p-2 h-[920px]">
          <img
            src={bglayer}
            className="w-[100%] absolute top-0 bottom-0 z-[-1] "
          ></img>

          <h1 className="text-[2.4rem] text-center font-bold my-6">
            Enter OTP
          </h1>
          <div className="h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl relative  flex flex-col justify-center ">
            <div
              style={{ padding: "20px" }}
              className="relative top-0 h-[100vh] flex flex-col bg-black rounded-xl drop-shadow-xl
"
            >
              <h2 className="text-[#fdf523] text-2xl  my-10 text-center mx-2 font-bold">
                Collect the Tastiest <br /> Chicken NFTs
              </h2>
              <div>
                <form className="flex flex-col justify-center text-white ">
                  <label className="text-center text-2xl mb-5 ">
                    Input Otp
                  </label>
                  <div className="flex gap-2 justify-center">
                    <input
                      type={Number}
                      onKeyPress={(e) => handleKeyPress(e, 0)}
                      value={otpValue}
                      maxLength={1}
                      className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                    ></input>
                    <input
                      type={Number}
                      value={otpValue1}
                      onKeyPress={(e) => handleKeyPress(e, 1)}
                      maxLength={1}
                      className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                    ></input>
                    <input
                      type={Number}
                      value={otpValue2}
                      onKeyPress={(e) => handleKeyPress(e, 2)}
                      maxLength={1}
                      className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                    ></input>
                    <input
                      type={Number}
                      value={otpValue3}
                      onKeyPress={(e) => handleKeyPress(e, 3)}
                      maxLength={1}
                      className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                    ></input>
                  </div>
                </form>
              </div>
              <button
                className="bg-[#db7c26] mb-0 mt-5 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg"
                onClick={verifyOtp}
              >
                Confirm
              </button>
              <button
                className="bg-[#dbc926] my-5 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg"
                onClick={reSendOtp}
                disabled={resendTimer > 0}
              >
                Re-send
              </button>
              <div className="text-[#fdf523] mt-5 text-center text-2xl mb-5">
                Resend : {resendTimer} Seconds
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Enterotp;
