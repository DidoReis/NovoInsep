// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "../styles";
import { useSelector } from "react-redux";

import { navLinks } from "../constants";

import Logo from "../assets/logo.svg";
import InsepLetters from "../assets/insep.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
/* import ALetter from "../assets/img/AALetter.svg"*/
import DarkLightButton from "./dakrlightbutton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkCLick = (index) => {
    setActiveLink(index);
  };

  /*   */
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`${styles.boxWidth}  `}>
        <header
          className={`navbar
          ${darkTheme ? "bg-zinc-900" : "bg-light-footer"}
          px-0 md:px-[32px] ipad:px-[32px] ipadV:px-[32px]
          flex 
          flex-row 
          items-center 
          content-between
          h-[72px] 
          sticky
          top-0 
        
          shadow-[0px 24px 48px -12px rgba(16, 24, 40, 0.18)] 
          gap-[90px]`}
        >
          {/* imagem logo */}
          <div className="img flex items-center shrink-0 w-[171px] h-[46px] ">
            <img
              src={Logo}
              alt="Insep"
              className="w-[52px] h-[46px] shrink-0"
            />
            <img
              src={InsepLetters}
              aria-hidden="true"
              alt="Insep"
              className="w-[101.93px] h-[27.96px] ml-[17.06px] shrink-0"
            />
          </div>

          {/* Menu and buttons */}
          <nav className="menu hidden sm:flex  justify-end items-center flex-1 ">
            <ul className="nav-links list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
                  
                      nav-item
                      w-full md:w-[139px]  ipadV:w-[84px]
                      h-[51px]
                      p-4 
                      flex
                      flex-col 
                      content-center 
                      items-center 
                      gap-2
                      font-roboto
                      text-[10px] md:text-[16px] ipadV:text-[16px]
                      font-medium 
                      leading-normal
                      text-white
                      ${index === activeLink ? "active" : ""}
                      ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
                  role="none"
                >
                  <a
                    className="group"
                    href={`#${nav.id}`}
                    aria-label={`${nav.title}`}
                    onClick={() => handleLinkCLick(index)}
                  >
                    
                   <span className={`group-hover:text-[#FEAC39]`}>{nav.title}</span> 
                  </a>
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
              "
            >
              <div
                className=" darkOrLightButton
                     flex ml-[6px] ipad:ml-[6px] 
                     w-[45px] 
                     h-[25px] 
                     justify-end 
                     content-center 
                     items-center 
                     shrink-0 
                     "
                     
              >
                {/* DarkLightButton */}
                <DarkLightButton />
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="mobile-menu sm:hidden flex flex-1 justify-end items-center p-1">
            <img
              src={toggle ? close : menu}
              alt="menu mobile"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
              tabIndex="0"
              aria-label="Menu Mobile"
              aria-expanded={toggle}
            />
            <nav
              aria-hidden={!toggle}
              className={`sidebar ${
                toggle ? "flex" : "hidden"
              } mobile-menu-content
         flex min-h-[51px] pr-[0] items-center self-stretch min-w-[290px] bg-[#313033] top-20 absolute`}
            >
              <ul className="flex flex-col">
                <li className="h-[51px] p-4 flex pr-0 items-center gap-[85px] self-stretch ">
                  <a className="flex 
                                gap-[85px]
                                w-[133px]
                                font-roboto
                                text-[16px]
                                text-center
                                not-italic
                                font-normal
                                leading-[normal]
                                tracking-[0.15px]
                                no-ligatures
                                text-white
                                " href="#">{darkTheme ? "Modo escuro" : "Modo claro"}
                 
                  </a>
                  <DarkLightButton className='w-[56px]'/>
                </li>
                <div className="border-solid border-b-[1px] border-[#938F99] w-[290px]"></div>
                <li className="h-[51px] flex p-4 pr-0 items-center gap-[85px] self-stretch">
                  <a className="flex 
                                gap-[85px]
                                w-[133px]
                                font-roboto
                                text-[16px]
                                text-center
                                not-italic
                                font-normal
                                leading-[normal]
                                tracking-[0.15px]
                                no-ligatures
                                text-white
                                " href="#">Blog</a>
                </li>
                <div className="border-solid border-b-[1px] border-[#938F99] w-[290px]"></div>
                <li className="h-[51px] flex p-4 pr-0 items-center gap-[85px] self-stretch">
                  <a className="flex 
                                gap-[85px]
                                w-[133px]
                                font-roboto
                                text-[16px]
                                text-center
                                not-italic
                                font-normal
                                leading-[normal]
                                tracking-[0.15px]
                                no-ligatures
                                text-white
                                " href="#">WhatsApp</a>
                </li>
                <div className="border-solid border-b-[1px] border-[#938F99] w-[290px]"></div>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
