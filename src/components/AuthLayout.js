import React from "react";
// import Banner from "assets/images/Banner.png";
import Banner from "assets/svg/GraySprinkles.svg";
import LogoGray from "assets/svg/LogoGray.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[#F6FAFD] w-full">
      <div className="flex flex-row items-center w-full px-4 md:px-8 xl:px-16 py-8">
        <img src={LogoGray} className="h-16 w-20" alt="Logo" />
        <img src={Banner} className="w-[70%] md:w-[90%]" alt="banner" />
      </div>
      {children}
    </div>
  );
};

export { AuthLayout };
