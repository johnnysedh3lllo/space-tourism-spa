"use strict";
import { router, navigateTo } from "./utilities/router";

// const nav = document.querySelector(".nav");
// const app = document.getElementById("app");
// const btnMenu = document.querySelector(".btn--menu");
// const btnClose = document.querySelector(".btn--close");
const navContainer = document.querySelector(".nav__container");
const navElement = document.querySelector(".nav");
const navListItems = document.querySelectorAll(".nav__list__item");
let clicked;

window.addEventListener("popstate", router);

const controlNav = (className) => {
  if (clicked.classList.contains(className)) {
    navContainer.classList.toggle("translate");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    clicked = e.target;
    const clickedNavListItem = clicked.closest(".nav__list__item");

    if (clicked.closest("[data-link]")) {
      e.preventDefault();

      navListItems.forEach((item) => {
        if (item !== clickedNavListItem) {
          item.classList.remove("active");
        }
      });

      clickedNavListItem.classList.add("active");

      if (!navContainer.classList.contains("translate")) {
        navContainer.classList.add("translate");
      }
      navigateTo(clicked.href);
    }
  });
  router();
});

navElement.addEventListener("click", (e) => {
  clicked = e.target.closest(".btn");

  if (!clicked) return;
  controlNav("btn--menu");
  controlNav("btn--close");
});
