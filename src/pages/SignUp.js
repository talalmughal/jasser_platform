import { AuthLayout, Button, Input } from "components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userType, setUserType] = useState("user");
  const navigate = useNavigate();
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
            <option value="user">User</option>
            <option value="employer">Employer</option>
          </select>
        </div>
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

        <div className="flex flex-col md:flex-row gap-8 items-center w-full">
          {userType === "user" ? (
            <Input type="file" placeholder="" label="Upload your Resume" />
          ) : null}
          <Input type="file" label="Profile Picture" />
        </div>
        <Input type="textarea" placeholder="About You" label="About" />

        <Button
          variant="primary"
          text="Sign Up"
          onClick={() => navigate("/")}
        />
        <p>or</p>
        <p>
          ALready have an account?{" "}
          <span>
            <Button text="Login" onClick={() => navigate("/login")} />
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

export { SignUp };
