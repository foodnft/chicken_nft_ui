import React from "react";

import chicken from "../images/chicken.svg";
import mail from "../images/mail.svg";
import telegram from "../images/telegram.svg";

const Footer = () => {
  return (
    <footer className="bg-black flex justify-center p-2 w-[100%] relative x-20 ">
      <div className="text-center text-white m-3  ">
        <h3 className="border-[1px]-[#C32F27] font-bold text-4xl my-4">
          Content
        </h3>
        <p className="flex m-2 text-xl my-2">
          {" "}
          <img alt="" src={mail} className="mr-2 w-6 "></img>your@anonheLper.com
        </p>
        <p className="flex m-2 text-xl my-2">
          {" "}
          <img alt="" src={mail} className="mr-2 w-6"></img>
          your@broastedchicken.com
        </p>
        <p className="flex m-2 text-xl my-2">
          {" "}
          <img alt="" src={telegram} className="mr-2 w-6"></img>@CocktaiLDev
        </p>
        <img alt="" src={chicken} className="w-[25%] mx-auto my-10 "></img>
      </div>
    </footer>
  );
};

export default Footer;
