import React, { useState } from "react";
import LogoGray from "assets/svg/LogoGray.svg";
import LogoWhite from "assets/svg/LogoWhite.svg";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillPhone,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ dark }) => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="relative z-50 flex flex-row items-center justify-between py-2 px-4 md:px-8 xl:px-16 bg-transparent">
      <div className="md:hidden relative flex flex-row items-center justify-between w-full">
        <img
          src={dark ? LogoWhite : LogoGray}
          className="h-16 w-20"
          alt="Logo"
        />
        <GiHamburgerMenu
          size={24}
          fill={dark ? "white" : "black"}
          onClick={() => setMenu(!menu)}
        />

        {menu ? (
          <ul className="absolute right-0 top-12 rounded-md p-4 space-y-2 flex flex-col bg-white shadow-md">
            <li>About Us</li>
            <li>Employers</li>
            <li>Applicant</li>
            <li>Help</li>
          </ul>
        ) : null}
      </div>
      <div className="hidden md:flex flex-row items-center justify-between w-full pr-0 md:pr-8">
        <img
          src={dark ? LogoWhite : LogoGray}
          className="h-16 w-20"
          alt="Logo"
        />
        <ul
          className={`text-xs lg:text-lg flex flex-row items-center justify-center space-x-2 md:space-x-4 ${
            dark ? "bg-white" : "bg-secondary"
          } px-4 py-1 rounded-full ${
            dark ? "text-secondary" : "text-white"
          } font-medium`}
        >
          <li>About Us</li>
          <li>Employers</li>
          <li>Applicant</li>
          <li>Help</li>
        </ul>
      </div>
      <ul className="hidden md:flex flex-row items-center justify-end space-x-4 w-full">
        <li>
          <AiFillInstagram size={24} fill={dark ? "white" : "black"} />
        </li>
        <li>
          <AiFillLinkedin size={24} fill={dark ? "white" : "black"} />
        </li>
        <li>
          <AiFillTwitterCircle size={24} fill={dark ? "white" : "black"} />
        </li>
        <li>
          <AiFillPhone size={24} fill={dark ? "white" : "black"} />
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
