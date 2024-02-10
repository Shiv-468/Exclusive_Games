import React from 'react'
import logo from '../assets/img/logo.webp'
// import hero from '../assets/img/hero-img.webp'
const Header = () => {
    return (
        <header className=' bg-black bg-img min-h-screen bg-no-repeat flex flex-col bg-center bg-cover'>
            <div className="bg-white bg-opacity-[10%]">
            <div className="contianer mx-auto max-w-[1140px] px-3">
                <div className="flex py-[24px] justify-between items-center">
                    <img src={logo} alt="logo" />
                    <ul className='flex items-center w-f justify -between z-[50] gap-[20px] max-xl:fixed  max-xl:bg-[#000] max-xl:w-full max-xl:h-full max-xl:top-0 max-xl:right-[-100%] max-xl:flex-col max-xl:justify-center'>
                        <li><a href="#" className='text-[16px] leading-[25.6px] font-[500] text-white'>Hogar</a></li>
                        <li><a href="#" className='text-[16px] leading-[25.6px] font-[500] text-white'>Misión</a></li>
                        <li><a href="#" className='text-[16px] leading-[25.6px] font-[500] text-white'>Tragamonedas</a></li>
                        <li><a href="#" className='text-[16px] leading-[25.6px] font-[500] text-white'>Por qué elegirnos</a></li>
                        <li><a href="#" className='text-[16px] leading-[25.6px] font-[500] text-white'>Ofertas</a></li>
                    </ul>
                    <button className="py-[13px] font-[700] hidden  px-[46px] relative md:block sm:flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Acceso</button>
                        <div class="menuicon xl:hidden block z-50 ">
                    <span class="bar h-[3px] block bg-white w-[25px] duration-300"></span>
                    <span class="bar  h-[3px] block  bg-white w-[25px] my-[6px]"></span>
                    <span class=" bar h-[3px] block  bg-white w-[25px]  duration-300"></span>
                </div>
                </div>

            </div>
            </div>
            <div className="container mx-auto px-3 max-w-[1140px] flex items-center justify-center flex-col flex-grow">
                <div className=" flex items-center justify-center flex-col ">
                    <h1 className='font-Anton text-[49px] md:text-[72px] font-[400] text-white max-w-[505px] text-center '>Exclusive Games. Pasión por ganar</h1>
                    <p className=' font-Inter font-[500] text-[16px] text-center max-w-[727px] text-white pt-4 pb-[40px] '>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                    <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A]  rounded-[41px] hover:bg-gradient-to-br hover:shadow-[0px_4px_30px_-3px#67E0B2] hover:from-[#51C8EF] hover:to-[#7AF57A] font-[700] duration-300 font-Inter text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'>
                        <svg width="107" height="28" viewBox="0 0 107 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5" stroke="url(#paint0_linear_1872_27)" strokewidth="1.5" strokelinecap="round" />
                        <defs>
                            <linearGradient id="paint0_linear_1872_27" x1="134.466" y1="25.6913" x2="113.531" y2="-37.3975" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#51C8EF" />
                                <stop offset="1" stopColor="#7AF57A" />
                            </linearGradient>
                        </defs>
                    </svg>
                    </span>Empezar</button>
                </div>
            </div>
        
        </header>
    )
}

export default Header