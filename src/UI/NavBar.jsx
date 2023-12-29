import { useEffect, useState } from "react";
import { GitIcon, LinkedinIcon } from "../icons";
import { useTranslation } from "react-i18next";

import flameLogo from "/assets/FlameLogo.png";
import sun from "/assets/sun_switch.png";
import moon from "/assets/moon_switch.png";



export const NavBar = () => {

  const { i18n } = useTranslation();
  const [onEnglish, setonEnglish] = useState(true)
  
  const [darkSwitch, setdarkSwitch] = useState(false)
  useEffect(() => {
    if (darkSwitch) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkSwitch])
  
  const onDarkMode = () => {
    if (!darkSwitch) return setdarkSwitch(true);
    return setdarkSwitch(false);
  }

  const changeLanguage = () => {
    if ( onEnglish ) {
      i18n.changeLanguage("es");
      setonEnglish(false);
    } else {
      i18n.changeLanguage("en");
      setonEnglish(true);
    }
    
  };

  return (
    <nav className="flex px-20 py-6 justify-between items-center fixed w-full">
      <img className="w-16 " src={flameLogo} alt="" />
      <div className="flex gap-8 items-center">
        <button onClick={ changeLanguage } className="text-2xl font-bold font-poppins text-gray-700/90 bg-white/50 rounded-lg py-1 px-2 shadow-lg hover:scale-110 transition dark:text-white">
          { onEnglish ? 'EN' : 'ES'}
        </button>
        <button
          onClick={onDarkMode}
          className={`group w-[126px] h-16 rounded-full border-white shadow-xl flex items-center border-2 hover:scale-105 transition-all ${
            darkSwitch
              ? "bg-gradient-to-r from-purple-950 from-40% to-orange-500 to-100%"
              : "bg-gradient-to-l from-orange-500 from-30% to-purple-950 to-100%"
          }`}
        >
          <img
            className={`m-1 transition-all duration-200 ease-out ${
              darkSwitch ? "w-10" : "w-12 translate-x-16"
            }`}
            src={`${darkSwitch ? moon : sun}`}
            alt="switch"
          />
        </button>
      </div>
      <aside className="fixed top-48 left-2 pl-20 flex flex-col gap-2 items-center ">
        <button className="group bg-gray-800 rounded-lg p-2 shadow-lg hover:bg-white hover:scale-110 transition-transform ">
          <GitIcon
            className={"w-7 fill-white group-hover:fill-black transition-color"}
          />
        </button>
        <button className="group bg-gray-800 rounded-lg p-1 shadow-lg hover:bg-white hover:scale-110 transition-transform">
          <LinkedinIcon
            className={
              "w-9 fill-white group-hover:fill-blue-500 transition-color"
            }
          />
        </button>
      </aside>
    </nav>
  );
}
