import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../forms/Button";
import Input from "../forms/Input";
import GoogleIcon from "../svg/GoogleIcon";
import FacebookIcon from "../svg/FacebookIcon";

const SignInForm = () => {
  const [isSignInButtonProcessing, setIsSignInButtonProcessing] =
    useState(false);
  const [isGoogleButtonProcessing, setIsGoogleButtonProcessing] =
    useState(false);
  const [isFacebookButtonProcessing, setIsFacebookButtonProcessing] =
    useState(false);

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

  const handleFacebookSubmit = async (e) => {
    e.preventDefault();
    setIsFacebookButtonProcessing(true);
    // Handle your "Submit with Facebook" logic here
    setTimeout(() => {
      setIsFacebookButtonProcessing(false);
    }, 2000);
  };

  return (
    <div className="sign-in-container">
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
            Don’t have an account?{" "}
            <Link to="/create-account" className="sign-up-link">
              Click Here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
