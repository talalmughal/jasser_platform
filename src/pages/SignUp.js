import { AuthLayout, Button, Input } from "components";
import { sendEmailVerification } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createApplicant,
  createEmployer,
  signup,
  uploadProfilePicture,
  uploadResume,
} from "../services/firebase";
import { v4 as uuidv4 } from "uuid";
import { Loader } from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("applicant");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");
  const [majors, setMajors] = useState("");
  const [resume, setResume] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const [aboutYou, setAboutYou] = useState("");
  const [showLoader, setShowLoader] = useState("hidden");
  const [successfullSignup, setSuccessfullSignup] = useState(false);
  const [anythingMissing, setAnythingMissing] = useState(true);

  // validation alert if required fields are left empty
  const missingFields = () => toast.info("Add missing fields first");

  // validation alert if invalid email address is provided
  const invalidEmail = () => toast.warning("Invalid Email address provided");

  // validation alert if already registered email address is provided
  const emailInUse = () =>
    toast.warning("The Email you provided is already in use");

  // validation alert if the provided password doesn't follow password setting protocols
  const weakPassword = () =>
    toast.warning(
      "Weak password provided. Password should be atleast 6 characters long"
    );

  // validation alert in case of failing to sign up
  const signupFailed = () => toast.error("Signup failed. Please try again.");

  // updating if anything is missing or not, whenever user inputs something
  useEffect(() => {
    if (
      name?.length <= 1 ||
      gender?.length <= 1 ||
      email?.length <= 1 ||
      password?.length <= 1 ||
      dateOfBirth?.length <= 1 ||
      phoneNumber?.length <= 1 ||
      college?.length <= 1 ||
      majors?.length <= 1 ||
      aboutYou?.length <= 1
    ) {
      setAnythingMissing(true);
    } else {
      setAnythingMissing(false);
    }
  }, [
    name,
    gender,
    email,
    password,
    dateOfBirth,
    phoneNumber,
    college,
    majors,
    aboutYou,
  ]);

  const handleSignup = async () => {
    setShowLoader("");
    try {
      const response = await signup(email, password);
      sendEmailVerification(response.user);
      const applicantDocRef = uuidv4();
      const user = {
        name,
        gender,
        email,
        dateOfBirth,
        phoneNumber,
        college,
        majors,
        aboutYou,
      };
      if (userType === "user") {
        await createApplicant(user, applicantDocRef);
        await uploadResume(resume, applicantDocRef);
      } else {
        await createEmployer(user, applicantDocRef);
      }
      await uploadProfilePicture(profilePicture, applicantDocRef);
      setSuccessfullSignup(true);
      setAnythingMissing(false);
      setShowLoader("hidden");
      navigate("/");
    } catch (error) {
      setShowLoader("hidden");
      setSuccessfullSignup(false);
      if (error.code === "auth/invalid-email") {
        invalidEmail();
      }
      if (error.code === "auth/email-already-in-use") {
        emailInUse();
      }
      if (error.code === "auth/weak-password") {
        weakPassword();
      }
      console.log("Error: ", error);
    }
  };

  return (
    <AuthLayout>
      <p className="relative z-20 text-lg md:text-3xl text-secondary font-bold text-center bg-white -mt-24 w-[150px] md:w-[300px] m-auto py-2 rounded-md shadow-lg">
        Build your Profile
      </p>
      <div className="flex flex-col items-center justify-center p-8 space-y-6 w-full md:w-[80%] lg:w-[60%] m-auto">
        <div className="flex flex-col space-y-1 w-full">
          <label className="font-medium">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="h-[40px] rounded-[8px] border-[1px]  border-[#F6FAFD] shadow-lg px-2 focus:outline-gray w-full"
          >
            <option value="applicant">Applicant</option>
            <option value="employer">Employer</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input
            placeholder="Enter your name"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Enter your gender"
            label="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="date"
            placeholder="Enter your date of birth"
            label="Date of Birth"
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter your phone number"
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          <Input
            placeholder="Enter your College"
            label="College"
            onChange={(e) => setCollege(e.target.value)}
          />
          <Input
            placeholder="Enter your major"
            label="Major Subject"
            onChange={(e) => setMajors(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          {userType === "user" ? (
            <Input
              type="file"
              placeholder=""
              label="Upload your Resume"
              onChange={(e) => setResume(e?.target?.files[0])}
            />
          ) : null}
          <Input
            type="file"
            label="Profile Picture"
            onChange={(e) => setProfilePicture(e?.target?.files[0])}
          />
        </div>
        <Input
          type="textarea"
          placeholder="About You"
          label="About"
          onChange={(e) => setAboutYou(e.target.value)}
        />

        <button
          className="flex bg-gradient-to-r from-[#232B35] to-[#232B35] text-white px-8 h-[40px] rounded-[8px] items-center justify-center"
          onClick={async () => {
            if (anythingMissing) {
              missingFields();
            } else {
              setShowLoader("");
              await handleSignup();
              if (!successfullSignup) {
                setShowLoader("hidden");
                signupFailed();
              }
            }
          }}
        >
          <Loader showLoader={showLoader} />
          Sign Up
        </button>
        <p>or</p>
        <p>
          Already have an account?{" "}
          <span>
            <Button text="Login" onClick={() => navigate("/login")} />
          </span>
        </p>
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
    </AuthLayout>
  );
};

export { SignUp };
