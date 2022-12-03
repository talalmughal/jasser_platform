import React, { useEffect, useState } from "react";
import { Input, Layout } from "components";
import Banner from "assets/svg/GraySprinkles.svg";
import { Loader } from "components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { createJob } from "services/firebase";

const JobPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [timing, setTiming] = useState("");
  const [showLoader, setShowLoader] = useState("hidden");
  const [successfullJobPosting, setSuccessfullJobPosting] = useState(false);
  const [anythingMissing, setAnythingMissing] = useState(true);

  // validation alert if required fields are left empty
  const missingFields = () => toast.info("Add missing fields first");

  // validation alert in case of failing to sign up
  const jobPostingFailed = () =>
    toast.error("Job posting failed. Please try again.");

  // updating if anything is missing or not, whenever user inputs something
  useEffect(() => {
    if (
      title?.length <= 1 ||
      description?.length <= 1 ||
      salaryRange?.length <= 1 ||
      timing?.length <= 1
    ) {
      setAnythingMissing(true);
    } else {
      setAnythingMissing(false);
    }
  }, [title, description, salaryRange, timing]);

  const handleJobPosting = async () => {
    setShowLoader("");
    try {
      const jobDocRef = uuidv4();
      const job = {
        title,
        description,
        salaryRange,
        timing,
        postedBy: JSON.parse(localStorage.getItem("user")).userDocRef,
      };

      await createJob(job, jobDocRef);

      setAnythingMissing(false);
      setShowLoader("hidden");
      setSuccessfullJobPosting(true);
      navigate("/");
    } catch (error) {
      setShowLoader("hidden");
      setSuccessfullJobPosting(false);
      console.log("Error: ", error);
    }
  };

  return (
    <Layout>
      <div className="bg-white p-10 -mt-20 h-[200px]">
        <img src={Banner} className="w-full h-full" alt="banner" />
      </div>
      <div className="flex flex-col items-center justify-start m-auto w-full h-screen md:w-[60%] space-y-4">
        <p className="text-[30px] font-bold">Job Post</p>
        <Input
          label="Job Name"
          placeholder="Enter job name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="textarea"
          label="Job Description"
          placeholder="Detail job desscription here"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Salary Range"
          placeholder="Enter salary range i.e 10000-20000"
          onChange={(e) => setSalaryRange(e.target.value)}
        />
        <Input
          label="Timing"
          placeholder="Enter timing i.e 10:00am to 06:00pm"
          onChange={(e) => setTiming(e.target.value)}
        />
        <button
          className="flex bg-gradient-to-r from-[#232B35] to-[#232B35] text-white px-8 h-[40px] rounded-[8px] items-center justify-center"
          onClick={async () => {
            if (anythingMissing) {
              missingFields();
            } else {
              setShowLoader("");
              await handleJobPosting();
              if (!successfullJobPosting) {
                setShowLoader("hidden");
                jobPostingFailed();
              }
            }
          }}
        >
          <Loader showLoader={showLoader} />
          Submit
        </button>
      </div>

      {/* displaying validation toasts */}
      <ToastContainer
        className="mb-10"
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Layout>
  );
};

export { JobPost };
