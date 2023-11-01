import TypewriterIcon from "../svg/TypewriterIcon.svg";
import ArrowbarIcon from "../svg/ArrowbarIcon.svg";
const Footer = () => {
  return (
    <div className="footer-container-body">
      <div className="footer-container">
        <div>
          <img src={TypewriterIcon} alt="Typewriter Icon" />
        </div>
        <span className="footer-first-span">
          Sign up now and let's make sustainable fashion the new black!
        </span>
        <div className="footer-second-span">
          Join our sustainable style squad and never miss a beat on the latest
          sustainable fashion trends!
        </div>
        <form action="">
          <div className="footer-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="footer-input"
            />
            <span>
              <img src={ArrowbarIcon} alt="Arrow Icon" />
            </span>
          </div>
        </form>
      </div>
          <span className="footer-third-span">
            By subscribing to the Sabel’s newsletter, you agree to our{" "}
            <span>Terms of Service</span> and <span>Privacy Policy</span>.
          </span>
    </div>
  );
};

export default Footer;
