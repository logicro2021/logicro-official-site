import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Header title="Contact || Contact Page" titlekey="contact" />
      <Navbar bgfill="bgfill" />
      <Banner title="CONTACT US" />
      <section className="text-skin-base body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29535.2986631606!2d87.90135362400996!3d22.281310472704394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a029468ff8b0861%3A0x840f598cf7d1747f!2sTamluk%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1679307320991!5m2!1sen!2sin"></iframe>
            <div className="bg-skin-backgroud relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Tamluk, Purba Medinipur, 721636</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-skin-base leading-relaxed">
                  contact@logicro.in <br />
                  business@logicro.in
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91 8945050398 <br /> +91 8327462153</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-skin-backgroud flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5 rounded-md">
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-skin-backgroud rounded border  focus:border-skin-sky focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-skin-backgroud rounded border  focus:border-skin-sky focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-skin-backgroud rounded border  focus:border-skin-sky focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-skin-dark border-0 py-2 px-6 focus:outline-none hover:bg-skin-color7 rounded text-lg">
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
