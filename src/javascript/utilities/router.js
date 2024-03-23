"use strict";
import HomeView from "../views/HomeView";
import CrewView from "../views/CrewView";
import TechnologyView from "../views/TechnologyView";
import DestinationView from "../views/DestinationView";
import View404 from "../views/View404";
import { bodyEl, selectActiveNav } from "../main";
import JSONdata from "../../../data.json";

// CREW IMAGES
import commander from "../../assets/crew/image-douglas-hurley.webp";
import missionSpecialist from "../../assets/crew/image-mark-shuttleworth.webp";
import pilot from "../../assets/crew/image-victor-glover.webp";
import flightEngineer from "../../assets/crew/image-anousheh-ansari.webp";

// DESTINATION IMAGES
import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";

// TECHNOLOGY IMAGES
// desktop
import launchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import spacePortLandscape from "../../assets/technology/image-spaceport-landscape.jpg";

// mobile
import launchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import spacePortPortrait from "../../assets/technology/image-spaceport-portrait.jpg";

const crewImagePaths = {
  0: commander,
  1: missionSpecialist,
  2: pilot,
  3: flightEngineer,
};

const destinationImagePaths = {
  0: moon,
  1: mars,
  2: europa,
  3: titan,
};

const techMobileImagePaths = {
  0: launchVehicleLandscape,
  1: spacePortLandscape,
  2: spaceCapsuleLandscape,
};

const techDesktopImagePaths = {
  0: launchVehiclePortrait,
  1: spacePortPortrait,
  2: spaceCapsulePortrait,
};

const changeImage = (imageObject, imageNumber, imageElement) => {
  for (const key in imageObject) {
    if (key === imageNumber) {
      imageElement.src = `${imageObject[key]}`;
    }
  }
};

const changeBackground = (bodyElement, pageName) => {
  const bgClassName = [...bodyElement.classList].find((el) =>
    el.match(/bg-.[a-z]+/g)
  );

  bodyElement.classList.remove(`${bgClassName}`);
  bodyElement.classList.add(`bg-${pageName}`);
};

let mainApp;

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
  mainApp = document.querySelector("#app");
  mainApp.innerHTML = await view.getHtml();

  // TAB COMP NAV

  const tabCompNavList = mainApp.querySelector(".tab-comp__nav__list");
  tabCompNavList?.addEventListener("click", (event) => {
    event.preventDefault();
    const clickedTabCompNavListItem = event.target.closest(
      ".tab-comp__nav__list__item"
    );
    if (!clickedTabCompNavListItem) return;

    const tabCompNavListItems = document.querySelectorAll(
      ".tab-comp__nav__list__item"
    );

    selectActiveNav(tabCompNavListItems, clickedTabCompNavListItem);

    const clickedTabCompNavListItemNumber = clickedTabCompNavListItem
      .querySelector(".tab-comp__nav__list__item__link")
      .getAttribute("data-number");

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

    changeImage(
      destinationImagePaths,
      clickedTabCompNavListItemNumber,
      destinationImage
    );

    tabCompMainHeading.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].name}`;
    tabCompMainPar.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].description}`;
    tabCompSectDistancePar.forEach((el) => {
      el.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].distance}`;
    });
    tabCompSectTravelPar.forEach((el) => {
      el.textContent = `${JSONdata.destinations[clickedTabCompNavListItemNumber].travel}`;
    });
  });

  // CREw

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
    if (!clicked) return;

    selectActiveNav(crewSectionButtons, clicked, "active--dot");

    const clickedNumber = clicked.getAttribute("data-number");

    // elements to be updated
    const crewSectionImage = document.querySelector(".crew__section__image");

    const crewSectionMainContentTitle = document.querySelector(
      ".crew__section__main__content__title"
    );
    const crewSectionMainContentMemberName = document.querySelector(
      ".crew__section__main__content__member-name"
    );
    const crewSectionMainContentDesc = document.querySelector(
      ".crew__section__main__content__desc"
    );

    changeImage(crewImagePaths, clickedNumber, crewSectionImage);

    crewSectionMainContentTitle.textContent = `${JSONdata.crew[clickedNumber].role}`;
    crewSectionMainContentMemberName.textContent = `${JSONdata.crew[clickedNumber].name}`;
    crewSectionMainContentDesc.textContent = `${JSONdata.crew[clickedNumber].bio}`;
  });

  // CIRCLE
  const techSectionButtonsContainer = mainApp?.querySelector(
    ".tech__section__main__buttons"
  );

  const techSectionButtons = mainApp?.querySelectorAll(
    ".tech__section__main__buttons__button"
  );

  techSectionButtonsContainer?.addEventListener("click", (event) => {
    const clicked = event.target.closest(
      ".tech__section__main__buttons__button"
    );
    if (!clicked) return;

    selectActiveNav(techSectionButtons, clicked, "active--circle");

    const clickedNumber = clicked.getAttribute("data-number");

    // elements to be updated
    const techSectionDesktopImage = document.querySelector(
      ".tech__section__image.desktop"
    );
    const techSectionMobileImage = document.querySelector(
      ".tech__section__image.mobile"
    );

    const techSectionMainContentMemberName = document.querySelector(
      ".tech__section__main__content__member-name"
    );
    const techSectionMainContentDesc = document.querySelector(
      ".tech__section__main__content__desc"
    );

    changeImage(techDesktopImagePaths, clickedNumber, techSectionDesktopImage);
    changeImage(techMobileImagePaths, clickedNumber, techSectionMobileImage);

    techSectionMainContentMemberName.textContent = `${JSONdata.technology[clickedNumber].name}`;
    techSectionMainContentDesc.textContent = `${JSONdata.technology[clickedNumber].description}`;
  });
};

// export { mainApp };
