import { Navbar, Hero, CurrentMarket, School } from "../../components";
import styles from "../../style";
import { useState } from "react";

const LandingPage = () => {
  const [showMessage, showCancle] = useState(false);
  return (
    <>
   
      {/* Nav-bar */}
      <div className=" left-0 right-0 top-0 fixed w-full z-[100] bg-none blury h-[50px] sm:h-[70px] md:h-[70px] ">
        <Navbar />
      </div>

      {/* Sections */}
      <div
        className={`${styles.flexStart} ${styles.paddingX} left-0 right-0  flex flex-col  sm:pt-[5rem] md:pt[10rem] pt-[4rem] bg-white dark:bg-primary font-poppins text-black dark:text-white`}
      >
        {/* Hero section */}
        <Hero />
        <CurrentMarket />
        <School />
      </div>

      {/* Contact btn */}
      <div onClick={() => showCancle(!showMessage)}>
        <i
          class={` fixed top-[90%] text-3xl text-blue-600 right-6  fa-solid ${
            showMessage ? "fa-xmark" : "fa-comment-dots"} `}
        ></i>
     
      </div>

      {/* Social media */}
      <section
        className={`top-[89%] blury  fixed  right-[70px] flex rounded-lg flex-row gap-[50px] p-6 ${
          showMessage ? "flex" : "hidden"
        } `}
      >
        <i class="fa-brands fa-twitter fa-2xl text-[#347af4] "></i>
        <i class="fa-brands fa-instagram fa-2xl"></i>
        <i class="fa-brands fa-whatsapp fa-2xl text-[#19f027]"></i>
      </section>
    </>
  );
};

export default LandingPage;
