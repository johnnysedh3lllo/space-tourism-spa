"use strict";
import TemplateView from "./TemplateView";
export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Space Tourism");
  }
  async getHtml() {
    return `
      <header class="header">

        <section class="header__main">
            <h5 class="header__main__sub-head">So, you want to travel to</h5>
            <h1 class="header__main__head">Space</h1>
            <p class="header__main__par">
                Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!
            </p>
        </section>

        <button class="btn btn--header">Explore</button>
      </header>
        `;
  }
}
