"use strict";
import HomeView from "../views/HomeView";
import CrewView from "../views/CrewView";
import TechnologyView from "../views/TechnologyView";
import DestinationView from "../views/DestinationView";
import View404 from "../views/View404";

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

export const router = async () => {
  const pageRoutes = [
    { path: "/", view: HomeView },
    { path: "/crew", view: CrewView },
    { path: "/technology", view: TechnologyView },
    { path: "/destination", view: DestinationView },
    { path: "/404", view: View404 },
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
  console.log(match);
  let view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHtml();
};
