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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let nav = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    if ("token" in response) {
      var user = jwt_decode(response.token);
      // localStorage.setItem("user_id", user._id);
      // localStorage.setItem("username", user.username);

      try {
        localStorage.setItem("token", response["token"]);
        if (user.user_type === 1) {
          toast.success(`You Are Now Logged in.`);
          nav("/doctor");
        } else {
          toast.success(`You Are Now Logged in.`);
          nav("/patient");
        }
        setEmail("");
        setPassword("");
      } catch {
        toast.error("Failed.");
      }
    } else {
      toast.error("You are not Authorized!");
    }
  };
  const loginUser = async (credentials) => {
    // url = "/";
    // data_signin = credentials;
    // const response = await postAPI(url, data_signin);
  };
  return (
    <div className="form-container sign-in-container">
      <form>
        <h1 className="title">Sign In</h1>
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
