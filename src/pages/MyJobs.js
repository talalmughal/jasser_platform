import { Layout } from "components";
import React, { useEffect, useState } from "react";
import Banner from "assets/svg/WhiteSprinkles.svg";
import Search from "assets/svg/Search.svg";
import { Link } from "react-router-dom";
import { getAllJobs } from "services/firebase";
import { Loader } from "components/Loader";

const MyJobs = () => {
  const [jobs, setJobs] = useState("");

  // fetching jobs to be displayed to the logged-in applicant
  useEffect(() => {
    const getEmployers = async () => {
      const response = await getAllJobs();
      setJobs(response);
    };

    if (!jobs || jobs === "") getEmployers();
  }, [jobs]);

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

      {jobs === "" ? (
        <div className="flex w-full justify-center items-center mx-auto my-8">
          <Loader showLoader={""} />
        </div>
      ) : (
        <div className="flex flex-col divide-y-[1px] divide-gray gap-4 py-8 px-16">
          {jobs.map((job, i) => (
            <JobItem job={job} key={i} />
          ))}
        </div>
      )}
    </Layout>
  );
};

const JobItem = ({ job, ...rest }) => {
  return (
    <Link to="/job/details" state={{ job }}>
      <div className="flex flex-col cursor-pointer my-4">
        <p className="font-bold text-lg">{job.data.title}</p>
        <p>{job.data.description}</p>
        <p>Timings: {job.data.timing}</p>
      </div>
    </Link>
  );
};

export { MyJobs };
