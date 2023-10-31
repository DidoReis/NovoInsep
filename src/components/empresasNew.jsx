// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../styles'
import { useSelector } from 'react-redux';

//logotipos Dark
import SantanderDark from "../assets/darkEmpresa/santander.png";
import NttDark from "../assets/darkEmpresa/nttdata.png";
import itauDark from "../assets/darkEmpresa/itau.png";
import PortoDark from "../assets/darkEmpresa/porto.png";
import BradescoDark from "../assets/darkEmpresa/bradesco.png";
import IfoodDark from "../assets/darkEmpresa/ifood.png";
import PwcDark from "../assets/darkEmpresa/pwc.png";
import SerasaDark from "../assets/darkEmpresa/serasa.png";
import DrogasilDark from "../assets/darkEmpresa/drogasil.png";
import IBMDark from "../assets/darkEmpresa/ibm.png";
import PicpayDark from "../assets/darkEmpresa/picpay.png";
import CarrefourDark from "../assets/darkEmpresa/carrefour.png";

//logotipo Light
import SantanderLight from "../assets/lightEmpresa/Santander.png";
import NttLight from "../assets/lightEmpresa/NTT.png";
import itauLight from "../assets/lightEmpresa/itau.png";
import PortoLight from "../assets/lightEmpresa/porto.png";
import BradescoLight from "../assets/lightEmpresa/bradesco.png";
import IfoodLight from "../assets/lightEmpresa/ifood.png";
import PwcLight from "../assets/lightEmpresa/pwc.png";
import SerasaLight from "../assets/lightEmpresa/serasa.png";
import DrogasilLight from "../assets/lightEmpresa/drogasil.png";
import IBMLight from "../assets/lightEmpresa/ibm.png";
import PicpayLight from "../assets/lightEmpresa/picpay.png";
import CarrefourLight from "../assets/lightEmpresa/carrefour.png"


const Empresas = () => {
    const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`flex justify-center items-center`}>
        <div className={`${styles.boxWidth} flex items-center justify-center `}>
            <section className={`${darkTheme ? "bg-dark-primary" : "bg-light-primary"}
                                    w-[360px] md:w-[1440px]
                                    h-[654px] md:h-[459.26483px]
                                    flex-shrink-0
                                    
                                    mt-[48px] md:mt-[128px]
                               `}>
                <div className={`${darkTheme ? "text-dark" : "text-light"}
                                title
                                w-[333px] md:w-[538px]
                                h-[32px] md:h-[32px]
                                md:ml-[156px]
                                md:mb-[60px]
                                
                               `}><h2 className='font-roboto 
                                                 text-[24px] 
                                                 not-italic 
                                                 font-medium 
                                                 leading-[32px]'
                                    >Onde nossos alunos trabalham</h2>
                </div>
                <div className={`${darkTheme ? "text-dark" : "text-light" } 
                                empresas
                                w-[360px] md:w-[1128px]
                                h-[590px] md:h-[397.26483px]
                                md:ml-[156px]
                                inline-flex md:flex
                                justify-center md:justify-center
                                items-center
                                content-center
                                flex-wrap
                                border border-solid border-red-50
                                
                               `}>
                     <div className={`${darkTheme ? "text-dark" : "text-light" }
                                       w-[345px] md:w-[1128px] border border-solid border-red-300
                                       h-[163px] md:h-[117px] 
                                    `}>
                                    
                     </div>
                     <div className={`${darkTheme ? "text-dark" : "text-light" }
                                       w-[345px] md:w-[1088px] border border-solid border-red-300
                                       h-[163px] md:h-[120.87591px] 
                                    `}>
                                    
                     </div>
                     <div className={`${darkTheme ? "text-dark" : "text-light" }
                                       w-[345px] md:w-[1088px] border border-solid border-red-300
                                       h-[163px] md:h-[120.87591px] 
                                    `}>
                                    
                     </div>
                    

                </div>
            </section>
        </div>    
    </div>
  )
}

export default Empresas