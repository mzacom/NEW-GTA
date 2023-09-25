import { Navbar, Hero, CurrentMarket, School } from "../../components";
import styles from "../../style";
import Socials from "../../components/Socials";


const LandingPage = () => {
 
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
        <Socials/>
        
      </div>

    
    </>
  );
};

export default LandingPage;
