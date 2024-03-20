"use strict";
import TemplateView from "./TemplateView";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("404 not found");
  }
  async getHtml() {
    return `
        <h1>404 not found</h1>
        `;
  }
}
