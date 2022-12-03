import { Layout } from "components";
import React from "react";
import Banner from "assets/svg/WhiteSprinkles.svg";
import Search from "assets/svg/Search.svg";
import { useNavigate } from "react-router-dom";
const MyJobs = () => {
  return (
    <Layout dark={true}>
      <div className="bg-gradient-to-r from-[#46556A] via-[#232B35] to-[#232B35] h-[250px] p-20 -mt-20">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4 py-8 md:px-32">
        <p className="text-darkGray font-bold text-xl w-full">
          Search for Jobs
        </p>
        <div className="flex flex-row items-center justify-end space-x-4 w-full">
          <div className="flex flex-row items-center justify-between rounded-full shadow-md px-4  m-auto md:m-0 lg:w-[70%] py-2 bg-[#F6FAFD]">
            <input
              type="text"
              placeholder="Search for jobs"
              className="rounded-full focus:outline-none w-full pr-4 bg-[#F6FAFD]"
            />
            <img src={Search} alt="search" className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col divide-y-[1px] divide-gray gap-4 py-8 px-16">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </Layout>
  );
};

const JobItem = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => navigate("/job/abc")}
    >
      <p className="font-bold text-lg">Job Title</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <p>Timings: 10am - 5pm</p>
    </div>
  );
};

export { MyJobs };
