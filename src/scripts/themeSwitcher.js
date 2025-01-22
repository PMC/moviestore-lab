export const switchTheme = () => {
    document.getElementById("themeSwitch")?.addEventListener("change", (event) => {
        const htmlElement = document.documentElement;
        const target = event.target;
        target.checked
          ? htmlElement.removeAttribute("data-theme")
          : htmlElement.setAttribute("data-theme", "dark");
      });
  };