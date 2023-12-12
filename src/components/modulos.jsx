// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../styles'
import { useSelector } from 'react-redux';


import CheckDark from "../assets/checkDark.svg"
import CheckLight from "../assets/checkLight.svg"


const Modulos = () => {
   const darkTheme = useSelector((state) => state.theme.darkTheme);

   const redirectToLink = (link) => {
    const links = {
      moduloBasico: "https://api.whatsapp.com/send?phone=551133847284&text=Tenho%20interesse%20no%20treinamento%20m%C3%B3dulo%20B%C3%A1sico",
      moduloIntermediario: "https://api.whatsapp.com/send?phone=551133847284&text=Tenho%20interesse%20no%20treinamento%20no%20m%C3%B3dulo%20intermedi%C3%A1rio",
      moduloAvancado: "https://api.whatsapp.com/send?phone=551133847284&text=Tenho%20interesse%20no%20treinamento%20no%20m%C3%B3dulo%20avan%C3%A7ado"
    };
    if(links[link]) {
      window.open(links[link], '_blank');
    }
   };
  return (
    <div className={`flex justify-center items-center`}>
        <div className={`${styles.boxWidth} flex items-center justify-center `}>
            <section id='modulos' className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                                w-[360px] md:w-[1440px]
                                h-[2148px] md:h-[748px]
                                flex-shrink-0
                                flex
                                flex-col 
                                
                                mt-[48px]   md:mt-[128px]
                                
                              `}>
                                <div className="titleBox w-[260px] md:w-[538px] h-[32px] ">
                                  <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                                                  font-roboto
                                                  text-[24px]
                                                  md:ml-[156px]
                                                  not-italic
                                                  font-medium
                                                  leading-[32px]
                                                  
                                               `}>Conteúdo programático</h2>
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
                                              <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              w-[177px]
                                                              h-[30px]
                                                              
                                                              font-roboto
                                                              text-[24px]
                                                              font-normal
                                                              not-italic
                                                              leading-[normal]
                                                              tracking-[0.18px]
                                                            `}>Módulo Básico</h3>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[12px]
                                                              not-italic
                                                              font-medium
                                                              leading-[normal]
                                                              tracking-[0.4px]
                                                           `}>
                                                O módulo básico destina-se a todos 
                                                os públicos. Aqui você assimilará as 
                                                regras e os conceitos fundamentais para desenvolver 
                                                uma ótima base sobre o tema.
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
                                                                font-roboto
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
                                                                font-roboto
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                             `}>Pré-requisitos:  Acesso a computador, 
                                                                Ensino Médio completo e noções básicas de Excel. </p>              
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
                                                                  `}
                                                                  aria-label="Tenho interesse em Módulo Básico"
                                                                  onClick={() => redirectToLink('moduloBasico')}
                                                                  ><span className='text-center
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
                                                          <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" />
                                                          <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                           Classificação das deficiências e suas implicações restritivas
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Diferenças elementares entre acessibilidade e usabilidade em interfaces digitais
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Conhecimento das normas, leis e guias relacionados à acessibilidade
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" />
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Conhecimento da estrutura da WCAG, níveis de conformidade, princípios e requisitos
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Noções sobre tecnologias assistivas mais relevantes para testes
                                                          </p>
                                                      </div>
                                              </div>
                                          </div>
                                    </div>

                                    {/* BOX 2 */}
                                    <div className={`border-solid border-[1px] ${darkTheme ? /*"border-dark-borderCard"*/ "border-dark-borderCardCurso" : "border-light-borderCardCurso" /*"border-light-borderCard"*/ }
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
                                              <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              w-[312px]
                                                              h-[30px]
                                                              
                                                              font-roboto
                                                              text-[24px]
                                                              font-normal
                                                              not-italic
                                                              leading-[normal]
                                                              tracking-[0.18px]
                                                            `}>Módulo Intermediário</h3>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[12px]
                                                              not-italic
                                                              font-medium
                                                              leading-[normal]
                                                              
                                                           `}>
                                                    Com foco na metodologia de aplicação da WCAG,
                                                     iremos revisitar a norma de uma forma mais 
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
                                                                font-roboto
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
                                                                font-roboto
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                             `}>Pré-requisitos: Ter concluído o básico ou através de prova de conhecimento específico.</p>              
                                              </div>
                                              <div className="button w-[312px] flex flex-col h-[40px] ">
                                                <button className={`${darkTheme ? /*"bg-dark-button"*/"bg-dark-buttonCurso ": "bg-light-buttonCurso"  /*"bg-light-button"*/}
                                                                    ${darkTheme ? "text-buttonDark" : "text-buttonLight"}
                                                                    ${darkTheme ? /*"hover:bg-dark-hoverDark"*/ "hover:bg-light-hoverLight" : "hover:bg-light-hoverLight"}
                                                                    botao
                                                                    flex
                                                                    flex-col
                                                                    rounded-[100px]
                                                                    py-[10px]
                                                                    px-[24px]
                                                                    items-center
                                                                    gap-[10px]
                                                                    self-stretch
                                                                  `}
                                                                  aria-label="Tenho interesse em Módulo Intermediário"
                                                                  onClick={() => redirectToLink('moduloIntermediario')}
                                                                  >{/* <span className='text-center
                                                                                      font-roboto
                                                                                      text-[16px]
                                                                                      not-italic
                                                                                      font-bold
                                                                                      leading-[20px]
                                                                                      tracking-[0.1px]
                                                                                     '>Tenho interesse</span> */}
                                                                                     <span className='text-center
                                                                                      font-roboto
                                                                                      text-[16px]
                                                                                      not-italic
                                                                                      font-bold
                                                                                      leading-[20px]
                                                                                      text-white
                                                                                      tracking-[0.1px]
                                                                                     '>Turma aberta 02/11/2023</span></button>
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
                                                          <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                          <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                            Metodologia de avaliação de conformidade com os requisitos de acessibilidade  
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                             Ferramentas de testes de acessibilidade para atendimento de situações específicas
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Práticas de mapeamento e reporte de defeitos
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Diferenças entre comportamentos dos componentes 
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Configurações mínimas recomendadas para testes (web e mobile) 
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
                                              <h3 className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              w-[312px]
                                                              h-[30px]
                                                              
                                                              font-roboto
                                                              text-[24px]
                                                              font-normal
                                                              not-italic
                                                              leading-[normal]
                                                              tracking-[0.18px]
                                                            `}>Módulo Avançado</h3>
                                              <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                              no-ligatures
                                                              font-roboto
                                                              text-[12px]
                                                              not-italic
                                                              font-medium
                                                              leading-[normal]
                                                              tracking-[0.4px]
                                                           `}>
                                                 Exclusivo para profissionais da área tech, este módulo 
                                                 é dedicado às boas práticas na construção de conteúdos 
                                                 que atendam aos requisitos de Acessibilidade.
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
                                                                font-roboto
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
                                                                font-roboto
                                                                text-[16px]
                                                                not-italic
                                                                font-normal
                                                                leading-[normal]
                                                                tracking-[0.15px]
                                                             `}>Pré-requisitos: Ter Pré-requisitos:  Ter concluído o intermediário ou através de prova de conhecimento específico.</p>              
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
                                                                  `}
                                                                  aria-label="Tenho interesse em Módulo Avançado"
                                                                  onClick={() => redirectToLink('moduloAvancado')}
                                                                  ><span className='text-center
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
                                                          <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                          <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                            Ferramentas de verificação da qualidade do código durante o 
                                                            desenvolvimento -  plataformas Web (Desktop) e Mobile (nativo/WebView)
                                                            em Android e iOS
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                       `}>
                                                              Componentes nativos e elementos customizados
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
                                                                     <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true"/>
                                                                    <p className={`${darkTheme ? "text-dark" : "text-light"}
                                                                        no-ligatures
                                                                        font-roboto
                                                                        text-[14px]
                                                                        not-italic
                                                                        font-normal
                                                                        leading-[normal]
                                                                        tracking-[0.25px]
                                                                        `}>
                                                              Aprofundamento em propriedades Wai-Aria e Roles
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