import React from "react";
import { Button, Input, Layout } from "components";
import Banner from "assets/svg/GraySprinkles.svg";

const JobPost = () => {
  return (
    <Layout>
      <div className="bg-white p-10 -mt-20 h-[200px]">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col items-center justify-start m-auto w-full h-screen md:w-[60%] space-y-4">
        <p className="text-[30px] font-bold">Job Post</p>
        <Input label="Job Name" placeholder="Enter job name" />
        <Input
          type="textarea"
          label="Job Description"
          placeholder="Detail job desscription here"
        />
        <Input
          label="Salary Range"
          placeholder="Enter salary range i.e 10000-20000"
        />
        <Input
          label="Timing"
          placeholder="Enter timing i.e 10:00am to 06:00pm"
        />
        <Button variant="primary" text="Submit" />
      </div>
    </Layout>
  );
};

export { JobPost };
