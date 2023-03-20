/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import {
  MdCall,
  MdComputer,
  MdEmail,
  MdLocationOn,
  MdLocationPin,
  MdMail,
  MdOutlineArchitecture,
  MdOutlineHomeWork,
  MdWhatsapp,
} from "react-icons/md";
import { FaAndroid, FaInternetExplorer, FaRegBuilding } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { TbWorldWww } from "react-icons/tb";
import { MdModelTraining } from "react-icons/md";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import Typewriter from "typewriter-effect";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Alldata, projects, teaminfo } from "../data/Alldata";
import Box from "../components/Box";
import Link from "next/link";

const index = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <Header
        title={`${Alldata.companyname} || Home Page`}
        titlekey={Alldata.companyname}
      />
      <Navbar />
      <div className="hero min-h-screen w-full  absolute -z-10 ">
        <div className="hero-overlay bg-opacity-20">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#000000",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </div>

      <div className=" min-h-screen flex items-center ">
        <div className="container text-left ">
          <div>
            <div className=" hero-content justify-start">
              <div>
                <h1 className="lg:text-6xl text-4xl font-bold text-skin-yello uppercase ">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        // .pauseFor(2500)
                        .typeString(
                          `welcome to <i>${Alldata.fullcompanyname}</i> `
                        )
                        .pauseFor(300)
                        .deleteChars(35)

                        .typeString(
                          '<span style="color: white;" > HELP  YOU TO MAKE BETTER SOFTWARE</span>'
                        )
                        .pauseFor(1000)
                        // .loop: true
                        .start();
                    }}
                  />
                </h1>
                <p className="py-6 text-skin-muted lg:w-[80%] uppercase ">
                  If your worried about old software or maintain your software
                  or want a new software. We have a experianced developer, Who
                  make your software fast easy responsive at a affordable price
                </p>
                <button className="border border-skin-primary text-skin-muted lg:py-5 lg:px-12 py-2 px-4 font-bold text-lg hover:text-skin-base hover:bg-skin-backgroud hover:delay-100 ease-in-out transition  ">
                  Contat Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-skin-dark ">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center py-10 h-auto ">
            <div className="text-skin-muted  mb-4 lg:mb-0 md:mb-0 ">
              <h1 className="text-4xl text-skin-yello mb-2 uppercase">
                Why Choose Us
              </h1>
              <h1 className="text-5xl">
                GET THE BEST IN CLASS <br />{" "}
                <span className="text-skin-inverted">SERVICE</span>
              </h1>
            </div>
            <Image
              src="/sideimage.gif"
              alt="images"
              width={350}
              height={300}
              quality={100}
              className=" rounded-md object-cover "
            />
          </div>

          <section className="text-gray-400 body-font ">
            <div className="container px-5 py-16 mx-auto">
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
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mt-4">
                      <div className="p-4 md:w-1/3 sm:mb-0 mb-4">
                        <Box
                          title={projects[0].title}
                          // desc={projects[0].desc}
                          image={projects[0].image}
                          url={projects[0].url}
                        />
                      </div>
                      <div className="p-4 md:w-1/3 sm:mb-0 mb-4">
                        <Box
                          title={projects[1].title}
                          // desc={projects[1].desc}
                          image={projects[1].image}
                          url={projects[1].url}
                        />
                      </div>
                      <div className="p-4 md:w-1/3 sm:mb-0 mb-4">
                        <Box
                          title={projects[2].title}
                          // desc={projects[2].desc}
                          image={projects[2].image}
                          url={projects[2].url}
                        />
                      </div>
                    </div>
                    <Link href="/project">
                      {" "}
                      <button
                        className="border border-skin-color7 text-skin-base mt-10  py-4 px-10 font-bold text-lg 
                  hover:text-skin-muted hover:bg-skin-dark hover:delay-100 ease-in-out transition ">
                        See More
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-skin-dark  ">
        <div className="container">
          <section className="text-skin-base body-font  ">
            <div className=" px-4 py-24 mx-auto">
              <div className="text-center">
                <h1 className=" text-4xl font-medium title-font text-skin-muted mb-4">
                  ABOUT US
                </h1>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-skin-secondary inline-flex"></div>
                </div>
                <section className="text-gray-600 body-font overflow-hidden">
                  <div className=" px-5 pt-16 mx-auto">
                    <div className=" mx-auto flex flex-wrap justify-between ">
                      <Image
                        width={500}
                        height={500}
                        alt="logo"
                        className="object-cover object-center"
                        src={Alldata.fulllogo}
                      />
                      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-centre lg:text-left md:text-left items-center flex  ">
                        <div>
                          <h1 className="text-skin-yello text-3xl title-font font-medium mb-2">
                            Who Are We
                          </h1>

                          <p className="leading-relaxed text-skin-muted ">
                            Logicro software solution is PVT LTD, a company
                            since 2021, Located in Tamluk, serves more than 50+
                            happy customers. We are here for brand building and
                            growing your business. To fit in the competitive
                            world, our team helps to spread awareness and
                            promotion of your services to the customers.
                            <br />
                            Logicro software solution is an IT enabled company
                            with ISO Certified 9001:2015 and UDYAN MSME
                            registered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-skin-backgroud ">
        <div className="container">
          <section className="text-gray-600 body-font px-4 pt-24">
            <div className="text-center">
              <h1 className=" text-4xl font-medium title-font text-skin-base mb-4">
                MEET OUR TEAM
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-skin-secondary inline-flex"></div>
              </div>
              <div className=" px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-center -m-4">
                  {teaminfo.map((data, indx) => (
                    <div className="p-8 hover:p-6 lg:w-1/4 md:w-1/2" key={indx}>
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <Image
                          width={500}
                          height={500}
                          alt="team"
                          className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                          src={data.image}
                        />
                        <div className="w-full">
                          <h2 className="title-font font-medium text-lg text-gray-900">
                            {data.name}
                          </h2>
                          <h3 className="text-gray-500 mb-3">{data.role}</h3>
                          {/* <p className="mb-4">
                          DIY tote bag drinking vinegar cronut adaptogen squid
                          fanny pack vaporware.
                        </p> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-skin-dark ">
        <div className="container">
          <div className="text-center py-16  h-full">
            <h1 className=" text-4xl font-medium title-font text-skin-muted mb-4">
              CONTACT DETAILS
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-skin-secondary inline-flex"></div>
            </div>

            <div className="flex flex-wrap justify-center w-full h-full my-24 ">
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div className="flex flex-wrap items-center ">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <div className="p-4 bg-skin-color6 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdWhatsapp className="h-full w-full" />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-skin-muted">
                          Whatsapp Number
                        </p>
                        <a
                          href="wa.me/+918327462153"
                          className="text-skin-muted">
                          +91 8327462153
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdCall className="h-full w-full" />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-skin-muted">
                          Contact Number
                        </p>
                        <a href="tel:+918945050398" className="text-skin-muted">
                          +91 8945050398
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-skin-color5 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdLocationOn className="h-full w-full text-skin-base " />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-skin-muted">
                          Address
                        </p>
                        <a className="text-skin-muted">
                          Tamluk, Purba Medinipur, 721636
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-skin-color9 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdMail className="h-full w-full text-skin-base " />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-skin-muted">
                          Contact Mail
                        </p>
                        <a className="text-skin-muted">
                          contact@logicro.in <br />
                          business@logicro.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default index;
