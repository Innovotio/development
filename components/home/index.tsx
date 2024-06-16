import Header from "./header";
import Description from "./description";
import Banner from "../banner";
import Testimonial from "./testimonial";
import Services from "./services";

const Home = () => {
  return (
    <div>
      <Header />
      <Description />
      <Services />
      <Testimonial />
      <Banner />
    </div>
  );
};

export default Home;
