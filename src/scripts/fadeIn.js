export const applyFadeIn = () => {
    document.addEventListener("DOMContentLoaded", () => {
      const fadeInElement = document.querySelector(".fade-in");
      if (fadeInElement) {
        fadeInElement.classList.add("visible");
      }
    });
  };