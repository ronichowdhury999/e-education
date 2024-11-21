import React from "react";
import courseOne from "../../assets/Image/course1.jpg";
import courseTwo from "../../assets/Image/course2.jpg";
import courseThree from "../../assets/Image/course3.jpg";
import courseFour from "../../assets/Image/course4.jpg";
import courseFive from "../../assets/Image/course5.jpg";
import courseSix from "../../assets/Image/course6.jpg";
import profileImg from "../../assets/profile1.jpg";
import profileImg2 from "../../assets/profile2.jpg";
import { FaRegHeart } from "react-icons/fa";
import iconOne from "../../assets/Image/icon-01.svg";
import iconTwo from "../../assets/Image/icon-02.svg";
import starImg from "../../assets/start.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingCourse = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  const tradeData = [
    {
      title: "Instructor",
      name: "David Powell",
      description: "Contruction Site Safety",
      img: courseOne,
    },
    {
      title: "Instructor",
      name: "David Powell",
      description: "Html Css and Javascript Course",
      img: courseTwo,
    },
    {
      title: "Instructor",
      name: "David Powell",
      description: "Kotlin Development Course",
      img: courseThree,
    },
    {
      title: "Instructor",
      name: "Michael Morgan",
      description: "iOS Application Development Course",
      img: courseFour,
    },
    {
      title: "Instructor",
      name: "Michael Morgan",
      description: "Python Developer Course",
      img: courseFive,
    },
    {
      title: "Instuctor",
      name: "Michael Morgan",
      description: "UI/UX Design Degree",
      img: courseSix,
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto py-20 ">
      <div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl text-rose-500 font-semibold">What's New</h2>
            <h2 className="text-4xl font-bold">Trending Courses</h2>
            <p className="mt-4 text-gray-500 max-w-[720px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              aenean accumsan bibendum gravida maecenas augue elementum et
              neque. Suspendisse imperdiet.
            </p>
          </div>
          <div>
            <button className="border-2 border-indigo-400 rounded-full text-black hover:bg-indigo-400 hover:text-white px-4 py-2 duration-300 font-semibold text-sm">
              All Categories
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10 gap-4  rounded-lg h-full  shadow-md  ">
        <Slider {...settings}>
          {tradeData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg h-full bg-white  shadow-md gap-4 hover:bg-[#002058]/60 hover:text-white duration-300"
            >
              <img
                src={item?.img}
                alt="tradeImg"
                width={450}
                height={200}
                className="object-cover p-4 mt-2 hover:scale-105 duration-300"
              />
              <div className="flex items-center justify-between mr-4 ml-4 mt-4">
                <div className="flex gap-4">
                  <img src={profileImg} alt="" width={50} height={50} />
                  <div>
                    <h2 className="font-bold">{item?.name}</h2>
                    <p className="text-base text-black/50">{item?.title}</p>
                  </div>
                </div>
                <FaRegHeart className="text-2xl text-black/50 hover:fill-rose-400" />
              </div>
              <h2 className="text-xl font-bold ml-4 mt-4">
                {item?.description}
              </h2>
              <div className="flex items-center justify-between ">
                <div className="flex gap-2 ml-4 mt-4">
                  <img src={iconOne} alt="" width={20} />
                  <p className="text-black/50 text-sm ">0 Lesson</p>
                </div>
                <div className="flex items-center justify-center gap-2 mr-4 mt-4">
                  <img src={iconTwo} alt="" width={20} />
                  <p className="text-black/50 text-sm ">2 hrs 30 mins</p>
                </div>
              </div>
              <div className="border-[1px] border-b-gray-400 mt-4" />
              <div className="flex items-center justify-between ml-4 mr-4 mt-3">
                <div>
                  <img src={starImg} alt="" width={100} />
                </div>
                <div>
                  <button className="p-2 ring-2 ring-sky-200 rounded-full text-sm font-semibold hover:bg-sky-200 hover:text-white transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingCourse;