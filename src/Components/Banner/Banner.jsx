import React from "react";
import bannerImg from "../../assets/object.png"
import CountUp from "react-countup";
import starImg from "../../assets/start.png";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
const Banner = () => {
  const [search, setSearch] = React.useState("");
  return (
    <main>
      <section className="max-w-screen-xl mx-auto  grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-16 ">
        <div className="flex flex-col items-start gap-3 ">
          <div>
            <p className="tracking-wider text-base">
              The Leader in Online Learning
            </p>
            <p className="text-5xl font-bold md:max-w-[350px] lg:max-w-[500px] mt-4">
              Engaging & <br /> Accessible Online Courses For All
            </p>
          </div>
          <div className="relative flex-1 w-full py-6">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search School, Online educational center , etc.."
              className="w-full h-12 pl-4 pr-10 rounded-full border border-gray-300 lg:w-full placeholder:ml-4 outline-none"
            />
            {search ? (
              <IoCloseOutline
                onClick={() => setSearch("")}
                className="absolute right-4 top-9 text-gray-500 text-2xl"
              />
            ) : (
              <CiSearch className="absolute right-4 top-9 text-gray-500 text-2xl" />
            )}
          </div>
          <p className="text-base max-w-[250px]">
            Trusted by over 15K Users worldwide since 2022
          </p>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-5xl font-bold">
              <CountUp end={250} duration={2} delay={2} />+
            </h2>
            <h2 className="text-5xl font-bold">4.5</h2>
            <img src={starImg} alt="starImg" width={150} height={200} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={bannerImg}
            alt="bannerImg"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>
      </section>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 h-32 mt-4 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center box-shadow-lg  p-4 rounded-lg bg-white translate-y-0 hover:-translate-y-4 duration-300 ">
          <div className="flex items-center  justify-center">
            <FaPencilRuler className="text-5xl fill-[#f66962] " />
          </div>
          <div className="flex flex-col items-center  justify-center md:items-start">
            <h2 className="text-4xl font-bold">
              <CountUp end={10} duration={3} delay={2} />K
            </h2>
            <p className="text-sm">Online Course</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center box-shadow-lg p-4 rounded-lg bg-white translate-y-0 hover:-translate-y-4 duration-300">
          <div className="flex items-center  justify-center">
            <LiaCertificateSolid className="text-5xl fill-[#f66962] " />
          </div>
          <div className="flex flex-col items-center  justify-center md:items-start">
            <h2 className="text-4xl font-bold">
              <CountUp end={186} duration={3} delay={2} />
              <span>+</span>
            </h2>
            <p className="text-sm">Expert Tutors</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center box-shadow-lg p-4 rounded-lg bg-white translate-y-0 hover:-translate-y-4 duration-300 ">
          <div className="flex items-center  justify-center">
            <PiStudent className="text-5xl fill-[#f66962] " />
          </div>
          <div className="flex flex-col items-center  justify-center md:items-start">
            <h2 className="text-4xl font-bold">
              <CountUp end={55} duration={3} delay={1} />
              <span>+</span>
            </h2>
            <p className="text-sm">Online Student</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center box-shadow-lg p-4 rounded-lg bg-white translate-y-0 hover:-translate-y-4 duration-300 ">
          <div className="flex items-center  justify-center">
            <GrCertificate className="text-5xl fill-[#f66962] " />
          </div>
          <div className="flex flex-col items-center  justify-center md:items-start">
            <h2 className="text-4xl font-bold">
              <CountUp end={5} duration={3} delay={1} />K<span>+</span>
            </h2>
            <p className="text-sm">Ceritified Courses</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;