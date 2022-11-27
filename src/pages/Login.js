import { AuthLayout, Button, Input } from "components";
import React, { useState } from "react";

const Login = () => {
  const [userType, setUserType] = useState("user");
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-center p-8 lg:px-32 space-y-4">
        <p className="text-2xl font-bold text-center">Login to your account</p>
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
        <Input type="email" placeholder="Enter your email" label="Email" />
        <Input
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
        <Button text="Login" variant="primary" />
        <p>or</p>
        <Button text="Create an account" variant="tertiary" />
      </div>
    </AuthLayout>
  );
};

export { Login };
