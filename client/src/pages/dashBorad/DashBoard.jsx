import React from "react";
import { WindowNav } from "../../components";
import { motion } from "framer-motion";
import { avatar1 } from "../../assets";

const DashBoard = () => {
  return (
    <>
      <WindowNav />

      {/* Dashboard */}

      <section className=" gap-8 flex flex-col">
        {/* head */}
        <section className=" hidden w-[70%] justify-between  text-[medium] ml-[9rem] sm:flex   mt-[3rem] dark:text-white   ">
          {/* Headind */}
          <div className=" flex mt-[-1rem] flex-col">
            <motion.div
              initial={{ y: "-15vh" }} // Start from above the viewport
              animate={{ y: 0 }} // End at the current position
              transition={{ type: "spring", stiffness: 50 }} // Define the transition effect
              className=" text-[small]  dark:text-white  "
            >
              Primary
            </motion.div>

            <motion.div
              initial={{ y: "3vh" }} // Start from above the viewport
              animate={{ y: 0 }} // End at the current position
              transition={{ type: "spring", stiffness: 50 }} // Define the transition effect
              className=" text-[large]  dark:text-white  "
            >
              Dashboard
            </motion.div>

            {/* firs tGrid  */}
          </div>

          {/* search and profile */}
          {/* search */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex items-center gap-3 "
          >
            <input
              type="search"
              name=""
              id=""
              className=" search-icon w-[175px] focus:border-blue-600 border-[1px] dark:border-slate-800 outline-none dark:bg-slate-800 bg-slate-300 rounded-lg p-1 pl-3 "
              placeholder="search "
            />

            {/* Profile */}
            <div className=" flex  items-center gap-2">
              <img src={avatar1} className=" w-[35px] " alt="" />

              {/*  */}

              {/* Username */}
              <p className=" bg-blue-500 text-white p-[5px] rounded-lg ">
                Lowkey1921
              </p>
            </div>
          </motion.div>
        </section>

        {/* first grid  */}
        <section className=" flex gap-7  w-[80%] ">
          {/* object 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" bg-blue-600 w-[60%]  ml-[9rem] h-[350px] shadow-lg  rounded-3xl "
          ></motion.div>

          {/* object 2/3 */}
          <div className=" h-[350px] w-[30%] flex gap-6 flex-col ">
            {/* object 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=" w-full h-[130px] shadow-lg bg-blue-600 rounded-3xl "
            ></motion.div>

            {/* object 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className=" w-full h-full bg-pink-400  shadow-lg rounded-3xl "
            ></motion.div>
          </div>
        </section>
      </section>
    </>
  );
};

export default DashBoard;
