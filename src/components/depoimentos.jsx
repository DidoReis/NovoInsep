// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../styles";
import { useSelector } from "react-redux";

const Depoimentos = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`${styles.boxWidth} flex items-center justify-center `}>
        <section
          className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                                    w-[358px] md:w-[1128px]
                                    h-[1467px] md:h-[506.74px]
                                    flex-shrink-0
                                   
                                    mt-[48px] md:mt-[128px]
                               `}
        >
            <div className={`${darkTheme ? "text-dark" : "text-light"}
                                boxTitle
                                w-[318px] 
                                h-[32px] 
                                
                            `}>
                <h1 className="title
                                             font-roboto
                                             text-[24px]
                                             not-italic
                                             font-medium
                                             leading-[32px]                   
                                             ">O que dizem nossos alunos...
                </h1>
            </div>
            <div className={`${darkTheme ? "text-dark" : "text-light"}
                                w-[358px] md:w-[1128px]
                                h-[1403px] md:h-[393px]
                                mt-[32px]
                                flex
                              
                                flex-col md:flex-row
                                items-start
                                gap-4 md:gap-6
                               
                            `}>
                {/* BOX 1 */}      
                <div className={`border-solid border-[1px] border-[#404040]
                                    w-[358px] md:w-[360px] h-[457px] p-4 rounded-[8px]
                                `}>          
                <div className="box1 ">
                    <div className="depoimento w-[328px] h-[360px] ">
                        <p className="
                                     font-roboto
                                     text-[16px]
                                     not-italic
                                     font-medium
                                     leading-[24px]
                                     tracking-[0.55px]
                                     "  
                        
                        >“O INSEP foi a minha porta de entrada para o mundo da acessibilidade 
                            digital. Cursei os módulos básico e intermediário, que me capacitaram 
                            para testar páginas web, aplicativos das plataformas iOS e Android.
                             Construí um bom networking durante as dinâmicas de grupo, onde conheci 
                             alunos que se tornaram grandes profissionais no cenário atual da 
                             acessibilidade digital. Em agosto de 2023 completarei 2 anos atuando 
                             na área tech. Já trabalhei com contratos bancários, clientes do setor 
                             de e-commerce, dentre outros. O INSEP foi o ponto de partida e sou grato 
                             por isso!”</p>
                    </div>
                    <div className="name w-[326px] h-[49px] mt-[16px]">
                        <span className="font-roboto
                                         text-[18px]
                                         not-italic
                                         font-bold
                                         leading-[24px]
                                        ">Jonas Fernandes <br />
                              <span className="text-[16px] font-medium">Analista de Testes na Keeggo</span>
                        </span>
                    </div>
                </div>
                </div>
                {/* BOX 2 */} 
                <div className={`border-solid border-[1px] border-[#404040]
                                    w-[358px] md:w-[360px] h-[433px] md:h-[457px] p-4 rounded-[8px]`}>
                <div className={`
                                box2 
                               `}>
                    <div className="depoimento w-[328px] h-[336x] ">
                    <p className="
                                     font-roboto
                                     text-[16px]
                                     not-italic
                                     font-medium
                                     leading-[24px]
                                     tracking-[0.55px]
                                     "  
                     
                        >“O curso superou minhas expectativas em 
                        conhecer mais sobre a Acessibilidade Digital,
                         mais especificamente sobre o mapeamento do nível de 
                         conformidade (WCAG 2.1). Eu atuava profissionalmente em 
                         outra área e estava em processo de transição de carreira. 
                         Não conhecia nada sobre o tema, e através da indicação de uma 
                         colega conheci o INSEP. O curso foi essencial para dar um upgrade 
                         na minha carreira de TI e acessibilidade digital. Gostei muito dos 
                         professores, eles são grandemente atenciosos, pacientes e habilidosos.”</p>
                    </div>
                    <div className="name w-[326px] h-[49px] flex  mt-[16px] md:mt-[40px]">
                    <span className="font-roboto
                                         text-[18px]
                                         not-italic
                                         font-bold
                                         leading-[24px]
                                         self-stretch
                                        ">Daniela Cury <br />
                                        <span className="text-[16px] font-medium">Analista de Qualidade TI no Itaú Unibanco</span>
                      </span>
                    </div>
                </div>
                </div>
                {/* BOX 3 */}
                <div className={`border-solid border-[1px] border-[#404040]
                                    w-[358px] md:w-[360px] h-[457 px] p-4 rounded-[8px]`}> 
                <div className="box3 ">
                    <div className="depoimento w-[326px] h-[360px] ">
                    <p className="
                                     font-roboto
                                     text-[16px]
                                     not-italic
                                     font-medium
                                     leading-[24px]
                                     tracking-[0.55px]
                                     "  
                        >“Sempre senti um grande entusiasmo pelo tema acessibilidade. 
                        Pesquisei outros cursos, mas vi mais do mesmo: professores 
                        visuais, turmas sem Pcd’s e aulas sem recursos de acessibilidade. 
                        Por indicação de um colega cego, cheguei ao INSEP e encontrei ali 
                        um grande diferencial. Aulas ministradas por uma dupla fera com grande 
                        conhecimento técnico e empatia, além das turmas serem diversas e inclusivas. 
                        Foi uma grande experiência, aprendi a me colocar no lugar do outro e hoje 
                        tento ao máximo criar designs mais acessíveis à todas as pessoas”.</p>
                    </div>
                    <div className="name w-[326px] md:w-[328px] h-[73px] md:h-[49px] mt-[16px]">
                    <span className="font-roboto
                                         text-[18px]
                                         not-italic
                                         font-bold
                                         leading-[24px]
                                        ">Gui Neptune <br />
                                        <span className="text-[16px] font-medium">Especialista de UX Design na Serasa Experian</span>
                      </span>
                    </div>
                </div>
                </div>


            </div>
        </section>
      </div>
    </div>
  );
};

export default Depoimentos;
