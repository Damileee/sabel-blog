import SearchIcon from "./svg/SearchIcon.svg";
import HeartIcon from "./svg/HeartIcon.svg";
import UserIcon from "./svg/UserIcon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="first-link">
          <Link to="/membership">MEMBERSHIP</Link>
          <Link to="/about-page">ABOUT</Link>
        </div>
      </nav>
      <div className="header">
        <h1>
          <span>S<span className="rotate">A</span>BEL</span>
        </h1>
        <p>The conscious glitterati</p>
      </div>
      <div className="icon-nav">
        <img src={SearchIcon} alt="Search Icon" />
        <img src={HeartIcon} alt="Heart Icon" />
        <img src={UserIcon} alt="User Icon" />
      </div>
    </div>
  );
};

export default Navbar;
