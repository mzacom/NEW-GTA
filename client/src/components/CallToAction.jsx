import React from 'react'
import styles from '../style'

const CallToAction = () => {
  return (
  <>
  <section id='callToAction'  className={`${styles.boxWidth} ${styles.paddingY} ${styles.padding} bg-white dark:bg-primary font-poppins text-black dark:text-white mt-[-50px] md:mt-0`} >

    <div className='text-center text-[25px] mt-[40px]  sm:text-[30px] md:text-[35px] font-semibold' >
        CTA
    </div>

  </section>
  </>
  )
}

export default CallToAction