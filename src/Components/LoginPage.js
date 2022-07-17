import React from "react";
import { useState } from "react";
import {SiTwitter} from "react-icons/si";
import {IoMdClose} from "react-icons/io";


const LoginPage = ({ handleCloseModal }) => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <div className="icons">
      <IoMdClose className="close-modal" onClick={handleCloseModal} style={{ fontSize: 25}}  />
      <SiTwitter className="modal-bird" style={{ fontSize: 35, color: "rgb(29 161 242)" }} />
      </div>
      <div className="login-content">
      <h1>Sign in to Twitter</h1>
      <button>Continue with Google</button>
      <br />
      <button>Continue with Apple</button>
      <br />
      <p>or</p>
      <input
        type="text"
        name="username"
        value={login.username}
        onChange={handleChange}
        placeholder="Phone, email or username"
      /><br/>
      <input
        type="password"
        name="password"
        value={login.password}
        onChange={handleChange}
        placeholder="Password"
      /><br/>
      <button className="btn-login">Login</button><br></br>
      <button className="fgt-password">Forgot password?</button>

      </div>
      
      <div className="link-div">
      <p>Don't have an account?</p>
      <p>Sign Up</p>
      </div>
    </div>
  );
};

export default LoginPage;
