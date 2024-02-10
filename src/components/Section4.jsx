import React from 'react'
import Jackpot from '../assets/img/jackpot.webp'
import Left from '../assets/img/box-svg-left.webp'
import Right from '../assets/img/box-svg-right.webp'
import Ezugi from '../assets/img/Ezugi.webp'
import Roulette from '../assets/img/Roulette.webp'
import Betting from '../assets/img/Betting.webp'
import S4e from '../assets/img/S4-ellipse.webp'
const Section4 = () => {
    return (
        <section className='bg-3 bg-cover bg-[#00141B] bg-size relative'>
            <img src={S4e} alt="S4-ellipse" className='absolute bottom-[-20%] z-0 right-0 hidden lg:block' />
            <div className="container max-w-[1140px] mx-auto px-3  ">
                <div className="flex flex-wrap -mx-3 pt-[60px] sm:pt-[90px] pb-[60px] md:pb-[150px] z-20 ">
                    <div className=" w-full md:w-[50%] px-3">
                        <img src={Jackpot} alt="jackpot" />
                    </div>
                    <div className=" w-full md:w-[50%] px-3 mt-6 md:mt-0">
                        <h2 className='text-white text-[42px] sm:text-[48px] leading-[57.6px] font-Anton font-[400]'>Potenciando sus elecciones</h2>
                        <p className='font-Inter font-[500] leading-[25.6px] text-[16px] pt-4 text-white opacity-[80%] pb-6'>Con Exclusive Game lo mejor está de tu lado.</p>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Tecnología HTML5</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Versión PC y móvil</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Control de RTP (controlás qué porcentaje pagar)</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter max-w-[380px] font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p></div>
                                <div className='flex gap-2'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.456 7.95506C13.6673 7.7539 13.9485 7.64268 14.2402 7.64489C14.5319 7.6471 14.8114 7.76256 15.0196 7.9669C15.2279 8.17124 15.3486 8.44848 15.3563 8.74013C15.364 9.03177 15.2581 9.31501 15.061 9.53006L9.07597 17.0151C8.97305 17.1259 8.84885 17.2149 8.71077 17.2766C8.57269 17.3384 8.42357 17.3716 8.27235 17.3744C8.12112 17.3772 7.97087 17.3495 7.8306 17.2929C7.69033 17.2363 7.56292 17.152 7.45597 17.0451L3.48697 13.0761C3.37644 12.9731 3.28779 12.8489 3.2263 12.7109C3.16481 12.5729 3.13175 12.4239 3.12908 12.2728C3.12642 12.1218 3.1542 11.9718 3.21078 11.8317C3.26737 11.6916 3.35158 11.5643 3.45841 11.4575C3.56524 11.3507 3.69249 11.2665 3.83257 11.2099C3.97265 11.1533 4.1227 11.1255 4.27375 11.1282C4.42481 11.1308 4.57378 11.1639 4.71178 11.2254C4.84977 11.2869 4.97398 11.3755 5.07697 11.4861L8.21797 14.6256L13.426 7.98806C13.4353 7.97648 13.4453 7.96546 13.456 7.95506ZM12.076 15.6651L13.456 17.0451C13.5629 17.1518 13.6902 17.2359 13.8303 17.2923C13.9705 17.3488 14.1205 17.3765 14.2716 17.3737C14.4226 17.3709 14.5716 17.3377 14.7095 17.2761C14.8475 17.2144 14.9716 17.1257 15.0745 17.0151L21.0625 9.53006C21.17 9.42387 21.2551 9.29708 21.3126 9.15728C21.3701 9.01748 21.3988 8.86752 21.397 8.71638C21.3952 8.56523 21.363 8.41599 21.3023 8.27756C21.2416 8.13914 21.1536 8.01437 21.0436 7.91071C20.9336 7.80705 20.8038 7.72662 20.662 7.67423C20.5202 7.62184 20.3693 7.59856 20.2183 7.60578C20.0674 7.613 19.9194 7.65057 19.7832 7.71625C19.6471 7.78193 19.5256 7.87438 19.426 7.98806L14.2165 14.6256L13.489 13.8966L12.0745 15.6651H12.076Z" fill="url(#paint0_linear_88_126)" />
                                <defs>
                                    <linearGradient id="paint0_linear_88_126" x1="26.4852" y1="16.8828" x2="14.0628" y2="-0.616319" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                                <p className='font-Inter font-[500] leading-[25.6px] text-[16px] text-white opacity-[80%]'>Aplicación para android y windows de regalo.</p></div>
                        </div>
                        <p className='text-white font-Inter font-[500] text-[16px] leading-[25.6px] opacity-[80%] pt-6 '>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                    </div>
                </div>
                <div className="border-[0.5px] bg-[#04151B] rounded-[16px] flex items-center justify-center py-[40px] sm:py-[96px] max-w-[1043px] mx-auto border-solid border-white relative z-0">
                    <img src={Left} alt="left-svg" className=' absolute left-0  opacity-[30%] z-0 ' />
                    <img src={Right} alt="right-svg" className=' absolute right-0  opacity-[30%] z-0 ' />
                    <h2 className='text-white text-[30px] sm:text-[48px] z-10 leading-[45px] sm:leading-[57.6px] font-Anton font-[400] max-w-[520px] text-center'>lanza tu propia plataforma en sólo 2 semanas</h2>
                </div>
                <h2 className='text-white text-[48px] z-10 leading-[57.6px] font-Anton font-[400] pt-[75px] md:pt-[150px] pb-[60px] text-center'>Juegos en vivo</h2>
                <div className="flex flex-wrap -mx-3 pb-[40px] md:pb-[100px] justify-center">
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 group">
                    <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Ezugi} alt="Ezugi" />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                                <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Reproducir ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 group mt-6 sm:mt-0">
                    <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Roulette} alt="roulette" className='rounded-[8px]' />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Reproducir ahora</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[50%] md:w-[33.33%] px-3 group mt-6 md:mt-0">
                    <div className="relative flex overflow-hidden max-w-[365px] h-[256px] w-full ">
                            <img src={Betting} alt="betting" className=' h-full w-full' />
                            <div className="absolute max-w-[364px] w-full h-[256px] left-[-100%] duration-500 group-hover:left-0 flex items-center justify-center bg-black bg-opacity-[72%] rounded-[8px]">
                            <button className="py-[13px] font-[700] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-Inter sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-300"> <span className='absolute -bottom-2 -left-2'>
                            <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                        </span>Reproducir ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4