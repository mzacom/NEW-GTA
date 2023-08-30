import React from 'react'

const Fxitem = ({fxSymbol,fxRate,ratesBase}) => {
  return (
    <>
    <div className=' flex gap-[18%] md:gap-[80%] sm:gap-[50%] pt-5 pl-[12%]'>
    <span className=' font-[600] '> {fxSymbol}/{ratesBase}</span>


<span className=' '>  {fxRate} </span>
    </div>
 
    
    </>



   
  )
}

export default Fxitem