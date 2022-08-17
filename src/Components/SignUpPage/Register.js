import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./SignUpPage.css";

const Register = ({ handleCloseModal }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    setUserDetails((previousState) => ({ ...previousState, [e.target.name]: e.target.value }));
  };

  return (
    <div className="register-page">
      <IoMdClose
        className="close-reg-modal"
        onClick={handleCloseModal}
        style={{ fontSize: 25 }}
      />
      <div className="reg-details">
      <h1>Create your Account</h1>
      <form>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <br />
        <input
          type="text"
          name="username"
          value={userDetails.username}
          onChange={handleChange}
          placeholder="Select your unique username"
          required
        />
        <br />
        <input
          type="password"
          name="password1"
          value={userDetails.password1}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <br />
        <input
          type="password"
          name="password2"
          value={userDetails.password2}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <br />
        <button className="reg-btn">Sign Up</button>
      </form>
      </div>
      
    </div>
  );
};

export default Register;
