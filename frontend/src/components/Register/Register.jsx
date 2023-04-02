import React from "react";
import { getAPI, postAPI } from "../API/API";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../../pages/Signin_signup/Signin_signup";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateInputs() {
    if (!!!name || !email || !password) {
      toast.error("All fields are required.");
      console.log("ali");
      return;
    } else if (name.length < 5 || email.length < 5 || password.length < 5) {
      toast.error("Inputs should be more than 5");
      return;
    }
  }
  const handleSignup = async (e) => {
    e.preventDefault();
    validateInputs();
    const data = { email: email, name: name, password: password };
    const url = "http://127.0.0.1:8000/auth/register",
      response = await postAPI(url, data);
    console.log(response);
    console.log(response.data.message);
    if (response.data.message === "success") {
      toast.success(`You Are Now Registered.`);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      toast.error("Error signing up.");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        <h1 className="title">Create New Account</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
        <button className="btn-signin" id="sup" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Register;
