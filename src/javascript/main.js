"use strict";
import { router, navigateTo } from "./utilities/router";

const navContainer = document.querySelector(".nav__container");
const navElement = document.querySelector(".nav");
export const navListItems = document.querySelectorAll(".nav__list__item");
export const bodyEl = document.querySelector(".body");

let clicked;

navListItems.forEach((el) => {
  if (el.classList.contains(`${location.pathname.slice(1)}--nav`)) {
    el.classList.add("active");
  }
});

window.addEventListener("popstate", router);

const controlNav = (className) => {
  if (clicked.classList.contains(className)) {
    navContainer.classList.toggle("translate");
  }
};

export const selectActiveNav = (
  navListItems,
  clickedNavListItem,
  className = "active"
) => {
  navListItems.forEach((item) => {
    if (item !== clickedNavListItem) {
      item.classList.remove(className);
    }
  });
  clickedNavListItem.classList.add(className);
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    clicked = e.target;
    const clickedNavListItem = clicked.closest(".nav__list__item");

    if (clicked.closest("[data-link]")) {
      e.preventDefault();

      selectActiveNav(navListItems, clickedNavListItem);

      if (!navContainer.classList.contains("translate")) {
        navContainer.classList.add("translate");
      }

      navigateTo(clicked);
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
