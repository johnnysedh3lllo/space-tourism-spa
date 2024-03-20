"use strict";
import TemplateView from "./TemplateView";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("PICK YOUR DESTINATION");
  }
  async getHtml() {
    return `
        <h1>You are currently in the Destination view</h1>
        `;
  }
}
