import React from "react";
import { Button, Layout } from "components";
import Banner from "assets/svg/GraySprinkles.svg";

const JobDetails = () => {
  return (
    <Layout>
      <div className="bg-white p-20 -mt-20">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col justify-start m-auto w-full h-screen md:w-[60%] space-y-4 p-8">
        <p className="text-[30px] font-bold text-center">Job Details</p>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Job Title</p>
          <p>Senior Software Engineer</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium ">Description</p>
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
          <p className="text-lg font-medium">Salary Range</p>
          <p>Rs 20000-30000</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Timings</p>
          <p>10:00am to 06:00pm</p>
        </div>

        {/* Show this button to users only */}
        <Button variant="primary" text="Apply" />
      </div>
    </Layout>
  );
};

export { JobDetails };
