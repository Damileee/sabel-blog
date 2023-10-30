// Form.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TransitionWrapper from "./TransitionWrapper";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Form = () => {
  return (
    <Router>
      <Route render={({ location }) => (
        <TransitionWrapper location={location}>
          <Switch location={location}>
            <Route path="/login" component={SignInForm} />
            <Route path="/create-account" component={SignUpForm} />
          </Switch>
        </TransitionWrapper>
      )} />
    </Router>
  );
};

export default Form;