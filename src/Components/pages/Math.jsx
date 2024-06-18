import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { FaDotCircle } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";

import "./page.css";
const Math = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, []);
  return (
    <>
      <div className="bg-gradient-to-br from-[#2b5686]  to-[#001D3D] w-[450px] scroll-smooth  sm:w-full font-Inter text-white sm:min-h-[100vh]  h-[4000px] ">
        <main>
          <div
            id="head-div"
            className=" shadow-2xl absolute top-[15%] left-[9%] sm:left-[14%] font-Poppins font-extrabold"
          >
            <h1
              id="head"
              className="bg-[rgb(28,57,87)]  sm:px-20 sm:py-10 sm:w-full sm:text-[62px]"
            >
              G.MATH BASIC TO PRO!
            </h1>
          </div>
        </main>
        <section>
          <div className="absolute top-[0%] sm:top-[70%]  sm:left-[27%]">
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
          <div className=" absolute top-[100%] sm:top-[140%] left-[3%]">
            <div className="flex flex-row py-3">
              <FaDotCircle className="mr-2 mt-1" color="#fffff" size={38} />
              <h1
                id="courseDetailsText"
                className="  underline text-3xl font-Poppins font-bold"
              >
                যাদের জন্য এই কোর্সটি :{" "}
              </h1>
            </div>
            <span
              id="courseDetailsTextSpan"
              className="text-2xl font-light  sm:w-[920px] py-10 mr-2"
            >
              আমি আমার দেশকে ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো আমি
              আমার দেশকে ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো আমি আমার
              দেশকে ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো আমি আমার দেশকে
              ভালোবাসি যা বাংলাদেশ যা বাংলাদেশের জন্য ভালো
            </span>
            <div className="py-36">
              <div className="flex flex-row py-3">
                <FaDotCircle className="mr-2 mt-1" color="#fffff" size={38} />
                <h1
                  id="courseDetailsText"
                  className="  underline text-3xl font-Poppins font-bold"
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
                স্বপ্ন পূরণ করেছে। আমরা জানি, তুমুল প্রতিযোগিতামূলক এই ভর্তি
                পরীক্ষায় চান্স পাওয়া একদম সহজ কাজ না, এজন্য যেমন প্রচুর
                পড়াশোনা দরকার, সাথে দরকার প্র্যাকটিস আর প্রিপারেশনকে ফুলপ্রুফ
                করতে নিয়মিত পরীক্ষা। তাই, এই কোর্সটি আমরা এমনভাবে সাজিয়েছি,
                যেন ৯৭টা লাইভ ক্লাসে সব কনসেপ্ট বুঝে নেয়ার পর সেই টপিকের উপর যত
                ধরনের প্রশ্ন হওয়া সম্ভব তা নিয়ে থাকছে একটা করে পরীক্ষা আর
                অ্যাডভান্স প্রশ্ন সলভিংয়ের ১৪০টা ভিডিয়ো। ১২টা উইকলি টেস্ট আর
                ২০টা MCQ ও রিটেন মডেল টেস্ট দিয়ে সারাদেশের মধ্যে নিজের
                র‍্যাঙ্কিং জানার সুযোগ! এছাড়া সবচেয়ে বেশি প্রশ্ন ও
                সল্যুশনসমৃদ্ধ ১০০% নির্ভুল প্রিন্টেড প্রশ্নব্যাংক, মাস্টার বুক
                আর এক্সারসাইজ বুক, বুয়েট-ঢাবি-মেডিকেল পাস অভিজ্ঞ শিক্ষকদের
                গাইডলাইন আর One-to-One ডাউট সলভিং সেশন।
              </span>
            </div>
            <div className="py-36">
              <div className="flex flex-row py-3">
                <FaDotCircle className="mr-2 mt-1" color="#fffff" size={38} />
                <h1
                  id="courseDetailsText"
                  className="mb-10  underline text-3xl font-Poppins font-bold"
                >
                  এই কোর্সে আপনি যা পাবেন :{" "}
                </h1>
              </div>
              <div className="flex flex-row">
                <span
                  id="courseDetailsTextSpan"
                  className=" text-3xl font-light  sm:w-[920px] mt-10 mr-2"
                >
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-3" />
                    <p>40+ live class</p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-3" />
                    <p>40+ live class</p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-3" />
                    <p>40+ live class</p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-3" />
                    <p>40+ live class</p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-3" />
                    <p>40+ live class</p>
                  </div>
                  <div className="flex flex-row">
                    <FaDiamond className="mr-3 mb-3" />
                    <p>40+ live class</p>
                  </div>
                </span>
              </div>
              <div className="py-12">
                <div className="flex flex-row py-3">
                  <FaDotCircle className="mr-2 mt-1" color="#fffff" size={38} />
                  <h1
                    id="courseDetailsText"
                    className="mb-10  underline text-3xl font-Poppins font-bold"
                  >
                    কোর্স ইন্সট্রাক্টর :{" "}
                  </h1>
                  <span className="ml-10 text-3xl italic font-semibold font-Poppins">
                    REDWAN HUSHAN.
                  </span>
                </div>
              </div>
              <div className="py-20">
                <div className="flex flex-row py-3">
                  <FaDotCircle className="mr-2 mt-1" color="#fffff" size={38} />
                  <h1
                    id="courseDetailsText"
                    className="mb-10  underline text-3xl font-Poppins font-bold"
                  >
                    কোর্সটি কিভাবে কিনবেন? :{" "}
                  </h1>
                </div>
                <span
                  id="courseDetailsTextSpan"
                  className="text-2xl font-light  sm:w-[920px] py-10 mr-2"
                >
                  ভর্তি হওয়ার জন্য কোর্স ফি 01309270105 এই নাম্বারে (B-kash /
                  Nagad) এ Send money অথবা Cash in করবে। তারপর নিচে দেওয়া লিংকে
                  গিয়ে তোমার নাম এবং যে নাম্বার দিয়ে টাকা পাঠিয়েছো ঐটা লিখে
                  Join বাটনে ক্লিক করলেই ২৪ ঘন্টার মধ্যে এক্সেস পেয়ে যাবে।
                </span>
                <button className="mt-20 px-4 py-4 bg-slate-600 text-white font-medium">
                  PRICE: COMING SOON!
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Math;
