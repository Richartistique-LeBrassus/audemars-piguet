import React from 'react'

const QuoteBanner = () => {
  return (
    <div className="relative w-full h-fit bg-teal-900 px-17 pb-[49px]
      md:px-24 md:pb-20 md:pt-6 lg:px-56 xl:pb-[116px] xl:pt-14"
    >
      <div className="flex flex-col items-start gap-1 ">
        <div className="h-[120px]">
          <span className="text-[160px]">
            ‘‘
          </span> 
        </div>
 
        <div className="pb-7">
          <p className="text-[36px] capitalize leading-9
            md:text-[43px] md:leading-11">
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