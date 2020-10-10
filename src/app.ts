import { LitElement, customElement, html, css } from "lit-element";

@customElement('litify-app')
export class LitifyApp extends LitElement {
  static get styles(){
    return css`
      litify-player-controls {
        grid-column-start: col-1;
        grid-column-end: span 3;
        grid-row-start: row-3;
        grid-row-end: row-3;
      }
    `
  }
  render() {
    return html`
      <h1>LitifyApp</h1>
      <litify-player-controls></litify-player-controls>
    `
  }
}