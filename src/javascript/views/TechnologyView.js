"use strict";
import TemplateView from "./TemplateView";
import JSONData from "../../../data.json";
import launchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import launchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("SPACE LAUNCH 101");
  }
  async getHtml() {
    return `
          <section class="page">
            <h1 class="page__heading tech__heading"><span class="page__heading__number">03</span>Space Launch 101</h1>
            <section class="tech__section">
              <div class="tech__section__image-wrapper">
              <img src="${launchVehiclePortrait}" alt="" class="tech__section__image desktop">
                <img src="${launchVehicleLandscape}" alt="" class="tech__section__image mobile">
              </div>
              <section class="tech__section__main">
                <div class="tech__section__main__buttons">
                  <div class="tech__section__main__buttons__button active--circle" data-number="0">1</div>
                  <div class="tech__section__main__buttons__button" data-number="1">2</div>
                  <div class="tech__section__main__buttons__button" data-number="2">3</div>
                </div>
          
                <section class="page__main tech__section__main__content">
                  <h2 class="page__main__title tech__section__main__content__title">The terminology...</h2>
                  <p class="page__main__member-name tech__section__main__content__member-name">${JSONData.technology[0].name}</p>
                  <p class="page__main__desc tech__section__main__content__desc">${JSONData.technology[0].description}</p>
                </section>
              </section>
          
            </section>
          </section>
        `;
  }
}
