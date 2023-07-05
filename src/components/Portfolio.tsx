import React, { useRef, useEffect, useState } from "react";

import PortfolioItem from "./PortfolioItem";
import portfolio from "public/data/portfolio";

function Portfolio() {
  return (
    <div id="projects" className="pt-16">
      <div className="m-8 h-0.5 w-[90%] bg-black"></div>
      <div className="my-div">
        <div className="bg-transparent p-4 text-center text-3xl">Projects:</div>
        <div className="js-show-on-scroll flex flex-col items-center justify-center pb-4 md:flex-row">
          <div className="grid grid-cols-1 gap-4 p-4">
            {portfolio.map((project, index) => (
              <PortfolioItem
                key={index}
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

{
  /* const [isVisible, setIsVisible] = useState(false);
const divRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry!.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(divRef.current!);
      }
    },
    { rootMargin: "0px" }
  );
  observer.observe(divRef.current!);

  return () => {
    observer.unobserve(divRef.current!);
  };
}, []);
*/
}
