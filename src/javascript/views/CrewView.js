"use strict";
import TemplateView from "./TemplateView";
import JSONdata from "../../../data.json";
import commander from "../../assets/crew/image-douglas-hurley.webp";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Meet The Crew");
  }
  async getHtml() {
    return `
          <section class="page">
            <h1 class="page__heading"><span class="page__heading__number">02</span>Meet your crew</h1>
            <section class="crew__section">
              <div class="crew__section__image-wrapper">
                <img src="${commander}" alt="" class="crew__section__image">
              </div>
              <section class="crew__section__main">
                <div class="crew__section__main__buttons">
                  <div class="crew__section__main__buttons__button active--dot" data-number="0"></div>
                  <div class="crew__section__main__buttons__button" data-number="1"></div>
                  <div class="crew__section__main__buttons__button" data-number="2"></div>
                  <div class="crew__section__main__buttons__button" data-number="3"></div>
                </div>

                <section class="page__main crew__section__main__content">
                  <h2 class="page__main__title crew__section__main__content__title">${JSONdata.crew[0].role}</h2>
                  <p class="page__main__member-name crew__section__main__content__member-name">${JSONdata.crew[0].name}</p>
                  <p class="page__main__desc crew__section__main__content__desc">${JSONdata.crew[0].bio}</p>
                </section>
              </section>

            </section>
          </section>
        `;
  }
}
