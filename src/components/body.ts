import { css, customElement, html, LitElement } from "lit-element";

@customElement("litify-body")
export class Body extends LitElement {
  static get styles() {
    return css`
      section {
        padding: 3.2rem;
        height: 100%;
        overflow-y: auto;
      }
    `
  }
  render() {
    return html`
      <section>
        <litify-hero>Home</litify-hero>
      </section>
    `
  }
}