import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import styles from '../style'
import DigitalClock from './DigitalClock';
import{fetchExchangeRates,searchFxRates} from '../services/FxServices'
import Fxitem from './Fxitem';

const CurrentMarket = () => {
    const [rates,setRates]= React.useState(null);
    const [ratesBase,SetRatesBase]= React.useState(' ')
    const [searchTerm,SetSearchTerm]= React.useState(' ')
    const [searchResults,setSearchResults]= React.useState(null);

    const onSearch= (event)=>{
        SetSearchTerm(event.target.value)
    }

    React.useEffect(()=>{

      let componenttIsMounted = true;
      const getFxData =()=>{
        fetchExchangeRates().then(data=>{
          console.log('fx data:',data);
          if(componenttIsMounted){
            setRates(data.rates);
            SetRatesBase(data.base)
          }
        

        }).catch(err=>{
          console.log(err)
        });
      };
      getFxData();

      return () => {
        componenttIsMounted = false;
      }
    },[]);

    React.useEffect(()=>{
      if(searchTerm.trim.length > 0){
        
        setSearchResults(searchFxRates(rates,searchTerm));
      }
      else{
        setSearchResults(rates)
      }
    },[searchTerm,rates])
  return (
  
  
  <motion.div initial={{ opacity: 0  }} whileInView={{ opacity: 1}} transition={{ duration: 0.6 }} className={`md:mb-0 mb-5`}>
  <section id='features' className={`${styles.boxWidth} ${styles.paddingY} ${styles.padding} bg-white dark:bg-primary font-poppins text-black dark:text-white mt-[-120px] md:mt-0`} >
  <motion.div initial={{ opacity: 0  }} whileInView={{ opacity: 1}} transition={{ duration: 0.6 }} className={`md:mb-0 mb-5`}>
    <h1 className='text-center text-[25px] mt-[40px]  sm:text-[30px] md:text-[35px] font-semibold'>
      Current <span className=' text-blue-600'>Market</span>
    </h1>

    <div className='  md:p-1 justify-center flex items-center '>
    <h6 className=" mt-3 text-center  text-slate-500">
    The forex market is a dynamic and fast-paced global marketplace where currencies are traded, influenced by various economic factors and geopolitical events.
    </h6>
    </div>

    <div className='flex  flex-col  '>
    <div className={`${styles.padding} mt-[25px] roundedd w-[100%]  h-[100px] sm:h-[110px] gap- dark:bg-slate-900 bg-slate-300`}>

          <DigitalClock/>

          <input type="search" value={searchTerm} onChange={onSearch} className=' p-4 pl-5 w-[80%] ml-[10%] md:ml-[80%] h-[30px] md:w-[20%] rounded-full outline-none dark:bg-slate-300 mt-2 text-black ' placeholder='search' />
          
    </div>
   
    <div className='w-full text-white h-[40px] sm:h-[50px] md:h-[50px] flex justify-between items-center bg-blue-600'>
       <div className='ml-[20%]'>
        Qoutes
       </div>

       <div className=' mr-[20%]'>
        Rates
       </div>
    </div>
    <div className={`w-full h-[250px] sm:h-[350px] list-none md:h-[400px]  dark:bg-slate-900 bg-slate-300 overflow-scroll ${styles.paddingX2} ${styles.paddingY} flex justify-center `}>

      <div className=' w-[100%] mb-2 md:mt-[-20px]'>
    {searchResults ? Object.keys(searchResults).map((key) => <Fxitem key={key} fxSymbol={key} fxRate={searchResults[key]} ratesBase={ratesBase}/>) : []}
      </div>

    </div>

    <div className='w-[100%] h-[40px] dark:bg-slate-900 round  bg-slate-300'>

    </div>
  
    </div>
    </motion.div>
    
    
   


  </section>
  </motion.div>
  
  
  )
}

export default CurrentMarket