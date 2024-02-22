import classNames from "classnames";
import { MoonStars, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";
import { Header } from "../Components/Header";
import { SubHeader } from "../Components/SubHeader";
import { Search } from "../Components/Search";
import { T1 } from "../Components/Titulos/T1";
import { T2 } from "../Components/Titulos/T2";
import { T6 } from "../Components/Titulos/T6";
import { T5 } from "../Components/Titulos/T5";
import { T4 } from "../Components/Titulos/T4";
import { T3 } from "../Components/Titulos/T3";
import { Footer } from "../Components/Footer";
import Cookies from 'js-cookie';

export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verifica se há um tema salvo nos cookies ou localStorage
    const savedTheme = Cookies.get("theme") || localStorage.getItem("theme");
    // Se houver um tema salvo, retorna true se for "dark", caso contrário, retorna false
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    Cookies.set("theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    <>
      <div className={classNames("flex items-center justify-end px-5 w-full h-10",{
        'bg-zinc-900':isDarkMode,
        'bg-zinc-50':!isDarkMode,
      })}>
        {isDarkMode ? (
          <SunDim
          onClick={toggleTheme}
          size={30}
          weight="fill"
          className={classNames("hover:scale-110 transition-all cursor-pointer",{
            'text-zinc-50':isDarkMode,
            'text-zinc-900':!isDarkMode,
          })}
        />
        ) : (
          <MoonStars 
          onClick={toggleTheme}
          size={30}
          weight="fill"
          className="hover:scale-110 transition-all cursor-pointer"
        />
        )}
      </div>
      <div
        className={classNames("w-screen h-screen",{
          "bg-zinc-900 text-zinc-50":isDarkMode,
          "bg-zinc-50":!isDarkMode,
        })}
      >
        <Header/>
        <SubHeader isDarkMode={isDarkMode} />
        <Search isDarkMode={isDarkMode}/>
        <T1 isDarkMode={isDarkMode} />
        <T2 />
        <T3 />
        <T4 />
        <T5 />
        <T6 />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}
