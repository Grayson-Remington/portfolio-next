import React from "react";
import Image from "next/image";
function Experience() {
  return (
    <div
      id="experience"
      className="flex h-full flex-col items-center justify-between bg-transparent"
    >
      <div className="m-8 h-0.5 w-[90%] bg-black"></div>
      <section className=" flex h-full w-full flex-col place-content-center items-center p-4 text-center">
        <h1 className="text-3xl">Work Experience</h1>
        <div id="Engineer I" className="flex h-min w-full items-center">
          <div className="relative hidden h-full w-2/4 justify-center p-8 md:flex">
            <img
              className=" aspect-auto  w-full max-w-xl rounded-full border-8 border-blue-950"
              alt=""
              src="/assets/engineer.jpg"
            />
          </div>
          <div className="z-10 w-full">
            <div className="flex items-center justify-center pb-4 text-center text-xl font-bold uppercase  underline">
              <div className="relative flex h-full w-2/4 justify-center  p-8 md:hidden">
                <img
                  className=" aspect-auto  w-full max-w-xl rounded-full border-8 border-blue-950"
                  alt=""
                  src="/assets/engineer.jpg"
                />
              </div>
              <h1>Telecommunications Engineer</h1>
            </div>

            <ul className="list-inside list-disc  text-left text-lg font-medium ">
              <li>
                Developed construction drawings for telecommunications client
                equipment upgrades and modifications.
              </li>
              <li>
                Designed new conduit routes for fiber optic companies from
                existing infrastructure to proposed destinations in public
                right-of-way and private property.
              </li>
              <li>
                Prepared and reviewed construction drawings for completeness
                before final PE review.
              </li>
              <li>
                Communicated and managed multiple projects simultaneously for
                various clients.
              </li>
            </ul>
          </div>
        </div>
        <div id="Engineer I" className="flex h-min w-full items-center">
          <div className="z-10 w-full">
            <div className="flex items-center justify-center pb-4 text-center text-xl font-bold uppercase underline">
              <h1>Recreation Supervisor</h1>
              <div className="relative flex h-full w-2/4 justify-center  p-8 md:hidden">
                <img
                  className=" aspect-auto  w-full max-w-xl rounded-full border-8 border-blue-950"
                  alt=""
                  src="/assets/recreation-center.jpg"
                />
              </div>
            </div>

            <ul className="list-inside list-disc  text-left text-lg font-medium ">
              <li>Supervised a staff ranging from 15-100 people</li>
              <li>
                Enforced policy to staff members and patrons to promote safety
                and consistency
              </li>
              <li>
                Provided excellent customer service to a culturally diverse
                demographic of patrons in order to promote an inclusive space
              </li>
              <li>
                Utilized conflict resolution skills with peers and customers
              </li>
            </ul>
          </div>
          <div className="relative hidden h-full w-2/4 justify-center p-8 md:flex">
            <img
              className=" aspect-auto  w-full max-w-xl rounded-full border-8 border-blue-950"
              alt=""
              src="/assets/recreation-center.jpg"
            />
          </div>
        </div>
      </section>

      <div className="m-8 h-0.5 w-[90%] bg-black"></div>
    </div>
  );
}

export default Experience;
