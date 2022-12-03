import React, { useState } from "react";
import LogoGray from "assets/svg/LogoGray.svg";
import LogoWhite from "assets/svg/LogoWhite.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = ({ dark }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const userDocRef = JSON.parse(localStorage.getItem("user"))?.userDocRef;
  const userType = JSON.parse(localStorage.getItem("user"))?.userType;
  const isLoggedIn =
    typeof userDocRef && userDocRef !== "" && userType && userType !== "";

  return (
    <nav className="relative z-50 flex flex-row items-center justify-between py-2 px-4 md:px-8 xl:px-16 bg-transparent">
      <div className="md:hidden relative flex flex-row items-center justify-between w-full">
        <img
          src={dark ? LogoWhite : LogoGray}
          className="h-16 w-20"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        {isLoggedIn ? (
          <>
            <GiHamburgerMenu
              size={24}
              fill={dark ? "white" : "black"}
              onClick={() => setMenu(!menu)}
            />

            {menu ? (
              <ul className="absolute right-0 top-12 rounded-md p-4 space-y-2 flex flex-col bg-white shadow-md">
                <li onClick={() => navigate("/jobpost")}>Post Job</li>
                <li onClick={() => navigate("/employers")}>Employers</li>
                <li onClick={() => navigate("/applicants")}>Applicant</li>
                <li onClick={() => navigate("/profile")}>Profile</li>
                <li onClick={() => navigate("/jobPosts")}>My Jobs</li>
                <li>
                  <a
                    href="https://www.jassersa.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About
                  </a>
                </li>
                {/* Show this button when the user is not logged in */}

                <li>
                  {/* Show this button when the user is logged in */}
                  <Button
                    variant="primary"
                    text="Logout"
                    onClick={() => {
                      const user = {
                        userDocRef: "",
                        userType: "",
                      };
                      localStorage.setItem("user", JSON.stringify(user));
                      navigate("/login");
                    }}
                  />
                </li>
              </ul>
            ) : null}
          </>
        ) : (
          <li>
            <Button
              variant="primary"
              text="Login"
              onClick={() => navigate("/login")}
            />
          </li>
        )}
      </div>
      <div className="hidden md:flex flex-row items-center justify-between w-full pr-0 md:pr-8">
        <img
          src={dark ? LogoWhite : LogoGray}
          className="h-16 w-20"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        {isLoggedIn ? (
          <ul
            className={`text-xs lg:text-lg flex flex-row items-center justify-center space-x-2 md:space-x-4 ${
              dark ? "bg-white" : "bg-secondary"
            } px-4 py-1 rounded-full ${
              dark ? "text-secondary" : "text-white"
            } font-medium`}
          >
            <li onClick={() => navigate("/jobpost")}>Post Job</li>
            <li onClick={() => navigate("/employers")}>Employers</li>
            <li onClick={() => navigate("/applicants")}>Applicant</li>
            <li onClick={() => navigate("/profile")}>Profile</li>
            <li onClick={() => navigate("/myjobs")}>My Jobs</li>
            <li>
              <a
                href="https://www.jassersa.com"
                target="_blank"
                rel="noreferrer"
              >
                About
              </a>
            </li>
          </ul>
        ) : null}
        {isLoggedIn ? (
          <Button
            variant="primary"
            text="Logout"
            onClick={() => {
              const user = {
                userDocRef: "",
                userType: "",
              };
              localStorage.setItem("user", JSON.stringify(user));
              navigate("/login");
            }}
          />
        ) : (
          <Button
            variant="primary"
            text="Login"
            onClick={() => navigate("/login")}
          />
        )}
      </div>
    </nav>
  );
};

export { Navbar };
