// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../styles'
import { useSelector } from 'react-redux';

const Beneficios = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex justify-center items-center`}>
        <div className={`${styles.boxWidth} flex items-center justify-center `}>
            <section className={`${darkTheme ? "bg-dark-secondary" : "bg-light-secondary"}
              benefBox 
              
              inline-flex
              flex-col md:flex-col
              w-[390px] md:w-[1440px]
              h-[1065px] md:h-[420px]
              pt-[40.038px] pb-[40px] pl-[16px] pr-[16px]


            `}>
            
                <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                 flex
                 w-[286px] md:w-[446px]
                 h-[64.06px] md:h-[27.93349px]
                 flex-col 
                 justify-center 
                 flex-shrink-0
                 
                 font-roboto
                 text-[24px]
                 not-italic
                 font-medium
                 leading-[32px]  
                 mb-[32.9px]
                 md:ml-[156px]
                 `
                }
               >O Insep te oferece benefícios únicos</h2>
               
               <div className="
               w-[358px] md:w-[1128px]
               h-[888px] md:h-[280px]
               md:ml-[156px]
               
               flex md:flex-wrap
               flex-col md:flex-row
               items-start
               justify-center
               gap-[24px] md:gap-[24px]
               flex-shrink-0
              
               ">
                {/* Card 1 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                  
                  w-[358px] md:w-[358px]
                  h-[128px] md:h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)
                `}>
                  
                  <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}> Excelência técnica e profissional</h2>
                  <div className={`${darkTheme ? "text-dark" : "text-light"}
                    w-[100%]
                    h-[auto]
                    
                  `}>
                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                      font-roboto
                      text-[16px]
                      not-italic
                      font-normal
                      leading-[24px]
                    `}>Nossos cursos são elaborados por Especialistas com 
                       deficiência e de altíssimo nível profissional.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                  
                  w-[358px] md:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>Turmas Inclusivas</h2>
                  <div className={`${darkTheme ? "text-dark" : "text-light"}
                    w-[100%]
                    h-[auto]
                    
                  `}>
                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                      font-roboto
                      text-[16px]
                      not-italic
                      font-normal
                      leading-[24px]
                    `}>Aqui você terá oportunidade de interagir (com pessoas diversas), 
                       desenvolver a empatia e suas habilidades interpessoais.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                
                  w-[358px] md:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>AULAS virtuais E AO VIVO</h2>
                  <div className={`${darkTheme ? "text-dark" : "text-light"}
                    w-[100%]
                    h-[auto]
                    
                  `}>
                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                      font-roboto
                      text-[16px]
                      not-italic
                      font-normal
                      leading-[24px]
                    `}>Obtenha o máximo de benefício das nossas aulas interativas 
                      e dinâmicas de grupo facilitadas com seus colegas.</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                  
                  w-[358px] md:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>APRENDIZADO PRÁTICO</h2>
                  <div className={`${darkTheme ? "text-dark" : "text-light"}
                    w-[100%]
                    h-[auto]
                    
                  `}>
                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                      font-roboto
                      text-[16px]
                      not-italic
                      font-normal
                      leading-[24px]
                    `}>Nossa metodologia equilibra conceitos teóricos, 
                       desafios práticos e situacionais para que você aprenda de forma consistente.</p>
                  </div>
                </div>

                {/* Card 5 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
               
                  w-[358px] md:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>Responsabilidade social e ética</h2>
                  <div className={`${darkTheme ? "text-dark" : "text-light"}
                    w-[100%]
                    h-[auto]
                    
                  `}>
                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                      font-roboto
                      text-[16px]
                      not-italic
                      font-normal
                      leading-[24px]
                    `}>Estudando conosco você estará contribuindo com 
                      nossos projetos sociais que apoiam os para-atletas no esporte. 
                       </p>
                  </div>
                </div>
                
                {/* Card 6 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                 
                  w-[358px] md:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>Apoio de carreira</h2>
                  <div className={`${darkTheme ? "text-dark" : "text-light"}
                    w-[100%]
                    h-[auto]
                    
                  `}>
                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                      font-roboto
                      text-[16px]
                      not-italic
                      font-normal
                      leading-[24px]
                    `}>Incentivamos nossos alunos a ampliar seus horizontes 
                       profissionais e a iniciar processos de transição de carreira.</p>
                  </div>
                </div>
               </div>
            </section>
        </div>
    </div>
  )
}

export default Beneficios