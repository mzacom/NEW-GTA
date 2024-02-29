import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const School = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`md:mb-0 mb-5`}
      >
        <section
          id="school"
          className={`${styles.boxWidth} ${styles.paddingY} ${styles.padding} bg-white dark:bg-black font-poppins text-black dark:text-white mt-[-50px] md:mt-0`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`md:mb-0 mb-5`}
          >
            <h1 className="text-center text-[25px] mt-[40px]  sm:text-[30px] md:text-[35px] font-semibold">
              Academy
            </h1>

            <div className="  md:p-1 justify-center flex items-center ">
              <h6 className=" mt-3 text-center  text-slate-500">
                Welcome to our Forex Academy, where we invite you to embark on a
                journey of discovery. Navigate through the intricacies of Forex
                trading and initiate your path to informed decision-making.
                Let's dive in and unlock the potential of the foreign exchange
                market together.
              </h6>
            </div>

            <Link
              to={"dashBoard"}
              className=" h-11 p-2 w-[40%] sm:w-[30%] bg-blue-700 rounded-full sign2 flex justify-center items-center mx-auto mt-[2rem] text-white "
            >
              Get Started
            </Link>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default School;
