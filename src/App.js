import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInForm from "./components/login/SignInForm";
import SignUpForm from "./components/login/SignUpForm";
import About from "./components/pages/About";
import Membership from "./components/pages/Membership";
import Home from "./components/pages/Home";
import TransitionWrapper from "./components/login/TransitionWrapper";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <div>
            <Route
              render={({ location }) => (
                <TransitionWrapper location={location}>
                  <Switch location={location}>
                    <Route path="/login" component={SignInForm} />
                    <Route path="/create-account" component={SignUpForm} />
                  </Switch>
                </TransitionWrapper>
              )}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-page" component={About} />
              <Route path="/membership" component={Membership} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
