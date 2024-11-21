import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nodeImg from "../../assets/icon-02.png";
import AngularImg from "../../assets/icon.png";
import dockerImg from "../../assets/icon01.png";
import bootstrapImg from "../../assets/icon04.png";
import getImg from "../../assets/icon-03.png";
const FavouriteCourse = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const courseData = [
    { title: "Angular", name: "4 Courses", img: AngularImg },
    { title: "Docker Development", name: "3 Courses", img: dockerImg },
    { title: "CSS3", name: "4 Courses", img: nodeImg },
    { title: "Bootstrap", name: "3 Courses", img: bootstrapImg },
    { title: "GatsBy", name: "2 Couses", img: getImg },
  ];
  return (
    <section className="max-w-screen-xl mx-auto py-20 ">
      <div className="flex items-center justify-between md:flex-row">
        <div>
          <h2 className="text-[#f66962] text-xl font-bold mb-4">
            Favourite Course
          </h2>
          <h2 className="text-4xl font-bold mb-4">Top Categories</h2>
          <p className="max-w-[350px] md:max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <div>
          <button className="border-2 border-indigo-400 rounded-full text-black hover:bg-indigo-400 hover:text-white px-4 py-2 duration-300 font-semibold text-sm">
            All Categories
          </button>
        </div>
      </div>
      <div className="py-6 gap-3">
        <Slider {...settings}>
          {courseData?.map((item, index) => (
            <div
              className=" flex  justify-items-center  rounded-lg p-4  hover:bg-indigo-400 hover:text-white duration-300 bg-white shadow-lg shadow-indigo-400/50"
              key={index}
            >
              <img src={item.img} alt={item.name} />
              <h2 className=" font-semibold text-md ">{item?.title}</h2>
              <h2 className="text-md font-bold">{item.name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FavouriteCourse;