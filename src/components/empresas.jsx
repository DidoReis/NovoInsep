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
                                
                               `}><h1 className='font-roboto 
                                                 text-[24px] 
                                                 not-italic 
                                                 font-medium 
                                                 leading-[32px]'
                                    >Onde nossos alunos trabalham</h1>
                </div>
                <div className={`${darkTheme ? "text-dark" : "text-light" } 
                                empresas
                                w-[360px] md:w-[1128px]
                                h-[590px] md:h-[397.26483px]
                                md:ml-[156px]
                                inline-flex md:flex
                                justify-center md:justify-start
                                items-center
                                content-center
                                flex-wrap
                                
                                mt-[32px]
                               `}>
                    <div className="groupLogos 
                                    w-[345px] md:w-[1128px]
                                    md:h-[397.265px]
                                    
                                    justify-center md:justify-start
                                    items-center
                                    content-center
                                    flex 
                                    md:flex-row
                                    flex-wrap
                                    gap-[48px] md:gap-0" >           
                    <img 
                    src={darkTheme ? SantanderDark : SantanderLight} 
                    alt="Banco Santander" 
                    className='w-[158px] md:w-[238px]
                               h-[28px] md:h-[41.465px]
                               md:mb-[98.53px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? NttDark : NttLight} 
                    alt="Nttdata" 
                    className='w-[139px] md:w-[200px]
                               h-[23px] md:h-[32.502px]
                               md:ml-[100px]
                               md:mb-[91.5px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? itauDark : itauLight} 
                    alt="Banco Itau" 
                    className='w-[66px] md:w-[100px]
                               h-[67px] md:h-[101.163px]
                               md:ml-[145px]
                               md:mb-[33.84px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? PortoDark : PortoLight} 
                    alt="Porto Seguro" 
                    className='w-[86px] md:w-[120px]
                               h-[87px] md:h-[120.876px]
                               md:ml-[185px]
                               md:mb-[45.12px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? BradescoDark : BradescoLight} 
                    alt="do Bradesco" 
                    className='w-[179px] md:w-[238px]
                               h-[34px] md:h-[44.698px]
                               md:mb-[115.3px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? IfoodDark : IfoodLight} 
                    alt="Ifood" 
                    className='w-[97px] md:w-[140px]
                               h-[51px] md:h-[73.985px]
                               md:ml-[130px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? PwcDark : PwcLight} 
                    alt="Pwc" 
                    className='w-[107px] md:w-[150px]
                               h-[81px] md:h-[113px]
                               md:ml-[150px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? SerasaDark : SerasaLight} 
                    alt="Serasa Experian" 
                    className='w-[142px] md:w-[200px]
                               h-[61px] md:h-[86px]
                               md:ml-[120px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? DrogasilDark : DrogasilLight} 
                    alt="Farmácia Drogasil" 
                    className='w-[161px] md:w-[238px]
                               h-[31px] md:h-[45.773px]
                               
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? IBMDark : IBMLight} 
                    alt="Ibm" 
                    className='w-[90px] md:w-[130px]
                               h-[36px] md:h-[52.051px]
                               md:ml-[135px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? PicpayDark : PicpayLight} 
                    alt="Picpay " 
                    className='w-[145px] md:w-[190px]
                               h-[36px] md:h-[46.686px]
                               md:ml-[135px]
                               flex-shrink-0'/>
                    <img 
                    src={darkTheme ? CarrefourDark : CarrefourLight} 
                    alt="Carrefour" 
                    className='w-[84px] md:w-[120px]
                               h-[67px] md:h-[96.265px]
                               md:ml-[140px]
                               flex-shrink-0'/>
                    </div> 
                    

                </div>
            </section>
        </div>    
    </div>
  )
}

export default Empresas