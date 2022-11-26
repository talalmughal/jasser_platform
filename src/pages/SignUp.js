import { AuthLayout, Input } from "components";
import React, { useState } from "react";

const SignUp = () => {
  const [userType, setUserType] = useState("user");
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <p className="text-2xl font-bold">Create an account</p>
        <div className="flex flex-col space-y-1 w-full">
          <label className="font-medium">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="h-[40px] rounded-[8px] border-[1px] border-gray px-2 focus:outline-gray w-full"
          >
            <option value="user">User</option>
            <option value="employer">Eployer</option>
          </select>
        </div>
        <Input placeholder="Enter your name" label="Name" />
        <Input type="email" placeholder="Enter your email" label="Email" />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
        <Input type="textarea" placeholder="About You" label="About" />
        {userType === "user" ? (
          <Input type="file" placeholder="" label="Upload your Resume" />
        ) : null}
        <button className="bg-darkGray rounded-[8px] text-white px-4 py-1">
          Sign up
        </button>
      </div>
    </AuthLayout>
  );
};

export { SignUp };
