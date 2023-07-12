import React, { useRef, useEffect, useState } from "react";

import PortfolioItem from "./PortfolioItem";
import portfolio from "public/data/portfolio";

function Portfolio() {
  return (
    <div
      id="projects"
      className="flex h-full flex-col items-center justify-between bg-transparent pt-20"
    >
      <div className="pb-4 text-4xl italic">Projects</div>
      <div className="js-show-on-scroll flex flex-col items-center justify-center pb-4 md:flex-row">
        <div className="grid grid-cols-1 gap-4">
          {portfolio.map((project, index) => (
            <PortfolioItem
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              about={project.about}
              demo={project.demo}
            />
          ))}
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
