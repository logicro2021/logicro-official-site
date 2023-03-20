import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Alldata } from "../data/Alldata";

const Navbar = ({ bgfill }) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const isActive = () => {
    window.scrollY > 180 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar ${
          active || bgfill
            ? "navbar-glassmorphismlight text-skin-base"
            : "bg-transparent text-skin-muted "
        }   p-2 fixed z-40 `}>
        <div className="container">
          <div className="flex-1 w-20 h-full items-center ">
            {/* <a className="btn btn-ghost upper-case text-3xl">Promoter</a> */}
            <Image src={Alldata?.logo} height={80} width={80} alt="LOGO" />
          </div>

          <div className="flex-none lg:block md:block hidden">
            <ul className="menu  menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/project">Projects</Link>
              </li>
              <li>
                <Link href="/service">Services</Link>
              </li>
              <li>
                <Link href="/projects">Gallery</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </div>

          <label className="btn btn-circle swap swap-rotate bg-transparent border-none hover:bg-none lg:hidden md:hidden align-middle ">
            <input type="checkbox" onClick={() => setShow(!show)} />

            <svg
              className={`swap-off fill-current text-skin-base ${
                active || bgfill ? "text-skin-base" : " text-skin-muted "
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className={`swap-on fill-current ${
                active || bgfill ? "text-skin-base" : " text-skin-muted "
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
      {show && (
        <div className="fixed right-6 top-20 z-40">
          <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/pricing">Our Pricing</Link>
            </li>
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
