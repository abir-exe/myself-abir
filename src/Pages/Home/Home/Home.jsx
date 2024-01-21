import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import MyProjects from "../MyProjects/MyProjects";
import MySkills from "../MySkills/MySkills";


const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;