import React, { useEffect, useState } from "react";
import { Layout } from "components";
import Banner from "assets/svg/GraySprinkles.svg";
import { useLocation } from "react-router-dom";
import { Loader } from "components/Loader";
import { v4 as uuidv4 } from "uuid";
import { createApplication } from "services/firebase";

const JobDetails = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);
  const [buttonText, setButtonText] = useState("Apply");
  const [cursorAllowed, setCursorAllowed] = useState("cursor-pointer");
  const thisJob = location.state.job;
  const appliedBy = JSON.parse(localStorage.getItem("user"))?.userDocRef;

  // scrolling to the top
  useEffect(() => {
    document.documentElement.click();
    window.scrollTo(0, 0);
  }, []);

  const handleApplication = async () => {
    try {
      const applicationDocRef = uuidv4();
      const applicationData = {
        jobDocRef: thisJob.id,
        employerDocRef: thisJob.data.postedBy,
        applicantDocRef: appliedBy,
      };
      await createApplication(applicationDocRef, applicationData);
    } catch (e) {
      console.log("Could not apply to this job: ", e);
    }
  };

  return (
    <Layout>
      <div className="bg-white p-20 -mt-20">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col justify-start m-auto w-full h-screen md:w-[60%] space-y-4 p-8">
        <p className="text-[30px] font-bold text-center">Job Details</p>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Job Title</p>
          <p>{thisJob.data.title}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium ">Description</p>
          <p className="text-justify">{thisJob.data.description}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Salary Range</p>
          <p>{thisJob.data.salaryRange}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-medium">Timings</p>
          <p>{thisJob.data.timing}</p>
        </div>

        {/* Show this button to users only */}
        <button
          className={`flex bg-gradient-to-r from-[#232B35] to-[#232B35] text-white px-8 h-[40px] rounded-[8px] items-center justify-center ${cursorAllowed}`}
          onClick={async () => {
            setShowLoader(true);
            setButtonText("Applied");
            setCursorAllowed("cursor-not-allowed");
            await handleApplication();
            setShowLoader(false);
          }}
          disabled={showLoader}
        >
          <Loader showLoader={showLoader ? "" : "hidden"} />
          {buttonText}
        </button>
      </div>
    </Layout>
  );
};

export { JobDetails };
