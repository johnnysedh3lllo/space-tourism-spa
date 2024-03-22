"use strict";
import HomeView from "../views/HomeView";
import CrewView from "../views/CrewView";
import TechnologyView from "../views/TechnologyView";
import DestinationView from "../views/DestinationView";
import View404 from "../views/View404";
import { bodyEl, selectActiveNav } from "../main";
import JSONdata from "../../../data.json";

const changeBackground = (bodyElement, pageName) => {
  const bgClassName = [...bodyElement.classList].find((el) =>
    el.match(/bg-.[a-z]+/g)
  );

  bodyElement.classList.remove(`${bgClassName}`);
  bodyElement.classList.add(`bg-${pageName}`);
};

export const navigateTo = (clickedElement) => {
  history.pushState(null, null, clickedElement.href);

  router();
};

export const router = async () => {
  const pageRoutes = [
    { path: "/", view: HomeView, pageName: "home" },
    { path: "/home", view: HomeView, pageName: "home" },
    { path: "/crew", view: CrewView, pageName: "crew" },
    { path: "/technology", view: TechnologyView, pageName: "technology" },
    { path: "/destination", view: DestinationView, pageName: "destination" },
    { path: "/404", view: View404, pageName: "404" },
  ];

  const potentialMatches = pageRoutes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: pageRoutes.at(-1),
      isMatch: true,
    };
  }
  // new instance of the view class
  let view = new match.route.view();

  // changes the background for each page
  changeBackground(bodyEl, match.route.pageName);

  // renders the content for each page
  //by calling the "getHtml" function on each view class
  const mainApp = document.querySelector("#app");
  mainApp.innerHTML = await view.getHtml();

  const tabCompNavList = mainApp.querySelector(".tab-comp__nav__list");
  tabCompNavList?.addEventListener("click", (event) => {
    event.preventDefault();
    const clicked = event.target;
    if (!clicked) return;
    const tabCompNavListItems = document.querySelectorAll(
      ".tab-comp__nav__list__item"
    );
    const clickedTabCompNavListItem = clicked.closest(
      ".tab-comp__nav__list__item"
    );
    selectActiveNav(tabCompNavListItems, clickedTabCompNavListItem);

    const clickedTabCompNavListItemNumber =
      +clicked.getAttribute("data-number");

    // elements to be updated
    const destinationImage = mainApp.querySelector(
      ".destination__section__image"
    );
    const tabCompMainHeading = mainApp.querySelector(
      ".tab-comp__main__heading"
    );
    const tabCompMainPar = mainApp.querySelector(".tab-comp__main__par");

    const tabCompSectDistancePar = mainApp.querySelectorAll(
      ".tab-comp__section__content__par.distance"
    );

    const tabCompSectTravelPar = mainApp.querySelectorAll(
      ".tab-comp__section__content__par.travel"
    );

    destinationImage.src = `${JSONdata.destinations[clickedTabCompNavListItemNumber].images.webp}`;
    tabCompMainHeading.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].name}`;
    tabCompMainPar.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].description}`;
    tabCompSectDistancePar.forEach((el) => {
      el.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].distance}`;
    });
    tabCompSectTravelPar.forEach((el) => {
      el.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].travel}`;
    });
  });


  const crewSectionButtonsContainer = mainApp?.querySelector(
    ".crew__section__main__buttons"
  );

  const crewSectionButtons = mainApp?.querySelectorAll(
    ".crew__section__main__buttons__button"
  );

  crewSectionButtonsContainer?.addEventListener("click", (event) => {
    const clicked = event.target.closest(
      ".crew__section__main__buttons__button"
    );
    
    selectActiveNav(crewSectionButtons, clicked, "active--dot");
  });
};
