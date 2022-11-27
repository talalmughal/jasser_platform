import React from "react";
import { Layout } from "components";
import Banner from "assets/svg/GraySprinkles.svg";
import ApplicantImg from "assets/images/Applicant.png";

const UserDetails = () => {
  return (
    <Layout>
      <div className="bg-white p-20 -mt-20">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col justify-start m-auto w-full h-full md:w-[60%] space-y-4 p-8">
        <p className="text-[30px] font-bold text-center">User Details</p>
        <img
          src={ApplicantImg}
          className="h-24 w-24 rounded-full border-2 border-gray"
          alt="Profile"
        />
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Name</p>
          <p>Umar Khalid</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium ">About</p>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Email Address</p>
          <p>abc@mail.com</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Phone Number</p>
          <p>+921234567890</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Download Resume</p>
          <p>Download Resume Link here</p>
        </div>
      </div>
    </Layout>
  );
};

export { UserDetails };
