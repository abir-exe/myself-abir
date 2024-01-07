// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, A11y, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import { FaLink } from "react-icons/fa";

const MyProjects = () => {
  return (
    <div id="projects">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-semibold border-b-2 inline px-5 py-1">
          My Projects
        </h2>
      </div>
      {/* slider  */}
      <div className="w-full px-4 md:px-0 md:w-2/5 mx-auto my-10 mt-20">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, A11y, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card   bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/T1ZJMpY/Tech-Mart-Google-Chrome-12-12-2023-7-22-22-PM.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">TechMart</h2>
                <Link to="https://techmart001.web.app/">
                  <button className="btn btn-outline btn-sm">
                    Demo <FaLink></FaLink>
                  </button>
                </Link>
                <p>
                  <span className="font-semibold text-xl">
                    Features of the project:
                  </span>{" "}
                  <br />
                  This Website is fully dynamic and contains multiple pages and
                  routes. There is a authentication method with email and
                  password and google login method. so that users can login and
                  register easily. This website has the ability to show Products
                  based on brand Names. And to view their details. Users can add
                  the product to their cart or delete from the cart.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card   bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/vLFj8rr/Img-BB-Upload-Image-Free-Image-Hosting-Google-Chrome-12-12-2023-7-24-03-PM.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">BlogBloom</h2>
                <Link to="https://blogbloom-0006.web.app/">
                  <button className="btn btn-outline btn-sm">
                    Demo <FaLink></FaLink>
                  </button>
                </Link>
                <p>
                  <span className="font-semibold text-xl">
                    Features of the project:
                  </span>
                  <br />
                  There is a authentication method with email and password and
                  google login method. so that users can login and register
                  easily. The data is different for different users. This
                  Website is fully dynamic and contains multiple pages and
                  routes. Users can choose a package and order it. 5.THis
                  website is responsive for both mobile and laptop.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card   bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/ZB4sFJm/Img-BB-Upload-Image-Free-Image-Hosting-Google-Chrome-12-12-2023-7-23-56-PM.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">OscorpTech Asset Management</h2>
                <Link to="https://oscorp-tech-asset-management.web.app/">
                  <button className="btn btn-outline btn-sm">
                    Demo <FaLink></FaLink>
                  </button>
                </Link>
                <p>
                  <span className="font-semibold text-xl">
                    Features of the project:
                  </span>{" "}
                  <br />
                  THis website is responsive for both mobile and laptop. There
                  is a authentication method with email and password and google
                  login method. so that users can login and register easily
                  using Firebase. This website has three modes based on three
                  types of users. Employees can work for their company and
                  Admin/HR can monitor them.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card   bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://i.ibb.co/nL0T1pr/KCF-Co-Ltd-Google-Chrome-1-7-2024-7-32-01-PM.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">OscorpTech Asset Management</h2>
                <Link to="https://oscorp-tech-asset-management.web.app/">
                  <button className="btn btn-outline btn-sm">
                    Demo <FaLink></FaLink>
                  </button>
                </Link>
                <p>
                  <span className="font-semibold text-xl">
                    Features of the project:
                  </span>{" "}
                  <br />
                  THis website is responsive for both mobile and laptop. There
                  is a authentication method with email and password and google
                  login method. so that users can login and register easily
                  using Firebase. This website has three modes based on three
                  types of users. Employees can work for their company and
                  Admin/HR can monitor them.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MyProjects;
