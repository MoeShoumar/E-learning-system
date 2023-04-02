import React from "react";
import { useNavigate, Link } from "react-router-dom";
import mycoursesImg from "../../assets/mycourses.png";
import homeImg from "../../assets/home.png";
import logoImg from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <div className="navcontainer">
      <div className="logo">
        <img className="logoimg" src={logoImg} alt="" />
      </div>
      <div className="links">
        <Link to="./StudentCourses">
          <img className="courseimage" src={mycoursesImg} alt="My Courses" />
        </Link>
        <Link to="./">
          <img className="homeimg" src={homeImg} alt="Home" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
