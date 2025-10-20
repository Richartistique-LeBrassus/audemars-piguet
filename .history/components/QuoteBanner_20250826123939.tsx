import React from 'react'

const QuoteBanner = () => {
  return (
    <div className="relative w-full h-[660px] bg-teal-950 px-17 py-14">
      <div className="flex flex-col items-start">
        <span className="text-[180px]">
        ‘‘
        </span>  
        <p className="text-3xl capitalize">
          With more than 500 iterations created, 
          the Royal Oak has become an icon within and beyond watchmaking, 
          embodying Audemars Piguet's free and avant-garde spirit.
        </p> 
      </div>  
      <div className="flex flex-col">
        <p className="flex flex-col">
          Olivier Audemars
        </p>
        <p className="flex flex-col">
          Vice Chairman of the Board of Directors   
        </p>
      </div>       
    </div>
  )
}

export default QuoteBanner