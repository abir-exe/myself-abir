
import { Typewriter } from 'react-simple-typewriter'

const AboutMe = () => {
  return (
    <div id='about' className="my-10 overflow-x-hidden">
        <div className="text-center mb-5">
            <h2 className="text-4xl font-semibold border-b-2 inline px-5 py-1">About Me</h2>
            
        </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10 p-10 px-20 items-center">
        <div data-aos="fade-right" className="md:w-4/12">
            <img src="https://i.ibb.co/qdM3RdJ/banner.jpg" alt="Abir Mahmud standing in PUST" />
        </div>
        <div className="divider lg:divider-horizontal"></div> 
        <div data-aos="fade-left" className="md:w-6/12 space-y-2">
            <h3 className="text-4xl font-bold">I am Abir Mahmud</h3>
            <h1 className="text-2xl">
       
        <span style={{ color: 'black', fontWeight: 'semibold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['A MERN Stack Developer...', 'A Quick Learner...', 'I Love To Learn And Explore..!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
            <p className="font-semibold text-justify">Greetings, I am a meticulous Front-End Developer distinguished by proficiency in React.js, Tailwind, Firebase, Node.js, Express.js, and MongoDB. My dedication is centered on the creation of precise and visually compelling user interfaces that harmoniously integrate artistic flair with practical functionality. Demonstrating a keen attention to detail, I excel in transforming conceptualizations into immersive digital experiences, overseeing the entire developmental lifecycle from ideation to deployment. I am enthusiastic about collaborating to shape the future through innovative and impactful digital solutions. Let us embark on this journey together!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
