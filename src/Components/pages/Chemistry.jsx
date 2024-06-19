import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { FaDotCircle } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";

import "./page.css";
const Chemistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <>
      <div className=" bg-gradient-to-br from-[#2b5686]  to-[#001D3D] w-[450px] scroll-smooth  sm:w-full font-Inter text-white sm:min-h-[100vh]  h-[4000px] ">
        <main>
          <div
            id="head-div"
            className=" shadow-2xl absolute top-[15%] left-[9%] sm:left-[14%] font-Poppins font-extrabold"
          >
            <h1
              id="head"
              className="bg-[rgb(28,57,87)] sm:px-20 sm:py-10 sm:w-full sm:text-[62px]"
            >
              CHEMISTRY BASIC TO PRO!
            </h1>
          </div>
        </main>
        <section>
          <div className="absolute top-[-10%] sm:top-[70%]  sm:left-[27%]">
            <ReactPlayer
              id="player"
              className=""
              controls={true}
              url="https://www.youtube.com/watch?v=FICxFxZFmVw"
            />
            <ReactPlayer
              id="mobilePlayer"
              width="60%"
              height="100%"
              controls={true}
              className="sm:hidden"
              url="https://www.youtube.com/watch?v=FICxFxZFmVw"
            />
          </div>
          <div className="bg-sky-950 px-4 rounded-xl py-3 absolute top-[80%] sm:top-[140%] left-[3%]">
            <div className="flex flex-row py-3">
              <FaDotCircle
                className="mr-2 mt-2.5"
                color="yellowgreen"
                size={25}
              />
              <h1
                id="courseDetailsText"
                className="  underline sm:text-3xl font-Poppins font-bold"
              >
                যাদের জন্য এই কোর্সটি :{" "}
              </h1>
            </div>
            <span
              id="courseDetailsTextSpan"
              className=" text-2xl font-light leading-none  sm:w-[920px] py-10 mr-2"
            >
              আমি আমার দেশকে ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো আমি
              আমার দেশকে ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো আমি আমার
              দেশকে ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো আমি আমার দেশকে
              ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো
            </span>
            <div className="py-20">
              <div className="flex flex-row py-3">
                <FaDotCircle
                  className="mr-2 mt-2.5"
                  color="yellowgreen"
                  size={25}
                />
                <h1
                  id="courseDetailsText"
                  className="   underline text-3xl font-Poppins font-bold"
                >
                  কোর্সটি সম্পর্কে বিস্তারিত :{" "}
                </h1>
              </div>
              <span
                id="courseDetailsTextSpan"
                className="text-2xl font-light  sm:w-[920px] py-10 mr-2"
              >
                ঢাকা বিশ্ববিদ্যালয়ের A ইউনিটসহ অন্যান্য বিশ্ববিদ্যালয়- JU, RU,
                CU, BUP, Agri এবং গুচ্ছ ২৪টি বিশ্ববিদ্যালয়ের A ইউনিটের ভর্তি
                পরীক্ষার জন্য তোমাকে ১০০% প্রস্তুত করে তুলতে আমরা এই কোর্সটি
                সাজিয়েছি। তোমার স্বপ্ন যদি হয় ঢাকা বিশ্ববিদ্যালয়ে পড়া, তাহলে
                তোমার জন্য এই কোর্সটি হবে সময়ের সবচেয়ে সঠিক সিদ্ধান্ত! কারণ,
                এই কোর্সে শিক্ষক হিসেবে আছে ২৭ বছর পর্যন্ত অভিজ্ঞতাসম্পন্ন
                শিক্ষক প্যানেল। যাদের হাত ধরে অসংখ্য শিক্ষার্থী ইতোমধ্যে ঢাকা
                বিশ্ববিদ্যালয়সহ বিভিন্ন বিশ্ববিদ্যালয়ে ভর্তি হয়ে নিজেদের
                স্বপ্ন পূরণ করেছে।
              </span>
            </div>
            <div className="py-8">
              <div className="flex flex-row py-3">
                <FaDotCircle
                  className="mr-2 mt-2.5"
                  color="yellowgreen"
                  size={25}
                />
                <h1
                  id="courseDetailsText"
                  className="  underline text-3xl font-Bangla font-bold"
                >
                  এই কোর্সে আপনি যা পাবেন :{" "}
                </h1>
              </div>
              <div className="flex flex-row">
                <span
                  id="courseDetailsTextSpan"
                  className=" text-3xl font-light  sm:w-[920px] mt-5 mr-2"
                >
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-6" color="green" size={33} />
                    <p className="text-[23px] font-Poppins font-semibold">
                      40+ live class
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-6" color="green" size={33} />
                    <p className="text-[23px] font-Poppins font-semibold">
                      40+ live class
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-6" color="green" size={33} />
                    <p className="text-[23px] font-Poppins font-semibold">
                      40+ live class
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-6" color="green" size={33} />
                    <p className="text-[23px] font-Poppins font-semibold">
                      40+ live class
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-6" color="green" size={33} />
                    <p className="text-[23px] font-Poppins font-semibold">
                      40+ live class
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-6" color="green" size={33} />
                    <p className="text-[23px] font-Poppins font-semibold">
                      40+ live class
                    </p>
                  </div>
                </span>
              </div>
              <div className="py-12">
                <div className="flex flex-col sm:flex-row py-3">
                  <div className="flex flex-row">
                    <FaDotCircle
                      className="mr-2 mt-2.5"
                      color="yellowgreen"
                      size={25}
                    />
                    <h1
                      id="courseDetailsText"
                      className="mb-10  underline text-3xl font-Poppins font-bold"
                    >
                      কোর্স ইন্সট্রাক্টর :{" "}
                    </h1>
                  </div>
                  <span className="ml-10 text-3xl italic font-semibold font-Poppins">
                    REDWAN HUSHAN.
                  </span>
                </div>
              </div>
              <div className="py-20">
                <div className="flex flex-row py-3">
                  <FaDotCircle
                    className="mr-2 mt-2.5"
                    color="yellowgreen"
                    size={25}
                  />
                  <h1
                    id="courseDetailsText"
                    className="mb-1  underline text-3xl font-Poppins font-bold"
                  >
                    কোর্সটি কিভাবে কিনবেন? :{" "}
                  </h1>
                </div>
                <span
                  id="courseDetailsTextSpan"
                  className="text-2xl font-light  sm:w-[920px] py-2 mr-2"
                >
                  ভর্তি হওয়ার জন্য কোর্স ফি 01309270105 এই নাম্বারে (B-kash /
                  Nagad) এ Send money অথবা Cash in করবে। তারপর নিচে দেওয়া লিংকে
                  গিয়ে তোমার নাম এবং যে নাম্বার দিয়ে টাকা পাঠিয়েছো ঐটা লিখে
                  Join বাটনে ক্লিক করলেই ২৪ ঘন্টার মধ্যে এক্সেস পেয়ে যাবে।
                </span>
              </div>
              <button className="py-2 px-2 mt-2 text-white bg-opacity-25 bg-white bg-blur 4\ shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:py-3 sm:px-6 rounded-md flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold">
                  This Course Fee:
                </span>
                <span className="text-base sm:text-lg font-bold ml-1">
                  ৳১২৪০
                </span>
                <span className="text-xs sm:text-sm text-gray-700 ml-2 line-through">
                  ৳2,000
                </span>
                <span className="bg-yellow-400 text-purple-800 py-1 px-2 rounded-full text-xs sm:text-sm uppercase ml-4">
                  Special Offer
                </span>
              </button>
              <p className="font-inter py-1 px-2 text-[10px]">
                Lifetime access.
              </p>
              <p className="text-green-700 font-Poppins hover:cursor-pointer underline mt-2 px-2">
                <a href="https://wa.me/+880 1309-270105">Click here to buy</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chemistry;
