import React from "react";

const Banner = ({ title }) => {
  return (
    <>
      <div
        className="hero h-[50vh] w-full  absolute -z-10 "
        style={{ backgroundImage: `url("/bg2.gif")  ` }}>
        <div className="hero-overlay bg-opacity-40"></div>
      </div>

      <div className=" h-[50vh] flex items-center ">
        <div className="container text-left ">
          <div>
            <div className=" hero-content justify-center">
              <div>
                <h1 className="lg:text-6xl text-4xl font-bold text-skin-muted uppercase ">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
