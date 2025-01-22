export const switchTheme = () => {
    const htmlElement = document.documentElement;
    const themeSvg = document.getElementById("themeSvg");
  
    const getInitialTheme = () =>
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  
    const setTheme = (theme) => {
      htmlElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    };
  
    setTheme(getInitialTheme());
  
    themeSvg?.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });
  };