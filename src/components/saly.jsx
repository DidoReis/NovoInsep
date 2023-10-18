// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../styles';

import SalyImg from "../assets/saly.png"

const Saly = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
  return ( 
    <div className="flex justify-center items-center">
        <div className={`${styles.boxWidth} flex items-center justify-center`}>
            <section className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
              flex
              w-[359px] lg:w-[1440px] ipad:w-[1146px] ipadV:w-[762px]
              h-[640px] lg:h-[280px] ipad:h-[280px] ipadV:h-[280px]
              items-center
              content-center
              mt-[48px] lg:mt-[128px] ipad:mt-[128px]
              gap-[80px] ipadV:gap-[32px]
              lg:ml-[156px]
              flex-wrap ipadV:flex-col
              
            `}>
                <div className="flex
                                
                                w-[359px] 
                                h-[280px] 
                                justify-center
                                items-center
                                flex-shrink-0">
                                    <img src={SalyImg} alt="Menina em um foguete" aria-hidden="true"/>
                </div>
                <div className="h-[280px] flex ">
                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                    no-ligatures
                                    w-[359px] lg:w-[687px] ipad:w-[687px] ipadV:w-[371px]
                                    font-roboto
                                    lg:mt-[56px] ipad:mt-[56px]
                                    text-[48px] ipadV:text-[48px]
                                    not-italic
                                    font-extrabold
                                    leading-[normal] 
                                    tracking-[0.18px]
                                    
                                `}>
                                    Desde 2020 o Insep já realizou 
                                    9 turmas e mais de 200 alunos formados.
                    </p>
                </div>
                            
            </section>
        </div>
    </div>
  )
}

export default Saly