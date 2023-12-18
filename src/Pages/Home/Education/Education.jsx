/* eslint-disable react/no-unescaped-entities */

import { FaSchool } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <div id="education">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-semibold border-b-2 inline px-5 py-1">
          Education
        </h2>
      </div >
      {/* timeline */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className="p-10 my-10 overflow-hidden">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li >
    <div className="timeline-middle text-xl">
      <FaSchool></FaSchool>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2018</time>
      <div className="text-lg font-black">Secondary School Certificate (Science)</div>
      Salimganj A.R.M High School,
      <br />
      Nabinagar, Brahmanbaria.
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle text-xl">
      <LuSchool></LuSchool>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">2020</time>
      <div className="text-lg font-black">Higher Secondary Certificate (Science)</div>
      Salimganj College,
      <br />
      Nabinagar, Brahmanbaria
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle text-xl">
      <IoSchool></IoSchool>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">2021-Running</time>
      <div className="text-lg font-black">Bachelor of Science (Physics)</div>
      Pabna University of Scinence And Technology,
      <br />
      Rajapur, Pabna.
    </div>
    <hr />
  </li>
  
</ul>
      </div>
    </div>
  );
};

export default Education;
