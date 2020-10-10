import { LitElement, customElement, html, css } from "lit-element";

@customElement('litify-app')
export class LitifyApp extends LitElement {
  static get styles(){
    return css`
      litify-navigation {
        grid-column-start: col-1;
        grid-row-start: row-1;
        grid-row-end: span 2;
      }
      litify-player-controls {
        grid-column-start: col-1;
        grid-column-end: span 3;
        grid-row-start: row-3;
      }
    `
  }
  render() {
    return html`
      <h1>LitifyApp</h1>
      <litify-navigation></litify-navigation>
      <litify-player-controls></litify-player-controls>
    `
  }
}