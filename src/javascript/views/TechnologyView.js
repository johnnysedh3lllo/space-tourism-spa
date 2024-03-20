"use strict";
import TemplateView from "./TemplateView";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("SPACE LAUNCH 101");
  }
  async getHtml() {
    return `
        <h1>You are currently in the Technology view</h1>
        `;
  }
}
