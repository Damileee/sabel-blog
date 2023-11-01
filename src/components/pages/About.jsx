import DefaultLayout from "../../layout/Default";
import AboutImage from "../../assets/images/about-image.png"

const About = () => {
  return (
    <DefaultLayout>
      <div>
        <div>
          <h1>About</h1>
          <span>The conscious glitterati</span>
        </div>
        <img src={AboutImage} alt="lady in flower garden" className="about-img" />
      </div>
    </DefaultLayout>
  );
};

export default About;
