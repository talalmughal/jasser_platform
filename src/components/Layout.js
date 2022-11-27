import React from "react";
import { Navbar } from "./Navbar";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillPhone,
} from "react-icons/ai";

const Layout = ({ dark, children }) => {
  return (
    <div>
      <Navbar dark={dark} />
      {children}
      <div className="bg-white flex flex-col md:flex-row items-center justify-center md:justify-between w-full space-y-2 md:space-y-0 py-2 px-4 md:px-8 bg-gradient-to-r from-[#46556A] via-[#232B35] to-[#232B35]">
        <p className="text-white w-full">+966536801229 ©2022 by Jasser</p>
        <ul className="flex flex-row items-center justify-center md:justify-end space-x-4 w-full">
          <li>
            <AiFillInstagram size={24} fill="white" />
          </li>
          <li>
            <AiFillLinkedin size={24} fill="white" />
          </li>
          <li>
            <AiFillTwitterCircle size={24} fill="white" />
          </li>
          <li>
            <AiFillPhone size={24} fill="white" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Layout };
