import { ApplicantCard, Layout } from "components";
import React, { useEffect, useState } from "react";
import Banner from "assets/svg/WhiteSprinkles.svg";
import Search from "assets/svg/Search.svg";
import { MdTune } from "react-icons/md";
import { getAllApplicants } from "services/firebase";
import { Loader } from "components/Loader";

const Applicants = () => {
  const [applicants, setApplicants] = useState("");

  // fetching jobs to be displayed to the logged-in applicant
  useEffect(() => {
    const getApplicants = async () => {
      const response = await getAllApplicants();
      console.log("response: ", response);
      setApplicants(response);
    };

    if (!applicants || applicants === "") getApplicants();
  }, [applicants]);

  return (
    <Layout dark={true}>
      <div className="bg-gradient-to-r from-[#46556A] via-[#232B35] to-[#232B35] h-[250px] p-20 -mt-20">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4 py-8 md:px-32">
        <p className="text-darkGray font-bold text-xl w-full">
          Search for Applicants
        </p>
        <div className="flex flex-row items-center justify-end space-x-4 w-[90%]">
          <div className="flex flex-row items-center justify-between rounded-full shadow-md px-4  m-auto md:m-0 lg:w-[40%] py-2 bg-[#F6FAFD]">
            <input
              type="text"
              placeholder="Search for applicants"
              className="rounded-full focus:outline-none w-full pr-4 bg-[#F6FAFD]"
            />
            <img src={Search} alt="search" className="h-6 w-6" />
          </div>
          <MdTune size={36} className="bg-[#F6FAFD] rounded-md shadow-md" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between flex-wrap gap-8 px-16 py-4 w-full">
        <Tab text="All (170)" active />
        <Tab text="Computer Science" />
        <Tab text="3 Months" />
        <Tab text="Male" />
        <Tab text="Female" />
        <Tab text="Khobar" />
      </div>

      {applicants === "" ? (
        <div className="flex w-full justify-center items-center mx-auto my-8">
          <Loader showLoader={""} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-8 px-16">
          {applicants.map((applicant, i) => (
            <ApplicantCard applicant={applicant} key={i} />
          ))}
        </div>
      )}
    </Layout>
  );
};

const Tab = ({ active, text, onClick }) => (
  <p
    onClick={onClick}
    className={`${
      active
        ? "bg-primary"
        : "bg-gradient-to-r from-[#46556A] via-[#232B35] to-[#232B35]"
    } text-white rounded-[8px] px-8 py-2 cursor-pointer`}
  >
    {text}
  </p>
);

export { Applicants };
