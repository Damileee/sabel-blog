import React, { useState } from "react";
import Button from "../forms/Button";
import Input from "../forms/Input";

const SignInForm = () => {
  const [isButtonProcessing, setIsButtonProcessing] = useState(false);
  const isButtonDisabled = isButtonProcessing;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    // Handle your form submission logic here
    setIsButtonProcessing(true);

    // Simulate some asynchronous operation, e.g., making an API request
    // Replace this with your actual asynchronous operation
    // For this example, I'll simulate a 2-second operation
    setTimeout(() => {
      // After the operation is done, set isButtonProcessing to false
      setIsButtonProcessing(false);
    }, 2000); // Simulate a 2-second operation
  };

  return (
    <div>
      <div className="sign-in-form-header">
        <h1>Sign In</h1>
        <span>Welcome Back, please login below</span>
      </div>
      <div className="sign-in-form">
        <form onSubmit={handleFormSubmit}>
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
              type="submit" // i'm Using type="submit" to trigger form submission
              isDisabled={isButtonDisabled}
              isProcessing={isButtonProcessing}
              className="custom-button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
