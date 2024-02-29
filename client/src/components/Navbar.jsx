import React, { useState } from "react";
import styles from "../style";
import { robot, logo } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const dis = () => {
    setToggle(false);
  };

  return (
    <>
      {" "}
      {/* overlay */}
      <div
        className={` ${
          toggle ? " block " : " hidden "
        } fixed opacity- sm:hidden w-full h-[900px] mt-[4rem] opacity-0 bg-white z-[300] `}
        onPointerEnter={() => setToggle((prev) => !prev)}
      ></div>
      <nav
        className={`${styles.paddingX} z-[1000]  sm:px-[1.7rem] sm:py-[0.5rem] ${styles.boxWidth} font-poppins  justify-between items-center flex flex-row`}
      >
        <div className=" flex justify-center sm:ml-5 items-center ml-[-20px] mt-[-10px]">
          <img
            src={logo}
            className=" w-[50px] h-[70px] mb-auto sm:w-[60px] sm:h-[80px] md:w-[60px] md:h-[80px]"
            alt="logo"
          />

          <p className=" text-blue-600  text-[medium] font-semibold flex flex-row gap-1   sm:ml-0 md:ml-0 sm:text-[14px] md:text-[20px]">
            Gabriel <span className=" text-pink-500">Trading </span> Academy
          </p>
        </div>

        <ul className=" sm:flex md:flex md:mr-[150px] md:gap-[70px] text-black dark:text-white sm:text-[small] sm:ml-[72px]  hidden mr-10 gap-6 list-none">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className=" list">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <div className="md:mr-[-100px] sm:ml-[0px] mt-[-5px] flex justify-center items-center gap-6">
            <Link
              to={"signIn"}
              className="login bg-blue-600 hover:font-bold flex items-center justify-center rounded-full text-white  sm:w-[80px]  text-[medium] sm:text-[small]"
            >
              Login
            </Link>

            <Link
              to={"signUp"}
              className=" border-[1.9px] dark:border-white border-black p-1 flex items-center justify-center rounded-full dark:text-white  sm:w-[80px] hover:border-[2px] hover:font-bold text-[medium] sm:text-[small]"
            >
              Sign Up
            </Link>
          </div>
        </ul>

        <button className=" mt-[-7px]  font-semibold text-3xl  sm:hidden md:hidden">
          <i
            className={`fa-solid dark:text-white ${
              toggle ? "fa-xmark" : "fa-bars"
            } object-contain`}
            onClick={() => setToggle((prev) => !prev)}
          ></i>
        </button>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6  absolute top-20 z-[500] right-0 mx-4 my-2  min-w-[140px] rounded-xl bg-slate-200  dark:bg-slate-800 sm:hidden  blury sidebar`}
        >
          <ul className=" text-black dark:text-white flex flex-col gap-5 w-[130px]  items-center text-[large] list-none">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <Link
              to={"signIn"}
              className=" bg-blue-600 text-white text-[17px] w-full sign2 p-1 rounded-lg flex justify-center items-center gap-2 "
            >
              Sign In <i class="fa-solid fa-right-to-bracket"></i>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
