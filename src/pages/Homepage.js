import { Layout } from "components";
import React from "react";
import Search from "assets/svg/Search.svg";
import Talent from "assets/svg/Talent.svg";
import Hiring from "assets/svg/Hiring.svg";
import SignUpIcon from "assets/svg/SignUpIcon.svg";
import ApplyIcon from "assets/svg/ApplyIcon.svg";
import PersonIcon from "assets/svg/PersonIcon.svg";
import SearchIcon from "assets/svg/SearchIcon.svg";
import Banner from "assets/images/Banner.png";
import Img1 from "assets/images/img1.png";
import Img2 from "assets/images/img2.png";
import Img3 from "assets/images/img3.png";
import Img4 from "assets/images/img4.png";
import Img5 from "assets/images/img5.png";
import Map from "assets/images/Map.png";
import SuccessPartners from "assets/images/SuccessPartners.png";

const Homepage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 -mt-20">
        <div className="order-last md:order-first flex flex-col items-center justify-center w-full p-8 leading-10 bg-[#F6FAFD]">
          <p className="text-[30px] md:text-[35px] lg:text-[50px] font-bold text-darkGray py-2">
            Search Between
          </p>
          <p className="text-[30px] md:text-[35px] lg:text-[50px] font-bold text-darkGray py-2">
            <span className="text-primary">200+</span> Companies
          </p>
          <p className="text-[30px] md:text-[35px] lg:text-[50px] font-bold text-darkGray py-2">
            <span className="text-primary">12+</span> Universities
          </p>
          <p className="py-4 text-center">
            نجسر الفجوة بين القطاع التعليمي وسوق العمل
          </p>
          <div className="flex flex-row items-center justify-between bg-white rounded-full shadow-md px-4 w-full lg:w-[50%]">
            <input
              type="text"
              placeholder="Search for job opportunities"
              className="rounded-full focus:outline-none"
            />
            <img src={Search} alt="search" className="h-6 w-6" />
          </div>
        </div>
        <div className="relative h-[500px]">
          <img src={Banner} className="w-full h-full" alt="banner" />
        </div>
      </div>
      <div className="grid grid-cols-5">
        <ImageWithText src={Img3} text="300+ Projects" />
        <ImageWithText src={Img5} text="50+ Companies" />
        <ImageWithText src={Img4} text="4000+ Students" />
        <ImageWithText src={Img1} text="12+ Universities" />
        <ImageWithText src={Img2} text="65+ Partnerships" />
      </div>
      <div className="w-full p-8 flex flex-col items-center justify-center space-y-8 bg-[#F6FAFD]">
        <p className="text-[30px] md:text-[35px] lg:text-[50px] font-bold text-darkGray py-2">
          What are you looking for?
        </p>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-8 space-y-4 sm:space-y-0">
          <div className="flex flex-col items-center justify-center rounded-[20px] shadow-lg p-4 w-72 space-y-4 h-96">
            <img src={Hiring} className="w-48 h-48" alt="icon" />
            <p className="text-darkGray text-2xl font-bold">Who is hiring?</p>
            <p className="text-center">
              Search between 50+ companies for a job in your major, region and
              best environments
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-[20px] shadow-lg p-4 w-72 space-y-4 h-96">
            <img src={Talent} className="w-48 h-48" alt="icon" />
            <p className="text-darkGray text-2xl font-bold">Who is hiring?</p>
            <p className="text-center">
              Search between 4000+ applicants find the best talents for the
              right postions
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 bg-gradient-to-r from-[#46556A] via-[#232B35] to-[#232B35] w-full p-8">
        <div className="flex flex-col space-y-4">
          <IconWithText src={SignUpIcon} text="Sign Up" />
          <IconWithText
            src={PersonIcon}
            text="Build Profile"
            className="ml-[20%]"
          />
          <IconWithText
            src={SearchIcon}
            text="Find Jobs"
            className="ml-[40%]"
          />
          <IconWithText src={ApplyIcon} text="Apply" className="ml-[60%]" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-12">
          <p className="text-2xl font-bold text-white text-center">
            Get started by creating a free account in a few steps.
          </p>
          <button className="bg-white px-10 py-3 text-xl font-bold rounded-[8px]">
            Sign Up Now
          </button>
        </div>
      </div>
      <div className="p-8">
        <img src={SuccessPartners} alt="success" className="w-full h-full" />
      </div>
      <div className="w-full">
        <img src={Map} alt="success" className="w-full h-full" />
      </div>
    </Layout>
  );
};

const ImageWithText = ({ src, text }) => (
  <div className="flex flex-col items-center justify-center space-y-4 p-4 bg-gradient-to-r from-[#46556A] via-[#232B35] to-[#232B35]">
    <img src={src} className="h-10 w-10 md:h-20 md:w-20" alt="icon" />
    <p className="text-white font-light md:font-bold text-center text-xs md:text-lg">
      {text}
    </p>
  </div>
);

const IconWithText = ({ src, text, className }) => (
  <div className="flex flex-row items-center space-x-2">
    <img
      src={src}
      className={`h-16 w-16 p-2 bg-white shadow-md rounded-[8px] ${className}`}
      alt="icon"
    />
    <p className="font-bold text-white">{text}</p>
  </div>
);

export { Homepage };
