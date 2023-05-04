import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/router";

function Intro() {
  useEffect(() => {
    const element = document.querySelector(".my-animation");

    element!.classList.add("opacity-100");
  }, []);

  return (
    <div
      id="intro"
      className="my-animation mx-10 flex h-screen flex-col items-center justify-center bg-transparent pb-6 pt-20   text-center opacity-0 transition-opacity duration-[3000ms]"
    >
      <div className="flex flex-col items-center justify-center md:h-[300px] md:flex-row">
        <div className="flex h-full flex-col items-center justify-center  md:ml-6">
          <h1 className="mb-1 p-4 text-5xl font-bold md:mb-3 md:text-7xl">
            Gray
          </h1>
          <p className="mt-4 text-base md:text-xl">
            Software Engineer & Web Developer
          </p>
          <div>
            <h3 className="m-3 text-2xl">Software skills</h3>
            <p className="italic">
              {" "}
              Javascript, &nbsp; Typescript, &nbsp; React, &nbsp; jQuery, &nbsp;
              Git, &nbsp; HTML, &nbsp; CSS, &nbsp; Tailwind, &nbsp; SQL, &nbsp;
              AutoCAD, &nbsp; Autodesk Inventor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
