import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <div className="navcontainer">
      <div className="logo">
        <img src="../../assets/download (1).png" alt="" />
      </div>
      <div className="links">
        <Link to="../../pages/StudentCourses">
          <img src="../../assets/mycourses.png" alt="My Courses" />
        </Link>
        <Link to="../../pages/StudentMain">
          <img src="../../assets/home.png" alt="Home" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
