import React from "react";
import course from "./course.jpg";
import courcePIC from "./Untitled.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
const Courses = () => {
  return (
    <div className="bg-[#001D3D] font-Inter text-white sm:h-[3100px]  h-[4000px] w-full">
      <div
        id="Heading"
        className="absolute top-[15%] left-[15%] sm:left-[41%] "
      >
        <h1 className="delay-100 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-900 animate-bounce text-[62px] font-semibold   w-full">
          Courses
        </h1>
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
          <button className=" ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            Learn More
          </button>
        </div>
        <div className="item bg-[#273F59] sm:mr-1 mb-4 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePIC} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            CHEMISTRY BASIC TO PRO
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <button className=" ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            Learn More
          </button>
        </div>
        <div className="item bg-[#273F59] sm:mr-1 mb-4 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePIC} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            CHEMISTRY BASIC TO PRO
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <button className=" ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            Learn More
          </button>
        </div>
        <div className="item bg-[#273F59] sm:mr-1 mb-4 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePIC} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            CHEMISTRY BASIC TO PRO
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <button className=" ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            Learn More
          </button>
        </div>
        <div className="item bg-[#273F59] mr-1 w-full md:w-1/2 lg:w-1/3 h-[640px]">
          <img src={courcePIC} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            CHEMISTRY BASIC TO PRO
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <button className=" ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            Learn More
          </button>
        </div>
        <div className="item hidden sm:ml-1 bg-[#273F59] w-full md:w-1/2 lg:w-1/3 h-[600px]">
          <img src={courcePIC} alt="/" />
          <h1 className="text-[32px] font-Poppins font-extrabold py-3 px-3">
            CHEMISTRY BASIC TO PRO
          </h1>
          <p className="px-4 font-medium text-[18px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            consectetur?
          </p>
          <button className=" ml-2 mt-2 sm:mt-5 bg-[#001D3D] px-6 py-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
