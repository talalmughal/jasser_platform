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
// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

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
  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route path="/" element={<Homepage />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<SignUp />} />
    //   <Route path="/profile" element={<Profile />} />
    //   <Route path="/applicants" element={<Applicants />} />
    //   <Route path="/employers" element={<Employers />} />
    //   <Route path="/jobpost" element={<JobPost />} />
    //   <Route path="/jobdetails/:id" element={<JobDetails />} />
    //   <Route path="/user/:id" element={<UserDetails />} />
    // </Routes>
  );
}

export default App;
