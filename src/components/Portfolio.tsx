import React, { useRef, useEffect, useState } from "react";

import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <div id="projects" className="pt-16">
      <div
        className="my-div 
          "
      >
        <div className="bg-transparent p-4 text-center text-3xl">Projects</div>
        <div className="js-show-on-scroll flex flex-col items-center justify-center pb-4 md:flex-row">
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-2">
            {portfolio.map((project, index) => (
              <PortfolioItem
                key={index}
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const portfolio = [
  {
    title: "Music Notes Generator",
    imgUrl: "assets/music-note-generator.jpg",
    stack: ["React", "Javascript", "CSS"],
    link: "https://simple-music-generator.vercel.app/",
  },
  {
    title: "Dead Drift Flycasters",
    imgUrl: "assets/dead-drift-flycasters.jpg",
    stack: ["React", "Javascript", "Tailwind"],
    link: "https://grayson-remington.github.io/dead-drift-flycasters/",
  },
  {
    title: "Weather App",
    imgUrl: "assets/weather-app.jpg",
    stack: ["NextJS", "Javascript", "Tailwind", "API"],
    link: "https://weather-app-hazel-kappa.vercel.app/",
  },

  {
    title: "Real Estate App",
    imgUrl: "assets/real-estate-app.jpg",
    stack: ["NextJS", "Javascript", "ChakraUI", "API"],
    link: "https://real-estate-app-nine-kohl.vercel.app/",
  },
];

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
