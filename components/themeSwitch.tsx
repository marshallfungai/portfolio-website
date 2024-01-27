"use client";


import React, { useEffect, useLayoutEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type ThemeSwitchProps = "light" | "dark";

export default function ThemeSwitch() {
  
  const [theme, setTheme] = useState<ThemeSwitchProps>('light');  

  const toggleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add('dark');
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove('dark');
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeSwitchProps | null;
    if(localTheme){
      // document.documentElement.classList.add(localTheme as ThemeSwitchProps);
        setTheme(localTheme as ThemeSwitchProps);
        if(localTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        setTheme('dark');
        document.documentElement.classList.add('dark');
    } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
    }
    
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 bg-slate-300 w-[4rem] h-[4rem] bg-opacity-60 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all "
       onClick={toggleTheme}
    >
        
      {theme === "light" ? <BsSun className="text-yellow-700"/>  : <BsMoon />}
    </button>
  );
}