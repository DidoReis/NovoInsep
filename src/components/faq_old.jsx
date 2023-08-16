// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import styles from "../styles";
import { useSelector } from "react-redux";

import ArrowUp from "../assets/arrowUp.svg"
import ArrowDown from "../assets/ArrowDown.png"
import Question from "../assets/character.png"

const Faq = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme);
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
                        <div className='w-[358px] md:w-[720px]
                                        h-[82px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                       
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      h-[72px] md:h-[24px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      
                                      ' 
                                      
                        >Sou uma pessoa com deficiência. Que tipo de apoio terei durante o curso?</p>                    
                        <button onClick={() => toggleArrow(0)}><img className='w-[40] h-[40px]' src={showArrowDown[0] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                            
                        `}></div>
                        
                    </div>  
                    
                    {/* Question 2 */}
                    <div className="question2 
                                    w-[358px] md:w-[720px]
                                    h-[58px] md:h-[50px]
                                    flex
                                    flex-col
                                    
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[58px] md:h-[50px]
                                        flex
                                        gap-[36px]
                                        items-center
                                        
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      md:h-[24px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      
                                      ' 
                                      
                        >Como funciona o processo de inscrição?</p>                    
                        <button onClick={() => toggleArrow(1)}><img className='w-[40] h-[40px]' src={showArrowDown[1] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                            
                                        `}></div>
                    </div>  
                    {/* Question 3 */}
                    <div className="question3 
                                    w-[358px] md:w-[720px] 
                                    h-[50px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[50px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Qual será o formato das aulas?</p>                    
                        <button onClick={() => toggleArrow(2)}><img className='w-[40] h-[40px]' src={showArrowDown[2] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                            
                                        `}></div>
                    </div> 
                    {/* Question 4 */}
                    <div className="question4 
                                    w-[358px] md:w-[720px]
                                    h-[58px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[58px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Como serão as atividades assíncronas?</p>                    
                        <button onClick={() => toggleArrow(3)}><img className='w-[40] h-[40px]' src={showArrowDown[3] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                            
                                        `}></div>
                    </div> 
                    {/* Question 5 */}
                    <div className="question5 
                                    w-[358px] md:w-[720px]
                                    h-[50px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[50px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Quanto tempo dura o curso?</p>                    
                        <button onClick={() => toggleArrow(4)}><img className='w-[40] h-[40px]' src={showArrowDown[4] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div> 
                    {/* Question 6 */}
                    <div className="question6 
                                    w-[358px] md:w-[720px]
                                    h-[50px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[50px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Eu receberei algum certificado?</p>                    
                        <button onClick={() => toggleArrow(5)}><img className='w-[40] h-[40px]' src={showArrowDown[5] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div>
                    {/* Question 7 */}
                    <div className="question7 
                                    w-[358px] md:w-[720px]
                                    h-[50px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[50px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Os cursos são pagos?</p>                    
                        <button onClick={() => toggleArrow(6)}><img className='w-[40] h-[40px]' src={showArrowDown[6] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div>
                    {/* Question 8 */}
                    <div className="question8 
                                    w-[358px] md:w-[720px]
                                    h-[58px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[58px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Nunca trabalhei com tecnologia. Esse curso é para mim?</p>                    
                        <button onClick={() => toggleArrow(7)}><img className='w-[40] h-[40px]' src={showArrowDown[7] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div> 
                    {/* Question 9 */}
                    <div className="question9 
                                    w-[358px] md:w-[720px]
                                    h-[58px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[58px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[720px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Quais pré-requisitos para os diferente módulos?</p>                    
                        <button onClick={() => toggleArrow(8)}><img className='w-[40] h-[40px]' src={showArrowDown[8] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div> 
                    {/* Question 10 */}
                    <div className="question10 
                                    w-[358px] md:w-[720px]
                                    h-[82px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[82px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      h-[72px] md:h-[24px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Já tenho conhecimento em acessibilidade digital. Posso pular módulos?</p>                    
                        <button onClick={() => toggleArrow(9)}><img className='w-[40] h-[40px]' src={showArrowDown[9] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div>  
                    {/* Question 11 */}
                    <div className="question11 
                                    w-[358px] md:w-[720px]
                                    h-[82px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[82px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[644px]
                                      h-[72px] md:h-[24px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >Quero fazer uma mudança de carreira. Só o módulo Básico já serve?</p>                    
                        <button onClick={() => toggleArrow(10)}><img className='w-[40] h-[40px]' src={showArrowDown[10] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div>  
                    {/* Question 12 */}
                    <div className="question12 
                                    w-[358px] md:w-[720px]
                                    h-[58px] md:h-[50px]
                                    flex
                                    flex-col
                                    ">
                        <div className='w-[358px] md:w-[720px]
                                        h-[58px] md:h-[50px]
                                        flex
                                        items-center
                                        gap-[36px]
                                        '>              
                        <p className='w-[282px] md:w-[720px]
                                      font-roboto
                                      text-[16px]
                                      not-italic
                                      font-bold
                                      leading-[24px]
                                      tracking-[0.5px]
                                      ' 
                                      
                        >O INSEP me ajuda na recolocação profissional?</p>                    
                        <button onClick={() => toggleArrow(11)}><img className='w-[40] h-[40px]' src={showArrowDown[11] ? ArrowDown : ArrowUp} alt="" /></button>
                        
                        </div>  
                        <div className={`${darkTheme ? "bg-dark-divider" : "bg-light-divider"}
                                            w-[358px] md:w-[720px]
                                            h-[2px]
                                            self-stretch
                                        `}></div>
                    </div> 
                </div>
            </section>
        </div>
    </div>
  )
}

export default Faq