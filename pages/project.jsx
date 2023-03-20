import Link from "next/link";
import React from "react";
import Banner from "../components/Banner";
import Box from "../components/Box";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Alldata, projects } from "../data/Alldata";

const project = () => {
  return (
    <div>
      <Header
        title={`${Alldata.companyname} || Project Page`}
        titlekey={Alldata.companyname}
      />
      <Navbar bgfill="bgfill" />
      <Banner title="PROJECT" />

      <div className="bg-skin-backgroud ">
        <div className="container">
          <section className="text-skin-base body-font ">
            <div className=" px-5 py-16 mx-auto">
              <div className="text-center mb-20">
                <h1 className=" text-4xl font-medium title-font text-skin-base mb-4">
                  OUR PROJECTS
                </h1>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-skin-secondary inline-flex"></div>
                </div>
                <section className="text-skin-muted body-font">
                  <div className="container px-5 pt-16 mx-auto">
                    <div className="flex flex-wrap w-full h-full">
                      {projects.map((data, indx) => (
                        <>
                          <div className="p-4 md:w-1/3 sm:mb-0 mb-4">
                            <Box
                              title={data.title}
                              // desc={data.desc}
                              image={data.image}
                              url={data.url}
                            />
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default project;
