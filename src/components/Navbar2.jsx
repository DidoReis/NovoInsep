// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import styles from '../styles'
import { useSelector } from 'react-redux';




import {navLinks} from "../constants"


import Logo from "../assets/logo.svg"
import InsepLetters from "../assets/insep.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
/* import ALetter from "../assets/img/AALetter.svg"*/
import DarkLightButton from './dakrlightbutton' 

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  /*   */
  return (
    <div className={`flex justify-center items-center`}>
    <div className={`${styles.boxWidth}  `}>
    <header 
    className='navbar
               px-0 md:px-[32px] 
               flex 
               flex-row 
               items-center 
               content-between
               h-[72px] 
               sticky
               top-0 
             bg-zinc-900 
               shadow-[0px 24px 48px -12px rgba(16, 24, 40, 0.18)] 
               gap-[90px]'>
      {/* imagem logo */}
      <div className="img flex items-center shrink-0 w-[171px] h-[46px] ">
        <img src={Logo} alt="Logotipo Insep" className='w-[52px] h-[46px] shrink-0'/>
        <img src={InsepLetters} alt="Insep - Instituto Socioesportivo ParAtleta" className='w-[101.93px] h-[27.96px] ml-[17.06px] shrink-0' />
      </div>
      
          {/* Menu and buttons */}
          <nav className='menu hidden sm:flex  justify-end items-center flex-1'>


          <ul className='nav-links list-none sm:flex hidden justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
                      nav-item
                      w-full md:w-[139px]  
                      h-[51px]
                      p-4 
                      flex
                      flex-col 
                      content-center 
                      items-center 
                      gap-2
                      font-poppins
                      text-[10px] md:text-[16px]
                      font-medium 
                      leading-normal
                      text-white
                      
                      ${index === navLinks.length - 1 ? 'mr-0' : 'mr-0'}`}
                      role='none'
                >
                  <a className='' href={`#${nav.id}`} aria-label={`Link para ${nav.title}`}>{nav.title}</a>
                </li>
              ))}
          </ul>
            {/* Aa button */} 
             {/*  <div 
              className="buttonAa 
              
              flex 
              w-[67.3px] 
              h-[51px] 
              px-[8px] 
              py-[16px] 
              flex-col 
              content-center 
              items-center 
              gap-[10px]">
                <button 
                  className="increase-font 
                  flex 
                  items-center 
                  content-center 
                  flex-row
                  w-[35.3px] h-[16.8px] "
                  >
                    <img 
                    src={ALetter} 
                    alt="Botão para aumentar a fonte"
                    className='w-[35.3px] h-[16.8px] flex' />
                  </button>
            </div> */}
              <div 
              className="
              flex 
              w-[61px] 
              h-[51px] 
              px-[8px] 
              flex-row 
              content-center
              
              items-center 
              gap-[10px] 
              ">
                <div className=" darkOrLightButton
                     flex ml-[6px] 
                     w-[45px] 
                     h-[25px] 
                     justify-end 
                     content-center 
                     items-center 
                     shrink-0 ">
                      {/* DarkLightButton */}
                  <DarkLightButton/> 
                </div>
              </div>
      </nav>

      {/* Mobile Menu */}          
      <div className="mobile-menu sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu mobile"
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle((prev) => !prev)}
        tabIndex="0"
        aria-label='Menu Mobile'
        aria-expanded={toggle}
        />
        <nav aria-hidden={!toggle} className={`${toggle ? 'flex' : 'hidden'} mobile-menu-content pr-0 
          bg-[#313033] absolute top-[70px] items-center self-stretch 
          right-0 min-w-[290px] min-h-[51px] sidebar`} >
            <ul className='nav-links list-none flex flex-col justify-end items-center flex-1' >
            {/*<li className='flex gap-8'>{`${darkTheme ? "modo escuro" : "modo claro"}`}<DarkLightButton/></li> */}
              {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className=
                {`nav-item
                font-lexend 
                font-normal 
                no-ligatures
                leading-[normal]
                tracking-[0.15px]
                cursor-pointer 
                text[16px] 
                ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}
                text-white`}
                role='none'
                >
                  <a href={`#${nav.id}`} role='menuItem' >
                    {nav.title}
                  </a>
                  <div className="divider border-b border-[#938F99] w-[290px]  mt-4"></div>
                </li>
                
              ))}
              
            </ul>
          </nav>
      </div>
      </header>
      </div>
    </div>  
  )
}

export default Navbar


