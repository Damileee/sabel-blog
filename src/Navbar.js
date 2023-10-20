import SearchIcon from './svg/SearchIcon.svg';
import HeartIcon from './svg/HeartIcon.svg';
import UserIcon from './svg/UserIcon.svg';

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="first-link">
          <div href="/signup">MEMBERSHIP</div>
          <div href="/about">ABOUT</div>
        </div>
      </nav>
      <div className="header">
          <h1>
            S<span>A</span>BEL
          </h1>
          <p>The conscious glitterati</p>
        </div>
        <div className='icon-nav'>
            <img src={SearchIcon} alt="Search Icon" />
            <img src={HeartIcon} alt="Heart Icon" />
            <img src={UserIcon} alt="User Icon" />
        </div>
    </div>
  );
};

export default Navbar;
