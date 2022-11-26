import React from "react";
import Banner from "assets/images/Banner.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {children}
      <img
        src={Banner}
        className="order-first md:order-last h-full w-full"
        alt="banner"
      />
    </div>
  );
};

export { AuthLayout };
