import React, { useState } from "react";
import {IoMdClose} from "react-icons/io";
import "./SignUpPage.css";

const Register = ({ handleCloseModal }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    username: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) =>{
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
  };

  
  return (
    <div>
      <IoMdClose className="close-modal" onClick={handleCloseModal} style={{ fontSize: 25}}  />
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
      <input
        type="email"
        name="email"
        value={userDetails.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
       <input
        type="text"
        name="username"
        value={userDetails.username}
        onChange={handleChange}
        placeholder="Select your unique username"
        required
      />
       <input
        type="password"
        name="password1"
        value={userDetails.password1}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="password1"
        value={userDetails.password2}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />
      </form>  
    </div>
  );
};

export default Register;
