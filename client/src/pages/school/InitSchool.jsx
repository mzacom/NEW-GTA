import React from "react";
import styles from "../../style";
import { Link } from "react-router-dom";

const InitSchool = () => {
  return (
    <>
      <div className=" w-full md:h-[70px] h-[50px] fixed top-0 text-2xl gap-6 md:gap-[90px] flex items-center justify-around  text-center   font-semibold  mb-4 dark:text-white blury   ">
        {" "}
        <Link className=" flex items-center " to={"/"}>
          <i class="fa-solid  fa-chevron-left"></i> Back{" "}
        </Link>
        <div className=" flex justify-center items-center text-center ">
          Academy
        </div>
        <i class="fa-solid fa-user"></i>
      </div>
      <section
        className={`${styles.boxWidth}  gap-4  mb-5 mt-[70px] flex  flex-col  md:flex-col  font-poppins text-black dark:text-white`}
        id="home"
      >
        {/* school */}
        <section className=" md:mt-6 px-2 w-[88%] flex  py-2 md:flex md:flex-col  mx-auto rounded-lg  bg-blue-600  shadow-lg">
          <h1 className=" text-white md:flex md:flex-col  pt-2 md:text-3xl pl-4 text-xl ">
            School
            <p className=" text-[small]  ">
              Welcome to our Forex School, your gateway to mastering currency
              trading and financial independence.
            </p>
          </h1>
        </section>

        {/* Brokers and timetable */}
        <section className=" mx-auto w-[88%] gap-5  flex flex-col md:flex-row">
          <div className="md:w-[40%] py-2  px-1 flex justify-center items-center bg-slate-400 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-xl md:text-left text-[15px] md:text-3xl ">
              Time-table
              <p className=" text-[small] px-2   ">
                Explore our School timetable, a structured guide to your
                educational journey.
              </p>
            </h1>
          </div>
          <div className=" md:w-[60%]  px-1 flex justify-center items-center  bg-pink-400  py-2 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] text-xl md:text-3xl ">
              Brokers.
              <p className=" text-[small] px-1  ">
                Discover the trusted partner who facilitate your access to the
                global markets and empower your trading aspiration.
              </p>
            </h1>
          </div>
        </section>

        {/* Market Time and Quiz */}
        <section className=" mx-auto w-[88%] gap-5  flex flex-col md:flex-row">
        
          <div className="md:w-[60%]  py-2 md:h-[120px] flex  items-center bg-slate-700 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] text-xl md:text-3xl ">
            Market Time
              <p className=" text-[small] px-1   ">
              Explore the moments that shape currency trading and seize your
                chance for profitable endeavors.
              </p>
            </h1>
          </div>

          <div className="md:w-[40%]  py-2 md:h-[120px] flex justify-center items-center  bg-orange-400 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] text-xl md:text-3xl ">
              Quiz
              <p className=" text-[small] px-1   ">
                Test your knowledge , challenge yourself , and dive into a
                journy of learning and fun withour engaging quizzes.
              </p>
            </h1>
          </div>
        </section>

        {/* Videos */}
        <section className=" w-[88%] flex justify-center items-center  py-2 px-1 mx-auto rounded-lg  bg-slate-400  shadow-lg">
          <h1 className=" text-white pt-2 pl-4 text-xl md:text-3xl ">
            Videos
            <p className=" text-[small] px-1   ">
              Step into our video realm , a captivating space wher knowledge
              comes to life. Immerse uyourself in informative and engaging
              contetnt that will broaden your understanding and ignite your
              curiosoty.
            </p>
          </h1>
        </section>

        {/* Community */}
        <section className=" w-[88%] py-2 mx-auto rounded-lg  bg-blue-600  shadow-lg">
          <h1 className=" text-white pt-2 pl-4 text-xl ">Community
          <p className=" text-[small] px-1   ">
          Join us as we connect, share experiences, and support one another on this collective journey. Let’s come together and foster a thriving, collaborative community.
          </p>
          </h1>
          
        </section>
      </section>
    </>
  );
};

export default InitSchool;
