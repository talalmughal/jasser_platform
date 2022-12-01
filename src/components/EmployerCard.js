import React from "react";
import Logo from "assets/svg/LogoGray.svg";
import { useNavigate } from "react-router-dom";

const EmployerCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/employers/:id")}
      className="flex flex-col items-center justify-center space-y-4 shadow-lg rounded-[15px]"
    >
      <img src={Logo} className="h-32 w-24" alt="applicant" />
      <div className="bg-gray w-full px-4 py-2 rounded-[0_0_15px_15px] space-y-2">
        <p className="text-white font-bold uppercase text-xl">Jasser</p>
        <div className="flex flex-row items-center justify-between w-full">
          {["CS", "Male", "Khobar"].map((item) => (
            <p
              key={item}
              className="text-xs bg-white rounded-[8px] px-2 md:px-4 py-1"
            >
              {item}
            </p>
          ))}
        </div>
        <button className="bg-white rounded-[5px] font-medium m-auto w-full text-xs px-4 py-1">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export { EmployerCard };
