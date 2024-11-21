import React from "react";
import profileImg from "../../assets/profile1.jpg";
import profileImgOne from "../../assets/profile2.jpg";
import profileImgTwo from "../../assets/profile3.jpg";
import profileImgThree from "../../assets/profile4.jpg";
import profileImgFour from "../../assets/profile5.jpg";
import instructorOne from "../../assets/instructor.png";
import instructorTwo from "../../assets/instructorTwo.png";
import instructorThree from "../../assets/instructorThree.png";
import { FaBook } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedInstructor = () => {
  const instructorData = [
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 12",
      img: profileImg,
    },
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 10",
      img: profileImgOne,
    },
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 8",
      img: profileImgTwo,
    },
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 7",
      img: profileImgThree,
    },
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 6",
      img: profileImgFour,
    },
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 4",
      img: instructorOne,
    },
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 5",
      img: instructorTwo,
    },
    {
      title: "Instructor",
      name: "Alice Lane",
      description: "Courses 3",
      img: instructorThree,
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
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
  return (
    <section className="max-w-screen-xl mx-auto  py-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Instructor
        </h2>
        <p className="text-center mb-8 text-gray-500 place-items-center max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
          accumsan bibendum gravida maecenas augue elementum et neque.
          Suspendisse imperdiet.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {instructorData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-2"
            >
              <img
                src={item.img}
                alt=""
                width={300}
                className="hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl  font-bold mb-2">{item?.title}</h2>
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wider">
                  {item?.name}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaBook className="fill-rose-400" />
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedInstructor;