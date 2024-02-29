import React from "react";
import { WindowNav,PhoneNav } from "../../components";
import { motion } from "framer-motion";

const Notification = () => {
  return (
    <>
      {/* side Nav */}
      <WindowNav />

      <div className=" mt-[-50px] ">

      <PhoneNav/>
      </div>
     

      {/* Notification */}
      <section className=" ">
        <motion.div
          initial={{ y: "-15vh" }} // Start from above the viewport
          animate={{ y: 0 }} // End at the current position
          transition={{ type: "spring", stiffness: 50 }} // Define the transition effect
          className=" text-[medium] ml-[9rem] mt-[3rem] dark:text-white  "
        >
          Notification
        </motion.div>
      </section>
   
    </>
  );
};

export default Notification;
