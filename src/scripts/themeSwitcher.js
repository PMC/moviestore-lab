export const switchTheme = () => {
    const htmlElement = document.documentElement;
    const themeSwitch = document.getElementById("themeSwitch");

    const getInitialTheme = () =>
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

    const setTheme = (theme) => {
        htmlElement.setAttribute("data-theme", theme);
        if (themeSwitch) {
            themeSwitch.checked = theme === "light";
        }
        localStorage.setItem("theme", theme);
    };

    setTheme(getInitialTheme());

    themeSwitch?.addEventListener("change", (event) => {
        setTheme(event.target.checked ? "light" : "dark");
    });
};