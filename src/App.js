import {
  Applicants,
  Employers,
  Homepage,
  JobDetails,
  JobPost,
  Login,
  Profile,
  SignUp,
  UserDetails,
} from "pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    element: <Employers />,
  },
  {
    path: "/employers/:id",
    element: <UserDetails />,
  },
  {
    path: "/applicants",
    element: <Applicants />,
  },
  {
    path: "/applicants/:id",
    element: <UserDetails />,
  },
  {
    path: "/jobpost",
    element: <JobPost />,
  },
  {
    path: "/job/:id",
    element: <JobDetails />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
