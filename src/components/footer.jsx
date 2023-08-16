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
            <section className={`${darkTheme ? "bg-dark-footer" : "bg-light-footer"}
                                
                                   w-[390px] md:w-[1440px]
                                   
                                   h-[408px] md:h-[156px]
                                   border-t border-[#938F99]
                                   mt-[48px] md:mt-[174px]
                                   p-[32px]
                                   flex
                                   flex-wrap
                                   items-center
                                   content-center
                                   gap-[32px] md:gap-[312px]
                                   flex-shrink-0
                                `}>
                <div className="headerFotter w-[250.66667px] h-[89.22273px] md:ml-[32px] ">
                    <div className="logo flex items-center content-center gap-4 self-stretch flex-wrap">
                        <img className='w-[42px] h-[36.923px] ' src={Logo} alt="Logotipo do Insep" />
                        <img src={InsepLetter} className='w-[98px] h-[26.88px]' alt="Insep" />
                    </div>
                    <div className='w-[240.66667px] h-[32px]'>
                        <p className='font-heebo 
                        mt-[15.02px] 
                        text-[12px] 
                        not-italic 
                        font-medium 
                        leading-[16px]
                        text-[#E6E1E5]    
                        '>
                        Desenvolver talentos, habilidades e competências, este é o nosso ideal!
                        </p>
                    </div>
                </div>                    
                <div className="redes 
                                w-[170px]
                                h-[58.08163px] 
                                flex
                                flex-col
                                items-start
                                gap-4
                                ">
                    <div className="enum 
                    w-[170px] 
                    h-[18px]
                    
                    ">
                        <h3 className='font-heebo
                                       text-[12px]
                                       not-italic
                                       font-bold
                                       leading-[normal]
                                       text-white
                                      '>Nos encontre nas redes sociais</h3>
                    </div>
                    <div className={`iconBox 
                                    ${darkTheme}
                                    flex
                                    flex-wrap
                                    items-center
                                    content-between
                                    gap-8
                                    w-[170px]
                                    h-[24.082px]
                                    `}>
                                        <a  target='blank' href="https://www.facebook.com/insep.sp"><img className=' w-[25.3px] h-[24.082px] ' src={Facebook} alt="Icone do Facebook" /></a>
                                        <a target='blank' href="https://www.instagram.com/insep_sp/"><img className='w-[25.3px] h-[24.082px]' src={Instagram} alt="Icone do Instagram" /></a>
                                        <a target='blank' href="https://www.linkedin.com/company/insep/"><img className='w-[25.3px] h-[24.082px]' src={Linkedin} alt="Icone do Linkedin" /></a>
                    </div>
                </div>
                <div className="endereco 
                                w-[255px] 
                                h-[92px]
                                flex
                                flex-col
                                items-center
                                gap-2 
                                ">
                    <div className="titleEnd
                                    self-stretch
                                    w-[255px]
                                    h-[28px]
                                    ">
                        <h2 className='text-[#E6E1E5]
                                         font-heebo
                                         text-[16]
                                         not-italic
                                         font-bold
                                         leading-7'
                        >Endereço</h2>
                    </div>
                    <div className="subtitleFooter w-[255px] h-[16px]">
                        <h3 className='text-[#E6E1E5]
                                      font-heebo
                                      text-[15px]
                                      not-italic
                                      font-semibold
                                      leading-4
                                      '>Sede Administrativa</h3>
                    </div>
                    <div className="sedeAdm 
                                    text-[#E6E1E5]
                                    font-heebo
                                    text-[13px]
                                    font-normal
                                    leading-4
                                   ">
                        <p>Rua Jasmim da Espanha, 215 - Sobreloja, 
                            Jardim Brasília, Sao Paulo - SP, 03585-040.</p>
                    </div>
                </div>
            </section>
        </div>    
    </div>
  )
}

export default Footer