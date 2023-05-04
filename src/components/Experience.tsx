import React from "react";
import Image from "next/image";
function Experience() {
  return (
    <div
      id="experience"
      className="flex h-full flex-col items-center justify-between bg-transparent"
    >
      <div className="m-8 h-0.5 w-[90%] bg-black"></div>
      <section className="h-full w-full items-center   p-10 text-center">
        <h1>Work Experience</h1>
        <div id="Engineer I" className="flex h-min w-full items-center">
          <div className="relative h-full w-2/4 p-2">
            <img
              className=" aspect-auto  w-full rounded-full"
              alt=""
              src="/assets/engineer.jpg"
            />
          </div>
          <div className="z-10 w-2/4 border border-black">
            <h1>Engineer I</h1>
            <ul>
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
          <div className="z-10 w-2/4 border border-black">
            <h1>Engineer I</h1>
            <ul>
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
          <div className="relative h-full w-2/4 p-2">
            <img
              className="aspect-auto w-full rounded-full"
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
