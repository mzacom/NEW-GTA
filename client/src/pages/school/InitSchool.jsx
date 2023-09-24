import React from "react";
import styles from "../../style";
import { Link } from "react-router-dom";

const InitSchool = () => {
  return (
    <>
      <div className=" w-full h-[50px] fixed top-0 text-2xl flex items-center  justify-start text-center   font-semibold  mb-4 dark:text-white blury  bg-slate-50 dark:bg-slate-900 ">
        {" "}
        <Link to={"/"}>
          <i class="fa-solid ml-4 fa-chevron-left"></i> Back{" "}
        </Link>
        <span className="ml-[20%]">Academy</span>
      </div>
      <section
        className={`${styles.boxWidth}  gap-4  mb-5 mt-[70px] flex  flex-col  md:flex-col  font-poppins text-black dark:text-white`}
        id="home"
      >
        {/* school */}
        <section className="  w-[88%] h-[130px] md:flex md:flex-col md:justify-center leading-tight md:h-[120px] mx-auto rounded-lg  bg-blue-600  shadow-lg">
          <h1 className=" text-white md:flex md:flex-col  pt-2 md:text-3xl pl-4 text-xl ">
            School
            <p className=" text-[small] px-1    ">
              Welcome to our Forex School, your gateway to mastering currency
              trading and financial independence.
            </p>
          </h1>
        </section>

        {/* Brokers and timetable */}
        <section className=" mx-auto w-[88%] gap-5  flex flex-col md:flex-row">
          <div className="md:w-[40%] h-[100px] md:h-[120px] bg-slate-400 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-xl md:text-left text-[15px] md:text-3xl ">
              Time-table
              <p className=" text-[small] px-1   ">
                Explore our School timetable, a structured guide to your
                educational journey.
              </p>
            </h1>
          </div>
          <div className=" md:w-[60%] h-[130px] bg-pink-400  md:h-[120px] rounded-lg shadow-lg ">
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
          <div className="md:w-[60%] h-[110px] md:h-[120px] md:justify-center py-1 md:flex md:flex-col bg-slate-700 rounded-lg shadow-lg ">
            <h1 className=" text-white pt-2 pl-4 text-[15px] text-xl md:text-3xl ">
              Market Time
              <p className=" text-[small] px-1   ">
                Explore the moments that shape currency trading and seize your
                chance for profitable endeavors.
              </p>
            </h1>
          </div>

          <div className="md:w-[40%] h-[135px] md:h-[120px] py-1  bg-orange-400 rounded-lg shadow-lg ">
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
        <section className=" w-[88%] h-[190px] py-1 mx-auto rounded-lg md:h-[120px] bg-slate-400  shadow-lg">
          <h1 className=" text-white pt-2 pl-4 text-xl md:text-3xl ">
            Videos
            <p className=" text-[small] px-1   ">
              Step into our video realm , a captivating space wher knowledge comes to life. 
              Immerse uyourself in informative and engaging contetnt that will broaden your understanding and ignite your curiosoty.
            </p>
          </h1>
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
