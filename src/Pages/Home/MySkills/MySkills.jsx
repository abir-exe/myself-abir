/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

const MySkills = () => {
  return (
    <div id="skills" className="overflow-hidden">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-semibold border-b-2 inline px-5 py-1">
          My Skills
        </h2>
      </div>
      <div className="my-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 p-10 px-20 items-center">
          <div className="w-full md:w-6/12 mt-10">
           
            <Swiper
              modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"2"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              
              className="mySwiper"
            >
              <SwiperSlide>
             
                <div className="card h-96  bg-base-100 text-white shadow-xl image-full">
                  <figure>
                    <img
                      src="https://i.ibb.co/hd5HXfY/coding-workshop-abstract-concept-vector-illustration-code-writing-workshop-online-programming-course.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mb-10 ">
                         <Typewriter
            words={['Front_End']}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
          />
                        </h2>
                    <p className="text-gray-50 font-semibold text-justify">
                      I always try to bring a versatile skill set to the
                      forefront of my digital expertise. Proficient in front-end
                      development, I specialize in harnessing the power of
                      React.js to create dynamic and responsive user interfaces.
                    </p>
                    <div className="card-actions justify-end">
                       
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card h-96  bg-base-100 text-white shadow-xl image-full">
                  <figure>
                    <img
                      src="https://i.ibb.co/y0PkWpq/2.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mb-10">
                    <Typewriter
            words={['Backend']}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h2>
                    <p className="text-gray-50 font-semibold text-justify">
                     
                      On the back end, I navigate the realms of Node.js and
                      Express.js to ensure robust server-side functionality. In
                      the database realm, I wield the capabilities of MongoDB to
                      manage and organize data with efficiency and precision.
                    </p>
                    <div className="card-actions justify-end">
                       
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card h-96  bg-base-100 text-white shadow-xl image-full">
                  <figure>
                    <img
                      src="https://i.ibb.co/xhjBpR0/3.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                  <h2 className="card-title mb-10">
                    <Typewriter
            words={['Teamwork']}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h2>
                    <p className="text-gray-50 font-semibold text-justify">
                      
                      From conceptualization to deployment, I thrive on
                      translating innovative ideas into immersive digital
                      experiences. In addition to technical prowess, I bring
                      effective collaboration and helpful communication skills to the
                      table.
                    </p>
                    <div className="card-actions justify-end">
                       
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="font-semibold hidden md:block text-justify">
              <br />

              <br />
            </p>
          </div>
          {/* <div className="divider lg:divider-horizontal"></div> */}
          <div data-aos="fade-left"
      className="w-full md:w-6/12 ">
            <h3>Javascript</h3>
            <progress className="progress " value={70} max="100"></progress>
            <h3>React.js</h3>
            <progress className="progress " value="80" max="100"></progress>
            <h3>Tailwind</h3>
            <progress className="progress " value="90" max="100"></progress>
            <h3>Bootstrap</h3>
            <progress className="progress " value="80" max="100"></progress>
            <h3>Node.js</h3>
            <progress className="progress " value="60" max="100"></progress>
            <h3>Express.js</h3>
            <progress className="progress " value="60" max="100"></progress>
            <h3>Mongo DB</h3>
            <progress className="progress " value="70" max="100"></progress>
            <h3>Git</h3>
            <progress className="progress " value="80" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
