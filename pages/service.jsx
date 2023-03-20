/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaAndroid, FaInternetExplorer, FaRegBuilding } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import {
  MdComputer,
  MdOutlineArchitecture,
  MdOutlineHomeWork,
} from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Service = () => {
  return (
    <div>
      <Header title="Promoter || Service Page" titlekey="Service" />
      <Navbar bgfill="bgfill" />
      <Banner title="SERVICES" />

      <div className="bg-skin-dark  ">
        <div className="container  py-16">
          <section className="text-gray-400 body-font ">
            <div className=" px-5 py-16 mx-auto">
            <h1 className=" text-4xl font-medium title-font text-skin-muted mb-4 text-center">
              OUR SERVICES
            </h1>
            <div className="flex mt-6 justify-center mb-24 ">
              <div className="w-16 h-1 rounded-full bg-skin-secondary inline-flex"></div>
            </div>
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-[100%]">
                    <GiEarthAmerica className="h-40 rounded w-full object-cover object-center mb-6" />

                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Web Devalopment
                    </h2>
                    <p className="leading-relaxed text-base">
                      Web development, also known as website development, refers
                      to the tasks associated with creating, building, and
                      maintaining websites and web applications that run online
                      on a browser. It may, however, also include web design,
                      web programming, and database management
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-[100%]">
                    <FaAndroid className="h-40 rounded w-full object-cover object-center mb-6" />

                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Android App Development
                    </h2>
                    <p className="leading-relaxed text-base">
                      Mobile application development is the process of creating
                      apps that run on any mobile platform: Android and iOS.
                      With everything you need right at your fingertips, you can
                      track inventory or make instant updates from your phone,
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4 ">
                  <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-[100%]">
                    <TbWorldWww className="h-40 rounded w-full object-cover object-center mb-6" />

                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      SEO Optimization
                    </h2>
                    <p className="leading-relaxed text-base">
                      SEO means Search Engine Optimization and is the process
                      used to optimize a website's technical configuration,
                      content relevance and link popularity so its pages can
                      become easily findable, more relevant and popular towards
                      user search queries, and as a consequence, search engines
                      rank them better
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-[100%] w-[100%]">
                    <FaInternetExplorer className="h-40 rounded w-full object-cover object-center mb-6" />

                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      Training & Internship
                    </h2>
                    <p className="leading-relaxed text-base">
                      Summer internship program comming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-skin-backgroud  ">
        <section className="text-gray-600 body-font container ">
          <div className="text-center px-5 py-24 mx-auto">
            <h1 className=" text-4xl font-medium title-font text-skin-base mb-4">
              TESTIMONIAL
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-skin-secondary inline-flex"></div>
            </div>
            <div className="flex flex-wrap pt-16 ">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    such a amazing team that delivered any kind of software
                    quickly
                  </p>
                  <a className="inline-flex items-center">
                    <Image
                      width={500}
                      height={500}
                      alt="testimonial"
                      src="/belview.png"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-skin-base">
                        Bellview Hursing home
                      </span>
                      {/* <span className="text-gray-500 text-sm">
                        UI DEVELOPER
                      </span> */}
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    24/7 good service and support , handle any task efficiently
                  </p>
                  <a className="inline-flex items-center">
                    <Image
                      width={500}
                      height={500}
                      alt="testimonial"
                      src="/oasis_navlogo.webp"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-skin-base">
                        Oasis NursingHome
                      </span>
                      {/* <span className="text-gray-500 text-sm">DESIGNER</span> */}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
