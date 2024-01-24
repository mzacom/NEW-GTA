import React from 'react'
import styles from '../style'
import {motion} from 'framer-motion'
import { robot } from '../assets'
import Login from './Login'


const Hero = () => {
  return (
   <>
  <section className={`${styles.boxWidth} overflow-x-hidden flex  flex-col  md:flex-row ml-[10px]  bg-white dark:bg-primary font-poppins text-black dark:text-white`} id='home'>




   <motion.div whileInView={{ x: [-90, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.1 }} className=' overflow-x-hidden flex flex-col md:mt-[13rem] '>
     <h6 className='text-[small] mt-9 '>
      Forex Currency
     </h6>
     
      <h1 className='font-semibold text-[160%] sm:text-[50px] md:text-[70px]'>
        Your financial future <br className=' '/> <span className='  text-blue-600'>strategized today</span>
      </h1>
    
   
      

      <div className=' text-[small] mt-2 mr-[10px] text-slate-500 sm:w-[70%] md:w-[80%] '>
        Discover the world of forex trading at our premier Forex academy website, offering comprehensive courses and educational resources to empower you on your journey to financial success.
      </div>
      </motion.div>

   

   
    <motion.div whileInView={{ x: [90, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.1 }}>
      
    <div className='md:hidden  mt-[40px] sm:mt-[70px] md:mt-[-260px] items-center justify-center w-[100%] sm:w-[50%] md:w-[20%] ml-[5%] sm:ml-[15%] md:ml-0'>
  <Login/>
  </div>
     
      <img src={robot} alt="robot" className=' w-[100%] md:w-[900px] md:mr-6 z-[0] mt-[-35%]  mx-[-13%] md:mt-[-10%]' />
      </motion.div>


      


  </section>
  


   
   
   
   </>
  )
}

export default Hero