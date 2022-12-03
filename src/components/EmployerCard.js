import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfilePicture } from "services/firebase";

const EmployerCard = ({ employer, ...rest }) => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const fetchProfilePicture = async () => {
      const response = await getProfilePicture(employer.id);
      setProfilePicture(response.picture);
    };

    if (profilePicture === "") fetchProfilePicture();
  });

  return (
    <div
      onClick={() => navigate("/employers/:id")}
      className="flex flex-col items-center justify-center shadow-lg rounded-[15px]"
    >
      <img src={profilePicture} className="aspect-square" alt="applicant" />
      <div className="bg-gray w-full px-4 py-2 rounded-[0_0_15px_15px] space-y-2">
        <p className="text-white font-bold uppercase text-xl">
          {employer.data.name}
        </p>
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
          View Details
        </button>
      </div>
    </div>
  );
};

export { EmployerCard };
