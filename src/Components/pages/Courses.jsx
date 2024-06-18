import React from "react";
import course from "./course.jpg";
import courcePIC from "./Untitled.jpg";
import courcePICPhysics from "./physics.jpg";
import courcePICMath from "./math.jpg";
import courcePICHigherMath from "./highermath.jpg";

import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className="bg-gradient-to-r from-[#001D3D] to-[#800080]  font-Inter text-white sm:h-[3100px]  h-[4000px] w-full">
      <div
        id="Heading"
        className="absolute top-[12%] left-[15%] sm:left-[41%] "
      >
        <h1 className="bg-clip-text text-transparent text-white italic -offset-8 text-[62px] font-semibold   w-full">
          Courses
        </h1>
        <p id="title-helper" className="w-full text-[12px] font-light mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div id="items" className="mr-2 ml-2 sm:ml-80 py-72 flex flex-wrap">
        <div className="item bg-[#273F59] sm:mr-1 mb-4 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePIC} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            CHEMISTRY BASIC TO PRO!
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <li className=" list-none w-[135px] ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            <Link to="/chemistry">Learn More</Link>
          </li>
        </div>{" "}
        <div className="item bg-[#273F59] sm:mr-1 mb-4 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePICPhysics} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            PHYSICS BASIC TO PRO!
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <li className="list-none w-[135px] ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            <Link to="/Physics">Learn More</Link>
          </li>
        </div>
        <div className="item bg-[#273F59] sm:mr-1 mb-4 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePICMath} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            GENERAL MATH BASIC TO PRO!
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <li className="list-none w-[135px] ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            <Link to="/Math">Learn More</Link>
          </li>
        </div>
        <div className="item bg-[#273F59] mr-1 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePICHigherMath} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            HIGHER MATH BASIC TO PRO!
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <li className="list-none w-[135px] ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            <Link to="/HigherMath">Learn More</Link>
          </li>
        </div>
        <div className="item hidden sm:hidden sm:ml-1 bg-[#273F59] w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePIC} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            CHEMISTRY BASIC TO PRO
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <li className="list-none w-[135px] ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            <Link to="/HigherMath">Learn More</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Courses;
