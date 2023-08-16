// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../styles'
import { useSelector } from 'react-redux';


import CheckDark from "../assets/checkDark.svg"
import CheckLight from "../assets/checkLight.svg"


const Modulos = () => {
   const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex justify-center items-center`}>
        <div className={`${styles.boxWidth} flex items-center justify-center `}>
            <section className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                                w-[360px] md:w-[1440px]
                                h-[2148px] md:h-[748px]
                                flex-shrink-0
                                flex
                                flex-col 
                                
                                mt-[48px]   md:mt-[128px]
                                
                              `}>
                                <div className="titleBox w-[260px] md:w-[538px] h-[32px] ">
                                  <h1 className={`${darkTheme ? "text-dark" : "text-light"}
                                                  font-roboto
                                                  text-[24px]
                                                  md:ml-[156px]
                                                  not-italic
                                                  font-medium
                                                  leading-[32px]
                                                  
                                               `}>Conteúdo programático</h1>
                                </div>
                                
                                {/* BOX MÓDULOS */}
                                <div className="modulosBox
                                                w-[360px] md:w-[1126px]
                                                h-[2084px] md:h-[684px]
                                                mt-[32px]
                                                flex-shrink-0
                                                
                                               
                                                md:flex
                                                md:flex-row
                                                md:gap-[16px]
                                                md:ml-[156px]
                                                
                                               "> 
                                    
                                    {/* BOX 1 */}
                                    <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                                      ${darkTheme ? "bg-dark-secondary" : "bg-light-secondary"}
                                                      Box1
                                                      flex
                                                      flex-col
                                                      w-[360px] md:w-[364.66669px]
                                                      h-[684px]
                                                      p-[24px]
                                                      items-start
                                                     
                                                      mb-[16px]
                                                      rounded-[24px]
                                                    `}>
                                          <div className="BoxInterno w-[312px] h-[636px] flex flex-col gap-[30px] ">
                                              <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              w-[177px]
                                                              h-[30px]
                                                              
                                                              font-lexend
                                                              text-[24px]
                                                              font-normal
                                                              not-italic
                                                              leading-[normal]
                                                              tracking-[0.18px]
                                                            `}>Módulo Básico</h2>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-lexend
                                                              text-[12px]
                                                              not-italic
                                                              font-medium
                                                              leading-[normal]
                                                              tracking-[0.4px]
                                                           `}>
                                                O módulo básico destina-se a todos os públicos. 
                                                Aqui você assimilará as regras e os conceitos fundamentais 
                                                para desenvolver uma ótima base sobre o tema.
                                              </p>
                                              <div className="intro 
                                                              w-[312px] 
                                                              h-[88px]
                                                              
                                                              flex 
                                                              flex-col 
                                                              items-start 
                                                              gap-2 
                                                              self-stretch">
                                                <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                                                                font-lexend
                                                                h-[20px]
                                                                
                                                                no-ligatures
                                                                flex
                                                                self-stretch
                                                                items-center
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                              `}>Carga horária: 30 horas</h3>
                                                <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                no-ligatures
                                                                font-lexend
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                             `}>Pré-requisitos: Acesso a computador, Ensino Médio 
                                                  completo e conhecimento básico de Excel. </p>              
                                              </div>
                                              <div className="button w-[312px] flex flex-col h-[40px] ">
                                                <button className={`${darkTheme ? "bg-dark-button" : "bg-light-button"}
                                                                    ${darkTheme ? "text-buttonDark" : "text-buttonLight"}
                                                                    ${darkTheme ? "hover:bg-dark-hoverDark" : "hover:bg-light-hoverLight"}
                                                                    botao
                                                                    flex
                                                                    flex-col
                                                                    rounded-[100px]
                                                                    py-[10px]
                                                                    px-[24px]
                                                                    items-center
                                                                    gap-[10px]
                                                                    self-stretch
                                                                  `}><span className='text-center
                                                                                      font-roboto
                                                                                      text-[16px]
                                                                                      not-italic
                                                                                      font-bold
                                                                                      leading-[20px]
                                                                                      tracking-[0.1px]
                                                                                     '>Tenho interesse</span></button>
                                              </div>
                                              <div className="boxAprendizado 
                                                              w-[312px] 
                                                              h-[298px] 
                                                              
                                                              flex
                                                              flex-col
                                                              items-start
                                                              gap-[16px]
                                                              self-stretch">
                                                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                      item1
                                                                      
                                                                      w-[312px]
                                                                      h-[54px]
                                                                      flex
                                                                      items-start
                                                                      gap-[16px]
                                                                      self-stretch
                                                                   `}>
                                                          <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                          <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                            Compreender a classificação das deficiências e suas implicações restritivas
                                                          </p>
                                                    </div>      
                                                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item2
                                                                    
                                                                    w-[312px]
                                                                    h-[54px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Perceber diferenças elementares entre acessibilidade e usabilidade 
                                                              em interfaces digitais
                                                          </p>
                                                      </div>        
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item3
                                                                    
                                                                    w-[312px]
                                                                    h-[36px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Explorar o arcabouço de normas, leis e guias relacionados à acessibilidade
                                                          </p>
                                                      </div>
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item4
                                                                    
                                                                    w-[312px]
                                                                    h-[54px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Conhecer a estrutura da WCAG, níveis de conformidade, princípios e requisitos
                                                          </p>
                                                      </div>
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item5
                                                                    
                                                                    w-[312px]
                                                                    h-[36px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Ter noções sobre tecnologias assistivas mais relevantes para testes
                                                          </p>
                                                      </div>
                                              </div>
                                          </div>
                                    </div>

                                    {/* BOX 2 */}
                                    <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                                      ${darkTheme ? "bg-dark-secondary" : "bg-light-secondary"}
                                                      Box1
                                                      flex
                                                      flex-col
                                                      w-[360px] md:w-[364.66669px]
                                                      h-[684px]
                                                      p-[24px]
                                                      items-start
                                                      gap-[30px]
                                                      mb-[16px]
                                                      rounded-[24px]
                                                    `}>
                                          <div className="BoxInterno w-[312px] h-[636px] flex flex-col gap-[30px] ">
                                              <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              w-[312px]
                                                              h-[30px]
                                                              
                                                              font-lexend
                                                              text-[24px]
                                                              font-normal
                                                              not-italic
                                                              leading-[normal]
                                                              tracking-[0.18px]
                                                            `}>Módulo Intermediário</h2>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-lexend
                                                              text-[12px]
                                                              not-italic
                                                              font-medium
                                                              leading-[normal]
                                                              
                                                           `}>
                                                    Este módulo tem foco na metodologia de aplicação 
                                                    da WCAG. Iremos revisitar a norma de uma forma mais 
                                                    direcionada, abordando informações sobre frameworks de implementação. 
                                              </p>
                                              <div className="intro 
                                                              w-[312px] 
                                                              h-[88px]
                                                              
                                                              flex 
                                                              flex-col 
                                                              items-start 
                                                              gap-2 
                                                              self-stretch">
                                                <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                                                                font-lexend
                                                                h-[20px]
                                                                
                                                                no-ligatures
                                                                flex
                                                                self-stretch
                                                                items-center
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                              `}>Carga horária: 30 horas</h3>
                                                <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                no-ligatures
                                                                font-lexend
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                             `}>Pré-requisitos: Ter concluído o básico ou
                                                                através de prova de conhecimento específico. </p>              
                                              </div>
                                              <div className="button w-[312px] flex flex-col h-[40px] ">
                                                <button className={`${darkTheme ? "bg-dark-button" : "bg-light-button"}
                                                                    ${darkTheme ? "text-buttonDark" : "text-buttonLight"}
                                                                    ${darkTheme ? "hover:bg-dark-hoverDark" : "hover:bg-light-hoverLight"}
                                                                    botao
                                                                    flex
                                                                    flex-col
                                                                    rounded-[100px]
                                                                    py-[10px]
                                                                    px-[24px]
                                                                    items-center
                                                                    gap-[10px]
                                                                    self-stretch
                                                                  `}><span className='text-center
                                                                                      font-roboto
                                                                                      text-[16px]
                                                                                      not-italic
                                                                                      font-bold
                                                                                      leading-[20px]
                                                                                      tracking-[0.1px]
                                                                                     '>Tenho interesse</span></button>
                                              </div>
                                              <div className="boxAprendizado 
                                                              w-[312px] 
                                                              h-[298px] 
                                                              
                                                              flex
                                                              flex-col
                                                              items-start
                                                              gap-[16px]
                                                              self-stretch">
                                                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                      item1
                                                                      
                                                                      w-[312px]
                                                                      h-[36px]
                                                                      flex
                                                                      items-start
                                                                      gap-[16px]
                                                                      self-stretch
                                                                   `}>
                                                          <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                          <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                            Entender a metodologia de avaliação de conformidade 
                                                          </p>
                                                    </div>      
                                                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item2
                                                                    
                                                                    w-[312px]
                                                                    h-[54px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Conhecer ferramentas de testes de acessibilidade para atendimento de situações específicas
                                                          </p>
                                                      </div>        
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item3
                                                                    
                                                                    w-[312px]
                                                                    h-[36px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Aprender práticas de mapeamento e reporte de defeitos
                                                          </p>
                                                      </div>
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item4
                                                                    
                                                                    w-[312px]
                                                                    h-[54px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Compreender as diferenças entre comportamentos dos componentes de interfaces digitais
                                                          </p>
                                                      </div>
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item5
                                                                    
                                                                    w-[312px]
                                                                    h-[54px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Aprender sobre configurações mínimas recomendadas para testes (web e mobile)
                                                          </p>
                                                      </div>
                                              </div>
                                          </div>            
                                    </div>

                                    {/* BOX 3 */}
                                    <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                                                      ${darkTheme ? "bg-dark-secondary" : "bg-light-secondary"}
                                                      Box1
                                                      flex
                                                      flex-col
                                                      w-[360px] md:w-[364.66669px]
                                                      h-[684px]
                                                      p-[24px]
                                                      items-start
                                                      gap-[30px]
                                                      mb-[16px]
                                                      rounded-[24px]
                                                    `}>
                                        <div className="BoxInterno w-[312px] h-[636px] flex flex-col gap-[30px] ">
                                              <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              w-[312px]
                                                              h-[30px]
                                                              
                                                              font-lexend
                                                              text-[24px]
                                                              font-normal
                                                              not-italic
                                                              leading-[normal]
                                                              tracking-[0.18px]
                                                            `}>Módulo Avançado</h2>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-lexend
                                                              text-[12px]
                                                              not-italic
                                                              font-medium
                                                              leading-[normal]
                                                              tracking-[0.4px]
                                                           `}>
                                                  Exclusivo para profissionais que já atuam na 
                                                  área tech, este módulo é dedicado às boas práticas 
                                                  para a construção de conteúdos que atendam aos requisitos 
                                                  de Acessibilidade.
                                              </p>
                                              <div className="intro 
                                                              w-[312px] 
                                                              h-[88px]
                                                              
                                                              flex 
                                                              flex-col 
                                                              items-start 
                                                              gap-2 
                                                              self-stretch">
                                                <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                                                                font-lexend
                                                                h-[20px]
                                                                
                                                                no-ligatures
                                                                flex
                                                                self-stretch
                                                                items-center
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                              `}>Carga horária: 30 horas</h3>
                                                <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                no-ligatures
                                                                font-lexend
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                             `}>Pré-requisitos: Ter concluído o intermediário ou 
                                                             através de prova de conhecimento específico.</p>              
                                              </div>
                                              <div className="button w-[312px] flex flex-col h-[40px] ">
                                                <button className={`${darkTheme ? "bg-dark-button" : "bg-light-button"}
                                                                    ${darkTheme ? "text-buttonDark" : "text-buttonLight"}
                                                                    ${darkTheme ? "hover:bg-dark-hoverDark" : "hover:bg-light-hoverLight"}
                                                                    botao
                                                                    flex
                                                                    flex-col
                                                                    rounded-[100px]
                                                                    py-[10px]
                                                                    px-[24px]
                                                                    items-center
                                                                    gap-[10px]
                                                                    self-stretch
                                                                  `}><span className='text-center
                                                                                      font-roboto
                                                                                      text-[16px]
                                                                                      not-italic
                                                                                      font-bold
                                                                                      leading-[20px]
                                                                                      tracking-[0.1px]
                                                                                     '>Tenho interesse</span></button>
                                              </div>
                                              <div className="boxAprendizado 
                                                              w-[312px] 
                                                              h-[298px] 
                                                              
                                                              flex
                                                              flex-col
                                                              items-start
                                                              gap-[16px]
                                                              self-stretch">
                                                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                      item1
                                                                      
                                                                      w-[312px]
                                                                      h-[90px]
                                                                      flex
                                                                      items-start
                                                                      gap-[16px]
                                                                      self-stretch
                                                                   `}>
                                                          <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                          <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                            Aprender sobre ferramentas de verificação da qualidade 
                                                            do código durante o desenvolvimento -  plataformas Web 
                                                            (Desktop) e Mobile (nativo/WebView) em Android e iOS
                                                          </p>
                                                    </div>      
                                                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item2
                                                                    
                                                                    w-[312px]
                                                                    h-[36px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Características do desenvolvimento de interfaces digitais
                                                          </p>
                                                      </div>        
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item3
                                                                    
                                                                    w-[312px]
                                                                    h-[36px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Semântica, estado e função dos elementos
                                                          </p>
                                                      </div>
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item4
                                                                    
                                                                    w-[312px]
                                                                    h-[36px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Aprender sobre componentes nativos e elementos customizados
                                                          </p>
                                                      </div>
                                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                    item5
                                                                    
                                                                    w-[312px]
                                                                    h-[36px]
                                                                    flex
                                                                    items-center
                                                                    justify-center

                                                                    gap-[16px]
                                                                    self-stretch
                                                                   `}>
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-lexend
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                        `}>
                                                              Aprofundar em propriedades Wai-Aria e Roles
                                                          </p>
                                                      </div>
                                              </div>
                                          </div>              
                                    </div>

                                </div>
            </section>
        </div>
    </div>
  )
}

export default Modulos