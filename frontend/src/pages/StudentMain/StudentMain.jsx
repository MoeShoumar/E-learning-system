import { useState } from "react";
import "./StudentMain.css";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const StudentMain = () => {
  return (
    <div>
      <div className="classes">
        <Navbar />
      </div>
    </div>
  );
};

export default StudentMain;
