import { useEffect, useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import MyProjects from "../MyProjects/MyProjects";
import MySkills from "../MySkills/MySkills";
import Loading from "../../../Components/Loading/Loading";

const Home = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto">
      {isloading ? (
        <Loading></Loading>
      ) : (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <AboutMe></AboutMe>
          <MySkills></MySkills>
          <MyProjects></MyProjects>
          <Education></Education>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Home;
