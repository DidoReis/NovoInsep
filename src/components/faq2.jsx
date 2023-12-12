// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styles from "../styles";
import { useSelector } from "react-redux";


import Question from "../assets/character.png"
import { accordionData } from '../constants/index2';
import Accordion from './FaqAccordion';
import { BiSolidDownArrow } from 'react-icons/bi';
import { BiSolidUpArrow } from 'react-icons/bi';
import {motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const [activeQuestion, setActiveQuestion] = useState(null);
    

  
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
                                mb-[88px]
                               
            `}>
                
                <div className="boxTitle w-[98px] md:w-[435px] h-[60px] md:h-[160px]"> 
                    <h2 className='no-ligatures
                                   font-roboto
                                   md:ml-[87px] 
                                   text-[28px] md:text-[48px]
                                   not-italic
                                   font-semibold
                                   leading-[normal]
                                   tracking-[0.18px] 
                                   
                                  '>
                        Perguntas frequentes 
                    </h2>
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
                       {accordionData.map((q) => (
                        <div key={q.id} className='mb-4 last:mb-0'>
                            <button className='text-left flex' 
                            onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
                            aria-expanded={activeQuestion === q.id ? "true" : "false"}
                            aria-controls={`answer-${q.id}`}
                            >
                                <h3 className='w-[282px] md:w-[644px]
                                               h-[auto] md:h-[24px]
                                               font-roboto
                                               text-[16px]
                                               not-italic
                                               font-bold
                                               leading-[24px]
                                               role="button"
                                               tracking-[0.5px]'>{q.question}</h3>
                                               {activeQuestion === q.id ? <BiSolidUpArrow className='text-[15px] text-[#FEAC39]'/> : <BiSolidDownArrow className="text-[15px] text-[#FEAC39]" /> }
                            </button>
                            <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                            
                        `}></div>
                        
                        {/* Answer sector */}
    <AnimatePresence>
    {activeQuestion === q.id && (
    <motion.div 
    initial={{height: 0}}
    animate={{height: "auto"}}
    exit={{height: 0}}
    transition={{ duration: 0.3}}
    className='overflow-clip'>
      <p className='p-4
                    gap-[10px]
                    font-roboto
                    text-[16px]
                    not-italic
                    font-semibold
                    leading-[24px]
                    tracking-[0.25px]
                  bg-white text-[#1C1B1F]'>{q.answer}</p>
    </motion.div>
    )}
    </AnimatePresence>
                        </div>
                       ))}
                    </div>
            </section>
        </div>
    </div>
  )
}

export default Faq