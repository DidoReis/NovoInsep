// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../styles";
import { useSelector } from "react-redux";

import CheckDark from "../assets/checkDark.svg";
import CheckLight from "../assets/checkLight.svg";

const Modulos = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const redirectToLink = (link) => {
    const links = {
      moduloBasico:
        "https://api.whatsapp.com/send?phone=551133847284&text=Tenho%20interesse%20no%20treinamento%20m%C3%B3dulo%20B%C3%A1sico",
      moduloIntermediario:
        "https://api.whatsapp.com/send?phone=551133847284&text=Tenho%20interesse%20no%20treinamento%20no%20m%C3%B3dulo%20intermedi%C3%A1rio",
      moduloAvancado:
        "https://api.whatsapp.com/send?phone=551133847284&text=Tenho%20interesse%20no%20treinamento%20no%20m%C3%B3dulo%20avan%C3%A7ado",
    };
    if (links[link]) {
      window.open(links[link], "_blank");
    }
  };
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`${styles.boxWidth} flex items-center justify-center `}>
        <section
          id="modulos"
          className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                                w-[360px] md:w-[1440px]
                                h-[2148px] md:h-[748px]
                                flex-shrink-0
                                flex
                                flex-col 
                                
                                mt-[48px]   md:mt-[128px]
                                
                              `}
        >
          <div className="titleBox w-[260px] md:w-[538px] h-[32px] ">
            <h2
              className={`${darkTheme ? "text-dark" : "text-light"}
                                                  font-roboto
                                                  text-[24px]
                                                  md:ml-[156px]
                                                  not-italic
                                                  font-medium
                                                  leading-[32px]
                                                  
                                               `}
            >
              Conteúdo programático
            </h2>
          </div>

          {/* BOX MÓDULOS */}
          <div
            className="modulosBox
                                                w-[360px] md:w-[1127.66675px]
                                                h-[2084px] md:h-[612px]
                                                mt-[32px]
                                                flex-shrink-0
                                                md:flex
                                                md:flex-row
                                                md:gap-[16px]
                                                md:ml-[156px]
                                                
                                               "
          >
            {/* BOX 1 */} {/* Mudar o pixel para 1px na border */}
                <div className={`border-solid border-[4px] ${darkTheme ? "border-dark-borderCardCurso" /*"border-dark-borderCard"*/
                                 : "border-light-borderCardCurso" /*"border-light-borderCard"*/}
                                    rounded-[24px]
                                    w-[360px] md:w-[364.66666px]
                                    h-[684px] md:h-[612px]
                                    flex
                                    p-[24px]
                                    flex-col
                                    items-start
                                    gap-[30px]
                                    mb-[16px]
                                `}>
                                    {/* Title */}
                    <div className="title w-[177px] h-[28px] flex items-start ">
                        <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                                            no-ligatures
                                            font-roboto
                                            text-[24px]
                                            not-italic
                                            font-normal
                                            leading-[normal]
                                            tracking-[0.18px]
                                        `}>Módulo Básico</h2>
                    </div>
                    {/* Descrição do módulo */}
                        <div className={`${darkTheme ? "text-dark" : "text-light"}
                                        
                                        w-[316.66666px]
                                        h-[64px]
                                        `}>
                                <p className="no-ligatures
                                              font-roboto
                                              text-[14px]
                                              not-italic
                                              font-normal
                                              leading-[16px]
                                              tracking-[0.25px]
                                             ">O módulo básico destina-se a todos os públicos. Aqui você assimilará as 
                                    regras e os conceitos fundamentais para desenvolver uma ótima base sobre o tema.</p>
                        </div>
                        {/* Intro do Módulo */}
                        <div className={`${darkTheme ? "text-dark" : "text-light"}
                                         w-[316.66666px]
                                         h-[56px]
                                         flex
                                         flex-col
                                         items-start
                                         gap-[8px]
                                         self-stretch
                                        `}>
                                <h3 className="no ligatures
                                               font-roboto
                                               text-[14px]
                                               not-italic
                                               font-semibold
                                               leading-[normal]
                                               tracking-[0.25px]
                                               ">Carga horária: 30 horas</h3>
                                <p className="no-ligatures
                                              font-roboto
                                              text-[14px]
                                              not-italic
                                              font-bold
                                              leading-[normal]
                                              tracking-[0.25px]
                                              ">Pré-requisitos:  Acesso a computador, Ensino Médio completo e noções básicas de Excel. </p>
                        </div>
                         {/* Box detalhes */}
                         <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                
                                                w-[316.66666px]
                                                h-[256px]
                                                flex
                                                flex-col
                                                items-start
                                                gap-[16px]
                                                self-stretch
                                            `}>
                                <ul className="w-[316.66666px] flex flex-col gap-[16px] h-[256px] list-none ">
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Classificação das deficiências e suas implicações restritivas</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[48px]  "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Diferenças elementares entre acessibilidade e usabilidade em interfaces digitais</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Conhecimento das normas, leis e guias relacionados à acessibilidade</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[48px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Conhecimento da estrutura da WCAG, níveis de conformidade, princípios e requisitos</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Noções sobre tecnologias assistivas mais relevantes para testes</p>
                                    </li>
                                </ul>                
                         </div>
                         {/* Botão tenho interesse ou data da turma */}
                         <div className="button w-[316.66666px] flex flex-col h-[40px] ">
                                                <button className={`${darkTheme ? /* "bg-dark-button" */ "bg-dark-borderCardCurso" : /* "bg-light-button*/ "bg-light-borderCardCurso"}
                                                                    ${darkTheme ? "text-buttonLight"  /* "text-buttonDark" */ : "text-buttonLight"}
                                                                    ${darkTheme ? "hover:bg-light-hoverLight" /* "hover:bg-dark-hoverDark" */ : "hover:bg-light-hoverLight"}
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
                                                                                     '>Turma aberta 06/11/2023</span></button>
                                              </div>

                </div>
           {/* Box 2 */} {/* Mudar o pixel para 1px na border */}
           <div className={`border-solid border-[4px] ${darkTheme ? "border-dark-borderCardCurso" /*"border-dark-borderCard"*/
                                 : "border-light-borderCardCurso" /*"border-light-borderCard"*/}
                                    rounded-[24px]
                                    w-[360px] md:w-[364.66666px]
                                    h-[684px] md:h-[612px]
                                    flex
                                    p-[24px]
                                    flex-col
                                    flex-start
                                    gap-[30px]
                                    mb-[16px]
                                `}>
                    <div className="title w-[317px] h-[28px] flex items-start ">
                        <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                                            no-ligatures
                                            font-roboto
                                            text-[24px]
                                            not-italic
                                            font-normal
                                            leading-[normal]
                                            tracking-[0.18px]
                                        `}>Módulo Intermediário</h2>
                    </div>  
                    {/* Descrição do módulo */}
                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                       
                                        w-[316.66666px]
                                        h-[64px]
                                        `}>
                                <p className="no-ligatures
                                              font-roboto
                                              text-[14px]
                                              not-italic
                                              font-normal
                                              leading-[16px]
                                              tracking-[0.25px]
                                             ">Com foco na metodologia de aplicação da WCAG, iremos revisitar a norma de 
                                             uma forma mais direcionada, abordando informações sobre frameworks de implementação. </p>
                        </div>
                        {/* Intro do Módulo */}
                        <div className={`${darkTheme ? "text-dark" : "text-light"}
                                         w-[316.66666px]
                                         h-[56px]
                                         flex
                                         flex-col
                                         items-start
                                         gap-[8px]
                                         self-stretch
                                        `}>
                                <h3 className="no ligatures
                                               font-roboto
                                               text-[14px]
                                               not-italic
                                               font-semibold
                                               leading-[normal]
                                               tracking-[0.25px]
                                               ">Carga horária: 30 horas</h3>
                                <p className="no-ligatures
                                              font-roboto
                                              text-[14px]
                                              not-italic
                                              font-bold
                                              leading-[normal]
                                              tracking-[0.25px]
                                              ">Pré-requisitos: Ter concluído o básico ou através de prova de conhecimento específico.</p>
                        </div>
                         {/* Box detalhes */}
                         <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                
                                                w-[316.66666px]
                                                h-[256px]
                                                flex
                                                flex-col
                                                items-start
                                                gap-[16px]
                                                self-stretch
                                            `}>
                                    <ul className="w-[316.66666px] flex flex-col gap-[16px] h-[256px] list-none 0">
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[48px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Metodologia de avaliação de conformidade com os requisitos de acessibilidade </p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[48px]  "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Ferramentas de testes de acessibilidade para atendimento de situações específicas</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Práticas de mapeamento e reporte de defeitos</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Diferenças entre comportamentos dos componentes </p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Configurações mínimas recomendadas para testes (web e mobile)</p>
                                    </li>
                                </ul>             
                            </div>
                            {/* Botão tenho interesse ou data da turma */}
                         <div className="button w-[316.66666px] flex flex-col h-[40px] ">
                                                <button className={`${darkTheme ? /* "bg-dark-button" */ "bg-dark-borderCardCurso" : /* "bg-light-button*/ "bg-light-borderCardCurso"}
                                                                    ${darkTheme ? "text-buttonLight" /* "text-buttonDark" */ : "text-buttonLight"}
                                                                    ${darkTheme ? "hover:bg-light-hoverLight" /* "hover:bg-dark-hoverDark" */ : "hover:bg-light-hoverLight"}
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
                                                                  onClick={() => redirectToLink('moduloIntermediario')}
                                                                  ><span className='text-center
                                                                                      font-roboto
                                                                                      text-[16px]
                                                                                      not-italic
                                                                                      font-bold
                                                                                      leading-[20px]
                                                                                      tracking-[0.1px]
                                                                                     '>Turma aberta 07/11/2023</span></button>
                                              </div>
                            
                </div> 
           {/* Box 3 */} {/* Mudar o pixel para 1px na border */}
           <div className={`border-solid border-[1px] ${darkTheme ? /*"border-dark-borderCardCurso"*/ "border-dark-borderCard"
                                 : /*"border-light-borderCardCurso"*/ "border-light-borderCard"}
                                    rounded-[24px]
                                    w-[360px] md:w-[364.66666px]
                                    h-[684px] md:h-[612px]
                                    h-[684px] 
                                    flex
                                    p-[24px]
                                    flex-col
                                    flex-start
                                    gap-[30px]
                                `}>
                    <div className="title w-[317px] h-[28px] flex items-start ">
                        <h2 className={`${darkTheme ? "text-dark" : "text-light"}
                                            no-ligatures
                                            font-roboto
                                            text-[24px]
                                            not-italic
                                            font-normal
                                            leading-[normal]
                                            tracking-[0.18px]
                                        `}>Módulo Avançado</h2>
                    </div>               
                     {/* Descrição do módulo */}
                    <div className={`${darkTheme ? "text-dark" : "text-light"}
                                       
                                        w-[316.66666px]
                                        h-[64px]
                                        `}>
                                <p className="no-ligatures
                                              font-roboto
                                              text-[14px]
                                              not-italic
                                              font-normal
                                              leading-[16px]
                                              tracking-[0.25px]
                                             ">Exclusivo para profissionais da área tech, este módulo é dedicado às 
                                             boas práticas na construção de conteúdos que atendam aos requisitos de Acessibilidade.</p>
                        </div>
                        {/* Intro do Módulo */}
                        <div className={`${darkTheme ? "text-dark" : "text-light"}
                                         w-[316.66666px]
                                         h-[56px]
                                         flex
                                         flex-col
                                         items-start
                                         gap-[8px]
                                         self-stretch
                                        `}>
                                <h3 className="no ligatures
                                               font-roboto
                                               text-[14px]
                                               not-italic
                                               font-semibold
                                               leading-[normal]
                                               tracking-[0.25px]
                                               ">Carga horária: 30 horas</h3>
                                <p className="no-ligatures
                                              font-roboto
                                              text-[14px]
                                              not-italic
                                              font-bold
                                              leading-[normal]
                                              tracking-[0.25px]
                                              ">Pré-requisitos:  Ter concluído o intermediário ou através de prova de conhecimento específico.</p>
                        </div>
                        {/* Box detalhes */}
                            <div className={`${darkTheme ? "text-dark" : "text-light"}
                                               
                                                w-[316.66666px]
                                                h-[256px]
                                                flex
                                                flex-col
                                                items-start
                                                gap-[16px]
                                                self-stretch
                                            `}>
                                <ul className="w-[316.66666px] flex flex-col gap-[16px] h-[256px] list-none ">
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[64px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Ferramentas de verificação da qualidade do código durante o desenvolvimento -  
                                                 plataformas Web (Desktop) e Mobile (nativo/WebView) em Android e iOS</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px]  "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Características do desenvolvimento de interfaces digitais</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Semântica, estado e função dos elementos</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Componentes nativos e elementos customizados</p>
                                    </li>
                                    <li className="flex items-start gap-[16px] self-stretch w-[316.66666px] h-[32px] "> 
                                    <img src={darkTheme ? CheckDark : CheckLight} alt='Ilustração de Checklist' aria-hidden="true" className="w-[24px] h-[24px] " />
                                    <p className="no-ligatures
                                                  font-roboto
                                                  text-[14px]
                                                  not-italic
                                                  font-normal
                                                  leading-[normal]
                                                  tracking-[0.25px]
                                                 ">Aprofundamento em propriedades Wai-Aria e Roles</p>
                                    </li>
                                </ul>                  
                            </div>
                        {/* Botão tenho interesse ou data da turma */}
                        <div className="button w-[316.66666px] flex flex-col h-[40px] ">
                                                <button className={`${darkTheme ? "bg-dark-button" /* "bg-dark-borderCardCurso" */ : "bg-light-button" /* "bg-light-borderCardCurso" */}
                                                                    ${darkTheme ? "text-buttonDark" /* text-buttonLight */ : "text-buttonLight"}
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
                </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modulos;
