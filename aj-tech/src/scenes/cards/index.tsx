import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Cards = () => {
    
  return (
<div className='w-full h-[1240px] gap-10 bg-[#4938af] flex flex-row justify-center items-end p-8'>
    <div className='card-container h-[540px] w-[320px] md:h-[533px] md:w-[398px]'>
        <div className='card h-full w-full bg-[#f5f2fe] rounded-4xl flex'>
            <div className='front'>Vorderseite</div>
            <div className='back'>Rückseite</div>
        </div>
    </div>
    <div className='card-container h-[540px] w-[320px] md:h-[533px] md:w-[398px]'>
        <div className='card h-full w-full bg-[#f5f2fe] rounded-4xl flex'>
        <div className='front'>Vorderseite</div>
        <div className='back'>Rückseite</div>
        </div>
    </div>
    <div className='card-container h-[540px] w-[320px] md:h-[533px] md:w-[398px]'>
        <div className='card h-full w-full bg-[#f5f2fe] rounded-4xl flex'>
        <div className='front'>Vorderseite</div>
        <div className='back'>Rückseite</div>
        </div>
    </div>
    <div className='card-container h-[540px] w-[320px] md:h-[533px] md:w-[398px]'>
        <div className='card h-full w-full bg-[#f5f2fe] rounded-4xl flex'>
            <div className='front'>Vorderseite</div>
            <div className='back'>Rückseite</div>
        </div>
    </div>
</div>
  )
}

export default Cards