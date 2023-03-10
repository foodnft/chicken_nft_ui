import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import bglayer from "../../images/bglayer.svg";
import { asyncApiCall } from "../../Axios";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormik } from "formik";
import { mobileSchema } from "../../Schema";
import { Link } from "react-router-dom";
import "./style.scss";

const Getnft = () => {
  const [digits, setDigits] = useState("");
  const [countryCode, setCountryCode] = useState("+60");
  const [showInput, setShowInput] = useState(true);
  const [optValue, setOtpValue] = useState("");
  const [optValue1, setOtpValue1] = useState("");
  const [optValue2, setOtpValue2] = useState("");
  const [optValue3, setOtpValue3] = useState("");
  const [resednBtn, setResndBtn] = useState(true);
  const [resendTimer, setResendTimer] = useState(60);

  const optResendTimer = useRef();

  const navigate = useNavigate();

  //set timer for resend otp
  useEffect(() => {
    if (resendTimer === 0) {
      setResndBtn(false);
      clearInterval(optResendTimer.current);
    }
  }, [resendTimer]);

  //Handle input change
  function handleDigitsChange(event) {
    const newDigits = event.target.value.replace(/[^0-9]/g, "");
    setDigits(newDigits);
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("Submitted digits:", digits);
  // }

  const isSubmitDisabled = digits.length !== 10;

  const sendOtp = () => {
    // sessionStorage.setItem("userMobileNumber", `${countryCode}${digits}`);
    // const url = {
    //   url: "/otp/sendOtp",
    //   method: "post",
    //   data: {
    //     mobile: `${countryCode}${digits}`,
    //   },
    // };
    // asyncApiCall(url)
    //   .then((res) => {
    //     if (res.status === 200) {
    navigate("/enterotp");
    //   }
    // })
    // .catch((err) => {
    //   // navigate("/enterotp");
    //   console.log(err);
    // });

  };

  // verify otp
  const verifyOtp = () => {
    // this methode will call the API to veify the OTP
    const otpReceived = `${optValue}${optValue1}${optValue2}${optValue3}`;
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
        console.log(err);
      });
  };

  // resend otp
  const reSendOtp = () => {
    // this call the API for resending the OTP
    const apiData = {
      // url: "/otp/resendOtp",
      url: "",
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

  // handle otp input
  const handleKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^\d$/.test(keyValue)) {
      event.preventDefault();
    }
  };

  //start timer for resend otp
  const startTimer = () => {
    // This method will start the timer
    optResendTimer.current = setInterval(() => {
      setResendTimer((previousTime) => (previousTime -= 1));
    }, 1000);
  };

  const initialValues = {
    mobile: "",
  };

  //Formik validation

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: mobileSchema,
      onSubmit: (values, action) => {
        console.log("Registertion ", values);
        // console.log("errors", errors)
        action.resetForm();
      },
    });

    let temp = values.mobile;
    // console.log(temp.toString().length)
    const isStringLengthTen = temp.toString().length >= 10 && temp.toString().length <= 12;

  return (
    <div className="max-w-[480px] mx-auto min-h-[100vh]  overflow-x-hidden  ">
      <div className="relative overflow-hidden">
        <Header />
        <div className="relative z-0 bg-[#F9DC5C] p-2 h-[920px]">
          <img
            alt=""
            src={bglayer}
            className="w-[100%] absolute top-0 left-0  bottom-0 z-[-1] "
          />
          <h1 className="text-[2.4rem] text-center font-bold my-3">Get NFT</h1>
          <div className="h-[50vh] w-[92%] mx-auto bg-black mt-20 my-2 rounded-xl relative drop-shadow-xl flex flex-col justify-center ">
            <div className="flex flex-col">
              <h2 className="text-[#fdf523] text-2xl mb-10 text-center mx-5 font-bold">
                Collect the Tastiest <br /> Chicken NFTs
              </h2>
              {showInput ? (
                <>
                  <div>
                    <form className="flex flex-col  " onSubmit={handleSubmit}>
                      <div className="flex justify-center gap-4">
                        <select
                          id="cars"
                          name="cars"
                          value={countryCode}
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
                          type="number"

                          maxLength={12}

                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="h-14 w-[60%] font-bold text-2xl text-center "
                        ></input>
                      </div>

                      {errors.mobile && touched.mobile ? (
                        <p className=" text-red-600  mx-auto mt-4 font-semibold text-lg max-w-[360px] text-center ">
                          {errors.mobile}
                        </p>
                      ) : (
                        <></>
                      )}
                    </form>
                  </div>
                  {/* <Link to="/enterotp" className="mx-auto"> */}
                  <button
                    className=" my-10 py-2 inline rounded-3xl mx-auto  font-bold text-lg"
                    type="submit"

                  > {isStringLengthTen ? 
                    <Link to="/enterotp" className="mx-auto bg-[#db7c26] my-10 py-3 px-10 inline w-[150px] rounded-3xl font-bold text-lg cursor-pointer ">
                      Verify Mobile
                    </Link> :
                    <Link className="mx-auto bg-[#ff9f46] opacity-50 my-10 py-3 px-10 inline w-[150px] rounded-3xl font-bold text-lg cursor-not-allowed" >
                      Verify Mobile
                    </Link>
                     }

                  </button>
                </>
              ) : (
                <>
                  <form className="flex flex-col justify-center text-white mb-5">
                    <label className="text-center text-2xl mb-5 ">
                      Input Otp
                    </label>
                    <div className="flex gap-2 justify-center">
                      <input
                        type={Number}
                        value={optValue}
                        onKeyPress={handleKeyPress}
                        maxLength={1}
                        onChange={(e) => setOtpValue(e.target.value)}
                        className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                      />
                      <input
                        type={Number}
                        onKeyPress={handleKeyPress}
                        value={optValue1}
                        maxLength={1}
                        onChange={(e) => setOtpValue1(e.target.value)}
                        className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                      />
                      <input
                        type={Number}
                        value={optValue2}
                        onKeyPress={handleKeyPress}
                        maxLength={1}
                        onChange={(e) => setOtpValue2(e.target.value)}
                        className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                      />
                      <input
                        type={Number}
                        value={optValue3}
                        onKeyPress={handleKeyPress}
                        maxLength={1}
                        onChange={(e) => setOtpValue3(e.target.value)}
                        className="h-14 w-[20%] font-bold text-black text-2xl text-center  "
                      />
                    </div>
                  </form>
                  <button
                    className="bg-[#db7c26] my-5 py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg"
                    onClick={verifyOtp}
                  >
                    Confirm
                  </button>
                  <button
                    className={`bg-[#db7c26] py-2 inline w-[150px] rounded-3xl mx-auto  font-bold text-lg ${
                      resendTimer > 0 && "disabled-btn"
                    }`}
                    onClick={reSendOtp}
                    disabled={resendTimer > 0}
                  >
                    Re Send
                  </button>
                  <div className="text-[#fdf523] mt-5 text-center text-2xl mb-5">
                    Resend : {resendTimer} Seconds
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Getnft;
