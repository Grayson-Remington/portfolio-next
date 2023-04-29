import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Intro() {
  return (
    <div
      id="intro"
      className="flex flex-col items-center justify-center bg-transparent pb-6 pt-20 text-center"
    >
      <div className="flex flex-col items-center justify-center md:h-[300px] md:flex-row">
        <div className="flex h-full flex-col items-center justify-center md:ml-6">
          <h1 className="mb-1 p-4 text-5xl font-bold md:mb-3 md:text-7xl">
            Gray
          </h1>
          <p className="mt-4 text-base md:text-xl">
            Software Engineer & Web Developer
          </p>
          <div className="m-8 flex flex-col items-center gap-4">
            <a
              className="mb-4 w-20 border-4 border-blue-600 p-1"
              href="./assets/grayson_remington_resume.docx"
              target="_blank"
            >
              Resume
            </a>
            <div className="flex gap-14">
              <a
                className="hover:text-xl"
                href="mailto:graysonbremington@gmail.com"
              >
                <HiOutlineMail size={30} />
              </a>
              <a
                className="hover:text-xl"
                href="https://www.linkedin.com/in/grayson-remington-347427173/"
                target="blank"
              >
                <FaLinkedinIn size={30} />
              </a>
              <a
                className="hover:text-xl"
                href="https://github.com/Grayson-Remington"
                target="blank"
              >
                <BsGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 bg-transparent text-center text-3xl">
        Path to Programming
      </div>
      <p className="mb-6 max-w-5xl px-10 text-lg font-bold">
        My journey started back in my high school drafting class, where my
        passion for solving problems was sparked by learning Autodesk software.
        I spent 3 years working with AutoCAD and Inventor before heading to
        Colorado State to study Mechanical Engineering. While at Colorado State,
        I worked at the university recreation center. For 5 years, I honed my
        customer service and communication skills. After graduating, I joined a
        telecommunications engineering company and was able to use both my
        communication and problem solving/design skills to build construction
        drawings for telecom companies. In my spare time, I found myself drawn
        to web developement and programming as a tool to solve problems. I
        decided to make pursuing web development my primary goal and have spent
        the last few months teaching myself the basics.
      </p>
      <div className="h-0.5 w-[90%] bg-black"></div>
    </div>
  );
}

export default Intro;
