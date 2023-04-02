import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Signin_signup from "./pages/Signin_signup/Signin_signup";
import Admin from "./pages/Admin/Admin";
import StudentMain from "./pages/StudentMain/StudentMain";
import StudentCourses from "./pages/StudentCourses/StudentCourses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landing />}></Route> */}
        <Route path="/signin_signup" element={<Signin_signup />} />
        <Route path="/studentMain" element={<StudentMain />} />
        <Route path="/studentCourses" element={<StudentCourses />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
