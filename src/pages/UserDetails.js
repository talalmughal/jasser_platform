import React, { useEffect, useState } from "react";
import { Layout } from "components";
import Banner from "assets/svg/GraySprinkles.svg";
import { useLocation } from "react-router-dom";
import { getResumeLink } from "services/firebase";

const UserDetails = () => {
  const location = useLocation();
  const [resumeLink, setResumeLink] = useState("");

  const user = location.state.user;
  const image = location.state.profilePicture;

  useEffect(() => {
    const fetchResumeLink = async () => {
      const response = await getResumeLink(user.id);
      if (response?.resume) setResumeLink(response.resume);
    };

    if (resumeLink === "") fetchResumeLink();
  });

  return (
    <Layout>
      <div className="bg-white p-10 -mt-20 h-[200px]">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col justify-start m-auto w-full h-full md:w-[60%] space-y-4 p-8 mb-10">
        <p className="text-[30px] font-bold text-center">User Details</p>
        <img
          src={image}
          className="h-24 w-24 rounded-full border-2 border-gray"
          alt="Profile"
        />
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Name</p>
          <p>{user.data.name}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium ">About</p>
          <p className="text-justify">{user.data.aboutYou}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Email Address</p>
          <p>{user.data.email}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Phone Number</p>
          <p>{user.data.phoneNumber}</p>
        </div>
        {resumeLink && resumeLink !== "" && (
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-medium">Download Resume</p>
            <a href={resumeLink} target="blank">
              <p className="text-blue-600 underline">Click here for resume</p>
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};

export { UserDetails };
