import React from "react";
import { IoMailOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="text-white flex  justify-evenly items-center bg-[#1c293c] p-2   shadow-2xl text-xl  fixed top-0 left-0 w-full z-50">
          <div>
            <h1>Azlan Jamshed</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-10">
              <l1>Home</l1>
              <l1>About</l1>
              <l1>Skills</l1>
              <l1>Project</l1>
              <l1>Contact Me</l1>
            </ul>
          </div>
          {/* <div className="bg-blue-600 p-2 rounded-xl items-center ">
            <span> Contact Me</span>
            <IoMailOutline className=" ml-3 w-7 h-7 inline" />
          </div> */}
          <div className=" flex items-center justify-center md:justify-start">
            <a
              href=""
              className="items-center bg-blue-500 text-white px-3 py-2 rounded-lg   transition-all hover:bg-blue-600 hover:scale-105"
            >
              <IoMailOutline className=" w-5 h-5 inline" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
