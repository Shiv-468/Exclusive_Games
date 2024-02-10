import React from 'react'
import Logo from '../assets/img/logo.webp'
import Gmail from '../assets/img/Gmail.webp'
import Calling from '../assets/img/Calling.webp'
import FooterE1 from '../assets/img/footer-e1.webp'
import FooterE2 from '../assets/img/footer-e2.webp'
const Footer = () => {
    return (
        <section className=' bg-black overflow-hidden relative '>
                     <img src={FooterE1} alt="footerE1" className='absolute left-0 bottom-0 z-0 ' />
                <img src={FooterE2} alt="footerE2" className=' absolute right-0 z-0' />
            <div className="container mx-auto px-3 max-w-[1140px]">
                <div className="flex flex-wrap -mx-3 pt-[64px] pb-[40px] z-10">
                    <div className=" w-full lg:w-[41.66%] px-3 z-10">
                        <img src={Logo} alt="footer-logo" />
                        <p className=' max-w-[369px] font-Inter font-[500] leading-[25.6px] text-[16px] pt-4 pb-6 text-white opacity-[80%]'>En Exclusive Games somos un equipo apasionado de personas dedicadas al desarrollo de multiplataformas para juegos de azar</p>
                        <div className="flex gap-[12px]">
                            <svg width="32" className=' hover:translate-y-[-5px] duration-300 ' height="32" viewBox="0 0 32 32"  fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#FEFEFE" fill-opacity="0.16" />
                                <path d="M16.9254 6.65345C17.5821 6.65093 18.2389 6.65753 18.8954 6.67325L19.07 6.67955C19.2716 6.68675 19.4705 6.69575 19.7108 6.70655C20.6684 6.75155 21.3217 6.90274 21.895 7.12504C22.489 7.35363 22.9894 7.66322 23.4898 8.1636C23.9473 8.61323 24.3014 9.15712 24.5274 9.75745C24.7497 10.3307 24.9009 10.985 24.9459 11.9426C24.9567 12.182 24.9657 12.3818 24.9729 12.5833L24.9783 12.7579C24.9943 13.4142 25.0012 14.0706 24.999 14.7271L24.9999 15.3985V16.5774C25.0021 17.2342 24.9952 17.8909 24.9792 18.5474L24.9738 18.722C24.9666 18.9236 24.9576 19.1225 24.9468 19.3628C24.9018 20.3204 24.7488 20.9738 24.5274 21.547C24.3021 22.148 23.9479 22.6923 23.4898 23.1418C23.0397 23.5993 22.4956 23.9533 21.895 24.1795C21.3217 24.4017 20.6684 24.5529 19.7108 24.5979C19.4705 24.6087 19.2716 24.6177 19.07 24.6249L18.8954 24.6303C18.2389 24.6463 17.5821 24.6532 16.9254 24.651L16.254 24.6519H15.0759C14.4192 24.6542 13.7625 24.6473 13.1059 24.6312L12.9313 24.6258C12.7177 24.6181 12.5041 24.6091 12.2905 24.5988C11.333 24.5538 10.6796 24.4008 10.1054 24.1795C9.50485 23.9539 8.96087 23.5997 8.51157 23.1418C8.05352 22.6921 7.6991 22.1478 7.473 21.547C7.25071 20.9738 7.09952 20.3204 7.05452 19.3628C7.04449 19.1493 7.03549 18.9357 7.02752 18.722L7.02302 18.5474C7.00643 17.8909 6.99893 17.2342 7.00052 16.5774V14.7271C6.99801 14.0706 7.00461 13.4142 7.02032 12.7579L7.02662 12.5833C7.03382 12.3818 7.04282 12.182 7.05362 11.9426C7.09862 10.9841 7.24981 10.3316 7.4721 9.75745C7.69833 9.15682 8.05345 8.61308 8.51247 8.1645C8.96146 7.70619 9.5051 7.35144 10.1054 7.12504C10.6796 6.90274 11.3321 6.75155 12.2905 6.70655L12.9313 6.67955L13.1059 6.67505C13.7622 6.65847 14.4186 6.65097 15.075 6.65255L16.9254 6.65345ZM16.0002 11.1533C15.404 11.1449 14.812 11.255 14.2588 11.4773C13.7055 11.6997 13.2019 12.0298 12.7773 12.4484C12.3527 12.867 12.0155 13.3659 11.7854 13.916C11.5552 14.4661 11.4367 15.0564 11.4367 15.6527C11.4367 16.249 11.5552 16.8393 11.7854 17.3894C12.0155 17.9395 12.3527 18.4383 12.7773 18.857C13.2019 19.2756 13.7055 19.6057 14.2588 19.828C14.812 20.0504 15.404 20.1605 16.0002 20.1521C17.1936 20.1521 18.3382 19.678 19.1821 18.8341C20.026 17.9902 20.5001 16.8457 20.5001 15.6522C20.5001 14.4588 20.026 13.3143 19.1821 12.4704C18.3382 11.6265 17.1936 11.1533 16.0002 11.1533ZM16.0002 12.9532C16.3589 12.9466 16.7152 13.0116 17.0485 13.1442C17.3818 13.2769 17.6853 13.4746 17.9412 13.7259C18.1972 13.9772 18.4006 14.2769 18.5394 14.6077C18.6783 14.9384 18.7498 15.2935 18.7499 15.6522C18.7499 16.0109 18.6785 16.3661 18.5398 16.6969C18.401 17.0276 18.1978 17.3275 17.9419 17.5788C17.686 17.8302 17.3826 18.028 17.0493 18.1608C16.7161 18.2936 16.3598 18.3586 16.0011 18.3522C15.2851 18.3522 14.5983 18.0677 14.092 17.5614C13.5857 17.055 13.3012 16.3683 13.3012 15.6522C13.3012 14.9362 13.5857 14.2495 14.092 13.7431C14.5983 13.2368 15.2851 12.9523 16.0011 12.9523L16.0002 12.9532ZM20.7251 9.80334C20.4347 9.81496 20.1601 9.93847 19.9588 10.148C19.7575 10.3575 19.6451 10.6368 19.6451 10.9274C19.6451 11.218 19.7575 11.4973 19.9588 11.7068C20.1601 11.9163 20.4347 12.0398 20.7251 12.0515C21.0234 12.0515 21.3096 11.9329 21.5205 11.722C21.7315 11.511 21.85 11.2249 21.85 10.9265C21.85 10.6281 21.7315 10.342 21.5205 10.131C21.3096 9.92007 21.0234 9.80154 20.7251 9.80154V9.80334Z" fill="#FEFEFE" />
                            </svg>
                            {/* Facebook  */}
                            <svg width="32" className=' hover:translate-y-[-5px] duration-300 ' height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#FEFEFE" fill-opacity="0.16" />
                                <path d="M18 17.1523H20.5L21.5 13.1523H18V11.1523C18 10.1223 18 9.15234 20 9.15234H21.5V5.79234C21.174 5.74934 19.943 5.65234 18.643 5.65234C15.928 5.65234 14 7.30934 14 10.3523V13.1523H11V17.1523H14V25.6523H18V17.1523Z" fill="#FEFEFE" />
                            </svg>
                            {/* linkedIn */}
                            <svg width="32" className=' hover:translate-y-[-5px] duration-300 ' height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#FEFEFE" fill-opacity="0.16" />
                                <path d="M9.14352 7C8.60247 7 8.08359 7.21493 7.70102 7.5975C7.31844 7.98008 7.10352 8.49896 7.10352 9.04C7.10352 9.58104 7.31844 10.0999 7.70102 10.4825C8.08359 10.8651 8.60247 11.08 9.14352 11.08C9.68456 11.08 10.2034 10.8651 10.586 10.4825C10.9686 10.0999 11.1835 9.58104 11.1835 9.04C11.1835 8.49896 10.9686 7.98008 10.586 7.5975C10.2034 7.21493 9.68456 7 9.14352 7ZM7.22352 12.76C7.19169 12.76 7.16117 12.7726 7.13866 12.7951C7.11616 12.8177 7.10352 12.8482 7.10352 12.88V25.36C7.10352 25.4262 7.15728 25.48 7.22352 25.48H11.0635C11.0953 25.48 11.1259 25.4674 11.1484 25.4449C11.1709 25.4223 11.1835 25.3918 11.1835 25.36V12.88C11.1835 12.8482 11.1709 12.8177 11.1484 12.7951C11.1259 12.7726 11.0953 12.76 11.0635 12.76H7.22352ZM13.4635 12.76C13.4317 12.76 13.4012 12.7726 13.3787 12.7951C13.3562 12.8177 13.3435 12.8482 13.3435 12.88V25.36C13.3435 25.4262 13.3973 25.48 13.4635 25.48H17.3035C17.3353 25.48 17.3659 25.4674 17.3884 25.4449C17.4109 25.4223 17.4235 25.3918 17.4235 25.36V18.64C17.4235 18.1626 17.6132 17.7048 17.9507 17.3672C18.2883 17.0296 18.7461 16.84 19.2235 16.84C19.7009 16.84 20.1587 17.0296 20.4963 17.3672C20.8339 17.7048 21.0235 18.1626 21.0235 18.64V25.36C21.0235 25.4262 21.0773 25.48 21.1435 25.48H24.9835C25.0153 25.48 25.0459 25.4674 25.0684 25.4449C25.0909 25.4223 25.1035 25.3918 25.1035 25.36V17.0848C25.1035 14.7549 23.0779 12.9328 20.7595 13.143C20.0422 13.2083 19.3395 13.3859 18.6773 13.6691L17.4235 14.2067V12.88C17.4235 12.8482 17.4109 12.8177 17.3884 12.7951C17.3659 12.7726 17.3353 12.76 17.3035 12.76H13.4635Z" fill="#FEFEFE" />
                            </svg>
                        </div>
                    </div>
                    <div className=" w-full lg:w-[58.33%] px-3 z-10">
                        <div className="flex flex-wrap -">
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0">
                                <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Menú principal</h4>
                                <ul className='flex flex-col gap-[14px]'>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Hogar</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Misión</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Tragamonedas</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Por qué elegirnos</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Ofertas</a></li>
                                </ul>
                            </div>
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0">
                                <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Atención al cliente</h4>
                                <ul className='flex flex-col gap-[14px]'>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>¿Necesitas ayuda?</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>política de privacidad</a></li>
                                    <li><a href="#" className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>Términos de servicios</a></li>
                                </ul>
                            </div>
                            <div className=" w-full sm:w-[50%] lg:w-[33.33%] md:px-3 mt-6 lg:mt-0">
                            <h4 className=' font-Inter font-[700] leading-[25.6px] pt-[10px] pb-4 text-[16px] text-white'>Ponerse en contacto</h4>
                            <div className=" flex items-center gap-[10px]">
                                <img src={Gmail} alt="gmail" />
                                <p className=' font-Inter  text-white  text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>juegosexclusivos@gmail.com</p>
                            </div>
                            <div className=" flex items-center gap-[10px] pt-3">
                                <img src={Calling} alt="calling" />
                                <p className=' font-Inter text-white text-[16px] leading-[25.5px] font-[500] opacity-[80%] '>(101)342-7873</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-[1px] bg-[#1A1A1A] "></div>
            <p className=' text-[16px] cursor-pointer text-center font-Inter font-[500] leading-[25.6px] py-[20px] text-white opacity-[50%] '>© Juegos exclusivos - Todos los derechos reservados 2023</p>
        </section>
    )
}

export default Footer