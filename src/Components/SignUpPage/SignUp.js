import { SiTwitter } from "react-icons/si";
import "./SignUpPage.css";

const SignUp = ({handleOpenModal}) => {
  return (
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
        <div className="mid-section" >
          <h1>Join Twitter today.</h1>
          <button className="google-signUp">Sign up with Google</button><br/>
          <button className="google-signUp">Sign up with Apple</button><br/>
          {/* <div className="or-style">
          <hr/>
          <p>or</p>
          <hr/>
          </div> */}
          <button className="email-btn" onClick={handleOpenModal}>Sign up with phone or email</button>
        </div>

        <div className="sign-in">
          <p>Already have an account?</p>
          <button onClick={handleOpenModal}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
