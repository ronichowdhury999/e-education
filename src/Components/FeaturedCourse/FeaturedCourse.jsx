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

const FeaturedCourse = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-rose-500">What's New</h2>
          <h2 className="text-5xl font-bold text-[#002058]">
            Featured Courses
          </h2>
          <p className="mt-4 max-w-[750px]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 h-full  overflow-hidden">
        <div className=" rounded-lg h-full bg-white shadow-md hover:bg-[#002058]/60 hover:text-white duration-300 ">
          <div>
            <img
              src={courseOne}
              alt="courseOne"
              width={450}
              height={200}
              className="object-cover p-4 mt-2 hover:scale-105 duration-300"
            />
          </div>
          <div className="flex items-center justify-between mr-4 ml-4 mt-4">
            <div className="flex gap-4">
              <img src={profileImg} alt="" width={50} height={50} />
              <div>
                <h2 className="font-bold">David Powell</h2>
                <p className="text-base text-black/50">Instructor</p>
              </div>
            </div>
            <FaRegHeart className="text-2xl text-black/50 hover:fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold ml-4 mt-4">
            Complete html css and javascript course
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
        <div className=" rounded-lg h-full bg-white shadow-md hover:bg-[#002058]/60 hover:text-white duration-300 ">
          <img
            src={courseTwo}
            alt="courseTwo"
            width={450}
            height={200}
            className="object-cover p-4 mt-2 hover:scale-105 duration-300"
          />
          <div className="flex items-center justify-between mr-4 ml-4 mt-4">
            <div className="flex gap-4">
              <img src={profileImg} alt="" width={50} height={50} />
              <div>
                <h2 className="font-bold">David Powell</h2>
                <p className="text-base text-black/50">Instructor</p>
              </div>
            </div>
            <FaRegHeart className="text-2xl text-black/50 hover:fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold ml-4 mt-4">
            Imersão em Tricologia clínica
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
        <div className=" rounded-lg h-full bg-white shadow-md hover:bg-[#002058]/60 hover:text-white duration-300 ">
          <img
            src={courseThree}
            alt=""
            width={450}
            height={200}
            className="object-cover p-4 mt-2 hover:scale-105 duration-300"
          />
          <div className="flex items-center justify-between mr-4 ml-4 mt-4">
            <div className="flex gap-4">
              <img src={profileImg} alt="" width={50} height={50} />
              <div>
                <h2 className="font-bold">David Powell</h2>
                <p className="text-base text-black/50">Instructor</p>
              </div>
            </div>
            <FaRegHeart className="text-2xl text-black/50 hover:fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold ml-4 mt-4">
            Kotlin Development Course
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
        <div className=" rounded-lg h-full bg-white shadow-md hover:bg-[#002058]/60 hover:text-white duration-300 ">
          <img
            src={courseFour}
            alt=""
            width={450}
            height={200}
            className="object-cover p-4 mt-2 hover:scale-105 duration-300"
          />
          <div className="flex items-center justify-between mr-4 ml-4 mt-4">
            <div className="flex gap-4">
              <img src={profileImg2} alt="" width={50} height={50} />
              <div>
                <h2 className="font-bold">Michael Morgan</h2>
                <p className="text-base text-black/50">Instructor</p>
              </div>
            </div>
            <FaRegHeart className="text-2xl text-black/50 hover:fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold ml-4 mt-4">
            iOS Application Development Course
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
        <div className=" rounded-lg h-full bg-white shadow-md hover:bg-[#002058]/60 hover:text-white">
          <img
            src={courseFive}
            alt=""
            width={450}
            duration-300
            height={200}
            className="object-cover p-4 mt-2 hover:scale-105 duration-300"
          />
          <div className="flex items-center justify-between mr-4 ml-4 mt-4">
            <div className="flex gap-4">
              <img src={profileImg2} alt="" width={50} height={50} />
              <div>
                <h2 className="font-bold">Michael Morgan</h2>
                <p className="text-base text-black/50">Instructor</p>
              </div>
            </div>
            <FaRegHeart className="text-2xl text-black/50 hover:fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold ml-4 mt-4 ">
            Python Developer Course
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
        <div className=" rounded-lg h-full bg-white shadow-md hover:bg-[#002058]/60 hover:text-white duration-300 ">
          <img
            src={courseSix}
            alt=""
            width={450}
            duration-300
            height={200}
            className="object-cover p-4 mt-2 hover:scale-105 duration-300"
          />
          <div className="flex items-center justify-between mr-4 ml-4 mt-4">
            <div className="flex gap-4">
              <img src={profileImg2} alt="" width={50} height={50} />
              <div>
                <h2 className="font-bold">Michael Morgan</h2>
                <p className="text-base text-black/50">Instructor</p>
              </div>
            </div>
            <FaRegHeart className="text-2xl text-black/50 hover:fill-rose-400" />
          </div>
          <h2 className="text-xl font-bold ml-4 mt-4">
            Construction Site safety
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
      </div>
    </section>
  );
};

export default FeaturedCourse;