import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Signin_signup from "./pages/Signin_signup/Signin_signup";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />}></Route> */}
      <Route path="/signin_signup" element={<Signin_signup />} />
    </Routes>
  );
}

export default App;
