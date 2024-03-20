"use strict";
import TemplateView from "./TemplateView";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("MEET THE CREW");
  }
  async getHtml() {
    return `
        <h1>You are currently in the crew view</h1>
        `;
  }
}
