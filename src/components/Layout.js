import React from "react";
import { Navbar } from "./Navbar";

const Layout = ({ dark, children }) => {
  return (
    <div>
      <Navbar dark={dark} />
      {children}
      <div className="bg-white flex items-center justify-center py-2 bg-gradient-to-r from-[#46556A] via-[#232B35] to-[#232B35]">
        <p className="text-white">+966536801229 ©2022 by Jasser</p>
      </div>
    </div>
  );
};

export { Layout };
