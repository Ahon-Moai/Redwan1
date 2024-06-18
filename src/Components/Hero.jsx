import React from "react";
import Logo from "../assets/a.png";
import HeroImgMobile from "../assets/a.jpeg";
import HeroImg from "../assets/Untitled-removebg-preview.png";
import LogoMobile from "../assets/b.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      id="base"
      className=" bg-gradient-to-r from-[#001D3D] to-pink-950 text-white "
    >
      <div className="flex flex-row justify-between">
        <img
          src={Logo}
          alt="logo"
          id="logo"
          className="w-[150px] h-[150px] m-auto "
        />
        <img
          src={LogoMobile}
          alt="logo"
          id="logo2"
          className="sm:hidden absolute ml-[-50px] mt-[-90px] h-[350px] "
        />
        <ul className="text-[0px] sm:hidden">
          <li>Home</li>
          <li>Course</li>
          <li>About</li>
        </ul>
        <ul className="sm:hidden mt-[65px] flex text-3xl mr-7 font-Poppins  ">
          <li className="mr-5">Home</li>
          <li className="mr-5">
            <Link to="/courses">Course</Link>
          </li>
          <li>About</li>
        </ul>
      </div>

      <img id="pic2" className="sm:hidden" src={HeroImgMobile} alt="/" />

      <div className="flex justify-between m-auto">
        <div>
          <img id="pic1" src={HeroImg} alt="Hero Image" className="" />
        </div>
        <div
          id="every"
          className="flex flex-col mr-10 absolute top-[40%] left-[45%]"
        >
          <h1
            id="title"
            className=" sm:text-[62px] font-Inter italic font-extrabold "
          >
            REDWAN’S METHOD
          </h1>
          <h1
            id="title1"
            className="sm:hidden text-[62px] font-Inter italic font-extrabold "
          >
            REDWAN’S METHOD
          </h1>
          <p id="title3" className="font-Inter italic font-light w-[620px]">
            Redwan's Method isn't just about teaching – it's about empowering
            students. We craft effective SSC and HSC courses designed to
            transform the way you learn and approach exams.
          </p>
          <div id="btns" className="flex flex-col sm:flex sm:flex-row mt-10">
            <li
              id="btn1"
              className="list-none font-Poppins mr-16 px-8 py-3 rounded-sm shadow-lg text-[18px] font-medium bg-[#273F59]"
            >
              <Link to="/courses">My Courses</Link>
            </li>
            <li
              id="btn2"
              type="button" // Prevent unintentional navigation
              className=" list-none font-Poppins px-8 py-3 rounded-sm shadow-lg text-[18px] font-medium border"
            >
              Contact Us
            </li>
            <li
              id="btn3"
              className="sm:hidden list-none font-Poppins mr-16 px-8 py-3 rounded-sm shadow-lg text-[18px] font-medium bg-[#273F59]"
            >
              <Link to="/courses">Contact Me</Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
