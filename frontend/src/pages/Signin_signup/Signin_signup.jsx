import { useState } from "react";
import "./signin_signup.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import React from "react";
import Register from "../../components/Register/Register";
import Login from "../../components/Login/Login";
import "../../components/Login/Login";
import "../../components/Register/Register";
const Signin_signup = () => {
  let nav = useNavigate();
  const [swap, setSwap] = useState(true);
  return (
    <div className="wholeContainer">
      <div
        className={swap ? "container" : "container right-panel-active"}
        id="container"
      >
        <Register />
        <Login />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="title">Welcome Back </h1>
              <p className="text">
                If you already have an account please sign and keep learning
              </p>
              <button
                onClick={() => {
                  setSwap(!swap);
                }}
                className="btn-signin ghost gradient-button gradient-button-1"
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="title">Hello Studnet</h1>
              <p className="text">
                Don't have an account? Sing up and keep learning{" "}
              </p>
              <button
                onClick={() => {
                  setSwap(!swap);
                }}
                className="btn-signin ghost gradient-button gradient-button-1 "
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin_signup;
