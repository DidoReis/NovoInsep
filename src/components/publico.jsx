// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../styles'
import { useSelector } from 'react-redux';

const Publico = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`${styles.boxWidth} flex items-center justify-center `}>
        <section className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
          w-[360px] md:w-[1128px]
          h-[984px] md:h-[auto]
          flex-shrink-0
          mt-[48px]
          
        `}>
          {/* Title */}
          <div className="title w-[fixed] h-[]fixed mb-[32px]">
            <h1 className={`${darkTheme ? "text-dark" : "text-light"}
                          font-roboto text-[24px] not-italic font-medium leading-[32px]
                          
                          `}>
              Público de interesse
            </h1>
          </div>
           
           {/* Box Interesse */}
            <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                              inter-box 
                              flex 
                              h-[920px] md:h-[272px]
                              
                              rounded-[24px]
                              p-[24px] 
                              flex-col 
                              justify-center 
                              items-start 
                              gap-6
                           `}>
                            <div className="Title2 self-stretch">
                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                              no-ligatures
                                              font-roboto
                                              text-[14px]
                                              not-italic
                                              font-bold
                                              leading-[24px]
                                              tracking-[0.25px]
                                           `}>
                                Nossos cursos são feitos para pessoas com ou sem deficiência, 
                                que já atuam ou não na área de tecnologia, e que desejam 
                                ampliar suas possibilidades profissionais se especializando em 
                                uma área carente de profissionais éticos e habilitados. Veja alguns 
                                exemplos de pessoas que estudam conosco:</p>
                            </div>

                            <div className="w-[312px] md:w-[1061px]
                                            h-[656px] 
                                            flex flex-col 
                                            md:flex-row
                                            md:flex-wrap
                                            gap-4 
                                            " >
                              
                              {/* Cards */}
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[205px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                              
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>Profissionais de QA</p>
                                  </div>
                                  {/* Card 2 */}
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[409px]
                                              h-[80px] md:h-[56px]
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>PROFISSIONAIS DA COMUNICAÇÃO E MARKETING</p>
                                  </div>
                                  {/* Card3 */}
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[218px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>ANALISTA DE NEGÓCIOS</p>
                                  </div> 
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[181px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>DESENVOLVEDORES</p>
                                  </div>
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[127px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>ADVOGADOS</p>
                                  </div>
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[172px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>UX/UI DESIGNERS</p>
                                  </div>
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[153px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>WEBDESIGNERS</p>
                                  </div>
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[131px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `}>PSICÓLOGOS</p>
                                  </div>
                                  <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                              card 
                                              ${darkTheme ? "bg-dark-secondary" : "bg-light-primary"}
                                              w-[auto] md:w-[319px]
                                              h-[56px] 
                                              flex 
                                              flex-col 
                                              text-center
                                              justify-center
                                              items-center
                                              gap-2
                                              rounded-[8px]
                                             `}>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[14px]
                                                              not-italic
                                                              w-[100%]
                                                              font-semibold
                                                              leading-[24px]
                                                              tracking-[0.25px]
                                                              uppercase
                                                           `} aria-label='Environmental Social Governance'>Profissionais que atuam com esg</p>
                                  </div>
                              
                              
                              
                              </div>
                           </div>
        </section>        
      </div>
    </div>
  )
}

export default Publico