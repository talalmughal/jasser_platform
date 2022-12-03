import { ProtectedRoute } from "components";
import {
  Applicants,
  Employers,
  Homepage,
  JobDetails,
  JobPost,
  Login,
  MyJobs,
  Profile,
  SignUp,
  UserDetails,
} from "pages";
import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [isLoggedIn] = useState(true);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/employers",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Employers />
        </ProtectedRoute>
      ),
    },
    {
      path: "/employers/:id",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <UserDetails />
        </ProtectedRoute>
      ),
    },
    {
      path: "/applicants",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Applicants />
        </ProtectedRoute>
      ),
    },
    {
      path: "/applicants/:id",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <UserDetails />
        </ProtectedRoute>
      ),
    },
    {
      path: "/jobpost",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <JobPost />
        </ProtectedRoute>
      ),
    },
    {
      path: "/myjobs",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <MyJobs />
        </ProtectedRoute>
      ),
    },
    {
      path: "/job/:id",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <JobDetails />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Profile />
        </ProtectedRoute>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
