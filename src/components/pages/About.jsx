import DefaultLayout from "../../layout/Default";
import AboutImage from "../../assets/images/about-image.png";

const About = () => {
  return (
    <DefaultLayout>
      <div>
        <div className="about_header_container">
          <h1>About</h1>
          <span>The conscious glitterati</span>
        </div>
        <img
          src={AboutImage}
          alt="lady in flower garden"
          className="about-img"
        />
        <div className="about_section_container">
          <span className="first_span">Photography by Peter Jordanov</span>
          <span>
            Imagine a world where <span>fashion</span> is not only beautiful and stylish, but
            also <span>sustainable</span> and <span>ethical</span>.
          </span>
          <div>
            <p>
              A world where every piece of clothing is made with respect for the
              environment, workers, and consumers. A world where we can look
              good and feel good at the same time. This vision of sustainable
              fashion is not just a dream, it is a reality that we can create
              together. By embracing sustainable fashion, we can reduce the
              impact of the fashion industry on our planet and on people's
              lives. We can minimize waste, pollution, and harmful practices,
              while promoting innovation, creativity, and social responsibility.
              Sustainable fashion is not just a trend, it is a movement that is
              changing the way we think about fashion. It is a movement that is
              empowering designers, brands, and consumers to make conscious
              choices and to create a better future for ourselves and for
              generations to come. Let us join together in this movement and
              imagine a world where fashion is not only beautiful, but also
              sustainable and ethical. Let us inspire each other to make a
              positive difference in the world through fashion. Let us create a
              future where fashion is a force for good, and where we can all
              look and feel great while doing our part to protect our planet and
              our communities. We, at ‚The conscious glitterati’ aim to throw
              light into the vast majority of sustainable ideas, projects and
              innovations in the international world of fashion and support the
              positive impact these will have on our global society. So, get
              inspired, get motivated and, once and for all, get (sustainably)
              well dressed! :)
            </p>
          </div>
          <span>“I like the idea of <span>craziness with discipline</span>”</span>
          <span>Karl Lagerfeld</span>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
