import React, { useEffect } from 'react';

export const switchTheme = () => {
    const htmlElement = document.documentElement;
    const themeSvg = document.getElementById("themeSvg");
  
    const getCurrentTheme = () => htmlElement.getAttribute("data-theme");
  
    const setTheme = (theme) => {
      htmlElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    };
  
    themeSvg?.addEventListener("click", () => {
      const currentTheme = getCurrentTheme();
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  };

const ThemeSwitcher = () => {
  useEffect(() => {
    switchTheme();
  }, []);

  return null;
};

export default ThemeSwitcher;