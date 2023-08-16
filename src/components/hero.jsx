// eslint-disable-next-line no-unused-vars
import React from 'react'

import styles from '../styles'
import {  useSelector } from 'react-redux'
import Cover from "../assets/Cover.png"
import Libras from "../assets/libras.png"
import Smile from "../assets/smile.png"
import SmileLight from "../assets/smileLight.png"
import WhatsApp from "../assets/whatsapp.svg"

const Hero = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex justify-center items-center`}>
        <div className={`${styles.boxWidth} flex items-center justify-center `}>
        <section className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                            w-[359px] md:w-[1440px]
                            h-[682px] md:h-[573px]
                            mt-[10px]
                            md:mt-[0px]
                            mb-[48px] md:mb-0
                           
                            md:flex
                            md:flex-row-reverse
                           `}>
                            <div className="whatsappIcon w-12 h-12  md:mt-[35px] ml-[315px] mt:0 md:mr-8 absolute">
                  <a target='blank' href="#"><img src={Libras} alt="Icone do VLibras" /></a>
                </div>
                <div className="bomImg 
                                w-[357px] md:w-[943px]
                                h-[278px] md:h-[732px]
                                ">
                  <img className='w-[357px] md:w-[943px]
                                  h-[278px] md:h-[732px]
                                  
                                  md:bt-0' src={Cover} alt="" />
                </div>
                
                <div className="whatsappIcon w-12 h-12 invisible md:visible mt-[446px] mr-8 absolute">
                  <a target='blank' href="https://web.whatsapp.com/"><img src={WhatsApp} alt="Icone do WhatsApp" /></a>
                </div>
            <div className={`titleHero ${darkTheme ? "text-dark" : "text-light"}
                            w-[359px] md:w-[439px]
                            h-[356px]
                            flex-shrink-0
                            flex
                            flex-col
                            absolute
                            md:mr-[845px]
                            md:mt-[91.5px]
                            mt-[48.96px]
                           
                           `}>
                <div className="smileText
                                w-[259px]
                                items-center
                                flex
                                gap-[10px]
                                
                               ">
                    <img src={darkTheme ? Smile : SmileLight} alt="Imagem de um sorriso" /> 
                    <span className='
                                    flex
                                    w-[213px]
                                    flex-col
                                    justify-center
                                    flex-shrink-0
                                    no-ligatures
                                    font-roboto
                                    text-[16px]
                                    leading-[normal]
                                    
                                    '>
                                      Que bom ter você aqui!
                    </span>           
                </div>     
                <div className="title
                                w-[358px] 
                                flex
                                flex-col
                                mt-[25.5px]
                                
                                ">
                    <h1
                    className='no-ligatures
                                font-roboto
                                md:w-[439px]
                                text-[32px] md:text-[40px]
                                not-italic
                                font-bold
                                leading-[normal]
                              '   
                    >Seja um especialista em acessibilidade digital
                    </h1>
                    <p className='w-[359px] md:w-[439px]
                                  md:h-[120px]
                                  font-roboto
                                  no-ligatures
                                  text-[16px]
                                  not-italic
                                  font-normal
                                  leading-[24px]
                                  mt-[16px]
                                  md:tracking-[0.15px]
                                 '>Estude conosco e descubra como promover ambientes 
                                 virtuais mais inclusivos. O Núcleo de Formação Profissional 
                                 do INSEP irá te ajudar a tornar-se um especialista em 
                                 garantia da conformidade e qualidade dos 
                                 ambientes digitais para Pessoa com Deficiência.</p>
                    <button className={`${darkTheme ? "bg-dark-button" : "bg-light-button"}
                                        ${darkTheme ? "hover:bg-dark-hoverDark" : "hover:bg-light-hoverLight"}
                                       w-[118px] 
                                       h-[44px]
                                       py-[10px]
                                       px-[24px]
                                       inline-flex
                                       flex-col
                                       rounded-[100px]
                                       mt-[32px]
                                       justify-center
                                       items-center
                                       gap-[10px]
                                       flex-shrink-0 
                                       `}><span className={`${darkTheme ? "text-buttonDark" : "text-buttonLight"}
                                                          text-center
                                                          font-roboto
                                                          text-[14px]
                                                          not-italic
                                                          font-medium
                                                          leading-[20px]
                                                          `}
                                          
                                          
                                       >Saiba mais</span>
                    </button>              
                </div>           
            </div>                
        </section>
        </div> 
    </div>    
  )
}

export default Hero