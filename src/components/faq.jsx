// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styles from "../styles";
import { useSelector } from "react-redux";


import Question from "../assets/character.png"
import { accordionData } from '../constants';
import Accordion from './accordion';

const Faq = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
 
    

  
  return (
    <div className={`flex justify-center items-center`}>
        <div className={`${styles.boxWidth} flex items-center justify-center `}>
            <section className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                                ${darkTheme ? "text-dark" : "text-light"}
                                w-[358px] md:w-[1155px]
                                h-[927px] md:h-[719px]
                                flex-shrink-0
                                mt-[48px] md:mt-[128px]
                                md:flex
                               
            `}>
                
                <div className="boxTitle w-[98px] md:w-[435px] h-[60px] md:h-[160px]"> 
                    <h1 className='no-ligatures
                                   font-roboto
                                   md:ml-[87px] 
                                   text-[28px] md:text-[48px]
                                   not-italic
                                   font-semibold
                                   leading-[normal]
                                   tracking-[0.18px] 
                                   
                                  '>
                        Perguntas frequentes 
                    </h1>
                    <div className="imageQuestion 
                                    items-center
                                    justify-center
                                    flex    
                                    md:w-[435px] 
                                    md:h-[498px]
                                    md:mt-[60.74px]
                                    invisible md:visible
                                    
                                    flex-shrink-0">
                    <img className='w-[435px] h-[498px]' src={Question} alt="Imagem de uma mulher com icones de interrogação ao redor de sua cabeça" />
                </div>
                </div>
                
                {/* Box perguntas */}
                <div className="boxFaq 
                                
                                w-[358px] md:w-[720px]
                                h-[835px] md:h-[699px]
                                mt-[32px] md:mt-[20px]
                                flex 
                                flex-col 
                                items-start md:items-center
                               
                                md:gap-[9px] ">

                    {/* Questions */}    
                       {accordionData.map((item, id) =>{
                        //destruct
                        const {question, answer} = item;
                        return <div key={id} className="content ">
                            {/* Passing two props */}
                            <Accordion question={question} answer={answer}/>
                        </div>
                       })}
                    </div>
            </section>
        </div>
    </div>
  )
}

export default Faq