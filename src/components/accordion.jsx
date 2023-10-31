import {BiSolidDownArrow} from "react-icons/bi"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import { useSelector } from "react-redux"

// eslint-disable-next-line react/prop-types
const Accordion = ({ question, answer}) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [show, setShow] = useState(false);
  return (
   
    <>
    
    <div onClick={() => setShow(!show)}
      className='w-[358px] md:w-[720px]
      h-[auto] md:h-[50px]
      flex
     
      md:items-center
      self-stretch
      gap-[36px]'>
      <h1 className='w-[282px] md:w-[644px]
                     h-[auto] md:h-[24px]
                     font-roboto
                     text-[16px]
                     not-italic
                     font-bold
                     leading-[24px]
                     
                     tracking-[0.5px]'>{question}</h1>
      <BiSolidDownArrow className={`text-[15px] text-[#FEAC39] transition-all duration-500 ${show ? "rotate-180" : ""}`}/>
    </div>
    <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                            
                        `}></div>
    {/* Answer sector */}
    <AnimatePresence>
    {show && (
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
                  bg-white text-[#1C1B1F]'>{answer}</p>
    </motion.div>
    )}
    </AnimatePresence>
    </>
   
  )
}

export default Accordion