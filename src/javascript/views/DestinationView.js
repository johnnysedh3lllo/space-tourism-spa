"use strict";
import TemplateView from "./TemplateView";
import JSONdata from "../../../data.json";

import moon from "../../assets/destination/image-moon.webp";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Pick Your Destination");
  }
  async getHtml() {
    return `
          <section class="page destination">
            <h1 class="page__heading destination__heading"><span class="page__heading__number destination__heading__number">01</span>Pick your destination</h1>
            <section class="destination__section">
              <div class="destination__section__image-wrapper">
                <img src="${moon}" alt="" class="destination__section__image">
              </div>
              <section class="tab-comp">
                <nav class="tab-comp__nav">
    
              <ul class="tab-comp__nav__list">
                  <li class="tab-comp__nav__list__item active">
                    <a href="" class="tab-comp__nav__list__item__link" data-number="0">Moon</a>
                    <div class="after"></div>
                  </li>
            
                  <li class="tab-comp__nav__list__item">
                    <a href="" class="tab-comp__nav__list__item__link" data-number="1">Mars</a>
                    <div class="after"></div>
                  </li>
            
                  <li class="tab-comp__nav__list__item">
                    <a href="" class="tab-comp__nav__list__item__link" data-number="2">Europa</a>
                    <div class="after"></div>
                  </li>
            
                  <li class="tab-comp__nav__list__item">
                    <a href="" class="tab-comp__nav__list__item__link" data-number="3">Titan</a>
                    <div class="after"></div>
                  </li>
               </ul>


                
                </nav>

                <div class="tab-comp__main ">
                  <h2 class="tab-comp__main__heading">${JSONdata.destinations[0].name}</h2>
                  <p class="tab-comp__main__par">${JSONdata.destinations[0].description}</p>
                </div>

                <hr class="hr--body">

                <div class="tab-comp__section">

                  <section class="tab-comp__section__content">
                    <h3 class="tab-comp__section__content__heading">Avg. Distance</h3>
                    <p class="tab-comp__section__content__par distance">${JSONdata.destinations[0].distance}</p>
                  </section>

                  <section class="tab-comp__section__content">
                    <h3 class="tab-comp__section__content__heading">Est. Travel Time</h3>
                    <p class="tab-comp__section__content__par travel">${JSONdata.destinations[0].travel}</p>
                  </section>

                </div>
              </section>

            </section>
          </section>
        `;
  }
}