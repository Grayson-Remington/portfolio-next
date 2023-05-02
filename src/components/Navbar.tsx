import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import {
  BsGithub,
  BsFillFilePdfFill,
  BsFillFileEarmarkWordFill,
} from "react-icons/bs";

import Image from "next/image";
function Navbar() {
  return (
    <div className="fixed z-10 flex h-16 w-full items-center justify-between border bg-slate-100 px-4">
      <img
        src="assets/profile_pic.jpg"
        alt=""
        className=" aspect-auto h-5/6 rounded-full hover:h-[3000px]"
      />

      <div className="links flex gap-9">
        <div className="icons flex gap-3">
          <div className="group/resume rounded-lg border border-black p-1">
            Resume
            <div className="group-hover/resume: invisible relative flex bg-white">
              <a
                className="hover:text-xl"
                href="./assets/grayson_remington_resume.docx"
              >
                <BsFillFileEarmarkWordFill size={30} />
              </a>
              <a
                className="hover:text-xl"
                href="./assets/grayson_remington_resume.docx"
              >
                <BsFillFilePdfFill size={30} />
              </a>
            </div>
          </div>

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
        <div className="bold flex gap-9 uppercase">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contactform">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
