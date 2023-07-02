import About from "../Components/AboutMe/About";
import Experience from "../Components/Experience/Experience";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Reach from "../Components/ReachMe/Reach";
import Skill from "../Components/Skill/Skill";

export default function index() {
  return (
    <div className="bg-repeat index">
      <Header />
      <About />
      <Skill />
      <Experience />
      <Reach />
      <Footer />
    </div>
  );
}
