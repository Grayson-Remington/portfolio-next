import React from "react";
import Image from "next/image";
interface PortfolioItemProps {
  title: string;
  imgUrl: string;
  stack: Array<string>;
  link: string;
  demo?: string;
}
function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  demo,
}: PortfolioItemProps) {
  return (
    <div className="overflow-hidden rounded-md border-2 border-stone-900">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt="portfolio"
          className="h-36 w-full object-cover md:h-48 lg:h-64"
        />
      </a>

      <div className="flex w-full flex-col bg-white p-4">
        <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
          {title}
        </h3>
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
        <div className="flex gap-2 py-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit flex-row flex-wrap items-center justify-start gap-2 self-end rounded-md border-2 border-stone-900 p-2 text-xs font-semibold text-blue-600 md:text-sm"
          >
            Website Link
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit flex-row flex-wrap items-center justify-start gap-2 self-end rounded-md border-2 border-stone-900 p-2 text-xs font-semibold text-blue-600 md:text-sm"
            >
              Demo Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
