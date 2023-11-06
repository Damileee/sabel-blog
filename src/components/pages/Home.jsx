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
        <div>
          <img src={FirstImg} alt="" className="home_page_img-container" />
        </div>
        <h2>Title goes here</h2>
        <span>Photography by Peter Jordanov</span>
        <span>
          Sustainable fashion is not just a trend, it is a movement that is
          changing the way we think about fashion. It is a movement that is
          empowering designers, brands, and consumers to make conscious choices
          and to create a better future for ourselves and for generations to
          come. Let us join together in this movement and imagine a world where
          fashion is not only beautiful, but also sustainable and ethical ...
          Read More
        </span>
        <div>
          <img src={FlexImgOne} alt="" />
          <img src={FlexImgTwo} alt="" />
          <img src={FlexImgThree} alt="" />
        </div>
        <div>
          <img src={SecondImg} alt="" />
        </div>
        <div>
          <span>Take my blues away</span>
          <span>Photography by Peter Jordanov Interview by Isabelle Zeuch</span>
          <span>Lebanese renaissance woman HALA MOAWAD creates one-off leather garments from fleamarket pieces and appliquéd off-cuts. She gives these pieces a new life, rising out of the remnants like a phoenix from the flames.</span>
        </div>
        <div>
          <Button
          label="READ MORE" 
          />
        </div>
    </DefaultLayout>
  );
};

export default Home;
