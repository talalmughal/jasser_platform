import React, { useState } from "react";
import LogoGray from "assets/svg/LogoGray.svg";
import LogoWhite from "assets/svg/LogoWhite.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./Button";

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
            <li>Post Job</li>
            <li>Employers</li>
            <li>Applicant</li>
            <li>Profile</li>
            <li>
              <Button variant="primary" text="Login" />
            </li>
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
          <li>Post Job</li> {/* show this item for user type employer */}
          <li>Employers</li> {/* show this item for user type user */}
          <li>Applicant</li> {/* show this item for user type employer */}
          <li>Profile</li>
        </ul>
      </div>
      <div className="hidden md:flex flex-row items-center justify-end space-x-4 w-full">
        <Button variant="primary" text="Login" />
      </div>
    </nav>
  );
};

export { Navbar };
