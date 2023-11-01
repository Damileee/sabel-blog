import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInForm from "../components/login/SignInForm";
import SignUpForm from "../components/login/SignUpForm";
import About from "../components/pages/About";
import Membership from "../components/pages/Membership";
import Home from "../components/pages/Home";

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignInForm} />
        <Route path="/create-account" component={SignUpForm} />
        <Route path="/about-page" component={About} />
        <Route path="/membership" component={Membership} />
      </Switch>
    </Router>
  );
};

export default Index;
