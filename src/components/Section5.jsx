import React from 'react'
import Casino from '../assets/img/Casino-night.webp'
const Section5 = () => {
  return (
    <section className=' bg-2 bg-[#00141B] bg-[100%] bg-size '>
        <div className="container mx-auto px-3 max-w-[1140px]">
            <div className=" flex flex-wrap -mx-3 pt-[100px] pb-[150px] lg:pt-[304px] lg:pb-[324px] items-center">
                <div className=" w-full md:w-[50%] px-3 z-10">
                    <h2 className='text-[#00141B]  text-[48px] leading-[57.6px] font-Anton font-[400]'>Por qué elegirnos</h2>
                    <p className=' max-w-[526px] font-Inter font-[500] leading-[25.6px] text-[16px] pt-4 pb-6 text-[#00141B] opacity-[80%]'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>
                    <button className="py-[13px] px-[46px] duration-300 relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                        <svg width="107" height="28" viewBox="0 0 107 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5" stroke="url(#paint0_linear_1872_27)" strokewidth="1.5" strokelinecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1872_27" x1="134.466" y1="25.6913" x2="113.531" y2="-37.3975" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#51C8EF" />
                                <stop offset="1" stopColor="#7AF57A" />
                            </linearGradient>
                        </defs>
                    </svg>
                    </span>Aprende más</button>
                </div>
                <div className=" w-full md:w-[50%] px-3 mt-6">
                    <img src={Casino} alt="casino-night" />
                </div>
            </div>
        </div>
</section>
  )
}

export default Section5