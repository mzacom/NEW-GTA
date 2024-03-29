import { useState, React } from "react";
import { Link, NavLink } from "react-router-dom";

const WindowNav = () => {
  return (
    <>
      {/* side nav for desktop view  */}
      <section className=" hidden sm:flex md:flex sm:flex-col  md:flex-col w-[100%] h-[100%] ">
        {/* Left Bar content  */}
        <section className=" w-[70px] justify-between  fixed h-[90%] bg-blue-600 rounded-2xl shadow-lg  flex flex-col items-center  pt-3 my-[2rem] ml-[2rem] ">
          {/* bar 1 */}
          <section className=" flex flex-col gap-[3rem] items-center  ">
            
            {/*Notification  */}
            <NavLink
              to={"/notification"}
              className={({ isActive }) =>
                isActive
                  ? " flex   p-2  text-white  rounded-xl bg-slate-700 gap-3 "
                  : "flex w-[full] rounded-xl p-2  gap-4 border-slate-400 border-[1px] "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 text-white h-5"
              >
                <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>

            {/* number */}
            <div className=" w-5 h-5 text-center rounded-full mt-[-4rem] ml-9 text-white bg-red-500  ">
              1
            </div>

            {/* Horizontal */}
            <div className=" bg-white h-[1px] mt-[-2.5rem] w-10"></div>

            {/* Dashborad */}
            <NavLink
              to={"/dashBoard"}
              className={({ isActive }) =>
                isActive
                  ? " flex   p-2  text-white  rounded-xl bg-slate-700 gap-3 "
                  : "flex w-[full] rounded-xl p-2 gap-4 border-slate-400 border-[1px] "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                i
                className="w-5 text-white h-5"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </NavLink>

            {/* Academy */}
            <NavLink
              to={"/academy"}
              className={({ isActive }) =>
                isActive
                  ? " flex   p-2  text-white  rounded-xl mt-[-1rem]c bg-slate-700 gap-3 "
                  : "flex w-[full] rounded-xl p-2 mt-[-1rem] gap-4 border-slate-400 border-[1px] "
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 text-white h-5"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
            </NavLink>
          </section>

          {/* bar 2 */}
          <section className=" flex gap-3 flex-col">
            {/* Horizontal */}
            <div className=" bg-white h-[1px] mt-[-2.5rem] w-10"></div>

            {/* log out */}
            {/* Academy */}
            <NavLink
              to={"/signIn"}
              className={({ isActive }) =>
                isActive
                  ? " flex   p-2  text-white  rounded-xl bg-slate-700 gap-3 "
                  : "flex w-[full] rounded-xl items-center p-2 mb-4  gap-4 border-slate-400 border-[1px] "
              }
            >
              <i class="fa-solid text-center w-5 text-white h-5 fa-right-to-bracket"></i>
            </NavLink>
          </section>
        </section>

        {/* Right Bar  */}
        <section className=" fixed flex w-[15%] shadow-lg h-[90%] dark:bg-slate-800 bg-slate-200 rounded-s-sm rounded-2xl my-[2rem] ml-[2rem] right-[2rem] "></section>
      </section>
    </>
  );
};

export default WindowNav;
