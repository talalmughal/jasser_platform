import React from "react";
import ApplicantImg from "assets/images/Applicant.png";

const ApplicantCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 shadow-lg rounded-[15px]">
      <img src={ApplicantImg} className="h-32 w-24" alt="applicant" />
      <div className="bg-gray w-full px-4 py-2 rounded-[0_0_15px_15px] space-y-2">
        <p className="text-white font-bold uppercase text-xl">Umar Khalid</p>
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
          View Cv
        </button>
      </div>
    </div>
  );
};

export { ApplicantCard };
