import React from "react";
import Logo from "../assets/Untitled.jpeg";
import HeroImgMobile from "../assets/a.jpeg";
import HeroImg from "../assets/Untitled-removebg-preview.png";
import LogoMobile from "../assets/b.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div id="base" className="w-full bg-[#001D3D] text-white h-full">
      <div className="">
        <img
          src={Logo}
          alt="logo"
          id="logo"
          className="w-[150px] h-[150px] m-auto animate-pulse delay-1000"
        />
        <img
          src={LogoMobile}
          alt="logo"
          id="logo2"
          className="sm:hidden h-[350px] m-auto animate-pulse delay-1000"
        />
      </div>

      <img id="pic2" className="sm:hidden" src={HeroImgMobile} alt="/" />

      <div className="flex justify-between m-auto">
        <div>
          <img
            id="pic1"
            src={HeroImg}
            alt="Hero Image"
            className="sm:sm:h-full"
          />
        </div>
        <div
          id="every"
          className="flex flex-col mr-10 absolute top-[40%] left-[45%]"
        >
          <h1
            id="title"
            className="text-[62px] font-Inter italic font-extrabold w-full"
          >
            REDWAN’S METHOD
          </h1>
          <h1
            id="title1"
            className="sm:hidden text-[62px] font-Inter italic font-extrabold w-full"
          >
            REDWAN’S METHOD
          </h1>
          <p className="font-Inter italic font-light w-[620px]">
            Redwan's Method isn't just about teaching – it's about empowering
            students. We craft effective SSC and HSC courses designed to
            transform the way you learn and approach exams.
          </p>
          <div id="btns" className="flex mt-10">
            <li className="font-Poppins mr-16 px-8 py-3 rounded-sm shadow-lg text-[18px] font-medium bg-[#273F59]">
              <Link to="/courses">My Courses</Link>
            </li>
            <button
              type="button" // Prevent unintentional navigation
              className="font-Poppins px-8 py-3 rounded-sm shadow-lg text-[18px] font-medium border"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
