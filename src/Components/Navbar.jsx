import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import CV from "../assets/Farhan_Resume.pdf";
import { TbFileCv } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="text-white flex  justify-evenly items-center bg-[#1c293c] p-2   shadow-2xl text-xl  fixed top-0 left-0 w-full z-50">
          <div>
            <h1>
              <Link
                to="home"
                smooth={true}
                duration={300}
                spy={true}
                offset={-70}
                className="cursor-pointer font-semibold text-4xl "
              >
                Farhan Akhtar{" "}
              </Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10 text-base">
              <l1>
                {/* <a href="#home">Home</a> */}
                <Link
                  to="home"
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}
                  activeClass="text-blue-500"
                  className="cursor-pointer hover:text-blue-400 "
                >
                  Home
                </Link>
              </l1>
              <l1>
                <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}
                  activeClass="text-blue-500"
                  className="cursor-pointer hover:text-blue-400"
                >
                  About
                </Link>
              </l1>
              <l1>
                <Link
                  to="skill"
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}
                  activeClass="text-blue-500"
                  className="cursor-pointer hover:text-blue-400"
                >
                  Skills
                </Link>
              </l1>
              <l1>
                <Link
                  to="project"
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}
                  activeClass="text-blue-500"
                  className="cursor-pointer hover:text-blue-400"
                >
                  Projects
                </Link>
              </l1>
              <l1>
                <Link
                  to="contact"
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-70}
                  activeClass="text-blue-500"
                  className="cursor-pointer hover:text-blue-400"
                >
                  Contact Me
                </Link>
              </l1>
            </ul>
          </div>
          {/* <div className="bg-blue-600 p-2 rounded-xl items-center ">
            <span> Contact Me</span>
            <IoMailOutline className=" ml-3 w-7 h-7 inline" />
          </div> */}
          <div className=" md:hidden flex items-center justify-center md:justify-start">
            <a
              className="items-center bg-blue-500 text-white px-2 py-1 rounded-lg   transition-all hover:bg-blue-600 hover:scale-105"
              href={CV}
              download
            >
              <TbFileCv className=" w-7 h-7 inline" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
