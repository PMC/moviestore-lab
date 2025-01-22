export const applyFadeIn = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const fadeInElements = document.querySelectorAll(".fade-in");
      fadeInElements.forEach((element) => {
        if (!element.classList.contains("visible")) {
          element.classList.add("visible");
        }
      });
    });
  };