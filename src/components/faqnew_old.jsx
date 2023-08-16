// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styles from "../styles";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion"

import ArrowUp from "../assets/arrowUp.svg"
import ArrowDown from "../assets/ArrowDown.png"
import Question from "../assets/character.png"
import {BiSolidDownArrow} from "react-icons/bi"

const Faq = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
    const [show, setShow] = useState(false);
    const [showArrowDown, setShowArrow] = useState(new Array(12).fill(false));
    

    const toggleArrow = (index) => {
        setShowArrow((prevShowArrow) => {
            const newState = [...prevShowArrow];
            newState[index] = !newState[index];
            return newState;
        });
    }
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
                    <h2 className='no-ligatures
                                   font-lexend
                                   md:ml-[87px] 
                                   text-[48px] md:text-[128px]
                                   not-italic
                                   font-semibold
                                   leading-[normal]
                                   tracking-[0.18px] 
                                  '>
                        FAQ
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
                               
                                gap-[9px] ">

                    {/* Question 1 */}    
                       
                    <div className="question1 
                                    w-[358px] md:w-[720px]
                                    h-[82px] md:h-[50px]
                                    flex
                                    flex-col
                                    md:items-center
                                    self-stretch
                                  
                                    ">
                        {/* Question sector */}
                        <div className='w-[358px] md:w-[720px]
                                        h-[82px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                       
                                        '>              
                        <h1 className='w-[282px] md:w-[644px]
                                      h-[72px] md:h-[24px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      
                                      ' 
                                      
                        >Sou uma pessoa com deficiência. Que tipo de apoio terei durante o curso?</h1>                    
                        <button onClick={() => setShow(!show)} className='w-[40px] h-[40px]'>
                        <BiSolidDownArrow className={` transition-all duration-500 ${show ? "rotate-180" : ""}`}/>
                        </button>                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                            
                        `}></div>
                        {/* Answer Section */}
                        <AnimatePresence>
                        {show && (
                        <motion.div 
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{ duration: 0.3}}  
                        className='w-[358px] md:w-[720px]
                                        h-[82px] md:h-[104px]
                                        flex
                                        bg-white
                                        items-center'>
                            <p className={`${darkTheme ? "text-light" : "text-light"}`}> 
                            Nosso material didático é plenamente compatível com as 
                            tecnologias assistivas. Imagens relevantes são descritas 
                            no decorrer do curso. Em turmas com pessoa surdas, disponibilizamos 
                            intérprete de Libras também. </p>                 
                        </motion.div>
                        )}
                        </AnimatePresence>
                    </div>  
                    
                    
                </div>
                                
            </section>
        </div>
    </div>
  )
}

export default Faq