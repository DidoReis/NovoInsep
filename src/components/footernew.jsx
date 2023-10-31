// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../styles';
import { useSelector } from 'react-redux';

import Logo from "../assets/logo.svg";
import InsepLetter from "../assets/insep.svg";
import Facebook from "../assets/darkEmpresa/facebook.svg";
import Instagram from "../assets/darkEmpresa/instagram.svg";
import Linkedin from "../assets/darkEmpresa/linkedin.svg";

const Footer = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex justify-center items-center`}>
        <div className={`${styles.boxWidth} flex items-center justify-center `}>

            {/* Section Footer */}
            <section className={`${darkTheme ? "bg-dark-footer" : "bg-light-footer"}
                                  w-[390px] lg:w-[1440px] 
                                  h-[408px] lg:h-[203px] 
                                  border-t border-[#938F99]
                                  mt-[48px] lg:mt-[174px]
                                 items-center
                                 content-center
                                 flex 
                                 flex-col
                                 flex-shrink-0
                                                        
                                `}>

                {/* Box footer */}                    
                <div className='w-[390px] h-[408px]
                                lg:w-[1440px] lg:h-[148.92273px]
                                items-center
                                content-center
                                flex
                                lg:p-[32px]
                                p-[32px]
                                
                                lg:border-b lg:border-[#938F99]
                                '>

                    {/* logo/redes/vpat/endereço */}                
                    <div className='lg:w-[1376px] lg:h-[84.92px]
                                    w-[255px] h-[377px]
                                    gap-[32px] lg:gap-[178px]
                                    flex
                                    flex-wrap
                                    items-start
                                    content-start
                                    
                                    '>
                            {/* Logo */}            
                            <div className='w-[217px] h-[84.92273px] lg:w-[207px] lg:h-[84.92273px] 
                                            flex 
                                            flex-col 
                                            items-start 
                                            flex-shrink-0
                                            
                                            '>
                                <div className='flex items-center content-center gap-[16px] self-stretch flex-wrap'>
                                <img src={Logo} alt="Logo Insep" className='w-[42px] h-[36.92273px] lg:w-[42px] lg:h-[36.923px]' />
                                <img src={InsepLetter} alt="Insep" className='w-[98px] h-[26.88px] lg:w-[98px] lg:h-[26.88px]' />
                                </div>
                                <div className='lg:w-[207px] lg:h-[28px] flex pt-[10px] gap-[10px] self-stretch'>
                                    <p className='lg:w-[207px]
                                                  no-ligatures
                                                  text-[#E6E1E5]
                                                  font-roboto
                                                  text-[12px]
                                                  not-italic
                                                  font-medium
                                                  leading-[normal]
                                                  tracking-[0.1px]
                                                 '>Desenvolver talentos, habilidades e competências, este é o nosso ideal!</p>
                                </div>              
                            </div>
                            {/* redes sociais */}
                            <div className='w-[200px] h-[56.08163px] lg:w-[141px] lg:h-[72.08163px]
                                            flex
                                            flex-col
                                            items-start
                                            gap-[16px]
                                            flex-shrink-0
                                            '>
                                    <div className='lg:w-[141px] lg:h-[32px] items-stretch'>
                                        <h2 className='no-ligatures
                                                      text-[#E6E1E5]
                                                      font-roboto
                                                      text-[14px]  
                                                      not-italic
                                                      font-bold
                                                      leading-[normal]
                                                      tracking-[0.1px]
                                                     '>Nos encontre nas redes sociais</h2> 
                                    </div>
                                    <div className='lg:w-[141px] lg:h-[24.08163px]
                                                    flex
                                                    items-center
                                                    content-between
                                                    gap-[32px]
                                                    self-stretch
                                                    flex-wrap
                                                    '>
                                                    <a  target='blank' href="https://www.facebook.com/insep.sp"><img className=' w-[25.3px] h-[24.082px] ' src={Facebook} alt="Facebook" /></a>
                                                    <a target='blank' href="https://www.instagram.com/insep_sp/"><img className='w-[25.3px] h-[24.082px]' src={Instagram} alt="Instagram" /></a>
                                                    <a target='blank' href="https://www.linkedin.com/company/insep/"><img className='w-[25.3px] h-[24.082px]' src={Linkedin} alt="Linkedin" /></a>
                                    </div>            
                            </div>
                            {/* Vpat */}
                            <div className=' w-[248px] h-[64px] lg:w-[248px] lg:h-[64px] 
                                            flex
                                            flex-col
                                            items-start
                                            gap-[8px]
                                            flex-shrink-0
                                            '>
                                             <h2 className='no-ligatures
                                                           text-[#E6E1E5]
                                                           font-roboto
                                                           text-[14px]
                                                           not-italic
                                                           font-bold
                                                           leading-[normal]
                                                           tracking-[0.1px]  
                                                          '>VPAT®
                                             <br />
                                             <br />   
                                           <span className='invisible'>Relatório de conformidade de acessibilidade</span> </h2>   
                                            </div>
                            {/* Endereço */}
                            <div className='lg:w-[246px] lg:h-[76px] '>
                                <div className='lg:w-[246px] lg:h-[76px] flex flex-col items-start gap-[8px]'>
                                    <div className='lg:w-[246px] lg:h-[16px] self-stretch'>
                                        <h2 className='no-ligature
                                                  text-[#E6E1E5]
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-bold
                                                  leading-[normal]
                                                  tracking-[0.1px]
                                                 '>Endereço
                                        </h2>
                                    </div>
                                    <div className='lg:w-[246px] lg:h-[16px] self-stretch'>
                                        <p className='no-ligatures
                                                      text-[#E6E1E5]
                                                      font-roboto
                                                      text-[14px]
                                                      not-italic
                                                      font-bold
                                                      leading-[normal]
                                                      tracking-[0.1px]
                                                     '>Sede Administrativa
                                        </p>
                                    </div>
                                    <div className='lg:w-[255px] lg:h-[28px] self-stretch'>
                                        <p className='no-ligatures
                                                      text-[#E6E1E5]
                                                      font-roboto
                                                      text-[12px]
                                                      not-italic
                                                      font-medium
                                                      leading-[normal]
                                                      tracking-[0.4px] 
                                                     '>Rua Jasmim da Espanha, 215 - Sobreloja, Jardim Brasília, Sao Paulo - SP, 03585-040.</p>
                                    </div>
                                </div>
                            </div>
                    </div>  
                </div>

                {/* Copyright */}
               <div className='invisible lg:visible lg:w-[290px] lg:h-[54px] px-[32px] py-[16px]'>
               <p className='text-[#E6E1E5]
                             family-roboto
                             text-[16px]
                             not-italic
                             font-normal
                             leading-[22px]
                             '>
                © Copyright 2022-2023 INSEP</p>
               </div>
            </section>
        </div>
    </div>
  )};

  export default Footer;