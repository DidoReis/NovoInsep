// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../styles";
import { useSelector } from "react-redux";

import Flavio from "../assets/flavio.png"
import Mauricio from "../assets/mauricio.png"
import Andressa from "../assets/andressa.png"

const Equipe = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const redirectToLinkedIn = (profile) => {
    const linkedinLinks = {
      Flavio: 'https://www.linkedin.com/in/flaviorscorreia/',
      Mauricio: 'https://www.linkedin.com/in/mauricio-pereiro/',
      Andressa : "https://www.linkedin.com/",
    };

    if (linkedinLinks[profile]) {
      window.open(linkedinLinks[profile], '_blank')
    }
  }
  
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`${styles.boxWidth} flex items-center justify-center `}>
        <section
          className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                                    mt-[48px] md:mt-[128px]
                                    w-[358px] md:w-[1128px]
                                    h-[auto]
                                    flex-shrink-0
                                    
                               `}
        >
          <div className="TitleBox w-[318.36017px] ">
            <h2
              className={`${darkTheme ? "text-dark" : "text-light"}
                                 font-roboto
                                 text-[24px]
                                 not-italic
                                 font-medium
                                 leading-[32px]   
                                `}
            >Equipe Insep
            </h2>
          </div>
          {/* Box Interna */}
          <div className="internBox 
                          w-[358px] 
                          h-[auto] 
                          flex-shrink-0 
                          md:flex
                          md:gap-6
                          mt-[32px]
                         
                           ">

                {/* Box Flavio */}            
              <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                              ${darkTheme ? "bg-dark-secondary" : "bg-light-secondary"}
                              box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)
                              flavioBox 
                              flex 
                              flex-col 
                              w-[358px] 
                              h-[500px]
                              mb-[16px]
                              items-start
                              rounded-[24px]
                              `}>
                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                        headerBox
                                        w-[358px]
                                        h-[140px]
                                        p-[16px]
                                        flex
                                        gap-[19.34px]
                                     `}>
                                        <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                        boxImg
                                                        w-[100.313px]
                                                        h-[100.313px]
                                                        flex-shrink-0
                                                        rounded-[100%]
                                                        
                                                       `}>
                                            <img className={`${darkTheme}
                                                              border-solid border-[3px] rounded-[inherit] border-white  
                                                           `}src={Flavio} alt=""/></div>
                                          <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                            w-[203px]
                                                            h-[108px]
                                                            
                                                            flex
                                                            flex-col
                                                            items-start
                                                            gap-1
                                                         `}>
                                                <h3 className="self-stretch
                                                               font-roboto
                                                               text-[16px]
                                                               not-italic
                                                               font-black
                                                               leading-[24px]
                                                               tracking-[0.5px] 
                                                              " >Flavio Correia</h3>
                                                <span className="font-roboto
                                                                 text-[14px]
                                                                 not-italic
                                                                 font-medium
                                                                 leading-[20px]
                                                                 tracking-[0.25px]
                                                                ">Diretor Executivo e Professor</span>
                                                <div className={`}
                                                                w-[203px]
                                                                h-[56px]
                                                                
                                                               `}>
                                                    <button className={`
                                                                      ${darkTheme ? "bg-dark-button" : "bg-light-button"}
                                                                      ${darkTheme ? "text-seguirDark" : "text-seguirLight"}
                                                                      ${darkTheme ? "hover:bg-dark-hoverDark" : "hover:bg-light-hoverLight"}
                                                                        w-[187px]
                                                                        h-[40px]
                                                                        flex
                                                                        mt-[16px]
                                                                        rounded-[100px]
                                                                        justify-center
                                                                        items-center
                                                                        cursor-pointer
                                                                      `}
                                                                      onClick={() => redirectToLinkedIn('Flavio')}>
               
                                                                      <span className="no-ligatures
                                                                                        font-lexend
                                                                                        text-[14px]
                                                                                        not-italic
                                                                                        font-medium
                                                                                        leading-[normal]
                                                                                        tracking-[0.1px]
                                                                                       ">Seguir no linkedin</span></button>            
                                                </div>                
                                          </div>                 
                                      </div>          
                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                w-[358px]
                                                                h-[360px]
                                                                p-[24px]
                                                                
                                                               `}><p className="no-ligatures
                                                                                font-lexend
                                                                                text-[16px]
                                                                                not-italic
                                                                                font-normal
                                                                                leading-[24px]
                                                                                tracking-[0.5px]
                                                                                self-stretch
                                                                               ">Graduado em Musicoterapia, pós-graduado em 
                                                                Governança de TI pela UNICAMP e graduando em 
                                                                Administração pela Universidade Estácio de Sá. 
                                                                Mais de 10 anos de atuação como especialista 
                                                                em Acessibilidade Digital,  trabalhando em grandes 
                                                                instituições financeiras como Itaú Unibanco e Pic Pay. <br />
                                                                Hoje trabalha como Program Manager Acessibility Specialist, 
                                                                além de ser professor universitário e consultor e paratleta.</p></div>    
              </div>

                {/* Box Mauricio */}
                <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                              ${darkTheme ? "bg-dark-secondary" : "bg-light-secondary"}
                              box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)
                              flavioBox 
                              flex 
                              flex-col 
                              w-[358px] 
                              h-[500px]
                              mb-[16px]
                              items-start
                              rounded-[24px]
                              `}>
                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                        headerBox
                                        w-[358px]
                                        h-[140px]
                                        p-[16px]
                                        flex
                                        gap-[19.34px]
                                     `}>
                                        <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                        boxImg
                                                        w-[100.313px]
                                                        h-[100.313px]
                                                        flex-shrink-0
                                                        rounded-[100%]
                                                        
                                                       `}>
                                            <img className={`${darkTheme}
                                                              border-solid border-[3px] rounded-[inherit] border-white  
                                                           `}src={Mauricio} alt=""/></div>
                                          <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                            w-[203px]
                                                            h-[108px]
                                                            
                                                            flex
                                                            flex-col
                                                            items-start
                                                            gap-1
                                                         `}>
                                                <h3 className="self-stretch
                                                               font-roboto
                                                               text-[16px]
                                                               not-italic
                                                               font-black
                                                               leading-[24px]
                                                               tracking-[0.5px] 
                                                              " >Maurício Pereiro</h3>
                                                <span className="font-roboto
                                                                 text-[14px]
                                                                 not-italic
                                                                 font-medium
                                                                 leading-[20px]
                                                                 tracking-[0.25px]
                                                                ">Professor</span>
                                                <div className={`}
                                                                w-[203px]
                                                                h-[56px]
                                                                
                                                               `}>
                                                    <button className={`
                                                                      ${darkTheme ? "bg-dark-button" : "bg-light-button"}
                                                                      ${darkTheme ? "text-seguirDark" : "text-seguirLight"}
                                                                      ${darkTheme ? "hover:bg-dark-hoverDark" : "hover:bg-light-hoverLight"}
                                                                        w-[187px]
                                                                        h-[40px]
                                                                        flex
                                                                        mt-[16px]
                                                                        rounded-[100px]
                                                                        justify-center
                                                                        items-center
                                                                        cursor-pointer
                                                                      `}
                                                                      onClick={() => redirectToLinkedIn('Mauricio')}>
               
                                                                      <span className="no-ligatures
                                                                                        font-lexend
                                                                                        text-[14px]
                                                                                        not-italic
                                                                                        font-medium
                                                                                        leading-[normal]
                                                                                        tracking-[0.1px]
                                                                                       ">Seguir no linkedin</span></button>            
                                                </div>                
                                          </div>                 
                                      </div>          
                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                w-[358px]
                                                                h-[360px]
                                                                p-[24px]
                                                                
                                                               `}><p className="no-ligatures
                                                                                font-lexend
                                                                                text-[16px]
                                                                                not-italic
                                                                                font-normal
                                                                                leading-[24px]
                                                                                self-stretch
                                                                               ">Graduado em Ciências da Computação, com pós-graduação em 
                                                                               Gestão de Centrais de Atendimento e em Processos de Negócios. 
                                                                               Mais de 30 anos de experiência profissional, <br /> sendo 24 anos no 
                                                                               segmento bancário e 09 anos em consultoria. Atua na <br /> elicitação 
                                                                               de requisitos técnicos, funcionais, negócios, acessibilidade e 
                                                                               identificação de processos críticos, pela modelagem e execução 
                                                                               de testes conforme regras de acessibilidade nacionais e internacionais.</p></div>    
              </div>

                {/* Andressa */}
                <div className={`border-solid border-[1px] ${darkTheme ? "border-dark-borderCard" : "border-light-borderCard"}
                              ${darkTheme ? "bg-dark-secondary" : "bg-light-secondary"}
                              box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)
                              flavioBox 
                              flex 
                              flex-col 
                              w-[358px] 
                              h-[500px]
                              
                              items-start
                              rounded-[24px]
                              `}>
                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                        headerBox
                                        w-[358px]
                                        h-[140px]
                                        p-[16px]
                                        flex
                                        gap-[19.34px]
                                     `}>
                                        <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                        boxImg
                                                        w-[100.313px]
                                                        h-[100.313px]
                                                        flex-shrink-0
                                                        rounded-[100%]
                                                        
                                                       `}>
                                            <img className={`${darkTheme}
                                                              border-solid border-[3px] rounded-[inherit] border-white  
                                                           `}src={Andressa} alt=""/></div>
                                          <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                            w-[203px]
                                                            h-[108px]
                                                            
                                                            flex
                                                            flex-col
                                                            items-start
                                                            gap-1
                                                         `}>
                                                <h3 className="self-stretch
                                                               font-roboto
                                                               text-[16px]
                                                               not-italic
                                                               font-black
                                                               leading-[24px]
                                                               tracking-[0.5px] 
                                                              " >Andressa</h3>
                                                <span className="font-roboto
                                                                 text-[14px]
                                                                 not-italic
                                                                 font-medium
                                                                 leading-[20px]
                                                                 tracking-[0.25px]
                                                                ">Especialista em Inclusão</span>
                                                <div className={`}
                                                                w-[203px]
                                                                h-[56px]
                                                                
                                                               `}>
                                                    <button className={`
                                                                      ${darkTheme ? "bg-dark-button" : "bg-light-button"}
                                                                      ${darkTheme ? "text-seguirDark" : "text-seguirLight"}
                                                                      ${darkTheme ? "hover:bg-dark-hoverDark" : "hover:bg-light-hoverLight"}
                                                                        w-[187px]
                                                                        h-[40px]
                                                                        flex
                                                                        mt-[16px]
                                                                        rounded-[100px]
                                                                        justify-center
                                                                        items-center
                                                                        cursor-pointer
                                                                        
                                                                      `}
                                                                      onClick={() => redirectToLinkedIn('Andressa')}>
               
                                                                      <span className="no-ligatures
                                                                                        font-lexend
                                                                                        text-[14px]
                                                                                        not-italic
                                                                                        font-medium
                                                                                        leading-[normal]
                                                                                        tracking-[0.1px]
                                                                                       ">Seguir no linkedin</span></button>            
                                                </div>                
                                          </div>                 
                                      </div>          
                                      <div className={`${darkTheme ? "text-dark" : "text-light"}
                                                                w-[358px]
                                                                h-[360px]
                                                                p-[24px]
                                                                
                                                               `}><p className="no-ligatures
                                                                                font-lexend
                                                                                text-[16px]
                                                                                not-italic
                                                                                font-normal
                                                                                leading-[24px]
                                                                                
                                                                                self-stretch
                                                                               ">Graduada em Gestão de Recursos Humanos e 
                                                                               pós-graduada em Psicologia Organizacional. 
                                                                               Atua no Itau como Analista Comercial de fundos 
                                                                               de investimentos. Lidera grupos de afinidade de
                                                                               PCDs, favorecendo o protagonismo dos colaboradores
                                                                               com deficiência. É coordenadora do Núcleo de Desenvolvimento 
                                                                               e Capacitação Profissional no INSEP, apoiando os alunos em 
                                                                               projetos de ingresso e/ou transição de carreira para QA em 
                                                                               Acessibilidade Digital.</p></div>    
              </div>
              
          </div>
        </section>
      </div>
    </div>
  );
};

export default Equipe;
