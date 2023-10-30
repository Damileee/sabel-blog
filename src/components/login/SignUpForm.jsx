import React, { useState } from "react";
import Button from "../forms/Button";
import Input from "../forms/Input";
import GoogleIcon from "../svg/GoogleIcon";
import FacebookIcon from "../svg/FacebookIcon";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [isSignUpButtonProcessing, setIsSignUpButtonProcessing] =
    useState(false);
  const [isGoogleButtonProcessing, setIsGoogleButtonProcessing] =
    useState(false);
  const [isFacebookButtonProcessing, setIsFacebookButtonProcessing] =
    useState(false);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setIsSignUpButtonProcessing(true);
    // Handle your "Sign In" form submission logic here
    setTimeout(() => {
      setIsSignUpButtonProcessing(false);
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

  const handleFacebookSubmit = async (e) => {
    e.preventDefault();
    setIsFacebookButtonProcessing(true);
    // Handle your "Submit with Facebook" logic here
    setTimeout(() => {
      setIsFacebookButtonProcessing(false);
    }, 2000);
  };

  return (
    <div>
      <div className="sign-up-container">
        <div className="sign-in-form-header">
          <h1>Sign Up</h1>
          <span>Welcome, please create your account</span>
        </div>
        <div className="sign-in-form">
          <form onSubmit={handleSignUpSubmit}>
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
                label="Full Name"
                type="name"
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
              <Input
                label="Retype Password"
                type="password"
                className="input-field"
                placeholder=""
              />
            </div>
            <div>
              <Button
                label="SIGN UP"
                type="submit"
                isDisabled={isSignUpButtonProcessing}
                isProcessing={isSignUpButtonProcessing}
                className="custom-button"
              />
            </div>
            <div className="center-container">
              <div className="left-line"></div>
              <div className="or-text">OR</div>
              <div className="right-line"></div>
            </div>
          </form>
          <div className="plain-button">
            <form onSubmit={handleGoogleSubmit}>
              <Button
                label="CONTINUE WITH GOOGLE"
                type="submit"
                isDisabled={isGoogleButtonProcessing}
                isProcessing={isGoogleButtonProcessing}
                className="google-button"
                icon={<GoogleIcon />}
              />
            </form>
            <form onSubmit={handleFacebookSubmit}>
              <Button
                label="CONTINUE WITH FACEBOOK"
                type="submit"
                isDisabled={isFacebookButtonProcessing}
                isProcessing={isFacebookButtonProcessing}
                className="facebook-button"
                icon={<FacebookIcon />}
              />
            </form>
          </div>
          <div className="buttom-nav-cotainer">
            <span className="sign-type-suggestion">
              Already have an account?{" "}
              <Link to="/login" className="sign-up-link">
                Click Here
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="tc-container">
        <span>By signing up, you agree to our <span className="tc-link">Terms of Use</span> and <span className="tc-link">Privacy Policy.</span></span>
      </div>
    </div>
  );
};

export default SignUpForm;
