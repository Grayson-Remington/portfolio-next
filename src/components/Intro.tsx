import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";
import {
  SiAcademia,
  SiInstapaper,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";

function Intro() {
  useEffect(() => {
    const opacity_elements = document.querySelectorAll(".opacity_transition");
    for (let index = 0; index < opacity_elements.length; index++) {
      opacity_elements[index]?.classList.add("opacity-100");
    }
  }, []);

  return (
    <div className="grid place-items-center">
      <div
        id="intro"
        className=" mx-10 flex h-screen flex-col items-center justify-center bg-transparent pb-6 pt-20 text-center "
      >
        <div className="flex flex-col items-center justify-center md:h-[300px] md:flex-row">
          <div className="flex h-full flex-col items-center justify-center  md:ml-6">
            <h1 className="opacity_transition name-plate mb-1 p-4 text-5xl font-bold opacity-0 transition-opacity duration-[3000ms] md:mb-3 md:text-7xl">
              Gray
            </h1>
            <p className="opacity_transition pb-8 text-base opacity-0 transition-opacity delay-500 duration-[3000ms] md:text-xl">
              Software Engineer & Web Developer
            </p>
            <h3 className="opacity_transition m-3 text-2xl opacity-0 transition-opacity delay-[1000ms] duration-[3000ms]">
              Software skills
            </h3>
            <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 md:grid-cols-6">
              <div className="opacity_transition flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity delay-[1500ms] duration-[3000ms]">
                <SiJavascript size={30} />
                <h1>JavaScript</h1>
              </div>
              <div className="opacity_transition flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity delay-[1800ms] duration-[3000ms]">
                <SiTypescript size={30} />
                <h1>TypeScript</h1>
              </div>
              <div className="opacity_transition flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity delay-[2100ms] duration-[3000ms]">
                <SiReact size={30} />
                <h1>React</h1>
              </div>
              <div className="opacity_transition flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity delay-[2400ms] duration-[3000ms]">
                <TbBrandNextjs size={30} />
                <h1>NextJS</h1>
              </div>
              <div className="opacity_transition flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity delay-[2700ms] duration-[3000ms]">
                <SiAcademia size={30} />
                <h1>AutoCAD</h1>
              </div>
              <div className="opacity_transition flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity delay-[3000ms] duration-[3000ms]">
                <SiInstapaper size={30} />
                <h1>Inventor</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full max-w-[1200px] place-items-center px-20">
        <h1 className="place-self-start pb-2 text-3xl">Who I am:</h1>
        <p className=" text-xl leading-10">
          Hello! I&apos;m Gray, a software engineer and web developer who is
          passionate about building websites and applications. I love using
          technology to solve real world problems and create more efficient
          systems. If you have an idea for a website or would like to work
          together, please get in
          <Link href="/#contactform" className="p-1 text-blue-500 underline">
            contact
          </Link>
          with me!
        </p>
      </div>
    </div>
  );
}

export default Intro;
