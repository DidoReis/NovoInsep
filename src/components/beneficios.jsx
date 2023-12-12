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
              mt-[48px]
              inline-flex
              flex-col lg:flex-col
              w-[390px] lg:w-[1440px] ipad:w-[1194px] ipadV:w-[836px]
              h-[1065px] lg:h-[420px] ipad:h-[403.9335px] ipadV:h-[555px]
              pt-[40.038px] pb-[40px] pl-[16px] pr-[16px]
              ipad:pt-[32px] ipad:pb-[32px] ipad:pl-[32px] ipad:pr-[32px]
              ipadV:pt-[32px] ipadV:pb-[32px] ipadV:pl-[44px] ipadV:pr-[44px]
              lg:pt-[39.91px] lg:pb-[40px] lg:pl-[156px] lg:pr-[156px]
              
              
            `}>
            
                <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                 flex
                 w-[286px] lg:w-[446px] ipad:w-[446px] ipadV:w-[446px]
                 h-[64.06px] lg:h-[27.93349px] ipad:h-[27.93349px] ipadV:h-[27.93349px]
                 flex-col 
                 justify-center 
                 flex-shrink-0
                 
                 font-roboto
                 text-[24px]
                 not-italic
                 font-medium
                 leading-[32px]  
                 mb-[32.9px]
                 
                 `
                }
               >O Insep te oferece benefícios únicos</h2>
               
               <div className="
               w-[358px] lg:w-[1128px] ipad:w-[1128px] ipadV:w-[748px]
               h-[888px] lg:h-[280px] ipad:h-[280px] ipadV:h-[432px]
               
               
               flex lg:flex-wrap ipad:flex-wrap ipadV:flex-wrap
               flex-col lg:flex-row ipad:flex-row ipadV:flex-row
               items-start
               justify-center ipad:justify-center
               gap-[24px] lg:gap-[24px]
               flex-shrink-0
              
               ">
                {/* Card 1 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                  
                  w-[358px] lg:w-[358px]
                  h-[128px] lg:h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)
                `}>
                  
                  <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>Excelência técnica e profissional</h3>
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
                    `}>Nossos cursos são elaborados por Especialistas com deficiência e de altíssimo nível profissional.</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                  
                  w-[358px] lg:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>Turmas Inclusivas</h3>
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
                    `}>Aqui você terá oportunidade de interagir (com pessoas diversas), desenvolver a empatia e suas habilidades interpessoais.</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                
                  w-[358px] lg:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>AULAS virtuais E AO VIVO</h3>
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
                    `}>Obtenha o máximo de benefício das nossas aulas interativas e dinâmicas de grupo facilitadas com seus colegas.</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                  
                  w-[358px] lg:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>APRENDIZADO PRÁTICO</h3>
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
                    `}>Nossa metodologia equilibra conceitos teóricos, desafios práticos e situacionais para que você aprenda de forma consistente. </p>
                  </div>
                </div>

                {/* Card 5 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
               
                  w-[358px] lg:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>Responsabilidade social e ética</h3>
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
                    `}>Estudando conosco você estará contribuindo com nossos projetos sociais que apoiam os para-atletas no esporte.   
                       </p>
                  </div>
                </div>
                
                {/* Card 6 */}
                <div className=
                {`${darkTheme ? "bg-dark-cardBeneficio" : "bg-light-cardBeneficio"}
                  flex
                 
                  w-[358px] lg:w-[358px]
                  h-[128px]
                  p-[16px]
                  flex-col
                  justify-center
                  items-start
                  rounded-[8px]
                  border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
                `}>
                  
                  <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                  font-roboto
                  text-[14px]
                  not-italic
                  font-black
                  leading-[16px]
                  mb-[8px]
                  tracking-[0.35px]
                  uppercase
                  `}>Apoio de carreira</h3>
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
                    `}>Incentivamos nossos alunos a ampliar seus horizontes profissionais e a iniciar processos de transição de carreira.</p>
                  </div>
                </div>
               </div>
            </section>
        </div>
    </div>
  )
}

export default Beneficios