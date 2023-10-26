import React, { useState } from "react";
import Button from "../forms/Button";
import Input from "../forms/Input";
import GoogleIcon from "../svg/GoogleIcon.svg";

const SignInForm = () => {
  const [isSignInButtonProcessing, setIsSignInButtonProcessing] = useState(false);
  const [isGoogleButtonProcessing, setIsGoogleButtonProcessing] = useState(false);
  
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setIsSignInButtonProcessing(true);
    // Handle your "Sign In" form submission logic here
    setTimeout(() => {
      setIsSignInButtonProcessing(false);
    }, 2000);
  };

  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    setIsGoogleButtonProcessing(true);
    // Handle your "Submit with Google" logic here
    setTimeout(() => {
      setIsGoogleButtonProcessing(false);
    }, 2000);
  };

  return (
    <div>
      <div className="sign-in-form-header">
        <h1>Sign In</h1>
        <span>Welcome Back, please login below</span>
      </div>
      <div className="sign-in-form">
        <form onSubmit={handleSignInSubmit}>
          <div>
            <Input
              label="Email Address"
              type="email"
              className="input-field"
              placeholder=""
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              className="input-field"
              placeholder=""
            />
          </div>
          <div>
            <Button
              label="SIGN IN"
              type="submit"
              isDisabled={isSignInButtonProcessing}
              isProcessing={isSignInButtonProcessing}
              className="custom-button"
            />
          </div>
        </form>

        <div className="center-container">
          <div className="left-line"></div>
          <div className="or-text">OR</div>
          <div className="right-line"></div>
        </div>
        <div className="plain-button">
          <form onSubmit={handleGoogleSubmit}>
            <Button
              label="Continue with Google"
              type="submit"
              isDisabled={isGoogleButtonProcessing}
              isProcessing={isGoogleButtonProcessing}
              className="custom-button google-button"
            >
              <GoogleIcon />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
