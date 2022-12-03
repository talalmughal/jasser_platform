import { AuthLayout, Button, Input } from "components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "components/Loader";

const Login = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("applicant");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anythingMissing, setAnythingMissing] = useState(true);
  const [showLoader, setShowLoader] = useState("hidden");
  const [successfullSignin, setSuccessfullSignin] = useState(false);

  // validation alert if any field is left empty
  const missingFields = () => toast.info("Email or Password in missing.");

  // validation alert if invalid email address is provided
  const invalidEmail = () => toast.warning("Invalid Email address provided");

  // validation alert if invalid password is provided
  const invalidPassword = () => toast.warning("Wrong password provided.");

  // validation alert if invalid password is provided
  const userNotFound = () => toast.warning("This account does not exist.");

  // validation alert in case of failing to sign in
  const signinFailed = () => toast.error("Sign in failed. Please try again.");

  // updating if anything is missing or not, whenever user inputs something
  useEffect(() => {
    if (email?.length <= 1 || password?.length <= 1) {
      setAnythingMissing(true);
    } else {
      setAnythingMissing(false);
    }
  }, [email, password]);

  // process of signing in the user
  const handleSignin = async () => {
    let userDocRef = undefined;
    userDocRef = await login(email, password, userType);
    if (!userDocRef?.code) {
      setSuccessfullSignin(true);
      setAnythingMissing(false);
      setShowLoader("hidden");
      if (userDocRef !== undefined) {
        navigate("/");
      }
    } else {
      setShowLoader("hidden");
      setSuccessfullSignin(false);
      console.log(userDocRef);
      if (userDocRef.code === "auth/invalid-email") {
        invalidEmail();
      }
      if (userDocRef.code === "auth/wrong-password") {
        invalidPassword();
      }
      if (userDocRef.code === "auth/user-not-found") {
        userNotFound();
      }
      console.log("error: ", userDocRef);
    }
  };

  return (
    <AuthLayout>
      <p className="relative z-20 text-lg md:text-3xl text-secondary font-bold text-center bg-white -mt-24 w-[150px] md:w-[300px] m-auto py-2 rounded-md shadow-lg">
        Login
      </p>
      <div className="flex flex-col items-center justify-center p-8 space-y-6 w-full md:w-[50%] lg:w-[30%] m-auto">
        <div className="flex flex-col space-y-1 w-full">
          <label className="font-medium">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="h-[40px] rounded-[8px] border-[1px] border-[#F6FAFD] shadow-lg px-2 focus:outline-gray w-full"
          >
            <option value="applicant">Applicant</option>
            <option value="employer">Employer</option>
          </select>
        </div>
        <Input
          type="email"
          placeholder="Enter your email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="flex bg-gradient-to-r from-[#232B35] to-[#232B35] text-white px-8 h-[40px] rounded-[8px] items-center justify-center"
          onClick={async () => {
            if (anythingMissing) {
              missingFields();
            } else {
              setShowLoader("");
              await handleSignin();
              if (!successfullSignin) {
                setShowLoader("hidden");
                signinFailed();
              }
            }
          }}
        >
          <Loader showLoader={showLoader} /> Login
        </button>
        <p>or</p>
        <Button
          text="Create an account"
          variant="tertiary"
          onClick={() => navigate("/signup")}
        />
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

export { Login };
