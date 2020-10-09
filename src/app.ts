import { LitElement, customElement, html } from "lit-element";

@customElement('litify-app')
export class LitifyApp extends LitElement {
  render() {
    return html`
      <h1>LitifyApp</h1>
    `
  }
}