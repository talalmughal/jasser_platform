import { AuthLayout, Button, Input } from "components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("user");
  const navigate = useNavigate();
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
            <option value="user">User</option>
            <option value="employer">Eployer</option>
          </select>
        </div>
        <Input type="email" placeholder="Enter your email" label="Email" />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
        <Button text="Login" variant="primary" onClick={() => navigate("/")} />
        <p>or</p>
        <Button
          text="Create an account"
          variant="tertiary"
          onClick={() => navigate("/signup")}
        />
      </div>
    </AuthLayout>
  );
};

export { Login };
