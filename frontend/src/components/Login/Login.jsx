import React from "react";
import { getAPI, postAPI } from "../API/API";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import "../../pages/Signin_signup/Signin_signup";

import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container sign-in-container">
      <form>
        <h1 className="title">Sign In</h1>
        <div className="social-container ">
          <a className="social">
            <BsFacebook />
          </a>
          <a className="social">
            <AiFillLinkedin />
          </a>
          <a className="social">
            <AiOutlineInstagram />
          </a>
        </div>
        <span className="span">Already have an account? </span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignin} className="btn-signin">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
