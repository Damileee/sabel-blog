import LeftArrowImg from "../../assets/images/left-arrow.png";
import Button from "../forms/Button";
import Input from "../forms/Input";

const Profile = () => {
  return (
    <div>
      <header>
        <div>
          <img src={LeftArrowImg} alt="" />
          <h1>Profile</h1>
        </div>
      </header>
      <div>
        <span>Profile Settings</span>
        <div></div>
        <span>Profile Picture</span>
        <span>You can upload a JPG or PNG file. Maximum file size is 2MB.</span>
        <Button label="Change Picture" className="profile-picture-button" />
      </div>
      <div>
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
      </div>
      <div>
        <h2>Membership Area</h2>
        <span>
          <span>
            <div>Membership</div>
            <div>04/12/2024</div>
          </span>
          <Button label="READ MORE" className="homepage-button" />
        </span>
      </div>
      <div>
        <h3>Email Preferences</h3>
        <div>
          <div>
            <span>Sabel Promotions</span>
          </div>
          <div>
            <span>Sabel News and Offers</span>
          </div>
          <div>
            <span>Events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
