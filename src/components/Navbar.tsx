import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import {
  BsGithub,
  BsFillFilePdfFill,
  BsFillFileEarmarkWordFill,
} from "react-icons/bs";
import { Squeeze as Hamburger } from "hamburger-react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 flex h-16 w-full items-center justify-between border bg-slate-100 px-4">
        <div className="group/profile_pic relative aspect-auto h-5/6 rounded-full">
          <img
            src="assets/profile_pic.jpg"
            alt=""
            className="relative hidden aspect-auto h-full rounded-full border-2 border-blue-950 group-hover/profile_pic:h-40 sm:block"
          />
        </div>

        <div className="links flex h-full gap-9">
          <div className="icons flex items-center gap-3">
            <div className="group/resume relative flex w-full items-center">
              <h1 className="w-full rounded-lg border border-black p-1">
                Resume
              </h1>
              <div className="hover-buffer absolute left-1/2 top-6 hidden h-6 w-full -translate-x-1/2   transform  group-hover/resume:block"></div>
              <div className="resume-box absolute left-1/2 top-10 hidden   -translate-x-1/2  transform items-center rounded-lg border bg-white group-hover/resume:flex">
                <a
                  className="m-1"
                  target="_blank"
                  href="./assets/grayson_remington_resume.docx"
                >
                  <BsFillFileEarmarkWordFill size={30} />
                </a>
                <div className="h-8 w-[0.5px] bg-black"></div>
                <a
                  className="m-1"
                  target="_blank"
                  href="./assets/grayson_remington_resume.pdf"
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
              href="www.linkedin.com/in/grayson-remington-347427173"
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
          <div className="bold hidden h-full items-center gap-6 uppercase md:flex">
            <a href="#intro" className="flex h-full w-full items-center">
              Intro
            </a>
            <a href="#projects" className="flex h-full w-full items-center">
              Projects
            </a>
            <a href="#experience" className="flex h-full w-full items-center">
              Experience
            </a>
            <a href="#contactform" className="flex h-full w-full items-center">
              Contact
            </a>
          </div>
          <button
            className="inline-flex items-center justify-end md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </button>
        </div>
      </div>
      <Transition
        className="fixed z-40 mt-16 h-full w-full bg-transparent"
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="fixed flex h-full w-full list-none flex-col bg-black "
            id="mobile-menu"
          >
            <a
              href="#intro"
              className="m-2 block text-center text-2xl font-medium text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Intro
            </a>
            <a
              href="#projects"
              className="m-2 block text-center text-2xl font-medium text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="m-2 block text-center text-2xl font-medium text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Experience
            </a>
            <a
              href="#contactform"
              className="m-2 block text-center text-2xl font-medium text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </a>
          </div>
        )}
      </Transition>
    </>
  );
}

export default Navbar;
