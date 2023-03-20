import React from "react";
import Image from "next/image";

const Box = ({ title, desc, url, image, key }) => {
  return (
    < >
      <div className="rounded-lg h-64 overflow-hidden  ">
        <Image
          width={500}
          height={500}
          alt="content"
          className="object-cover object-center h-full w-full"
          src={image}
        />
      </div>
      <h2 className="text-xl font-medium text-left title-font text-gray-900 mt-5">
        {title}{" "}
        <a href={url} className="link link-primary">
          URL
        </a>
      </h2>
      <p className="text-left text-base leading-relaxed mt-2 text-skin-base ">
        {desc}
      </p>
    </>
  );
};

export default Box;
