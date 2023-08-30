import React, { useState } from "react";
import styles from "../style";
import { robot, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX}  sm:px-[1.7rem] sm:py-[0.5rem] ${styles.boxWidth} font-poppins  justify-between items-center flex flex-row`}
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

      <ul className=" sm:flex md:flex md:mr-[250px] md:gap-[60px] text-black dark:text-white sm:text-[small] sm:ml-[72px]  hidden mr-10 gap-6 list-none">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className=" list">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <button className="login rounded-full text-white mt-[-5px] md:mr-[-200px] sm:ml-[0px] sm:w-[80px] font-semibold text-[medium] sm:text-[small]">
          Login
        </button>
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
        } p-6  absolute top-20 z-[100] right-0 mx-4 my-2  min-w-[140px] rounded-xl bg-slate-200  dark:bg-slate-800  blury sidebar`}
      >
        <ul className=" text-black dark:text-white flex flex-col gap-5 w-[130px]  items-center text-[large] list-none">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className="">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
