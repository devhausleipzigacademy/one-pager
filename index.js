document
  .querySelector("#collapse-mobile-navigation")
  .addEventListener("click", () => {
    document
      .querySelector("nav")
      .classList.remove("mobile-navigation-expanded");
  });
document
  .querySelector("#expand-mobile-navigation")
  .addEventListener("click", () => {
    document.querySelector("nav").classList.add("mobile-navigation-expanded");
  });
