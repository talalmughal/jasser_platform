import React from "react";
import { Button, Input, Layout } from "components";
import Banner from "assets/svg/GraySprinkles.svg";
import ApplicantImg from "assets/images/Applicant.png";

const Profile = () => {
  return (
    <Layout>
      <div className="bg-white p-10 h-[200px] -mt-20">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col items-center justify-center px-8 md:w-[50%] md:m-auto py-4 space-y-4">
        <p className="text-2xl font-bold pb-8">Profile Details</p>
        <img
          src={ApplicantImg}
          className="h-24 w-24 rounded-full border-2 border-gray"
          alt="Profile"
        />
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input placeholder="Enter your name" label="Name" />
          <Input placeholder="Enter your gender" label="Gender" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input type="email" placeholder="Enter your email" label="Email" />
          <Input
            type="date"
            placeholder="Enter your date of birth"
            label="Date of Birth"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
          <Input
            type="text"
            placeholder="Enter your phone number"
            label="Phone Number"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input placeholder="Enter your College" label="College" />
          <Input placeholder="Enter your major" label="Major Subject" />
        </div>
        <Input type="textarea" placeholder="About You" label="About" />
        <Input type="file" placeholder="" label="Upload your Resume" />
        <Button variant="primary" text="Update" />
      </div>
    </Layout>
  );
};

export { Profile };
