import DefaultLayout from "../../layout/Default";
import MembershipImg from "../../assets/images/membership-image.png"

const Membership = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Membership</h1>
        <div>
          <p>
            Our newsletter is intended to be a source of inspiration, education,
            and connection. You'll receive the latest news and trends in
            sustainability, ethical fashion, and conscious living, as well as
            tips and tricks for living a more sustainable lifestyle. Through our
            membership we want to take it one step further: it is a way for you
            to take action You'll be the first to know about exclusive offers,
            events, and opportunities to get involved in sustainability and
            ethical fashion. You'll also have access to resources, a vast area
            of projects you may want to support and tools to help you make a
            positive impact on the world. Becoming a member will empower you to
            make a difference, whether it's by making small changes in your
            daily life or by supporting sustainable fashion brands and
            initiatives. You'll also have the opportunity to connect with
            like-minded individuals and share your own ideas and experiences.
          </p>
        </div>
          <img src={MembershipImg} alt="Lady painting picture" />
          <div>
          <span>Select a membership</span>
          <div>
            <div></div>
            <div></div>
          </div>
          </div>
      </div>
    </DefaultLayout>
  );
};

export default Membership;
