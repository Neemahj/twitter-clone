import { SiTwitter } from "react-icons/si";
import "./SignUpPage.css";
import Modal from "react-modal";
import Register from "./Register";
import LoginPage from "./LoginPage";
import { useState } from "react";

const SignUp = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };
  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  return (
    <>
      <Modal className="sign-in-modal" isOpen={openModal}>
        <Register handleCloseModal={handleCloseModal} />
      </Modal>
      <Modal className="sign-in-modal" isOpen={openModal2}>
        <LoginPage handleCloseModal2={handleCloseModal2} />
      </Modal>

      <div className="first-page">
        <div className="login-image">
          <img
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png"
            alt="twitter background"
          />
          {/* <img src=""/> */}
        </div>

        <div className="login-fields">
          <div className="bird-icon">
            <SiTwitter style={{ fontSize: 50, color: "rgb(29 161 242)" }} />
          </div>
          <div className="h1-text">
            <h1>Happening now</h1>
          </div>
          <div className="mid-section">
            <p className="join-twitter">Join Twitter today.</p>
            <button className="google-signUp" onClick={handleOpenModal}>
              Sign up with Google
            </button>
            <br />
            <button className="google-signUp" onClick={handleOpenModal}>
              Sign up with Apple
            </button>
            <br />
            <button className="email-btn" onClick={handleOpenModal}>
              Sign up with phone or email
            </button>
            <p>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
          </div>

          <div className="sign-in">
            <p>Already have an account?</p>
            <button onClick={handleOpenModal2}>Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
