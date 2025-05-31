import CallToAction from "../../component/CallToAction/CallToAction";
import Footer from "../../component/footer/Footer";
import Hero from "../../component/hero/Hero";
import Navbar from "../../component/navbar/Navbar";
import Reviews from "../../component/reviews/Reviews";
function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <CallToAction/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default Homepage;
