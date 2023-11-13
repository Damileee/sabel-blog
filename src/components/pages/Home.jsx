import DefaultLayout from "../../layout/Default";
import FirstImg from "../../assets/images/home-page_first-img.png";
import FlexImgOne from "../../assets/images/fleximg1.png";
import FlexImgTwo from "../../assets/images/fleximg2.png";
import FlexImgThree from "../../assets/images/fleximg3.png";
import SecondImg from "../../assets/images/home-page_second-img.png";
import Button from "../forms/Button";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="home_page-container">
        <h1>This month’s finest</h1>
        <div className="home_page_img-container">
          <img src={FirstImg} alt="" />
        </div>
        <div>
          <h2>Title goes here</h2>
          <div className="home_page-first-span">
            <span>Photography by Peter Jordanov</span>
          </div>
          <div className="home_page-second-span">
            <span>
              Sustainable fashion is not just a trend, it is a movement that is
              changing the way we think about fashion. It is a movement that is
              empowering designers, brands, and consumers to make conscious
              choices and to create a better future for ourselves and for
              generations to come. Let us join together in this movement and
              imagine a world where fashion is not only beautiful, but also
              sustainable and ethical ...
              <span className="fashion">Read More</span>
            </span>
          </div>
        </div>
        <div className="home_page-img-container">
          <img src={FlexImgOne} alt="" />
          <img src={FlexImgTwo} alt="" />
          <img src={FlexImgThree} alt="" />
        </div>
        <div className="home_page_img-container">
          <img src={SecondImg} alt="" />
        </div>
        <div className="home_page-third-span">
          <span>Take my blues away</span>
          <span>Photography by Peter Jordanov</span>{" "}
          <span>Interview by Isabelle Zeuch</span>
          <span>
            Lebanese renaissance woman HALA MOAWAD creates one-off leather
            garments from{" "}
          </span>
          <span>
            fleamarket pieces and appliquéd off-cuts. She gives these pieces a
            new life, rising out of
          </span>{" "}
          <span>the remnants like a phoenix from the flames.</span>
        </div>
        <div>
          <Button label="READ MORE" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
