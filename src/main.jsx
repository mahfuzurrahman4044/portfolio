import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Layout";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Services from "./Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
