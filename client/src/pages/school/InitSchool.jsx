import React from "react";
import styles from "../../style";
import { Link } from "react-router-dom";

const InitSchool = () => {
  return (
    <>
      <div className=" w-full h-[50px] fixed top-0 text-2xl flex items-center  justify-start text-center   font-semibold  mb-4 dark:text-white blury  bg-slate-50 dark:bg-slate-900 ">
        {" "}

        <Link to={"/"} ><i class="fa-solid ml-4 fa-chevron-left"></i>   Back{" "}</Link>
        <span className="ml-[20%]">Academy</span>
      </div>
      <section
        className={`${styles.boxWidth}  gap-4  mb-5 mt-[70px] flex  flex-col  md:flex-col  font-poppins text-black dark:text-white`}
        id="home"
      >
        {/* school */}
        <section className=" w-[88%] h-[100px] md:h-[120px] mx-auto rounded-lg  bg-blue-600  shadow-lg">
          <h1 className=" text-white pt-2 pl-4 text-xl ">School</h1>
        </section>

        {/* Brokers and timetable */}
        <section className=" mx-auto w-[88%] gap-5  flex flex-row">
          <div className="w-[40%] h-[100px] md:h-[120px] bg-slate-400 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] ">Time-table</h1>
          </div>
          <div className="w-[60%] h-[100px] bg-pink-400 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] ">Brokers</h1>
          </div>
        </section>

        {/* Market Time and Quiz */}
        <section className=" mx-auto w-[88%] gap-5  flex flex-row">
          <div className="w-[60%] h-[100px] md:h-[120px] bg-slate-700 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] ">Market Time</h1>
          </div>

          <div className="w-[40%] h-[100px] md:h-[120px] bg-orange-400 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] ">Quiz</h1>
          </div>
        </section>

        {/* Videos */}
        <section className=" w-[88%] h-[150px] mx-auto rounded-lg md:h-[120px] bg-slate-400  shadow-lg">
          <h1 className=" text-white pt-2 pl-4 text-xl ">Videos</h1>
        </section>

        {/* Community */}
        <section className=" w-[88%] h-[100px] mx-auto rounded-lg  bg-blue-600  shadow-lg">
          <h1 className=" text-white pt-2 pl-4 text-xl ">Community</h1>
        </section>
      </section>
    </>
  );
};

export default InitSchool;
