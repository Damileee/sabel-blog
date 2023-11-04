import DefaultLayout from "../../layout/Default";
import FirstImg from "../../assets/images/homefirstimg.png";
import FlexImgOne from "../../assets/images/fleximg1.png";
import FlexImgTwo from "../../assets/images/fleximg2.png";
import FlexImgThree from "../../assets/images/fleximg3.png";

const Home = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>This month’s finest</h1>
        <div>
          <img src={FirstImg} alt="" />
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
      </div>
    </DefaultLayout>
  );
};

export default Home;
