import React from 'react'

const QuoteBanner = () => {
  return (
    <div className="relative w-full h-[660px] bg-teal-950 px-17 py-14">
      <div className="flex flex-col items-start gap-1">
        <div>
          <span className="text-[160px]">
          ‘‘
          </span> 
        </div>
 
        <div>
          <p className="text-[32px] capitalize">
            With more than 500 iterations created, 
            the Royal Oak has become an icon within and beyond watchmaking, 
            embodying Audemars Piguet's free and avant-garde spirit.
          </p>
        </div>  
      </div>  
      <div className="flex flex-col max-w-[264px] sm:max-w-[800px]">
        <p className="font-semibold text-[19px]">
          Olivier Audemars
        </p>
        <p className="text-xl">
          Vice Chairman of the Board of Directors   
        </p>
      </div>       
    </div>
  )
}

export default QuoteBanner