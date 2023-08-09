import React from "react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
interface PortfolioItemProps {
  title: string;
  imgUrl: string;
  stack: Array<string>;
  link: string;
  about: string;
  demo?: string;
  githubLink: string;
}
function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  about,
  demo,
  githubLink,
}: PortfolioItemProps) {
  return (
    <div className="grid max-w-[1200px] place-items-center gap-2 p-4 px-8 md:grid-cols-2 md:px-20">
      <div className="">
        <h1 className="pb-2 text-4xl underline lg:pb-8">{title}</h1>
        <p className="pb-4 text-2xl">{about}</p>
      </div>

      <div className="w-full overflow-hidden rounded-md border-2 border-stone-900 sm:w-5/6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={imgUrl}
            alt="portfolio"
            className="h-36 w-full object-cover md:h-48 lg:h-64"
          />
        </a>

        <div className="flex w-full flex-col bg-white p-4">
          <p className="mb-2 flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
            {stack.map((item, index) => (
              <span
                key={index}
                className="inline-block rounded-md border-2 border-stone-900 px-2 py-1 font-semibold"
              >
                {item}
              </span>
            ))}
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit flex-row flex-wrap items-center justify-start gap-2 self-end rounded-md border-2 border-stone-900 p-1 text-center text-xs font-semibold text-blue-600 md:text-sm"
            >
              Website Link
            </a>
            <a
              className="flex w-fit items-center rounded-md border-2 border-stone-900 p-1 text-blue-600"
              href={githubLink}
              target="blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit flex-row flex-wrap items-center justify-start gap-2 self-end rounded-md border-2 border-stone-900 p-1 text-center text-xs font-semibold text-blue-600 md:text-sm"
              >
                Demo Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
